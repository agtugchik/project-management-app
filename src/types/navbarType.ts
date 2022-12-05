export type NavbarState = {
  isOpenedMenu: boolean;
  hasToken: boolean;
};

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export interface IRoutes {
  public: IRoute[];
  private: IRoute[];
}
