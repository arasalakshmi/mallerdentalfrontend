import { Injectable } from '@angular/core';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class SanityImageService {

  private client = createClient({
    projectId: enviroment.sanity.projectId,
    dataset: enviroment.sanity.dataset,
    apiVersion: enviroment.sanity.apiVersion,
    useCdn: enviroment.sanity.useCdn
  });

  private builder = imageUrlBuilder(this.client);

  constructor() {}

  url(source: any): string {
    return this.builder.image(source).url();
  }

}