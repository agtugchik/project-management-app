import React from 'react';
import Authors from './Authors/Authors';
import Copyright from './Copyright/Copyright';
import cl from './Footer.module.scss';
import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className={cl.container}>
      <div className={cl.wrapper}>
        <Logo />
        <Authors />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
