import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EpubHelper } from './book.helper';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  epubHelper: EpubHelper | undefined;
  rendition: any;
  images: Array<any> = [];
  imageUrls: Array<any> = [];

  constructor(private router: Router) {
    try {
      const navigation = this.router.getCurrentNavigation();
      const epub = navigation?.extras.state?.['epub'];
      this.epubHelper = new EpubHelper(epub);
    }
    catch (e) {
      console.error(e);
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    try {
      this.processImages();

      this.rendition = this.epubHelper!.getRendition('book');
    }
    catch (e) {
      console.error(e);
    }
  }

  processImages(): void {
    this.epubHelper!.getImages().subscribe({
      next: async (images) => {
        this.images = images;
        console.log("Images: ", this.images);

        this.epubHelper!.getImageUrls(images).subscribe(urls => {
          this.imageUrls = urls.reverse();
          console.log('Image URLs: ', this.imageUrls);
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  nextPage(): void {
    this.rendition.next();
  }

  previousPage(): void {
    this.rendition.prev();
  }
}
