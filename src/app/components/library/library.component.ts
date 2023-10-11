import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  viewMode: 'list' | 'grid' = 'grid';

  toggleGridView(): void {
    this.viewMode = 'grid';
  }

  toggleListView(): void {
    this.viewMode = 'list';
  }
}
