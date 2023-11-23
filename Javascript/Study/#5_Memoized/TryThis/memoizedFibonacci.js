import assert from "assert";

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
