import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { BoardMember } from '../types';
import BoardMemberCard from './BoardMemberCard';

const BoardMembersList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: t.president,
      position: "President",
      role: t.presidentRole,
      board: t.boardXXII,
      image: "/images/Nika.jpg",
      social: [
        { type: "vk", url: "https://vk.com/v.machleidt", icon: "vk" },
        { type: "telegram", url: "https://t.me/v_sio", icon: "telegram" },
        { type: "mail", url: "mailto:veronika.machleidt@gmail.com", icon: "mail"}
      ]
    },
    {
      id: 2,
      name: t.secretary,
      position: "Secretary",
      role: t.secretaryRole,
      board: t.boardXXII,
      image: "/images/Anna.jpg",
      social: [
        { type: "vk", url: "https://vk.com/prprprrrr", icon: "vk" },
        { type: "telegram", url: "https://t.me/peachif1", icon: "telegram" }
      ]
    },
    {
      id: 3,
      name: t.treasurer,
      position: "Treasurer",
      role: t.treasurerRole,
      board: t.boardXXII,
      image: "/images/Varya.jpg",
      social: [
        { type: "vk", url: "https://vk.com/zhhhuravleva", icon: "vk" },
        { type: "telegram", url: "https://t.me/zhhhuravleva", icon: "telegram" }
      ]
    },
    {
      id: 4,
      name: t.vp4hr,
      position: "VP4HR",
      role: t.vp4hrRole,
      board: t.boardXXII,
      image: "/images/Ksysha.jpg",
      social: [
        { type: "vk", url: "https://vk.com/uhadiblinaa", icon: "vk" },
        { type: "telegram", url: "https://t.me/ksenomorff", icon: "telegram" },
      ]
    },
    {
      id: 5,
      name: t.vp4pr,
      position: "VP4PR",
      role: t.vp4prRole,
      board: t.boardXXII,
      image: "/images/Masha.jpg",
      social: [
        { type: "vk", url: "https://vk.com/khalinamaria", icon: "vk" },
        { type: "telegram", url: "https://t.me/kostareeva", icon: "telegram" }
      ]
    },
    {
      id: 6,
      name: t.vp4cr,
      position: "VP4CR",
      role: t.vp4crRole,
      board: t.boardXXII,
      image: "/images/Jenya.jpg",
      social: [
        { type: "vk", url: "https://vk.com/homutinnikova", icon: "vk" },
        { type: "telegram", url: "https://t.me/zececka", icon: "telegram" }
      ]
    },
  ];

  const nonBoardMembers: BoardMember[] = [
    {
      id: 7,
      name: t.iiCoord,
      position: "II Coordinator",
      role: t.iiCoordRole,
      board: t.boardXXII,
      image: "/images/Yana.jpg",
      social: [
        { type: "vk", url: "https://vk.com/yupivvvvv", icon: "vk" },
        { type: "telegram", url: "https://t.me/yehoyani", icon: "telegram" }
      ]
    },
    {
      id: 8,
      name: t.projCoord,
      position: "Project Coordinator",
      role: t.projCoordRole,
      board: t.boardXXII,
      image: "/images/Lera.jpg",
      social: [
        { type: "vk", url: "https://vk.com/kazuride", icon: "vk" },
        { type: "telegram", url: "https://t.me/shipochnic", icon: "telegram" }
      ]
    },
    {
      id: 9,
      name: t.itCoord,
      position: "IT Coordinator",
      role: t.itCoordRole,
      board: t.boardXXII,
      image: "/images/Seva.jpg",
      social: [
        { type: "vk", url: "https://vk.com/buwheat", icon: "vk" },
        { type: "telegram", url: "https://t.me/buwheat", icon: "telegram" },
        { type: "github", url: "https://github.com/S3V04KA", icon: "github" }
      ]
    },
  ];

  return (
    <section className="m-auto relative flex items-center justify-center"
      style={{background: "linear-gradient(179deg, #E2EAFDFF 0%, #073AFF00 97%)"}}>
      <div className="min-h-screen py-8 lg:w-[60%]">
        <p className="text-center text-4xl font-semibold py-4">{t.boardXXII}</p>
        <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 select-none">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
        <p className="text-center text-4xl font-semibold py-4">{t.nonBoardXXII}</p>
        <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 select-none">
          {nonBoardMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembersList;
