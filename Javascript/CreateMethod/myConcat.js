/* 
Array.prototype.concat이란?

1. concat 인자에 있는 모든 값을 원본 배열에 있는 값에 추가하여 새로운 배열을 반환한다.
2. 원본 배열은 변경되지 않는다. 
*/

const arr = [1, 2, 3];

let result = arr.concat(4, 5, 6);
console.log(result); // [1,2,3,4,5,6]
console.log(arr); // [1,2,3]

/* 위와 동일허게 작동하는 myConcat을 만들어본다. */

const myConcat = (arr, item) => {
  return [...arr, ...item];
};

console.log(myConcat(arr)); // [1,2,3]
