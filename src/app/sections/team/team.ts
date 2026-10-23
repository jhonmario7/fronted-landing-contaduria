import { NgOptimizedImage } from '@angular/common';
import { Component, isDevMode } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import type { MediaAsset, TeamMember } from '../../data/site-content.model';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

// ponytail: solo desarrollo. Fotos de la plantilla de referencia en public/images/team/ejemplo/
// (ignorada por git: no se publican). Borrar cuando lleguen las fotos reales.
const DEMO_PHOTOS: Record<string, MediaAsset> = {
  'yury-vera': { src: '/images/team/ejemplo/yury.jpg', alt: 'Foto de ejemplo', width: 300, height: 340 },
  'rosi-cujinos': { src: '/images/team/ejemplo/rosi.jpg', alt: 'Foto de ejemplo', width: 300, height: 340 },
};

@Component({
  imports: [NgOptimizedImage, Icon, SectionHeader],
  selector: 'app-team',
  styleUrl: './team.scss',
  templateUrl: './team.html',
})
export class Team {
  protected readonly team = SITE_CONTENT.team;

  // Fotos solo cuando estén las de todo el equipo: mezclar fotos con iniciales se ve dispar.
  // Hoy solo está la de Carlos (Yury y Rosi pendientes). En ng serve se rellenan con fotos de
  // ejemplo para ver el diseño; en producción nunca (no son el equipo real).
  private readonly photos = this.team.members.map((m) => m.photo ?? (isDevMode() ? DEMO_PHOTOS[m.id] : null));
  protected readonly showPhotos = this.photos.every(Boolean);

  protected photoOf(member: TeamMember): MediaAsset | null {
    return this.photos[this.team.members.indexOf(member)] ?? null;
  }

  // Nombre + primer apellido (penúltima palabra): "Yury Vera Plazas" → "YV".
  protected initials(name: string): string {
    const parts = name.split(' ');
    return (parts[0][0] + parts[Math.max(parts.length - 2, 0)][0]).toUpperCase();
  }
}
