import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';

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
  protected readonly year = new Date().getFullYear();
}
