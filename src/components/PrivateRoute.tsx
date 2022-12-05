import { useAppSelector } from '../hooks/redux';
import { Outlet, Navigate } from 'react-router-dom';
import { navbarSelector } from '../store/selectors/selectors';
import React from 'react';
import { Paths } from '../helpers/routerPaths';

const PrivateRoute = () => {
  const { hasToken } = useAppSelector(navbarSelector);
  return hasToken ? <Outlet /> : <Navigate to={Paths.WelcomePage} />;
};

export default PrivateRoute;
