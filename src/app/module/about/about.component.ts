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

keywords: 'About Maller Dental Clinic, dentist in RS Puram, dental clinic Coimbatore, experienced dentists Coimbatore, ethical dental care, dental specialists RS Puram, Maller Dental Clinic, Dentist near me, dental clini in saibabacolony, dental clinic in vadavalli, Dental Clinic in RSPURAM, dental clinic in R.S.Puram, dental clinic in R.S PUram, best dental clinic in rspuram',
  url: 'https://mallerdentalfrontend.vercel.app/about'
});
 this.about = ABOUT_DATA;

 this.seo.addSchema({
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://mallerdentalclinic.com/#dentist",
  "name": "Maller Dental Clinic",
  "url": "https://mallerdentalfrontend.vercel.app/about",
  "logo": "https://mallerdentalclinic.com/assets/images/logo.png",
  "image": "https://mallerdentalclinic.com/assets/images/about/about-hero.jpg",
  "telephone": "+91-9442951313",
  "priceRange": "₹₹",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Gowtham Arcade, 48, Thiruvenkatasamy Rd W, Opposite Corporation Kalaiarangam, East, R.S. Puram",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641002",
    "addressCountry": "IN"
  },

  "founder": [
    {
      "@type": "Person",
      "name": "Dr. Sudhakar V. Maller",
      "jobTitle": "Founder & Prosthodontist"
    },
    {
      "@type": "Person",
      "name": "Dr. Udita V. Maller",
      "jobTitle": "Co-Founder & Prosthodontist"
    }
  ],

  "doctor": [
    {
      "@type": "Person",
      "name": "Dr. Thirumalai Velu",
      "jobTitle": "Cheif Dental Surgeon",
      "alumniOf": "Ramakrishna Dental College",
      "worksFor": {
        "@type": "Dentist",
        "name": "Maller Dental Clinic | RS Puram"
      }
    }
  ],

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "20:00"
    }
  ],

  "sameAs": [
    "https://share.google/Tpf2kkI0NWnmIp3xw"
  ]
});
    }
}
