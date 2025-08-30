import React from 'react';
import { BoardMember } from '../types';
import SocialIcon from './SocialIcon';

export interface BoardMemberCardProps {
  member: BoardMember;
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  return (
    <div className="border border-gray-300 w-full rounded-2xl shadow-xl shadow-gray-200 hover:shadow-violet-400/80 hover:shadow-2xl bg-white-100 hover:bg-gray-50 transition-all duration-300 max-h-min">
      <img 
        className="bg-cover object-cover object-top rounded-t-2xl min-h-[15rem] mx-auto h-[20em] w-full"
        height="225" 
        src={member.image}
        alt={member.name}
      />
      <div className="p-4">
        <div className="min-h-32">
          <p className="font-semibold text-xl py-2">{member.name}</p>
          <p className="font-light text-sm text-gray-700 text-left">{member.role}</p>
        </div>
        <div className="flex flex-wrap mt-2 space-x-4 align-bottom">
          <div className="flex flex-col py-2 space-y-0">
            <p className="font-semibold text-base">{member.position}</p>
            <p className="font-light text-sm">{member.board}</p>
          </div>
        </div>

        {/* Social Links */}
        <ul className="flex justify-center mt-5 space-x-2 p-[1em] items-center">
          {member.social.map((social, index) => (
            <li key={index}>
              <SocialIcon type={social.type} url={social.url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardMemberCard;
