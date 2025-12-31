import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderFooterService } from '../headerFooterService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
   encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
   headerData: any;
//navItems: NavItem[] = NAV_ITEMS;
  imageUrl = 'http://localhost:5000/';
  
  constructor(private headerService: HeaderFooterService) {}
 

  closeMenu() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  ngOnInit() {
    this.headerService.getHeaderFooter().subscribe(res => {
      this.headerData = res;
    });
  }
//  navItems: NavItem[] = NAV_ITEMS;
//   mobileMenuOpen = false;

//   toggleMenu() {
//     this.mobileMenuOpen = !this.mobileMenuOpen;
//   }

//  closeMenu() {
//   const navbar = document.getElementById('mainNavbar');
//   if (navbar?.classList.contains('show')) {
//     navbar.classList.remove('show');
//   }
//}

}
