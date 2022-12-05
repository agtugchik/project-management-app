import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryProps, ResponseStateSignUp } from '../types/formTypes';
import baseUrl from './baseUrl';
import getToken from './jwt';

export const editProfileCalls = createApi({
  reducerPath: 'editProfileCalls',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${getToken()}`);
    },
  }),
  tagTypes: ['update'],
  endpoints: (builder) => ({
    getUser: builder.query<ResponseStateSignUp, QueryProps>({
      query: (props) => ({
        url: `${props.path}`,
        method: 'GET',
      }),
      providesTags: () => ['update'],
    }),
    updateUser: builder.mutation<ResponseStateSignUp, QueryProps>({
      query: (props) => ({
        url: `${props.path}`,
        method: 'PUT',
        body: props.patch,
      }),
      invalidatesTags: ['update'],
    }),
    deleteUser: builder.mutation<ResponseStateSignUp, QueryProps>({
      query: (props) => ({
        url: `${props.path}`,
        method: 'DELETE',
        body: props.patch,
      }),
      invalidatesTags: ['update'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } = editProfileCalls;
