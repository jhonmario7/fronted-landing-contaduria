import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  imports: [DecimalPipe, NgOptimizedImage, Icon, SectionHeader],
  selector: 'app-process',
  styleUrl: './process.scss',
  templateUrl: './process.html',
})
export class Process {
  protected readonly section = SITE_CONTENT.processSection;
  protected readonly modalities = SITE_CONTENT.modalities;
}
