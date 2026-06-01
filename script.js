/* ================================================
   GARZA & ASOCIADOS — script.js
================================================ */

/* ---- Header: scroll effect ---- */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ---- Menú hamburguesa (móvil) ---- */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  // Evita scroll del body mientras el menú está abierto
  document.body.style.overflow = open ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ---- FAQ accordion ---- */
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item     = btn.closest('.faq__item');
    const isOpen   = item.classList.contains('open');

    // Cierra todos los demás
    document.querySelectorAll('.faq__item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });

    // Abre o cierra el actual
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- Animaciones de entrada con Intersection Observer ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // solo animar una vez
    }
  });
}, { threshold: 0.12 });

// Aplicar clase reveal a elementos animables
const animatableSelectors = [
  '.service-card',
  '.why-card',
  '.industry-pill',
  '.testimonial-card',
  '.process-step',
  '.about__content',
  '.about__visual',
  '.contact__info',
  '.contact__form-wrapper',
  '.section__header',
  '.faq__item',
];

animatableSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    // Escalonamiento según posición dentro del grupo
    const delay = Math.min(i, 5);
    if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
    revealObserver.observe(el);
  });
});

/* ---- Año actual en el footer ---- */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Validación y envío del formulario (visual, sin backend) ---- */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Limpiar errores previos
    form.querySelectorAll('.form-input').forEach(input => input.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(err => (err.style.display = 'none'));

    // Validar nombre
    const name = form.querySelector('#name');
    if (!name.value.trim()) {
      showError(name, 'nameError');
      valid = false;
    }

    // Validar email
    const email = form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      showError(email, 'emailError');
      valid = false;
    }

    // Validar servicio
    const service = form.querySelector('#service');
    if (!service.value) {
      showError(service, 'serviceError');
      valid = false;
    }

    // Validar mensaje
    const message = form.querySelector('#message');
    if (!message.value.trim()) {
      showError(message, 'messageError');
      valid = false;
    }

    // Validar checkbox privacidad
    const privacy = form.querySelector('#privacy');
    if (!privacy.checked) {
      const errEl = document.getElementById('privacyError');
      if (errEl) errEl.style.display = 'block';
      valid = false;
    }

    if (valid) {
      // Simular envío: deshabilitar botón y mostrar éxito
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensaje';
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Ocultar mensaje de éxito después de 6 segundos
        setTimeout(() => { formSuccess.hidden = true; }, 6000);
      }, 1200);
    }
  });
}

function showError(inputEl, errorId) {
  inputEl.classList.add('error');
  const errEl = document.getElementById(errorId);
  if (errEl) errEl.style.display = 'block';
}

/* ---- Smooth scroll para anclas internas ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 8;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---- Nav link activo según sección visible ---- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'nav__link--active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
