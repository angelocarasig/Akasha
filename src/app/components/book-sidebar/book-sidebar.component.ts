import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-sidebar',
  templateUrl: './book-sidebar.component.html',
  styleUrls: ['./book-sidebar.component.scss']
})
export class BookSidebarComponent implements OnInit {
  @Input() rendition: any;
  @Input() metadata: any;
  @Input() toc!: Array<any>;
  @Input() coverUrl!: string;
  @Input() imageUrls!: Array<any>;
  @Output() handleJumpToSection = new EventEmitter<string>();

  tabs = ['Book Info', 'Table of Contents', 'Images'];
  activeTab: string = '';

  navigateToSection(href: string): void {
    this.handleJumpToSection.emit(href);
  }

  ngOnInit() {
    this.activeTab = 'bookInfo';
  }

  toggleActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
