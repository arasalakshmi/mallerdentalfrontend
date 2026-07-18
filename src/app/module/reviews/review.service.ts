import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GoogleReview {
  name: string;
  profilePhoto: string;
  rating: number;
  review: string;
  time: string;
}

export interface GoogleReviewResponse {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private http = inject(HttpClient);

  private readonly apiUrl = '/api/reviews';

  getReviews(): Observable<GoogleReviewResponse> {
    console.log('Calling API...');

  //return this.http.get('/api/reviews');
    return this.http.get<GoogleReviewResponse>(this.apiUrl);
  
  }

}