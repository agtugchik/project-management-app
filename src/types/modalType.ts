export type ModalProp = {
  handler: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  isLoading?: boolean;
};

export type CreateBoardModalForm = {
  title: string;
  owner?: string;
  users?: string[];
};

export type CreacteNewBoardModalProps = {
  submitHandler: (data: CreateBoardModalForm) => void;
  clickHandler: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  autoCompContent?: string;
  setAutoCompContent: React.Dispatch<React.SetStateAction<UsersState>>;
  filteredUsers?: UsersResponse;
  onClickChooseUser?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  invitedUsers?: string[];
  removeUserOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isUserLoading?: boolean;
};

export type CreacteNewColumnModalProps = {
  submitHandler: (data: CreateBoardModalForm) => void;
  clickHandler: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  autoCompContent?: string;
  filteredUsers?: UsersResponse;
  onClickChooseUser?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  invitedUsers?: string[];
  removeUserOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isUserLoading?: boolean;
};

export type UserResponse = {
  _id: string;
  name: string;
  login: string;
};
export type UsersResponse = UserResponse[];

export type TranformUsersResponse = {
  currentUser: UserResponse | undefined;
  users: UsersResponse;
};

export type UsersState = {
  filteredOptions: UsersResponse;
  currentValue: string;
};
