import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, Button, Icon, SectionHeader],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {
  protected readonly section = SITE_CONTENT.servicesSection;

  // [PENDIENTE: línea principal de WhatsApp] — mientras tanto, la primera del portafolio.
  protected readonly services = SITE_CONTENT.services.map((service) => ({
    ...service,
    whatsappHref: buildWhatsAppUrl(
      SITE_CONTENT.contact.whatsapp[0].phoneE164,
      this.section.whatsappMessage.replace('{servicio}', service.name),
    ),
  }));

  // Clic en el fondo oscuro (fuera del panel) cierra el diálogo; Esc lo cierra de forma nativa.
  protected closeOnBackdrop(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target === dialog) {
      dialog.close();
    }
  }
}
