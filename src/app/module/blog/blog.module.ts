import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { ProtableTextComponent } from '../../core/protable-text/protable-text.component';

@NgModule({
  declarations: [
   BlogComponent,
   BlogViewComponent,
   ProtableTextComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
  ]
})
export class BlogModule {}
