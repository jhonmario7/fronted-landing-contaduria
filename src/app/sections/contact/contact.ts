import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormField, form, maxLength, minLength, pattern, required } from '@angular/forms/signals';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

interface ContactFormModel {
  name: string;
  phone: string;
  service: string;
  message: string;
  dataConsent: boolean;
}

@Component({
  imports: [NgOptimizedImage, FormField, Button, Icon, SectionHeader],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly contact = SITE_CONTENT.contact;
  protected readonly text = SITE_CONTENT.contact.form;
  protected readonly policyPath = SITE_CONTENT.legal.dataPolicyPath;
  protected readonly serviceNames = SITE_CONTENT.services.map((s) => s.name);

  // [PENDIENTE: línea principal de WhatsApp] — mientras tanto, la primera del portafolio.
  private readonly phoneE164 = SITE_CONTENT.contact.whatsapp[0].phoneE164;

  /** URL de WhatsApp ya armada; no nula = se envió (muestra el estado de éxito). */
  protected readonly sentUrl = signal<string | null>(null);

  private readonly model = signal<ContactFormModel>({
    name: '',
    phone: '',
    service: '',
    message: '',
    dataConsent: false,
  });

  protected readonly contactForm = form(this.model, (f) => {
    const e = this.text.errors;
    required(f.name, { message: e.name });
    minLength(f.name, 2, { message: e.nameShort });

    required(f.phone, { message: e.phone });
    pattern(f.phone, /^\+?[0-9\s-]{7,15}$/, { message: e.phoneInvalid });

    required(f.service, { message: e.service });
    maxLength(f.message, 300, { message: e.messageMax });
    required(f.dataConsent, { message: e.consent });
  });

  submit(event: Event): void {
    event.preventDefault();

    if (!this.contactForm().valid()) {
      this.contactForm().markAsTouched();
      return;
    }

    const { name, phone, service, message } = this.model();
    const body = [
      this.text.whatsappIntro,
      `• ${this.text.nameLabel}: ${name}`,
      `• ${this.text.phoneLabel}: ${phone}`,
      `• ${this.text.serviceLabel}: ${service}`,
      ...(message.trim() ? [`• ${message.trim()}`] : []),
    ].join('\n');

    const url = buildWhatsAppUrl(this.phoneE164, body);
    window.open(url, '_blank', 'noopener');
    this.sentUrl.set(url);
  }

  reset(): void {
    this.sentUrl.set(null);
  }
}
