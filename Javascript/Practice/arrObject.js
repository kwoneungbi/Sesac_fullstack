const array = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

/* 1. 위 Array 배열을 객체로 만드시오.
{'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70]} */

const solution = (arr) => {
  const newObj = {};
  for (let i = 0; i < arr.length; i += 1) {
    newObj[arr[i][0]] = arr[i].slice(1);
  }
  return newObj;
};

console.log(solution(array)); // { A: [ 10, 20 ], B: [ 30, 40 ], C: [ 50, 60, 70 ] }

/* 2. 위에서 만든 객체를 다시 배열로 만드시오. 
// [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] */

const object = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };

const solution1 = (obj) => {
  const newArr = Object.entries(obj); // [['A', [10, 20], ['B', [30, 40]], ['C', [50, 60, 70]]]
  return newArr.map(([key, value]) => [key].concat(value));
};
console.log(solution1(object)); // [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
