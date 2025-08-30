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

export interface LanguageContextType {
  language: 'ru' | 'en';
  toggleLanguage: () => void;
  isRussian: boolean;
  isEnglish: boolean;
}

export interface HeaderProps {
  isScrolled: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  goBack: () => void;
  canGoBack: boolean;
}

export interface BoardProps {
  setCurrentPage: (page: string) => void;
}

export interface AppProps {}

export interface HeroProps {}

export interface AboutProps {}

export interface ProjectsProps {}

export interface PartnersProps {}

export interface FooterProps {}

export interface NotFoundProps {}
