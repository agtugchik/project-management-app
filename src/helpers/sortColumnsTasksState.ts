import { IColumn, ITask } from '../types/boardTypes';

export const sortColumnOrBoard = (
  column: ITask[] | IColumn[],
  sourceIndex: number,
  destinationIndex: number
) => {
  const item = [...column];
  item.sort((a, b) => a.order - b.order);
  const replaceableItem = item.splice(sourceIndex, 1);
  item.splice(destinationIndex, 0, replaceableItem[0]);
  return item;
};

export const sortColumnsTasks = (
  columnSource: ITask[],
  columnDestination: ITask[],
  sourceIndex: number,
  destinationIndex: number
) => {
  const newColumnSource = [...columnSource];
  const newColumnDestination = [...columnDestination];
  newColumnSource.sort((a, b) => a.order - b.order);
  newColumnDestination.sort((a, b) => a.order - b.order);
  const replaceableItem = newColumnSource.splice(sourceIndex, 1);
  newColumnDestination.splice(destinationIndex, 0, replaceableItem[0]);
  return [newColumnSource, newColumnDestination];
};
