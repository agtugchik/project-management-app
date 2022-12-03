import React, { FC, MouseEvent, useEffect, useState } from 'react';
import cl from './Board.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDeleteBoardMutation } from '../../../API/boardsCalls';
import { useTranslate } from '../../../hooks/useTranslate';
import { Modal } from '../../../components/Modal/modal';
import ConfirmModal from '../../../components/Modal/modals/confirmModal';
import wathcer from '../../../assets/watcher.svg';
import invited from '../../../assets/invited.svg';
import ownerImg from '../../../assets/owner.svg';

interface IBoardProps {
  board: {
    owner: string;
    title: string;
    users: string[];
    _id: string;
    access?: number;
  };
}

const Board: FC<IBoardProps> = ({ board }) => {
  const { _id: id, owner, title, users, access } = board;
  const navigate = useNavigate();
  const [deleteBoard, { isLoading }] = useDeleteBoardMutation();
  const T = useTranslate();
  //Modal manipulations
  ////////////////////////
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setModalOpen(false);
    }
  }, [isLoading]);
  ///////////////////////////////////////////////////
  const boardOnClick = () => {
    if (access === 30 || access === 31) navigate(`/main/${id}`);
  };

  const deleteOnClick = (e: MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  function confirmDeleteBoard(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    const target = (e.target as HTMLElement).closest('input');
    const value = target?.value;
    if (value == 'No' || value == 'Нет') {
      setModalOpen(false);
    }
    if (value == 'Yes' || value == 'Да') {
      deleteBoard(id);
    }
  }

  return (
    <div className={cl.container} onClick={boardOnClick}>
      <div className={cl.title_container}>
        <h3 className={cl.title}>{title}</h3>
        {access === 0 && <img className={cl.lock} src={wathcer}></img>}
        {access === 30 && <img className={cl.lock} src={invited}></img>}
        {access === 31 && <img className={cl.lock} src={ownerImg}></img>}
      </div>
      <h4 className={cl.subtitle}>
        {T('Board.created')} {owner}
      </h4>
      <p>{T('Board.invitedUsers')}</p>
      <ul>
        {users.map((user) => {
          return <li key={user + owner}>{user}</li>;
        })}
      </ul>
      <button
        className={cl.delete}
        onClick={(e) => deleteOnClick(e)}
        disabled={access === 31 ? false : true}
      >
        {T('Board.delete')}
      </button>
      {isModalOpen && (
        <Modal>
          <ConfirmModal handler={confirmDeleteBoard} isLoading={isLoading}></ConfirmModal>
        </Modal>
      )}
    </div>
  );
};

export default Board;
