/*
다음과 같은 deleteArray와 deleteObjectArray를 순수 함수로 작성하시오.
*/

import assert from "assert";
const arr = [1, 2, 3, 4];

const deleteArray = (array, startIndx, endIndx) => {
  const a = array.slice(startIndx, endIndx);
  return array.filter((x) => !a.includes(x));
};

const deleteArray2 = (array, startIndx, endIndx) =>
  arr.filter((a, i) => i < startIndx || i >= (endIndx ?? Infinity));

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(deleteArray2(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray2(arr, 1, 3), [1, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

const deleteObjectArray = (array, key, value) => {
  if (typeof key === "number") return deleteArray(array, key, value);
  else return array.filter((arr) => arr[key] !== value);
};

assert.deepStrictEqual(deleteObjectArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteObjectArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, "name", "Lee"), [Hong, Kim]);
