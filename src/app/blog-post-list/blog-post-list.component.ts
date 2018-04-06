import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost.model';
import { BlogPostService } from '../blog-post.service';
import { RouterModule, Routes, Route } from '@angular/router';
import { Router } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  providers: [BlogPostService]
})
export class BlogPostListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.blogPost = this.blogPostService.getBlogPosts;
  }

  goToDetails(clickedBlogPost: BlogPost) {
    this.router.navigate(['blogPosts', clickedBlogPost]);
  };

  @Input() childBlogPostList: BlogPost[];
  @Output() clickViewPost = new EventEmitter();

  selectedBlogPost = null;

  showBlogPost(clickedBlogPost) {
    this.selectedBlogPost = clickedBlogPost;
  };

}
