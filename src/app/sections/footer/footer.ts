import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon, IconName } from '../../shared/ui/icon/icon';

@Component({
  imports: [NgOptimizedImage, RouterLink, Icon],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly identity = SITE_CONTENT.identity;
  protected readonly nav = SITE_CONTENT.navigation;
  protected readonly contact = SITE_CONTENT.contact;
  protected readonly legal = SITE_CONTENT.legal;
  protected readonly legalNotice = SITE_CONTENT.whyUs.legalNotice;
  protected readonly serviceNames = SITE_CONTENT.services.map((s) => s.name);
  protected readonly year = new Date().getFullYear();

  // Solo se muestran las redes que la cliente confirme ([PENDIENTE] en site-content.ts).
  protected readonly socials = (
    [
      { icon: 'instagram', label: 'Instagram', url: SITE_CONTENT.social.instagramUrl ?? '' },
      { icon: 'facebook', label: 'Facebook', url: SITE_CONTENT.social.facebookUrl ?? '' },
      { icon: 'linkedin', label: 'LinkedIn', url: SITE_CONTENT.social.linkedinUrl ?? '' },
    ] satisfies { icon: IconName; label: string; url: string }[]
  ).filter((s) => s.url);
}
