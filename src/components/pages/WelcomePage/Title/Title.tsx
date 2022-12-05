import { useTranslate } from '../../../../hooks/useTranslate';
import React from 'react';
import cl from './Title.module.scss';

const Title: React.FC = (): JSX.Element => {
  const T = useTranslate();

  return (
    <div className={cl.wrapper}>
      <div className={cl.container}>
        <h1 className={cl.title}>OneTeam</h1>
        <div className={cl.tagline}>{T('WelcomePage.titleTagline')}</div>
        <div className={cl.proposal}>{T('WelcomePage.titleProposal1')}</div>
        <div className={cl.proposal}>{T('WelcomePage.titleProposal2')}</div>
      </div>
    </div>
  );
};

export default Title;
