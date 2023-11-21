/* factorial을 재귀함수, TCO, memoized로 작성해보세요. */

/* 재귀함수 -------------------------------- */
const factorial = (n) => {
  if (n < 2) return n;
  return n * factorial(n - 1);
};
console.log(factorial(3)); // 6

/* memoized -------------------------------- */
function memoized(fn) {
  const memo = {}; // {3: 6, 5: 120}
  return function (k) {
    return memo[k] || (memo[k] = fn(k));
  };
}
const memoizedFactorial = memoized(function (n) {
  memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

let memoizedFactorialRunCnt = 0;
console.log("3=", memoizedFactorial(3));
console.log("6=", memoizedFactorial(5));
console.log(`runCnt=${memoizedFactorialRunCnt}`);

const factorial1 = (n) => {
  if (n < 2) return n;
  return n * factorial(n - 1);
};
console.log(factorial1(9188)); // Infinity
