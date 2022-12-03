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
  const { data, isLoading } = useGetAllBoardsQuery(null, { refetchOnMountOrArgChange: true });
  return (
    <>
      {isLoading ? (
        <div className={cl.icon_loader_wrapper}>
          <div className={cl.icon_loader}></div>
        </div>
      ) : (
        <div className={cl.container}>
          <h1 className={cl.title}>{T('MainPage.boards')}</h1>
          <Searchbar />
          <div className={cl.boardsContainer}>
            {data &&
              (data as IBoard[])
                .filter(
                  (board: IBoard): boolean =>
                    board.title.toLowerCase().includes(searchbar.toLowerCase()) ||
                    board.owner.toLowerCase().includes(searchbar.toLowerCase()) ||
                    board.users.toString().toLowerCase().includes(searchbar.toLowerCase())
                )
                .map((board) => <Board key={board._id} board={board} />)}
            <AddBoard />
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
