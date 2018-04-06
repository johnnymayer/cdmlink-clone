import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BlogPostService, BlogPostListComponent]
})
export class HeaderComponent implements OnInit {
  constructor(private blogPostListComponent: BlogPostListComponent, private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(dataLastEmittedFromObserver => {
      this.blogPostDisplay = dataLastEmittedFromObserver;
    })
    this.blogPostListComponent.blogPosts = this.blogPostService.getBlogPosts();
  }

  private blogPostDisplay = this.blogPostListComponent.blogPostDisplay;
  public postArray;

  // technologyFilter() {
  //   this.postArray = [];

  //   for (let i=0; i < this.blogPostDisplay.length; i++) {
  //     if (this.blogPostDisplay[i].category === "technology") {
  //       this.postArray.push(this.blogPostDisplay[i]);
  //     } else {
  //       return null;
  //     }
  //   }
  // }


}
