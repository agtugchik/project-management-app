import { useAppDispatch } from './redux';
import { BoardSlice } from '../store/reducers/BoardReducer';
import { ITask, IColumn } from '../types/boardTypes';

const tasksOrdering = (column: ITask[], destinationId?: string) => {
  if (destinationId) {
    const newColumn = column.map((item, index) => {
      const newItem = { ...item };
      newItem.columnId = destinationId;
      newItem.order = index;
      return newItem;
    });
    return newColumn;
  }
  const newColumn = column.map((item, index) => {
    const newItem = { ...item };
    newItem.order = index;
    return newItem;
  });
  return newColumn;
};

export const useSetLocalColumnTasks = () => {
  const dispatch = useAppDispatch();
  const { setLocalColumnTasks } = BoardSlice.actions;

  const setLocalColumnTasksHandler = (
    sourceId: string,
    columnSource: ITask[],
    destinationId?: string,
    columnDestination?: ITask[]
  ) => {
    if (destinationId && columnDestination) {
      dispatch(
        setLocalColumnTasks([destinationId, tasksOrdering(columnDestination, destinationId)])
      );
    }
    dispatch(setLocalColumnTasks([sourceId, tasksOrdering(columnSource)]));
  };

  return setLocalColumnTasksHandler;
};

const columnsOrdering = (columns: IColumn[]) => {
  const newBoard = columns.map((column, index) => {
    const newColumn = { ...column };
    newColumn.order = index;
    return newColumn;
  });
  return newBoard;
};

export const useSetLocalBoardColumns = () => {
  const dispatch = useAppDispatch();
  const { setLocalBoardColumns } = BoardSlice.actions;
  const setLocalBoardColumnsHandler = (sourceId: string, columns: IColumn[]) => {
    dispatch(setLocalBoardColumns([sourceId, columnsOrdering(columns)]));
  };

  return setLocalBoardColumnsHandler;
};
