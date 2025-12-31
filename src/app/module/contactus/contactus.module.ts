import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { ContactusComponent } from './contactus.component';
import { ContactRoutingModule } from './contactus-routing.module';

@NgModule({
  declarations: [
   ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ContactModule {}
