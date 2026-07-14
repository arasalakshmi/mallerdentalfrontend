import { Component } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-tour',
    templateUrl: './tour.component.html',
    styleUrl: './tour.component.scss',
    standalone: false
})
export class TourComponent {
  constructor(private seo:SeoService){}
  galleryImages = [
    'assets/tour/img.jpg',
    'assets/tour/img1.jpg',
    'assets/tour/img2.jpg',
  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.update({
  title: 'Dental Clinic Gallery | Maller Dental Clinic, Coimbatore',
  description: 'View our modern dental clinic, treatment rooms, advanced equipment, and smile transformation results at Maller Dental Clinic.',
  keywords: 'Dental Clinic Gallery, Smile Makeover, Dentist Clinic Photos',
  url: 'https://mallerdentalfrontend.vercel.app/gallery',
  image: 'https://mallerdentalfrontend.vercel.app//images/gallery-banner.jpg'
});
  }
}
