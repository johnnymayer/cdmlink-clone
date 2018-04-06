import { Injectable } from '@angular/core';
import { BlogPost } from './models/BlogPost.model';

@Injectable()
export class BlogPostService {

  constructor() { }

  getBlogPosts() {
    return BlogPost;
  }

}
