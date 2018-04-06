import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

export const appRoutes: Routes = [

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);