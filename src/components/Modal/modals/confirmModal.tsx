import React from 'react';
import cl from './confirmModal.module.scss';
import { ModalProp } from 'types/modalType';
import { useTranslate } from '../../../hooks/useTranslate';

export default function ConfirmModal(props: ModalProp) {
  const { handler, isLoading } = props;
  const T = useTranslate();
  return (
    <div className={cl.modal__container} onClick={handler}>
      <div className={cl.modal__content}>
        <p className={cl.warning}>{T('Modal.warning')}</p>
        <div className={cl.modal__content__buttons}>
          <input
            type="button"
            className={cl.confirmButton}
            disabled={isLoading ? true : false}
            defaultValue={T('Modal.confirmBtn')}
          ></input>
          <input
            type="button"
            className={cl.confirmButton}
            disabled={isLoading ? true : false}
            defaultValue={T('Modal.disconfirmBtn')}
          ></input>
        </div>
      </div>
    </div>
  );
}
