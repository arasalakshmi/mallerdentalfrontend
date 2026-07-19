import { Component , OnInit } from '@angular/core';
import { GoogleReview, ReviewService } from '../review.service';
import { DUMMY_REVIEWS, GOOGLE_REVIEW_INFO, REVIEWS_HERO } from '../review.data';

@Component({
  selector: 'app-review-list',
  standalone: false,
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
})
export class ReviewListComponent implements OnInit{
 review = REVIEWS_HERO;
  googleInfo = GOOGLE_REVIEW_INFO;

reviews: GoogleReview[] = DUMMY_REVIEWS;
  //faqs = REVIEW_FAQS;

  openedIndex = 0;

  constructor(private reviewService: ReviewService,) {}

  ngOnInit(): void {
  this.loadReviews();
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
