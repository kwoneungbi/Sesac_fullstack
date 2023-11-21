const object = { name: "eunbi", id: 1, addr: "Seoul" };
const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const getArrObj = {
  getArray: (obj) => {
    const newArray = [];
    const keys = Object.keys(obj); // [ 'name', 'id', 'addr' ]
    const values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
      newArray[i] = [keys[i], values[i]];
    }
    return newArray;
  },

  getObject: (arr) => {
    const newObj = {};
    for (let i = 0; i < arr.length; i++) {
      newObj[arr[i][0]] = arr[i][1];
    }
    return newObj;
  },
};

console.log(Object.entries(object)); // [ [ 'name', 'eunbi' ], [ 'id', 1 ], [ 'addr', 'Seoul' ] ]
console.log(Object.fromEntries(array)); // { '1': 2, '3': 4, '5': 6 }

console.log(getArrObj.getArray(object)); // [ [ 'name', 'eunbi' ], [ 'id', 1 ], [ 'addr', 'Seoul' ] ]
console.log(getArrObj.getObject(array)); // { '1': [ 2 ], '3': [ 4 ], '5': [ 6 ] }
