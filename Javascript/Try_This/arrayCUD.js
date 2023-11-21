// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 변경되면 안됨

const addUser = (objName) => {
  return [...users, objName];
};

const removeUser = (objName) => {
  return users.filter((item) => item !== objName);
};

const changeUser = (beforeObjName, afterObjName) => {
  return users.map((item) => (item === beforeObjName ? afterObjName : item));
};

console.log(addUser(hong)); // [Kim, lee, park, hong]
console.log(removeUser(lee)); // [kim, park]
console.log(changeUser(kim, choi)); // [choi, lee, park]

//----------------------------------------------------------------
const removeUser1 = (objName) => {
  const user = [...users];
  const inx = user.indexOf(objName);
  user.splice(inx, 1);
  return user;
};

console.log(removeUser1(lee)); // [kim, park]

const changeUser1 = (beforeObjName, afterObjName) => {
  const user = [...users];
  user[user.indexOf(beforeObjName)] = afterObjName;
  return user;
};

console.log(changeUser1(lee, choi)); // [{ id: 2, name: 'kim' },{ id: 5, name: 'Choi' },{ id: 4, name: 'Park' }]
