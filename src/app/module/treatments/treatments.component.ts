import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TreatmentService } from './treatment.service';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {
  services:any;
  imageUrl = 'https://mallerdentalbackend.onrender.com/';
  
constructor(private router: Router, private treatment:TreatmentService) {}
ngOnInit() {
  this.loadServices();
}

loadServices() {
  this.treatment.getServices().subscribe(res => {
    this.services = res;
    //this.serviceChunks = this.chunkArray(this.services, 4);
  });
}

  goToDetail(slug: string) {
    this.router.navigate(['/treatments', slug]);
  }
}
