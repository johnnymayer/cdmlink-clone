import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../models/BlogPost.model';

@Component({
  selector: 'app-blog-post-create',
  templateUrl: './blog-post-create.component.html',
  styleUrls: ['./blog-post-create.component.css']
})
export class BlogPostCreateComponent {

  @Input() childBlogPostToAdd: boolean;
  @Output() clickedAdd = new EventEmitter();

  addBlogPost = null;

  newBlogPost(title: string, image: string, post: string,) {
    let newBlogPost: BlogPost = new BlogPost(title, image, post);
    console.log(newBlogPost);
    this.clickedAdd.emit(newBlogPost);
  }

}
