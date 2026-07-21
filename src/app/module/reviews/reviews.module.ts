import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewRoutingModule } from './reviews-routing.module';
import { ReviewListComponent } from './review-list/review-list.component';
import { PageModule } from '../../core/page-hero/page.module';

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
    PageModule,
  ],
  exports:[ReviewListComponent]
})
export class ReviewModule {}
