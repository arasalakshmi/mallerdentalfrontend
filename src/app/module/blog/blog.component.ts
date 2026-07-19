import { Component, OnInit } from '@angular/core';
import { BLOG_DATA } from './blog.data';
import { SanityService } from '../../core/services/sanity.service';
import { Blog } from './blog.model';
import { SanityImageService } from '../../core/services/sanity-image.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
 blog=BLOG_DATA
   blogs: Blog[] = [];

  constructor(
    private sanityService: SanityService,
      public imageService: SanityImageService,
      private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.loadBlogs();
     this.seo.update({

    title: 'Dental Blog | Oral Health Tips & Expert Advice | Maller Dental Clinic',

    description:
      'Read expert dental blogs from Maller Dental Clinic in RS Puram, Coimbatore. Learn about root canal treatment, dental implants, clear aligners, childrens dentistry, oral hygiene, cosmetic dentistry, and preventive dental care.',

    keywords:
      'Dental Blog Coimbatore, Dental Tips, Oral Health, Root Canal Treatment, Dental Implants, Clear Aligners, Pediatric Dentistry, Cosmetic Dentistry, Best Dentist RS Puram, Maller Dental Clinic , Best Dental Clinic in Coimbatore, top detnal clinic in coimbatore',

    url: 'https://mallerdentalclinic.com/blog',

    image:
      'https://mallerdentalclinic.com/assets/images/blog/blog-hero.webp'

  });
  this.seo.addSchema({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://mallerdentalfrontend.vercel.app/blog",
      "url": "https://mallerdentalfrontend.vercel.app/blog",
      "name": "Dental Blog | Maller Dental Clinic",
      "description": "Expert dental articles, oral health tips, treatment guides and preventive dentistry information from Maller Dental Clinic in RS Puram, Coimbatore.",
      "inLanguage": "en-IN",
      "about": {
        "@id": "https://mallerdentalfrontend.vercel.app/#dentist"
      },
      "breadcrumb": {
        "@id": "https://mallerdentalfrontend.vercel.app/blog#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mallerdentalfrontend.vercel.app/blog#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mallerdentalfrontend.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dental Blog",
          "item": "https://mallerdentalfrontend.vercel.app/blog"
        }
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://mallerdentalfrontend.vercel.app/#dentist",
      "name": "Maller Dental Clinic",
      "url": "https://mallerdentalfrontend.vercel.app",
      "telephone": "+91 94429 51313",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Gowtham Arcade, 48, Thiruvenkatasamy Rd W, Opposite Corporation Kalaiarangam, R.S. Puram",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.0097234,
        "longitude": 76.946896
      },
      "sameAs": [
        "https://g.page/r/C..."
      ]
    }
  ]
})
  }

  loadBlogs() {
  this.sanityService.getBlogs().then((data: any) => {
    console.log('Blogs from Sanity:', data);
    this.blogs = data;
  }).catch(err => {
    console.error('Sanity Error:', err);
  });
}
}
