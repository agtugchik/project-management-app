import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from './baseUrl';
import { ITask } from '../types/boardTypes';
import getToken from './jwt';

export const tasksCalls = createApi({
  reducerPath: 'tasksCalls',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${getToken()}`);
    },
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getAllTasks: builder.query<ITask[], { [key: string]: string }>({
      query: (props) => ({
        url: `boards/${props.boardId}/columns/${props.columnId}/tasks`,
        method: 'GET',
      }),
      providesTags: () => ['Tasks'],
    }),
    createNewTask: builder.mutation({
      query: (props) => ({
        url: `boards/${props.boardId}/columns/${props.columnId}/tasks`,
        method: 'POST',
        body: props.body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: (props) => ({
        url: `boards/${props.boardId}/columns/${props.columnId}/tasks/${props.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    patchTasksSet: builder.mutation({
      query: (body) => ({
        url: `tasksSet`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateNewTaskMutation,
  useDeleteTaskMutation,
  usePatchTasksSetMutation,
} = tasksCalls;
