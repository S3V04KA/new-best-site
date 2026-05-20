import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { Slideshow } from './SlideShow';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

// --- ИНТЕРФЕЙСЫ И ТИПЫ ДЛЯ TSX ---
interface FaqItemProps {
  question: string;
  answer: string;
}

interface TimelineCardProps {
  year: number;
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  logos?: string[];
  bulletPoints?: string[];
  isReversed?: boolean;
}

export default function AoA(): React.JSX.Element {
  const { language } = useLanguage();
  const t = translations[language] as Record<string, string>;
  return (
    <div className="min-h-screen bg-[#f4f4f0] text-[#1c1c1c] font-sans antialiased selection:bg-yellow-300 overflow-x-hidden">
      {/* 2. ГЛАВНЫЙ ЭКРАН (HERO SECTION) */}
      <section id="about" className="relative bg-[#d9d9d9] border-b-4 border-black min-h-[500px] md:min-h-[680px] flex flex-col justify-end overflow-hidden">
        {/* Эффект текстуры бумаги и коллажных абстракций из Figma */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#ff8440] rounded-full filter blur-[2px] opacity-80 mix-blend-initial"></div>
        <div className="absolute -top-12 left-1/3 w-[350px] h-[600px] bg-[#0099e8] transform -rotate-12 opacity-60"></div>
        
        <div className="relative z-10 p-6 md:p-16 max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-white uppercase drop-shadow-[6px_6px_0px_rgba(28,28,28,1)] mb-4">
            ART OF ARCH
          </h1>
          <div className="bg-white border-4 border-black p-6 md:p-8 max-w-3xl my-6 shadow-[8px_8px_0px_rgba(28,28,28,1)]">
            <p className="text-lg md:text-2xl font-medium leading-relaxed">
              {t.aoa_heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. ВИДЕО / ИНТЕНСИВ SECTION */}
      <section className="bg-[#1c1c1c] text-white py-16 px-6 md:px-16 relative overflow-hidden">
        {/* Интерактивное окно видео-плеера (высота 766px по JSON) */}
        <div className="relative mx-auto max-w-5xl aspect-video bg-[#2c2c2c] border-4 md:border-8 border-white rounded-none shadow-[12px_12px_0px_#f37c3a] overflow-hidden group">
          <Slideshow images={['/images/aoa/1.jpg', '/images/aoa/2.jpg', '/images/aoa/3.jpg']} />
        </div>

        {/* Декоративные звезды из Figma */}
        <div className="absolute -bottom-10 -left-10 text-[#fff] opacity-10 text-9xl font-black select-none pointer-events-none">***</div>
        <div className="absolute top-10 right-12 text-yellow-300 text-4xl hidden md:block">✦ ✦ ✦</div>
      </section>

      {/* 4. ТАЙМЛАЙН И ХРОНОЛОГИЯ (TIMELINE С ДАННЫМИ ИЗ FIGMA) */}
      <section id="timeline" className="py-24 px-4 md:px-12 bg-[#eae9e4] relative pattern-paper">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-20 tracking-tight text-[#1c1c1c]">
            {t.aoa_timelineTitle}
          </h2>

          <div className="relative">
            {/* Направляющая линия бруталистичного таймлайна */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2 bg-gradient-to-b from-[#36bc87] via-[#0294df] to-[#f37c3a] hidden md:block"></div>

            {/* БЛОК 2023 ГОД */}
            <TimelineCard 
              year={2023}
              badgeText={t.aoa_2023_badge}
              badgeColor="bg-[#36bc87]"
              title={t.aoa_2023_title}
              description={t.aoa_2023_desc}
              bulletPoints={[
                t.aoa_2023_bullet1,
                t.aoa_2023_bullet2
              ]}
              isReversed={false}
            />

            {/* БЛОК 2024 ГОД */}
            <TimelineCard 
              year={2024}
              badgeText={t.aoa_2024_badge}
              badgeColor="bg-[#0294df]"
              title={t.aoa_2024_title}
              description={t.aoa_2024_desc}
              bulletPoints={[
                t.aoa_2024_bullet1,
                t.aoa_2024_bullet2,
                t.aoa_2024_bullet3
              ]}
              isReversed={true}
            />

            {/* БЛОК 2025 ГОД */}
            <TimelineCard 
              year={2025}
              badgeText={t.aoa_2025_badge}
              badgeColor="bg-[#f37c3a]"
              title={t.aoa_2025_title}
              description={t.aoa_2025_desc}
              isReversed={false}
            />

          </div>
        </div>
      </section>

      {/* 5. ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ / ACCORDION) */}
      <section className="py-24 px-6 md:px-16 bg-white border-t-4 border-black">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {t.aoa_faqTitle}
            </h2>
            <Star className="fill-yellow-400 text-black w-8 h-8 hidden md:block" />
          </div>
          
          <div className="space-y-5">
            <FaqItem 
              question={t.aoa_faq1_q}
              answer={t.aoa_faq1_a}
            />
            <FaqItem 
              question={t.aoa_faq2_q}
              answer={t.aoa_faq2_a}
            />
            <FaqItem 
              question={t.aoa_faq3_q}
              answer={t.aoa_faq3_a}
            />
            <FaqItem 
              question={t.aoa_faq4_q}
              answer={t.aoa_faq4_a}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// --- ВСПОМОГАТЕЛЬНЫЙ КОМПОНЕНТ: КАРТОЧКА ТАЙМЛАЙНА ---
function TimelineCard({ 
  year, 
  badgeText, 
  badgeColor, 
  title, 
  description, 
  bulletPoints, 
  isReversed 
}: TimelineCardProps): React.JSX.Element {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between mb-20 last:mb-0 relative z-10 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Карточка контента */}
      <div className="w-full md:w-[45%] bg-white p-6 md:p-8 border-3 border-black shadow-[8px_8px_0px_rgba(28,28,28,1)] transition-transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-block ${badgeColor} text-white px-3 py-1 text-xs font-black uppercase tracking-wider border-2 border-black`}>
            {badgeText}
          </span>
          <span className="text-xs font-mono font-bold text-gray-400">⚡ COMPONENT_DATA</span>
        </div>
        
        <h3 className="text-2xl font-black mb-3 tracking-tight">{title}</h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">{description}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2 border-t-2 border-dashed border-gray-200 pt-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Круглый Бруталистичный Маркер Года на Линии */}
      <div className={`w-20 h-20 rounded-full border-4 border-black text-white ${badgeColor} flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] my-6 md:my-0`}>
        {year}
      </div>

      {/* Пустое пространство для шахматного порядка */}
      <div className="w-full md:w-[45%] hidden md:block"></div>
    </div>
  );
}

function FaqItem({ question, answer }: FaqItemProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-3 border-black rounded-none shadow-[4px_4px_0px_rgba(28,28,28,1)] bg-white transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left font-black text-base md:text-lg bg-[#36bc87] hover:bg-[#47cd98] text-white transition-colors border-b-3 border-transparent"
        style={{ borderBottomColor: isOpen ? '#1c1c1c' : 'transparent' }}
      >
        <span>{question}</span>
        <Plus className={`w-5 h-5 transform transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      
      <div 
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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