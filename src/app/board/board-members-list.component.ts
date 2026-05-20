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
    { id: 1, name: this.lang.t['president'], position: 'President', role: this.lang.t['presidentRole'], board: this.lang.t['boardXXII'], image: '/images/Nika.jpg', social: [{ type: 'vk', url: 'https://vk.com/v.machleidt', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/v_sio', icon: 'telegram' }, { type: 'mail', url: 'mailto:veronika.machleidt@gmail.com', icon: 'mail' }] },
    { id: 2, name: this.lang.t['secretary'], position: 'Secretary', role: this.lang.t['secretaryRole'], board: this.lang.t['boardXXII'], image: '/images/Anna.jpg', social: [{ type: 'vk', url: 'https://vk.com/prprprrrr', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/peachif1', icon: 'telegram' }] },
    { id: 3, name: this.lang.t['treasurer'], position: 'Treasurer', role: this.lang.t['treasurerRole'], board: this.lang.t['boardXXII'], image: '/images/Varya.jpg', social: [{ type: 'vk', url: 'https://vk.com/zhhhuravleva', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zhhhuravleva', icon: 'telegram' }] },
    { id: 4, name: this.lang.t['vp4hr'], position: 'VP4HR', role: this.lang.t['vp4hrRole'], board: this.lang.t['boardXXII'], image: '/images/AnnaHR.jpg', social: [{ type: 'vk', url: 'https://vk.com/anyta1310', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/Annyttt', icon: 'telegram' }] },
    { id: 5, name: this.lang.t['vp4pr'], position: 'VP4PR', role: this.lang.t['vp4prRole'], board: this.lang.t['boardXXII'], image: '/images/Masha_new.jpg', social: [{ type: 'vk', url: 'https://vk.com/khalinamaria', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/kostareeva', icon: 'telegram' }] },
    { id: 6, name: this.lang.t['vp4cr'], position: 'VP4CR', role: this.lang.t['vp4crRole'], board: this.lang.t['boardXXII'], image: '/images/Jenya.jpg', social: [{ type: 'vk', url: 'https://vk.com/homutinnikova', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/zececka', icon: 'telegram' }] },
  ];

  nonBoardMembers: BoardMember[] = [
    { id: 7, name: this.lang.t['iiCoord'], position: 'II Coordinator', role: this.lang.t['iiCoordRole'], board: this.lang.t['boardXXII'], image: '/images/Yana.jpg', social: [{ type: 'vk', url: 'https://vk.com/yupivvvvv', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/yehoyani', icon: 'telegram' }] },
    { id: 8, name: this.lang.t['projCoord'], position: 'Project Coordinator', role: this.lang.t['projCoordRole'], board: this.lang.t['boardXXII'], image: '/images/Lera.jpg', social: [{ type: 'vk', url: 'https://vk.com/kazuride', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/shipochnic', icon: 'telegram' }] },
    { id: 9, name: this.lang.t['itCoord'], position: 'IT Coordinator', role: this.lang.t['itCoordRole'], board: this.lang.t['boardXXII'], image: '/images/Seva.jpg', social: [{ type: 'vk', url: 'https://vk.com/buwheat', icon: 'vk' }, { type: 'telegram', url: 'https://t.me/buwheat', icon: 'telegram' }, { type: 'github', url: 'https://github.com/S3V04KA', icon: 'github' }] },
  ];
}
