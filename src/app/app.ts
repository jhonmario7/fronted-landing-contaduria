import { Component, DOCUMENT, DestroyRef, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { startScrollReveal } from './core/scroll-reveal';
import { SITE_CONTENT } from './data/site-content';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { BackToTop } from './shared/ui/back-to-top/back-to-top';
import { WhatsappFab } from './shared/ui/whatsapp-fab/whatsapp-fab';

@Component({
  imports: [RouterOutlet, Header, Footer, WhatsappFab, BackToTop],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly nav = SITE_CONTENT.navigation;
  protected readonly contact = SITE_CONTENT.contact;
  // Línea de WhatsApp empresarial (única).
  protected readonly whatsapp = SITE_CONTENT.contact.whatsapp[0];

  constructor() {
    const doc = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => destroyRef.onDestroy(startScrollReveal(doc)));
  }
}
