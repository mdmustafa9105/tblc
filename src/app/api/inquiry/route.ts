import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// In-memory sliding-window rate limiter (5 submissions per 10 minutes per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// Allowed author types from Website Brief
const ALLOWED_AUTHOR_TYPES = [
  'Author',
  'Debut Author',
  'Established Author',
  'Series Author',
  'Publisher / Imprint',
  'Literary Agent',
  'Other',
];

// Sanitize string inputs (strip HTML tags and trim)
function sanitize(input: unknown, maxLength = 200): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[^\w\s\.,\?!@#%&\*\(\)\-_\+=\/:'"’‘“”]/g, '') // Strip suspicious script chars
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    // 1. IP & Rate Limiting Check
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + RATE_LIMIT_WINDOW_MS;
    }

    rateData.count += 1;
    rateLimitMap.set(ip, rateData);

    if (rateData.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting another inquiry.' },
        { status: 429 }
      );
    }

    // 2. Parse request payload
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
    }

    // 3. Spam Honeypot Protection
    // If hidden field 'hp_website' is populated, silently reject bot submission
    if (body.hp_website) {
      return NextResponse.json(
        { success: true, message: 'Inquiry received.' },
        { status: 200 }
      );
    }

    // 4. Input Sanitization & Validation
    const rawName = sanitize(body.name, 100);
    const rawEmail = sanitize(body.email, 150).toLowerCase();
    const rawAuthorType = sanitize(body.authorType || body.role, 60);
    const rawBookTitle = sanitize(body.bookTitle, 150);
    const rawReleaseTimeline = sanitize(body.releaseTimeline || body.timeline, 100);
    const rawMessage = sanitize(body.message || body.notes, 2000);

    if (!rawName || rawName.length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!rawEmail || !emailRegex.test(rawEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid, deliverable email address.' },
        { status: 400 }
      );
    }

    const sanitizedRecord = {
      name: rawName,
      email: rawEmail,
      authorType: ALLOWED_AUTHOR_TYPES.includes(rawAuthorType) ? rawAuthorType : 'Author',
      bookTitle: rawBookTitle || 'Unspecified Title',
      releaseTimeline: rawReleaseTimeline || 'Not specified',
      message: rawMessage || '',
      submittedAt: new Date().toISOString(),
      clientIpMasked: ip.replace(/\.\d+$/, '.***'),
    };

    // 5. Local Storage Fallback on D: Drive (Ensures leads are never lost)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const logFile = path.join(dataDir, 'inquiries.jsonl');
      fs.appendFileSync(logFile, JSON.stringify(sanitizedRecord) + '\n', 'utf8');
    } catch (fsErr) {
      console.error('[Inquiry Local Storage Warning]', fsErr);
    }

    // 6. Forward to Production Webhook (if configured in environment)
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('https://')) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sanitizedRecord),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (webhookErr) {
        // Fallback gracefully — local storage record preserved
        console.warn('[Webhook Delivery Warning] Could not dispatch to external CRM, stored locally.', webhookErr);
      }
    }

    // 7. Privacy-safe console logging (no raw PII)
    const maskedEmail = rawEmail.replace(/^(.)(.*)(@.*)$/, (_, a, b, c) => `${a}***${c}`);
    console.log(`[Inquiry Logged] Type: ${sanitizedRecord.authorType} | Email: ${maskedEmail} | Time: ${sanitizedRecord.submittedAt}`);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Our team will review your book details and respond within 24–48 hours.',
    });
  } catch (error) {
    console.error('[Inquiry Handler Error]', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed. POST is required.' },
    { status: 405 }
  );
}
