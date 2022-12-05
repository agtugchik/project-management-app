import { useTranslate } from '../../../hooks/useTranslate';
import React from 'react';
import cl from './NotFoundPage.module.scss';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../../helpers/routerPaths';
import { useAppSelector } from '../../../hooks/redux';
import { languageSelector } from '../../../store/selectors/selectors';

const NotFoundPage: React.FC = (): JSX.Element => {
  const T = useTranslate();
  const { language } = useAppSelector(languageSelector);

  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>404</h1>
        <p className={language === 'EN' ? `${cl.declaration} ${cl.transform}` : cl.declaration}>
          {T('NotFoundPage.declaration')}
        </p>
        <button className={cl.button}>
          <NavLink className={cl.link} to={Paths.WelcomePage}>
            {T('NotFoundPage.button')}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
