import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { TourRoutingModule } from './tour-routing.module';
import { TourComponent } from './tour.component';


@NgModule({
  declarations: [
    TourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class tourModule {}
