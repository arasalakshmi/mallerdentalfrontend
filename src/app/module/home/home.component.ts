import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
//import { HomeService } from './home.service';
import { HOME_DATA } from './home.data';
import { Services } from '../treatments/treatment-detail/treatment.data';
import { SeoService } from '../../core/services/seo.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
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
    title: 'Maller Dental Clinic | Best Dental Clinic in RS Puram, Coimbatore',
    description: 'Maller Dental Clinic offers dental implants, root canal treatment, braces, cosmetic dentistry, teeth cleaning and smile makeovers in RS Puram, Coimbatore.',
    keywords: 'Dentist in Coimbatore, Dental Clinic RS Puram, Dental Implants, Root Canal, Braces',
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

    "telephone": "+91XXXXXXXXXX",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RS Puram",
      "addressLocality": "RS PURAM, COIMBATORE",
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
