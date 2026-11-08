(() => {
  const walk = (root, depth) => {
    const rows = [];
    const rec = (el, d) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.replace(/\s+/g,' ').trim()).filter(Boolean).join(' ');
      rows.push({
        d,
        tag: el.tagName.toLowerCase(),
        box: [Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height)],
        bg: s.backgroundColor,
        color: s.color,
        font: s.fontFamily.split(',')[0].replace(/"/g,''),
        size: s.fontSize,
        weight: s.fontWeight,
        lh: s.lineHeight,
        ls: s.letterSpacing,
        pad: s.padding,
        radius: s.borderRadius,
        display: s.display,
        flex: s.flexDirection + ' ' + s.justifyContent + ' ' + s.alignItems,
        gap: s.gap,
        border: s.borderWidth + ' ' + s.borderColor,
        text: own.slice(0,160),
        cls: el.className.toString().slice(0,120)
      });
      for (const ch of el.children) rec(ch, d + 1);
    };
    rec(root, 0);
    return rows;
  };
  const out = {};
  for (const sel of ['#case-studies','#podcast','#faq','#footer-cta','footer','#companies-worked-with','header']) {
    const el = document.querySelector(sel);
    if (el) out[sel] = walk(el, 0);
  }
  return out;
})()
