import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { AppointListComponent } from './appoint-list/appoint-list.component';


const routes: Routes = [
  { path: '', component: AppointmentComponent },
   { path: 'form', component: AppointListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule {}
