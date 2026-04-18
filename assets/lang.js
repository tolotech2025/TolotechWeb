/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TOLOTECH â€” Language Switcher
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

let currentLang = 'en';

const translations = {
  en: {
    // Nav
    navHome: 'Home', navServices: 'Services', navAbout: 'About', navContact: 'Contact',
    navCta: 'Get in touch',
    // Home Hero
    heroBadge: 'FLORIDA, USA Â· BILINGUAL EN/ES',
    heroH1: 'Your business deserves<br>technology that<br><span class="ta">actually works.</span>',
    heroSub: "We help small businesses, families, and seniors navigate the digital world â€” with app development, AI automation, IT consulting, and patient, jargon-free tech support.",
    heroCta1: 'Talk to us today â†’', heroCta2: 'See our services',
    // Trust
    tr1: 'FLORIDA LLC', tr2: 'BILINGUAL EN/ES', tr3: 'REMOTE & ON-SITE', tr4: 'SENIOR-FRIENDLY',
    // Problems
    probLabel: 'THE PROBLEM', probH2: 'Sound familiar?',
    pr1h: 'Wasting hours on repetitive tasks', pr1p: "You're copying data, sending the same emails, and doing work a machine should handle â€” while your actual business waits.",
    pr2h: "Your tech doesn't talk to each other", pr2p: "Spreadsheets here, apps there, nothing connected. You're paying for tools that make your life harder, not easier.",
    pr3h: 'No one explains tech in plain language', pr3p: "Every IT company throws jargon at you. You just want someone to fix the problem and explain what happened â€” simply.",
    pr4h: "Your parents can't use their devices", pr4p: "Mom can't video call. Dad's phone is full of scam apps. You want someone patient and bilingual to actually help them.",
    // Services Preview
    svcLabel: 'WHAT WE DO', svcH2: 'Four ways we help you win.',
    sv1h: 'App Development', sv1p: 'Custom web and mobile apps built around your workflow â€” not the other way around.',
    sv2h: 'AI & Automation', sv2p: 'We automate the boring stuff â€” emails, data entry, scheduling â€” so your team focuses on real work.',
    sv3h: 'IT Consulting', sv3p: 'Reliable tech strategy and support for your business. No contracts, no surprises, just solutions.',
    sv4h: 'Senior & Family Tech Support', sv4p: 'Patient, bilingual help for your loved ones. We teach, fix, and protect â€” in language they understand.',
    svLink: 'Learn more â†’',
    // Why
    whyLabel: 'WHY TOLOTECH', whyH2: "We're not your typical IT company.",
    whyP: "We started Tolotech because we were tired of tech companies that overcomplicate things, overcharge, and disappear after the sale. We believe technology should be accessible to everyone â€” from startups to your grandparents.",
    w1h: 'No jargon, ever', w1p: "We explain everything in plain language. If you don't understand, we haven't done our job.",
    w2h: 'Fully bilingual', w2p: 'English and Spanish â€” no awkward translations. Real fluency, real understanding.',
    w3h: 'Built for small budgets', w3p: 'Enterprise-quality solutions without enterprise prices. We work with what you have.',
    w4h: 'We actually care', w4p: "Your success is our success. We're not here for a quick sale â€” we're here to build something that lasts.",
    // CTA
    ctaH2: 'Ready to stop fighting<br>with technology?',
    ctaP: "Tell us what's going on. We'll listen, figure out the best solution, and give you an honest quote â€” no pressure, no jargon.",
    ctaBtn: 'Email us now â†’',
    // Footer
    ftDesc: 'Technology that works for small businesses, families, and seniors. Based in Florida, serving the world.',
    ftNavTitle: 'Navigation', ftSvcTitle: 'Services', ftContactTitle: 'Contact',
    ftHome: 'Home', ftServices: 'Services', ftAbout: 'About', ftContact: 'Contact',
    ftS1: 'App Development', ftS2: 'AI & Automation', ftS3: 'IT Consulting', ftS4: 'Tech Support',
    ftLoc: 'Florida, USA', ftRights: 'All rights reserved.', ftTag: 'Next Generation Solutions',

    // â”€â”€ ABOUT PAGE â”€â”€
    aboutH1: 'We build the tech<br>small businesses<br><span class="ta">actually need.</span>',
    aboutSub: 'Tolotech is a technology company helping small businesses, families, and seniors grow with confidence in the digital world.',
    p1h: 'App Development', p1p: 'Custom web and mobile applications built to fit your business â€” not the other way around.',
    p2h: 'AI & Automation', p2p: 'We automate the repetitive so your team can focus on the work that actually matters.',
    p3h: 'IT Consulting', p3p: 'Reliable, no-nonsense IT support and strategy â€” from infrastructure to day-to-day ops.',
    storyH2: 'Built by operators,<br>for operators.',
    storyP1: "Tolotech was founded by someone who has spent years in the trenches of enterprise IT â€” managing complex systems, solving real problems, and watching small businesses get left behind by technology that wasn't built for them.",
    storyP2: 'We started Tolotech to change that. We bring enterprise-level thinking to small business budgets, delivering solutions that are practical, scalable, and built to last.',
    s1: 'Years of enterprise IT experience', s2: 'Core service areas', s3: 'Based & operating globally', s4: 'Automations waiting to be built',

    // â”€â”€ SERVICES PAGE â”€â”€
    svcHeroH1: 'Services built for<br><span class="ta">real businesses.</span>',
    svcHeroSub: "We don't sell hype. We solve problems. Here's exactly how we help small businesses, families, and seniors get the most out of technology.",
    sd1Num: '01 â€” APP DEVELOPMENT', sd1H2: 'Custom apps that<br>fit your business.',
    sd1P: "Off-the-shelf software forces you to change how you work. We build apps that adapt to you â€” your workflow, your team, your customers. From an internal tool to a customer-facing platform, we handle the full journey.",
    sd1f1h: 'Web applications', sd1f1p: 'Responsive web apps that work on any device, built for speed and simplicity.',
    sd1f2h: 'Mobile apps', sd1f2p: 'iOS and Android apps your customers will actually enjoy using.',
    sd1f3h: 'Integrations', sd1f3p: 'Connect your apps to the tools you already use â€” no more copy-pasting between systems.',
    sd2Num: '02 â€” AI & AUTOMATION', sd2H2: 'Stop doing work<br>a machine should do.',
    sd2P: "If you or your team are doing the same thing more than twice, we can probably automate it. We use AI and smart workflows to eliminate busywork, reduce errors, and save you hours every week.",
    sd2f1h: 'Email & messaging automation', sd2f1p: 'Auto-responses, follow-ups, and notifications that run on autopilot.',
    sd2f2h: 'Data entry & processing', sd2f2p: 'Let machines handle the spreadsheets, form entries, and data transfers.',
    sd2f3h: 'AI-powered tools', sd2f3p: 'Custom AI assistants, content generators, and smart analytics for your business.',
    sd3Num: '03 â€” IT CONSULTING', sd3H2: 'Tech strategy that<br>actually makes sense.',
    sd3P: "You don't need a full IT department. You need someone who understands your business, speaks your language, and gives you straight answers. That's us.",
    sd3f1h: 'Infrastructure planning', sd3f1p: 'Set up the right tools, cloud services, and systems from day one.',
    sd3f2h: 'Security & compliance', sd3f2p: "Protect your business data without making everyone's life harder.",
    sd3f3h: 'Ongoing support', sd3f3p: "When something breaks at 9 PM on a Tuesday, we pick up. No tickets, no waiting.",
    sd4Num: '04 â€” SENIOR & FAMILY SUPPORT', sd4H2: 'Tech help your family<br>actually deserves.',
    sd4P: "Your parents shouldn't be afraid of their phone. Your grandma should be able to video call her grandkids. We provide patient, bilingual tech support that treats your family with respect â€” not condescension.",
    sd4f1h: 'Device setup & training', sd4f1p: 'Phones, tablets, computers â€” set up right and explained in plain language.',
    sd4f2h: 'Scam & fraud protection', sd4f2p: 'We teach your loved ones how to spot scams and keep their information safe.',
    sd4f3h: 'Ongoing help', sd4f3p: "A friendly phone call away. No judgment, no rush â€” we'll explain it as many times as needed.",

    // â”€â”€ CONTACT PAGE â”€â”€
    contactH1: "Let's build something<br><span class='ta'>together.</span>",
    contactSub: "Have a project in mind, need tech help, or just want to see how we can help? Drop us a message and we'll get back to you within 24 hours.",
    cInfoEmail: 'Email', cInfoLoc: 'Location', cInfoLocVal: 'Florida, USA â€” serving clients globally',
    cInfoLang: 'Languages', cInfoLangVal: 'English Â· Spanish',
    cInfoHours: 'Response time', cInfoHoursVal: 'Within 24 hours',
    cFormName: 'Your name', cFormEmail: 'Your email', cFormService: 'What do you need help with?',
    cFormOpt1: 'App Development', cFormOpt2: 'AI & Automation', cFormOpt3: 'IT Consulting',
    cFormOpt4: 'Senior / Family Tech Support', cFormOpt5: 'Other / Not sure',
    cFormMsg: 'Tell us about your project or problem...',
    cFormBtn: 'Send message â†’',
    cFormSuccess: "Message sent â€” we'll be in touch soon."
  },
  es: {
    navHome: 'Inicio', navServices: 'Servicios', navAbout: 'Nosotros', navContact: 'Contacto',
    navCta: 'ContÃ¡ctanos',
    heroBadge: 'FLORIDA, EE.UU. Â· BILINGÃœE EN/ES',
    heroH1: 'Tu negocio merece<br>tecnologÃ­a que<br><span class="ta">realmente funcione.</span>',
    heroSub: 'Ayudamos a pequeÃ±as empresas, familias y personas mayores a navegar el mundo digital â€” con desarrollo de apps, automatizaciÃ³n con IA, consultorÃ­a IT y soporte tÃ©cnico paciente, sin tecnicismos.',
    heroCta1: 'Hablemos hoy â†’', heroCta2: 'Ver servicios',
    tr1: 'LLC EN FLORIDA', tr2: 'BILINGÃœE EN/ES', tr3: 'REMOTO Y PRESENCIAL', tr4: 'AMIGABLE CON MAYORES',
    probLabel: 'EL PROBLEMA', probH2: 'Â¿Te suena familiar?',
    pr1h: 'Pierdes horas en tareas repetitivas', pr1p: 'Copiar datos, enviar los mismos correos, hacer trabajo que una mÃ¡quina deberÃ­a manejar â€” mientras tu negocio real espera.',
    pr2h: 'Tu tecnologÃ­a no se comunica entre sÃ­', pr2p: 'Hojas de cÃ¡lculo por un lado, apps por otro, nada conectado. Pagas por herramientas que te complican la vida.',
    pr3h: 'Nadie explica la tecnologÃ­a en lenguaje simple', pr3p: 'Toda empresa de IT te llena de tecnicismos. Solo quieres que alguien arregle el problema y te explique quÃ© pasÃ³ â€” simple.',
    pr4h: 'Tus padres no pueden usar sus dispositivos', pr4p: 'MamÃ¡ no puede hacer videollamada. PapÃ¡ tiene el telÃ©fono lleno de apps de estafa. Necesitas a alguien paciente y bilingÃ¼e.',
    svcLabel: 'LO QUE HACEMOS', svcH2: 'Cuatro formas de ayudarte a ganar.',
    sv1h: 'Desarrollo de Apps', sv1p: 'Aplicaciones web y mÃ³viles a medida, diseÃ±adas alrededor de tu flujo de trabajo.',
    sv2h: 'IA y AutomatizaciÃ³n', sv2p: 'Automatizamos lo aburrido â€” correos, datos, agendas â€” para que tu equipo haga trabajo de verdad.',
    sv3h: 'ConsultorÃ­a IT', sv3p: 'Estrategia y soporte tecnolÃ³gico confiable. Sin contratos, sin sorpresas, solo soluciones.',
    sv4h: 'Soporte Tech para Mayores y Familias', sv4p: 'Ayuda paciente y bilingÃ¼e para tus seres queridos. EnseÃ±amos, arreglamos y protegemos â€” en su idioma.',
    svLink: 'Saber mÃ¡s â†’',
    whyLabel: 'POR QUÃ‰ TOLOTECH', whyH2: 'No somos la tÃ­pica empresa de IT.',
    whyP: 'Fundamos Tolotech porque estÃ¡bamos cansados de empresas tech que complican todo, cobran de mÃ¡s y desaparecen despuÃ©s de la venta. Creemos que la tecnologÃ­a deberÃ­a ser accesible para todos â€” desde startups hasta tus abuelos.',
    w1h: 'Sin tecnicismos, nunca', w1p: 'Explicamos todo en lenguaje simple. Si no entiendes, no hemos hecho nuestro trabajo.',
    w2h: 'Completamente bilingÃ¼e', w2p: 'InglÃ©s y espaÃ±ol â€” sin traducciones raras. Fluidez real, entendimiento real.',
    w3h: 'Hecho para presupuestos pequeÃ±os', w3p: 'Soluciones de nivel empresarial sin precios empresariales. Trabajamos con lo que tienes.',
    w4h: 'Nos importa de verdad', w4p: 'Tu Ã©xito es nuestro Ã©xito. No buscamos una venta rÃ¡pida â€” queremos construir algo que dure.',
    ctaH2: 'Â¿Listo para dejar de pelear<br>con la tecnologÃ­a?',
    ctaP: 'CuÃ©ntanos quÃ© pasa. Escuchamos, buscamos la mejor soluciÃ³n y te damos un presupuesto honesto â€” sin presiÃ³n, sin tecnicismos.',
    ctaBtn: 'EscrÃ­benos ahora â†’',
    ftDesc: 'TecnologÃ­a que funciona para pequeÃ±as empresas, familias y personas mayores. Con base en Florida, sirviendo al mundo.',
    ftNavTitle: 'NavegaciÃ³n', ftSvcTitle: 'Servicios', ftContactTitle: 'Contacto',
    ftHome: 'Inicio', ftServices: 'Servicios', ftAbout: 'Nosotros', ftContact: 'Contacto',
    ftS1: 'Desarrollo de Apps', ftS2: 'IA y AutomatizaciÃ³n', ftS3: 'ConsultorÃ­a IT', ftS4: 'Soporte Tech',
    ftLoc: 'Florida, EE.UU.', ftRights: 'Todos los derechos reservados.', ftTag: 'Soluciones de Nueva GeneraciÃ³n',

    aboutH1: 'Creamos la tecnologÃ­a<br>que las pequeÃ±as empresas<br><span class="ta">realmente necesitan.</span>',
    aboutSub: 'Tolotech es una empresa de tecnologÃ­a que ayuda a pequeÃ±as empresas, familias y personas mayores a crecer con confianza en el mundo digital.',
    p1h: 'Desarrollo de Apps', p1p: 'Aplicaciones web y mÃ³viles a medida, diseÃ±adas para adaptarse a tu negocio â€” y no al revÃ©s.',
    p2h: 'IA y AutomatizaciÃ³n', p2p: 'Automatizamos lo repetitivo para que tu equipo pueda enfocarse en lo que realmente importa.',
    p3h: 'ConsultorÃ­a IT', p3p: 'Soporte IT confiable y directo â€” desde infraestructura hasta operaciones del dÃ­a a dÃ­a.',
    storyH2: 'Creado por operadores,<br>para operadores.',
    storyP1: 'Tolotech fue fundada por alguien que pasÃ³ aÃ±os en las trincheras del IT empresarial â€” gestionando sistemas complejos, resolviendo problemas reales, y viendo cÃ³mo las pequeÃ±as empresas quedaban rezagadas por tecnologÃ­a que no fue hecha para ellas.',
    storyP2: 'Fundamos Tolotech para cambiar eso. Llevamos el pensamiento empresarial a presupuestos de pequeÃ±a empresa, entregando soluciones prÃ¡cticas, escalables y construidas para durar.',
    s1: 'AÃ±os de experiencia en IT empresarial', s2: 'Ãreas de servicio', s3: 'Base en EE.UU., operaciÃ³n global', s4: 'Automatizaciones por construir',

    svcHeroH1: 'Servicios hechos para<br><span class="ta">negocios reales.</span>',
    svcHeroSub: 'No vendemos humo. Resolvemos problemas. AsÃ­ es exactamente como ayudamos a pequeÃ±as empresas, familias y personas mayores a aprovechar la tecnologÃ­a.',
    sd1Num: '01 â€” DESARROLLO DE APPS', sd1H2: 'Apps a medida que<br>se adaptan a tu negocio.',
    sd1P: 'El software genÃ©rico te obliga a cambiar cÃ³mo trabajas. Nosotros creamos apps que se adaptan a ti â€” tu flujo de trabajo, tu equipo, tus clientes.',
    sd1f1h: 'Aplicaciones web', sd1f1p: 'Apps web responsivas que funcionan en cualquier dispositivo, hechas para velocidad y simplicidad.',
    sd1f2h: 'Apps mÃ³viles', sd1f2p: 'Apps para iOS y Android que tus clientes van a disfrutar usar.',
    sd1f3h: 'Integraciones', sd1f3p: 'Conecta tus apps con las herramientas que ya usas â€” sin mÃ¡s copiar y pegar entre sistemas.',
    sd2Num: '02 â€” IA Y AUTOMATIZACIÃ“N', sd2H2: 'Deja de hacer trabajo<br>que una mÃ¡quina deberÃ­a hacer.',
    sd2P: 'Si tÃº o tu equipo hacen lo mismo mÃ¡s de dos veces, probablemente podemos automatizarlo. Usamos IA y flujos inteligentes para eliminar trabajo repetitivo.',
    sd2f1h: 'AutomatizaciÃ³n de correos', sd2f1p: 'Respuestas automÃ¡ticas, seguimientos y notificaciones en piloto automÃ¡tico.',
    sd2f2h: 'Entrada de datos', sd2f2p: 'Que las mÃ¡quinas manejen las hojas de cÃ¡lculo, formularios y transferencias de datos.',
    sd2f3h: 'Herramientas con IA', sd2f3p: 'Asistentes IA personalizados, generadores de contenido y analÃ­tica inteligente para tu negocio.',
    sd3Num: '03 â€” CONSULTORÃA IT', sd3H2: 'Estrategia tech que<br>realmente tiene sentido.',
    sd3P: 'No necesitas un departamento de IT completo. Necesitas a alguien que entienda tu negocio, hable tu idioma y te dÃ© respuestas directas. Esos somos nosotros.',
    sd3f1h: 'PlanificaciÃ³n de infraestructura', sd3f1p: 'Configura las herramientas correctas, servicios en la nube y sistemas desde el primer dÃ­a.',
    sd3f2h: 'Seguridad y cumplimiento', sd3f2p: 'Protege los datos de tu negocio sin complicarle la vida a todos.',
    sd3f3h: 'Soporte continuo', sd3f3p: 'Cuando algo se rompe a las 9 PM un martes, contestamos. Sin tickets, sin esperas.',
    sd4Num: '04 â€” SOPORTE PARA MAYORES Y FAMILIAS', sd4H2: 'Ayuda tech que tu familia<br>realmente merece.',
    sd4P: 'Tus padres no deberÃ­an tenerle miedo al telÃ©fono. Tu abuela deberÃ­a poder hacer videollamada con sus nietos. Brindamos soporte tÃ©cnico paciente y bilingÃ¼e que trata a tu familia con respeto.',
    sd4f1h: 'ConfiguraciÃ³n y capacitaciÃ³n', sd4f1p: 'TelÃ©fonos, tablets, computadoras â€” configurados correctamente y explicados en lenguaje simple.',
    sd4f2h: 'ProtecciÃ³n contra estafas', sd4f2p: 'EnseÃ±amos a tus seres queridos a identificar estafas y mantener su informaciÃ³n segura.',
    sd4f3h: 'Ayuda continua', sd4f3p: 'A una llamada de distancia. Sin juicios, sin prisa â€” lo explicamos las veces que haga falta.',

    contactH1: "Construyamos algo<br><span class='ta'>juntos.</span>",
    contactSub: 'Â¿Tienes un proyecto en mente, necesitas ayuda tech, o quieres ver cÃ³mo podemos ayudarte? EscrÃ­benos y te respondemos en menos de 24 horas.',
    cInfoEmail: 'Correo', cInfoLoc: 'UbicaciÃ³n', cInfoLocVal: 'Florida, EE.UU. â€” sirviendo clientes globalmente',
    cInfoLang: 'Idiomas', cInfoLangVal: 'InglÃ©s Â· EspaÃ±ol',
    cInfoHours: 'Tiempo de respuesta', cInfoHoursVal: 'Menos de 24 horas',
    cFormName: 'Tu nombre', cFormEmail: 'Tu correo', cFormService: 'Â¿Con quÃ© necesitas ayuda?',
    cFormOpt1: 'Desarrollo de Apps', cFormOpt2: 'IA y AutomatizaciÃ³n', cFormOpt3: 'ConsultorÃ­a IT',
    cFormOpt4: 'Soporte Tech para Mayores / Familias', cFormOpt5: 'Otro / No estoy seguro',
    cFormMsg: 'CuÃ©ntanos sobre tu proyecto o problema...',
    cFormBtn: 'Enviar mensaje â†’',
    cFormSuccess: 'Mensaje enviado â€” estaremos en contacto pronto.'
  }
};

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.documentElement.lang = lang;

  // Safe setter
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }
  function setHTML(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
  function setPlaceholder(id, val) {
    const el = document.getElementById(id);
    if (el) el.placeholder = val;
  }

  // Nav
  setText('nav-home', t.navHome); setText('nav-services', t.navServices);
  setText('nav-about', t.navAbout); setText('nav-contact', t.navContact);
  setText('nav-cta', t.navCta);
  setText('m-nav-home', t.navHome); setText('m-nav-services', t.navServices);
  setText('m-nav-about', t.navAbout); setText('m-nav-contact', t.navContact);

  // Home
  setText('hero-badge', t.heroBadge); setHTML('hero-h1', t.heroH1);
  setText('hero-sub', t.heroSub);
  setText('hero-cta1', t.heroCta1); setText('hero-cta2', t.heroCta2);
  setText('tr1', t.tr1); setText('tr2', t.tr2); setText('tr3', t.tr3); setText('tr4', t.tr4);
  setText('prob-label', t.probLabel); setText('prob-h2', t.probH2);
  setText('pr1-h', t.pr1h); setText('pr1-p', t.pr1p);
  setText('pr2-h', t.pr2h); setText('pr2-p', t.pr2p);
  setText('pr3-h', t.pr3h); setText('pr3-p', t.pr3p);
  setText('pr4-h', t.pr4h); setText('pr4-p', t.pr4p);
  setText('svc-label', t.svcLabel); setText('svc-h2', t.svcH2);
  setText('sv1-h', t.sv1h); setText('sv1-p', t.sv1p);
  setText('sv2-h', t.sv2h); setText('sv2-p', t.sv2p);
  setText('sv3-h', t.sv3h); setText('sv3-p', t.sv3p);
  setText('sv4-h', t.sv4h); setText('sv4-p', t.sv4p);
  setText('sv1-link', t.svLink); setText('sv2-link', t.svLink);
  setText('sv3-link', t.svLink); setText('sv4-link', t.svLink);
  setText('why-label', t.whyLabel); setText('why-h2', t.whyH2); setText('why-p', t.whyP);
  setText('w1-h', t.w1h); setText('w1-p', t.w1p);
  setText('w2-h', t.w2h); setText('w2-p', t.w2p);
  setText('w3-h', t.w3h); setText('w3-p', t.w3p);
  setText('w4-h', t.w4h); setText('w4-p', t.w4p);
  setHTML('cta-h2', t.ctaH2); setText('cta-p', t.ctaP); setText('cta-btn', t.ctaBtn);
  setText('ft-desc', t.ftDesc);
  setText('ft-nav-title', t.ftNavTitle); setText('ft-svc-title', t.ftSvcTitle); setText('ft-contact-title', t.ftContactTitle);
  setText('ft-home', t.ftHome); setText('ft-services', t.ftServices);
  setText('ft-about', t.ftAbout); setText('ft-contact', t.ftContact);
  setText('ft-s1', t.ftS1); setText('ft-s2', t.ftS2);
  setText('ft-s3', t.ftS3); setText('ft-s4', t.ftS4);
  setText('ft-loc', t.ftLoc); setText('ft-rights', t.ftRights); setText('ft-tag', t.ftTag);

  // About
  setHTML('about-h1', t.aboutH1); setText('about-sub', t.aboutSub);
  setText('p1-h', t.p1h); setText('p1-p', t.p1p);
  setText('p2-h', t.p2h); setText('p2-p', t.p2p);
  setText('p3-h', t.p3h); setText('p3-p', t.p3p);
  setHTML('story-h2', t.storyH2);
  setText('story-p1', t.storyP1); setText('story-p2', t.storyP2);
  setText('s1', t.s1); setText('s2', t.s2); setText('s3', t.s3); setText('s4', t.s4);

  // Services
  setHTML('svc-hero-h1', t.svcHeroH1); setText('svc-hero-sub', t.svcHeroSub);
  setText('sd1-num', t.sd1Num); setHTML('sd1-h2', t.sd1H2); setText('sd1-p', t.sd1P);
  setText('sd1f1-h', t.sd1f1h); setText('sd1f1-p', t.sd1f1p);
  setText('sd1f2-h', t.sd1f2h); setText('sd1f2-p', t.sd1f2p);
  setText('sd1f3-h', t.sd1f3h); setText('sd1f3-p', t.sd1f3p);
  setText('sd2-num', t.sd2Num); setHTML('sd2-h2', t.sd2H2); setText('sd2-p', t.sd2P);
  setText('sd2f1-h', t.sd2f1h); setText('sd2f1-p', t.sd2f1p);
  setText('sd2f2-h', t.sd2f2h); setText('sd2f2-p', t.sd2f2p);
  setText('sd2f3-h', t.sd2f3h); setText('sd2f3-p', t.sd2f3p);
  setText('sd3-num', t.sd3Num); setHTML('sd3-h2', t.sd3H2); setText('sd3-p', t.sd3P);
  setText('sd3f1-h', t.sd3f1h); setText('sd3f1-p', t.sd3f1p);
  setText('sd3f2-h', t.sd3f2h); setText('sd3f2-p', t.sd3f2p);
  setText('sd3f3-h', t.sd3f3h); setText('sd3f3-p', t.sd3f3p);
  setText('sd4-num', t.sd4Num); setHTML('sd4-h2', t.sd4H2); setText('sd4-p', t.sd4P);
  setText('sd4f1-h', t.sd4f1h); setText('sd4f1-p', t.sd4f1p);
  setText('sd4f2-h', t.sd4f2h); setText('sd4f2-p', t.sd4f2p);
  setText('sd4f3-h', t.sd4f3h); setText('sd4f3-p', t.sd4f3p);

  // Contact
  setHTML('contact-h1', t.contactH1); setText('contact-sub', t.contactSub);
  setText('c-info-email', t.cInfoEmail); setText('c-info-loc', t.cInfoLoc);
  setText('c-info-loc-val', t.cInfoLocVal); setText('c-info-lang', t.cInfoLang);
  setText('c-info-lang-val', t.cInfoLangVal); setText('c-info-hours', t.cInfoHours);
  setText('c-info-hours-val', t.cInfoHoursVal);
  setPlaceholder('form-name', t.cFormName); setPlaceholder('form-email', t.cFormEmail);
  setPlaceholder('form-msg', t.cFormMsg);
  setText('form-btn', t.cFormBtn); setText('form-success', t.cFormSuccess);

  // Service select options
  const sel = document.getElementById('form-service');
  if (sel) {
    sel.options[0].text = t.cFormService;
    sel.options[1].text = t.cFormOpt1;
    sel.options[2].text = t.cFormOpt2;
    sel.options[3].text = t.cFormOpt3;
    sel.options[4].text = t.cFormOpt4;
    sel.options[5].text = t.cFormOpt5;
  }
}
