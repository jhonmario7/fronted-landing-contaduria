import { Component, inject } from '@angular/core';
import { Seo } from '../../core/seo';
import { SITE_CONTENT } from '../../data/site-content';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { Process } from '../../sections/process/process';
import { Services } from '../../sections/services/services';
import { Team } from '../../sections/team/team';
import { WhyUs } from '../../sections/why-us/why-us';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Team, Services, WhyUs, Process, Contact],
  templateUrl: './home.html',
})
export class Home {
  constructor() {
    const { identity, contact, social, seo, services, specializedServices } = SITE_CONTENT;
    const seoService = inject(Seo);
    seoService.setPageMeta({ title: seo.defaultTitle, description: seo.defaultDescription, path: '/' });

    // Ficha de negocio para Google (schema.org). Sin dirección física ni horario: la firma trabaja
    // en remoto y el horario sigue [PENDIENTE]; se agregan cuando la cliente los confirme.
    seoService.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      name: identity.businessName,
      legalName: identity.legalName,
      taxID: identity.nit,
      slogan: identity.tagline,
      description: seo.defaultDescription,
      url: `${seo.siteUrl}/`,
      logo: `${seo.siteUrl}/images/logo-monogram.webp`,
      image: seo.ogImage ? seo.siteUrl + seo.ogImage.src : undefined,
      telephone: `+${contact.whatsapp[0].phoneE164}`,
      email: contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Neiva',
        addressRegion: 'Huila',
        addressCountry: 'CO',
      },
      sameAs: [social.instagramUrl, social.tiktokUrl].filter(Boolean),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios',
        itemListElement: [...services, ...specializedServices.services].map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.summary },
        })),
      },
    });
  }
}
