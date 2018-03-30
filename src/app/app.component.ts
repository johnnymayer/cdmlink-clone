import { Component } from '@angular/core';

import { BlogPost } from './models/BlogPost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterBlogPostList: BlogPost[] = [
    new BlogPost('Blog Post 1', 'https://images.unsplash.com/photo-1503440765842-0c8293cb78ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4c12f73e77bae7703247a6641cc03c3&auto=format&fit=crop&w=1349&q=80', 'lorem ipsum text here'),
    new BlogPost('Blog Post 2', 'https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2c3e328eaa43749d28bc198dafcbfb3&auto=format&fit=crop&w=1351&q=80', 'lorem ipsum text here'),
    new BlogPost('Blog Post 3', 'https://images.unsplash.com/photo-1466767574486-40e61f77bdd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42afb2e7f389e92324b9f2917182b3ed&auto=format&fit=crop&w=1350&q=80', 'lorem ipsum text here')
  ];

  
}
