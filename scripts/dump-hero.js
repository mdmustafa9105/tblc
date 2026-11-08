(() => {
  const sections = [...document.querySelectorAll('section')];
  const hero = sections[0];
  const out = [];
  function walk(el, depth) {
    if (depth > 8) return;
    const r = el.getBoundingClientRect();
    if (r.height < 5) return;
    const style = getComputedStyle(el);
    out.push({
      depth, tag: el.tagName.toLowerCase(),
      text: (el.childElementCount===0 ? (el.textContent||'').replace(/\s+/g,' ').trim().slice(0,45):''),
      y: Math.round(r.y+window.scrollY), h: Math.round(r.height),
      display: style.display, flexDir: style.flexDirection, jc: style.justifyContent,
      pt: style.paddingTop, pb: style.paddingBottom,
      cls: String(el.className||'').slice(0,95),
    });
    [...el.children].forEach(c=>walk(c,depth+1));
  }
  walk(hero,0);
  return { sectionY: Math.round(hero.getBoundingClientRect().y+window.scrollY), sectionH: Math.round(hero.getBoundingClientRect().height), out };
})();
