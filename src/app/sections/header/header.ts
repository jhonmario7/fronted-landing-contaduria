import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { buildWhatsAppUrl } from '../../core/whatsapp-link.util';
import { SITE_CONTENT } from '../../data/site-content';
import { Button } from '../../shared/ui/button/button';
import { Icon } from '../../shared/ui/icon/icon';

// Pixeles de scroll a partir de los cuales el header deja de ser transparente.
const SCROLL_THRESHOLD = 8;

@Component({
  imports: [NgOptimizedImage, Button, Icon],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(window:scroll)': 'onScroll()',
  },
})
export class Header {
  private readonly router = inject(Router);

  protected readonly nav = SITE_CONTENT.navigation;
  protected readonly logo = SITE_CONTENT.identity.logo;
  protected readonly isMenuOpen = signal(false);
  private readonly scrolled = signal(false);

  // Solo la home empieza con un Hero oscuro bajo el header; el resto de páginas lo llevan sólido.
  private readonly isHome = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.url.split(/[?#]/)[0] === '/'),
    ),
    { initialValue: true },
  );

  /** Con scroll en la home: el header sólido "cae" desde arriba (ver header.scss). */
  protected readonly dropped = computed(() => this.overlay() && this.scrolled());

  /** Transparente solo en la home, arriba del todo y con el menú cerrado. */
  protected readonly overlay = computed(() => this.isHome());
  protected readonly transparent = computed(
    () => this.overlay() && !this.scrolled() && !this.isMenuOpen(),
  );

  // Línea de WhatsApp empresarial (única).
  protected readonly whatsappHref = buildWhatsAppUrl(
    SITE_CONTENT.contact.whatsapp[0].phoneE164,
    SITE_CONTENT.contact.whatsappMessage,
  );

  constructor() {
    // Recarga a mitad de página (o ancla): el header debe nacer sólido.
    if (typeof window !== 'undefined') {
      this.onScroll();
    }
  }

  onScroll(): void {
    const past = window.scrollY > SCROLL_THRESHOLD;
    if (past !== this.scrolled()) {
      this.scrolled.set(past);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
