let mcnt = 0;
const memoizedFibonacci = memoized(function (n) {
  mcnt += 1;
  // console.log('🚀  mcnt:', mcnt);
  if (n <= 1) return n;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const MAX_CALLABLE = 5000;
function neverFullCallStack(n, fn) {
  for (let i = 1; i < Math.floor(n / MAX_CALLABLE); i += 1) {
    console.log(i, i * MAX_CALLABLE);
    fn(i * MAX_CALLABLE);
  }

  return fn(n);
}

// const nfcs1 = neverFullCallStack(100, memoizedFibonacci);
const nfcs1 = neverFullCallStack(50000, memoizedFibonacci);
console.log("🚀  nfcs1:", nfcs1);
// console.log('org>>', memoizedFibonacci(50000));

function neverFullV1(fn) {
  const maxCallable = 5000;

  return function (n) {
    for (let i = 1; i < Math.floor(n / maxCallable); i += 1) {
      console.log(i, i * maxCallable);
      fn(i * maxCallable);
    }

    return fn(n);
  };
}

function neverFullV2(fn) {
  const maxCallable = 5000;
  let step = 0;
  let n = 0; // 100

  return function A(k) {
    console.log("A=", k);
    if (k < maxCallable || (n !== 0 && k >= n)) {
      const ret = fn(k < maxCallable ? k : n);
      step = n = 0;
      return ret;
    }

    if (n === 0) n = k;
    step += 1;
    fn(step * maxCallable);
    return A(step * maxCallable); // 5 10 ... 95
  };
}

const neverFullFibonacci = neverFullV2(memoizedFibonacci);
console.log("ret>>", neverFullFibonacci(4));
console.log("ret>>", neverFullFibonacci(8));
console.log("ret>>", neverFullFibonacci(100));
console.log("ret>>", neverFullFibonacci(50000));
