import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css'],
  providers: [HeaderComponent, BlogPostComponent, BlogPostListComponent]
})
export class HardwareComponent implements OnInit {

  constructor(private router: Router, private header: HeaderComponent, private blogPostListComponent: BlogPostListComponent, private blogService: BlogPostService) { }

  ngOnInit() {
  }

}
