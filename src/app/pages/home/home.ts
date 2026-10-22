import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

// Temporal: "Próximamente" mientras se construye la landing (Fase 5). Sirve además como
// muestra viva del sistema de diseño de la Fase 3.
@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, Button, Icon],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly identity = SITE_CONTENT.identity;
  protected readonly contact = SITE_CONTENT.contact;
  protected readonly whatsappLinks = SITE_CONTENT.contact.whatsapp.map((line) => ({
    ...line,
    href: buildWhatsAppUrl(line.phoneE164, SITE_CONTENT.contact.whatsappMessage),
  }));
}
