import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SeoService } from '../../core/services/seo.service';
import { SERVICES, SERVICES_PAGE } from './treatment.data';

@Component({
    selector: 'app-treatments',
    templateUrl: './treatments.component.html',
    styleUrl: './treatments.component.scss',
    standalone: false
})
export class TreatmentsComponent {
  //services:any;
 page = SERVICES_PAGE;

services = SERVICES;
  
constructor(private router: Router, 
  private seo:SeoService,
  ) {}
ngOnInit() {
  //this.loadServices();
   this.seo.update({
    title: 'Dental Treatments | Maller Dental Clinic, RS Puram, Coimbatore',
    description: 'Explore our dental treatments including dental implants, root canal treatment, braces, cosmetic dentistry, teeth whitening and more.',
    keywords: 'Dental Treatments, Dentist Coimbatore, Dental Implants, Root Canal',
    url: 'https://mallerdentalfrontend.vercel.app/treatments'
  });
}

// loadServices() {
//   this.treatment.getServices().subscribe(res => {
//     this.services = res;
//     //this.serviceChunks = this.chunkArray(this.services, 4);
//   });
// }

  goToDetail(slug: string) {
    this.router.navigate(['/treatments', slug]);
  }
}
