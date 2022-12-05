import { RootState } from '../index';

export const navbarSelector = (state: RootState) => state.NavbarReducer;

export const languageSelector = (state: RootState) => state.LanguageReducer;
