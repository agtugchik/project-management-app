import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  isModalOpen: boolean;
};

const initialState: ModalState = {
  isModalOpen: false,
};

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setModalState } = modalStateSlice.actions;
export default modalStateSlice.reducer;
