import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { AppointmentComponent } from './appointment.component';
import { AppointmentRoutingModule } from './appointment.routing-module';
import { AppointListComponent } from './appoint-list/appoint-list.component';

@NgModule({
  declarations: [
    AppointmentComponent,
    AppointListComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
   exports: [
    AppointmentComponent   // ⭐ THIS LINE IS REQUIRED
  ]
})
export class AppointmentModule {}
