import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HeaderFooterService } from '../headerFooterService';
import { HEADER_DATA } from '../headerFooter.data';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HeaderComponent {
  headerData = HEADER_DATA;
  
  constructor() {}
 

  closeMenu() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  ngOnInit() {
    console.log(this.headerData)
    // this.headerService.getHeaderFooter().subscribe(res => {
    //   this.headerData = res;
    // });
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
