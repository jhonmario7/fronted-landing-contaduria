import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, Icon, SectionHeader],
  selector: 'app-why-us',
  styleUrl: './why-us.scss',
  templateUrl: './why-us.html',
})
export class WhyUs {
  protected readonly whyUs = SITE_CONTENT.whyUs;
  protected readonly active = signal(0);

  // Pestañas accesibles (patrón ARIA): flechas, Inicio y Fin cambian de pestaña y mueven el foco.
  protected onKeydown(event: KeyboardEvent): void {
    const last = this.whyUs.pillars.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: this.active() === last ? 0 : this.active() + 1,
      ArrowLeft: this.active() === 0 ? last : this.active() - 1,
      Home: 0,
      End: last,
    };
    const next = keys[event.key];
    if (next === undefined) return;
    event.preventDefault();
    this.active.set(next);
    const tabs = (event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('[role="tab"]');
    tabs[next]?.focus();
  }
}
