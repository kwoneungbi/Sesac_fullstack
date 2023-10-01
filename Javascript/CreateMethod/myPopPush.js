const myMethod = {
  // 비순수 함수
  push: (array, item) => {
    array[array.length] = item;
    return array;
  },
  // 순수 함수
  push2: (array, item) => {
    return [...array, item];
  },
  // 비순수 함수
  pop: (array) => {
    if (array.length === 0) return undefined;
    array.length = array.length - 1;
    return array;
  },
};
const arr = [1, 2];
console.log("비순수 함수 push >>>", myMethod.push(arr, 3)); // [ 1, 2, 3]
console.log("순수 함수 push2 >>>", myMethod.push2(arr, 4)); // [ 1, 2, 3, 4]
console.log("순수 함수 push2 >>>", myMethod.push2(arr, 5)); // [ 1, 2, 3, 5]

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("pop >>>", myMethod.pop(arr1)); // [ 1, 2, 3, 4, 5, 6 ]
console.log("pop >>>", myMethod.pop(arr1)); // [ 1, 2, 3, 4, 5 ]
