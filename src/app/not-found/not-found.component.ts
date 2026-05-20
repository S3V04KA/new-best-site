import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="mb-8">
          <h1 class="text-9xl font-bold text-gray-300">404</h1>
        </div>
        <div class="mb-8">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">{{ lang.t['pageNotFound'] }}</h2>
        </div>
        <div class="space-x-4">
          <button (click)="goHome()"
            class="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {{ lang.t['goHome'] }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    public lang: LanguageService
  ) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
