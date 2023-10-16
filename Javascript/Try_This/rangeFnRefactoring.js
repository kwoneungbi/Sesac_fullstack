import assert from "assert";

const range = (start, end, step = start > end ? -1 : 1) => {
  // if (end === undefined) start > 0 ? (start = 1) : (end = start);
  if (start === end) return [start];

  // if ((start > end && step > 0) || (start < end && step < 0)) return [];
  if ((start - end) * step > 0) return [];

  const tmp = start;
  // end = end ?? (start > 0 ? ((start = 1), tmp) : start === 0 ? 0 : -1); // null병합 사용시 우선순위 조심하기
  end = end ?? (start > 0 ? ((start = 1), tmp) : start % 2);

  const results = [];
  if (end === undefined || step === 0) return [start];
  // const until = (i) => (start > end ? i >= end : i <= end);
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
    // if (until(i)) return results;
  }
  return results;
};

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

console.log("Succeed!!!");
