const r = require('../qa-artifacts/ref-audit-390.json');
const l = require('../qa-artifacts/local-audit-390.json');
// Find footer section (last section with id/footer-cta)
const refFooter = r.sections.find(s => s.id && s.id.includes('footer')) || r.sections[r.sections.length-1];
const locFooter = l.sections.find(s => s.id && s.id.includes('footer')) || l.sections[l.sections.length-1];
function walk(s, d=0) {
  if (d > 5) return;
  if (s.box && s.box.h >= 4) {
    console.log(' '.repeat(d*2) + '[' + (s.tag||'') + (s.id?'#'+s.id:'') + '] y' + s.box.y + ' h' + s.box.h + ' w' + s.box.w + ' | ' + (s.text||'').slice(0,40).padEnd(40) + ' | cls:' + (s.cls||'').slice(0,70));
  }
  (s.subsections||[]).forEach(x => walk(x, d+1));
}
console.log('=== REF FOOTER (mobile) ==='); walk(refFooter);
console.log('=== LOCAL FOOTER (mobile) ==='); walk(locFooter);
