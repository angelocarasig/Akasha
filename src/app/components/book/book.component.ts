import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EpubHelper } from './book.helper';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  epubHelper: EpubHelper | undefined;
  rendition: any;
  metadata: any;
  toc: Array<any> = [];
  coverUrl: string = '';
  imageUrls: Array<any> = [];

  isLoading: boolean = true;

  constructor(private router: Router) {
    try {
      const navigation = this.router.getCurrentNavigation();
      const epub = navigation?.extras.state?.['epub'];
      this.epubHelper = new EpubHelper(epub);

      this.epubHelper.initialize().subscribe(() => {
        if (!this.epubHelper) return;

        console.log("Book: ", this.epubHelper.book);

        this.rendition = this.epubHelper.rendition;
        console.log("Rendition: ", this.epubHelper.rendition);

        this.coverUrl = this.epubHelper.coverUrl;
        console.log("Cover Url: ", this.epubHelper.coverUrl);

        this.metadata = this.epubHelper.metadata;
        console.log("Metadata: ", this.epubHelper.metadata);

        this.toc = this.epubHelper.toc;
        console.log("ToC: ", this.epubHelper.toc);

        this.imageUrls = this.epubHelper.imageUrls;
        console.log("Image Urls: ", this.epubHelper.imageUrls);

        this.isLoading = false;
      });
    } catch (e) {
      console.error(e);
      this.router.navigate(['/']);
    }
  }

  nextPage(): void {
    this.epubHelper!.nextPage();
  }

  previousPage(): void {
    this.epubHelper!.previousPage();

  }

  navigateToSection(href: string): void {
    this.epubHelper!.navigateToSection(href);
  }
}
