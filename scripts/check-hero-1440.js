const r = require('../qa-artifacts/ref-audit-1440.json');
const l = require('../qa-artifacts/local-audit-1440.json');
console.log('=== DESKTOP HEADINGS ===');
r.headings.forEach((h, i) => {
  const t = l.headings[i];
  const txt = (h.text || '').slice(0, 35).padEnd(35);
  console.log(txt, 'ref y', h.box.y, 'size', h.size, 'lh', h.lh, '| local y', t ? t.box.y : '-', 'size', t ? t.size : '-', 'lh', t ? t.lh : '-');
});
console.log('=== DESKTOP PARAGRAPHS (first 8) ===');
r.paragraphs.slice(0, 8).forEach((p, i) => {
  const t = l.paragraphs[i];
  const txt = (p.text || '').slice(0, 40).padEnd(40);
  console.log(txt, 'ref y', p.box.y, 'size', p.size, '| local y', t ? t.box.y : '-', 'size', t ? t.size : '-');
});
