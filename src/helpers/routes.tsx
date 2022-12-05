import { Navigate } from 'react-router-dom';
import { Paths } from './routerPaths';
import WelcomePage from '../components/pages/WelcomePage/WelcomePage';
import React from 'react';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import SignInPage from '../components/pages/SignInPage/SignInPage';
import SignUpPage from '../components/pages/SignUpPage/SignUpPage';
import EditProfilePage from '../components/pages/EditProfilePage/EditProfile.Page';
import MainPage from '../components/pages/MainPage/MainPage';
import { IRoutes } from '../types/navbarType';
import BoardPage from '../components/pages/BoardPage/BoardPage';

const routes: IRoutes = {
  public: [
    {
      path: '/',
      element: <Navigate to={Paths.WelcomePage} />,
    },
    {
      path: Paths.WelcomePage,
      element: <WelcomePage />,
    },
    {
      path: Paths.SignIn,
      element: <SignInPage />,
    },
    {
      path: Paths.SignUp,
      element: <SignUpPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  private: [
    {
      path: Paths.MainPage,
      element: <MainPage />,
    },
    {
      path: `${Paths.MainPage}/:id`,
      element: <BoardPage />,
    },
    {
      path: Paths.EditProfilePage,
      element: <EditProfilePage />,
    },
  ],
};

export default routes;
