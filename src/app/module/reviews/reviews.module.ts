import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewRoutingModule } from './reviews-routing.module';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ReviewModule {}
