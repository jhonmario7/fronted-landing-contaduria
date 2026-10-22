import { Component, computed, input, signal } from '@angular/core';
import { Icon } from '../icon/icon';

// Circunferencia del anillo (r = 27 en un viewBox de 58, igual al botón de WhatsApp).
const CIRCUMFERENCE = 2 * Math.PI * 27;

// Scroll (px) desde el que aparece el botón.
const SHOW_AFTER = 400;

@Component({
  imports: [Icon],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.scss',
  templateUrl: './back-to-top.html',
  host: { '(window:scroll)': 'update()', '(window:resize)': 'update()' },
})
export class BackToTop {
  readonly label = input.required<string>();

  protected readonly circumference = CIRCUMFERENCE;
  protected readonly progress = signal(0); // 0 = arriba, 1 = fin de la página
  protected readonly visible = signal(false);
  protected readonly dashOffset = computed(() => CIRCUMFERENCE * (1 - this.progress()));

  constructor() {
    // Si la página se recarga a mitad de scroll, el botón nace con su estado correcto.
    if (typeof window !== 'undefined') {
      this.update();
    }
  }

  update(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    this.progress.set(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    this.visible.set(y > SHOW_AFTER);
  }

  scrollToTop(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
}
