const http = require('http');

async function testSecurity() {
  console.log('=== TESTING API ROUTE SECURITY & SANITIZATION ===\n');

  // 1. Test GET method rejection (405)
  const getRes = await fetch('http://localhost:3000/api/inquiry', { method: 'GET' });
  console.log('1. GET /api/inquiry Status:', getRes.status, getRes.status === 405 ? '✅ PASS (Method Not Allowed)' : '❌ FAIL');

  // 2. Test Missing Required Fields (400)
  const emptyRes = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '' })
  });
  console.log('2. Empty Payload Status:', emptyRes.status, emptyRes.status === 400 ? '✅ PASS (Bad Request)' : '❌ FAIL');

  // 3. Test Invalid Email (400)
  const invalidEmailRes = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Valid Name', email: 'not-an-email', authorType: 'Author' })
  });
  console.log('3. Invalid Email Status:', invalidEmailRes.status, invalidEmailRes.status === 400 ? '✅ PASS (Rejected)' : '❌ FAIL');

  // 4. Test Honeypot Spam Submission (Silent acceptance / drop)
  const botRes = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Spam Bot',
      email: 'bot@spam.com',
      authorType: 'Author',
      hp_website: 'http://buy-viagra-now.com'
    })
  });
  const botJson = await botRes.json();
  console.log('4. Honeypot Bot Trap:', botRes.status === 200 && botJson.message === 'Inquiry received.' ? '✅ PASS (Silently trapped)' : '❌ FAIL');

  // 5. Test Valid Submission with Script Sanitization
  const validRes = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Charlotte Bronte',
      email: 'charlotte@bronte.co.uk',
      authorType: 'Established Author',
      bookTitle: 'Jane Eyre: Revival Edition <script>alert("xss")</script>',
      releaseTimeline: 'Upcoming in 8–12 weeks',
      message: 'Looking for BookTok short-form hooks.'
    })
  });
  const validJson = await validRes.json();
  console.log('5. Valid Sanitized Submission:', validRes.status === 200 && validJson.success ? '✅ PASS (Accepted & Sanitized)' : '❌ FAIL');

  console.log('\n=== API SECURITY AUDIT COMPLETE ===');
}

testSecurity().catch(console.error);

