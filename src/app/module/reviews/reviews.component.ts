import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DUMMY_REVIEWS, GOOGLE_REVIEW_INFO, REVIEW_FAQS, REVIEWS_HERO } from './review.data';
import { GoogleReview, ReviewService } from './review.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrl: './reviews.component.scss',
    standalone: false
})
export class ReviewsComponent implements OnInit {
 @ViewChild('slider', { static: false }) slider!: ElementRef;
  review = REVIEWS_HERO;
  googleInfo = GOOGLE_REVIEW_INFO;

reviews: GoogleReview[] = DUMMY_REVIEWS;
  faqs = REVIEW_FAQS;

  openedIndex = 0;

  constructor(private reviewService: ReviewService, private seo:SeoService) {}

  ngOnInit(): void {
  this.loadReviews();
  this.seo.update({
  title: 'Best Dental Clinic Reviews Near Me In RS Puram, Coimbatore | R.S PURAM, Coimbatore',
description: 'Read genuine Google reviews from patients of Maller Dental Clinic in RS Puram, Coimbatore. Discover why families trust our experienced dentists for quality, comfortable, and affordable dental care.',
keywords: 'Maller Dental Clinic reviews, Best dental clinic reviews Coimbatore, Dentist reviews RS Puram, Google reviews Maller Dental Clinic, Dental clinic testimonials Coimbatore, Patient reviews dentist Coimbatore, Best dentist RS Puram,Top dental clinic in RS PURAM,Dental Hospital In RS PURAM, DR.thirumalai velu dentist,dr.thirus maller dental clinic ,mallerdentalcoimbatore, Dental clinic in saibabacolony, dental clinic in Vadavalli, dental clinic in gandhipuram, dental clinic in RSPURAM, Dental clinic in R.S Puram, dental clinic in R.S. Puram',
    url: 'https://mallerdentalfrontend.vercel.app',
    image: 'https://www.mallerdentalfrontend.vercel.app/assets/images/logo.png'
  });
  this.seo.addSchema({
    "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://mallerdentalclinic.com/#dentist",
  "name": "Maller Dental Clinic",
  "url": "https://mallerdentalclinic.com",
  "image": "https://mallerdentalclinic.com/assets/images/logo.png",
  "telephone": "+91-94429-51313",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Gowtham Arcade, 48, Thiruvenkatasamy Rd W, Opposite Corporation Kalaiarangam, East, R.S. Puram",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0097234",
    "longitude": "76.946896"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "55"
  },
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
    "https://maps.app.goo.gl/57seJefnaqnGmL2T8"
  ]

  });
}
  


  toggleFaq(index: number): void {
    this.openedIndex = this.openedIndex === index ? -1 : index;
  }

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


  loadReviews(): void {

    this.reviewService.getReviews().subscribe({

      next: (data) => {

        this.googleInfo.rating = data.rating;

        this.googleInfo.totalReviews = `${data.totalReviews}+`;

        this.reviews = data.reviews.slice(0, 6);

      },

      error: (error) => {

        console.error('Unable to load Google reviews.', error);

      }

    });

  }
}

