export interface NavItem {
  label: string;
  route: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', route: '/home' },
  { label: 'About Doctor', route: '/about' },
  { label: 'Services', route: '/treatments' },
  { label: 'Take a tour', route: '/tour' },
  { label: 'Contact', route: '/contact' },
  { label: 'Testimonial', route: '/reviews' }
];
