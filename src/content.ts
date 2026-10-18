// Az oldal szöveges tartalma három nyelven – egy helyen, hogy könnyű legyen cserélni.
// A [szögletes zárójeles] részek placeholderek: a valódi adatokkal kell lecserélni őket.

import type {
  AboutContent,
  CardsContent,
  ContactContent,
  FooterContent,
  GalleryContent,
  HeroContent,
  NavLink,
  Stat,
  TimelineContent,
} from './types';

export const languages = ['en', 'es', 'hu'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'hu';

export type Content = {
  nav: NavLink[];
  hero: HeroContent;
  stats: Stat[];
  about: AboutContent;
  services: CardsContent;
  fleet: GalleryContent;
  experience: TimelineContent;
  contact: ContactContent;
  footer: FooterContent;
};

const hu: Content = {
  nav: [
    { label: 'Rólam', href: '#about' },
    { label: 'Szolgáltatások', href: '#services' },
    { label: 'Flotta', href: '#fleet' },
    { label: 'Tapasztalat', href: '#experience' },
    { label: 'Kapcsolat', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Fuvarozás · Logisztika · Zoltan Hubanov-Dimitrov',
    lines: ['Időben,', 'épen,', 'célba.'],
    quote: '„Megbízható szállítás itthon és külföldön – a csomagtól a teljes rakományig.”',
    primaryCta: 'Fuvart kérek',
    secondaryCta: 'Bemutatkozás',
    portraitAlt: 'Portré helye',
  },
  stats: [
    { value: '[15+]', label: 'év a szakmában' },
    { value: '[1M+]', label: 'megtett kilométer' },
    { value: '[20+]', label: 'ország' },
    { value: '24/7', label: 'elérhetőség' },
  ],
  about: {
    label: 'Rólam',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Rövid bemutatkozás: ki vagy, mióta dolgozol a szállításban, hogyan indult a vállalkozás.]',
      '[Mire vagy büszke: megbízhatóság, pontosság, visszatérő ügyfelek.]',
    ],
    facts: [
      { term: 'Vállalkozás', value: '[Cégnév Kft.]' },
      { term: 'Működési terület', value: '[Magyarország · EU]' },
      { term: 'Székhely', value: '[Település]' },
      { term: 'Jogosítvány', value: '[B · C · CE]' },
    ],
    imageAlt: 'Kép helye',
  },
  services: {
    label: 'Szolgáltatások',
    title: 'Amit szállítok',
    items: [
      { title: 'Belföldi fuvarozás', meta: 'Raklap · Darabáru', text: 'Gyors, rugalmas szállítás az ország egész területén.' },
      { title: 'Nemzetközi fuvarozás', meta: 'EU · Vámügyintézés', text: 'Rendszeres és egyedi fuvarok az Európai Unión belül és kívül.' },
      { title: 'Költöztetés', meta: 'Lakás · Iroda', text: 'Bútorok és ingóságok csomagolása, szállítása és bepakolása.' },
      { title: 'Expressz szállítás', meta: 'Aznapi · Sürgős', text: 'Sürgős küldemények kézbesítése még aznap, közvetlen útvonalon.' },
      { title: 'Raktározás', meta: 'Rövid és hosszú táv', text: 'Áruk biztonságos tárolása és ütemezett kiszállítása.' },
      { title: 'Egyedi feladatok', meta: 'Gépek · Különleges áru', text: 'Nagy méretű vagy különleges kezelést igénylő szállítmányok.' },
    ],
  },
  fleet: {
    label: 'Flotta',
    title: 'Járművek és munkák',
    items: [
      { alt: 'Jármű 1 helye' },
      { alt: 'Jármű 2 helye' },
      { alt: 'Jármű 3 helye' },
      { alt: 'Munka 1 helye' },
      { alt: 'Munka 2 helye' },
      { alt: 'Munka 3 helye' },
    ],
  },
  experience: {
    label: 'Tapasztalat',
    title: 'Tanulmányok és képesítések',
    items: [
      { period: '[2015 – most]', title: '[Saját fuvarozó vállalkozás]', place: '[Cégnév Kft.]', text: '[Mit csinálsz, mekkora a csapat, kik az ügyfelek.]' },
      { period: '[2008 – 2015]', title: '[Gépkocsivezető / Diszpécser]', place: '[Korábbi munkahely]', text: '[Rövid leírás.]' },
      { period: '[Év]', title: '[GKI / Szakmai vizsga]', place: '[Kiállító intézmény]', text: '[Gépjárművezetői képesítés, ADR, árufuvarozói engedély stb.]' },
      { period: '[Év]', title: '[Tanulmányok]', place: '[Iskola neve]', text: '[Szakmai végzettség, logisztikai képzés.]' },
    ],
  },
  contact: {
    label: 'Kapcsolat',
    title: 'Kérj fuvart.',
    text: 'Írd meg, mit, honnan, hová és mikorra kell szállítani – rövid időn belül árajánlattal jelentkezem.',
    name: 'Név',
    email: 'E-mail',
    message: 'Mit, honnan, hová, mikorra?',
    submit: 'Ajánlatkérés',
    success: 'Megnyílt a levelezőprogramod – csak küldd el az üzenetet.',
    subject: 'Fuvarajánlat-kérés – AdTransport',
    direct: { email: 'E-mail', phone: 'Telefon', location: 'Telephely' },
  },
  footer: {
    tags: ['Fuvarozás', 'Költöztetés', 'Logisztika'],
    registered: 'Az Egyesült Királyságban bejegyzett cég.', rights: 'Minden jog fenntartva.',
  },
};

const en: Content = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Transport · Logistics · Zoltan Hubanov-Dimitrov',
    lines: ['On time,', 'intact,', 'delivered.'],
    quote: '"Reliable transport at home and abroad – from a single parcel to a full load."',
    primaryCta: 'Request transport',
    secondaryCta: 'About me',
    portraitAlt: 'Portrait placeholder',
  },
  stats: [
    { value: '[15+]', label: 'years in the trade' },
    { value: '[1M+]', label: 'kilometres driven' },
    { value: '[20+]', label: 'countries' },
    { value: '24/7', label: 'availability' },
  ],
  about: {
    label: 'About',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Short introduction: who you are, how long you have worked in transport, how the business started.]',
      '[What you are proud of: reliability, punctuality, returning clients.]',
    ],
    facts: [
      { term: 'Business', value: '[Company Ltd.]' },
      { term: 'Coverage', value: '[Hungary · EU]' },
      { term: 'Based in', value: '[Town]' },
      { term: 'Licence', value: '[B · C · CE]' },
    ],
    imageAlt: 'Image placeholder',
  },
  services: {
    label: 'Services',
    title: 'What I move',
    items: [
      { title: 'Domestic freight', meta: 'Pallets · Parcels', text: 'Fast, flexible transport anywhere in the country.' },
      { title: 'International freight', meta: 'EU · Customs', text: 'Regular and one-off runs within and beyond the European Union.' },
      { title: 'Removals', meta: 'Home · Office', text: 'Packing, moving and unloading furniture and belongings.' },
      { title: 'Express delivery', meta: 'Same day · Urgent', text: 'Urgent shipments delivered the same day on a direct route.' },
      { title: 'Storage', meta: 'Short & long term', text: 'Secure storage of goods with scheduled delivery.' },
      { title: 'Special jobs', meta: 'Machinery · Special cargo', text: 'Oversized loads and cargo that needs special handling.' },
    ],
  },
  fleet: {
    label: 'Fleet',
    title: 'Vehicles & jobs',
    items: [
      { alt: 'Vehicle 1 placeholder' },
      { alt: 'Vehicle 2 placeholder' },
      { alt: 'Vehicle 3 placeholder' },
      { alt: 'Job 1 placeholder' },
      { alt: 'Job 2 placeholder' },
      { alt: 'Job 3 placeholder' },
    ],
  },
  experience: {
    label: 'Experience',
    title: 'Studies & qualifications',
    items: [
      { period: '[2015 – now]', title: '[Own transport business]', place: '[Company Ltd.]', text: '[What you do, team size, typical clients.]' },
      { period: '[2008 – 2015]', title: '[Driver / Dispatcher]', place: '[Previous employer]', text: '[Short description.]' },
      { period: '[Year]', title: '[CPC / Professional exam]', place: '[Issuing body]', text: '[Driver CPC, ADR, haulage licence, etc.]' },
      { period: '[Year]', title: '[Studies]', place: '[School name]', text: '[Vocational qualification, logistics training.]' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Book a run.',
    text: "Tell me what needs moving, from where, to where and by when – I'll get back to you with a quote shortly.",
    name: 'Name',
    email: 'Email',
    message: 'What, from where, to where, by when?',
    submit: 'Request a quote',
    success: 'Your email app has opened – just send the message.',
    subject: 'Transport quote request – AdTransport',
    direct: { email: 'Email', phone: 'Phone', location: 'Depot' },
  },
  footer: {
    tags: ['Freight', 'Removals', 'Logistics'],
    registered: 'Registered in the UK.', rights: 'All rights reserved.',
  },
};

const es: Content = {
  nav: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Flota', href: '#fleet' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Transporte · Logística · Zoltan Hubanov-Dimitrov',
    lines: ['A tiempo,', 'intacto,', 'entregado.'],
    quote: '«Transporte fiable en el país y en el extranjero: desde un paquete hasta una carga completa.»',
    primaryCta: 'Pedir transporte',
    secondaryCta: 'Sobre mí',
    portraitAlt: 'Espacio para retrato',
  },
  stats: [
    { value: '[15+]', label: 'años en el sector' },
    { value: '[1M+]', label: 'kilómetros recorridos' },
    { value: '[20+]', label: 'países' },
    { value: '24/7', label: 'disponibilidad' },
  ],
  about: {
    label: 'Sobre mí',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Breve presentación: quién eres, cuánto tiempo llevas en el transporte, cómo empezó el negocio.]',
      '[De qué estás orgulloso: fiabilidad, puntualidad, clientes que repiten.]',
    ],
    facts: [
      { term: 'Empresa', value: '[Empresa S.L.]' },
      { term: 'Cobertura', value: '[Hungría · UE]' },
      { term: 'Ubicación', value: '[Localidad]' },
      { term: 'Permiso', value: '[B · C · CE]' },
    ],
    imageAlt: 'Espacio para imagen',
  },
  services: {
    label: 'Servicios',
    title: 'Qué transporto',
    items: [
      { title: 'Transporte nacional', meta: 'Palés · Paquetería', text: 'Transporte rápido y flexible en todo el país.' },
      { title: 'Transporte internacional', meta: 'UE · Aduanas', text: 'Rutas regulares y puntuales dentro y fuera de la Unión Europea.' },
      { title: 'Mudanzas', meta: 'Hogar · Oficina', text: 'Embalaje, traslado y descarga de muebles y enseres.' },
      { title: 'Envío exprés', meta: 'Mismo día · Urgente', text: 'Envíos urgentes entregados el mismo día por ruta directa.' },
      { title: 'Almacenaje', meta: 'Corto y largo plazo', text: 'Almacenamiento seguro de mercancías con entregas programadas.' },
      { title: 'Trabajos especiales', meta: 'Maquinaria · Carga especial', text: 'Cargas de gran tamaño o que requieren manipulación especial.' },
    ],
  },
  fleet: {
    label: 'Flota',
    title: 'Vehículos y trabajos',
    items: [
      { alt: 'Espacio para vehículo 1' },
      { alt: 'Espacio para vehículo 2' },
      { alt: 'Espacio para vehículo 3' },
      { alt: 'Espacio para trabajo 1' },
      { alt: 'Espacio para trabajo 2' },
      { alt: 'Espacio para trabajo 3' },
    ],
  },
  experience: {
    label: 'Experiencia',
    title: 'Estudios y titulaciones',
    items: [
      { period: '[2015 – hoy]', title: '[Empresa de transporte propia]', place: '[Empresa S.L.]', text: '[Qué haces, tamaño del equipo, clientes típicos.]' },
      { period: '[2008 – 2015]', title: '[Conductor / Jefe de tráfico]', place: '[Empresa anterior]', text: '[Breve descripción.]' },
      { period: '[Año]', title: '[CAP / Examen profesional]', place: '[Entidad emisora]', text: '[CAP, ADR, licencia de transporte, etc.]' },
      { period: '[Año]', title: '[Estudios]', place: '[Centro]', text: '[Formación profesional, formación en logística.]' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Pide tu ruta.',
    text: 'Cuéntame qué hay que transportar, desde dónde, hasta dónde y para cuándo: te enviaré un presupuesto en breve.',
    name: 'Nombre',
    email: 'Correo',
    message: '¿Qué, desde dónde, hasta dónde, para cuándo?',
    submit: 'Pedir presupuesto',
    success: 'Se ha abierto tu programa de correo: solo tienes que enviar el mensaje.',
    subject: 'Solicitud de presupuesto – AdTransport',
    direct: { email: 'Correo', phone: 'Teléfono', location: 'Base' },
  },
  footer: {
    tags: ['Transporte', 'Mudanzas', 'Logística'],
    registered: 'Registrada en el Reino Unido.', rights: 'Todos los derechos reservados.',
  },
};

export const content: Record<Lang, Content> = { hu, en, es };
