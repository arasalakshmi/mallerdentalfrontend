import { HttpClient } from '@angular/common/http';
import { Component, DOCUMENT } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
//import { HomeService } from './home.service';
import { HOME_DATA } from './home.data';
import { Services } from '../treatments/treatment-detail/treatment.data';
import { SeoService } from '../../core/services/seo.service';

import { Inject } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
services: any[] = [];
home:any;

serviceChunks: any[][] = [];

//imageUrl = 'https://mallerdentalbackend.onrender.com/';


constructor(  @Inject(DOCUMENT) private document: Document,
  private seo:SeoService) {}

ngOnInit() {
 // this.loadServices();
  this.seo.update({
  title: 'Best Dental Clinic in RS Puram | Coimbatore',
description: 'Looking for the best dental clinic in RS Puram, Coimbatore? Maller Dental Clinic provides dental implants, root canal treatment, cosmetic dentistry, pediatric dentistry and family dental care with experienced dentists. R.S Puram, Coimbatore, Vadavalli Dental Clinic near Me',
keywords: 'best dental clinic in rs puram,best dentist in rs puram,dentist in rs puram,dental clinic coimbatore,best dental clinic coimbatore,root canal treatment rs puram,dental implants coimbatore,cosmetic dentist coimbatore,family dentist rs puram, Maller Dental Clinic, Dental clinic in saibabacolony, dental clinic in Vadavalli, dental clinic in gandhipuram, dental clinic in RSPURAM, Dental clinic in R.S Puram, dental clinic in R.S. Puram',
    url: 'https://mallerdentalfrontend.vercel.app',
    image: 'https://www.mallerdentalfrontend.vercel.app/assets/images/logo.png'
  });
  this.addSchema();
  this.home = HOME_DATA;
  this.services = Services;
  this.serviceChunks = this.chunkArray(this.services, 4);
}

// loadServices() {
//   this.serviceApi.getServices().subscribe(res => {
//     this.services = res;
//     this.serviceChunks = this.chunkArray(this.services, 4);
//   });
//   this.serviceApi.getHome().subscribe(res => {
//     this.home = res;
//   });
// }

chunkArray(arr: any[], size: number): any[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
private addSchema(): void {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    "name": "Maller Dental Clinic",

    "image": "https://mallerdentalfrontend.vercel.app//images/logo.png",

    "url": "https://mallerdentalfrontend.vercel.app",

    "telephone": "+9194429 51313",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, Gowtham Arcade, 48, Thiruvenkatasamy Rd W, opposite Corporation Kalaiarangam, East, RS. Puram, Coimbatore, Tamil Nadu 641002",
      "addressLocality": "RS Puram, Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641002",
      "addressCountry": "INDIA"
    },

    "priceRange": "200",

    "openingHours": [
      "Mon-Sat 10:00 AM-20:00 PM"
    ],

    "sameAs": [
      "https://www.instagram.com/mallerdentalcoimbatore",
      "https://www.facebook.com/mallerdentalcoimbatore"
    ]
  };

  const script = this.document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);

  this.document.head.appendChild(script);

}

}
