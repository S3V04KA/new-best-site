import { Component, inject } from '@angular/core';
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
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t['boardXXII'] }}</p>
        <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 select-none">
          @for (member of boardMembers; track member.id) {
            <app-board-member-card [member]="member" />
          }
        </div>
        <p class="text-center text-4xl font-semibold py-4">{{ lang.t['nonBoardXXII'] }}</p>
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

  boardMembers: BoardMember[] = [
    { id: 1, nameKey: 'president', position: 'President', roleKey: 'presidentRole', boardKey: 'boardXXII', image: '/images/Nika.jpg', social: [{ type: 'vk', url: 'https://vk.com/v.machleidt', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/v_sio', icon: 'telegram' }, { type: 'mail', url: 'mailto:veronika.machleidt@gmail.com', icon: 'mail' }] },
    { id: 2, nameKey: 'secretary', position: 'Secretary', roleKey: 'secretaryRole', boardKey: 'boardXXII', image: '/images/Anna.jpg', social: [{ type: 'vk', url: 'https://vk.com/prprprrrr', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/peachif1', icon: 'telegram' }] },
    { id: 3, nameKey: 'treasurer', position: 'Treasurer', roleKey: 'treasurerRole', boardKey: 'boardXXII', image: '/images/Jenya.jpg', social: [{ type: 'vk', url: 'https://vk.com/homutinnikova', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zececka', icon: 'telegram' }] },
    { id: 4, nameKey: 'vp4hr', position: 'VP4HR', roleKey: 'vp4hrRole', boardKey: 'boardXXII', image: '/images/AnnaHR.jpg', social: [{ type: 'vk', url: 'https://vk.com/anyta1310', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/Annyttt', icon: 'telegram' }] },
    { id: 5, nameKey: 'vp4pr', position: 'VP4PR', roleKey: 'vp4prRole', boardKey: 'boardXXII', image: '/images/Masha_new.jpg', social: [{ type: 'vk', url: 'https://vk.com/khalinamaria', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/kostareeva', icon: 'telegram' }] },
    { id: 6, nameKey: 'vp4cr', position: 'VP4CR', roleKey: 'vp4crRole', boardKey: 'boardXXII', image: '/images/Jenya.jpg', social: [{ type: 'vk', url: 'https://vk.com/homutinnikova', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zececka', icon: 'telegram' }] },
  ];

  nonBoardMembers: BoardMember[] = [
    { id: 7, nameKey: 'iiCoord', position: 'II Coordinator', roleKey: 'iiCoordRole', boardKey: 'boardXXII', image: '/images/Yana.jpg', social: [{ type: 'vk', url: 'https://vk.com/yupivvvvv', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/yehoyani', icon: 'telegram' }] },
    { id: 8, nameKey: 'projCoord', position: 'Project Coordinator', roleKey: 'projCoordRole', boardKey: 'boardXXII', image: '/images/Lera.jpg', social: [{ type: 'vk', url: 'https://vk.com/kazuride', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/shipochnic', icon: 'telegram' }] },
    { id: 9, nameKey: 'itCoord', position: 'IT Coordinator', roleKey: 'itCoordRole', boardKey: 'boardXXII', image: '/images/Seva.jpg', social: [{ type: 'vk', url: 'https://vk.com/buwheat', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/buwheat', icon: 'telegram' }, { type: 'github', url: 'https://github.com/S3V04KA', icon: 'github' }] },
  ];
}
