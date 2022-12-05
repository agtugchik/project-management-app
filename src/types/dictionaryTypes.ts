interface INavbarLanguage {
  signin: string;
  signup: string;
  welcome: string;
  main: string;
  edit: string;
  signout: string;
  newboard: string;
}

export interface ISighUpFormLanguage {
  formWelcomeSignIn: string;
  formWelcomeSignUp: string;
  formLabelName: string;
  formLogin: string;
  formPassword: string;
  formSignUp: string;
  formRequireMsg: string;
  formOnlyLetter: string;
  formOnlyLetterNumber: string;
  formMinLegthNameMsg: string;
  formMinLengthMsg: string;
  formLoginPatternMsg: string;
  formPasswordValidateMsg: string;
  formRegistered: string;
  notRegistered: string;
  formSignIn: string;
  edit?: string;
  updateBtn?: string;
  deleteBtn?: string;
  messageBeforeDelete?: string;
}

interface IMainPageLanguage {
  boards: string;
  boardSearch: string;
}

interface IBoardLanguage {
  created: string;
  delete: string;
  invitedUsers: string;
  accessWatcher:string;
  accessInvited:string;
  accessOwner:string;
}

interface IBorardPageLanguage {
  board: string;
  addColumn: string;
  back: string;
}

interface IColumnHeaderLanguage {
  deleteCol: string;
  createTask: string;
}

interface ITaskLanguage {
  deleteTask: string;
}

interface IAddBoardLanguage {
  add: string;
}

interface IWelcomePageLanguage {
  titleTagline: string;
  titleProposal1: string;
  titleProposal2: string;
  descriptSubtitle: string;
  descriptDeclarationTitle: string;
  descriptDeclarationContent: string;
  descriptBenefitsTitle: string;
  descriptBenefitTitle1: string;
  descriptBenefitContent1: string;
  descriptBenefitTitle2: string;
  descriptBenefitContent2: string;
  descriptBenefitTitle3: string;
  descriptBenefitContent3: string;
  descriptBenefitTitle4: string;
  descriptBenefitContent4: string;
  ourTeam: string;
  aboutCourse1: string;
  aboutCourse2: string;
}

interface ITeamMembers {
  ArturName: string;
  SergeyName: string;
  NikitaName: string;
  lead: string;
  dev: string;
}

interface INotFoundPageLanguage {
  declaration: string;
  button: string;
}

interface IModalLanguage {
  warning: string;
  confirmBtn: string;
  disconfirmBtn: string;
  title: string;
  owner: string;
  createBoardBtn: string;
  cancelBtn: string;
  createColumnBtn: string;
  inviteUser: string;
  task: string;
  createBoardTitle: string;
  boardDescription1: string;
  boardDescription2: string;
  createColumnTitle: string;
  createTaskTitle: string;
}

interface ILanguage {
  Navbar: INavbarLanguage;
  SignUpForm: ISighUpFormLanguage;
  MainPage: IMainPageLanguage;
  Board: IBoardLanguage;
  BoardPage: IBorardPageLanguage;
  ColumnHeader: IColumnHeaderLanguage;
  Task: ITaskLanguage;
  AddBoard: IAddBoardLanguage;
  WelcomePage: IWelcomePageLanguage;
  NotFoundPage: INotFoundPageLanguage;
  Modal: IModalLanguage;
  TeamMembers: ITeamMembers;
}

export interface Idictionary {
  EN: ILanguage;
  RU: ILanguage;
}
