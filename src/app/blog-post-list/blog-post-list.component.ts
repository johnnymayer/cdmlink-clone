import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../models/BlogPost.model';
import { BlogPostService } from '../blog-post.service';
import { RouterModule, Routes, Route } from '@angular/router';
import { Router } from '../app-routing.module';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  providers: [BlogPostService]
})
export class BlogPostListComponent {

  constructor(private router: Router, private blogPostService: BlogPostService) {}

  @Input() childBlogPostList: BlogPost[];
  @Output() clickViewPost = new EventEmitter();

  selectedBlogPost = null;

  showBlogPost(clickedBlogPost) {
    this.selectedBlogPost = clickedBlogPost;
  };

}
