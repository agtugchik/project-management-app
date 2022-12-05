import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QueryProps, FormValues, SighInResponse } from '../types/formTypes';
import baseUrl from './baseUrl';

export const authCalls = createApi({
  reducerPath: 'authCalls',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
    },
  }),
  endpoints: (builder) => ({
    signUpAuth: builder.query<FormValues, QueryProps>({
      query: (props) => ({
        url: `${props.path}`,
        method: 'POST',
        body: props.patch,
      }),
    }),
    signInAuth: builder.query<SighInResponse, QueryProps>({
      query: (props) => ({
        url: `${props.path}`,
        method: 'POST',
        body: props.patch,
      }),
    }),
  }),
});

export const { useSignUpAuthQuery, useSignInAuthQuery } = authCalls;
