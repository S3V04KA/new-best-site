import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="About_US" #aboutSection>
      <div class="relative isolate overflow-hidden px-1 sm:px-12 lg:px-12 bg-gray-900 py-24">
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ba65cf] to-[#6a62ff] opacity-20"
            [style.clipPath]="'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'">
          </div>
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#d87bf5] to-[#372dff] opacity-20"
            [style.clipPath]="'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'">
          </div>
        </div>

        <div class="mx-auto max-w-7xl">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-5xl md:text-7xl font-extralight tracking-tight text-white">МОСТ</h2>
            <p class="mt-6 md:text-2xl text-1xl leading-8 text-gray-300">
              {{ lang.t['aboutDescription'] + ' ' + lang.t['aboutDescription2'] + ' ' + lang.t['aboutDescription3'] }}
            </p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl class="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">{{ lang.t['participants'] }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  {{ lang.t['participantsMore'] }} <span class="text-4xl">{{ counters.participants }}</span>
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">{{ lang.t['localGroups'] }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  <span class="text-4xl">{{ counters.groups }}</span>
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">{{ lang.t['countries'] }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  <span class="text-4xl">{{ counters.countries }}</span>
                </dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">{{ lang.t['years'] }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                  {{ lang.t['participantsMore'] }} <span class="text-4xl">{{ counters.years }}</span> {{ lang.t['yearsText'] }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="/images/board_new.jpg" alt=""
          class="absolute brightness-50 blur inset-0 -z-10 h-full w-full object-center object-cover" />
      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  counters = { participants: 0, groups: 0, countries: 0, years: 0 };
  private observer: IntersectionObserver | null = null;
  private timer: any = null;

  constructor(public lang: LanguageService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          this.observer?.unobserve(entry.target);
        }
      });
    });

    if (this.aboutSection) {
      this.observer.observe(this.aboutSection.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.timer) clearInterval(this.timer);
  }

  private animateCounters() {
    const targets = { participants: 3300, groups: 84, countries: 30, years: 35 };
    const duration = 2000;
    const steps = 60;
    const stepValue = duration / steps;
    let currentStep = 0;

    this.timer = setInterval(() => {
      currentStep++;
      this.counters = {
        participants: Math.floor((targets.participants * currentStep) / steps),
        groups: Math.floor((targets.groups * currentStep) / steps),
        countries: Math.floor((targets.countries * currentStep) / steps),
        years: Math.floor((targets.years * currentStep) / steps),
      };
      this.cdr.detectChanges();

      if (currentStep >= steps) {
        clearInterval(this.timer);
        this.counters = targets;
      }
    }, stepValue);
  }
}
