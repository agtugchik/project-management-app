import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import React from 'react';
import { setMenu } from '../../../../store/reducers/NavbarReducer';
import { navbarSelector } from '../../../../store/selectors/selectors';
import cl from './BurgerSwitch.module.scss';

const BurgerSwitch = () => {
  const { isOpenedMenu } = useAppSelector(navbarSelector);
  const dispatch = useAppDispatch();

  const handleBurger = () => {
    dispatch(setMenu(!isOpenedMenu));
  };

  return (
    <button className={cl.button_burger} onClick={handleBurger}>
      <svg className={cl.icon} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
  );
};

export default BurgerSwitch;
