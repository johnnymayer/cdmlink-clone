import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TruncatePipe } from './app.pipe';


import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { LimitToPipe } from './limit-to.pipe';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostListComponent,
    LimitToPipe,
    HeaderComponent,
    NewBlogPostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
