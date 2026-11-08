(() => {
  const sec = document.querySelector('#services');
  const rows = [];
  const walk = (el, depth) => {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    const s = getComputedStyle(el);
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.replace(/\s+/g,' ').trim()).filter(Boolean).join(' ');
    rows.push({
      d: depth,
      tag: el.tagName.toLowerCase(),
      cls: el.className.toString().slice(0,180),
      box: [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)],
      bg: s.backgroundColor,
      color: s.color,
      font: s.fontFamily.split(',')[0].replace(/"/g,''),
      size: s.fontSize,
      weight: s.fontWeight,
      lh: s.lineHeight,
      pad: s.padding,
      radius: s.borderRadius,
      display: s.display,
      flex: s.flexDirection + ' ' + s.justifyContent + ' ' + s.alignItems,
      gap: s.gap,
      border: s.borderWidth + ' ' + s.borderColor,
      text: own.slice(0,120)
    });
    for (const ch of el.children) walk(ch, depth + 1);
  };
  walk(sec, 0);
  return rows;
})()
