import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [NgOptimizedImage, Button, Icon],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class Header {
  protected readonly nav = SITE_CONTENT.navigation;
  protected readonly logo = SITE_CONTENT.identity.logo;
  protected readonly isMenuOpen = signal(false);

  // [PENDIENTE: línea principal de WhatsApp] — mientras tanto, la primera del portafolio.
  protected readonly whatsappHref = buildWhatsAppUrl(
    SITE_CONTENT.contact.whatsapp[0].phoneE164,
    SITE_CONTENT.contact.whatsappMessage,
  );

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
