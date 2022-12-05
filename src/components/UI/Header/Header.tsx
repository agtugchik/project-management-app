import React, { useState, useEffect } from 'react';
import cl from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import TeamLogo from './TeamLogo/TeamLogo';
import BurgerSwitch from './BurgerSwitch/BurgerSwitch';

const Header = () => {
  const [activeClass, setActiveClass] = useState(cl.container);

  const scrollHandler = () => {
    if (window.pageYOffset === 0) setActiveClass(cl.container);
    else setActiveClass(`${cl.container} ${cl.container_scrolled}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header className={activeClass}>
      <div className={cl.wrapper}>
        <TeamLogo />
        <Navbar />
        <LanguageSwitch />
        <BurgerSwitch />
      </div>
    </header>
  );
};

export default Header;
