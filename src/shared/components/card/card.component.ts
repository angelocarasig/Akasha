import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private router: Router) {
  }

  @Input() viewMode: 'grid' | 'list' = 'grid';

  openBook(): void {
    this.router.navigate(['book']);
  }
}
