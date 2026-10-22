import { IconName } from '../shared/ui/icon/icon';

export interface SiteContent {
  identity: SiteIdentity;
  navigation: NavigationContent;
  hero: HeroContent;
  about: AboutContent;
  team: TeamContent;
  servicesSection: ServicesSectionContent;
  services: Service[];
  processSection: ProcessSectionContent;
  modalities: Modality[];
  whyUs: WhyUsContent;
  contact: ContactContent;
  social: SocialChannels;
  seo: SeoConfig;
  legal: LegalInfo;
}

export interface NavLink {
  label: string;
  fragment: string; // id de la sección, sin "#"
}

export interface NavigationContent {
  links: NavLink[];
  ctaLabel: string;
  homeLabel: string; // aria-label del logo
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface NavLink {
  label: string;
  fragment: string; // id de la sección, sin "#"
}

export interface NavigationContent {
  links: NavLink[];
  ctaLabel: string;
  homeLabel: string; // aria-label del logo
  openMenuLabel: string;
  closeMenuLabel: string;
}

// El h1, el lema y el subtítulo salen de identity; aquí solo lo propio del hero.
export interface HeroContent {
  primaryCtaLabel: string; // abre WhatsApp
  secondaryCtaLabel: string; // baja a #servicios
  practiceAreasLabel: string; // título accesible de la franja de áreas
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Imagen generada con IA (docs/imagenes-ia): complementaria, requiere aprobación de la cliente.
  aiGenerated?: boolean;
}

export interface SiteIdentity {
  businessName: string;
  legalName: string;
  nit: string;
  city: string;
  headline: string; // "Asesoría contable, tributaria y legal"
  tagline: string; // lema principal, en serif itálica como en el logo
  subtitle: string;
  practiceAreas: IconCard[]; // franja "Contabilidad | Tributación | ..." (diapositiva 02)
  slogans: string[]; // frases secundarias del portafolio, para cierres de sección
  logo: MediaAsset | null;
}

export interface IconCard {
  icon: IconName;
  title: string;
  description?: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  labels: { valueProposition: string; mission: string; vision: string; values: string };
  photo: MediaAsset;
  intro: string[];
  valueProposition: string;
  mission: string;
  vision: string;
  values: IconCard[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  summary: string;
  credentials: string[]; // estudios y especializaciones
  leadershipAreas: string[];
  note?: string;
  photo: MediaAsset | null;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  labels: { credentials: string; leadershipAreas: string };
  tagline: string;
  members: TeamMember[];
}

export interface ServiceGroup {
  title?: string;
  intro?: string;
  items: string[];
}

export interface ServicesSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  viewMoreLabel: string;
  closeLabel: string;
  ctaLabel: string;
  whatsappMessage: string; // "{servicio}" se reemplaza por el nombre del servicio
}

export interface Service {
  id: string;
  icon: IconName;
  image: MediaAsset;
  name: string; // nombre corto de la tarjeta
  title: string; // título completo del detalle
  summary: string; // línea de la tarjeta (y entrada del detalle)
  groups: ServiceGroup[];
  note?: string;
  closingLine?: string;
}

export interface ProcessSectionContent {
  eyebrow: string;
  title: string;
  photo: MediaAsset;
}

export interface Modality {
  icon: IconName;
  title: string;
  description: string;
}

export interface WhyUsContent {
  eyebrow: string;
  title: string;
  background: MediaAsset; // decorativa
  intro: string;
  pillars: IconCard[];
  closing: string;
  promises: IconCard[]; // "Compromiso con tu negocio", "Experiencia que genera resultados"...
  benefits: IconCard[]; // franja repetida en las diapositivas de servicios
  legalNotice: string;
}

export interface WhatsAppLine {
  phoneE164: string; // sin "+", formato wa.me
  display: string;
}

export interface ContactFormContent {
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  otherServiceLabel: string;
  messageLabel: string;
  messageOptional: string;
  messagePlaceholder: string;
  consentBefore: string;
  consentLink: string;
  submitLabel: string;
  privacyNote: string;
  successTitle: string;
  successText: string;
  reopenLabel: string;
  backLabel: string;
  whatsappIntro: string; // primera línea del mensaje
  errors: {
    name: string;
    nameShort: string;
    phone: string;
    phoneInvalid: string;
    service: string;
    messageMax: string;
    consent: string;
  };
  photo: MediaAsset;
}

export interface ContactContent {
  form: ContactFormContent;
  heading: string;
  lead: string;
  closing: string;
  whatsapp: WhatsAppLine[];
  email: string;
  whatsappMessage: string; // mensaje prellenado del botón flotante y CTA generales
  whatsappLabel: string; // aria-label del botón flotante
  hours: string;
}

export interface SocialChannels {
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  tiktokUrl?: string;
  googleBusinessProfileUrl?: string;
}

export interface SeoConfig {
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage: MediaAsset | null;
}

export interface LegalPolicySection {
  heading: string;
  paragraphs: string[];
}

export interface FooterContent {
  portfolioLabel: string;
  portfolioPath: string;
  policyLabel: string;
  navTitle: string;
  contactTitle: string;
  rights: string; // "Todos los derechos reservados."
}

export interface PolicyPageContent {
  title: string;
  backLabel: string;
  pendingNotice: string; // se muestra mientras no haya secciones
}

export interface LegalInfo {
  footer: FooterContent;
  policyPage: PolicyPageContent;
  dataPolicyPath: string;
  dataPolicyLastUpdated: string;
  dataPolicySections: LegalPolicySection[];
}
