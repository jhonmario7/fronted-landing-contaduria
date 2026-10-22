import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [NgOptimizedImage, Icon, SectionHeader],
  selector: 'app-team',
  styleUrl: './team.scss',
  templateUrl: './team.html',
})
export class Team {
  protected readonly team = SITE_CONTENT.team;

  // Fotos solo cuando estén las de todo el equipo: mezclar fotos con iniciales se ve dispar.
  // Hoy solo está la de Carlos (Yury y Rosi pendientes).
  protected readonly showPhotos = this.team.members.every((m) => m.photo);

  // Nombre + primer apellido (penúltima palabra): "Yury Vera Plazas" → "YV".
  protected initials(name: string): string {
    const parts = name.split(' ');
    return (parts[0][0] + parts[Math.max(parts.length - 2, 0)][0]).toUpperCase();
  }
}
