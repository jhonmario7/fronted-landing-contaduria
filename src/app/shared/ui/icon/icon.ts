import { Component, input } from '@angular/core';

export const ICON_NAMES = [
  // Servicios
  'calculator',
  'receipt',
  'scale',
  'search',
  'building',
  'heart',
  'briefcase',
  'laptop',
  'store',
  'money',
  'graduation',
  // Valores, modalidades y pilares
  'handshake',
  'shield-check',
  'users',
  'lightbulb',
  'award',
  'sprout',
  'chat',
  'calendar',
  'gear',
  'info',
  'chart',
  'target',
  'document',
  // Interfaz y contacto
  'whatsapp',
  'mail',
  'clock',
  'check',
  'arrow-right',
  'chevron-down',
  'menu',
  'close',
  'instagram',
  'facebook',
  'linkedin',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

@Component({
  imports: [],
  selector: 'app-icon',
  styleUrl: './icon.scss',
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
}
