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
      