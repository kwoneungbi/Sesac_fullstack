import assert from "assert";

// 1. memoize
const fibonacci = (() => {
  const memo = [0, 1];

  return (n) => {
    if (memo[n]) return memo[n];
    for (let i = memo.length; i <= n; i += 1) {
      memo[i] = memo[i - 2] + memo[i - 1];
    }
    return memo[n];
  };
})();

assert.deepEqual(fibonacci(5), 5);
assert.deepEqual(fibonacci(7), 13);

// 2. memoize Recursive
const memoizedFibo = (fn) => {
  const memo = [1];

  return (k) => {
    return memo[k - 1] || (memo[k - 1] = fn(k));
  };
};

const fibonacciRecur = memoizedFibo((n) => {
  if (n <= 1) return n;
  return fibonacciRecur(n - 1) + fibonacciRecur(n - 2);
});

assert.deepEqual(fibonacciRecur(5), 5);
[1, 1, 2, 3, 5];
assert.deepEqual(fibonacciRecur(7), 13);
[1, 1, 2, 3, 5, 8, 13];
