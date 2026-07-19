import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
   BlogComponent,
   BlogViewComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
   
  ]
})
export class BlogModule {}
