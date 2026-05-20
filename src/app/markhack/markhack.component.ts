import { Component, Input } from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-markhack-faq',
  standalone: true,
  template: `
    <div class="border-3 border-black rounded-none shadow-[4px_4px_0px_rgba(28,28,28,1)] bg-white transition-all">
      <button (click)="isOpen = !isOpen"
        class="w-full p-5 flex justify-between items-center text-left font-black text-base md:text-lg bg-[#fa6346] hover:bg-[#fa6355] text-white transition-colors border-b-3 border-transparent"
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
export class MarkhackFaqComponent {
  isOpen = false;
  @Input() question = '';
  @Input() answer = '';
}

@Component({
  selector: 'app-markhack',
  standalone: true,
  imports: [SlideshowComponent, MarkhackFaqComponent],
  template: `
    <div class="min-h-screen bg-[#f4f0e7] text-[#1c1c1c] font-sans selection:bg-[#fa6346] selection:text-white overflow-x-hidden"
      style="background-image: url('/images/whitepapertexture.png')">

      <section class="relative w-full max-w-7xl mx-auto px-8 pt-10 pb-20 mt-20">
        <div class="relative z-10 max-w-2xl">
          <h1 class="text-6xl md:text-8xl font-black uppercase text-[#fa6346] leading-none mb-6">
            {{ lang.t['mark_heroTitle1'] }}<br />{{ lang.t['mark_heroTitle2'] }}
          </h1>
          <p class="text-xl md:text-2xl font-bold max-w-xl leading-snug mb-8">{{ lang.t['mark_heroDesc'] }}</p>
        </div>
        <div class="absolute top-0 right-0 w-1/2 h-full -z-0 hidden md:block">
          <div class="absolute right-10 top-20 w-80 h-80 bg-gray-400 bg-opacity-30 rounded-full blur-3xl"></div>
        </div>
        <div class="mt-20 w-full bg-[#1c1c1c] rounded-lg relative overflow-hidden flex items-center justify-center" style="height: 30em">
          <div class="w-2/3 h-4/5 bg-[#f4f0e7] rounded shadow-lg">
            <app-slideshow [images]="['/images/mark/1.jpg', '/images/mark/2.jpg', '/images/mark/3.jpg']"></app-slideshow>
          </div>
        </div>
      </section>

      <section class="py-20 flex flex-col gap-24 relative overflow-hidden">
        <div class="w-full bg-[#FA6346] py-4 my-8">
          <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-8xl font-black text-[#fafafa] tracking-tighter">2023</h2>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 relative justify-between">
          <div class="md:w-1/2">
            <p class="text-xl md:text-2xl mb-6">{{ lang.t['mark_2023_intro'] }}</p>
            <p class="text-lg text-gray-700">{{ lang.t['mark_2023_desc'] }}</p>
            <p class="mt-16"><img src="/images/mark/2023_partners.png" /></p>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-64 h-64 flex items-center justify-center"><img src="/images/mark/ural.png" /></div>
          </div>
        </div>

        <div class="w-full bg-[#454fa6] py-4 my-8">
          <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-8xl font-black text-[#1c1c1c] mix-blend-color-burn tracking-tighter">2024</h2>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 justify-between">
          <div class="md:w-1/2">
            <p class="text-xl md:text-2xl mb-6">{{ lang.t['mark_2024_intro'] }}</p>
            <div class="mt-16"><img src="/images/mark/2024_partners.png" /></div>
          </div>
          <div class="flex justify-center">
            <div class="w-64 h-64 flex items-center justify-center"><img src="/images/mark/mark2.png" /></div>
          </div>
        </div>

        <div class="w-full bg-[#000000] py-4 my-8">
          <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-8xl font-black text-[#ffffff] tracking-tighter">2025</h2>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 relative">
          <div class="md:w-1/2">
            <p class="text-xl md:text-2xl mb-8">{{ lang.t['mark_2025_intro'] }}</p>
            <div class="mt-16"><img src="/images/mark/2025_partners.png" /></div>
          </div>
          <div class="md:w-1/1">
            <img src="/images/mark/mark3.png" class="w-xl h-auto bg-blue-200 rotate-3 shadow-xl flex items-center justify-center" />
          </div>
        </div>
      </section>

      <div class="w-full bg-[#fa6346] py-4 my-8">
        <div class="max-w-7xl mx-auto px-8">
          <h2 class="text-6xl font-black text-[#ffffff] tracking-tighter">{{ lang.t['mark_faqTitle'] }}</h2>
        </div>
      </div>
      <section id="faq" class="py-20 max-w-5xl mx-auto px-8">
        <div class="flex flex-col gap-4 relative">
          <div class="absolute -right-20 top-0 w-32 h-32 border border-black rounded-full opacity-20"></div>
          <app-markhack-faq [question]="lang.t['mark_faq1_q']" [answer]="lang.t['mark_faq1_a']"></app-markhack-faq>
          <app-markhack-faq [question]="lang.t['mark_faq2_q']" [answer]="lang.t['mark_faq2_a']"></app-markhack-faq>
          <app-markhack-faq [question]="lang.t['mark_faq3_q']" [answer]="lang.t['mark_faq3_a']"></app-markhack-faq>
        </div>
      </section>
    </div>
  `
})
export class MarkhackComponent {
  constructor(public lang: LanguageService) {}
}
