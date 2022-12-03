import jwtDecode from 'jwt-decode';

type JwtLogin = {
  login: string;
};

enum Access {
  Access_Owner = 1,
  Access_Create_Column = 2,
  Access_Create_Task = 4,
  Access_Delete_Column = 8,
  Access_Delete_Task = 16,
}

const watcher = 0;

export const invited =
  Access.Access_Create_Column |
  Access.Access_Create_Task |
  Access.Access_Delete_Column |
  Access.Access_Delete_Task;

export const owner = invited | Access.Access_Owner;

export function getLogin() {
  const token = localStorage.getItem('token');
  let currentLogin: JwtLogin;
  if (token) {
    currentLogin = jwtDecode(token);
    return currentLogin.login;
  }
  return null;
}

export function checkBoardAccess(resOwner: string, invitedUsers: string[]) {
  const currentLogin = getLogin();
  return currentLogin && currentLogin === resOwner
    ? owner
    : currentLogin && invitedUsers.includes(currentLogin)
    ? invited
    : watcher;
}
