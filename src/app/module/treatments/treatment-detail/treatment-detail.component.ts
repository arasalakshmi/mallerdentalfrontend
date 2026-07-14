import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-treatment-detail',
  templateUrl: './treatment-detail.component.html',
  styleUrl: './treatment-detail.component.scss'
})
export class TreatmentDetailComponent {
treatment: any;

  treatmentsData: any = {
    'full-mouth-rehabilitation': {
      title: 'Full Mouth Rehabilitation',
      doctor: 'Dr. Thirumalaivelu',
      description:
        'Revitalize your smile and restore full mouth function with our comprehensive dental rehabilitation approach.',
      banner: 'assets/services/fmr-banner.jpg'
    },
    'dental-implants': {
      title: 'Dental Implants',
      doctor: 'Dr. Thirumalaivelu',
      description:
        'A permanent and natural-looking solution for replacing missing teeth.',
      banner: 'assets/services/implants-banner.jpg'
    },
    'root-canal-treatment': {
      title: 'Root Canal Treatment',
      doctor: 'Dr. Thirumalaivelu',
      description:
        'Pain-free root canal treatment to save infected or damaged teeth.',
      banner: 'assets/services/root-canal-banner.jpg'
    }
  };

  constructor(private route: ActivatedRoute,
    private seo:SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.treatment = this.treatmentsData[slug!];
    if (this.treatment) {
  this.seo.update({
    title: `${this.treatment.title} | Maller Dental Clinic, RS Puram, Coimbatore`,
    description: this.treatment.description,
    keywords: `${this.treatment.title}, Dentist in Coimbatore, Dental Clinic RS Puram`,
    url: `https://mallerdentalfrontend.vercel.app/treatments/${slug}`,
    image: `https://mallerdentalfrontend.vercel.app/${this.treatment.banner}`
  });
}
  }
}
