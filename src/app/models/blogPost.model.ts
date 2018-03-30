export class BlogPost {
  constructor (
    public title: string;
    public image: string;
    // public image: string, should be URL for image?  how will writers create blog posts, share images?//
    public post: string;
  ) {}
}
