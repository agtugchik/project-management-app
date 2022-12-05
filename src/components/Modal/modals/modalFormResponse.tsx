import React from 'react';
import cl from './modalFormResponse.module.scss';
import type { ModalProp, Body } from 'types/formTypes';
export default function ModalFormResponse(props: ModalProp) {
  const errorStatus = props?.error ? (props?.error?.data as Body).message : '';
  return (
    <div className={cl.modal__container}>
      <p className={errorStatus ? cl.error__block : cl.succsess__block}>
        {errorStatus ? errorStatus : 'Success'}
      </p>
    </div>
  );
}
