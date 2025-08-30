import React from "react";
import { HeroProps } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Hero: React.FC<HeroProps> = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex h-screen flex-col items-center">
      <div className="frame lg:container m-auto px-12 md:px-12 lg:px-6 mb-0">
        <h1 className="from-stone-800 font-sans text-5xl md:text-9xl dark:text-white">
          BEST
        </h1>
        <p className="text-center font-sans text-5xl md:text-5xl mb-2">
          {t.heroSubtitle}
        </p>
        <div className="justify-center container px-6 md:px-12 lg:px-6">
          <h2 className="rotatingText-adjective">{t.student}</h2>
          <h2 className="rotatingText-adjective">{t.development}</h2>
          <h2 className="rotatingText-adjective">{t.family}</h2>
        </div>
      </div>

      <div className="container m-auto text-center px-6 md:px-12 lg:px-20 mt-2em">
        <a
          href="https://vk.com/best_urfu"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-16 w-full mx-auto items-center justify-center px-8 before:absolute  before:inset-0 before:rounded-full before:bg-sky-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span className="relative text-2xl font-semibold text-white">
            {t.vkButton}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
