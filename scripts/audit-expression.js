(() => {
  const out = {};
  const px = v => v;
  const cs = el => getComputedStyle(el);
  const box = el => { const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; };
  const txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 160);
  const info = el => {
    const s = cs(el);
    return {
      tag: el.tagName.toLowerCase(),
      text: txt(el),
      box: box(el),
      font: s.fontFamily,
      size: s.fontSize,
      weight: s.fontWeight,
      lh: s.lineHeight,
      ls: s.letterSpacing,
      color: s.color,
      bg: s.backgroundColor,
      radius: s.borderRadius,
      border: s.borderColor + ' ' + s.borderWidth,
      padding: s.padding,
      margin: s.margin,
      display: s.display,
      gap: s.gap,
      grid: s.gridTemplateColumns,
      align: s.textAlign,
      transform: s.transform,
      opacity: s.opacity,
      cls: (el.className || '').toString().slice(0, 250)
    };
  };
  out.viewport = { w: innerWidth, h: innerHeight, dpr: devicePixelRatio };
  out.body = info(document.body);
  out.sections = [...document.querySelectorAll('section')].map(s => ({ ...info(s), id: s.id, subsections: [...s.querySelectorAll(':scope > div, :scope > div > div')].slice(0,4).map(info) }));
  out.nav = (() => {
    const n = document.querySelector('nav');
    if (!n) return null;
    return { ...info(n), links: [...n.querySelectorAll('a,button')].map(info) };
  })();
  const pick = sel => [...document.querySelectorAll(sel)].map(info);
  out.headings = pick('h1,h2,h3,h4');
  out.paragraphs = pick('p').slice(0, 80);
  out.buttons = pick('section a[class*="rounded-full"], section button, nav a, nav button').slice(0, 60);
  out.faq = pick('#faq h2, #faq h3, #faq button, #faq [role="button"], #faq p, #faq li').slice(0, 60);
  out.footer = (() => { const f = document.querySelector('footer'); return f ? { ...info(f), children: [...f.querySelectorAll(':scope > div, :scope > div > div')].slice(0,10).map(info), links: [...f.querySelectorAll('a')].map(info) } : null; })();
  out.images = [...document.querySelectorAll('img')].slice(0,40).map(el => ({ src: el.currentSrc || el.src, alt: el.alt, box: box(el), radius: cs(el).borderRadius, objectFit: cs(el).objectFit }));
  out.media = [...document.querySelectorAll('video')].slice(0,20).map(el => ({ src: el.currentSrc, box: box(el), autoplay: el.autoplay, loop: el.loop }));
  out.fonts = [...new Set([...document.querySelectorAll('*')].map(e => cs(e).fontFamily))];
  out.colors = [...new Set([...document.querySelectorAll('*')].map(e => cs(e).backgroundColor + '|' + cs(e).color))].slice(0, 80);
  // services deep dive
  const svc = document.querySelector('#services');
  out.services = svc ? {
    ...info(svc),
    tree: [...svc.querySelectorAll('article, [class*="card"], [class*="Card"], ul > li, [class*="grid"] > div')].slice(0, 40).map(info)
  } : null;
  const stats = document.querySelector('#stats');
  out.stats = stats ? { ...info(stats), tree: [...stats.querySelectorAll('h2,h3,p,span,img,div[class*="grid"]')].slice(0,60).map(info) } : null;
  const cases = document.querySelector('#case-studies');
  out.cases = cases ? { ...info(cases), tree: [...cases.querySelectorAll('article, h2,h3,h4,p,img,video,a')].slice(0,80).map(info) } : null;
  const pod = document.querySelector('#podcast');
  out.podcast = pod ? { ...info(pod), tree: [...pod.querySelectorAll('h2,h3,p,img,video,audio,a,iframe')].slice(0,40).map(info) } : null;
  const cta = document.querySelector('#footer-cta');
  out.cta = cta ? { ...info(cta), tree: [...cta.querySelectorAll('h2,h3,p,img,a,button')].slice(0,40).map(info) } : null;
  return out;
})()
