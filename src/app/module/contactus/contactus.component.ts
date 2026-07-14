import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrl: './contactus.component.scss',
    standalone: false
})
export class ContactusComponent {
 contactForm!: FormGroup;

  constructor(private fb: FormBuilder,private seo:SeoService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.seo.update({
  title: 'Contact Maller Dental Clinic | RS Puram, Coimbatore',
  description: 'Contact Maller Dental Clinic in RS Puram, Coimbatore to book an appointment for dental implants, root canal treatment, braces, cosmetic dentistry, and more.',
  keywords: 'Contact Dentist Coimbatore, Dental Clinic RS Puram, Book Dental Appointment',
  url: 'https://mallerdentalfrontend.vercel.app/contact',
  image: 'https://mallerdentalfrontend.vercel.app//images/contact-banner.jpg'
});
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
