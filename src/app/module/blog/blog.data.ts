export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
export const BLOG_DATA ={
     hero: {
    title: 'OUR BLOG',
    subtitle: 'Dental Care Insights for a Healthier Smile',
    description:
      'Explore expert dental tips, treatment guides, oral health advice,and the latest updates from Maller Dental Clinic to keep your smile healthy and confident.',
    image: 'assets/images/contImg/hero.png',
    primaryButton: 'Explore Articles',

    secondaryButton: 'Book Appointment',

  },
}
export const BLOGS: Blog[] = [
  {
    id: 1,
    slug: 'teeth-whitening-guide',
    title: 'Teeth Whitening: Everything You Need to Know',
    excerpt:
      'Discover the benefits, procedure, safety, and aftercare of professional teeth whitening for a brighter, healthier smile.',

    content: '', // Full blog content will be added later

    category: 'Cosmetic Dentistry',

    author: 'Dr. Thirumalai Velu',

    image: 'assets/images/blogs/teeth-whitening.webp',

    publishDate: '19 July 2026',

    readTime: '6 min read',

    featured: true,

    tags: [
      'Teeth Whitening',
      'Cosmetic Dentistry',
      'Dental Care',
      'Smile Makeover'
    ]
  }
];