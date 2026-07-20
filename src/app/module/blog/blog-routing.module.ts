import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';



const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':slug', component: BlogViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
