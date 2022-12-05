import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ColumnStateType,
  ColumnPayloadProps,
  BoardStateType,
  BoardPayloadProps,
} from '../../types/BoardItemsLocalStateTypes';

const initialState = {
  boardColumns: <BoardStateType>new Map(),
  columnsTasks: <ColumnStateType>new Map(),
};

export const BoardSlice = createSlice({
  name: 'boardsLocalState',
  initialState,
  reducers: {
    setLocalColumnTasks(state, action: PayloadAction<ColumnPayloadProps>) {
      state.columnsTasks.set(action.payload[0], action.payload[1]);
    },
    setLocalBoardColumns(state, action: PayloadAction<BoardPayloadProps>) {
      state.boardColumns.set(action.payload[0], action.payload[1]);
    },
  },
});

export default BoardSlice.reducer;
