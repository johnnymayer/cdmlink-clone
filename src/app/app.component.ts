import { Component } from '@angular/core';
import { BlogPost } from './models/BlogPost.model';
import { Pipe, PipeTransform } from '@angular/core';
import { LimitToPipe } from './limit-to.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterBlogPostList: BlogPost[] = [];

}
