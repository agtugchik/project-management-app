import React from 'react';
import cl from './TeamLogo.module.scss';
import logo from '../../../../assets/team_logo.svg';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../../../helpers/routerPaths';

const TeamLogo = () => {
  return (
    <nav className={cl.container}>
      <NavLink className={cl.link} to={Paths.WelcomePage}>
        <img className={cl.logo} src={logo} alt="App logo"></img>
        <span className={cl.logo_title}>OneTeam</span>
      </NavLink>
    </nav>
  );
};

export default TeamLogo;
