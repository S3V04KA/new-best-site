import { Component, OnInit, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-lg w-screen">
      <nav class="px-4 lg:px-6 py-4">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button (click)="navigateToHome()" class="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
            <img src="/images/logo.png" class="h-14 w-auto" alt="МОСТ Logo" />
          </button>

          <button (click)="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu" [attr.aria-expanded]="isMobileMenuOpen">
            <span class="sr-only">Open main menu</span>
            @if (!isMobileMenuOpen) {
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            } @else {
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            }
          </button>

          <div class="hidden lg:flex items-center space-x-8">
            <ul class="flex space-x-8">
              <li><button (click)="navigateToSection('About_US')" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">{{ lang.t['about'] }}</button></li>
              <li><button (click)="navigateToSection('OUR_MEROS')" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">{{ lang.t['projects'] }}</button></li>
              <li><button (click)="navigateToSection('OUR_PARTNERS')" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">{{ lang.t['partners'] }}</button></li>
              <li class="relative">
                <button (click)="isBoardMenuOpen = !isBoardMenuOpen"
                  class="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition-colors duration-300"
                  [attr.aria-expanded]="isBoardMenuOpen">
                  {{ lang.t['board'] }}
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                @if (isBoardMenuOpen) {
                  <ul class="absolute top-full left-0 mt-2 min-w-[10rem] rounded-lg bg-white py-2 shadow-lg z-50">
                    <li><button (click)="navigateToBoard('24')" class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">{{ lang.t['boardXXIV'] }}</button></li>
                    <li><button (click)="navigateToBoard('23')" class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">{{ lang.t['boardXXII'] }}</button></li>
                  </ul>
                }
              </li>
              <li>
                <button (click)="lang.toggleLanguage()" class="block font-sans md:px-5 hover:opacity-80 transition-opacity duration-300"
                  [attr.aria-label]="lang.isRussian ? 'Switch to English' : 'Переключиться на русский'">
                  <img [src]="lang.isRussian ? '/images/Flag_of_the_United_Kingdom.png' : '/images/Flag_of_Russia.png'"
                    [alt]="lang.isRussian ? 'Eng' : 'Ru'" class="h-5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        @if (isMobileMenuOpen) {
          <div class="lg:hidden" id="mobile-menu">
            <ul class="space-y-6 pb-6 tracking-wide text-gray-800 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
              <li><button (click)="navigateToSection('About_US')" class="text-left w-full bg-transparent border-none p-0">{{ lang.t['about'] }}</button></li>
              <li><button (click)="navigateToSection('OUR_MEROS')" class="text-left w-full bg-transparent border-none p-0">{{ lang.t['projects'] }}</button></li>
              <li><button (click)="navigateToSection('OUR_PARTNERS')" class="text-left w-full bg-transparent border-none p-0">{{ lang.t['partners'] }}</button></li>
              <li>
                <button (click)="isBoardMenuOpen = !isBoardMenuOpen" class="flex w-full items-center justify-between bg-transparent border-none p-0 text-left"
                  [attr.aria-expanded]="isBoardMenuOpen">
                  {{ lang.t['board'] }}
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                @if (isBoardMenuOpen) {
                  <ul class="mt-3 space-y-3 pl-4">
                    <li><button (click)="navigateToBoard('24')" class="text-left w-full bg-transparent border-none p-0 text-gray-600">{{ lang.t['boardXXIV'] }}</button></li>
                    <li><button (click)="navigateToBoard('23')" class="text-left w-full bg-transparent border-none p-0 text-gray-600">{{ lang.t['boardXXII'] }}</button></li>
                  </ul>
                }
              </li>
              <li>
                <button (click)="lang.toggleLanguage()" class="block font-sans md:px-5 hover:opacity-80 transition-opacity duration-300"
                  [attr.aria-label]="lang.isRussian ? 'Switch to English' : 'Переключиться на русский'">
                  <img [src]="lang.isRussian ? '/images/Flag_of_the_United_Kingdom.png' : '/images/Flag_of_Russia.png'"
                    [alt]="lang.isRussian ? 'Eng' : 'Ru'" class="h-5" />
                </button>
              </li>
            </ul>
          </div>
        }
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isBoardMenuOpen = false;
  currentRoute = '';
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    public lang: LanguageService
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((e: NavigationEnd) => {
      this.currentRoute = e.urlAfterRedirects;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isBoardMenuOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isBoardMenuOpen = false;
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
    this.isMobileMenuOpen = false;
    this.isBoardMenuOpen = false;
  }

  navigateToBoard(boardId: string) {
    this.router.navigate(['/board', boardId]);
    this.isMobileMenuOpen = false;
    this.isBoardMenuOpen = false;
  }

  navigateToSection(sectionId: string) {
    if (this.currentRoute !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
    this.isBoardMenuOpen = false;
  }
}
