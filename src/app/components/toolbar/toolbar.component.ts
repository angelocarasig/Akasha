import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() handleGridView: EventEmitter<void> = new EventEmitter<void>();
  @Output() handleListView: EventEmitter<void> = new EventEmitter<void>();

  toggleGridView(): void {
    this.handleGridView.emit();
  }

  toggleListView(): void {
    this.handleListView.emit();
  }
}
