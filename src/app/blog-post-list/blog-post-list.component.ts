import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogPost } from '../models/BlogPost.model';
import { Router } from '@angular/router';
import { BlogPostService } from '../blog-post.service';
import { LimitToPipe } from '../limit-to.pipe';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  providers: [BlogPostService]
})


export class BlogPostListComponent {
  
  constructor(private router: Router, private blogPostService: BlogPostService) {}
  
  public blogPosts: FirebaseListObservable<any[]>;
  blogPostDisplay;
  
  ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(dataLastEmittedFromObserver => {
      this.blogPostDisplay = dataLastEmittedFromObserver;
    })
      this.blogPosts = this.blogPostService.getBlogPosts();
  }
}