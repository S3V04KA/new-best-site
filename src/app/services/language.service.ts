import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/types';
import { translations } from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('ru');
  language$ = this.languageSubject.asObservable();

  get language(): Language {
    return this.languageSubject.value;
  }

  get isRussian(): boolean {
    return this.language === 'ru';
  }

  get isEnglish(): boolean {
    return this.language === 'en';
  }

  get t(): Record<string, string> {
    return translations[this.language];
  }

  toggleLanguage(): void {
    this.languageSubject.next(this.language === 'ru' ? 'en' : 'ru');
  }
}
