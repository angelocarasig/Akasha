import { from, map, mergeMap, Observable, toArray } from 'rxjs';
import { Book } from 'epubjs';

export class EpubHelper {
  private book: Book;

  constructor(epub: any) {
    this.book = new Book(epub);
  }

  getRendition(elementId: string, options?: any): any {
    const rendition = this.book.renderTo(elementId, options);
    rendition.display();
    return rendition;
  }

  getImages(): Observable<any[]> {
    return from(this.book.loaded.resources).pipe(
      map((packageDocument: any) => {
        return packageDocument['assets'].filter((asset: any) => asset.href.startsWith('Images/'));
      })
    );
  }

  getImageUrls(images: any[]): Observable<string[]> {
    return from(images).pipe(
      mergeMap(image => {
        return from(this.book.archive.createUrl(`/OEBPS/${image.href}`, { base64: false }));
      }),
      toArray()
    );
  }
}
