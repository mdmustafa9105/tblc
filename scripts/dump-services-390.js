(() => {
  const sections = [...document.querySelectorAll('section')];
  const sec = sections.find((s) => s.id === 'services');
  if (!sec) return { error: 'no services', ids: sections.map(s=>s.id) };
  const out = [];
  function walk(el, depth) {
    if (depth > 10) return;
    const r = el.getBoundingClientRect();
    if (r.height < 6) return;
    const style = getComputedStyle(el);
    out.push({
      depth, tag: el.tagName.toLowerCase(), id: el.id||'',
      cls: String(el.className||'').slice(0,110),
      text: (el.childElementCount===0 ? (el.textContent||'').replace(/\s+/g,' ').trim().slice(0,40):''),
      y: Math.round(r.y+window.scrollY), h: Math.round(r.height), w: Math.round(r.width),
      display: style.display, gap: style.gap, grid: style.gridTemplateColumns,
      pad: style.padding, minH: style.minHeight,
    });
    [...el.children].forEach(c=>walk(c,depth+1));
  }
  walk(sec,0);
  return {out};
})();
