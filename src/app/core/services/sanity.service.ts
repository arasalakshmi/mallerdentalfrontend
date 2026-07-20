import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  private client = createClient({
    projectId: enviroment.sanity.projectId,
    dataset: enviroment.sanity.dataset,
    apiVersion: enviroment.sanity.apiVersion,
    useCdn: enviroment.sanity.useCdn
  });

  constructor() {}

  // Get all blog posts
  getBlogs() {
    return this.client.fetch(`
      *[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        mainImage,
        author->{
          name
        },
        categories[]->{
          title
        }
      }
    `);
  }

  // Get single blog by slug
  getBlog(slug: string) {
    return this.client.fetch(`
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        mainImage,
        author->{
          name
        },
        categories[]->{
          title
        }
      }
    `, { slug });
  }

  getRelatedBlogs(currentSlug: string) {

  return this.client.fetch(

    `*[_type=="post" && slug.current != $slug]
      | order(publishedAt desc)[0...3]{

      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage

    }`,

    { slug: currentSlug }

  );

}
}