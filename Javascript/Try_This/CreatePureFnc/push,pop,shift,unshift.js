/*
다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
(단, 입력값은 다음 예시로 한정함)
const arr = [1, 2, 3, 4];
console.log(push(arr, 5, 6));  // [1, 2, 3, 4, 5, 6]
console.log(pop(arr));         // 4
console.log(pop(arr, 2));      // 2개 팝! ⇒ [3, 4]
console.log(unshift(arr, 0));  // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8));  // [7, 8, 1, 2, 3, 4]
console.log(shift(arr));       // [2, 3, 4]
console.log(shift(arr, 2));    // [3, 4]
console.log(arr); // [1, 2, 3, 4] 
*/
const arr = [1, 2, 3, 4];

const push = (array, ...args) => [...array, ...args];

const pop = (array, a) =>
  a === undefined ? array[array.length - 1] : array.slice(-a);

const pop2 = (array, idx = -1) => array.slice(idx);

const unshift = (array, ...args) => {
  const copyArray = [...array];
  args.length === 1 ? copyArray.unshift(args[0]) : copyArray.unshift(...args);
  return copyArray;
};

const unshift2 = (arr, ...args) => [...args, ...arr];

const shift = (array, a) => {
  return a === undefined ? array.slice(1) : array.slice(a);
};

const shift2 = (arr, idx = 1) => arr.slice(idx);

console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // 4
console.log(pop(arr, 2)); // 2개 팝! ⇒ [3, 4]
console.log(pop2(arr)); // 4
console.log(pop2(arr, 2)); // 2개 팝! ⇒ [3, 4]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(unshift2(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift2(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(shift2(arr)); // [2, 3, 4]
console.log(shift2(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]
