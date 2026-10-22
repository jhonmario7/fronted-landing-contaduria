import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SITE_CONTENT } from './data/site-content';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { WhatsappFab } from './shared/ui/whatsapp-fab/whatsapp-fab';

@Component({
  imports: [RouterOutlet, Header, Footer, WhatsappFab],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly contact = SITE_CONTENT.contact;
  // [PENDIENTE: línea principal de WhatsApp] — mientras tanto, la primera del portafolio.
  protected readonly whatsapp = SITE_CONTENT.contact.whatsapp[0];
}
