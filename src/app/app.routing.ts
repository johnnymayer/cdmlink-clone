import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TechnologyComponent } from './technology/technology.component';
import { PerformanceComponent } from './performance/performance.component';
import { ArchiveComponent } from './archive/archive.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'technology', component: TechnologyComponent },
    { path: 'performance', component: PerformanceComponent },
    { path: 'archive', component: BlogPostListComponent },
    { path: 'posts/:id', component: BlogPostComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);