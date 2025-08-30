import React, { useState } from 'react';
import { HeaderProps } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, setCurrentPage, goBack, canGoBack }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { language, toggleLanguage, isRussian } = useLanguage();
  const t = translations[language];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    closeMobileMenu();
  };

  const navigateToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${'bg-white/80 backdrop-blur-md shadow-lg'}`}>
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <button
            onClick={() => navigateToPage('home')}
            className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            <img src="/images/logo.svg" className="h-8 w-auto" alt="BEST Logo" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li><button onClick={() => navigateToSection('About_US')} className="text-gray-800 hover:text-gray-600 transition-colors duration-300"><span>{t.about}</span></button></li>
              <li><button onClick={() => navigateToSection('OUR_MEROS')} className="text-gray-800 hover:text-gray-600 transition-colors duration-300"><span>{t.projects}</span></button></li>
              <li><button onClick={() => navigateToSection('OUR_PARTNERS')} className="text-gray-800 hover:text-gray-600 transition-colors duration-300"><span>{t.partners}</span></button></li>
              <li><button onClick={() => navigateToPage('board')} className="text-gray-800 hover:text-gray-600 transition-colors duration-300"><span>{t.board}</span></button></li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="block font-sans md:px-5 hover:opacity-80 transition-opacity duration-300"
                  aria-label={isRussian ? "Switch to English" : "Переключиться на русский"}
                >
                  <img
                    src={isRussian ? "/images/Flag_of_the_United_Kingdom.png" : "/images/Flag_of_Russia.png"}
                    alt={isRussian ? "Eng" : "Ru"}
                    className="h-5"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <ul className="space-y-6 pb-6 tracking-wide text-gray-800 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
              <li><button onClick={() => navigateToSection('About_US')} className="text-left w-full bg-transparent border-none p-0"><span>{t.about}</span></button></li>
              <li><button onClick={() => navigateToSection('OUR_MEROS')} className="text-left w-full bg-transparent border-none p-0"><span>{t.projects}</span></button></li>
              <li><button onClick={() => navigateToSection('OUR_PARTNERS')} className="text-left w-full bg-transparent border-none p-0"><span>{t.partners}</span></button></li>
              <li><button onClick={() => navigateToPage('board')} className="text-left w-full bg-transparent border-none p-0"><span>{t.board}</span></button></li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="block font-sans md:px-5 hover:opacity-80 transition-opacity duration-300"
                  aria-label={isRussian ? "Switch to English" : "Переключиться на русский"}
                >
                  <img
                    src={isRussian ? "/images/Flag_of_the_United_Kingdom.png" : "/images/Flag_of_Russia.png"}
                    alt={isRussian ? "Eng" : "Ru"}
                    className="h-5"
                  />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
