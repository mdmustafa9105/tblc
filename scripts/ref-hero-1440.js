const r = require('../qa-artifacts/ref-audit-1440.json');
function walk(s, d = 0) {
  if (d > 6) return;
  const txt = (s.text || '').replace(/\s+/g, ' ').trim().slice(0, 50);
  console.log(' '.repeat(d) + '[' + (s.tag || '') + '] y' + (s.box ? s.box.y : '?') + ' h' + (s.box ? s.box.h : '?') + ' w' + (s.box ? s.box.w : '?') + ' d:' + s.display + ' | ' + txt + ' | cls:' + (s.cls || '').slice(0, 60));
  (s.subsections || []).forEach(x => walk(x, d + 1));
}
console.log('REF HERO section y', r.sections[0].box.y, 'h', r.sections[0].box.h);
walk(r.sections[0]);
