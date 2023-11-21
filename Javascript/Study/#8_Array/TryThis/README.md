# 1번 평가문제 - range

> 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.

```js
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);

assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(5, 5, 1), [5]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);
assert.deepStrictEqual(range(10, 1, -3), [10, 7, 4, 1]);
assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
  range(100),
  Array.from({ length: 100 }, (_, i) => i + 1)
);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(1, 5, -1), []);
assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(0, -1, 0), [0]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
```

# 2번 KeyPair

> 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
> 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)함수를 작성하시오.

```js
keyPair([1, 3, 4, 5], 7);
keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9);          // [3, 4]
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
  }
```
