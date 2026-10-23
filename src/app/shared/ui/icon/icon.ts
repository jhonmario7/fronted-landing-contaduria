import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { AnimateIcons } from '@animateicons/angular';
import type { IconData } from '@animateicons/angular';
import {
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  ChartColumn,
  Check,
  ChevronDown,
  Clock,
  Coins,
  Eye,
  FileSearch,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  Info,
  Instagram,
  Landmark,
  Laptop,
  Lightbulb,
  Mail,
  Medal,
  Menu,
  Pause,
  Play,
  MessageCircle,
  Receipt,
  Settings,
  ShieldCheck,
  Sprout,
  Store,
  Target,
  Users,
  X,
} from '@animateicons/angular/lucide';
import { Tiktok, Whatsapp } from '@animateicons/angular/huge';

// Iconos animados de animateicons.in (MIT; formas de Lucide, ISC, y Hugeicons). Aviso de
// licencias en node_modules/@animateicons/angular/THIRD_PARTY_NOTICES.md.
const ICONS = {
  // Servicios
  calculator: Calculator,
  receipt: Receipt,
  scale: Landmark, // animateicons no trae balanza; Landmark = institución / legal
  search: FileSearch,
  building: Building2,
  heart: Heart,
  briefcase: Briefcase,
  laptop: Laptop,
  store: Store,
  money: Coins,
  graduation: GraduationCap,
  // Valores, modalidades y pilares
  handshake: Handshake,
  'shield-check': ShieldCheck,
  users: Users,
  lightbulb: Lightbulb,
  award: Medal,
  sprout: Sprout,
  eye: Eye,
  chat: MessageCircle,
  calendar: Calendar,
  gear: Settings,
  info: Info,
  chart: ChartColumn,
  target: Target,
  document: FileText,
  // Interfaz y contacto
  whatsapp: Whatsapp,
  mail: Mail,
  clock: Clock,
  check: Check,
  'arrow-right': ArrowRight,
  'chevron-down': ChevronDown,
  menu: Menu,
  pause: Pause,
  play: Play,
  close: X,
  instagram: Instagram,
  tiktok: Tiktok,
} as const satisfies Record<string, IconData>;

export type IconName = keyof typeof ICONS;
export const ICON_NAMES = Object.keys(ICONS) as IconName[];

@Component({
  imports: [AnimateIcons],
  selector: 'app-icon',
  styleUrl: './icon.scss',
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);

  protected readonly data = computed(() => ICONS[this.name()]);
  private readonly animation = viewChild.required(AnimateIcons);

  constructor() {
    const host: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    // La animación se dispara al pasar el cursor (o enfocar) por el elemento interactivo que
    // contiene al icono (enlace, botón o tarjeta con data-icon-hover), no solo por el trazo del icono.
    afterNextRender(() => {
      const trigger = host.closest('a, button, summary, [data-icon-hover]') ?? host;
      const start = () => this.animation().startAnimation();
      const stop = () => this.animation().stopAnimation();
      trigger.addEventListener('mouseenter', start);
      trigger.addEventListener('mouseleave', stop);
      trigger.addEventListener('focusin', start);
      trigger.addEventListener('focusout', stop);
      destroyRef.onDestroy(() => {
        trigger.removeEventListener('mouseenter', start);
        trigger.removeEventListener('mouseleave', stop);
        trigger.removeEventListener('focusin', start);
        trigger.removeEventListener('focusout', stop);
      });
    });
  }
}
