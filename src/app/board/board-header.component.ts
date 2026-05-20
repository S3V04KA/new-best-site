import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-board-header',
  standalone: true,
  template: `
    <section>
      <div class="relative isolate overflow-hidden px-1 sm:px-12 lg:px-20 bg-gray-900 py-24 h-[30em] mt-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-5xl md:text-7xl font-extralight tracking-tight text-white">{{ lang.t['boardTitle'] }}</h2>
            <p class="mt-6 md:text-2xl text-1xl leading-8 text-gray-300">{{ lang.t['boardSubtitle'] }}</p>
          </div>
        </div>
        <img src="/images/board_new.jpg" alt=""
          class="absolute brightness-50 blur inset-0 -z-10 h-full w-full object-cover object-center" />
      </div>
    </section>
  `
})
export class BoardHeaderComponent {
  constructor(public lang: LanguageService) {}
}
