import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageContextType } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    isRussian: language === 'ru',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
