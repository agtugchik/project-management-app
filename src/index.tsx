import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { BrowserRouter } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/query';
import './reset.scss';

const store = setupStore();
setupListeners(store.dispatch);
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);
