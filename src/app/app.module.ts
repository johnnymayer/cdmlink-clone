import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
