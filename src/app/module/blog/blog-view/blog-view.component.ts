import { Component, OnInit } from '@angular/core';
import { SanityService } from '../../../core/services/sanity.service';
import { ActivatedRoute } from '@angular/router';
import { SanityImageService } from '../../../core/services/sanity-image.service';

@Component({
  selector: 'app-blog-view',
  standalone: false,
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent implements OnInit{
  blog: any;
  

relatedBlogs:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private sanityService: SanityService,
    public imageService:SanityImageService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (slug) {
        this.loadBlog(slug);
      }

    });
 

  }

  loadBlog(slug: string) {

    this.sanityService.getBlog(slug).then(data => {

      this.blog = data;
         //this.blog=data;

this.loadRelatedBlogs(data.slug.current);

      console.log(this.blog.body);

    });

  }

  loadRelatedBlogs(slug:string){

  this.sanityService
      .getRelatedBlogs(slug)
      .then(res=>{

        this.relatedBlogs=res;

      });

}

}
