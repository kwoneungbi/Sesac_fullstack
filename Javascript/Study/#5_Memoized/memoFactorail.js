import assert from "assert";

const memoized = (fn) => {
  const memo = { 1: 1, 2: 2, 3: 6 };

  return (k) => {
    return memo[k] || (memo[k] = fn(k));
  };
};

const memoizedFactorial = memoized((n) => {
  // 재귀함수 작성
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

assert.deepEqual(memoizedFactorial(3), 6);
assert.deepEqual(memoizedFactorial(5), 120);
