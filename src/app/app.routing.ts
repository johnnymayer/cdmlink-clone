import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { TechnologyComponent } from './technology/technology.component';
import { HardwareComponent } from './hardware/hardware.component';
import { PerformanceComponent } from './performance/performance.component';
import { ArchiveComponent } from './archive/archive.component';

export const appRoutes: Routes = [
    { path: '', component: BlogPostListComponent },
    { path: 'technology', component: TechnologyComponent },
    { path: 'hardware', component: HardwareComponent },
    { path: 'performance', component: PerformanceComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: 'details/:id', component: BlogPostComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);