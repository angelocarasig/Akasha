import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSidebarComponent } from './book-sidebar.component';

describe('BookSidebarComponent', () => {
  let component: BookSidebarComponent;
  let fixture: ComponentFixture<BookSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSidebarComponent]
    });
    fixture = TestBed.createComponent(BookSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
