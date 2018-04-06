import { Injectable } from '@angular/core';
import { BlogPost } from './models/BlogPost.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class BlogPostService {

  constructor(private database: AngularFireDatabase) {
    this.blogPosts = database.list('posts');
   }

   blogPosts: FirebaseListObservable<any[]>;

   getBlogPosts() {
     return this.blogPosts;
   }

   getBlogPostById(blogPostId: string) {
     return this.database.object('posts/' + blogPostId);
   }
}
