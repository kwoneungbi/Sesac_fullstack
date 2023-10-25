/*
다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
 → 배열의 각 요소를 제곱   n => n ** 2
 → 배열 각 요소의 제곱근   n => Math.sqrt(n)
 → 배열의 각 요소를 세제곱  n => n ** 3
const arr = [1, 2, 3, 4, 5];
cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);

// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
*/
import assert from "assert";

const arr = [1, 2, 3, 4, 5];
const result = [];

arr.reduce(
  (acc, curr) => result.push(curr ** 2 && Math.sqrt(curr) && curr ** 3),
  1
);
assert.deepStrictEqual(result, [1, 8, 27, 64, 125]);

// ----------------------------------------------------------------
const pow2 = (a) => a ** 2;
const pow3 = (a) => a ** 3;
const sqrt = Math.sqrt;

const x = arr
  .map((a) => pow2(a))
  .map(Math.sqrt)
  .map((a) => pow3(a));
assert.deepStrictEqual(x, [1, 8, 27, 64, 125]);

const y = [pow2, Math.sqrt, pow3].reduce((acc, f) => acc.map(f));
assert.deepStrictEqual(y, [1, 8, 27, 64, 125]);
