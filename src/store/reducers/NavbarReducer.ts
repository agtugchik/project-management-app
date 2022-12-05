import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavbarState } from '../../types/navbarType';

const initialState: NavbarState = {
  isOpenedMenu: false,
  hasToken: false,
};

export const NavbarSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<boolean>) {
      state.isOpenedMenu = action.payload;
    },
    setHasToken(state, action: PayloadAction<boolean>) {
      state.hasToken = action.payload;
    },
    removeUserData: (state) => {
      state.hasToken = false;
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    },
  },
});

export const { setMenu, setHasToken, removeUserData } = NavbarSlice.actions;

export default NavbarSlice.reducer;
