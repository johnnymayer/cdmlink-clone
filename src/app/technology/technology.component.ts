import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';
import { BlogPostService } from '../blog-post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogPost } from '../models/BlogPost.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [HeaderComponent, BlogPostListComponent, BlogPostService]
})

export class TechnologyComponent implements OnInit {

  constructor(private header: HeaderComponent, private blogPostList: BlogPostListComponent, private blogPostService: BlogPostService) { }

  blogPosts = this.blogPostList.blogPosts;
  public filteredPosts = [];
  blogPostDisplay;
  public postArray;

  ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(dataLastEmittedFromObserver => {
      this.blogPostDisplay = dataLastEmittedFromObserver;
      for (let i=0; i < this.blogPostDisplay.length; i++) {
        if (this.blogPostDisplay[i].category != "hardware" && this.blogPostDisplay[i].category != "performance") {
          this.filteredPosts.push(this.blogPostDisplay[i]);
        } else {
          return null;
          }
      }
    });
  }

}
