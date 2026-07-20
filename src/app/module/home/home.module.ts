import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { AppointmentModule } from '../appointment/appointment.module';
import {ReviewModule} from '../reviews/reviews.module';
import { PageModule } from '../../core/page-hero/page.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    AppointmentModule,
    ReviewModule,
    PageModule
  ]
})
export class HomeModule {}
