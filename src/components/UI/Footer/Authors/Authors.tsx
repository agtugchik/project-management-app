import React from 'react';
import cl from './Authors.module.scss';
import Github from '../../../../assets/github.svg';

const Authors = () => {
  return (
    <div className={cl.container}>
      <a className={cl.author} target="_blank" rel="noreferrer" href="https://github.com/agtugchik">
        <img className={cl.icon} src={Github} alt="GitHub"></img>
        <span className={cl.nickname}>agtugchik</span>
      </a>
      <a className={cl.author} target="_blank" rel="noreferrer" href="https://github.com/atcherdsd">
        <img className={cl.icon} src={Github} alt="GitHub"></img>
        <span className={cl.nickname}>atcherdsd</span>
      </a>
      <a
        className={cl.author}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/mazeltovik"
      >
        <img className={cl.icon} src={Github} alt="GitHub"></img>
        <span className={cl.nickname}>mazeltovik</span>
      </a>
    </div>
  );
};

export default Authors;
