import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { PageHeroComponent } from './page-hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   PageHeroComponent
  ],
  imports: [
    CommonModule,
     RouterModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  exports:[PageHeroComponent]
})
export class PageModule {}
