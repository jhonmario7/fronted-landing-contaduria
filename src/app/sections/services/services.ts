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

  // Línea de WhatsApp empresarial (única).
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
  // abierto o con el botón de pausa (WCAG 2.2.2). Arranca reproduciéndose.
  private static readonly INTERVAL_MS = 4500;
  private static readonly SLIDE_MS = 1000;
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  protected readonly positions = signal<number[]>([0]);
  protected readonly active = signal(0);
  protected readonly paused = signal(false);
  private holding = false;
  private frame = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const el = this.track().nativeElement;

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

      // El usuario toma el control: se cancela la animación en curso.
      const stop = () => this.cancelSlide();
      for (const type of ['wheel', 'touchstart', 'pointerdown']) {
        el.addEventListener(type, stop, { passive: true });
      }

      // Las tarjetas fuera de vista se atenúan un poco y entran con un leve zoom.
      const seen = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
          }
        },
        { root: el, threshold: 0.6 },
      );
      el.querySelectorAll('.card').forEach((card) => seen.observe(card));

      const timer = setInterval(() => {
        if (this.paused() || this.holding || document.hidden || el.querySelector('dialog[open]')) {
          return;
        }
        this.goTo((this.active() + 1) % this.positions().length);
      }, Services.INTERVAL_MS);

      destroyRef.onDestroy(() => {
        clearInterval(timer);
        resize.disconnect();
        seen.disconnect();
        this.cancelSlide();
        for (const type of ['wheel', 'touchstart', 'pointerdown']) el.removeEventListener(type, stop);
        el.removeEventListener('scroll', measure);
      });
    });
  }

  // Desplazamiento propio con aceleración y frenado suaves (el "smooth" del navegador es seco).
  // El scroll-snap se apaga mientras dura para que no pelee con la animación.
  protected goTo(index: number): void {
    const el = this.track().nativeElement;
    this.cancelSlide();
    const from = el.scrollLeft;
    const delta = index * this.step() - from;
    if (Math.abs(delta) < 1) return;

    el.style.scrollSnapType = 'none';
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / Services.SLIDE_MS, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // easeInOutCubic
      el.scrollLeft = from + delta * eased;
      if (p < 1) {
        this.frame = requestAnimationFrame(tick);
      } else {
        this.cancelSlide();
      }
    };
    this.frame = requestAnimationFrame(tick);
  }

  private cancelSlide(): void {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.track().nativeElement.style.scrollSnapType = '';
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
