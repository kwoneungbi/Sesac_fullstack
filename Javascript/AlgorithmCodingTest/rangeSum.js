/*
다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
rangeSum(2, 5); // 19
rangeSum(3, 5); // 15
rangeSum(1, 4); // 14
rangeSum(0, 4); // 15
rangeSum(5, 8); // 30
rangeSum(6, 8); // 22
rangeSum(2, 8); // 41
rangeSum(4, 4); // 5
rangeSum(5);    // 30
rangeSum(2);    // 41
rangeSum();     // 45
*/

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (startIndx, endIndx) => {
  if (startIndx === undefined && endIndx === undefined)
    return arr.reduce((acc, curr) => acc + curr);
  else if (endIndx === undefined)
    return arr.slice(startIndx).reduce((acc, curr) => acc + curr);
  else if (startIndx === endIndx) return arr[startIndx];
  else
    return arr.slice(startIndx, endIndx + 1).reduce((acc, curr) => acc + curr);
};

console.log(rangeSum(2, 5)); // 19
console.log(rangeSum(3, 5)); // 15
console.log(rangeSum(1, 4)); // 14
console.log(rangeSum(0, 4)); // 15
console.log(rangeSum(5, 8)); // 30
console.log(rangeSum(6, 8)); // 22
console.log(rangeSum(2, 8)); // 41
console.log(rangeSum(4, 4)); // 5
console.log(rangeSum(5)); // 30
console.log(rangeSum(2)); // 41
console.log(rangeSum()); //) 45
