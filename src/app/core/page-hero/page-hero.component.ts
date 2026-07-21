import { Component, Input } from '@angular/core';
//import { PageHero } from './page.model';

export interface HeroFeature {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-page-hero',
  standalone: false,
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
 @Input() image = '';

  @Input() title = '';

  @Input() subtitle = '';

  @Input() description = '';

  @Input() tag = '';

  @Input() showButtons = false;

  @Input() showExperience = false;

  @Input() features: HeroFeature[] = [];
}
