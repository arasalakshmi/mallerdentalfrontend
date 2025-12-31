import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
 @ViewChild('slider', { static: false }) slider!: ElementRef;

  reviews = [
    {
      name: 'Aparna Srikanth',
      rating: 5,
      time: '5 months ago',
      comment: 'I have been consulting for more than two decades. Had referred many friends and relatives. All are satisfied. Very hygienic clinic.'
    },
    {
      name: 'Narmatha Balaji',
      rating: 5,
      time: '6 days ago',
      comment: 'Me and my mom took treatment here. Treatment was excellent and we are happy to smile confidently.'
    },
    {
      name: 'Kamesh Krishnamoorthy',
      rating: 5,
      time: '3 weeks ago',
      comment: 'Doctor patiently examined and performed root canal. The process was very comfortable.'
    },
    {
      name: 'Dharshini Jayakumar',
      rating: 5,
      time: '7 months ago',
      comment: 'No pain during sessions. Doctor gave confidence throughout. Result was perfect.'
    },
    {
      name: 'Google User',
      rating: 5,
      time: '10 months ago',
      comment: 'Excellent care for broken tooth. No discomfort at all. Friendly and professional staff.'
    }
  ];

  stars(n: number) {
    return Array(n);
  }

  slideLeft() {
    this.slider.nativeElement.scrollBy({
      left: -340,
      behavior: 'smooth'
    });
  }

  slideRight() {
    this.slider.nativeElement.scrollBy({
      left: 340,
      behavior: 'smooth'
    });
  }
}
