import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../models/BlogPost.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent {

  constructor() { }

  ngOnInit() {
  }

}
