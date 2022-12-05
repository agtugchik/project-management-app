import SignInForm from '../../SignInForm/SignInForm';
import React, { useEffect, useState } from 'react';
import cl from '../SignUpPage/SignUpPage.module.scss';
import { FormValues } from 'types/formTypes';
import { useSignInAuthQuery } from '../../../API/authCalls';
import { Modal } from '../../../components/Modal/modal';
import ModalFormResponse from '../../Modal/modals/modalFormResponse';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../helpers/routerPaths';
import { useAppDispatch } from '../../../hooks/redux';
import { setHasToken } from '../../../store/reducers/NavbarReducer';

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const [signInData, setSignInData] = useState<FormValues>({ login: '', password: '' });
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isError, error } = useSignInAuthQuery(
    {
      path: 'auth/signin',
      patch: signInData,
    },
    { skip: !signInData.login }
  );
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data._id);
      navigate(`/${Paths.MainPage}`);
      dispatch(setHasToken(true));
    }
  }, [data?._id, data?.token, dispatch, isSuccess, navigate]);
  function handleSubmit(data: FormValues) {
    setSignInData(data);
  }
  return (
    <div className={cl.container}>
      <SignInForm handlerSubmit={handleSubmit} isLoading={isLoading}></SignInForm>
      {isError && (
        <Modal>
          <ModalFormResponse error={error as FetchBaseQueryError}></ModalFormResponse>
        </Modal>
      )}
    </div>
  );
};

export default SignInPage;
