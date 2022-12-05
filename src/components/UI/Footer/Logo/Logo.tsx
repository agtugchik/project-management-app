import React from 'react';
import logo from '../../../../assets/rs_school_logo.svg';
import cl from './Logo.module.scss';

const Logo = () => {
  return (
    <a target="_blank" rel="noreferrer" href="https://rs.school/react/">
      <img className={cl.logo} height="30" src={logo} alt="course logo" />
    </a>
  );
};

export default Logo;
