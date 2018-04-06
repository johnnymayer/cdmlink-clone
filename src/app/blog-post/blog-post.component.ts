import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../models/BlogPost.model';
import { BlogPostService } from '../blog-post.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  providers: [BlogPostService]
})

export class BlogPostComponent implements OnInit {
  @Input() selectedBlogPost;
  blogPostId: string;
  blogPostDisplay;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private location: Location, 
    private blogPostService: BlogPostService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogPostId = urlParameters['id'];
    })
    this.blogPostService.getBlogPostById(this.blogPostId).subscribe(dataLastEmittedFromObserver => {
      this.blogPostDisplay = dataLastEmittedFromObserver;
    })
  }
}


