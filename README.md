# Site Clone with Angular

This is an Angular site clone of [Create Digital Music](http://cdm.link).  A site I frequently browse that contains posts regarding music, music technology, music hardwares, etc.  This project is an exploration in Angular, and site building.

## Technologies & Development Tools

* [Angular CLI](https://github.com/angular/angular-cli)
* VS Code
* Angular
* JavaScript & TypeScript
* Chrome
* Git version control
* Firebase

## Features & Specifications
  * Blog Posts
    * User can view blog posts regarding music, music technologies, and music hardwares.  These are accessible via categories, selected "top" stories appear on the home page.
  * Archive
    * User can access an archive of all blog posts.  *Future Proposal includes - ammending Blog Post model to include date, adding date filtering for cleaner archiving.*
  * Ad Integration - *Feature Proposal*
    * Deliver ads in order to monetize traffic to the site.  Specific ad categories could include, but are not limited to: music retailers, music hardware retailers, music services, etc.  Most ads would be user targeted with relevant services or retailers to the end user.
  * Database
    * All blog posts will be available in a database.  This will provide offsite storage for blog posts.  *Future features may include API integration of this database in order to serve blog material to other sites.*
  * Categories
    * Add categories, so that blog posts can be tagged with specific categories in order to implement a sort by category, or show all blog posts matching those categories. (Not functional at this time.)
  * Search *Feature Proposal*
    * User will be able to query articles with a search feature.
      * Input: "synthesizer"
      * Sample Output:
        * Synth Article 1
        * Synth Article 2
        * Live Performance Article 3

## Installation/Viewing

[Click here to view the site live via Firebase](https://cdmlinkclone.firebaseapp.com)

Download via command line, or via [GitHub repository directly](https://github.com/johnnymayer/cdmlink-clone):
```
$git clone https://github.com/johnnymayer/cdmlink-clone
```

Prepare files via command line after navigating to root folder of downloaded directory:
```
$npm install
```

Run ```$ng serve``` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs

* Categories
  * As of this time, the categories links are non functioning.  The routes are set up correctly, however there is something missing in the code.

## Author
[Johnny Mayer](https://github.com/johnnymayer)

## Acknowledgements
[Epicodus](http://www.learnhowtoprogram.com)

[Monster Energy](https://www.monsterenergy.com/)

[Dieselboy - System Upgrade(Full length DJ mix)](https://www.youtube.com/watch?v=4SIdbXP3JNA)

## License

Copyright <2018><Johnny Mayer>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.