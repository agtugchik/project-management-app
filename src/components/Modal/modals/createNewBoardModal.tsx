import { useCreateNewBoardMutation } from '../../../API/boardsCalls';
import React, { useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../../API/usersCalls';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setModalState } from '../../../store/reducers/ModalReducer';
import { CreateBoardModalForm, TranformUsersResponse, UsersState } from '../../../types/modalType';
import { filterUsers } from '../../../helpers/filterUsersResponse';
import CreateNewBoardForm from '../../createNewBoardForm/createNewBoardForm';
import { Paths } from '../../../helpers/routerPaths';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CreacteNewBoardModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [invitedUsers, setInvitedUsers] = useState<string[]>([]);
  // Use state for autocomplete
  ////////////////////////////
  const [autoCompContent, setAutoCompContent] = useState<UsersState>({
    filteredOptions: [],
    currentValue: '',
  });

  const [createNewBoard, { isLoading, isSuccess }] = useCreateNewBoardMutation();

  // Redux state of is modal open
  const { isModalOpen } = useAppSelector((state) => state.ModalReducer);
  const dispatch = useAppDispatch();
  // Get users
  const { data: responseUsers, isFetching: isUserLoading } = useGetUsersQuery('/users', {
    skip: !isModalOpen,
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    if (isSuccess) {
      dispatch(setModalState(false));
    }
  }, [dispatch, isSuccess]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const currentValue = (e.target as HTMLInputElement).value;
    setAutoCompContent({
      currentValue: currentValue,
      filteredOptions: filterUsers((responseUsers as TranformUsersResponse).users, currentValue),
    });
  }

  function onClickChooseUser(e: React.MouseEvent<HTMLParagraphElement>) {
    const choosenUser = (e.target as HTMLParagraphElement).textContent;
    setInvitedUsers((prevState) => {
      if (prevState.includes(String(choosenUser))) return prevState;
      else return [...prevState, String(choosenUser)];
    });
    setAutoCompContent((prevState) => {
      return { ...prevState, currentValue: '' };
    });
  }

  // Submit or Cancel handler for modal form
  ///////////////////////
  function submitHandler(data: CreateBoardModalForm) {
    const { title } = data;
    const body = {
      title: `${title}`,
      owner: (responseUsers as TranformUsersResponse).currentUser?.login,
      users: invitedUsers,
    };
    createNewBoard(body);
    if (!location.pathname.includes(Paths.MainPage)) {
      navigate(Paths.MainPage);
    }
  }

  function clickHandler() {
    dispatch(setModalState(false));
  }

  function removeUserOnClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (target.tagName == 'IMG') {
      const removeUser = (target.previousSibling as HTMLParagraphElement).textContent;
      setInvitedUsers((prevState) => {
        return prevState.filter((invitedUser) => {
          return invitedUser !== removeUser;
        });
      });
    }
  }

  return (
    <CreateNewBoardForm
      submitHandler={submitHandler}
      isLoading={isLoading}
      clickHandler={clickHandler}
      handleChange={handleChange}
      autoCompContent={autoCompContent.currentValue}
      filteredUsers={autoCompContent.filteredOptions}
      setAutoCompContent={setAutoCompContent}
      onClickChooseUser={onClickChooseUser}
      invitedUsers={invitedUsers}
      removeUserOnClick={removeUserOnClick}
      isUserLoading={isUserLoading}
    ></CreateNewBoardForm>
  );
}
