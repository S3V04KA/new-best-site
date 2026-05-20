import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  buttonColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="bg_our" id="OUR_MEROS">
      <div class="mb-14 xl:container justify-center mx-auto sm:px-6 md:px-12 lg:px-18">
        <div class="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 class="text-5xl md:text-7xl font-extralight tracking-wider dark:text-zinc-300 py-10 md:py-20 relative text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-secondary dark:from-primaryLight dark:to-secondaryLight">
            {{ lang.t['projectsTitle'] }}
          </h2>
        </div>

        <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          @for (project of projects; track project.id) {
            <div class="group relative rounded-3xl space-y-6 overflow-hidden">
              <img class="mx-auto h-[26rem] w-full object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                [src]="project.image" [alt]="project.alt" loading="lazy" width="640" height="805" />
              <div class="max-md:relative absolute bottom-0 inset-x-0 h-[22rem] max-md:h-auto px-8 py-6 bg-zinc-800 dark:bg-white md:translate-y-[15rem] transition duration-300 ease-in-out md:group-hover:translate-y-0 z-10" style="margin-top: 0">
                <div>
                  <h4 class="text-xl font-semibold dark:text-zinc-700 text-white">{{ project.title }}</h4>
                  <span class="block text-sm text-zinc-500">{{ project.subtitle }}</span>
                </div>
                <div class="mt-5 mb-5">
                  <p class="max-md:text-zinc-300 text-zinc-800 group-hover:text-zinc-300 dark:max-md:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-zinc-600 transition duration-300 ease-in-out">
                    {{ project.description }}
                  </p>
                </div>
                <div>
                  @if (project.id === 2) {
                    <button (click)="navigateTo('aoa')"
                      class="relative flex h-12 w-full mx-auto items-center justify-center px-5 {{project.buttonColor}} before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max cursor-pointer">
                      <span class="relative text-base font-semibold text-white">{{ lang.t['allProjectsLink'] }}</span>
                    </button>
                  } @else if (project.id === 3) {
                    <button (click)="navigateTo('mark')"
                      class="relative flex h-12 w-full mx-auto items-center justify-center px-5 {{project.buttonColor}} before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max cursor-pointer">
                      <span class="relative text-base font-semibold text-white">{{ lang.t['allProjectsLink'] }}</span>
                    </button>
                  } @else {
                    <a [href]="project.link" target="_blank" rel="noopener noreferrer"
                      class="relative flex h-12 w-full mx-auto items-center justify-center px-5 {{project.buttonColor}} before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                      <span class="relative text-base font-semibold text-white">{{ lang.t['subscribe'] }}</span>
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  private router = inject(Router);
  lang = inject(LanguageService);

  projects: Project[] = [
    { id: 1, image: '/images/CodeRunner.jpg', alt: 'Code_Runner', title: this.lang.t['itHackathons'], subtitle: 'Code-Runner', description: this.lang.t['itHackathonsDesc'], link: 'https://vk.com/hackathon_urfu', buttonColor: 'before:bg-violet-900' },
    { id: 2, image: '/images/ARTofARCH.jpg', alt: 'АОА', title: this.lang.t['archEvents'], subtitle: 'Art of Arch', description: this.lang.t['archEventsDesc'], link: '', buttonColor: 'before:bg-lime-600' },
    { id: 3, image: '/images/MARKHACK.jpg', alt: 'ЮРАЛ', title: this.lang.t['marketingHackathons'], subtitle: 'Марк Хак & Юрал', description: this.lang.t['marketingHackathonsDesc'], link: '', buttonColor: 'before:bg-orange-600' },
    { id: 4, image: '/images/Course.jpg', alt: 'курс 2020', title: this.lang.t['bestCourses'], subtitle: 'BEST Course 2020', description: this.lang.t['bestCoursesDesc'], link: 'https://vk.com/most_urfu', buttonColor: 'before:bg-violet-900' },
    { id: 5, image: '/images/Chatzilla.jpg', alt: 'speaking club', title: this.lang.t['speakingClub'], subtitle: 'Chatzilla', description: this.lang.t['speakingClubDesc'], link: 'https://vk.com/chatzilla', buttonColor: 'before:bg-lime-600' },
    { id: 6, image: '/images/Eco_Hack.jpg', alt: 'secret event', title: this.lang.t['businessIntensive'], subtitle: 'Ural Create', description: this.lang.t['businessIntensiveDesc'], link: 'https://vk.com/uralcreate', buttonColor: 'before:bg-orange-600' },
  ];

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
