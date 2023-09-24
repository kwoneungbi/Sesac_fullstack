/* 1 ~ 10까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수와 TCO로 작성하시오.*/

// 재귀 함수
const arr = [];
const makeArray = (n) => {
  if (n === 0) return arr.reverse();
  arr.push(n);
  return makeArray(n - 1);
};

console.log(makeArray(5)); // [1,2,3,4,5]

// TCO

const makeArray1 = (n, acc = []) => {
  if (n === 0) return acc.reverse();
  acc.push(n);
  return makeArray1(n - 1, acc);
};

console.log(makeArray1(5)); // [1,2,3,4,5]

// TCO2

const makeArray2 = (n, acc = []) => {
  if (n === 0) return acc;
  return makeArray2(n - 1, [n, ...acc]);
};
console.log(makeArray2(5)); // [1,2,3,4,5]

/* array 메소드 사용하지 말고, destructuring을 사용해서 만들기 */

const createArray = ({ n, arr = [] } = {}) => {
  if (n < 1) return arr;
  return createArray({ n: n - 1, arr: [n, ...arr] });
};

console.log(createArray({ n: 10 }));

const createArray1 = (n, arr = []) => {
  if (n < 1) return arr;
  return createArray1(n - 1, [n, ...arr]);
};

console.log(createArray1(10));
