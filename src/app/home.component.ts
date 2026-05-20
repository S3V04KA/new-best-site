import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ProjectsComponent, PartnersComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-partners></app-partners>
  `
})
export class HomeComponent {}
