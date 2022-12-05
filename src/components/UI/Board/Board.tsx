import React, { FC, MouseEvent, useEffect, useState } from 'react';
import cl from './Board.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDeleteBoardMutation } from '../../../API/boardsCalls';
import { useTranslate } from '../../../hooks/useTranslate';
import { Modal } from '../../../components/Modal/modal';
import ConfirmModal from '../../../components/Modal/modals/confirmModal';

interface IBoardProps {
  board: {
    owner: string;
    title: string;
    users: string[];
    _id: string;
  };
}

const Board: FC<IBoardProps> = ({ board }) => {
  const { _id: id, owner, title, users } = board;
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
    navigate(`/main/${id}`);
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
      <h3 className={cl.title}>{title}</h3>
      <h4 className={cl.subtitle}>
        {T('Board.created')} {owner}
      </h4>
      {users.length > 0 ? (
        <div className={cl.usersList__wrapper}>
          <select
            defaultValue="invited"
            className={cl.usersSelect}
            onClick={(e) => e.stopPropagation()}
          >
            <option className={cl.userText} value="invited" disabled>
              {T('Board.invitedUsers')}:
            </option>
            {users.map((user) => {
              return (
                <option className={cl.userItem} key={user + owner} value={user} disabled>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
      ) : null}
      <button className={cl.delete} onClick={(e) => deleteOnClick(e)}>
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
