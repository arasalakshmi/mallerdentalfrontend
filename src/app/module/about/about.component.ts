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
 title: 'About Maller Dental Clinic | Trusted Dentists in RS Puram, Coimbatore',

description: 'Learn about Maller Dental Clinic in RS Puram, Coimbatore. Meet our experienced dentists, discover our patient-first approach, modern dental technology, and commitment to ethical, high-quality dental care.',

keywords: 'About Maller Dental Clinic, dentist in RS Puram, dental clinic Coimbatore, experienced dentists Coimbatore, ethical dental care, dental specialists RS Puram, Maller Dental Clinic',
  url: 'https://mallerdentalfrontend.vercel.app/about'
});
 this.about = ABOUT_DATA;
    }
}
