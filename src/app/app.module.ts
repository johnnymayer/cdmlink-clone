import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { TruncatePipe } from './app.pipe';
import { LimitToPipe } from './limit-to.pipe';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostListComponent,
    LimitToPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
