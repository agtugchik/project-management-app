import React from 'react';
import cl from './MainPage.module.scss';
import { useGetAllBoardsQuery } from '../../../API/boardsCalls';
import { IBoard } from '../../../types/boardTypes';
import Board from '../../UI/Board/Board';
import { useTranslate } from '../../../hooks/useTranslate';
import Searchbar from '../../UI/Searchbar/Searchbar';
import { useAppSelector } from '../../../hooks/redux';
import AddBoard from '../../UI/AddBoard/AddBoard';

const MainPage = () => {
  const T = useTranslate();
  const { searchbar } = useAppSelector((state) => state.SearchbarReducer);
  const { data, isLoading } = useGetAllBoardsQuery(null);
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>{T('MainPage.boards')}</h1>
      <Searchbar />
      {isLoading ? (
        <h2 style={{ margin: 'auto' }}>Loading...</h2>
      ) : (
        <div className={cl.boardsContainer}>
          {data &&
            (data as IBoard[])
              .filter((board) => new RegExp(`${searchbar}`, 'i').test(board.title))
              .map((board) => <Board key={board._id} board={board} />)}
          <AddBoard />
        </div>
      )}
    </div>
  );
};

export default MainPage;
