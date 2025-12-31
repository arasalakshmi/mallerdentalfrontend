import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.treatment = this.treatmentsData[slug!];
  }
}
