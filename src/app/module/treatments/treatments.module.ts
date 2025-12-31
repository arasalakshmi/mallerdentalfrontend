import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { TreatmentsComponent } from './treatments.component';
import { treatmentRoutingModule } from './treatment-routing.module';
import { TreatmentDetailComponent } from './treatment-detail/treatment-detail.component';
import { SliderComponent } from '../slider/slider.component';

@NgModule({
  declarations: [
TreatmentsComponent,
TreatmentDetailComponent,
SliderComponent,
  ],
  imports: [
    CommonModule,
    treatmentRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class treatmentModule {}
