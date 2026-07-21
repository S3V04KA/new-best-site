import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { BoardHeaderComponent } from './board-header.component';
import { BoardMembersListComponent } from './board-members-list.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardHeaderComponent, BoardMembersListComponent, AsyncPipe],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-board-header></app-board-header>
      <app-board-members-list [boardId]="(boardId$ | async) ?? '24'"></app-board-members-list>
    </div>
  `
})
export class BoardComponent {
  private route = inject(ActivatedRoute);
  boardId$ = this.route.paramMap.pipe(map(params => params.get('boardId') ?? '24'));
}
