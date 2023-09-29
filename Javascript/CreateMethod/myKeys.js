// Object.keys 메서드 구현하기

/* 
Object.keys 메서드에 대해 먼저 공부하기

// 단순 배열
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 배열형 객체
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 키와 순서가 무작위인 유사 배열 객체
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
*/
const object = {
  name: "홍길동",
  address: "Seoul",
  email: "seoul@gmail.com",
};

// console.log(Object.keys(object)); // [ 'name', 'address', 'email' ]

const myObject = {
  keys: (object1) => {
    const arr = [];
    for (let i in object1) {
      arr.push(i);
    }
    return arr;
  },
  values: (object2) => {
    const arr = [];
    for (let i in object2) {
      arr.push(object2[i]);
    }
    return arr;
  },
};
console.log(myObject.keys(object)); // [ 'name', 'address', 'email' ]
console.log(myObject.values(object)); // [ '홍길동', 'Seoul', 'seoul@gmail.com' ]
