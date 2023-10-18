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

// O(n^2)
const keyPairBigO_NSuare = (arr, N) => {
  const result = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === N) result.push(i, j);

      if (result.length === 2) break;
    }
  }
  return result;
};

// O(n)

const keyPair = (arr, n) => {
  // memoization은 재귀함수랑 같이 사용할수있음
  const pairIndex = {};

  for (let i = 0; i < arr.length; i++) {
    const arrValue = arr[i];
    // cache의 key값으로 n-arrValue value는 index
    if (arrValue < n && !pairIndex[n - arrValue] && !pairIndex[arrValue]) {
      pairIndex[n - arrValue] = i;
      // { '15': 0 } -> { '12': 1, '15': 0 } -> { '10': 3, '12': 1, '15': 0 }
    } else if (pairIndex[arrValue]) {
      return [pairIndex[arrValue], i]; // 인덱스 출력
    }
  }
};

const keyPair2 = (arr, n) => {
  const pairInx = {}; //{yourValue: pair-index}
  for (let i = 0; i < arr.length; i += 1) {
    const value = arr[i];
    const pairIndex = pairInx[value];
    if (pairIndex) return [pairIndex, i];
    pairInx[n - value] = i;
  }
};

console.log(keyPair([1, 3, 4, 5], 7)); // [1, 2]
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]

console.log(keyPair2([1, 3, 4, 5], 7)); // [1, 2]
console.log(keyPair2([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair2([1, 2, 3, 4, 5], 9)); // [3, 4]
// for (let i of arr) {
//   if (!cache[n - i] && i < n && !cache[i]) {
//     cache[n - i] = i;
//     // console.log("aa", cache);
//   } else if (i < n && cache[i]) {
//     console.log("bb");
//     return [i];
//   }
// }
// for (let j of arr)
// console.log(arr.filter((x) => Object.values(cache).includes(x)));
