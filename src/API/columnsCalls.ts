import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from './baseUrl';
import { IColumn } from '../types/boardTypes';
import getToken from './jwt';

export const columnsCalls = createApi({
  reducerPath: 'columnsCalls',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${getToken()}`);
    },
  }),
  tagTypes: ['Columns'],
  endpoints: (builder) => ({
    getAllColumns: builder.query<IColumn[], string>({
      query: (boardId) => ({
        url: `boards/${boardId}/columns`,
        method: 'GET',
      }),
      providesTags: () => ['Columns'],
    }),
    createNewColumn: builder.mutation({
      query: (props) => ({
        url: `boards/${props.boardId}/columns`,
        method: 'POST',
        body: props.body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: builder.mutation({
      query: (props) => ({
        url: `boards/${props.boardId}/columns/${props.columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
    patchColumnsSet: builder.mutation({
      query: (body) => ({
        url: 'columnsSet',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Columns'],
    }),
    updateTitle: builder.mutation({
      query: ({ body, boardId, columnId }) => ({
        url: `/boards/${boardId}/columns/${columnId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const {
  useGetAllColumnsQuery,
  useCreateNewColumnMutation,
  useDeleteColumnMutation,
  usePatchColumnsSetMutation,
  useUpdateTitleMutation,
} = columnsCalls;
