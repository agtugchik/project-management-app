import Spinner from '../../components/UI/Spinner/Spinner';
import { useTranslate } from '../../hooks/useTranslate';
import React, { RefObject, useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UpdateProps, FormValues } from 'types/formTypes';
import cl from '../updateUserForm/UpdateForm.module.scss';
import ConfirmModal from '../Modal/modals/confirmModal';
import { Modal } from '../Modal/modal';
import editLogo from '../../assets/edit-icon.svg';

function UpdateUserForm(props: UpdateProps) {
  const {
    handlerSubmit,
    isLoading,
    login,
    name,
    isSuccess,
    isUpdating,
    deleteUser,
    isModalOpen,
    confirmDeleteUser,
  } = props;

  const [incorrectData, setIncorrectData] = useState(false);
  // Use Translate
  const T = useTranslate();
  // Use Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ criteriaMode: 'all', mode: 'onChange' });

  const formRef = useRef() as RefObject<HTMLFormElement>;

  const onSubmit = handleSubmit((data) => {
    handlerSubmit(data);
  });

  const handleDeleteUser = useCallback(() => {
    if (
      Array.from(formRef.current!.elements).some(
        (item) => (item as HTMLInputElement).value === ''
      ) ||
      errors.login ||
      errors.name ||
      errors.password
    ) {
      setIncorrectData(true);
    } else {
      setIncorrectData(false);
      deleteUser();
    }
  }, [deleteUser, errors.login, errors.name, errors.password]);

  return (
    <>
      {isLoading && (
        <div className={cl.icon_loader_wrapper}>
          <div className={cl.icon_loader}></div>
        </div>
      )}
      {!isLoading && (
        <form className={cl.form} onSubmit={onSubmit} ref={formRef}>
          <div className={cl.form__avatar__wrapper}>
            <img className={cl.form__edit__logo} src={editLogo} alt="Edit Logo"></img>
            <div className={cl.form__userData__wrapper}>
              <div className={cl.form__nameData}>
                <span className={cl.form__nameSign}>{T('SignUpForm.formLabelName')}: </span>
                <span className={cl.form__name__data}>{name}</span>
              </div>
              <div className={cl.form__loginData}>
                <span className={cl.form__loginSign}>{T('SignUpForm.formLogin')}: </span>
                <span className={cl.form__name__data}>{login}</span>
              </div>
            </div>
          </div>
          <p className={cl.form__description}>{T('SignUpForm.edit')}</p>
          {isSuccess && (
            <div className={cl.form__group}>
              <input
                type="text"
                id={cl.name}
                className={cl.form__input}
                placeholder=" "
                autoComplete="off"
                defaultValue={isSuccess ? name : ''}
                {...register('name', {
                  required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
                  pattern: {
                    value: /^[a-zA-Zа-я\s]+$/i,
                    message: `${T('SignUpForm.formOnlyLetter')}`,
                  },
                  minLength: { value: 2, message: `${T('SignUpForm.formMinLegthNameMsg')}` },
                })}
              ></input>
              <label htmlFor={cl.name} className={cl.form__label}>
                {T('SignUpForm.formLabelName')}
              </label>
              {errors.name?.types &&
                Object.entries(errors.name?.types).map(([type, message]) => (
                  <p key={type} className={cl.error}>
                    {message}
                  </p>
                ))}
            </div>
          )}
          {isSuccess && (
            <div className={cl.form__login}>
              <input
                type="text"
                id={cl.login}
                className={cl.form__input}
                placeholder=" "
                autoComplete="off"
                defaultValue={login}
                {...register('login', {
                  required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/i,
                    message: `${T('SignUpForm.formLoginPatternMsg')}`,
                  },
                  minLength: { value: 5, message: `${T('SignUpForm.formMinLengthMsg')}` },
                })}
              ></input>
              <label htmlFor={cl.login} className={cl.form__label}>
                {T('SignUpForm.formLogin')}
              </label>
              {errors.login?.types &&
                Object.entries(errors.login?.types).map(([type, message]) => (
                  <p key={type} className={cl.error}>
                    {message}
                  </p>
                ))}
            </div>
          )}
          {isSuccess && (
            <div
              className={
                errors.login?.types
                  ? `${cl.form__password} ${cl.form__margin__pass}`
                  : `${cl.form__password}`
              }
            >
              <input
                type="password"
                id={cl.password}
                className={cl.form__input}
                placeholder=" "
                {...register('password', {
                  required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
                  pattern: {
                    value: /^[\w+а-я0-9]+$/i,
                    message: `${T('SignUpForm.formLoginPatternMsg')}`,
                  },
                  minLength: { value: 5, message: `${T('SignUpForm.formMinLengthMsg')}` },
                  validate: (password: string) => {
                    const reg = /\d+/;
                    if (!reg.test(password) && password.length > 0)
                      return `${T('SignUpForm.formPasswordValidateMsg')}`;
                  },
                })}
              ></input>
              <label htmlFor={cl.password} className={cl.form__label}>
                {T('SignUpForm.formPassword')}
              </label>
              {errors.password?.types &&
                Object.entries(errors.password?.types).map(([type, message]) => (
                  <p key={type} className={cl.error}>
                    {message}
                  </p>
                ))}
            </div>
          )}
          {isSuccess && (
            <div
              className={
                errors.password?.types
                  ? `${cl.form__buttons} ${cl.form__margin}`
                  : `${cl.form__buttons}`
              }
            >
              {isUpdating && (
                <div className={cl.form__spinner}>
                  <Spinner />
                </div>
              )}
              <input
                type="submit"
                className={cl.form__button}
                value={T('SignUpForm.updateBtn')}
                disabled={isUpdating ? true : false}
              ></input>
              <input
                type="button"
                className={cl.form__deleteButton}
                defaultValue={T('SignUpForm.deleteBtn')}
                disabled={isUpdating ? true : false}
                onClick={handleDeleteUser}
              ></input>
            </div>
          )}
        </form>
      )}
      {incorrectData && (
        <Modal>
          <div className={cl.modal__container}>
            <p className={cl.error__block}>{T('SignUpForm.messageBeforeDelete')}</p>
          </div>
        </Modal>
      )}
      {isModalOpen && (
        <Modal>
          <ConfirmModal handler={confirmDeleteUser}></ConfirmModal>
        </Modal>
      )}
    </>
  );
}

export default UpdateUserForm;
