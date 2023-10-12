import { filter, from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { Book } from 'epubjs';

export class EpubHelper {
  private _book: Book;
  private _rendition: any;
  private _metadata: any = {};
  private _toc: any[] = [];
  private _coverUrl: string = '';
  private _imageUrls: string[] = [];

  constructor(epub: any) {
    this._book = new Book(epub);
    this._rendition = this._book.renderTo('book', {
      width: '100%',
      height: '100%'
    });

    this._rendition.themes.register('default', {
      'body': {
        'color': 'white',
        'background': 'black',
        'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important'
      },
      '.galley-rw': {
        'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important',
        'text-align': 'initial'
      }
    });

    this._rendition.themes.select('default');

    this._rendition.display();
  }

  /**
   * Pipes metadata observable, then chains tap and mergeMaps of other functions.
   * Returns a final undefined map to suit the return type.
   */
  initialize(): Observable<void> {
    return this.getMetadata()
      .pipe(
        tap(metadata => this._metadata = metadata),
        mergeMap(() => this.getModifiedTableOfContents()),
        tap(toc => this._toc = toc),
        mergeMap(() => this.getCover()),
        tap(cover => this._coverUrl = cover),
        mergeMap(() => this.getImagesWithUrls()),
        tap(imageUrls => this._imageUrls = imageUrls),
        map(() => undefined),
        catchError(error => {
          console.error('Initialization error:', error);
          return of(undefined);
        })
      );
  }

  private getMetadata(): Observable<any> {
    return from(this._book.ready.then(() => this._book.packaging.metadata));
  }

  /**
   * Pipe maps each ToC object's href by replacing '../' with ''
   * @private
   */
  private getModifiedTableOfContents(): Observable<any[]> {
    return from(this._book.ready.then(() => this._book.navigation.toc))
      .pipe(
        map(toc => toc.map(({href, ...rest}) => ({
          ...rest,
          href: href?.replace('../', '')
        })))
      );
  }

  private getCover(): Observable<string> {
    this._book.coverUrl().then((val) => console.log("Cover URL: ", val));
    return from(this._book.coverUrl().then(val => val || ''));
  }

  /**
   * Pipe operations:
   * - Get assets array
   * - Filter to only retrieve Image items
   * - Maps to only return their href
   * - MergeMap to generate the Url
   * @private
   */
  private getImagesWithUrls(): Observable<string[]> {
    return from(this._book.ready.then(() => this._book.loaded.resources))
      .pipe(
        mergeMap((resources: any) => resources.assets),
        filter((asset: any) => asset.href.startsWith('Images/')),
        map((asset: any) => asset.href),
        mergeMap((href) => this._book.archive.createUrl(`/OEBPS/${href}`, {base64: false})),
        toArray()
      );
  }

  nextPage(): void {
    this._rendition.next();
  }

  previousPage(): void {
    this._rendition.prev();
  }

  navigateToSection(href: string): void {
    try {
      this._rendition.display(href);
    } catch (error) {
      console.error(`Failed to navigate to section ${href}:`, error);
    }
  }

  get book(): Book {
    return this._book;
  }

  get rendition(): any {
    return this._rendition;
  }

  get metadata(): any {
    return this._metadata;
  }

  get toc(): any[] {
    return this._toc;
  }

  get coverUrl(): string {
    return this._coverUrl;
  }

  get imageUrls(): string[] {
    return this._imageUrls;
  }
}
