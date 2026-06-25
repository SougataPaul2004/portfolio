/* =========================================================
   Skills tabs
   ========================================================= */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener('click', function () {
    const targetTab = this.getAttribute('data-tab');

    for (let j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove('is-active');
      tabButtons[j].setAttribute('aria-selected', 'false');
    }
    for (let k = 0; k < tabPanels.length; k++) {
      tabPanels[k].hidden = true;
    }

    this.classList.add('is-active');
    this.setAttribute('aria-selected', 'true');

    for (let k = 0; k < tabPanels.length; k++) {
      if (tabPanels[k].getAttribute('data-panel') === targetTab) {
        tabPanels[k].hidden = false;
      }
    }
  });
}

/* =========================================================
   Mobile menu toggle
   ========================================================= */
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* =========================================================
   Footer year
   ========================================================= */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================
   Stat counters — animate numbers up when scrolled into view
   ========================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const statNumbers = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || '';

  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 900;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(progress * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

if (statNumbers.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}