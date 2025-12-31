import { Component } from '@angular/core';
import { SiteContentService } from '../../services/sitecontent.service';
import { Router } from '@angular/router';
import { HeaderFooterService } from '../headerFooterService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerData: any;
 //navItems: NavItem[] = NAV_ITEMS;
   imageUrl = 'http://localhost:5000/';
   
  
  constructor(private footerService: HeaderFooterService,private router:Router) {}

  ngOnInit(): void {
   this.footerService.getHeaderFooter().subscribe(res => {
      this.footerData = res;
    });
  }
  
   goToDetail(slug: string) {
    console.log(slug,"slug")
    this.router.navigate(['/treatments', slug]);
  }
}
