/* ══════════════════════════════════════
   TOLOTECH — Language Switcher v2
   Fixed translation + WhatsApp + Social
   ══════════════════════════════════════ */

let currentLang = 'en';
var defined = function(id) { return document.getElementById(id) !== null; };

const T = {
  en: {
    navHome:'Home', navServices:'Services', navAbout:'About', navContact:'Contact', navCta:'Get in touch',
    heroBadge:'FLORIDA, USA · BILINGUAL EN/ES',
    heroH1:'Your business deserves<br>technology that<br><span class="ta">actually works.</span>',
    heroSub:"We help small businesses, families, and seniors navigate the digital world — with app development, AI automation, IT consulting, and patient, jargon-free tech support.",
    heroCta1:'Talk to us today →', heroCta2:'See our services',
    tr1:'FLORIDA LLC', tr2:'BILINGUAL EN/ES', tr3:'REMOTE & ON-SITE', tr4:'SENIOR-FRIENDLY',
    probLabel:'THE PROBLEM', probH2:'Sound familiar?',
    pr1h:'Wasting hours on repetitive tasks', pr1p:"You're copying data, sending the same emails, and doing work a machine should handle — while your actual business waits.",
    pr2h:"Your tech doesn't talk to each other", pr2p:"Spreadsheets here, apps there, nothing connected. You're paying for tools that make your life harder, not easier.",
    pr3h:'No one explains tech in plain language', pr3p:"Every IT company throws jargon at you. You just want someone to fix the problem and explain what happened — simply.",
    pr4h:"Your parents can't use their devices", pr4p:"Mom can't video call. Dad's phone is full of scam apps. You want someone patient and bilingual to actually help them.",
    svcLabel:'WHAT WE DO', svcH2:'Four ways we help you win.',
    sv1h:'App Development', sv1p:'Custom web and mobile apps built around your workflow — not the other way around.',
    sv2h:'AI & Automation', sv2p:'We automate the boring stuff — emails, data entry, scheduling — so your team focuses on real work.',
    sv3h:'IT Consulting', sv3p:'Reliable tech strategy and support for your business. No contracts, no surprises, just solutions.',
    sv4h:'Senior & Family Tech Support', sv4p:'Patient, bilingual help for your loved ones. We teach, fix, and protect — in language they understand.',
    svLink:'Learn more →',
    whyLabel:'WHY TOLOTECH', whyH2:"We're not your typical IT company.",
    whyP:"We started Tolotech because we were tired of tech companies that overcomplicate things, overcharge, and disappear after the sale. We believe technology should be accessible to everyone — from startups to your grandparents.",
    w1h:'No jargon, ever', w1p:"We explain everything in plain language. If you don't understand, we haven't done our job.",
    w2h:'Fully bilingual', w2p:'English and Spanish — no awkward translations. Real fluency, real understanding.',
    w3h:'Built for small budgets', w3p:'Enterprise-quality solutions without enterprise prices. We work with what you have.',
    w4h:'We actually care', w4p:"Your success is our success. We're not here for a quick sale — we're here to build something that lasts.",
    ctaH2:'Ready to stop fighting<br>with technology?',
    ctaP:"Tell us what's going on. We'll listen, figure out the best solution, and give you an honest quote — no pressure, no jargon.",
    ctaBtn:'Email us now →', ctaWa:'WhatsApp us',
    ftDesc:'Technology that works for small businesses, families, and seniors. Based in Florida, serving the world.',
    ftNavTitle:'Navigation', ftSvcTitle:'Services', ftContactTitle:'Contact',
    ftHome:'Home', ftServices:'Services', ftAbout:'About', ftContact:'Contact',
    ftS1:'App Development', ftS2:'AI & Automation', ftS3:'IT Consulting', ftS4:'Tech Support',
    ftLoc:'Florida, USA', ftRights:'All rights reserved.', ftTag:'Next Generation Solutions',
    ftPhone:'+1 (850) 321-1134',

    aboutH1:'We build the tech<br>small businesses<br><span class="ta">actually need.</span>',
    aboutSub:'Tolotech is a technology company helping small businesses, families, and seniors grow with confidence in the digital world.',
    p1h:'App Development', p1p:'Custom web and mobile applications built to fit your business — not the other way around.',
    p2h:'AI & Automation', p2p:'We automate the repetitive so your team can focus on the work that actually matters.',
    p3h:'IT Consulting', p3p:'Reliable, no-nonsense IT support and strategy — from infrastructure to day-to-day ops.',
    storyH2:'Built by operators,<br>for operators.',
    storyP1:"Tolotech was founded by someone who has spent years in the trenches of enterprise IT — managing complex systems, solving real problems, and watching small businesses get left behind by technology that wasn't built for them.",
    storyP2:'We started Tolotech to change that. We bring enterprise-level thinking to small business budgets, delivering solutions that are practical, scalable, and built to last.',
    s1:'Years of enterprise IT experience', s2:'Core service areas', s3:'Based & operating globally', s4:'Automations waiting to be built',

    svcHeroH1:'Services built for<br><span class="ta">real businesses.</span>',
    svcHeroSub:"We don't sell hype. We solve problems. Here's exactly how we help small businesses, families, and seniors get the most out of technology.",
    sd1Num:'01 — APP DEVELOPMENT', sd1H2:'Custom apps that<br>fit your business.',
    sd1P:"Off-the-shelf software forces you to change how you work. We build apps that adapt to you — your workflow, your team, your customers.",
    sd1f1h:'Web applications', sd1f1p:'Responsive web apps that work on any device, built for speed and simplicity.',
    sd1f2h:'Mobile apps', sd1f2p:'iOS and Android apps your customers will actually enjoy using.',
    sd1f3h:'Integrations', sd1f3p:'Connect your apps to the tools you already use — no more copy-pasting between systems.',
    sd1cta:'Get a free consultation →',
    sd2Num:'02 — AI & AUTOMATION', sd2H2:'Stop doing work<br>a machine should do.',
    sd2P:"If you or your team are doing the same thing more than twice, we can probably automate it. We use AI and smart workflows to eliminate busywork and save you hours every week.",
    sd2f1h:'Email & messaging automation', sd2f1p:'Auto-responses, follow-ups, and notifications that run on autopilot.',
    sd2f2h:'Data entry & processing', sd2f2p:'Let machines handle the spreadsheets, form entries, and data transfers.',
    sd2f3h:'AI-powered tools', sd2f3p:'Custom AI assistants, content generators, and smart analytics for your business.',
    sd2cta:'Automate my business →',
    sd3Num:'03 — IT CONSULTING', sd3H2:'Tech strategy that<br>actually makes sense.',
    sd3P:"You don't need a full IT department. You need someone who understands your business, speaks your language, and gives you straight answers. That's us.",
    sd3f1h:'Infrastructure planning', sd3f1p:'Set up the right tools, cloud services, and systems from day one.',
    sd3f2h:'Security & compliance', sd3f2p:"Protect your business data without making everyone's life harder.",
    sd3f3h:'Ongoing support', sd3f3p:"When something breaks at 9 PM on a Tuesday, we pick up. No tickets, no waiting.",
    sd3cta:'Talk to an expert →',
    sd4Num:'04 — SENIOR & FAMILY SUPPORT', sd4H2:'Tech help your family<br>actually deserves.',
    sd4P:"Your parents shouldn't be afraid of their phone. Your grandma should be able to video call her grandkids. We provide patient, bilingual tech support that treats your family with respect.",
    sd4f1h:'Device setup & training', sd4f1p:'Phones, tablets, computers — set up right and explained in plain language.',
    sd4f2h:'Scam & fraud protection', sd4f2p:'We teach your loved ones how to spot scams and keep their information safe.',
    sd4f3h:'Ongoing help', sd4f3p:"A friendly phone call away. No judgment, no rush — we'll explain it as many times as needed.",
    sd4cta:'Get help for my family →',

    contactH1:"Let's build something<br><span class='ta'>together.</span>",
    contactSub:"Have a project in mind, need tech help, or just want to see how we can help? Drop us a message and we'll get back to you within 24 hours.",
    cInfoEmail:'Email', cInfoPhone:'Phone', cInfoWa:'WhatsApp',
    cInfoLoc:'Location', cInfoLocVal:'Florida, USA — serving clients globally',
    cInfoLang:'Languages', cInfoLangVal:'English · Spanish',
    cInfoHours:'Response time', cInfoHoursVal:'Within 24 hours',
    cFormName:'Your name', cFormEmail:'Your email', cFormService:'What do you need help with?',
    cFormOpt1:'App Development', cFormOpt2:'AI & Automation', cFormOpt3:'IT Consulting',
    cFormOpt4:'Senior / Family Tech Support', cFormOpt5:'Other / Not sure',
    cFormMsg:'Tell us about your project or problem...',
    cFormBtn:'Send message →',
    cFormSuccess:"Message sent — we'll be in touch soon."
  },
  es: {
    navHome:'Inicio', navServices:'Servicios', navAbout:'Nosotros', navContact:'Contacto', navCta:'Contáctanos',
    heroBadge:'FLORIDA, EE.UU. · BILINGÜE EN/ES',
    heroH1:'Tu negocio merece<br>tecnología que<br><span class="ta">realmente funcione.</span>',
    heroSub:'Ayudamos a pequeñas empresas, familias y personas mayores a navegar el mundo digital — con desarrollo de apps, automatización con IA, consultoría IT y soporte técnico paciente, sin tecnicismos.',
    heroCta1:'Hablemos hoy →', heroCta2:'Ver servicios',
    tr1:'LLC EN FLORIDA', tr2:'BILINGÜE EN/ES', tr3:'REMOTO Y PRESENCIAL', tr4:'AMIGABLE CON MAYORES',
    probLabel:'EL PROBLEMA', probH2:'¿Te suena familiar?',
    pr1h:'Pierdes horas en tareas repetitivas', pr1p:'Copiar datos, enviar los mismos correos, hacer trabajo que una máquina debería manejar — mientras tu negocio real espera.',
    pr2h:'Tu tecnología no se comunica entre sí', pr2p:'Hojas de cálculo por un lado, apps por otro, nada conectado. Pagas por herramientas que te complican la vida.',
    pr3h:'Nadie explica la tecnología en lenguaje simple', pr3p:'Toda empresa de IT te llena de tecnicismos. Solo quieres que alguien arregle el problema y te explique qué pasó — simple.',
    pr4h:'Tus padres no pueden usar sus dispositivos', pr4p:'Mamá no puede hacer videollamada. Papá tiene el teléfono lleno de apps de estafa. Necesitas a alguien paciente y bilingüe.',
    svcLabel:'LO QUE HACEMOS', svcH2:'Cuatro formas de ayudarte a ganar.',
    sv1h:'Desarrollo de Apps', sv1p:'Aplicaciones web y móviles a medida, diseñadas alrededor de tu flujo de trabajo.',
    sv2h:'IA y Automatización', sv2p:'Automatizamos lo aburrido — correos, datos, agendas — para que tu equipo haga trabajo de verdad.',
    sv3h:'Consultoría IT', sv3p:'Estrategia y soporte tecnológico confiable. Sin contratos, sin sorpresas, solo soluciones.',
    sv4h:'Soporte Tech para Mayores y Familias', sv4p:'Ayuda paciente y bilingüe para tus seres queridos. Enseñamos, arreglamos y protegemos — en su idioma.',
    svLink:'Saber más →',
    whyLabel:'POR QUÉ TOLOTECH', whyH2:'No somos la típica empresa de IT.',
    whyP:'Fundamos Tolotech porque estábamos cansados de empresas tech que complican todo, cobran de más y desaparecen después de la venta. Creemos que la tecnología debería ser accesible para todos — desde startups hasta tus abuelos.',
    w1h:'Sin tecnicismos, nunca', w1p:'Explicamos todo en lenguaje simple. Si no entiendes, no hemos hecho nuestro trabajo.',
    w2h:'Completamente bilingüe', w2p:'Inglés y español — sin traducciones raras. Fluidez real, entendimiento real.',
    w3h:'Hecho para presupuestos pequeños', w3p:'Soluciones de nivel empresarial sin precios empresariales. Trabajamos con lo que tienes.',
    w4h:'Nos importa de verdad', w4p:'Tu éxito es nuestro éxito. No buscamos una venta rápida — queremos construir algo que dure.',
    ctaH2:'¿Listo para dejar de pelear<br>con la tecnología?',
    ctaP:'Cuéntanos qué pasa. Escuchamos, buscamos la mejor solución y te damos un presupuesto honesto — sin presión, sin tecnicismos.',
    ctaBtn:'Escríbenos ahora →', ctaWa:'Escríbenos por WhatsApp',
    ftDesc:'Tecnología que funciona para pequeñas empresas, familias y personas mayores. Con base en Florida, sirviendo al mundo.',
    ftNavTitle:'Navegación', ftSvcTitle:'Servicios', ftContactTitle:'Contacto',
    ftHome:'Inicio', ftServices:'Servicios', ftAbout:'Nosotros', ftContact:'Contacto',
    ftS1:'Desarrollo de Apps', ftS2:'IA y Automatización', ftS3:'Consultoría IT', ftS4:'Soporte Tech',
    ftLoc:'Florida, EE.UU.', ftRights:'Todos los derechos reservados.', ftTag:'Soluciones de Nueva Generación',
    ftPhone:'+1 (850) 321-1134',

    aboutH1:'Creamos la tecnología<br>que las pequeñas empresas<br><span class="ta">realmente necesitan.</span>',
    aboutSub:'Tolotech es una empresa de tecnología que ayuda a pequeñas empresas, familias y personas mayores a crecer con confianza en el mundo digital.',
    p1h:'Desarrollo de Apps', p1p:'Aplicaciones web y móviles a medida, diseñadas para adaptarse a tu negocio — y no al revés.',
    p2h:'IA y Automatización', p2p:'Automatizamos lo repetitivo para que tu equipo pueda enfocarse en lo que realmente importa.',
    p3h:'Consultoría IT', p3p:'Soporte IT confiable y directo — desde infraestructura hasta operaciones del día a día.',
    storyH2:'Creado por operadores,<br>para operadores.',
    storyP1:'Tolotech fue fundada por alguien que pasó años en las trincheras del IT empresarial — gestionando sistemas complejos, resolviendo problemas reales, y viendo cómo las pequeñas empresas quedaban rezagadas por tecnología que no fue hecha para ellas.',
    storyP2:'Fundamos Tolotech para cambiar eso. Llevamos el pensamiento empresarial a presupuestos de pequeña empresa, entregando soluciones prácticas, escalables y construidas para durar.',
    s1:'Años de experiencia en IT empresarial', s2:'Áreas de servicio', s3:'Base en EE.UU., operación global', s4:'Automatizaciones por construir',

    svcHeroH1:'Servicios hechos para<br><span class="ta">negocios reales.</span>',
    svcHeroSub:'No vendemos humo. Resolvemos problemas. Así es exactamente como ayudamos a pequeñas empresas, familias y personas mayores a aprovechar la tecnología.',
    sd1Num:'01 — DESARROLLO DE APPS', sd1H2:'Apps a medida que<br>se adaptan a tu negocio.',
    sd1P:'El software genérico te obliga a cambiar cómo trabajas. Nosotros creamos apps que se adaptan a ti — tu flujo de trabajo, tu equipo, tus clientes.',
    sd1f1h:'Aplicaciones web', sd1f1p:'Apps web responsivas que funcionan en cualquier dispositivo, hechas para velocidad y simplicidad.',
    sd1f2h:'Apps móviles', sd1f2p:'Apps para iOS y Android que tus clientes van a disfrutar usar.',
    sd1f3h:'Integraciones', sd1f3p:'Conecta tus apps con las herramientas que ya usas — sin más copiar y pegar entre sistemas.',
    sd1cta:'Consulta gratuita →',
    sd2Num:'02 — IA Y AUTOMATIZACIÓN', sd2H2:'Deja de hacer trabajo<br>que una máquina debería hacer.',
    sd2P:'Si tú o tu equipo hacen lo mismo más de dos veces, probablemente podemos automatizarlo. Usamos IA y flujos inteligentes para eliminar trabajo repetitivo.',
    sd2f1h:'Automatización de correos', sd2f1p:'Respuestas automáticas, seguimientos y notificaciones en piloto automático.',
    sd2f2h:'Entrada de datos', sd2f2p:'Que las máquinas manejen las hojas de cálculo, formularios y transferencias de datos.',
    sd2f3h:'Herramientas con IA', sd2f3p:'Asistentes IA personalizados, generadores de contenido y analítica inteligente para tu negocio.',
    sd2cta:'Automatiza mi negocio →',
    sd3Num:'03 — CONSULTORÍA IT', sd3H2:'Estrategia tech que<br>realmente tiene sentido.',
    sd3P:'No necesitas un departamento de IT completo. Necesitas a alguien que entienda tu negocio, hable tu idioma y te dé respuestas directas. Esos somos nosotros.',
    sd3f1h:'Planificación de infraestructura', sd3f1p:'Configura las herramientas correctas, servicios en la nube y sistemas desde el primer día.',
    sd3f2h:'Seguridad y cumplimiento', sd3f2p:'Protege los datos de tu negocio sin complicarle la vida a todos.',
    sd3f3h:'Soporte continuo', sd3f3p:'Cuando algo se rompe a las 9 PM un martes, contestamos. Sin tickets, sin esperas.',
    sd3cta:'Habla con un experto →',
    sd4Num:'04 — SOPORTE PARA MAYORES Y FAMILIAS', sd4H2:'Ayuda tech que tu familia<br>realmente merece.',
    sd4P:'Tus padres no deberían tenerle miedo al teléfono. Tu abuela debería poder hacer videollamada con sus nietos. Brindamos soporte técnico paciente y bilingüe que trata a tu familia con respeto.',
    sd4f1h:'Configuración y capacitación', sd4f1p:'Teléfonos, tablets, computadoras — configurados correctamente y explicados en lenguaje simple.',
    sd4f2h:'Protección contra estafas', sd4f2p:'Enseñamos a tus seres queridos a identificar estafas y mantener su información segura.',
    sd4f3h:'Ayuda continua', sd4f3p:'A una llamada de distancia. Sin juicios, sin prisa — lo explicamos las veces que haga falta.',
    sd4cta:'Ayuda para mi familia →',

    contactH1:"Construyamos algo<br><span class='ta'>juntos.</span>",
    contactSub:'¿Tienes un proyecto en mente, necesitas ayuda tech, o quieres ver cómo podemos ayudarte? Escríbenos y te respondemos en menos de 24 horas.',
    cInfoEmail:'Correo', cInfoPhone:'Teléfono', cInfoWa:'WhatsApp',
    cInfoLoc:'Ubicación', cInfoLocVal:'Florida, EE.UU. — sirviendo clientes globalmente',
    cInfoLang:'Idiomas', cInfoLangVal:'Inglés · Español',
    cInfoHours:'Tiempo de respuesta', cInfoHoursVal:'Menos de 24 horas',
    cFormName:'Tu nombre', cFormEmail:'Tu correo', cFormService:'¿Con qué necesitas ayuda?',
    cFormOpt1:'Desarrollo de Apps', cFormOpt2:'IA y Automatización', cFormOpt3:'Consultoría IT',
    cFormOpt4:'Soporte Tech para Mayores / Familias', cFormOpt5:'Otro / No estoy seguro',
    cFormMsg:'Cuéntanos sobre tu proyecto o problema...',
    cFormBtn:'Enviar mensaje →',
    cFormSuccess:'Mensaje enviado — estaremos en contacto pronto.'
  }
};

function setLang(lang) {
  currentLang = lang;
  var t = T[lang];
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.documentElement.lang = lang;

  // Loop through all translation keys and apply
  var ids = Object.keys(t);
  for (var i = 0; i < ids.length; i++) {
    var key = ids[i];
    var val = t[key];
    // Convert camelCase key to dash-id: heroH1 -> hero-h1, pr1h -> pr1-h, etc.
    var id = key.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([a-z])(\d)/g, '$1-$2').toLowerCase();

    var el = document.getElementById(id);
    if (!el) continue;

    // Check if value contains HTML
    if (val.indexOf('<') !== -1) {
      el.innerHTML = val;
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  }

  // Handle select options for contact form
  var sel = document.getElementById('form-service');
  if (sel && sel.options.length >= 6) {
    sel.options[0].text = t.cFormService;
    sel.options[1].text = t.cFormOpt1;
    sel.options[2].text = t.cFormOpt2;
    sel.options[3].text = t.cFormOpt3;
    sel.options[4].text = t.cFormOpt4;
    sel.options[5].text = t.cFormOpt5;
  }

  // Update WhatsApp CTA button text
  var waBtns = document.querySelectorAll('.wa-btn-text');
  for (var j = 0; j < waBtns.length; j++) {
    waBtns[j].textContent = t.ctaWa;
  }

  // Update service page CTA buttons
  var sdCtas = [
    {id: 'sd1-cta', key: 'sd1cta'},
    {id: 'sd2-cta', key: 'sd2cta'},
    {id: 'sd3-cta', key: 'sd3cta'},
    {id: 'sd4-cta', key: 'sd4cta'}
  ];
  for (var k = 0; k < sdCtas.length; k++) {
    var ctaEl = document.getElementById(sdCtas[k].id);
    if (ctaEl) ctaEl.textContent = t[sdCtas[k].key];
  }
}

// Shared functions
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.querySelector('.t-hamburger').classList.toggle('open');
}

// Scroll shadow
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Contact form
function sendForm() {
  var name = document.getElementById('form-name');
  var email = document.getElementById('form-email');
  var msg = document.getElementById('form-msg');
  if (!name || !email || !msg) return;
  var n = name.value.trim(), e = email.value.trim(), m = msg.value.trim();
  if (!n || !e || !m) return;

  var isES = currentLang === 'es';
  var service = document.getElementById('form-service');
  var svc = service ? service.value : '';
  var subject = encodeURIComponent('Tolotech - ' + (isES ? 'Nuevo mensaje de contacto' : 'New Contact Message'));
  var body = encodeURIComponent(
    (isES ? 'Nombre' : 'Name') + ': ' + n + '\n' +
    (isES ? 'Correo' : 'Email') + ': ' + e + '\n' +
    (isES ? 'Servicio' : 'Service') + ': ' + (svc || 'N/A') + '\n\n' + m
  );
  window.location.href = 'mailto:tolotech2025@gmail.com?subject=' + subject + '&body=' + body;

  var success = document.getElementById('form-success');
  if (success) success.style.display = 'block';
  name.value = ''; email.value = ''; msg.value = '';
  if (service) service.selectedIndex = 0;
}
