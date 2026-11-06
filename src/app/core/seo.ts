import { DOCUMENT } from '@angular/common';
import { Service, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CONTENT } from '../data/site-content';

// Metadatos por página (título, descripción, canonical, Open Graph). Se ejecuta en el prerender:
// todo queda escrito en el HTML estático que leen Google y las vistas previas de WhatsApp/redes.
@Service()
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  setPageMeta(page: { title: string; description: string; path: string }): void {
    const { siteUrl, ogImage } = SITE_CONTENT.seo;
    const url = siteUrl + page.path;
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (ogImage) {
      this.meta.updateTag({ property: 'og:image', content: siteUrl + ogImage.src });
      this.meta.updateTag({ property: 'og:image:alt', content: ogImage.alt });
    }

    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  setJsonLd(data: object): void {
    this.document.getElementById('structured-data')?.remove();
    const script = this.document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
