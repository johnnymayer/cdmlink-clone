import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from './models/BlogPost.model';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);