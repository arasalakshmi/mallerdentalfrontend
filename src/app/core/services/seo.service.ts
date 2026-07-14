import { Injectable, Inject, DOCUMENT } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { SeoModel } from './seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  update(seo: SeoModel): void {

    // Page Title
    this.title.setTitle(seo.title);

    // Meta Description
    this.meta.updateTag({
      name: 'description',
      content: seo.description
    });

    // Keywords
    if (seo.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: seo.keywords
      });
    }

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: seo.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: seo.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    if (seo.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: seo.image
      });
    }

    if (seo.url) {
      this.meta.updateTag({
        property: 'og:url',
        content: seo.url
      });

      this.setCanonicalUrl(seo.url);
    }

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: seo.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: seo.description
    });
  }

  private setCanonicalUrl(url: string): void {

    let link: HTMLLinkElement | null =
      this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

}