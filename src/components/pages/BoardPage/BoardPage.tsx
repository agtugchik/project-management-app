import React, { useEffect, useState } from 'react';
import cl from './BoardPage.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetAllColumnsQuery, useCreateNewColumnMutation } from '../../../API/columnsCalls';
import { IBoard, IColumn, ITask } from '../../../types/boardTypes';
import Column from '../../UI/Column/Column';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { BoardSlice } from '../../../store/reducers/BoardReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { reorderTasksCall, reorderColumnsCall } from '../../../helpers/tasksColumnsReorderCalls';
import {
  useSetLocalColumnTasks,
  useSetLocalBoardColumns,
} from '../../../hooks/useSetLocalStateBoards';
import { sortColumnOrBoard, sortColumnsTasks } from '../../../helpers/sortColumnsTasksState';
import { useGetBoardQuery } from '../../../API/boardsCalls';
import { useTranslate } from '../../../hooks/useTranslate';
import { Modal } from '../../Modal/modal';
import CreacteNewColumnModal from '../../Modal/modals/createNewColumnModal';
import { CreateBoardModalForm } from '../../../types/modalType';

const BoardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const boardId = location.pathname.replace('/main/', '');
  const { data } = useGetAllColumnsQuery(boardId);
  const { data: boardProps } = useGetBoardQuery(boardId, { refetchOnMountOrArgChange: true });
  const [createNewColumn, { isLoading: isCreatingColumn }] = useCreateNewColumnMutation();
  const { columnsTasks, boardColumns } = useAppSelector((state) => state.BoardReducer);
  const { setLocalBoardColumns } = BoardSlice.actions;
  const dispatch = useAppDispatch();
  const reorderLocalTasksState = useSetLocalColumnTasks();
  const reorderLocalColumnsState = useSetLocalBoardColumns();
  const T = useTranslate();

  useEffect(() => {
    if (data) dispatch(setLocalBoardColumns([boardId, [...(data as IColumn[])]]));
  }, [boardId, data, dispatch, setLocalBoardColumns]);
  //State for open or close window
  ///////////////////////////////////
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!isCreatingColumn) {
      setModalOpen(false);
    }
  }, [isCreatingColumn]);
  //////////////////////////////

  const backToMainOnClick = () => {
    navigate(`/main`);
  };

  const addColumnOnClick = () => {
    setModalOpen(true);
  };

  function clickHandler(e: React.MouseEvent<HTMLInputElement>) {
    const input = (e.target as HTMLElement).closest('input');
    const value = input?.value;
    if (value && (value == 'Cancel' || value == 'Отмена')) {
      setModalOpen(false);
    }
  }

  function submitHandler(formData: CreateBoardModalForm) {
    const { title } = formData;
    createNewColumn({
      boardId,
      body: { title: `${title}`, order: (data as []).length },
    });
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    if (type === 'column') {
      const columns = sortColumnOrBoard(
        boardColumns.get(boardId) as IColumn[],
        source.index,
        destination.index
      ) as IColumn[];

      reorderLocalColumnsState(source.droppableId, columns);

      reorderColumnsCall(columns);

      return;
    }

    if (destination.droppableId === source.droppableId) {
      const column = sortColumnOrBoard(
        columnsTasks.get(source.droppableId) as ITask[],
        source.index,
        destination.index
      ) as ITask[];

      reorderLocalTasksState(source.droppableId, column);

      reorderTasksCall(column, source.droppableId);

      return;
    } else if (destination.droppableId !== source.droppableId) {
      const [columnSource, columnDestination] = sortColumnsTasks(
        columnsTasks.get(source.droppableId) as ITask[],
        columnsTasks.get(destination.droppableId) as ITask[],
        source.index,
        destination.index
      );

      reorderLocalTasksState(
        source.droppableId,
        columnSource,
        destination.droppableId,
        columnDestination
      );

      reorderTasksCall(
        columnSource,
        source.droppableId,
        columnDestination,
        destination.droppableId
      );

      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={Number(boardProps?.access) > 0 ? cl.granted : cl.denied}>
        <div className={cl.container}>
          <h1 className={cl.title}>
            {T('BoardPage.board')} {boardProps && (boardProps as IBoard).title}
          </h1>
          <Droppable droppableId={boardId} direction="horizontal" type="column">
            {(provided) => (
              <div
                className={cl.columnsContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {boardColumns.get(boardId) &&
                  [...(boardColumns.get(boardId) as IColumn[])]
                    .sort((a, b) => a.order - b.order)
                    .map((column) => <Column key={column._id} column={column} />)}
                {provided.placeholder}
                <button className={cl.addColumn} onClick={addColumnOnClick}>
                  {T('BoardPage.addColumn')}
                </button>
              </div>
            )}
          </Droppable>
          <button className={cl.button} onClick={backToMainOnClick}>
            {T('BoardPage.back')}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <CreacteNewColumnModal
            submitHandler={submitHandler}
            isLoading={isCreatingColumn}
            clickHandler={clickHandler}
          ></CreacteNewColumnModal>
        </Modal>
      )}
    </DragDropContext>
  );
};

export default BoardPage;
