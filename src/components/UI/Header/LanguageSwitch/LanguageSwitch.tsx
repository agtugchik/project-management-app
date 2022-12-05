import React from 'react';
import cl from './LanguageSwitch.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { LanguageSlice } from '../../../../store/reducers/LanguageReducer';

const LanguageSwitch = () => {
  const { language } = useAppSelector((state) => state.LanguageReducer);
  const { setLanguage } = LanguageSlice.actions;
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    if (language === 'EN') {
      dispatch(setLanguage('RU'));
      localStorage.setItem('language', 'RU');
    } else {
      dispatch(setLanguage('EN'));
      localStorage.setItem('language', 'EN');
    }
  };
  return (
    <div className={cl.container}>
      <div
        className={language === 'EN' ? cl.body : `${cl.body} ${cl.bodyRU}`}
        onClick={onClickHandler}
      >
        <div className={language === 'EN' ? cl.toggle : `${cl.toggle} ${cl.toggleRU}`} />
      </div>
    </div>
  );
};

export default LanguageSwitch;
