/* 
Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue) => { }
*/

const reduce = (arr, fn, initValue) => {
  let result = initValue === undefined ? arr[0] : initValue;
  let i = 0;
  if (initValue === undefined) i = 1;
  while (i < arr.length) {
    result = fn(result, arr[i]);
    i += 1;
  }
  return result;
};

console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6이면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b)); // 15면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
console.log(reduce([2, 2, 2], (a, b) => a * b)); // 8이면 통과!
console.log(reduce([3, 3, 3], (a, b) => a * b, 0)); // 0이면 통과!
