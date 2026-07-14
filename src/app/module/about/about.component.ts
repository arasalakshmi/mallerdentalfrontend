import { Component } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { ABOUT_DATA } from './about.data';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    standalone: false
})
export class AboutComponent {

services: any[] = [];
about:any;

serviceChunks: any[][] = [];
  constructor (private seo: SeoService){}

   ngOnInit(): void {
      this.seo.update({
  title: 'About Maller Dental Clinic | RS Puram, Coimbatore',
  description: 'Learn about Maller Dental Clinic, our experienced dentists and our commitment to quality dental care.',
  keywords: 'About Maller Dental Clinic, Dentist Coimbatore',
  url: 'https://mallerdentalfrontend.vercel.app/about'
});
 this.about = ABOUT_DATA;
    }
}
