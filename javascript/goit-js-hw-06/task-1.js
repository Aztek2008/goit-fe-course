'use strict';

import users from './users.js';

/////////////////////   TASK 1   //////////////////////////

const getUserNames = users => users.map(user => user.name);
console.log('TASK 1', getUserNames(users));

/////////////////////   TASK 2   //////////////////////////

const getUsersWithEyeColor = (users, color) => {
  const user = users.filter(user => user.eyeColor === color);
  return user;
};

console.log('TASK 2', getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/////////////////////   TASK 3   //////////////////////////
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const user = users.filter(user => user.gender === gender).map(user => user.name);

  return user;
};

console.log('TASK 3', getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/////////////////////   TASK 4   //////////////////////////
// Получить массив только неактивных пользователей (поле isActive)

const getInactiveUsers = users => {
  const user = users.filter(user => !user.isActive);

  return user;
};

console.log('TASK 4', getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/////////////////////   TASK 5   //////////////////////////
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const user = users.find(user => user.email === email);

  return user;
};

console.log('TASK 5', getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

/////////////////////   TASK 6   //////////////////////////
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  const user = users.filter(user => user.age > min && user.age < max);

  return user;
};

console.log('TASK 6', getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/////////////////////   TASK 7   //////////////////////////
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log('TASK 7',
  calculateTotalBalance(users)); // 20916

/////////////////////   TASK 8   //////////////////////////
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const userFriends = users.filter(user => user.friends.includes(friendName)).map(user => user.name);

  return userFriends;
};

console.log('TASK 8', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/////////////////////   TASK 9   //////////////////////////
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const usersByFriendsQtty = (a, b) => a.friends.length - b.friends.length;

  return users.sort(usersByFriendsQtty).map(user => user.name);
}

console.log('TASK 9', getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson',
// 'Sheree Anthony', 'Ross Vazquez' ]

/////////////////////   TASK 10  //////////////////////////
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

  const uniqueSkills = skills.filter((skill, index) => skills.indexOf(skill) === index).sort();
  return uniqueSkills;
};

console.log('TASK 10', getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla'