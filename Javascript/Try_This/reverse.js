/*
Array.reverse 함수를 비순수 함수와 순수 함수로 각각 구현하시오.

ex1) 순수 함수
const a11 = [1, 2, 3, 4, 5];
makeReverseArray(a11); // [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!

ex2) 비순수 함수
const a11 = [1, 2, 3, 4, 5]; 
reverseArray(a11); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!
*/

const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = (a) => {
  const arr = [];
  for (let x of a) {
    arr.unshift(x);
  }
  return arr;
};

const reverseArray = (a) => {
  for (let i = a.length - 1; i > 0 - 1; i--) {
    a11.push(a11[i]);
  }
  for (let b = a.length / 2; b > 0; b--) {
    a11.shift();
  }
  return a11;
};

console.log(makeReverseArray(a11)); // [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!
console.log(a11);
console.log(reverseArray(a11));
console.log(a11);
