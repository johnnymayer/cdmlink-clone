import { Component, OnInit } from '@angular/core';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [BlogPostComponent, BlogPostListComponent, BlogPostService]
})
export class WelcomeComponent implements OnInit {

  blogPostsDisplay;
  blogPosts;
  constructor(private blogPostListComponent: BlogPostListComponent, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(dataLastEmittedFromObserver => {
      this.blogPostsDisplay = dataLastEmittedFromObserver;
      this.blogPosts = this.blogPostsDisplay;
    })
  }

}
