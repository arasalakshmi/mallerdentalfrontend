import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./module/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'treatments',
    loadChildren: () =>
      import('./module/treatments/treatments.module').then(m => m.treatmentModule)
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./module/reviews/reviews.module').then(m => m.ReviewModule)
  },
  {
    path: 'tour',
    loadChildren: () =>
      import('./module/tour/tour.module').then(m=>m.tourModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./module/contactus/contactus.module').then(m => m.ContactModule)
  },
   {
    path: 'appointment',
    loadChildren: () =>
      import('./module/appointment/appointment.module').then(m => m.AppointmentModule)
  },

  // Optional: 404
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
