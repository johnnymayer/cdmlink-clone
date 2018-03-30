import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from './models/BlogPost.model';
import { RouterModule, Routes, Route } from '@angular/router';

const routes: Route = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'blog-post', component: BlogPost }
];


@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
