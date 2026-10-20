export interface SiteContent {
  identity: SiteIdentity;
  about: AboutContent;
  team: TeamContent;
  services: Service[];
  modalities: Modality[];
  whyUs: WhyUsContent;
  contact: ContactContent;
  social: SocialChannels;
  seo: SeoConfig;
  legal: LegalInfo;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  isStockTemporary?: boolean;
}

export interface SiteIdentity {
  businessName: string;
  legalName: string;
  nit: string;
  city: string;
  headline: string; // "Asesoría contable, tributaria y legal"
  tagline: string; // lema principal, en caligráfica
  subtitle: string;
  practiceAreas: string[]; // franja "Contabilidad | Tributación | ..."
  slogans: string[]; // frases secundarias del portafolio, para cierres de sección
  logo: MediaAsset | null;
}

// icon: nombre del icono (se resuelve en shared/ui/icon cuando exista).
export interface IconCard {
  icon: string;
  title: string;
  description?: string;
}

export interface AboutContent {
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
  tagline: string;
  members: TeamMember[];
}

export interface ServiceGroup {
  title?: string;
  intro?: string;
  items: string[];
}

export interface Service {
  id: string;
  icon: string;
  name: string; // nombre corto de la tarjeta
  title: string; // título completo del detalle
  summary?: string;
  groups: ServiceGroup[];
  note?: string;
  closingLine?: string;
}

export interface Modality {
  icon: string;
  title: string;
  description: string;
}

export interface WhyUsContent {
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

export interface ContactContent {
  heading: string;
  lead: string;
  closing: string;
  whatsapp: WhatsAppLine[];
  email: string;
  address: string;
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

export interface LegalInfo {
  dataPolicyPath: string;
  dataPolicyLastUpdated: string;
  dataPolicySections: LegalPolicySection[];
}
