import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { AboutComponent } from './about.component';
import { AbotRoutingModule } from './about-routing.module';
import { PageModule } from '../../core/page-hero/page.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AbotRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PageModule
  ]
})
export class AboutModule {}
