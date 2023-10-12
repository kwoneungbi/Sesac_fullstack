/*
주어진 정수 배열에서 각 요소를 제곱한 값들과 제곱근 값들을 반환하는 함수를 
for-of, forEach, map을 사용하여 각각 작성하시오.
*/
arr = [1, 4, 9];

const powSqrtByForOf = (array) => {
  let result = [];
  let result1 = [];
  for (const i of array) {
    result.push(Math.pow(i, 2));
    result1.push(Math.sqrt(i));
  }
  return [result, result1];
};

const powSqrtByForEach = (array) => {
  let result = [];
  let result1 = [];
  array.forEach((i) => {
    result.push(Math.pow(i, 2));
    result1.push(Math.sqrt(i));
  });
  return [result, result1];
};

const powSqrtByMap = (array) => {
  let result = [];
  let result1 = [];
  array.map((i) => {
    result.push(Math.pow(i, 2));
    result1.push(Math.sqrt(i));
  });
  return [result, result1];
};

console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
