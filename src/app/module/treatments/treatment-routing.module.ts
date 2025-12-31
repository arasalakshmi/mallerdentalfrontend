import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentsComponent } from './treatments.component';
import { TreatmentDetailComponent } from './treatment-detail/treatment-detail.component';



const routes: Routes = [
  { path: '', component: TreatmentsComponent },
  {
    path: ':slug',
    component: TreatmentDetailComponent //  DETAILS PAGE
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class treatmentRoutingModule {}
