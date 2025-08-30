import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const BoardHeader: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <div className="relative isolate overflow-hidden px-1 sm:px-12 lg:px-20 bg-gray-900 py-24 h-[30em]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-white">{t.boardTitle}</h2>
            <p className="mt-6 md:text-2xl text-1xl leading-8 text-gray-300">
              {t.boardSubtitle}
            </p>
          </div>
        </div>
        <img 
          src="/images/board.jpg" 
          alt=""
          className="absolute blur inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
      </div>
    </section>
  );
};

export default BoardHeader;
