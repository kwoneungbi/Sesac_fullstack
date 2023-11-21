/*
다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
range(1, 10, 1);  // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(1, 10, 2);  // [1, 3, 5, 7, 9]
range(1, 10);     // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1);     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(5);         // [1, 2, 3, 4, 5] 
range(100);       // [1, 2, 3, 4, 5, …, 99, 100] 
range(-5);        // [-5, -4, -3, -2, -1]
range(5, 5);      // [5]
range(5, 5, 0);   // [5]                  range(0, 5);   // [0, 1, 2, 3, 4, 5]
range(5, 5, -1);  // [5]                  range(0, -1);  // [0, -1]
range(5, 1, 1);   // []                   range(0, -3);  // [0, -1, -2, -3]
range(1, 5, -1);  // []                   range(-3, 0);  // [-3, -2, -1, 0]
range(1, 5, 6);   // [1]
range(0);         // [0]     range(0, 0);  // [0]      range(0, 0, 5);   // [0]
range(2, 1, -5);  // [2]     range(0, -1, -5);  // [0]     
*/
// start, end, item

// 음수면 양수로 변경 후 0까지 -해주고 음수로 바꿔준다. abs

// var assert = require("assert");

const range = (...args) => {
  let result = [];
  if (args.length === 1) {
    args[0] === 0
      ? result.push(0)
      : args[0] > 0
      ? Array(args[0])
          .fill(args[0])
          .map((i, index) => (result[index] = index + 1))
      : Array(Math.abs(args[0]))
          .fill(args[0])
          .map((i, index) => (result[index] = args[0] + index));
  } else if (args.length === 2) {
    if (args[0] > args[1] && args[1] < 0) {
      for (let i = args[0]; i <= Math.abs(args[1]); i += 1) {
        result.push(i === 0 ? 0 : -i);
      }
    } else if (args[0] > args[1]) {
      for (let i = args[0]; i >= args[1]; i -= 1) {
        result.push(i);
      }
    } else
      for (let i = args[0]; i <= args[1]; i += 1) {
        result.push(i);
      }
  } else if (args.length === 3) {
    if (args[0] < args[1] && args[2] < 0) {
      return result;
    }
    if (args[0] === 0 && args[1] === 0) {
      result.push(args[0]);
    } else if (args[0] === args[1] && args[2] <= 0) {
      result.push(args[0]);
    }
    if (args[0] > args[1] && args[2] <= 0) {
      for (let i = args[0]; i >= args[1]; i -= Math.abs(args[2])) {
        result.push(i);
      }
    } else if (args[2] < 0 && args[0] !== args[1]) {
      for (let i = args[0]; i <= args[1]; i += Math.abs(args[2])) {
        result.push(-i);
      }
      for (let i = args[0]; i <= args[1]; i += args[2]) {
        result.push(i);
      }
    } else if (args[0] < args[1] && args[2] > 0) {
      for (let i = args[0]; i <= args[1]; i += args[2]) {
        result.push(i);
      }
    }
  }
  return result;
};

console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
console.log(range(0, 0, 5)); // [0]

console.log(range(1, 10, 1)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(range(5)); // [1, 2, 3, 4, 5]
console.log(range(100)); // [1, 2, 3, 4, 5, …, 99, 100]
console.log(range(5, 5)); // [5]
console.log(range(5, 1, 1)); // []
console.log(range(1, 5, 6)); // [1]
console.log(range(0)); // [0]
console.log(range(0, 0)); // [0]

console.log(range(-3, 0)); // [-3, -2, -1, 0]
console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
console.log(range(-5)); // [-5, -4, -3, -2, -1]
console.log(range(0, -1)); // [0, -1]
console.log(range(0, -3)); // [0, -1, -2, -3]
console.log(range(1, 5, -1)); // []
console.log(range(2, 1, -5)); // [2]
console.log(range(0, -1, -5)); // [0]

console.log(range(5, 5, 0)); // [5]
console.log(range(5, 5, -1)); // [5]
