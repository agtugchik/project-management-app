import React from 'react';
import { useForm } from 'react-hook-form';
import { CreateBoardModalForm, CreacteNewColumnModalProps } from '../../../types/modalType';
import cl from './creacteNewBoardModal.module.scss';
import { useTranslate } from '../../../hooks/useTranslate';
import Spinner from '../../UI/Spinner/Spinner';

export default function CreacteNewTaskModal(props: CreacteNewColumnModalProps) {
  const { submitHandler, isLoading, clickHandler } = props;
  // Use Translate
  const T = useTranslate();
  // Use Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBoardModalForm>({ criteriaMode: 'all', mode: 'onChange' });
  // Submit handler
  ///////////////////////////
  const onSubmit = handleSubmit(submitHandler);
  return (
    <div className={cl.modal__container} onClick={clickHandler}>
      <div className={cl.modal__content}>
        <h3 className={cl.modal__title}>{T('Modal.createTaskTitle')}</h3>
        <form className={cl.form} onSubmit={onSubmit}>
          <div className={cl.form__group}>
            <input
              type="text"
              id={cl.title}
              className={cl.form__input}
              placeholder=" "
              autoComplete="off"
              defaultValue={''}
              {...register('title', {
                required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
                pattern: {
                  value: /^[a-zA-Zа-я0-9\s,.!?:'"]+$/i,
                  message: `${T('SignUpForm.formOnlyLetterNumber')}`,
                },
                minLength: { value: 2, message: `${T('SignUpForm.formMinLegthNameMsg')}` },
              })}
            ></input>
            <label htmlFor={cl.title} className={cl.form__label}>
              {T('Modal.title')}
            </label>
            {errors.title?.types &&
              Object.entries(errors.title?.types).map(([type, message]) => (
                <p key={type} className={cl.error}>
                  {message}
                </p>
              ))}
          </div>
          <div className={cl.form__buttons}>
            {isLoading && (
              <div className={cl.form__spinner}>
                <Spinner />
              </div>
            )}
            <input
              type="submit"
              className={cl.form__button}
              value={T('Modal.task')}
              disabled={isLoading ? true : false}
            ></input>
            <input
              type="button"
              id="cancelBtn"
              className={cl.form__button__cancel}
              value={T('Modal.cancelBtn')}
              disabled={isLoading ? true : false}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
