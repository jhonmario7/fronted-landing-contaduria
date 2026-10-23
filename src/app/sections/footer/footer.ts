import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormField, form, pattern, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon, IconName } from '../../shared/ui/icon/icon';

interface NewsletterModel {
  email: string;
}

@Component({
  imports: [NgOptimizedImage, RouterLink, FormField, Button, Icon],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly identity = SITE_CONTENT.identity;
  protected readonly contact = SITE_CONTENT.contact;
  protected readonly legal = SITE_CONTENT.legal;
  protected readonly text = SITE_CONTENT.legal.footer;
  protected readonly news = SITE_CONTENT.legal.footer.newsletter;
  protected readonly serviceNames = SITE_CONTENT.services.map((s) => s.name);
  protected readonly year = new Date().getFullYear();

  // Redes: se muestran siempre; solo son enlace cuando la cliente confirma la URL
  // ([PENDIENTE: redes sociales] en site-content.ts).
  protected readonly socials: { icon: IconName; label: string; url: string }[] = [
    { icon: 'instagram', label: 'Instagram', url: SITE_CONTENT.social.instagramUrl ?? '' },
    { icon: 'tiktok', label: 'TikTok', url: SITE_CONTENT.social.tiktokUrl ?? '' },
  ];

  /** URL mailto ya armada; no nula = se envió (muestra el mensaje de éxito). */
  protected readonly sentUrl = signal<string | null>(null);

  private readonly model = signal<NewsletterModel>({ email: '' });

  protected readonly newsletterForm = form(this.model, (f) => {
    required(f.email, { message: this.news.errors.email });
    pattern(f.email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, { message: this.news.errors.emailInvalid });
  });

  subscribe(event: Event): void {
    event.preventDefault();

    if (!this.newsletterForm().valid()) {
      this.newsletterForm().markAsTouched();
      return;
    }

    const { email } = this.model();
    const body = this.news.mailBody.replace('{correo}', email.trim());
    const url =
      `mailto:${this.contact.email}` +
      `?subject=${encodeURIComponent(this.news.mailSubject)}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    this.sentUrl.set(url);
  }

  reset(): void {
    this.sentUrl.set(null);
  }
}
