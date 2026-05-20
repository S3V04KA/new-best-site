import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Slideshow } from "./SlideShow";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function MarkHackPage(): React.JSX.Element {
  const { language } = useLanguage();
  const t = translations[language] as Record<string, string>;
  return (
    <div
      className="min-h-screen bg-[#f4f0e7] text-[#1c1c1c] font-sans selection:bg-[#fa6346] selection:text-white"
      style={{ backgroundImage: `url('/images/whitepapertexture.png')` }}
    >
      {/* 2. ГЛАВНЫЙ ЭКРАН (HERO) */}
      <section className="relative w-full max-w-7xl mx-auto px-8 pt-10 pb-20 mt-20">
        <div className="relative z-10 max-w-2xl">
          {/* Декоративные элементы (синие штрихи, оранжевые плашки) можно расположить абсолютно */}
          <h1 className="text-6xl md:text-8xl font-black uppercase text-[#fa6346] leading-none mb-6">
            {t.mark_heroTitle1}
            <br />
            {t.mark_heroTitle2}
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-xl leading-snug mb-8">
            {t.mark_heroDesc}
          </p>
        </div>

        {/* Графика: Гора и синее пятно справа */}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-0 hidden md:block">
          {/* Место для PNG горы */}
          <div className="absolute right-10 top-20 w-80 h-80 bg-gray-400 bg-opacity-30 rounded-full blur-3xl"></div>
          {/* img src="/mountain.png" className="absolute right-0 top-10 object-contain..." */}
        </div>

        {/* Темный блок под главным экраном (из макета) */}
        <div className="mt-20 w-full bg-[#1c1c1c] rounded-lg relative overflow-hidden flex items-center justify-center" style={{height: '30em'}}>
          {/* Сюда вставляется белая карточка с видео/фото */}
          <div className="w-2/3 h-4/5 bg-[#f4f0e7] rounded shadow-lg">
          <Slideshow images={['/images/mark/1.jpg', '/images/mark/2.jpg', '/images/mark/3.jpg']} />
          </div>
        </div>
      </section>

      {/* 3. ИСТОРИЯ (2023, 2024, 2025) */}
      <section className="py-20 flex flex-col gap-24 relative overflow-hidden">
        {/* БЛОК 2023 */}
        <div className="w-full bg-[#FA6346] py-4 my-8">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-8xl font-black text-[#fafafa] tracking-tighter">
              2023
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 relative justify-between">
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl mb-6">
              {t.mark_2023_intro}
            </p>
            <p className="text-lg text-gray-700">
              {t.mark_2023_desc}
            </p>
            <p className="mt-16">
              <img src="/images/mark/2023_partners.png" />
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Логотип ЮРАЛ */}
            <div className="w-64 h-64 flex items-center justify-center">
              <img src="/images/mark/ural.png" />
            </div>
          </div>
        </div>

        {/* БЛОК 2024 - Синяя полоса */}
        <div className="w-full bg-[#454fa6] py-4 my-8">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-8xl font-black text-[#1c1c1c] mix-blend-color-burn tracking-tighter">
              2024
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 justify-between">
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl mb-6">
              {t.mark_2024_intro}
            </p>
            {/* Блок с логотипами партнеров */}
            <div className="mt-16">
              <img src="/images/mark/2024_partners.png" />
            </div>
          </div>
          <div className="flex justify-center">
            {/* Логотип X MARK K */}
            <div className="w-64 h-64 flex items-center justify-center">
              <img src="/images/mark/mark2.png" />
            </div>
          </div>
        </div>

        {/* БЛОК 2025 */}
        <div className="w-full bg-[#000000] py-4 my-8">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-8xl font-black text-[#ffffff] tracking-tighter">
              2025
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 relative">
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl mb-8">
              {t.mark_2025_intro}
            </p>
            <div className="mt-16">
              <img src="/images/mark/2025_partners.png" />
            </div>
          </div>
          <div className="md:w-1/1">
            <img
              src="/images/mark/mark3.png"
              className="w-xl h-auto bg-blue-200 rotate-3 shadow-xl flex items-center justify-center"
            />
          </div>
        </div>
      </section>

      {/* 4. БЛОК FAQ (Оранжевые аккордеоны) */}
      <div className="w-full bg-[#fa6346] py-4 my-8">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-8xl font-black text-[#ffffff] tracking-tighter">
            {t.mark_faqTitle}
          </h2>
        </div>
      </div>
      <section id="faq" className="py-20 max-w-5xl mx-auto px-8">
        <div className="flex flex-col gap-4 relative">
          {/* Декоративные каракули сбоку */}
          <div className="absolute -right-20 top-0 w-32 h-32 border border-black rounded-full opacity-20"></div>

          <FAQItem
            question={t.mark_faq1_q}
            answer={t.mark_faq1_a}
          />
          <FAQItem
            question={t.mark_faq2_q}
            answer={t.mark_faq2_a}
          />
          <FAQItem
            question={t.mark_faq3_q}
            answer={t.mark_faq3_a}
          />
        </div>
      </section>
    </div>
  );
}

// Компонент для оранжевых плашек FAQ
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-3 border-black rounded-none shadow-[4px_4px_0px_rgba(28,28,28,1)] bg-white transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left font-black text-base md:text-lg bg-[#fa6346] hover:bg-[#fa6355] text-white transition-colors border-b-3 border-transparent"
        style={{ borderBottomColor: isOpen ? "#1c1c1c" : "transparent" }}
      >
        <span>{question}</span>
        <Plus
          className={`w-5 h-5 transform transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="p-5 text-sm md:text-base leading-relaxed bg-[#fdfdfd] text-gray-700">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
