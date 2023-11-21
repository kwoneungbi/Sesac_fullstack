import assert from "assert";

const range = (...args) => {
  let result = [];
  if (args.length === 1) {
    if (args[0] === 0) result.push(0);
    if (args[0] > 0)
      Array(args[0])
        .fill(args[0])
        .map((i, index) => (result[index] = index + 1));
    else {
      Array(Math.abs(args[0]))
        .fill(args[0])
        .map((i, index) => (result[index] = args[0] + index));
    }
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
    } else if (args[0] < args[1] && args[2] === 0) {
      result.push(args[0]);
    }
    if (args[0] === 0 && args[1] === 0) {
      result.push(args[0]);
    } else if (args[0] === args[1] && args[2] <= 0) {
      result.push(args[0]);
    } else if (args[0] === args[1] && args[2] >= 0) {
      result.push(args[0]);
    }
    if (args[0] > args[1] && args[2] < 0) {
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
    } else if (args[0] > args[1] && args[2] === 0) {
      result.push(0);
    }
  }
  return result;
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
