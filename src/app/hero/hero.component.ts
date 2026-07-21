import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="flex h-screen flex-col items-center">
      <div class="frame lg:container m-auto px-12 md:px-12 lg:px-6 mb-0">
        <h1 class="from-stone-800 font-sans text-5xl md:text-9xl dark:text-white">
          {{ lang.t['heroTitle'] }}
        </h1>
        <p class="text-center font-sans text-5xl md:text-5xl mb-2">
          {{ lang.t['heroSubtitle'] }}
        </p>
        <div class="justify-center container px-6 md:px-12 lg:px-6">
          <h2 class="rotatingText-adjective">{{ lang.t['student'] }}</h2>
          <h2 class="rotatingText-adjective">{{ lang.t['development'] }}</h2>
          <h2 class="rotatingText-adjective">{{ lang.t['family'] }}</h2>
        </div>
      </div>

      <div class="container m-auto text-center px-6 md:px-12 lg:px-20 mt-2em">
        <a
          href="https://vk.com/most_urfu"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex h-16 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span class="relative text-2xl font-semibold text-white">
            {{ lang.t['vkButton'] }}
          </span>
        </a>
      </div>
    </div>
  `
})
export class HeroComponent {
  constructor(public lang: LanguageService) {}
}
