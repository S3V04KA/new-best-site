import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'board', loadComponent: () => import('./board/board.component').then(m => m.BoardComponent) },
  { path: 'aoa', loadComponent: () => import('./aoa/aoa.component').then(m => m.AoaComponent) },
  { path: 'mark', loadComponent: () => import('./markhack/markhack.component').then(m => m.MarkhackComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];
