import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FOOTER_DATA } from './footer.data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: false
})
export class FooterComponent {
  footerData= FOOTER_DATA;
 
   
  
  constructor(private router:Router) {}

  ngOnInit(): void {
  
  }
  
   goToDetail(slug: string) {
    console.log(slug,"slug")
    this.router.navigate(['/treatments', slug]);
  }
}
