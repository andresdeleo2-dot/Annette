/* ================================================
   CAPÍN CONSULTORES, S.C. — script.js
   Bilingüe ES/EN · Formulario → mailto:luis.capin@ci-lex.com
================================================ */

'use strict';

/* ================================================
   TRADUCCIONES
================================================ */
const translations = {

  es: {
    /* Nav */
    'nav.about':    'Nosotros',
    'nav.services': 'Servicios',
    'nav.team':     'Equipo',
    'nav.clients':  'Clientes',
    'nav.contact':  'Contacto',

    /* Hero */
    'hero.badge':   'Firma de Abogados · México & París',
    'hero.tagline': 'Soluciones jurídicas a la medida para empresas mexicanas e internacionales que operan en México',
    'hero.cta1':    'Nuestros Servicios',
    'hero.cta2':    'Contactar ahora',
    'hero.pillar1': 'Derecho Corporativo',
    'hero.pillar2': 'Visión Global',
    'hero.pillar3': 'Red CI-LEX',
    'hero.scroll':  'Conocer más',

    /* Nosotros */
    'about.eyebrow':  'Nosotros',
    'about.title':    'Experiencia local, perspectiva global',
    'about.lead':     'Capín Consultores es un despacho de abogados dedicado a brindar soluciones jurídicas a la medida para empresas mexicanas e internacionales que operan en México. Con décadas de experiencia en Derecho Corporativo y Empresarial, combinamos un profundo conocimiento local con una perspectiva global, ofreciendo estrategias innovadoras y confiables diseñadas para proteger y optimizar las inversiones de nuestros clientes.',
    'about.sub':      'Nuestro equipo multicultural, con dominio del español, inglés y francés, está equipado para asistir a clientes de orígenes diversos con comprensión real del entorno internacional.',
    'about.p1.title': 'Enfoque Multidisciplinario',
    'about.p1.text':  'Ofrecemos un enfoque multidisciplinario en áreas clave como gobierno corporativo, asesoría fiscal, resolución de controversias, derecho marítimo y estrategias de inversión extranjera, garantizando apoyo integral en cada etapa del crecimiento de nuestros clientes.',
    'about.p2.title': 'Red CI-LEX',
    'about.p2.text':  'A través de nuestra colaboración con la red CI-LEX y un selecto grupo de expertos externos, brindamos apoyo integral en materias como fiscal, laboral, litigio e inmobiliario, asegurando asesoría legal completa y coordinada para nuestros clientes.',
    'about.p3.title': 'Comprometidos con la Excelencia',
    'about.p3.text':  'Desde el cumplimiento corporativo hasta la resolución alternativa de disputas, nos enorgullecemos de entregar resultados que superan las expectativas. En Capín Consultores somos más que asesores legales — somos socios estratégicos en el éxito de nuestros clientes.',

    /* Servicios */
    'services.eyebrow':  '02',
    'services.title':    'Nuestros Servicios',
    'services.subtitle': 'Soluciones especializadas diseñadas para atender las diversas necesidades de su empresa en México.',
    'srv.corp.title': 'Derecho Corporativo',
    'srv.corp.1': 'Contratos civiles y mercantiles',
    'srv.corp.2': 'Fusiones y Adquisiciones (M&A)',
    'srv.corp.3': 'Cumplimiento normativo',
    'srv.corp.4': 'Constitución de sociedades mexicanas',
    'srv.corp.5': 'Oficinas de representación y establecimientos permanentes',
    'srv.corp.6': 'Disolución o fusión de entidades comerciales',
    'srv.corp.7': 'Poderes notariales, aumentos y reducciones de capital',
    'srv.tax.title': 'Derecho Fiscal',
    'srv.tax.1': 'IVA e IEPS',
    'srv.tax.2': 'Operaciones transaccionales',
    'srv.tax.3': 'Precios de transferencia',
    'srv.tax.4': 'Convenios para evitar doble tributación',
    'srv.tax.5': 'Planeación y optimización fiscal',
    'srv.tax.6': 'Asesoría fiscal para personal expatriado',
    'srv.tax.7': 'Programas IMMEX y promoción al comercio exterior',
    'srv.labor.title': 'Derecho Laboral y Migratorio',
    'srv.labor.1': 'Régimen de Seguridad Social',
    'srv.labor.2': 'Contratos laborales y terminaciones',
    'srv.labor.3': 'Certificación REPSE',
    'srv.labor.4': 'Documentos contractuales y extracontractuales',
    'srv.labor.5': 'Visas y permisos de trabajo para extranjeros',
    'srv.labor.6': 'Gestión de personal extranjero en México',
    'srv.labor.7': 'Procesos de naturalización',
    'srv.adr.title': 'Resolución Alternativa de Controversias',
    'srv.adr.1': 'Mediación privada en disputas civiles y mercantiles',
    'srv.adr.2': 'Mediación familiar',
    'srv.adr.3': 'Arbitraje internacional bajo reglas ICC',
    'srv.adr.4': 'Mediación preventiva en disputas contractuales',

    /* Equipo */
    'team.eyebrow':   '03',
    'team.title':     'Nuestro Equipo',
    'team.subtitle':  'Profesionales con experiencia transnacional que comprenden los matices del negocio internacional.',
    'team.partners':  'Socios',
    'team.associates':'Asociados',
    'team.founding':  'Socio Fundador',
    'team.partner':   'Socio',
    'team.counsel':   'Of Counsel',
    'team.associate': 'Asociado',
    'team.trainee':   'Pasante',
    'team.luis.bio':  'Abogado y mediador privado con más de 40 años de experiencia en Derecho Empresarial, Fiscal e Inversión Extranjera. Miembro del Colegio de Abogados de París desde 1991.',
    'team.jesus.bio': 'Abogado mercantil que se incorporó a la firma en 2021, con experiencia previa en departamentos jurídicos de grandes corporativos como Grupo México, Grupo Carso y Grupo TMM.',
    'team.steph.bio': 'Egresada de la Universidad de Lille y miembro del Colegio de Abogados de París. Más de 15 años de experiencia en Derecho Internacional de Negocios y Arbitraje. Socia desde 2016.',
    'team.jca.bio':   '22 años de experiencia en comercio internacional y defensa comercial, y más de 10 en derecho fiscal. Especialista en energía, asesoría fiscal y contratos.',
    'team.jr.bio':    'Más de 23 años de experiencia en derecho migratorio corporativo. Especialista en contratación y gestión de personal extranjero en México, procesos de naturalización y cumplimiento migratorio.',
    'team.rr.bio':    'Especialista en constitución de sociedades mexicanas con inversión extranjera y establecimiento de sucursales extranjeras en México. Estatutos, asambleas y acuerdos de accionistas.',
    'team.ms.bio':    'Estudiante de Derecho en la Universidad Nacional Autónoma de México con interés en derecho mercantil y laboral. Se incorporó a la firma en 2023.',

    /* Clientes */
    'clients.eyebrow':  '04',
    'clients.title':    'Nuestros Clientes',
    'clients.subtitle': 'Empresas multinacionales y locales confían en Capín Consultores para navegar el entorno jurídico mexicano con soluciones estratégicas a la medida.',
    'clients.pharma':   'Farma & Dermo-Cosmética',
    'clients.maritime': 'Marítimo & Automotriz',
    'clients.tech':     'Tecnología & Comunicaciones',

    /* Contacto */
    'contact.eyebrow':    '05',
    'contact.title':      'Contáctenos',
    'contact.lead':       'Proporcione sus datos y nos comunicaremos con usted a la brevedad.',
    'contact.addr.label': 'Dirección',
    'contact.phone.label':'Teléfono',
    'contact.email.label':'Correo electrónico',
    'contact.web.label':  'Sitio web',
    'contact.intl.label': 'Presencia internacional',
    'contact.intl.value': 'México · París, Francia',
    'contact.call':       'Llamar ahora',

    /* Formulario */
    'form.name':         'Nombre *',
    'form.name.ph':      'Su nombre completo',
    'form.company':      'Compañía',
    'form.company.ph':   'Nombre de su empresa',
    'form.email':        'Email *',
    'form.phone':        'Teléfono',
    'form.area':         'Área de interés',
    'form.area.ph':      'Seleccione un área…',
    'form.area.other':   'Otra',
    'form.message':      'Mensaje *',
    'form.message.ph':   'Describa brevemente su asunto o consulta…',
    'form.privacy':      'He leído y acepto el',
    'form.privacy.link': 'Aviso de Privacidad',
    'form.submit':       'Enviar mensaje',
    'form.success':      '✓ Su mensaje fue enviado. Le responderemos a la brevedad.',
    'form.err.name':     'Ingrese su nombre.',
    'form.err.email':    'Ingrese un email válido.',
    'form.err.message':  'Ingrese su mensaje.',
    'form.err.privacy':  'Acepte el aviso de privacidad.',

    /* Footer */
    'footer.firm':    'La Firma',
    'footer.intl':    '🌍 También en París, Francia',
    'footer.consult': 'Enviar consulta',
    'footer.privacy': 'Aviso de Privacidad',
    'footer.rights':  'Todos los derechos reservados.',
  },

  en: {
    /* Nav */
    'nav.about':    'About Us',
    'nav.services': 'Services',
    'nav.team':     'Our Team',
    'nav.clients':  'Clients',
    'nav.contact':  'Contact',

    /* Hero */
    'hero.badge':   'Law Firm · Mexico & Paris',
    'hero.tagline': 'Tailored legal solutions for Mexican and international companies operating in Mexico',
    'hero.cta1':    'Our Services',
    'hero.cta2':    'Contact Us',
    'hero.pillar1': 'Corporate Law',
    'hero.pillar2': 'Global Vision',
    'hero.pillar3': 'CI-LEX Network',
    'hero.scroll':  'Learn more',

    /* About */
    'about.eyebrow':  'About Us',
    'about.title':    'Local Expertise, Global Perspective',
    'about.lead':     'Capín Consultores is a law firm dedicated to providing tailored legal solutions to Mexican and international companies operating in Mexico. With decades of expertise in Corporate and Business Law, our practice combines deep local knowledge with a global perspective, enabling us to deliver innovative and trustworthy strategies designed to safeguard and optimize our clients\' investments.',
    'about.sub':      'Our multicultural team, fluent in English, Spanish, and French, is uniquely equipped to assist clients from diverse backgrounds with genuine understanding of the international business environment.',
    'about.p1.title': 'Multidisciplinary Approach',
    'about.p1.text':  'We offer a multidisciplinary approach across key areas including corporate governance, tax advisory, dispute resolution, maritime law, and foreign investment strategies, ensuring seamless support at every stage of our clients\' growth and operation in Mexico.',
    'about.p2.title': 'CI-LEX Network',
    'about.p2.text':  'Through our collaboration with the CI-LEX network and a carefully curated roster of-counsel experts, Capín Consultores provides holistic support across disciplines such as taxation, labor law, litigation, and real estate, ensuring comprehensive and coordinated legal advice.',
    'about.p3.title': 'Committed to Excellence',
    'about.p3.text':  'From corporate compliance to alternative dispute resolution, we pride ourselves on delivering results that go beyond expectations. At Capín Consultores, we are more than legal advisors — we are strategic partners in our clients\' success.',

    /* Services */
    'services.eyebrow':  '02',
    'services.title':    'Our Services',
    'services.subtitle': 'Specialized solutions designed to meet the diverse legal needs of your business in Mexico.',
    'srv.corp.title': 'Corporate Law',
    'srv.corp.1': 'Civil and commercial contracts',
    'srv.corp.2': 'Mergers & Acquisitions (M&A)',
    'srv.corp.3': 'Compliance',
    'srv.corp.4': 'Mexican entities with or without foreign investment',
    'srv.corp.5': 'Branch and representative offices with permanent establishments',
    'srv.corp.6': 'Dissolution or merger of commercial entities',
    'srv.corp.7': 'Powers of attorney, capital increases and decreases',
    'srv.tax.title': 'Tax Law',
    'srv.tax.1': 'VAT and IEPS',
    'srv.tax.2': 'Transactional operations',
    'srv.tax.3': 'Transfer pricing compliance',
    'srv.tax.4': 'Double taxation treaties',
    'srv.tax.5': 'Tax planning and optimization strategies',
    'srv.tax.6': 'Tax advisory for expatriate personnel',
    'srv.tax.7': 'IMMEX and trade promotion programs',
    'srv.labor.title': 'Labor & Immigration Law',
    'srv.labor.1': 'Social security regime',
    'srv.labor.2': 'Employment contracts and terminations',
    'srv.labor.3': 'REPSE certification',
    'srv.labor.4': 'Contractual and extra-contractual documents',
    'srv.labor.5': 'Visas and work permits for foreign nationals',
    'srv.labor.6': 'Management of foreign personnel in Mexico',
    'srv.labor.7': 'Naturalization processes',
    'srv.adr.title': 'Alternative Dispute Resolution',
    'srv.adr.1': 'Private mediation for civil and commercial disputes',
    'srv.adr.2': 'Family mediation services',
    'srv.adr.3': 'International arbitration under ICC rules',
    'srv.adr.4': 'Preventive mediation for contract disputes',

    /* Team */
    'team.eyebrow':   '03',
    'team.title':     'Our Team',
    'team.subtitle':  'Professionals with transnational experience who understand the nuances of international business.',
    'team.partners':  'Partners',
    'team.associates':'Associates',
    'team.founding':  'Founding Partner',
    'team.partner':   'Partner',
    'team.counsel':   'Of Counsel',
    'team.associate': 'Associate',
    'team.trainee':   'Law Trainee',
    'team.luis.bio':  'Lawyer and private mediator with more than 40 years of experience in Business, Tax and Foreign Investment Law. Member of the Paris Bar since 1991.',
    'team.jesus.bio': 'Commercial lawyer who joined the firm in 2021, with prior experience in the legal departments of large companies including Grupo México, Grupo Carso, and Grupo TMM.',
    'team.steph.bio': 'Graduate of the University of Lille and registered at the Paris Bar. Over 15 years of experience in International Business Law and Arbitration. Partner since 2016.',
    'team.jca.bio':   '22 years of experience in international trade and trade defense, and over 10 years in tax law. Specialist in energy, tax advisory, and contract negotiation.',
    'team.jr.bio':    'Over 23 years of experience in corporate immigration law. Specialist in the recruitment and management of foreign personnel in Mexico, naturalization processes, and immigration compliance.',
    'team.rr.bio':    'Specialist in the incorporation of Mexican companies with foreign investment and the establishment of foreign branches in Mexico. Corporate bylaws, assembly minutes, and shareholder agreements.',
    'team.ms.bio':    'Law student at Universidad Nacional Autónoma de México with interests in commercial and labor law. With the firm since 2023.',

    /* Clients */
    'clients.eyebrow':  '04',
    'clients.title':    'Our Clients',
    'clients.subtitle': 'Multinational and local companies trust Capín Consultores to navigate the Mexican legal landscape with tailored strategic solutions.',
    'clients.pharma':   'Pharma & Dermo-Cosmetic',
    'clients.maritime': 'Maritime & Automotive',
    'clients.tech':     'New Technologies & Communications',

    /* Contact */
    'contact.eyebrow':    '05',
    'contact.title':      'Contact Us',
    'contact.lead':       'Please provide your information and we will get back to you shortly.',
    'contact.addr.label': 'Address',
    'contact.phone.label':'Phone',
    'contact.email.label':'Email',
    'contact.web.label':  'Website',
    'contact.intl.label': 'International presence',
    'contact.intl.value': 'Mexico · Paris, France',
    'contact.call':       'Call now',

    /* Form */
    'form.name':         'Name *',
    'form.name.ph':      'Your full name',
    'form.company':      'Company',
    'form.company.ph':   'Your company name',
    'form.email':        'Email *',
    'form.phone':        'Phone',
    'form.area':         'Area of interest',
    'form.area.ph':      'Select an area…',
    'form.area.other':   'Other',
    'form.message':      'Message *',
    'form.message.ph':   'Briefly describe your matter or inquiry…',
    'form.privacy':      'I have read and accept the',
    'form.privacy.link': 'Privacy Policy',
    'form.submit':       'Send message',
    'form.success':      '✓ Your message has been sent. We will respond shortly.',
    'form.err.name':     'Please enter your name.',
    'form.err.email':    'Please enter a valid email.',
    'form.err.message':  'Please enter your message.',
    'form.err.privacy':  'Please accept the privacy policy.',

    /* Footer */
    'footer.firm':    'The Firm',
    'footer.intl':    '🌍 Also in Paris, France',
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

  document.documentElement.setAttribute('lang', lang === 'es' ? 'es-MX' : 'en');
  document.documentElement.setAttribute('data-lang', lang);

  document.title = lang === 'es'
    ? 'CAPÍN CONSULTORES, S.C. | Firma de Abogados en México'
    : 'CAPÍN CONSULTORES, S.C. | Law Firm in Mexico';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', lang === 'es'
    ? 'Capín Consultores es un despacho de abogados dedicado a brindar soluciones jurídicas a la medida para empresas que operan en México.'
    : 'Capín Consultores is a law firm dedicated to providing tailored legal solutions to companies operating in Mexico.');

  /* Texto e innerHTML */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  currentLang = lang;
  localStorage.setItem('capin-lang', lang);
}

/* ================================================
   AÑO FOOTER
================================================ */
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ================================================
   HEADER SCROLL
================================================ */
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 48);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ================================================
   BOTÓN IDIOMA
================================================ */
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ================================================
   MENÚ HAMBURGUESA
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
nav.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => openNav(false)));
document.addEventListener('click', e => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target))
    openNav(false);
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
    const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ================================================
   NAV ACTIVO
================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting)
      navLinks.forEach(l => l.classList.toggle('nav__link--active',
        l.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe
  && sections.forEach(s => new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        navLinks.forEach(l => l.classList.toggle('nav__link--active',
          l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px' }).observe(s));

/* ================================================
   ANIMACIONES SCROLL
================================================ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ================================================
   FORMULARIO → mailto:luis.capin@ci-lex.com
   Abre el cliente de correo con los datos pre-llenados.
================================================ */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const DEST_EMAIL  = 'luis.capin@ci-lex.com';

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    let valid = true;
    const name    = form.querySelector('#f-name');
    const email   = form.querySelector('#f-email');
    const message = form.querySelector('#f-message');
    const privacy = form.querySelector('#f-privacy');
    const company = form.querySelector('#f-company');
    const phone   = form.querySelector('#f-phone');
    const area    = form.querySelector('#f-area');

    if (!name.value.trim()) { showError(name, 'err-name'); valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, 'err-email'); valid = false;
    }
    if (!message.value.trim()) { showError(message, 'err-message'); valid = false; }
    if (!privacy.checked) {
      document.getElementById('err-privacy').style.display = 'block'; valid = false;
    }

    if (!valid) {
      const firstErr = form.querySelector('.error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    /* Construir asunto y cuerpo del correo */
    const t = translations[currentLang];
    const subject = currentLang === 'es'
      ? `Consulta Legal - ${name.value.trim()}`
      : `Legal Inquiry - ${name.value.trim()}`;

    const bodyLines = [
      currentLang === 'es' ? 'Nombre:' : 'Name:',
      name.value.trim(),
      '',
      currentLang === 'es' ? 'Empresa:' : 'Company:',
      company.value.trim() || '—',
      '',
      currentLang === 'es' ? 'Correo de respuesta:' : 'Reply email:',
      email.value.trim(),
      '',
      currentLang === 'es' ? 'Teléfono:' : 'Phone:',
      phone.value.trim() || '—',
      '',
      currentLang === 'es' ? 'Área de interés:' : 'Area of interest:',
      area.value || '—',
      '',
      currentLang === 'es' ? 'Mensaje:' : 'Message:',
      message.value.trim(),
    ];

    const mailto = `mailto:${DEST_EMAIL}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    /* Abrir cliente de correo */
    window.location.href = mailto;

    /* Mostrar confirmación y limpiar */
    setTimeout(() => {
      form.reset();
      formSuccess.hidden = false;
      formSuccess.querySelector('[data-i18n="form.success"]').innerHTML =
        t['form.success'] || '✓ Mensaje listo para enviar.';
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { formSuccess.hidden = true; }, 7000);
    }, 400);
  });

  /* Limpiar errores en tiempo real */
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errEl = document.getElementById(input.id.replace('f-', 'err-'));
      if (errEl) errEl.style.display = 'none';
    });
  });
}

function showError(el, id) {
  el.classList.add('error');
  const errEl = document.getElementById(id);
  if (errEl) errEl.style.display = 'block';
}

function clearErrors() {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => el.style.display = 'none');
}

/* ================================================
   INIT
================================================ */
applyLang(currentLang);
