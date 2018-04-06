import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { HeaderComponent } from './header/header.component';
import { LimitToPipe } from './limit-to.pipe';
import { TechnologyComponent } from './technology/technology.component';
import { PerformanceComponent } from './performance/performance.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogPostService } from './blog-post.service';
import { HardwareComponent } from './hardware/hardware.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostListComponent,
    LimitToPipe,
    HeaderComponent,
    ArchiveComponent,
    TechnologyComponent,
    PerformanceComponent,
    WelcomeComponent,
    HardwareComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [BlogPostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
