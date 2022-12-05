import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthVerify from './AuthVerify';
import routes from '../helpers/routes';
import { Paths } from '../helpers/routerPaths';
import { useAppSelector } from '../hooks/redux';
import { navbarSelector } from '../store/selectors/selectors';
import { useLocation } from 'react-router-dom';

const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hasToken } = useAppSelector(navbarSelector);

  useEffect(() => {
    if (hasToken) {
      if (location.pathname.includes(Paths.SignIn) || location.pathname.includes(Paths.SignUp))
        navigate(Paths.MainPage);
    }
  }, [hasToken, location.pathname, navigate]);

  return (
    <>
      <Routes>
        {routes.public.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        <Route element={<PrivateRoute />}>
          {routes.private.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </Routes>
      <AuthVerify />
    </>
  );
};

export default AppRouter;
