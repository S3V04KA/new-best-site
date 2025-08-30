import React from 'react';
import { BoardProps } from '../types';
import BoardHeader from './BoardHeader';
import BoardMembersList from './BoardMembersList';

const Board: React.FC<BoardProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BoardHeader />
      <BoardMembersList />
    </div>
  );
};

export default Board;
