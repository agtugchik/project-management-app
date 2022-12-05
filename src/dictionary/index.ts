import { Idictionary } from '../types/dictionaryTypes';

const dictionary: Idictionary = {
  EN: {
    Navbar: {
      signin: 'Sign in',
      signup: 'Sign Up',
      welcome: 'Welcome',
      main: 'Go to Main Page',
      edit: 'Edit Profile',
      signout: 'Sign Out',
      newboard: 'Create new board',
    },
    SignUpForm: {
      formWelcomeSignIn: 'Get unlimited access to your board',
      formWelcomeSignUp: 'Join us and get unlimited access to your board',
      formLabelName: 'Name',
      formLogin: 'Login',
      formPassword: 'Password',
      formSignUp: 'SignUp',
      formRequireMsg: 'This field is required',
      formOnlyLetter: 'Should contains only letters',
      formOnlyLetterNumber: 'Should contains only letters or numbers',
      formMinLegthNameMsg: 'Should contains greater then 2 symbols',
      formMinLengthMsg: 'Should contains greater then 5 symbols',
      formLoginPatternMsg: 'Should contains english letters and(or) numbers',
      formPasswordValidateMsg: 'Should contains one or greater then numbers',
      formRegistered: 'Already registered?',
      notRegistered: 'Not registered yet?',
      formSignIn: 'SignIn',
      edit: 'Edit profile',
      updateBtn: 'Update',
      deleteBtn: 'Delete',
      messageBeforeDelete: 'Enter correct data',
    },
    MainPage: {
      boards: 'Boards',
      boardSearch: 'Search for boards and users',
    },
    Board: {
      created: 'Created by',
      delete: 'Delete',
      invitedUsers: 'Invited users',
      accessWatcher: 'Only watch',
      accessInvited: 'You been invited',
      accessOwner: 'You owner',
    },
    BoardPage: {
      board: 'Board',
      addColumn: 'Add Column',
      back: 'Back to Main',
    },
    ColumnHeader: {
      deleteCol: 'Delete column',
      createTask: 'Create task',
    },
    Task: {
      deleteTask: 'Delete task',
    },
    AddBoard: {
      add: 'Add board',
    },
    WelcomePage: {
      titleTagline: 'Easy to create, easy to follow',
      titleProposal1:
        'Try the most efficient processes, to organize your personal and professional life.',
      titleProposal2: 'Discover OneTeam project management system',
      descriptSubtitle: 'PROJECT MANAGEMENT',
      descriptDeclarationTitle: 'Your base for classic or agile project management',
      descriptDeclarationContent:
        'OneTeam management system allows you to plan a project and assign team members to complete tasks on time, collaborate and manage schedules',
      descriptBenefitsTitle: 'The team management system includes',
      descriptBenefitTitle1: 'Better and faster iterations',
      descriptBenefitContent1:
        'OpenProject provides the perfect tool to support agile project management and methodologies such as Scrum and Kanban. Agile teams deliver better and faster. They build, measure and learn with each iteration.',
      descriptBenefitTitle2: 'The best quality of work',
      descriptBenefitContent2:
        'Team Project Management Software allows you to assign a task to one or more team members. By checking which elements are assigned to whom, you can uniformly distribute the workload among team members. Collaborative teamwork leads to more informed decisions and therefore allows all members to create their best work.',
      descriptBenefitTitle3: 'Better Time Management',
      descriptBenefitContent3:
        'Time management is an integral part of management team project. Project Duration Tracking allows managers to track paid working hours teams and control the budget of complex projects.',
      descriptBenefitTitle4: 'Increasing customer satisfaction',
      descriptBenefitContent4:
        'Team project management apps give you the ability to control critical aspects of the project to ensure high quality work. This allows you remain competitive in the market and create strong brand image in the public eye.',
      ourTeam: 'Application development team',
      aboutCourse1:
        'This application was created by students of the RS School React 2022Q3 course, which started in September 2022. You can view the work of our team members, as well as contact us using the links above.',
      aboutCourse2:
        'Everyone can study at RS School, regardless of age, professional employment, or place of residence. School partner is EPAM',
    },
    TeamMembers: {
      ArturName: 'Artur Shvedenko',
      SergeyName: 'Siarhei Charniak',
      NikitaName: 'Nikita Yankovsky',
      lead: 'Team lead',
      dev: 'Developer',
    },
    NotFoundPage: {
      declaration: 'Requested page not found',
      button: 'Back to Home Page',
    },
    Modal: {
      warning: 'Are you sure?',
      confirmBtn: 'Yes',
      disconfirmBtn: 'No',
      title: 'Title',
      owner: 'Owner',
      createBoardBtn: 'Create board',
      cancelBtn: 'Cancel',
      createColumnBtn: 'Add Column',
      inviteUser: 'Invite user',
      task: 'Add Task',
      createBoardTitle: 'Create new board',
      boardDescription1: 'To create a new board, select project members',
      boardDescription2: 'and enter a title for the board',
      createColumnTitle: 'Add new column',
      createTaskTitle: 'Create new task',
    },
  },
  RU: {
    Navbar: {
      signin: 'Войти',
      signup: 'Зарегистрироваться',
      welcome: 'Добро пожаловать',
      main: 'Главная страница',
      edit: 'Профиль',
      signout: 'Выйти',
      newboard: 'Новая доска',
    },
    SignUpForm: {
      formWelcomeSignIn: 'Получите неограниченный доступ к вашей доске',
      formWelcomeSignUp: 'Присоединяйтесь к нам и получите неограниченный доступ к вашей доске',
      formLabelName: 'Имя',
      formLogin: 'Логин',
      formPassword: 'Пароль',
      formSignUp: 'Зарегистрироваться',
      formRequireMsg: 'Это поле обязательно к заполнению',
      formOnlyLetter: 'Должен содержать только буквы',
      formOnlyLetterNumber: 'Должен содержать только буквы или цифры',
      formMinLegthNameMsg: 'Должен содержать более 2 символов',
      formMinLengthMsg: 'Должен содержать более 5 символов',
      formLoginPatternMsg: 'Должен содержать английские буквы и(или) цифры',
      formPasswordValidateMsg: 'Должен содержать одно или больше чисел',
      formRegistered: 'Уже зарегистрированны?',
      notRegistered: 'Еще не зарегистрированы?',
      formSignIn: 'Войти',
      edit: 'Редактировать профиль',
      updateBtn: 'Обновить',
      deleteBtn: 'Удалить',
      messageBeforeDelete: 'Введите корректные данные',
    },
    MainPage: {
      boards: 'Доски',
      boardSearch: 'Поиск досок и участников',
    },
    Board: {
      created: 'Создал',
      delete: 'Удалить',
      invitedUsers: 'Приглашенные пользователи',
      accessWatcher: 'Только просмотр',
      accessInvited: 'Вас пригласили',
      accessOwner: 'Вы владелец',
    },
    BoardPage: {
      board: 'Доска',
      addColumn: 'Добавить колонку',
      back: 'На главную',
    },
    ColumnHeader: {
      deleteCol: 'Удалить колонку',
      createTask: 'Создать задание',
    },
    Task: {
      deleteTask: 'Удалить задание',
    },
    WelcomePage: {
      titleTagline: 'Легко создавать, легко следовать',
      titleProposal1:
        'Попробуйте самые эффективные процессы, чтобы организовать свою личную и профессиональную жизнь.',
      titleProposal2: 'Откройте для себя систему управления проектами OneTeam',
      descriptSubtitle: 'УПРАВЛЕНИЕ ПРОЕКТОМ',
      descriptDeclarationTitle: 'Ваша база для классического или гибкого управления проектами',
      descriptDeclarationContent:
        'Система управления командой OneTeam позволяет планировать проект и назначать членов команды для выполнения задач в заданные сроки, сотрудничать и управлять расписаниями',
      descriptBenefitsTitle: 'Система управления командой включает',
      descriptBenefitTitle1: 'Более качественные и быстрые итерации',
      descriptBenefitContent1:
        'OneTeam предоставляет идеальный инструмент для поддержки гибкого управления проектами и таких методологий, как Scrum и Kanban. Agile-команды работают лучше и быстрее. Они создают, оценивают и учатся с каждой итерацией.',
      descriptBenefitTitle2: 'Лучшее качество работы',
      descriptBenefitContent2:
        'Приложение для управления проектами позволяет назначать задачу одному или нескольким членам команды. Проверяя, кому какие элементы назначены, вы можете равномерно распределить рабочую нагрузку. Совместная работа в команде приводит к более обоснованным решениям и, следовательно, позволяет всем ее участникам создавать свои лучшие работы.',
      descriptBenefitTitle3: 'Лучшее управление временем',
      descriptBenefitContent3:
        'Управление временем является неотъемлемой частью управления командным проектом. Отслеживание продолжительности проекта позволяет менеджерам отслеживать оплачиваемые рабочие часы команды и контролировать бюджет сложных проектов.',
      descriptBenefitTitle4: 'Повышение удовлетворенности клиентов',
      descriptBenefitContent4:
        'Приложения для управления командными проектами дают вам возможность контролировать критически важные аспекты проекта для обеспечения высокого качества работы. Это позволяет вам оставаться конкурентоспособными на рынке и создавать сильный имидж бренда в глазах общественности.',
      ourTeam: 'Команда разработчиков приложения',
      aboutCourse1:
        'Приложение создано студентами курса RS School React 2022Q3, стартовавшего в сентябре 2022 года. Посмотреть работы членов нашей команды, а также связаться с нами можно по указанным выше ссылкам.',
      aboutCourse2:
        'Учиться в RS School могут все желающие, независимо от возраста, профессиональной занятости и места жительства. Партнером школы является EPAM',
    },
    TeamMembers: {
      ArturName: 'Артур Шведенко',
      SergeyName: 'Сергей Черняк',
      NikitaName: 'Никита Янковский',
      lead: 'Тимлид',
      dev: 'Разработчик',
    },
    NotFoundPage: {
      declaration: 'Запрашиваемая страница не найдена',
      button: 'На главную',
    },
    Modal: {
      warning: 'Вы уверены?',
      confirmBtn: 'Да',
      disconfirmBtn: 'Нет',
      title: 'Заголовок',
      owner: 'Владелец',
      createBoardBtn: 'Создать доску',
      cancelBtn: 'Отмена',
      createColumnBtn: 'Добавить колонку',
      inviteUser: 'Пригласить пользователя',
      task: 'Добавить задачу',
      createBoardTitle: 'Создать новую доску',
      boardDescription1: 'Чтобы создать доску, выберите членов проекта',
      boardDescription2: 'и введите название доски',
      createColumnTitle: 'Добавить новую колонку',
      createTaskTitle: 'Создать новую задачу',
    },
    AddBoard: {
      add: 'Добавить доску',
    },
  },
};

export default dictionary;
