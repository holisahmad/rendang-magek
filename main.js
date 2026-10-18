/**
 * Rendang Magek — main.js
 * Lightweight, no-dependency interactions
 */

(function () {
  'use strict';

  /* ---- Nav: sticky shadow ---- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile menu toggle ---- */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll(
    '.produk__card, .ide__card, .pesan__step, .faq__item, ' +
    '.cerita__headline, .cerita__body, .hero__copy, ' +
    '.ide__header, .produk__header, .faq__kiri, .cta-penutup__ajakan'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      // Stagger siblings in a grid
      const parent = el.parentElement;
      const siblings = parent ? [...parent.children] : [];
      const idx = siblings.indexOf(el);
      if (idx > 0) {
        el.style.transitionDelay = `${idx * 0.08}s`;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /* ---- Smooth anchor scrolling with nav offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      // Skip bare "#" — hanya scroll ke top
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Active nav link highlight ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length) {
    const highlightNav = () => {
      const scrollY = window.scrollY + (nav ? nav.offsetHeight : 0) + 60;
      let current = '';
      sections.forEach(sec => {
        if (scrollY >= sec.offsetTop) current = sec.id;
      });
      navLinks.forEach(link => {
        const href = link.getAttribute('href').slice(1);
        link.style.color = href === current ? '#851F1C' : '';
        link.style.fontWeight = href === current ? '600' : '';
      });
    };
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  }

})();
