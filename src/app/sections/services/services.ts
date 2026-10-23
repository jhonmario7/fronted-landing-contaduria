import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
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

  // ---------- Carrusel ----------
  // Pista con scroll-snap nativo (se desliza con el dedo o el trackpad) que avanza sola de a una
  // tarjeta. Se detiene al pasar el cursor o enfocar, con la pestaña oculta, con un detalle
  // abierto, con "reducir movimiento" o con el botón de pausa (WCAG 2.2.2).
  private static readonly INTERVAL_MS = 4000;
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  protected readonly positions = signal<number[]>([0]);
  protected readonly active = signal(0);
  protected readonly paused = signal(false);
  private holding = false;
  private reduceMotion = false;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const el = this.track().nativeElement;
      this.reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (this.reduceMotion) this.paused.set(true);

      const measure = () => {
        const step = this.step();
        const perView = Math.max(1, Math.round(el.clientWidth / step));
        const count = Math.max(1, this.services.length - perView + 1);
        if (count !== this.positions().length) {
          this.positions.set(Array.from({ length: count }, (_, i) => i));
        }
        this.active.set(Math.min(Math.round(el.scrollLeft / step), count - 1));
      };
      measure();
      el.addEventListener('scroll', measure, { passive: true });
      const resize = new ResizeObserver(measure);
      resize.observe(el);

      const timer = setInterval(() => {
        if (this.paused() || this.holding || document.hidden || el.querySelector('dialog[open]')) {
          return;
        }
        this.goTo((this.active() + 1) % this.positions().length);
      }, Services.INTERVAL_MS);

      destroyRef.onDestroy(() => {
        clearInterval(timer);
        resize.disconnect();
        el.removeEventListener('scroll', measure);
      });
    });
  }

  protected goTo(index: number): void {
    this.track().nativeElement.scrollTo({
      left: index * this.step(),
      behavior: this.reduceMotion ? 'auto' : 'smooth',
    });
  }

  protected hold(value: boolean): void {
    this.holding = value;
  }

  protected dotLabel(index: number): string {
    return this.section.goToLabel.replace('{n}', String(index + 1));
  }

  // Ancho de una tarjeta + separación.
  private step(): number {
    const el = this.track().nativeElement;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return (card?.offsetWidth ?? el.clientWidth) + gap;
  }

  // Clic en el fondo oscuro (fuera del panel) cierra el diálogo; Esc lo cierra de forma nativa.
  protected closeOnBackdrop(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target === dialog) {
      dialog.close();
    }
  }
}
