(() => {
  const sections = [...document.querySelectorAll('section')];
  const sec = sections.find((s) => (s.className || '').includes('bg-[#FAFAFA]'));
  if (!sec) return { error: 'no section', sections: sections.map((s) => s.className) };
  const out = [];
  function walk(el, depth) {
    if (depth > 9) return;
    const r = el.getBoundingClientRect();
    if (r.height < 8) return;
    const style = getComputedStyle(el);
    out.push({
      depth,
      tag: el.tagName.toLowerCase(),
      cls: String(el.className || '').slice(0, 140),
      text: (el.childElementCount === 0 ? el.textContent || '' : '').replace(/\s+/g, ' ').trim().slice(0, 60),
      y: Math.round(r.y + window.scrollY),
      h: Math.round(r.height),
      w: Math.round(r.width),
      display: style.display,
      gap: style.gap,
      gridCols: style.gridTemplateColumns,
      padding: style.padding,
    });
    [...el.children].forEach((c) => walk(c, depth + 1));
  }
  walk(sec, 0);
  return { out };
})();
