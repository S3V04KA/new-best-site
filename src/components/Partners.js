import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Partners = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="OUR_PARTNERS">
      <div className="mb-14 xl:container justify-center mx-auto sm:px-6 md:px-12 lg:px-18">
        <div className="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 className="text-5xl md:text-7xl font-extralight tracking-wider dark:text-zinc-300 py-10 md:py-20 relative text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-secondary dark:from-primaryLight dark:to-secondaryLight">
            {t.partnersTitle}
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="relative float-left w-full">
            <img 
              src="/images/Partners.png" 
              className="block w-full" 
              alt={t.partnersTitle} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
