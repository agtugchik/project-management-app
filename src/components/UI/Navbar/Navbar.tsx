import React, { useEffect, useState } from 'react';
import cl from './Navbar.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paths } from '../../../helpers/routerPaths';
import { activeClassHandler } from '../../../helpers/activeClassHandler';
import { useTranslate } from '../../../hooks/useTranslate';
import { navbarSelector } from '../../../store/selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { removeUserData, setMenu } from '../../../store/reducers/NavbarReducer';
import { Modal } from '../../../components/Modal/modal';
import CreacteNewBoardModal from '../../../components/Modal/modals/createNewBoardModal';
import { setModalState } from '../../../store/reducers/ModalReducer';

const isActiveCheck = ({ isActive }: { isActive: boolean }) =>
  activeClassHandler(isActive, cl.link, cl.link_active);

const Navbar = () => {
  const T = useTranslate();

  const { hasToken, isOpenedMenu } = useAppSelector(navbarSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLoadingLocal, setIsLoadingLocal] = useState(true);
  useEffect(() => {
    setIsLoadingLocal(false);
  }, []);

  //State for open or close window
  const { isModalOpen } = useAppSelector((state) => state.ModalReducer);
  const onClickCreateNewBoard = async () => {
    dispatch(setModalState(true));
  };

  const handleMenuClick = () => {
    isOpenedMenu ? dispatch(setMenu(!isOpenedMenu)) : null;
  };
  const signOut = () => {
    dispatch(removeUserData());
    navigate('/');
  };

  return (
    <div className={isOpenedMenu ? `${cl.overlay}` : ''} onClick={handleMenuClick}>
      <nav className={isOpenedMenu ? `${cl.container_opened_menu}` : `${cl.container}`}>
        {!hasToken && !isLoadingLocal && (
          <>
            <NavLink className={isActiveCheck} to={Paths.WelcomePage}>
              {T('Navbar.welcome')}
            </NavLink>
            <NavLink className={isActiveCheck} to={Paths.SignIn}>
              {T('Navbar.signin')}
            </NavLink>
            <NavLink className={isActiveCheck} to={Paths.SignUp}>
              {T('Navbar.signup')}
            </NavLink>
          </>
        )}
        {hasToken && !isLoadingLocal && (
          <>
            <NavLink className={isActiveCheck} to={Paths.MainPage}>
              {T('Navbar.main')}
            </NavLink>
            <NavLink className={isActiveCheck} to={Paths.EditProfilePage}>
              {T('Navbar.edit')}
            </NavLink>
            <button className={cl.button} onClick={onClickCreateNewBoard}>
              {T('Navbar.newboard')}
            </button>
            <button className={cl.button} onClick={signOut}>
              {T('Navbar.signout')}
            </button>
          </>
        )}
      </nav>
      {isModalOpen && (
        <Modal>
          <CreacteNewBoardModal></CreacteNewBoardModal>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
