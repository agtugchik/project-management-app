import React, { FC, useEffect, useState } from 'react';
import { ITask } from '../../../types/boardTypes';
import cl from './Task.module.scss';
import { useDeleteTaskMutation } from '../../../API/tasksCalls';
import { Draggable } from 'react-beautiful-dnd';
import { Modal } from '../../Modal/modal';
import ConfirmModal from '../../Modal/modals/confirmModal';
import removeIcon from '../../../assets/removeTask.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { BoardSlice } from '../../../store/reducers/BoardReducer';

interface ITaskProps {
  task: ITask;
  boardId: string;
  columnId: string;
  index: number;
}

const Task: FC<ITaskProps> = ({ task, boardId, columnId, index }) => {
  const { title, _id: id } = task;
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  //Modal manipulations
  ////////////////////////
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setModalOpen(false);
    }
  }, [isLoading]);
  ///////////////////////////////////////////////////
  const { columnsTasks } = useAppSelector((state) => state.BoardReducer);
  const dispatch = useAppDispatch();
  const { setLocalColumnTasks } = BoardSlice.actions;
  const deleteTaskOnClick = () => {
    setModalOpen(true);
  };

  function confirmDeleteTask(e: React.MouseEvent<HTMLElement>) {
    const target = (e.target as HTMLElement).closest('input');
    const value = target?.value;
    if (value == 'No' || value == 'Нет') {
      setModalOpen(false);
    }
    if (value == 'Yes' || value == 'Да') {
      deleteTask({ boardId, columnId, id });
      const newColumnTasks = columnsTasks.get(columnId)?.filter((task) => task._id !== id);
      dispatch(setLocalColumnTasks([columnId, newColumnTasks as ITask[]]));
    }
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={cl.container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{title}</h3>
          <button className={cl.removeBtn} onClick={deleteTaskOnClick}>
            <img className={cl.icon} src={removeIcon} alt="Benefits icon"></img>
          </button>
          {isModalOpen && (
            <Modal>
              <ConfirmModal handler={confirmDeleteTask} isLoading={isLoading}></ConfirmModal>
            </Modal>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
