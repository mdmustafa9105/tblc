import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebooklaunchcompany.com'),
  title: {
    default: 'The Book Launch Company — The New-Media Launch Partner for Authors',
    template: '%s | The Book Launch Company',
  },
  description:
    'We turn book releases into cultural moments. Creative, social-first short-form video campaigns, author branding, and podcasts from the team behind @whynotnovels.',
  keywords: [
    'book launch marketing',
    'book marketing agency',
    'BookTok marketing for authors',
    'author podcast production',
    'author branding',
    'backlist revival',
    'short-form video for books',
  ],
  authors: [{ name: 'The Book Launch Company', url: 'https://thebooklaunchcompany.com' }],
  creator: 'The Book Launch Company',
  publisher: 'The Book Launch Company',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://thebooklaunchcompany.com',
    title: 'The Book Launch Company — Launch the book. Build the author.',
    description:
      'The new-media launch partner for authors: creative short-form video campaigns, author branding, and podcasts from the team behind @whynotnovels.',
    siteName: 'The Book Launch Company',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'The Book Launch Company — The New-Media Launch Partner for Authors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book Launch Company — Launch the book. Build the author.',
    description:
      'The new-media launch partner for authors: creative short-form video campaigns, author branding, and podcasts from the team behind @whynotnovels.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://thebooklaunchcompany.com/#organization',
      name: 'The Book Launch Company',
      url: 'https://thebooklaunchcompany.com/',
      logo: 'https://thebooklaunchcompany.com/favicon.svg',
      description:
        'The new-media launch partner for authors: creative short-form video campaigns, author branding, and podcasts from the team behind @whynotnovels.',
      founder: {
        '@type': 'Person',
        name: 'Ariba',
        jobTitle: 'Founder & Creative Director',
        sameAs: 'https://instagram.com/whynotnovels',
      },
      sameAs: [
        'https://instagram.com/whynotnovels',
        'https://tiktok.com/@whynotnovels',
        'https://youtube.com/@whynotnovels',
        'https://linkedin.com/company/the-book-launch-company',
      ],
      areaServed: 'Worldwide',
      knowsAbout: [
        'Book Marketing',
        'BookTok Campaign Management',
        'Author Podcast Production',
        'Author Personal Branding',
        'Short-form Video Strategy',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://thebooklaunchcompany.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How early should I get in touch before my release date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ideally 8 to 12 weeks before release to allow ARC seeding, cover reveal buzz, and launch-week preparation. We also operate fast-turnaround campaigns for books already released through our Backlist Revival service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with self-published authors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — indie authors, debut novelists, traditionally published authors across the Big 5, and specialized overseas publishers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you guarantee sales or bestseller status?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Honest answer: No ethical agency can guarantee algorithmic retail sales or specific bestseller rankings. What we guarantee is our work, tested creative hook execution, targeted reader reach, and transparent reporting.',
          },
        },
        {
          '@type': 'Question',
          name: 'What do you need from me as an author?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The book (or ARC), a short discovery call, and — for ongoing brand and podcast work — about an hour a week. For book launches, our team handles all scripting, editing, and creator coordination.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-coral selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

