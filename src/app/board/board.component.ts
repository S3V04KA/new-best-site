import { Component } from '@angular/core';
import { BoardHeaderComponent } from './board-header.component';
import { BoardMembersListComponent } from './board-members-list.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardHeaderComponent, BoardMembersListComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-board-header></app-board-header>
      <app-board-members-list></app-board-members-list>
    </div>
  `
})
export class BoardComponent {}
