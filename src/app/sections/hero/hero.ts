import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [NgOptimizedImage, Button, Icon],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly identity = SITE_CONTENT.identity;
  protected readonly hero = SITE_CONTENT.hero;

  // Línea de WhatsApp empresarial (única).
  protected readonly whatsappHref = buildWhatsAppUrl(
    SITE_CONTENT.contact.whatsapp[0].phoneE164,
    SITE_CONTENT.contact.whatsappMessage,
  );
}
