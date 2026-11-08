const fs = require('fs');

const html = fs.readFileSync('scripts/atomik_raw.html', 'utf8');

// Let's inspect the main text content, structure, styles, classes, and layouts
const textBlocks = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<svg[\s\S]*?<\/svg>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 2);

// Deduplicate contiguous identical lines
const clean = [];
for (let i = 0; i < textBlocks.length; i++) {
  if (textBlocks[i] !== textBlocks[i-1]) clean.push(textBlocks[i]);
}

fs.writeFileSync('scripts/atomik_text.txt', clean.join('\n'));
console.log('Saved scripts/atomik_text.txt (' + clean.length + ' lines)');

