import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  imports: [Icon],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  protected readonly legal = SITE_CONTENT.legal;
  protected readonly page = SITE_CONTENT.legal.policyPage;

  constructor() {
    inject(Title).setTitle(`${this.page.title} | ${SITE_CONTENT.identity.businessName}`);
  }
}
