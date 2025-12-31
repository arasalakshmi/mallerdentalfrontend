import { Component } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  galleryImages = [
    'assets/tour/img.jpg',
    'assets/tour/img1.jpg',
    'assets/tour/img2.jpg',
  ];
}
