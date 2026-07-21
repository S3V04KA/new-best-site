import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { BoardMember } from '../models/types';
import { BoardMemberCardComponent } from './board-member-card.component';

@Component({
  selector: 'app-board-members-list',
  standalone: true,
  imports: [BoardMemberCardComponent],
  template: `
    <section class="m-auto relative flex items-center justify-center"
      style="background: linear-gradient(179deg, #E2EAFDFF 0%, #073AFF00 97%)">
      <div class="min-h-screen py-8 lg:w-[60%]">
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t[boardTitleKey] }}</p>
        <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 select-none">
          @for (member of boardMembers; track member.id) {
            <app-board-member-card [member]="member" />
          }
        </div>
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t[nonBoardTitleKey] }}</p>
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
  @Input() boardId = '24';
  lang = inject(LanguageService);

  get boardTitleKey(): string {
    return this.boardId === '23' ? 'boardXXII' : 'boardXXIV';
  }

  get nonBoardTitleKey(): string {
    return this.boardId === '23' ? 'nonBoardXXII' : 'nonBoardXXIV';
  }

  get boardMembers(): BoardMember[] {
    return this.boardId === '23' ? this.board23Members : this.board24Members;
  }

  get nonBoardMembers(): BoardMember[] {
    return this.boardId === '23' ? this.board23NonBoardMembers : this.board24NonBoardMembers;
  }

  board23Members: BoardMember[] = [
    { id: 1, nameKey: 'president', position: 'President', roleKey: 'presidentRole', boardKey: 'boardXXII', image: '/images/Nika.jpg', social: [{ type: 'vk', url: 'https://vk.com/v.machleidt', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/v_sio', icon: 'telegram' }, { type: 'mail', url: 'mailto:veronika.machleidt@gmail.com', icon: 'mail' }] },
    { id: 2, nameKey: 'secretary', position: 'Secretary', roleKey: 'secretaryRole', boardKey: 'boardXXII', image: '/images/Anna.jpg', social: [{ type: 'vk', url: 'https://vk.com/prprprrrr', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/peachif1', icon: 'telegram' }] },
    { id: 3, nameKey: 'treasurer', position: 'Treasurer', roleKey: 'treasurerRole', boardKey: 'boardXXII', image: '/images/Jenya.jpg', social: [{ type: 'vk', url: 'https://vk.com/homutinnikova', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zececka', icon: 'telegram' }] },
    { id: 4, nameKey: 'vp4hr', position: 'VP4HR', roleKey: 'vp4hrRole', boardKey: 'boardXXII', image: '/images/AnnaHR.jpg', social: [{ type: 'vk', url: 'https://vk.com/anyta1310', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/Annyttt', icon: 'telegram' }] },
    { id: 5, nameKey: 'vp4pr', position: 'VP4PR', roleKey: 'vp4prRole', boardKey: 'boardXXII', image: '/images/Masha_new.jpg', social: [{ type: 'vk', url: 'https://vk.com/khalinamaria', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/kostareeva', icon: 'telegram' }] },
    { id: 6, nameKey: 'vp4cr', position: 'VP4CR', roleKey: 'vp4crRole', boardKey: 'boardXXII', image: '/images/Jenya.jpg', social: [{ type: 'vk', url: 'https://vk.com/homutinnikova', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zececka', icon: 'telegram' }] },
  ];

  board23NonBoardMembers: BoardMember[] = [
    { id: 7, nameKey: 'iiCoord', position: 'II Coordinator', roleKey: 'iiCoordRole', boardKey: 'boardXXII', image: '/images/Yana.jpg', social: [{ type: 'vk', url: 'https://vk.com/yupivvvvv', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/yehoyani', icon: 'telegram' }] },
    { id: 8, nameKey: 'projCoord', position: 'Project Coordinator', roleKey: 'projCoordRole', boardKey: 'boardXXII', image: '/images/Lera.jpg', social: [{ type: 'vk', url: 'https://vk.com/kazuride', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/shipochnic', icon: 'telegram' }] },
    { id: 9, nameKey: 'itCoord', position: 'IT Coordinator', roleKey: 'itCoordRole', boardKey: 'boardXXII', image: '/images/Seva.jpg', social: [{ type: 'vk', url: 'https://vk.com/buwheat', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/buwheat', icon: 'telegram' }, { type: 'github', url: 'https://github.com/S3V04KA', icon: 'github' }] },
  ];

  // Board XXIV roster is not finalized yet — same roles as XXIII, names/photos are placeholders.
  board24Members: BoardMember[] = [
    { id: 101, nameKey: 'tbaName', position: 'President', roleKey: 'presidentRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 102, nameKey: 'tbaName', position: 'Secretary', roleKey: 'secretaryRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 103, nameKey: 'tbaName', position: 'Treasurer', roleKey: 'treasurerRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 104, nameKey: 'tbaName', position: 'VP4HR', roleKey: 'vp4hrRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 105, nameKey: 'tbaName', position: 'VP4PR', roleKey: 'vp4prRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 106, nameKey: 'tbaName', position: 'VP4CR', roleKey: 'vp4crRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
  ];

  board24NonBoardMembers: BoardMember[] = [
    { id: 107, nameKey: 'tbaName', position: 'II Coordinator', roleKey: 'iiCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 108, nameKey: 'tbaName', position: 'Project Coordinator', roleKey: 'projCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
    { id: 109, nameKey: 'tbaName', position: 'IT Coordinator', roleKey: 'itCoordRole', boardKey: 'boardXXIV', image: '/images/placeholder-avatar.svg', social: [] },
  ];
}
