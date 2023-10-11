/* 
Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue) => { }
*/
const assert = require("assert");

const reduce = (arr, fn, initValue) => {
  let result = initValue === undefined ? arr[0] : initValue;

  for (let i = initValue === undefined ? 1 : 0; i < arr.length; i += 1) {
    result = fn(result, arr[i]);
  }
  return result;
};

// const reduce = (arr, fn, initValue) => {
//   let result = initValue === undefined ? arr[0] : initValue;
//   let i = 0;
//   if (initValue === undefined) i = 1;
//   while (i < arr.length) {
//     result = fn(result, arr[i]);
//     i += 1;
//   }
//   return result;
// };

assert.strictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
); // 6이면 통과!
assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
); // 15면 통과!
assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
); // 120이면 통과!
assert.strictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
); // 8이면 통과!
assert.strictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
); // 0이면 통과!
