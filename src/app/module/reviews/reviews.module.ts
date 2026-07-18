import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[ReviewListComponent]
})
export class ReviewModule {}
