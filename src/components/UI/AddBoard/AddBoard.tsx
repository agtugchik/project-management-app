import React from 'react';
import cl from './AddBoard.module.scss';
import { useTranslate } from '../../../hooks/useTranslate';
import { Modal } from '../../../components/Modal/modal';
import CreacteNewBoardModal from '../../../components/Modal/modals/createNewBoardModal';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setModalState } from '../../../store/reducers/ModalReducer';

const AddBoard = () => {
  const T = useTranslate();
  const { isModalOpen } = useAppSelector((state) => state.ModalReducer);
  const dispatch = useAppDispatch();
  const onClickCreateNewBoard = async () => {
    dispatch(setModalState(true));
  };
  return (
    <>
      <button className={cl.container} onClick={onClickCreateNewBoard}>
        <div className={cl.circle}>
          <h2 className={cl.text}>{T('AddBoard.add')}</h2>
        </div>
      </button>
      {isModalOpen && (
        <Modal>
          <CreacteNewBoardModal></CreacteNewBoardModal>
        </Modal>
      )}
    </>
  );
};

export default AddBoard;
