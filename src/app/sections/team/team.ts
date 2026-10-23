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

  // Foto en círculo si el integrante la tiene; si no, monograma con sus iniciales. Mezclarlos se
  // ve dispar: se muestran fotos solo cuando están las de todo el equipo.
  protected readonly showPhotos = this.team.members.every((m) => m.photo);

  // Nombre + primer apellido (penúltima palabra): "Yury Vera Plazas" → "YV".
  protected initials(name: string): string {
    const parts = name.split(' ');
    return (parts[0][0] + parts[Math.max(parts.length - 2, 0)][0]).toUpperCase();
  }
}
