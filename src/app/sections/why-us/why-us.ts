import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
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
}
