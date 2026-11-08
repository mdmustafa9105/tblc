(() => {
  // Find the hero h1 / main heading and paragraph positions on Atomik reference
  const h1s = [...document.querySelectorAll('h1')].map(h => ({
    tag: 'h1', y: Math.round(h.getBoundingClientRect().y + window.scrollY),
    h: Math.round(h.getBoundingClientRect().height), text: (h.textContent || '').slice(0, 60)
  }));
  const sections = [...document.querySelectorAll('section')];
  const hero = sections[0];
  return {
    heroY: Math.round(hero.getBoundingClientRect().y + window.scrollY),
    heroH: Math.round(hero.getBoundingClientRect().height),
    h1s,
    bodyH: document.documentElement.scrollHeight,
    viewportH: window.innerHeight
  };
})();
