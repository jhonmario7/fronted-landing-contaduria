import { Component } from '@angular/core';

// Temporal (Fase 2): "Próximamente" mientras se construye la landing. Se reemplaza en la Fase 5.
@Component({
  selector: 'app-home',
  styleUrl: './home.scss',
  template: `
    <main class="soon">
      <h1 class="brand">IUS COUNTER <span>CONSULTING</span></h1>
      <p class="tagline">Asesoría contable, tributaria y legal</p>
      <p class="note">Estamos construyendo nuestra página. Mientras tanto, escríbenos:</p>
      <ul class="links">
        <li><a href="https://wa.me/573178224883">WhatsApp 317 822 4883</a></li>
        <li><a href="https://wa.me/573194975125">WhatsApp 319 497 5125</a></li>
        <li><a href="mailto:iuscounter2026@gmail.com">iuscounter2026&#64;gmail.com</a></li>
        <li><a href="/portafolio/">Ver portafolio de servicios</a></li>
      </ul>
    </main>
  `,
})
export class Home {}
