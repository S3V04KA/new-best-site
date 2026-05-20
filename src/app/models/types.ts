export interface BoardMember {
  id: number;
  name: string;
  position: string;
  role: string;
  board: string;
  image: string;
  social: SocialLink[];
}

export interface SocialLink {
  type: 'vk' | 'telegram' | 'github' | 'mail';
  url: string;
  icon: string;
}

export type Language = 'ru' | 'en';
