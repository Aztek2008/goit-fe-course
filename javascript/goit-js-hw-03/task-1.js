'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.table(user);

const newUserMood = {
  mood: 'happy',
};

const newUserHobby = {
  hobby: 'skydiving',
};

const newUserType = {
  premium: false,
};

const newUser = {
  ...user,
  ...newUserMood,
  ...newUserHobby,
  ...newUserType,
};
console.table(newUser);

const keysOfNewUser = Object.keys(newUser);

for (const key of keysOfNewUser) {
  console.table(`${key}: ${newUser[key]}`);
}
