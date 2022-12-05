import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LanguageReducer from './reducers/LanguageReducer';
import BoardReducer from './reducers/BoardReducer';
import SearchbarReducer from './reducers/SearchbarReducer';
import { authCalls } from '../API/authCalls';
import { boardsCalls } from '../API/boardsCalls';
import { columnsCalls } from '../API/columnsCalls';
import { tasksCalls } from '../API/tasksCalls';
import { enableMapSet } from 'immer';
import NavbarReducer from './reducers/NavbarReducer';
import { editProfileCalls } from '../API/editProfileCalls';
import SignUpDataReducer from './reducers/SignUpDataReducer';
import { usersCalls } from '../API/usersCalls';
import ModalReducer from './reducers/ModalReducer';

enableMapSet();

const rootReducer = combineReducers({
  LanguageReducer,
  BoardReducer,
  SearchbarReducer,
  NavbarReducer,
  SignUpDataReducer,
  ModalReducer,
  [authCalls.reducerPath]: authCalls.reducer,
  [editProfileCalls.reducerPath]: editProfileCalls.reducer,
  [boardsCalls.reducerPath]: boardsCalls.reducer,
  [columnsCalls.reducerPath]: columnsCalls.reducer,
  [tasksCalls.reducerPath]: tasksCalls.reducer,
  [usersCalls.reducerPath]: usersCalls.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(
        authCalls.middleware,
        editProfileCalls.middleware,
        boardsCalls.middleware,
        columnsCalls.middleware,
        tasksCalls.middleware,
        usersCalls.middleware
      ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
