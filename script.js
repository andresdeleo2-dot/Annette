/* ================================================
   CAPÍN CONSULTORES, S.C. — script.js
   Sin dependencias externas.
================================================ */

'use strict';

/* ---- Año actual en footer ---- */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Header: efecto scroll ---- */
const header = document.getElementById('header');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 48);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // ejecutar al cargar por si página empieza scrolleada

/* ---- Menú hamburguesa (móvil) ---- */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

function openNav(open) {
  nav.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => openNav(!nav.classList.contains('open')));

// Cerrar al hacer clic en un enlace del nav
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => openNav(false));
});

// Cerrar al hacer clic fuera del menú
document.addEventListener('click', e => {
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)) {
    openNav(false);
  }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) openNav(false);
});

/* ---- Smooth scroll para anclas internas ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 12;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---- Nav link activo según sección visible ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('nav__link--active', active);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObs.observe(s));

/* ---- Animaciones de entrada (Intersection Observer) ---- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ---- Validación y envío del formulario (visual) ---- */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Limpiar estado previo
    clearErrors();

    let valid = true;

    const name    = form.querySelector('#f-name');
    const email   = form.querySelector('#f-email');
    const message = form.querySelector('#f-message');
    const privacy = form.querySelector('#f-privacy');

    if (!name.value.trim()) {
      showError(name, 'err-name');
      valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRe.test(email.value.trim())) {
      showError(email, 'err-email');
      valid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'err-message');
      valid = false;
    }

    if (!privacy.checked) {
      const errEl = document.getElementById('err-privacy');
      if (errEl) errEl.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      // Hacer scroll al primer error
      const firstErr = form.querySelector('.error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Simular envío
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.classList.add('btn--loading');

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.classList.remove('btn--loading');
      form.reset();
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { formSuccess.hidden = true; }, 7000);
    }, 1400);
  });

  // Limpiar error al escribir
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errId = input.id.replace('f-', 'err-');
      const errEl = document.getElementById(errId);
      if (errEl) errEl.style.display = 'none';
    });
  });
}

function showError(inputEl, errId) {
  inputEl.classList.add('error');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.style.display = 'block';
}

function clearErrors() {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => (el.style.display = 'none'));
}

/* ---- Tooltips accesibles en área-items (mobile tap) ---- */
// En móvil, al tocar un área-item se previene navegación y muestra feedback visual
// (opcional: se puede ampliar para mostrar un modal con descripción del área)

/* ---- Prefetch de páginas de alianzas al hover ---- */
document.querySelectorAll('.alianza-card[href]').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const url = card.getAttribute('href');
    if (url && url.startsWith('http')) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    }
  }, { once: true });
});
