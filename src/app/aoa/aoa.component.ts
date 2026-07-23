import { Component, Input } from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-timeline-card',
  standalone: true,
  template: `
    <div class="flex flex-col md:flex-row items-center justify-between mb-20 last:mb-0 relative z-10"
      [class.md:flex-row-reverse]="isReversed">
      <div class="w-full md:w-[45%] bg-white p-6 md:p-8 border-3 border-black shadow-[8px_8px_0px_rgba(28,28,28,1)] transition-transform hover:-translate-y-1">
        <div class="flex items-center justify-between mb-4">
          <span class="inline-block {{badgeColor}} text-white px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-black">{{ badgeText }}</span>
          <span class="text-xs font-mono font-bold text-gray-400">&#9889; COMPONENT_DATA</span>
        </div>
        <h3 class="text-2xl font-black mb-3 tracking-tight">{{ title }}</h3>
        <p class="text-sm md:text-base text-gray-700 leading-relaxed mb-4">{{ description }}</p>
        @if (bulletPoints && bulletPoints.length > 0) {
          <ul class="space-y-2 border-t-2 border-dashed border-gray-200 pt-4">
            @for (point of bulletPoints; track $index) {
              <li class="flex items-start gap-2.5 text-sm text-gray-600">
                <span class="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0"></span>
                <span>{{ point }}</span>
              </li>
            }
          </ul>
        }
      </div>
      <div class="w-20 h-20 rounded-full border-4 border-black text-white {{badgeColor}} flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] my-6 md:my-0">
        {{ year }}
      </div>
      <div class="w-full md:w-[45%] hidden md:block"></div>
    </div>
  `
})
export class TimelineCardComponent {
  @Input() year = 0;
  @Input() badgeText = '';
  @Input() badgeColor = '';
  @Input() title = '';
  @Input() description = '';
  @Input() bulletPoints: string[] = [];
  @Input() isReversed = false;
}

@Component({
  selector: 'app-aoa-faq',
  standalone: true,
  template: `
    <div class="border-3 border-black rounded-none shadow-[4px_4px_0px_rgba(28,28,28,1)] bg-white transition-all">
      <button (click)="isOpen = !isOpen"
        class="w-full p-5 flex justify-between items-center text-left font-black text-base md:text-lg bg-[#36bc87] hover:bg-[#47cd98] text-white transition-colors border-b-3 border-transparent"
        [style.borderBottomColor]="isOpen ? '#1c1c1c' : 'transparent'">
        <span>{{ question }}</span>
        <svg class="w-5 h-5 transform transition-transform duration-200 shrink-0 ml-4" [class.rotate-45]="isOpen"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      @if (isOpen) {
        <div class="overflow-hidden">
          <p class="p-5 text-sm md:text-base leading-relaxed bg-[#fdfdfd] text-gray-700">{{ answer }}</p>
        </div>
      }
    </div>
  `
})
export class AoaFaqComponent {
  isOpen = false;
  @Input() question = '';
  @Input() answer = '';
}

@Component({
  selector: 'app-aoa',
  standalone: true,
  imports: [SlideshowComponent, TimelineCardComponent, AoaFaqComponent],
  template: `
    <div class="min-h-screen bg-[#f4f4f0] text-[#1c1c1c] font-sans antialiased selection:bg-yellow-300 overflow-x-hidden">
      <section id="about" class="relative bg-[#d9d9d9] border-b-4 border-black min-h-[500px] md:min-h-[680px] flex flex-col justify-end overflow-hidden">
        <div class="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div class="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#ff8440] rounded-full filter blur-[2px] opacity-80 mix-blend-initial"></div>
        <div class="absolute -top-12 left-1/3 w-[350px] h-[600px] bg-[#0099e8] transform -rotate-12 opacity-60"></div>

        <div class="relative z-10 p-6 md:p-16 max-w-7xl mx-auto w-full">
          <h1 class="text-5xl md:text-9xl font-black tracking-tighter text-white uppercase drop-shadow-[6px_6px_0px_rgba(28,28,28,1)] mb-4">
            Искусство архитектуры
          </h1>
          <div class="bg-white border-4 border-black p-6 md:p-8 max-w-3xl my-6 shadow-[8px_8px_0px_rgba(28,28,28,1)]">
            <p class="text-lg md:text-2xl font-medium leading-relaxed">{{ lang.t['aoa_heroDesc'] }}</p>
          </div>
        </div>
      </section>

      <section class="bg-[#1c1c1c] text-white py-16 px-6 md:px-16 relative overflow-hidden">
        <div class="relative mx-auto max-w-5xl aspect-video bg-[#2c2c2c] border-4 md:border-8 border-white rounded-none shadow-[12px_12px_0px_#f37c3a] overflow-hidden group">
          <app-slideshow [images]="['/images/aoa/1.jpg', '/images/aoa/2.jpg', '/images/aoa/3.jpg']"></app-slideshow>
        </div>
        <div class="absolute -bottom-10 -left-10 text-[#fff] opacity-10 text-9xl font-black select-none pointer-events-none">***</div>
        <div class="absolute top-10 right-12 text-yellow-300 text-4xl hidden md:block">✦ ✦ ✦</div>
      </section>

      <section id="timeline" class="py-24 px-4 md:px-12 bg-[#eae9e4] relative pattern-paper">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-black uppercase text-center mb-20 tracking-tight text-[#1c1c1c]">
            {{ lang.t['aoa_timelineTitle'] }}
          </h2>
          <div class="relative">
            <div class="absolute left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2 bg-gradient-to-b from-[#36bc87] via-[#0294df] to-[#f37c3a] hidden md:block"></div>

            <app-timeline-card
              [year]="2023" [badgeText]="lang.t['aoa_2023_badge']" badgeColor="bg-[#36bc87]"
              [title]="lang.t['aoa_2023_title']" [description]="lang.t['aoa_2023_desc']"
              [bulletPoints]="[lang.t['aoa_2023_bullet1'], lang.t['aoa_2023_bullet2']]"
              [isReversed]="false">
            </app-timeline-card>

            <app-timeline-card
              [year]="2024" [badgeText]="lang.t['aoa_2024_badge']" badgeColor="bg-[#0294df]"
              [title]="lang.t['aoa_2024_title']" [description]="lang.t['aoa_2024_desc']"
              [bulletPoints]="[lang.t['aoa_2024_bullet1'], lang.t['aoa_2024_bullet2'], lang.t['aoa_2024_bullet3']]"
              [isReversed]="true">
            </app-timeline-card>

            <app-timeline-card
              [year]="2025" [badgeText]="lang.t['aoa_2025_badge']" badgeColor="bg-[#f37c3a]"
              [title]="lang.t['aoa_2025_title']" [description]="lang.t['aoa_2025_desc']"
              [isReversed]="false">
            </app-timeline-card>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 md:px-16 bg-white border-t-4 border-black">
        <div class="max-w-3xl mx-auto">
          <div class="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight">{{ lang.t['aoa_faqTitle'] }}</h2>
            <svg class="fill-yellow-400 text-black w-8 h-8 hidden md:block" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="space-y-5">
            <app-aoa-faq [question]="lang.t['aoa_faq1_q']" [answer]="lang.t['aoa_faq1_a']"></app-aoa-faq>
            <app-aoa-faq [question]="lang.t['aoa_faq2_q']" [answer]="lang.t['aoa_faq2_a']"></app-aoa-faq>
            <app-aoa-faq [question]="lang.t['aoa_faq3_q']" [answer]="lang.t['aoa_faq3_a']"></app-aoa-faq>
            <app-aoa-faq [question]="lang.t['aoa_faq4_q']" [answer]="lang.t['aoa_faq4_a']"></app-aoa-faq>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AoaComponent {
  constructor(public lang: LanguageService) {}
}
