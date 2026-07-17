import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONTACT_DATA } from './contact.data';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrl: './contactus.component.scss',
    standalone: false
})
export class ContactusComponent {
 
 contact = CONTACT_DATA;
  mapUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private seo: SeoService
  ) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.contact.map.embedUrl
    );
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact Maller Dental Clinic | RS Puram, Coimbatore',
      description: 'Contact Maller Dental Clinic in RS Puram, Coimbatore to book an appointment for dental implants, root canal treatment, braces, cosmetic dentistry, and more.',
      keywords: 'Dentist in Coimbatore, Dental Clinic in RS Puram, Book Dental Appointment, Dr.Thirumalaivelu Dentist , Dentist in saibabacolony, dentist in vadavalli, dental treatment in coimbatore, best dental treatment in coimbatore, dentist in covai, dental clini near me',
      url: 'https://mallerdentalfrontend.vercel.app/contact',
      image: 'https://mallerdentalfrontend.vercel.app/images/contact-banner.jpg'
    });
  }

 
}
