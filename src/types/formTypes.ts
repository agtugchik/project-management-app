import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type FormValues = {
  name?: string;
  login: string;
  password: string;
  _id?: string;
};

export type SignUpProps = {
  handlerSubmit: (data: FormValues) => void;
  isLoading: boolean;
};
export type Body = {
  [key: string]: string;
};

export type QueryProps = {
  path: string;
  patch?: Body;
};

export type ResponseStateSignUp = {
  name: string;
  login: string;
  _id: string;
};

export type StateSignUp = {
  signUpData: ResponseStateSignUp;
};

export type ModalProp = {
  error?: FetchBaseQueryError;
};

export type UpdateProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isUpdating: boolean;
  handlerSubmit: (data: FormValues) => void;
  deleteUser: () => void;
  confirmDeleteUser: (e: React.MouseEvent<HTMLElement>) => void;
  name: string;
  login: string;
  isModalOpen: boolean;
};

export type SighInResponse = {
  token: string;
  _id: string;
};
