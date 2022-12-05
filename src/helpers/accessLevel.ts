import jwtDecode from 'jwt-decode';

type JwtLogin = {
  id: string;
  login: string;
};

enum Access {
  Access_Owner = 1,
  Access_Create_Column = 2,
  Access_Create_Task = 4,
  Access_Delete_Column = 8,
  Access_Delete_Task = 16,
}

export enum AccessConst {
  Owner_Access = 31,
  Invited_Access = 30,
  Watcher_Access = 0,
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
  const resId = getResId(resOwner);
  const userId = localStorage.getItem('id');
  const transformInvitedUser = transformInvitedUsers(invitedUsers);
  // const currentUserId = getId();
  // const currentLogin = getLogin();
  return userId && userId === resId
    ? owner
    : userId && transformInvitedUser.includes(userId)
    ? invited
    : watcher;
}

function getResId(resId: string) {
  const index = resId.indexOf('login');
  if (~index) {
    return resId.slice(0, index);
  }
}

function transformInvitedUsers(invitedUsers: string[]) {
  return invitedUsers.map((user) => {
    return getResId(user);
  });
}

// export function checkBoardAccess(resOwner: string, invitedUsers: string[]) {
//   const currentLogin = getLogin();
//   return currentLogin && currentLogin === resOwner
//     ? owner
//     : currentLogin && invitedUsers.includes(currentLogin)
//     ? invited
//     : watcher;
// }

export function getOwner(owner: string) {
  const login = owner.indexOf('login:');
  if (~login) {
    return owner.slice(login + 6);
  }
}
