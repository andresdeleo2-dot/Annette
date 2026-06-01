/* ================================================
   CAPÍN CONSULTORES, S.C. — script.js
   Sistema bilingüe ES / EN sin dependencias.
================================================ */

'use strict';

/* ================================================
   TRADUCCIONES
================================================ */
const translations = {

  es: {
    /* Navegación */
    'nav.about':     'Quiénes Somos',
    'nav.adn':       'Nuestro ADN',
    'nav.areas':     'Áreas de Práctica',
    'nav.team':      'Integrantes',
    'nav.alliances': 'Alianzas',
    'nav.contact':   'Contacto',

    /* Hero */
    'hero.badge':   'Firma de Abogados · México & París',
    'hero.tagline': 'Los más altos estándares de calidad en el marco jurídico de México y el extranjero',
    'hero.cta1':    'Áreas de práctica',
    'hero.cta2':    'Contactar ahora',
    'hero.pillar1': 'Profesionalismo',
    'hero.pillar2': 'Cobertura Internacional',
    'hero.pillar3': 'Servicio Integral',
    'hero.scroll':  'Conocer más',

    /* Quiénes somos */
    'qs.eyebrow':   'Quiénes Somos',
    'qs.title':     'Una firma con experiencia, visión y alcance global',
    'qs.lead':      'CAPÍN CONSULTORES S.C. es una Firma de Abogados con gran experiencia profesional que le permite brindar a sus clientes los más altos estándares de calidad y oportunidad en sus servicios, permitiendo con ello el desarrollo dentro del marco jurídico en México y en el extranjero, ayudándolos a posicionarse como empresas de clase mundial en los diferentes mercados en que se desarrollan.',
    'qs.sub':       'Nuestra filosofía está inspirada en valores éticos y de servicio, garantizando la confianza depositada por nuestros clientes.',
    'qs.p1.title':  'Profesionalismo',
    'qs.p1.text':   'Las áreas en las que la Firma desempeña sus actividades se encuentran dirigidas por profesionistas con estándares de conocimiento y probidad de primer nivel, los cuales han participado en distintos foros, tanto nacionales como internacionales, así como en la impartición de importantes cátedras en prestigiadas universidades.',
    'qs.p2.title':  'Servicio Integral',
    'qs.p2.text':   'Prestamos un servicio que comprende tanto los aspectos preventivos como los correctivos, frente a las necesidades particulares de nuestros clientes, asegurándoles estabilidad y anticipándonos a las posibles contingencias que pudieran surgir en la operación de sus negocios.',
    'qs.p3.title':  'Cobertura',
    'qs.p3.text':   'CAPÍN CONSULTORES, S.C. desempeña un papel importante y de gran influencia, tanto en México como en el extranjero, contando con una <strong>oficina en París, Francia</strong>, y diversas alianzas estratégicas con firmas independientes en la República Mexicana y alrededor del mundo.',

    /* ADN */
    'adn.eyebrow':  '02',
    'adn.title':    'Nuestro ADN',
    'adn.subtitle': 'Los principios que guían cada decisión y cada servicio que brindamos.',
    'adn.v1.title': 'Sinergia',
    'adn.v1.text':  'Con una eficiente comunicación y profunda colaboración, aprovechamos la experiencia de cada uno de nuestros integrantes en su correspondiente área de especialización, en favor de los requerimientos específicos de nuestros clientes.',
    'adn.v2.title': 'Vanguardia',
    'adn.v2.text':  'Estamos permanentemente actualizados, tanto en las reformas de ley y criterios judiciales, como en las innovaciones tecnológicas y de servicio, para ofrecer la mejor estrategia posible, brindando con ello la atención más completa y adecuada.',
    'adn.v3.title': 'Respuesta',
    'adn.v3.text':  'En todo momento, en horarios de oficina o fuera de ellos, estamos disponibles para atender los requerimientos de nuestros clientes y proponer una solución a sus problemas.',
    'adn.v4.title': 'Prontitud',
    'adn.v4.text':  'Llevamos cada asunto con la mayor agilidad posible, aprovechando al máximo todos los recursos a nuestro alcance para ofrecer un desempeño eficiente.',
    'adn.v5.title': 'Garantía',
    'adn.v5.text':  'Contamos con un Departamento de Representación del Cliente, al que se puede recurrir en caso de no haber quedado completamente satisfechos sus requerimientos.',

    /* Áreas */
    'areas.eyebrow':  '03',
    'areas.title':    'Áreas de Práctica',
    'areas.subtitle': 'Cobertura jurídica integral para cada necesidad de su empresa.',
    'areas.cta':      '¿No encuentra su área? <a href="#contacto" class="areas-cta__link">Contáctenos y evaluamos su caso</a>',
    'area.1':  'Arbitraje',
    'area.2':  'Administrativo',
    'area.3':  'Comercio Exterior',
    'area.4':  'Constitucional',
    'area.5':  'Contratación Pública',
    'area.6':  'Corporativo',
    'area.7':  'Energía',
    'area.8':  'Fiscal',
    'area.9':  'Internacional',
    'area.10': 'Laboral',
    'area.11': 'Litigio Civil y Mercantil',
    'area.12': 'Mediación',
    'area.13': 'Migratorio',
    'area.14': 'Salud',
    'area.15': 'Telecomunicaciones',
    'area.16': 'Propiedad Industrial',
    'form.area.other': 'Otra',

    /* Integrantes */
    'team.eyebrow':  '04',
    'team.title':    'Integrantes',
    'team.subtitle': 'Los socios fundadores de CAPÍN CONSULTORES, S.C. cuentan con suficiente experiencia en el mercado — una institución joven con amplia experiencia que tiene como finalidad comprender las necesidades específicas de cada uno de sus clientes para así obtener los mejores resultados.',
    'team.founder':  'Socio Fundador',
    'team.partner':  'Socio',
    'team.note':     'Las áreas en las que la Firma desempeña sus actividades se encuentran dirigidas por profesionistas con los más altos estándares de conocimiento y probidad, los cuales han participado en distintos foros, tanto nacionales como internacionales, así como en la impartición de importantes cátedras en distintas universidades.',

    /* Alianzas */
    'alliances.eyebrow':  '05',
    'alliances.title':    'Alianzas Estratégicas',
    'alliances.subtitle': 'Colaboramos con firmas de primer nivel en México y el mundo para ofrecer cobertura jurídica sin fronteras.',
    'alliances.ilf':  'Red internacional de despachos independientes',
    'alliances.hc':   'Especialistas en Derecho Laboral',
    'alliances.dca':  'Litigio Civil y Mercantil · Telecomunicaciones',
    'alliances.cr':   'Especialistas en Derecho Migratorio',

    /* Contacto */
    'contact.eyebrow':    '06',
    'contact.title':      'Contáctenos',
    'contact.lead':       'Favor de proporcionar sus datos y nos comunicaremos con usted a la brevedad.',
    'contact.addr.label': 'Dirección',
    'contact.phone.label':'Teléfono',
    'contact.intl.label': 'Presencia internacional',
    'contact.intl.value': 'México · París, Francia',
    'contact.call':       'Llamar',

    /* Formulario */
    'form.name':         'Nombre *',
    'form.name.ph':      'Su nombre completo',
    'form.company':      'Compañía',
    'form.company.ph':   'Nombre de su empresa',
    'form.email':        'Email *',
    'form.phone':        'Teléfono',
    'form.area':         'Área de interés',
    'form.area.ph':      'Seleccione un área…',
    'form.message':      'Mensaje *',
    'form.message.ph':   'Describa brevemente su asunto o consulta…',
    'form.privacy':      'He leído y acepto el',
    'form.privacy.link': 'Aviso de Privacidad',
    'form.submit':       'Enviar mensaje',
    'form.success':      '✓ Gracias por contactarnos. Le responderemos a la brevedad.',
    'form.err.name':     'Ingrese su nombre.',
    'form.err.email':    'Ingrese un email válido.',
    'form.err.message':  'Ingrese su mensaje.',
    'form.err.privacy':  'Acepte el aviso de privacidad.',

    /* Footer */
    'footer.firm':    'La Firma',
    'footer.intl':    '🌍 También en París, Francia',
    'footer.seeall':  'Ver todas →',
    'footer.consult': 'Enviar consulta',
    'footer.privacy': 'Aviso de Privacidad',
    'footer.rights':  'Todos los derechos reservados.',
  },

  en: {
    /* Navigation */
    'nav.about':     'About Us',
    'nav.adn':       'Our DNA',
    'nav.areas':     'Practice Areas',
    'nav.team':      'Our Team',
    'nav.alliances': 'Alliances',
    'nav.contact':   'Contact',

    /* Hero */
    'hero.badge':   'Law Firm · Mexico & Paris',
    'hero.tagline': 'The highest standards of quality within the legal framework of Mexico and abroad',
    'hero.cta1':    'Practice Areas',
    'hero.cta2':    'Contact Us',
    'hero.pillar1': 'Professionalism',
    'hero.pillar2': 'International Reach',
    'hero.pillar3': 'Full-Service',
    'hero.scroll':  'Learn more',

    /* About */
    'qs.eyebrow':   'About Us',
    'qs.title':     'A firm with experience, vision, and global reach',
    'qs.lead':      'CAPÍN CONSULTORES S.C. is a Law Firm with extensive professional experience that allows it to provide its clients with the highest standards of quality and timely service, enabling their development within the legal framework of Mexico and abroad, and helping them position themselves as world-class companies in the different markets where they operate.',
    'qs.sub':       'Our philosophy is inspired by ethical values and a commitment to service, guaranteeing the trust placed in us by our clients.',
    'qs.p1.title':  'Professionalism',
    'qs.p1.text':   'The practice areas of the Firm are led by professionals with first-class standards of knowledge and integrity, who have participated in various forums both nationally and internationally, as well as taught courses at prestigious universities.',
    'qs.p2.title':  'Full-Service',
    'qs.p2.text':   'We provide a service that covers both preventive and corrective aspects, addressing the specific needs of our clients, ensuring their stability and anticipating potential contingencies that may arise in their business operations.',
    'qs.p3.title':  'Coverage',
    'qs.p3.text':   'CAPÍN CONSULTORES, S.C. plays an important and influential role both in Mexico and abroad, with an <strong>office in Paris, France</strong>, and various strategic alliances with independent firms throughout Mexico and around the world.',

    /* DNA */
    'adn.eyebrow':  '02',
    'adn.title':    'Our DNA',
    'adn.subtitle': 'The principles that guide every decision and every service we provide.',
    'adn.v1.title': 'Synergy',
    'adn.v1.text':  'Through efficient communication and deep collaboration, we leverage the expertise of each of our team members in their respective areas of specialization to meet the specific needs of our clients.',
    'adn.v2.title': 'Cutting-Edge',
    'adn.v2.text':  'We remain permanently up to date on legislative reforms, judicial criteria, and technological and service innovations to offer the best possible strategy, providing the most comprehensive and appropriate attention to our clients.',
    'adn.v3.title': 'Responsiveness',
    'adn.v3.text':  'At all times, during or outside of office hours, we are available to address our clients\' needs and propose solutions to their problems.',
    'adn.v4.title': 'Promptness',
    'adn.v4.text':  'We handle every matter with the greatest agility possible, making the most of all available resources to deliver an efficient performance.',
    'adn.v5.title': 'Guarantee',
    'adn.v5.text':  'We have a Client Representation Department that can be contacted if the client\'s requirements have not been fully met.',

    /* Practice Areas */
    'areas.eyebrow':  '03',
    'areas.title':    'Practice Areas',
    'areas.subtitle': 'Comprehensive legal coverage for every business need.',
    'areas.cta':      'Can\'t find your area? <a href="#contacto" class="areas-cta__link">Contact us and we\'ll evaluate your case</a>',
    'area.1':  'Arbitration',
    'area.2':  'Administrative',
    'area.3':  'Foreign Trade',
    'area.4':  'Constitutional',
    'area.5':  'Public Procurement',
    'area.6':  'Corporate',
    'area.7':  'Energy',
    'area.8':  'Tax',
    'area.9':  'International',
    'area.10': 'Labor',
    'area.11': 'Civil & Commercial Litigation',
    'area.12': 'Mediation',
    'area.13': 'Immigration',
    'area.14': 'Healthcare',
    'area.15': 'Telecommunications',
    'area.16': 'Industrial Property',
    'form.area.other': 'Other',

    /* Team */
    'team.eyebrow':  '04',
    'team.title':    'Our Team',
    'team.subtitle': 'The founding partners of CAPÍN CONSULTORES, S.C. bring extensive market experience — a young institution with broad expertise whose goal is to understand the specific needs of each client in order to achieve the best possible results.',
    'team.founder':  'Founding Partner',
    'team.partner':  'Partner',
    'team.note':     'The practice areas of the Firm are led by professionals with the highest standards of knowledge and integrity, who have participated in various national and international forums, as well as taught courses at different universities.',

    /* Alliances */
    'alliances.eyebrow':  '05',
    'alliances.title':    'Strategic Alliances',
    'alliances.subtitle': 'We collaborate with top-tier firms in Mexico and around the world to provide seamless cross-border legal coverage.',
    'alliances.ilf':  'International network of independent law firms',
    'alliances.hc':   'Labor Law specialists',
    'alliances.dca':  'Civil & Commercial Litigation · Telecommunications',
    'alliances.cr':   'Immigration Law specialists',

    /* Contact */
    'contact.eyebrow':    '06',
    'contact.title':      'Contact Us',
    'contact.lead':       'Please provide your information and we will get back to you shortly.',
    'contact.addr.label': 'Address',
    'contact.phone.label':'Phone',
    'contact.intl.label': 'International presence',
    'contact.intl.value': 'Mexico · Paris, France',
    'contact.call':       'Call',

    /* Form */
    'form.name':         'Name *',
    'form.name.ph':      'Your full name',
    'form.company':      'Company',
    'form.company.ph':   'Your company name',
    'form.email':        'Email *',
    'form.phone':        'Phone',
    'form.area':         'Area of interest',
    'form.area.ph':      'Select an area…',
    'form.message':      'Message *',
    'form.message.ph':   'Briefly describe your matter or inquiry…',
    'form.privacy':      'I have read and accept the',
    'form.privacy.link': 'Privacy Policy',
    'form.submit':       'Send message',
    'form.success':      '✓ Thank you for contacting us. We will respond shortly.',
    'form.err.name':     'Please enter your name.',
    'form.err.email':    'Please enter a valid email.',
    'form.err.message':  'Please enter your message.',
    'form.err.privacy':  'Please accept the privacy policy.',

    /* Footer */
    'footer.firm':    'The Firm',
    'footer.intl':    '🌍 Also in Paris, France',
    'footer.seeall':  'See all →',
    'footer.consult': 'Send inquiry',
    'footer.privacy': 'Privacy Policy',
    'footer.rights':  'All rights reserved.',
  }
};

/* ================================================
   MOTOR DE TRADUCCIÓN
================================================ */
let currentLang = localStorage.getItem('capin-lang') || 'es';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  const html = document.documentElement;
  html.setAttribute('lang', lang === 'es' ? 'es-MX' : 'en');
  html.setAttribute('data-lang', lang);

  /* Actualizar title del documento */
  document.title = lang === 'es'
    ? 'CAPÍN CONSULTORES, S.C. | Firma de Abogados en México'
    : 'CAPÍN CONSULTORES, S.C. | Law Firm in Mexico';

  /* Actualizar meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'es'
      ? 'CAPÍN CONSULTORES, S.C. es una Firma de Abogados con presencia en México y París, especializada en más de 16 áreas de práctica.'
      : 'CAPÍN CONSULTORES, S.C. is a Law Firm with offices in Mexico and Paris, specialized in over 16 practice areas.');
  }

  /* Traducir todos los elementos con data-i18n (innerHTML para tags como <strong>) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Traducir placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  currentLang = lang;
  localStorage.setItem('capin-lang', lang);
}

/* ================================================
   AÑO ACTUAL EN FOOTER
================================================ */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ================================================
   HEADER: efecto scroll
================================================ */
const header = document.getElementById('header');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 48);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ================================================
   BOTÓN DE IDIOMA
================================================ */
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  applyLang(newLang);
});

/* ================================================
   MENÚ HAMBURGUESA (móvil)
================================================ */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

function openNav(open) {
  nav.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => openNav(!nav.classList.contains('open')));

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => openNav(false));
});

document.addEventListener('click', e => {
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)) {
    openNav(false);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) openNav(false);
});

/* ================================================
   SMOOTH SCROLL
================================================ */
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

/* ================================================
   NAV LINK ACTIVO
================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('nav__link--active',
          link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObs.observe(s));

/* ================================================
   ANIMACIONES DE ENTRADA
================================================ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ================================================
   FORMULARIO DE CONTACTO
================================================ */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    let valid = true;
    const t = translations[currentLang];

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
      const firstErr = form.querySelector('.error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.classList.add('btn--loading');

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.classList.remove('btn--loading');
      form.reset();
      formSuccess.hidden = false;
      /* Mostrar texto de éxito en el idioma correcto */
      formSuccess.innerHTML = t['form.success'];
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { formSuccess.hidden = true; }, 7000);
    }, 1400);
  });

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

/* ================================================
   INIT — aplicar idioma guardado al cargar
================================================ */
applyLang(currentLang);
