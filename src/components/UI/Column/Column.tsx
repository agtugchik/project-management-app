import React, { FC, useEffect, useState } from 'react';
import cl from './Column.module.scss';
import { IColumn, ITask } from '../../../types/boardTypes';
import { useDeleteColumnMutation } from '../../../API/columnsCalls';
import { useGetAllTasksQuery, useCreateNewTaskMutation } from '../../../API/tasksCalls';
import Task from '../Task/Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { BoardSlice } from '../../../store/reducers/BoardReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import ColumnHeader from './ColumnHeader/ColumnHeader';
import { CreateBoardModalForm } from '../../../types/modalType';

interface IColumnProps {
  column: IColumn;
  refetchAdd: (key: string, value: () => void) => void;
}

const Column: FC<IColumnProps> = ({ column, refetchAdd }) => {
  const { title, _id: columnId, order, boardId } = column;

  const [deleteColumn, { isLoading: isDeleting }] = useDeleteColumnMutation();
  const [createNewTask, { isLoading: isCreating }] = useCreateNewTaskMutation();
  const { data, refetch } = useGetAllTasksQuery({ boardId, columnId });
  const { setLocalColumnTasks } = BoardSlice.actions;
  const dispatch = useAppDispatch();
  const { columnsTasks } = useAppSelector((state) => state.BoardReducer);
  const [titleStatus, setTitleStatus] = useState<{ status: 'title' | 'input'; value: string }>({
    status: 'title',
    value: title,
  });

  refetchAdd(columnId, refetch);

  useEffect(() => {
    if (data && !columnsTasks.get(columnId)) {
      dispatch(setLocalColumnTasks([columnId, [...(data as ITask[])]]));
    }
  }, [columnId, columnsTasks, data, dispatch, setLocalColumnTasks]);
  //Modal manipulations
  ////////////////////////
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
  useEffect(() => {
    if (!isDeleting) {
      setModalDeleteOpen(false);
    }
  }, [isDeleting]);
  const [isModalCreateTaskOpen, setModalCreateTaskOpen] = useState(false);
  useEffect(() => {
    if (!isCreating) {
      setModalCreateTaskOpen(false);
    }
  }, [isCreating]);
  ///////////////////////////////////////////////////

  const deleteColumnOnClick = () => {
    setModalDeleteOpen(true);
  };

  function confirmDeleteColumn(e: React.MouseEvent<HTMLElement>) {
    const target = (e.target as HTMLElement).closest('input');
    const value = target?.value;
    if (value == 'No' || value == 'Нет') {
      setModalDeleteOpen(false);
    }
    if (value == 'Yes' || value == 'Да') {
      deleteColumn({ boardId, columnId });
    }
  }

  const createNewTaskOnClick = () => {
    setModalCreateTaskOpen(true);
  };
  function cancelTaskHandler(e: React.MouseEvent<HTMLInputElement>) {
    const input = (e.target as HTMLElement).closest('input');
    const value = input?.value;
    if (value && (value == 'Cancel' || value == 'Отмена')) {
      setModalCreateTaskOpen(false);
    }
  }

  async function submitCreateTaskHandler(formData: CreateBoardModalForm) {
    const { title } = formData;
    const body = {
      title: title,
      order: (data as []).length,
      description: 'string',
      userId: localStorage.getItem('id'),
      users: ['string'],
    };
    const newTask = await createNewTask({ boardId, columnId, body }).unwrap();
    const newColumnTasks = [...(columnsTasks.get(columnId) as ITask[]), newTask];
    dispatch(setLocalColumnTasks([columnId, newColumnTasks as ITask[]]));
  }

  return (
    <Draggable draggableId={columnId} index={order}>
      {(provided) => (
        <div className={cl.container} {...provided.draggableProps} ref={provided.innerRef}>
          <ColumnHeader
            status={titleStatus.status}
            titleStatusValue={titleStatus.value}
            setTitleStatus={setTitleStatus}
            columnId={columnId}
            boardId={boardId}
            order={order}
            deleteColumnOnClick={deleteColumnOnClick}
            createNewTaskOnClick={createNewTaskOnClick}
            dragHandleProps={provided.dragHandleProps}
            isModalDeleteOpen={isModalDeleteOpen}
            isDeleting={isDeleting}
            confirmDeleteColumn={confirmDeleteColumn}
            isCreating={isCreating}
            isModalCreateTaskOpen={isModalCreateTaskOpen}
            cancelTaskHandler={cancelTaskHandler}
            submitCreateTaskHandler={submitCreateTaskHandler}
          />
          <Droppable droppableId={columnId} type="task">
            {(provided) => (
              <div
                className={cl.tasksContainer}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {columnsTasks.get(columnId) &&
                  [...(columnsTasks.get(columnId) as ITask[])]
                    .sort((a, b) => a.order - b.order)
                    .map((task, index) => (
                      <Task
                        key={task._id}
                        task={task}
                        boardId={boardId}
                        columnId={columnId}
                        index={index}
                      />
                    ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
