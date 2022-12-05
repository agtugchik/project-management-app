import React, { useState } from 'react';
import cl from './EditProfilePage.module.scss';
import {
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from '../../../API/editProfileCalls';
import UpdateUserForm from '../../updateUserForm/updateUserForm';
import { FormValues } from 'types/formTypes';
import { useAppDispatch } from '../../../hooks/redux';
import { setSignUpDataResponse } from '../../../store/reducers/SignUpDataReducer';
import { Modal } from '../../../components/Modal/modal';
import ModalFormResponse from '../../Modal/modals/modalFormResponse';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { removeUserData } from '../../../store/reducers/NavbarReducer';

const EditProfilePage = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    isSuccess,
    isLoading,
    data: responseData,
  } = useGetUserQuery({
    path: `users/${localStorage.getItem('id')}`,
  });
  const [updateUser, { isLoading: isUpdating, isError: isErrorUpdating, error: updateError }] =
    useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  // Обновление пользователя
  ////////////////////////////////////
  function handlerSubmit(data: FormValues) {
    updateUser({
      path: `users/${localStorage.getItem('id')}`,
      patch: data,
    })
      .unwrap()
      .then((data) => {
        dispatch(setSignUpDataResponse(data));
      })
      .catch((err) => {
        throw new Error(err.data.message);
      });
  }
  // Удаление пользователя
  /////////////////////////////////
  function deleteUserHandler() {
    setModalOpen(true);
  }
  function confirmDeleteUser(e: React.MouseEvent<HTMLElement>) {
    const target = (e.target as HTMLElement).closest('input');
    const value = target?.value;
    if (value == 'No' || value == 'Нет') {
      setModalOpen(false);
    }
    if (value == 'Yes' || value == 'Да') {
      setModalOpen(false);
      deleteUser({ path: `users/${localStorage.getItem('id')}` })
        .unwrap()
        .then(() => {
          dispatch(setSignUpDataResponse({ login: '', _id: '', name: '' }));
          dispatch(removeUserData());
        });
    }
  }

  return (
    <div className={cl.container}>
      <UpdateUserForm
        name={String(responseData?.name)}
        login={String(responseData?.login)}
        isLoading={isLoading}
        handlerSubmit={handlerSubmit}
        isSuccess={isSuccess}
        isUpdating={isUpdating}
        deleteUser={deleteUserHandler}
        isModalOpen={isModalOpen}
        confirmDeleteUser={confirmDeleteUser}
      ></UpdateUserForm>
      {isErrorUpdating && (
        <Modal>
          <ModalFormResponse error={updateError as FetchBaseQueryError}></ModalFormResponse>
        </Modal>
      )}
    </div>
  );
};

export default EditProfilePage;
