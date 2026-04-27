/* ══════════════════════════════════════
   TOLOTECH — Language Switcher v3
   Explicit ID mapping — no guesswork
   ══════════════════════════════════════ */

var currentLang = 'en';

/* Each entry: [elementId, enText, esText, 'html'|'text'|'placeholder']
   'html' = innerHTML, 'text' = textContent, 'placeholder' = placeholder */

var MAP = [
  // ── NAV (all pages) ──
  ['nav-home','Home','Inicio'],
  ['nav-services','Services','Servicios'],
  ['nav-about','About','Nosotros'],
  ['nav-contact','Contact','Contacto'],
  ['nav-cta','Get in touch','Contáctanos'],
  ['m-nav-home','Home','Inicio'],
  ['m-nav-services','Services','Servicios'],
  ['m-nav-about','About','Nosotros'],
  ['m-nav-contact','Contact','Contacto'],

  // ── HOME: Hero ──
  ['hero-badge','FLORIDA, USA · BILINGUAL EN/ES','FLORIDA, EE.UU. · BILINGÜE EN/ES'],
  ['hero-h1','Your business deserves<br>technology that<br><span class="ta">actually works.</span>','Tu negocio merece<br>tecnología que<br><span class="ta">realmente funcione.</span>','html'],
  ['hero-sub','We help small businesses, families, and seniors navigate the digital world — with app development, AI automation, IT consulting, and patient, jargon-free tech support.','Ayudamos a pequeñas empresas, familias y personas mayores a navegar el mundo digital — con desarrollo de apps, automatización con IA, consultoría IT y soporte técnico paciente, sin tecnicismos.'],
  ['hero-cta1','Talk to us today →','Hablemos hoy →'],
  ['hero-cta2','See our services','Ver servicios'],

  // ── HOME: Trust ──
  ['tr1','FLORIDA LLC','LLC EN FLORIDA'],
  ['tr2','BILINGUAL EN/ES','BILINGÜE EN/ES'],
  ['tr3','REMOTE & ON-SITE','REMOTO Y PRESENCIAL'],
  ['tr4','SENIOR-FRIENDLY','AMIGABLE CON MAYORES'],

  // ── HOME: Problems ──
  ['prob-label','THE PROBLEM','EL PROBLEMA'],
  ['prob-h2','Sound familiar?','¿Te suena familiar?'],
  ['pr1-h','Wasting hours on repetitive tasks','Pierdes horas en tareas repetitivas'],
  ['pr1-p',"You're copying data, sending the same emails, and doing work a machine should handle — while your actual business waits.",'Copiar datos, enviar los mismos correos, hacer trabajo que una máquina debería manejar — mientras tu negocio real espera.'],
  ['pr2-h',"Your tech doesn't talk to each other",'Tu tecnología no se comunica entre sí'],
  ['pr2-p',"Spreadsheets here, apps there, nothing connected. You're paying for tools that make your life harder, not easier.",'Hojas de cálculo por un lado, apps por otro, nada conectado. Pagas por herramientas que te complican la vida.'],
  ['pr3-h','No one explains tech in plain language','Nadie explica la tecnología en lenguaje simple'],
  ['pr3-p',"Every IT company throws jargon at you. You just want someone to fix the problem and explain what happened — simply.",'Toda empresa de IT te llena de tecnicismos. Solo quieres que alguien arregle el problema y te explique qué pasó — simple.'],
  ['pr4-h',"Your parents can't use their devices",'Tus padres no pueden usar sus dispositivos'],
  ['pr4-p',"Mom can't video call. Dad's phone is full of scam apps. You want someone patient and bilingual to actually help them.",'Mamá no puede hacer videollamada. Papá tiene el teléfono lleno de apps de estafa. Necesitas a alguien paciente y bilingüe.'],

  // ── HOME: Services Preview ──
  ['svc-label','WHAT WE DO','LO QUE HACEMOS'],
  ['svc-h2','Four ways we help you win.','Cuatro formas de ayudarte a ganar.'],
  ['sv1-h','App Development','Desarrollo de Apps'],
  ['sv1-p','Custom web and mobile apps built around your workflow — not the other way around.','Aplicaciones web y móviles a medida, diseñadas alrededor de tu flujo de trabajo.'],
  ['sv1-link','Learn more →','Saber más →'],
  ['sv2-h','AI & Automation','IA y Automatización'],
  ['sv2-p','We automate the boring stuff — emails, data entry, scheduling — so your team focuses on real work.','Automatizamos lo aburrido — correos, datos, agendas — para que tu equipo haga trabajo de verdad.'],
  ['sv2-link','Learn more →','Saber más →'],
  ['sv3-h','IT Consulting','Consultoría IT'],
  ['sv3-p','Reliable tech strategy and support for your business. No contracts, no surprises, just solutions.','Estrategia y soporte tecnológico confiable. Sin contratos, sin sorpresas, solo soluciones.'],
  ['sv3-link','Learn more →','Saber más →'],
  ['sv4-h','Senior & Family Tech Support','Soporte Tech para Mayores y Familias'],
  ['sv4-p','Patient, bilingual help for your loved ones. We teach, fix, and protect — in language they understand.','Ayuda paciente y bilingüe para tus seres queridos. Enseñamos, arreglamos y protegemos — en su idioma.'],
  ['sv4-link','Learn more →','Saber más →'],

  // ── HOME: Why ──
  ['why-label','WHY TOLOTECH','POR QUÉ TOLOTECH'],
  ['why-h2',"We're not your typical IT company.",'No somos la típica empresa de IT.'],
  ['why-p',"We started Tolotech because we were tired of tech companies that overcomplicate things, overcharge, and disappear after the sale. We believe technology should be accessible to everyone — from startups to your grandparents.",'Fundamos Tolotech porque estábamos cansados de empresas tech que complican todo, cobran de más y desaparecen después de la venta. Creemos que la tecnología debería ser accesible para todos — desde startups hasta tus abuelos.'],
  ['w1-h','No jargon, ever','Sin tecnicismos, nunca'],
  ['w1-p',"We explain everything in plain language. If you don't understand, we haven't done our job.",'Explicamos todo en lenguaje simple. Si no entiendes, no hemos hecho nuestro trabajo.'],
  ['w2-h','Fully bilingual','Completamente bilingüe'],
  ['w2-p','English and Spanish — no awkward translations. Real fluency, real understanding.','Inglés y español — sin traducciones raras. Fluidez real, entendimiento real.'],
  ['w3-h','Built for small budgets','Hecho para presupuestos pequeños'],
  ['w3-p','Enterprise-quality solutions without enterprise prices. We work with what you have.','Soluciones de nivel empresarial sin precios empresariales. Trabajamos con lo que tienes.'],
  ['w4-h','We actually care','Nos importa de verdad'],
  ['w4-p',"Your success is our success. We're not here for a quick sale — we're here to build something that lasts.",'Tu éxito es nuestro éxito. No buscamos una venta rápida — queremos construir algo que dure.'],

  // ── CTA (all pages) ──
  ['cta-h2','Ready to stop fighting<br>with technology?','¿Listo para dejar de pelear<br>con la tecnología?','html'],
  ['cta-p',"Tell us what's going on. We'll listen, figure out the best solution, and give you an honest quote — no pressure, no jargon.",'Cuéntanos qué pasa. Escuchamos, buscamos la mejor solución y te damos un presupuesto honesto — sin presión, sin tecnicismos.'],
  ['cta-btn','Email us now →','Escríbenos ahora →'],

  // ── FOOTER (all pages) ──
  ['ft-desc','Technology that works for small businesses, families, and seniors. Based in Florida, serving the world.','Tecnología que funciona para pequeñas empresas, familias y personas mayores. Con base en Florida, sirviendo al mundo.'],
  ['ft-nav-title','Navigation','Navegación'],
  ['ft-svc-title','Services','Servicios'],
  ['ft-contact-title','Contact','Contacto'],
  ['ft-home','Home','Inicio'],
  ['ft-services','Services','Servicios'],
  ['ft-about','About','Nosotros'],
  ['ft-contact','Contact','Contacto'],
  ['ft-s1','App Development','Desarrollo de Apps'],
  ['ft-s2','AI & Automation','IA y Automatización'],
  ['ft-s3','IT Consulting','Consultoría IT'],
  ['ft-s4','Tech Support','Soporte Tech'],
  ['ft-loc','Florida, USA','Florida, EE.UU.'],
  ['ft-rights','All rights reserved.','Todos los derechos reservados.'],
  ['ft-tag','Next Generation Solutions','Soluciones de Nueva Generación'],

  // ── ABOUT PAGE ──
  ['about-h1','We build the tech<br>small businesses<br><span class="ta">actually need.</span>','Creamos la tecnología<br>que las pequeñas empresas<br><span class="ta">realmente necesitan.</span>','html'],
  ['about-sub','Tolotech is a technology company helping small businesses, families, and seniors grow with confidence in the digital world.','Tolotech es una empresa de tecnología que ayuda a pequeñas empresas, familias y personas mayores a crecer con confianza en el mundo digital.'],
  ['p1-h','App Development','Desarrollo de Apps'],
  ['p1-p','Custom web and mobile applications built to fit your business — not the other way around.','Aplicaciones web y móviles a medida, diseñadas para adaptarse a tu negocio — y no al revés.'],
  ['p2-h','AI & Automation','IA y Automatización'],
  ['p2-p','We automate the repetitive so your team can focus on the work that actually matters.','Automatizamos lo repetitivo para que tu equipo pueda enfocarse en lo que realmente importa.'],
  ['p3-h','IT Consulting','Consultoría IT'],
  ['p3-p','Reliable, no-nonsense IT support and strategy — from infrastructure to day-to-day ops.','Soporte IT confiable y directo — desde infraestructura hasta operaciones del día a día.'],
  ['story-h2','Built by operators,<br>for operators.','Creado por operadores,<br>para operadores.','html'],
  ['story-p1',"Tolotech was founded by someone who has spent years in the trenches of enterprise IT — managing complex systems, solving real problems, and watching small businesses get left behind by technology that wasn't built for them.",'Tolotech fue fundada por alguien que pasó años en las trincheras del IT empresarial — gestionando sistemas complejos, resolviendo problemas reales, y viendo cómo las pequeñas empresas quedaban rezagadas por tecnología que no fue hecha para ellas.'],
  ['story-p2','We started Tolotech to change that. We bring enterprise-level thinking to small business budgets, delivering solutions that are practical, scalable, and built to last.','Fundamos Tolotech para cambiar eso. Llevamos el pensamiento empresarial a presupuestos de pequeña empresa, entregando soluciones prácticas, escalables y construidas para durar.'],
  ['s1','Years of enterprise IT experience','Años de experiencia en IT empresarial'],
  ['s2','Core service areas','Áreas de servicio'],
  ['s3','Based & operating globally','Base en EE.UU., operación global'],
  ['s4','Automations waiting to be built','Automatizaciones por construir'],

  // ── SERVICES PAGE ──
  ['svc-hero-h1','Services built for<br><span class="ta">real businesses.</span>','Servicios hechos para<br><span class="ta">negocios reales.</span>','html'],
  ['svc-hero-sub',"We don't sell hype. We solve problems. Here's exactly how we help small businesses, families, and seniors get the most out of technology.",'No vendemos humo. Resolvemos problemas. Así es exactamente como ayudamos a pequeñas empresas, familias y personas mayores a aprovechar la tecnología.'],
  ['sd1-num','01 — APP DEVELOPMENT','01 — DESARROLLO DE APPS'],
  ['sd1-h2','Custom apps that<br>fit your business.','Apps a medida que<br>se adaptan a tu negocio.','html'],
  ['sd1-p','Off-the-shelf software forces you to change how you work. We build apps that adapt to you — your workflow, your team, your customers.','El software genérico te obliga a cambiar cómo trabajas. Nosotros creamos apps que se adaptan a ti — tu flujo de trabajo, tu equipo, tus clientes.'],
  ['sd1-cta','Get a free consultation →','Consulta gratuita →'],
  ['sd1f1-h','Web applications','Aplicaciones web'],
  ['sd1f1-p','Responsive web apps that work on any device, built for speed and simplicity.','Apps web responsivas que funcionan en cualquier dispositivo, hechas para velocidad y simplicidad.'],
  ['sd1f2-h','Mobile apps','Apps móviles'],
  ['sd1f2-p','iOS and Android apps your customers will actually enjoy using.','Apps para iOS y Android que tus clientes van a disfrutar usar.'],
  ['sd1f3-h','Integrations','Integraciones'],
  ['sd1f3-p','Connect your apps to the tools you already use — no more copy-pasting between systems.','Conecta tus apps con las herramientas que ya usas — sin más copiar y pegar entre sistemas.'],

  ['sd2-num','02 — AI & AUTOMATION','02 — IA Y AUTOMATIZACIÓN'],
  ['sd2-h2','Stop doing work<br>a machine should do.','Deja de hacer trabajo<br>que una máquina debería hacer.','html'],
  ['sd2-p','If you or your team are doing the same thing more than twice, we can probably automate it. We use AI and smart workflows to eliminate busywork and save you hours every week.','Si tú o tu equipo hacen lo mismo más de dos veces, probablemente podemos automatizarlo. Usamos IA y flujos inteligentes para eliminar trabajo repetitivo.'],
  ['sd2-cta','Automate my business →','Automatiza mi negocio →'],
  ['sd2f1-h','Email & messaging automation','Automatización de correos'],
  ['sd2f1-p','Auto-responses, follow-ups, and notifications that run on autopilot.','Respuestas automáticas, seguimientos y notificaciones en piloto automático.'],
  ['sd2f2-h','Data entry & processing','Entrada de datos'],
  ['sd2f2-p','Let machines handle the spreadsheets, form entries, and data transfers.','Que las máquinas manejen las hojas de cálculo, formularios y transferencias de datos.'],
  ['sd2f3-h','AI-powered tools','Herramientas con IA'],
  ['sd2f3-p','Custom AI assistants, content generators, and smart analytics for your business.','Asistentes IA personalizados, generadores de contenido y analítica inteligente para tu negocio.'],

  ['sd3-num','03 — IT CONSULTING','03 — CONSULTORÍA IT'],
  ['sd3-h2','Tech strategy that<br>actually makes sense.','Estrategia tech que<br>realmente tiene sentido.','html'],
  ['sd3-p',"You don't need a full IT department. You need someone who understands your business, speaks your language, and gives you straight answers. That's us.",'No necesitas un departamento de IT completo. Necesitas a alguien que entienda tu negocio, hable tu idioma y te dé respuestas directas. Esos somos nosotros.'],
  ['sd3-cta','Talk to an expert →','Habla con un experto →'],
  ['sd3f1-h','Infrastructure planning','Planificación de infraestructura'],
  ['sd3f1-p','Set up the right tools, cloud services, and systems from day one.','Configura las herramientas correctas, servicios en la nube y sistemas desde el primer día.'],
  ['sd3f2-h','Security & compliance','Seguridad y cumplimiento'],
  ['sd3f2-p',"Protect your business data without making everyone's life harder.",'Protege los datos de tu negocio sin complicarle la vida a todos.'],
  ['sd3f3-h','Ongoing support','Soporte continuo'],
  ['sd3f3-p',"When something breaks at 9 PM on a Tuesday, we pick up. No tickets, no waiting.",'Cuando algo se rompe a las 9 PM un martes, contestamos. Sin tickets, sin esperas.'],

  ['sd4-num','04 — SENIOR & FAMILY SUPPORT','04 — SOPORTE PARA MAYORES Y FAMILIAS'],
  ['sd4-h2','Tech help your family<br>actually deserves.','Ayuda tech que tu familia<br>realmente merece.','html'],
  ['sd4-p',"Your parents shouldn't be afraid of their phone. Your grandma should be able to video call her grandkids. We provide patient, bilingual tech support that treats your family with respect.",'Tus padres no deberían tenerle miedo al teléfono. Tu abuela debería poder hacer videollamada con sus nietos. Brindamos soporte técnico paciente y bilingüe que trata a tu familia con respeto.'],
  ['sd4-cta','Get help for my family →','Ayuda para mi familia →'],
  ['sd4f1-h','Device setup & training','Configuración y capacitación'],
  ['sd4f1-p','Phones, tablets, computers — set up right and explained in plain language.','Teléfonos, tablets, computadoras — configurados correctamente y explicados en lenguaje simple.'],
  ['sd4f2-h','Scam & fraud protection','Protección contra estafas'],
  ['sd4f2-p','We teach your loved ones how to spot scams and keep their information safe.','Enseñamos a tus seres queridos a identificar estafas y mantener su información segura.'],
  ['sd4f3-h','Ongoing help','Ayuda continua'],
  ['sd4f3-p',"A friendly phone call away. No judgment, no rush — we'll explain it as many times as needed.",'A una llamada de distancia. Sin juicios, sin prisa — lo explicamos las veces que haga falta.'],

  // ── HOW IT WORKS ──
  ['proc-label','HOW IT WORKS','CÓMO FUNCIONA'],
  ['proc-h2','Three steps to technology<br>that works for you.','Tres pasos hacia tecnología<br>que trabaja para ti.','html'],
  ['step1-num','STEP 01','PASO 01'],
  ['step1-h',"Tell us what's going on",'Cuéntanos qué está pasando'],
  ['step1-p',"We listen, ask the right questions, and figure out the best solution for your situation — no jargon, no sales pitch, no wasted time.",'Escuchamos, hacemos las preguntas correctas y encontramos la mejor solución — sin tecnicismos, sin discurso de ventas, sin pérdida de tiempo.'],
  ['step2-num','STEP 02','PASO 02'],
  ['step2-h','We build your solution','Construimos tu solución'],
  ['step2-p',"Whether it's a custom app, an automation, or a quick fix — we work fast and keep you informed at every step. No surprises.",'Ya sea una app personalizada, una automatización o una solución rápida — trabajamos rápido y te mantenemos informado en cada paso.'],
  ['step3-num','STEP 03','PASO 03'],
  ['step3-h','You focus on your business','Tú enfócate en tu negocio'],
  ['step3-p',"We handle the tech so you don't have to. Ongoing support means we're always one call away when something comes up.",'Nosotros manejamos la tecnología para que tú no tengas que hacerlo. El soporte continuo significa que siempre estamos a una llamada de distancia.'],

  // ── PRICING ──
  ['price-label','PRICING','PRECIOS'],
  ['price-h2','Simple, honest pricing.<br>No surprises.','Precios simples y honestos.<br>Sin sorpresas.','html'],
  ['p1-label','Quick Fix','Solución Rápida'],
  ['p1-title','One-Time Help','Ayuda Puntual'],
  ['p1-per',' / session',' / sesión'],
  ['p1-sub','Perfect for seniors, families, or anyone who needs fast, friendly tech help.','Perfecto para personas mayores, familias o cualquiera que necesite ayuda tech rápida y amigable.'],
  ['p1-f1','Device setup & troubleshooting','Configuración y resolución de problemas'],
  ['p1-f2','Scam & security cleanup','Limpieza de estafas y seguridad'],
  ['p1-f3','Bilingual support (EN/ES)','Soporte bilingüe (EN/ES)'],
  ['p1-f4','Remote or on-site','Remoto o presencial'],
  ['p1-cta','Get started →','Comenzar →'],
  ['p2-badge','Most Popular','Más Popular'],
  ['p2-label','Project Build','Proyecto a Medida'],
  ['p2-title','Custom Solution','Solución Personalizada'],
  ['p2-price-display','From $1,500','Desde $1,500'],
  ['p2-sub','Apps, automations, and integrations built around your workflow.','Apps, automatizaciones e integraciones construidas alrededor de tu flujo de trabajo.'],
  ['p2-f1','Custom web or mobile app','App web o móvil personalizada'],
  ['p2-f2','AI & workflow automation','IA y automatización de flujos'],
  ['p2-f3','Third-party integrations','Integraciones con terceros'],
  ['p2-f4','Free consultation included','Consulta gratuita incluida'],
  ['p2-f5','30-day post-launch support','Soporte 30 días post-lanzamiento'],
  ['p2-cta','Get a free quote →','Obtener cotización gratis →'],
  ['p3-label','Monthly Partner','Socio Mensual'],
  ['p3-title','Ongoing Support','Soporte Continuo'],
  ['p3-price-display','Custom','Personalizado'],
  ['p3-custom','Custom','Personalizado'],
  ['p3-sub','Your dedicated tech team without the full-time hire. Flexible monthly plans.','Tu equipo tech dedicado sin contratar a tiempo completo. Planes mensuales flexibles.'],
  ['p3-f1','IT consulting & strategy','Consultoría IT y estrategia'],
  ['p3-f2','Priority support & response','Soporte y respuesta prioritaria'],
  ['p3-f3','Security monitoring','Monitoreo de seguridad'],
  ['p3-f4','Monthly check-ins','Revisiones mensuales'],
  ['p3-f5','No long-term contract','Sin contrato a largo plazo'],
  ['p3-cta',"Let's talk →",'Hablemos →'],

  // ── FAQ ──
  ['faq-label','FAQ','PREGUNTAS FRECUENTES'],
  ['faq-h2','Questions people<br>actually ask.','Preguntas que la gente<br>realmente hace.','html'],
  ['faq1-q','Do you work with clients outside of Florida?','¿Trabajan con clientes fuera de Florida?'],
  ['faq1-a','Yes — most of our work is done remotely, so we serve clients anywhere in the US and internationally. We also do on-site visits in the Florida area when needed.','Sí — la mayor parte de nuestro trabajo es remoto, por lo que atendemos clientes en cualquier parte de EE.UU. e internacionalmente. También hacemos visitas presenciales en el área de Florida cuando es necesario.'],
  ['faq2-q','How much does a custom app cost?','¿Cuánto cuesta una app personalizada?'],
  ['faq2-a','Project prices start at $1,500 and depend on complexity, features, and timeline. We always give you a clear quote before we start — no surprise invoices. Book a free consultation and we\'ll give you an honest number within 24 hours.','Los proyectos comienzan desde $1,500 y dependen de la complejidad, funcionalidades y tiempo. Siempre te damos un presupuesto claro antes de empezar — sin facturas sorpresa. Agenda una consulta gratuita y te damos un número honesto en menos de 24 horas.'],
  ['faq3-q','How long does a project take?','¿Cuánto tiempo toma un proyecto?'],
  ['faq3-a','Simple automations and fixes can be done in days. A full custom app typically takes 4–8 weeks depending on scope. We\'ll give you a realistic timeline upfront and stick to it.','Las automatizaciones y correcciones simples se pueden hacer en días. Una app personalizada completa generalmente toma 4–8 semanas según el alcance. Te damos un cronograma realista desde el principio y lo cumplimos.'],
  ['faq4-q','Do I need to sign a long-term contract?','¿Necesito firmar un contrato a largo plazo?'],
  ['faq4-a','No. One-time projects are exactly that — one-time. Our monthly support plans are flexible and can be cancelled anytime. We earn your business every month, not by locking you in.','No. Los proyectos únicos son exactamente eso — únicos. Nuestros planes de soporte mensual son flexibles y se pueden cancelar en cualquier momento. Nos ganamos tu negocio cada mes, no atándote a un contrato.'],
  ['faq5-q','Do you really speak Spanish?','¿Realmente hablan español?'],
  ['faq5-a','Yes — genuinely fluent, not Google Translate. We can handle full projects, support calls, and documentation in Spanish. Many of our clients prefer it.','Sí — fluidos de verdad, no Google Translate. Podemos manejar proyectos completos, llamadas de soporte y documentación en español. Muchos de nuestros clientes lo prefieren.'],
  ['faq6-q',"What if my parents or grandparents aren't tech-savvy?",'¿Qué pasa si mis padres o abuelos no saben de tecnología?'],
  ['faq6-a',"That's exactly why we built the Senior & Family Support service. We're endlessly patient, we explain everything in plain language, and we follow up to make sure things are still working. We've helped seniors in their 80s video call their grandkids for the first time — it's one of our favorite things to do.",'Por eso mismo creamos el servicio de Soporte para Mayores y Familias. Somos infinitamente pacientes, explicamos todo en lenguaje simple y hacemos seguimiento para asegurarnos de que todo siga funcionando. Hemos ayudado a personas mayores de 80 años a hacer videollamadas con sus nietos por primera vez — es una de nuestras actividades favoritas.'],

  // ── CONTACT PAGE ──
  ['contact-h1',"Let's build something<br><span class=\"ta\">together.</span>",'Construyamos algo<br><span class="ta">juntos.</span>','html'],
  ['contact-sub',"Have a project in mind, need tech help, or just want to see how we can help? Drop us a message and we'll get back to you within 24 hours.",'¿Tienes un proyecto en mente, necesitas ayuda tech, o quieres ver cómo podemos ayudarte? Escríbenos y te respondemos en menos de 24 horas.'],
  ['c-info-email','Email','Correo'],
  ['c-info-phone','Phone','Teléfono'],
  ['c-info-wa','WhatsApp','WhatsApp'],
  ['c-info-loc','Location','Ubicación'],
  ['c-info-loc-val','Florida, USA — serving clients globally','Florida, EE.UU. — sirviendo clientes globalmente'],
  ['c-info-lang','Languages','Idiomas'],
  ['c-info-lang-val','English · Spanish','Inglés · Español'],
  ['c-info-hours','Response time','Tiempo de respuesta'],
  ['c-info-hours-val','Within 24 hours','Menos de 24 horas'],
  ['form-name','Your name','Tu nombre','placeholder'],
  ['form-email','Your email','Tu correo','placeholder'],
  ['form-msg','Tell us about your project or problem...','Cuéntanos sobre tu proyecto o problema...','placeholder'],
  ['form-btn','Send message →','Enviar mensaje →'],
  ['form-success',"Message sent — we'll be in touch soon.",'Mensaje enviado — estaremos en contacto pronto.'],

  // ── ANNOUNCEMENT BAR ──
  ['ann-text','Now accepting new clients —','Aceptando nuevos clientes —'],
  ['ann-link','Book a free call →','Agenda una llamada gratis →'],

  // ── COOKIE CONSENT ──
  ['cookie-text','We use cookies to improve your experience on this site.','Usamos cookies para mejorar tu experiencia en este sitio.'],
  ['cookie-accept','Accept','Aceptar'],
  ['cookie-decline','Decline','Rechazar']
];

// Select options for contact form
var SELECT_OPTIONS = [
  ['What do you need help with?','¿Con qué necesitas ayuda?'],
  ['App Development','Desarrollo de Apps'],
  ['AI & Automation','IA y Automatización'],
  ['IT Consulting','Consultoría IT'],
  ['Senior / Family Tech Support','Soporte Tech para Mayores / Familias'],
  ['Other / Not sure','Otro / No estoy seguro']
];

// WhatsApp button text
var WA_TEXT = ['WhatsApp us','Escríbenos por WhatsApp'];

function setLang(lang) {
  currentLang = lang;
  var idx = (lang === 'es') ? 2 : 1;

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  var mEn = document.getElementById('m-btn-en');
  var mEs = document.getElementById('m-btn-es');
  if (mEn) mEn.classList.toggle('active', lang === 'en');
  if (mEs) mEs.classList.toggle('active', lang === 'es');
  document.documentElement.lang = lang;

  for (var i = 0; i < MAP.length; i++) {
    var entry = MAP[i];
    var el = document.getElementById(entry[0]);
    if (!el) continue;
    var val = entry[idx];
    var type = entry[3] || 'auto';

    if (type === 'placeholder') {
      el.placeholder = val;
    } else if (type === 'html' || val.indexOf('<') !== -1) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  }

  // Update select options
  var sel = document.getElementById('form-service');
  if (sel) {
    for (var j = 0; j < SELECT_OPTIONS.length && j < sel.options.length; j++) {
      sel.options[j].text = SELECT_OPTIONS[j][(lang === 'es') ? 1 : 0];
    }
  }

  // Update WhatsApp button text
  var waBtns = document.querySelectorAll('.wa-btn-text');
  for (var k = 0; k < waBtns.length; k++) {
    waBtns[k].textContent = WA_TEXT[(lang === 'es') ? 1 : 0];
  }
}

// Shared functions
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.querySelector('.t-hamburger').classList.toggle('open');
}

window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
});

/* ── Supabase config ── */
var SUPABASE_URL = 'https://mcddvwsysprgyscafyzy.supabase.co/functions/v1/notify-contact';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZGR2d3N5c3ByZ3lzY2FmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NjMyOTMsImV4cCI6MjA5MjEzOTI5M30.zcAMRHbcFSdcLx7iFnh0GxPP_-YjGqFffjRjc35pW1g';

/* ── Scroll progress bar ── */
(function() {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    var total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
  }, { passive: true });
})();

/* ── Back to top ── */
(function() {
  var btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ── Sticky mobile CTA ── */
(function() {
  var bar = document.getElementById('mobile-cta');
  if (!bar) return;
  var heroEl = document.querySelector('.t-hero, .t-svc-hero, .t-about-hero, .t-contact-hero');
  var threshold = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 400;
  window.addEventListener('scroll', function() {
    bar.classList.toggle('visible', window.scrollY > threshold);
  }, { passive: true });
})();

/* ── Animated counters (About page) ── */
(function() {
  var stats = document.querySelectorAll('.t-stat-num');
  if (!stats.length) return;
  function animateCount(el) {
    var raw = el.textContent.trim();
    var num = parseFloat(raw.replace(/[^0-9.]/g, ''));
    if (isNaN(num) || raw === '∞' || raw === 'US') return;
    var suffix = raw.replace(/[0-9.]/g, '');
    var start = null, duration = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(num * ease) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  stats.forEach(function(el) { obs.observe(el); });
})();

function toggleFaq(questionEl) {
  var item = questionEl.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.t-faq-item.open').forEach(function(el) {
    el.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

function initReveal() {
  var els = document.querySelectorAll(
    '.t-problems, .t-services-preview, .t-why, .t-testimonials, ' +
    '.t-svc-detail, .t-story, .t-pillars, .t-contact-body, ' +
    '.t-about-hero .t-badge, .t-svc-hero .t-badge, .t-contact-hero .t-badge, ' +
    '.t-cta-banner .t-cta-inner'
  );
  var cards = document.querySelectorAll(
    '.t-problem-card, .t-svc-card, .t-test-card, .t-why-item, ' +
    '.t-pillar, .t-stat, .t-svc-feature, .t-contact-block'
  );

  els.forEach(function(el) { el.classList.add('reveal'); });
  cards.forEach(function(el, i) {
    el.classList.add('reveal');
    var delay = (i % 4);
    if (delay > 0) el.classList.add('reveal-delay-' + delay);
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}

/* ── Announcement bar ── */
(function() {
  var bar = document.getElementById('t-announce');
  if (!bar) return;
  if (sessionStorage.getItem('ann-dismissed') === '1') bar.classList.add('hidden');
})();
function dismissAnnounce() {
  var bar = document.getElementById('t-announce');
  if (bar) bar.classList.add('hidden');
  sessionStorage.setItem('ann-dismissed', '1');
}

/* ── Cookie consent ── */
(function() {
  var banner = document.getElementById('t-cookie');
  if (!banner) return;
  if (localStorage.getItem('cookie-choice')) { banner.classList.add('hidden'); return; }
  setTimeout(function() { banner.classList.add('visible'); }, 1800);
})();
function acceptCookie() {
  var b = document.getElementById('t-cookie');
  if (b) { b.classList.remove('visible'); setTimeout(function() { b.classList.add('hidden'); }, 400); }
  localStorage.setItem('cookie-choice', 'accepted');
}
function declineCookie() {
  var b = document.getElementById('t-cookie');
  if (b) { b.classList.remove('visible'); setTimeout(function() { b.classList.add('hidden'); }, 400); }
  localStorage.setItem('cookie-choice', 'declined');
}

/* ── Message char counter ── */
(function() {
  var ta = document.getElementById('form-msg');
  var counter = document.getElementById('msg-counter');
  if (!ta || !counter) return;
  var max = 1000;
  function update() {
    var len = ta.value.length;
    counter.textContent = len + ' / ' + max;
    counter.classList.toggle('warn', len > Math.floor(max * 0.85));
  }
  ta.addEventListener('input', update);
  update();
})();

function sendForm() {
  var nameEl = document.getElementById('form-name');
  var emailEl = document.getElementById('form-email');
  var msgEl = document.getElementById('form-msg');
  var serviceEl = document.getElementById('form-service');
  var btnEl = document.getElementById('form-btn');
  var successEl = document.getElementById('form-success');
  if (!nameEl || !emailEl || !msgEl) return;

  var n = nameEl.value.trim(), e = emailEl.value.trim(), m = msgEl.value.trim();
  if (!n || !e || !m) {
    [nameEl, emailEl, msgEl].forEach(function(el) {
      if (!el.value.trim()) el.style.borderColor = '#e53935';
      else el.style.borderColor = '';
    });
    return;
  }
  [nameEl, emailEl, msgEl].forEach(function(el) { el.style.borderColor = ''; });

  var svc = serviceEl ? serviceEl.value : '';
  if (btnEl) btnEl.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';

  var useSupabase = SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

  if (useSupabase) {
    fetch(SUPABASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'apikey': SUPABASE_ANON_KEY
      },
      body: JSON.stringify({ name: n, email: e, service: svc, message: m, lang: currentLang })
    })
    .then(function(res) { return res.json(); })
    .then(function() {
      if (successEl) successEl.style.display = 'block';
      nameEl.value = ''; emailEl.value = ''; msgEl.value = '';
      if (serviceEl) serviceEl.selectedIndex = 0;
      if (btnEl) btnEl.textContent = currentLang === 'es' ? 'Enviar mensaje →' : 'Send message →';
    })
    .catch(function() {
      if (btnEl) btnEl.textContent = currentLang === 'es' ? 'Enviar mensaje →' : 'Send message →';
      _sendViaMail(n, e, svc, m);
    });
  } else {
    _sendViaMail(n, e, svc, m);
    if (successEl) successEl.style.display = 'block';
    nameEl.value = ''; emailEl.value = ''; msgEl.value = '';
    if (serviceEl) serviceEl.selectedIndex = 0;
    if (btnEl) btnEl.textContent = currentLang === 'es' ? 'Enviar mensaje →' : 'Send message →';
  }
}

function _sendViaMail(n, e, svc, m) {
  var isES = currentLang === 'es';
  var subject = encodeURIComponent('Tolotech - ' + (isES ? 'Nuevo mensaje de contacto' : 'New Contact Message'));
  var body = encodeURIComponent(
    (isES ? 'Nombre' : 'Name') + ': ' + n + '\n' +
    (isES ? 'Correo' : 'Email') + ': ' + e + '\n' +
    (isES ? 'Servicio' : 'Service') + ': ' + (svc || 'N/A') + '\n\n' + m
  );
  window.open('mailto:hello@tolotech.net?subject=' + subject + '&body=' + body);
}
