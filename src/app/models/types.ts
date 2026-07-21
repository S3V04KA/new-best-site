export interface BoardMember {
  id: number;
  nameKey: string;
  position: string;
  roleKey: string;
  boardKey: string;
  image: string;
  social: SocialLink[];
}

export interface SocialLink {
  type: 'vk' | 'telegram' | 'github' | 'mail';
  url: string;
  icon: string;
}

export type Language = 'ru' | 'en';
