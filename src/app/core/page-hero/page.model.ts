export interface HeroButton {
  text: string;
  link: string;
}

export interface HeroBadge {
  icon: string;
  title: string;
}

export interface Breadcrumb {
  label: string;
  link?: string;
}

export interface PageHero {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;

  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

  breadcrumbs?: Breadcrumb[];
  badges?: HeroBadge[];
}