import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { BoardMember, SocialLink } from '../models/types';
import { BoardMemberCardComponent } from './board-member-card.component';

@Component({
  selector: 'app-board-members-list',
  standalone: true,
  imports: [BoardMemberCardComponent],
  template: `
    <section class="m-auto relative flex items-center justify-center"
      style="background: linear-gradient(179deg, #E2EAFDFF 0%, #073AFF00 97%)">
      <div class="min-h-screen py-8 lg:w-[60%]">
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t['boardXXIV'] }}</p>
        <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 select-none">
          @for (member of boardMembers; track member.id) {
            <app-board-member-card [member]="member" />
          }
        </div>
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t['nonBoardXXIV'] }}</p>
        <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 select-none">
          @for (member of nonBoardMembers; track member.id) {
            <app-board-member-card [member]="member" />
          }
        </div>
      </div>
    </section>
  `
})
export class BoardMembersListComponent {
  lang = inject(LanguageService);

  placeholderSocial: SocialLink[] = [
    { type: 'vk', url: '#', icon: 'vk' },
    { type: 'telegram', url: '#', icon: 'telegram' },
  ];

  boardMembers: BoardMember[] = [
    { id: 1, nameKey: 'president', position: 'President', roleKey: 'presidentRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    { id: 2, nameKey: 'secretary', position: 'Secretary', roleKey: 'secretaryRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    { id: 3, nameKey: 'treasurer', position: 'Treasurer', roleKey: 'treasurerRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    { id: 4, nameKey: 'vp4hr', position: 'VP4HR', roleKey: 'vp4hrRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    { id: 5, nameKey: 'vp4pr', position: 'VP4PR', roleKey: 'vp4prRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    // { id: 6, nameKey: 'vp4cr', position: 'VP4CR', roleKey: 'vp4crRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
  ];

  nonBoardMembers: BoardMember[] = [
    { id: 7, nameKey: 'iiCoord', position: 'II Coordinator', roleKey: 'iiCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    // { id: 8, nameKey: 'projCoord', position: 'Project Coordinator', roleKey: 'projCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
    { id: 9, nameKey: 'itCoord', position: 'IT Coordinator', roleKey: 'itCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: this.placeholderSocial },
  ];
}
