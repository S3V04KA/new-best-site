import { Component, Input, inject } from '@angular/core';
import { BoardMember } from '../models/types';
import { SocialIconComponent } from '../social-icon/social-icon.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-board-member-card',
  standalone: true,
  imports: [SocialIconComponent],
  template: `
    <div class="border border-gray-300 w-full rounded-2xl shadow-xl shadow-gray-200 hover:shadow-violet-400/80 hover:shadow-2xl bg-white-100 hover:bg-gray-50 transition-all duration-300 max-h-min">
      <img class="bg-cover object-cover object-top rounded-t-2xl min-h-[15rem] mx-auto h-[20em] w-full"
        height="225" [src]="member.image" [alt]="lang.t[member.nameKey]" />
      <div class="p-4">
        <div class="min-h-32">
          <p class="font-semibold text-xl py-2">{{ lang.t[member.nameKey] }}</p>
          <p class="font-light text-sm text-gray-700 text-left">{{ lang.t[member.roleKey] }}</p>
        </div>
        <div class="flex flex-wrap mt-2 space-x-4 align-bottom">
          <div class="flex flex-col py-2 space-y-0">
            <p class="font-semibold text-base">{{ member.position }}</p>
            <p class="font-light text-sm">{{ lang.t[member.boardKey] }}</p>
          </div>
        </div>
        <ul class="flex justify-center mt-5 space-x-2 p-[1em] items-center">
          @for (social of member.social; track $index) {
            <li>
              <app-social-icon [type]="social.type" [url]="social.url" />
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class BoardMemberCardComponent {
  @Input() member!: BoardMember;
  lang = inject(LanguageService);
}
