import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeUserData } from '../store/reducers/NavbarReducer';
import { useAppDispatch } from '../hooks/redux';
import jwtDecode from 'jwt-decode';

export interface JwtToken {
  exp: number;
}

const AuthVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    let decodedJwt: JwtToken;
    if (token) {
      decodedJwt = jwtDecode(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(removeUserData());
        navigate('/');
      }
    }
  }, [dispatch, location, navigate]);

  return <div></div>;
};

export default AuthVerify;
