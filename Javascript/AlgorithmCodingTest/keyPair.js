/*
다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)함수를 작성하시오.

keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5], 9);          // [3, 4]
cf. O(n^2) ⇒ O(N) || O(logN)
const keyPair = (arr, n) => {
  let ret;
  for(let i = 0; i < arr.length; i += 1) {
    for(let j = 0; j < arr.length; j += 1) {
       if (arr[i] + arr[j] === n) {
          ret = [i, j];
          break;
       }
    }
    if (ret) break;
  }
  return ret;
*/

const keyPair = (arr, N) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === N) {
        result.push(i, j);
      }
    }
  }
  result.length = 2;
  return result;
};

console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
