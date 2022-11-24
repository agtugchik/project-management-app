import React, { useEffect } from 'react';
import cl from './Navbar.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paths } from '../../../helpers/routerPaths';
import { activeClassHandler } from '../../../helpers/activeClassHandler';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useTranslate } from '../../../hooks/useTranslate';
import { navbarSelector } from '../../../store/selectors/selectors';
import { setHasToken, setMenu } from '../../../store/reducers/NavbarReducer';

const isActiveCheck = ({ isActive }: { isActive: boolean }) =>
  activeClassHandler(isActive, cl.link, cl.link_active);

const Navbar = () => {
  const T = useTranslate();

  const { isOpenedMenu, hasToken } = useAppSelector(navbarSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setHasToken(true));
    }
  }, [dispatch, hasToken]);

  const handleMenuClick = () => {
    isOpenedMenu ? dispatch(setMenu(!isOpenedMenu)) : null;
  };
  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(setHasToken(false));
    navigate('/');
  };

  return (
    <div className={isOpenedMenu ? `${cl.overlay}` : ''} onClick={handleMenuClick}>
      <nav className={isOpenedMenu ? `${cl.container_opened_menu}` : `${cl.container}`}>
        {!hasToken && (
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
        {hasToken && (
          <>
            <NavLink className={isActiveCheck} to={Paths.MainPage}>
              {T('Navbar.main')}
            </NavLink>
            <NavLink className={isActiveCheck} to={Paths.EditProfilePage}>
              {T('Navbar.edit')}
            </NavLink>
            <button className={cl.button}>{T('Navbar.newboard')}</button>
            <button className={cl.button} onClick={signOut}>
              {T('Navbar.signout')}{' '}
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
