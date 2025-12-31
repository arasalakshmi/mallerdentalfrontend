import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
services: any[] = [];
home:any;
serviceChunks: any[][] = [];
imageUrl = 'https://mallerdentalbackend.onrender.com/';

constructor(private serviceApi: HomeService) {}

ngOnInit() {
  this.loadServices();
}

loadServices() {
  this.serviceApi.getServices().subscribe(res => {
    this.services = res;
    this.serviceChunks = this.chunkArray(this.services, 4);
  });
  this.serviceApi.getHome().subscribe(res => {
    this.home = res;
  });
}

chunkArray(arr: any[], size: number): any[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

}
