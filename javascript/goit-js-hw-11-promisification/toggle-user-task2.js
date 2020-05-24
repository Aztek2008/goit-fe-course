import { users } from './users-array.js';

export const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName
      ? {
          ...user,
          active: !user.active,
        }
      : user,
  );

  return new Promise(resolve => {
    resolve(updatedUsers);
  });
};

export const logger1 = updatedUsers => console.table(updatedUsers);
