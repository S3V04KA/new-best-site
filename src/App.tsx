import React, { useState, useEffect } from 'react';
import { AppProps } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Board from './components/Board';
import NotFound from './components/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC<AppProps> = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageHistory, setPageHistory] = useState<string[]>(['home']);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Список валидных страниц
  const validPages = ['home', 'board'];

  // Инициализация страницы на основе URL при загрузке
  useEffect(() => {
    const path = window.location.pathname.slice(1); // убираем начальный '/'
    if (path && path !== 'home') {
      if (validPages.includes(path)) {
        setCurrentPage(path);
        setPageHistory(['home', path]);
        // Обновляем URL без добавления в историю
        window.history.replaceState({ page: path }, '', `/${path}`);
      } else {
        // Невалидная страница - показываем 404
        setCurrentPage('404');
        setPageHistory(['home', '404']);
        window.history.replaceState({ page: '404' }, '', '/404');
      }
    }
  }, []);

  // Обработка скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Автоматический скролл наверх при смене страницы
  useEffect(() => {
    if (currentPage !== '404') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  // Обработка кнопки "Назад" в браузере
  useEffect(() => {
    const handlePopState = () => {
      if (pageHistory.length > 1) {
        const newHistory = pageHistory.slice(0, -1);
        const previousPage = newHistory[newHistory.length - 1];
        setPageHistory(newHistory);
        setCurrentPage(previousPage);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pageHistory]);

  // Функция для навигации с обновлением истории
  const navigateToPage = (page: string) => {
    if (validPages.includes(page)) {
      setCurrentPage(page);
      setPageHistory(prev => [...prev, page]);
      // Обновляем URL без перезагрузки страницы
      window.history.pushState({ page }, '', `/${page === 'home' ? '' : page}`);
    } else {
      // Невалидная страница - показываем 404
      setCurrentPage('404');
      setPageHistory(prev => [...prev, '404']);
      window.history.pushState({ page: '404' }, '', '/404');
    }
  };

  // Функция для возврата назад
  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1);
      const previousPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(previousPage);
      // Обновляем URL
      window.history.pushState({ page: previousPage }, '', `/${previousPage === 'home' ? '' : previousPage}`);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'board':
        return <Board setCurrentPage={navigateToPage} />;
      case '404':
        return <NotFound />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Partners />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="App">
        {/* Показываем Header только для валидных страниц */}
        {currentPage !== '404' && (
          <Header
            isScrolled={isScrolled}
            currentPage={currentPage}
            setCurrentPage={navigateToPage}
            goBack={goBack}
            canGoBack={pageHistory.length > 1}
          />
        )}
        {renderPage()}
        {/* Показываем Footer только для валидных страниц */}
        {currentPage !== '404' && <Footer />}
      </div>
    </LanguageProvider>
  );
};

export default App;
