const fs = require('fs');

async function inspect() {
  console.log('Fetching https://atomikgrowth.com/ ...');
  const res = await fetch('https://atomikgrowth.com/');
  const html = await res.text();
  fs.writeFileSync('scripts/atomik_raw.html', html);
  console.log('Saved atomik_raw.html (' + html.length + ' bytes)');

  // Extract all headings
  const headings = [...html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m => ({
    level: 'H' + m[1],
    text: m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  })).filter(h => h.text.length > 0);

  console.log('\n=== ALL HEADINGS ===');
  headings.forEach(h => console.log(`${h.level}: ${h.text}`));

  // Extract all buttons and CTAs
  const buttons = [...html.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).filter(Boolean);
  console.log('\n=== BUTTONS ===');
  console.log([...new Set(buttons)]);

  // Extract sections or key text blocks
  const sections = [...html.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
  console.log('\n=== SECTION COUNT ===', sections.length);
}

inspect().catch(console.error);

