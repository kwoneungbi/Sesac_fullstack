import assert from "assert";

const makeArray = (n) => {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
};

const makeArrayTco = (n, acc = []) => {
  if (n === 1) return [1, ...acc];
  return makeArrayTco(n - 1, [n, ...acc]);
};

assert.deepEqual(makeArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepEqual(makeArrayTco(5), [1, 2, 3, 4, 5]);
