import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BlogPostService, BlogPostListComponent]
})
export class HeaderComponent {

}
