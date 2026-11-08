(() => {
  const results = {};
  // booking modal
  const modal = document.querySelector('[role="dialog"], [aria-modal="true"]');
  results.modalVisible = !!modal && getComputedStyle(modal).display !== 'none' && getComputedStyle(modal).visibility !== 'hidden';
  // FAQ accordion count
  results.faqButtons = document.querySelectorAll('button[aria-expanded]').length;
  // mobile hamburger
  results.hamburger = !!document.querySelector('button[aria-haspopup="menu"], [aria-label*="menu" i]');
  // console errors captured? (can't read past console here)
  return results;
})();
