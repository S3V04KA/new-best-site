import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  template: `
    <section id="OUR_PARTNERS">
      <div class="mb-14 xl:container justify-center mx-auto sm:px-6 md:px-12 lg:px-18">
        <div class="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 class="text-5xl md:text-7xl font-extralight tracking-wider dark:text-zinc-300 py-10 md:py-20 relative text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-violet-400">
            {{ lang.t['partnersTitle'] }}
          </h2>
        </div>
        <div class="relative w-full overflow-hidden">
          <div class="relative float-left w-full">
            <img src="/images/Partners.png" class="block w-full" [alt]="lang.t['partnersTitle']" />
          </div>
        </div>
      </div>
    </section>
  `
})
export class PartnersComponent {
  constructor(public lang: LanguageService) {}
}
