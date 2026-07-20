import { Component, Input } from '@angular/core';
import { PageHero } from './page.model';

@Component({
  selector: 'app-page-hero',
  standalone: false,
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  @Input() hero!: PageHero;
}
