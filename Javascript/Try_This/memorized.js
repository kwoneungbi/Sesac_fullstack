/* 문제 : 피보나치 수열을 memoized로 출력하는 함수를 작성해 보세요. 
수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다. */

const fibonacci = (n) => {
  // fibonacci 함수는 내부에서 재귀적으로 호출되며, 피보나치 수열 값을 계산한다.
  const memo = {}; // memoization

  const fib = (n) => {
    if (n < 2) return n;

    if (n in memo) return memo[n];

    memo[n] = fib(n - 2) + fib(n - 1);
    return memo[n];
  };

  const fibSequence = [];
  for (let i = 0; i <= n; i += 1) fibSequence[i] = fib(i);
  /* 주어진 입력값(n)까지 반복문(for)을 사용하여 각 인덱스에 대한 피보나치 수열 값을 구하고, 배열(fibSequence)에 추가한다.
  반복문이 종료되면 최종적으로 구해진 피보나치 수열 배열을 반환한다. */
  return fibSequence;
};

console.log(fibonacci(5));
console.log(fibonacci(9));

// ----------------------------------------------------------------

// for문으로 먼저 작성해 보기

const fib1 = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i += 1) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
};
console.log(fib1(5));

// ----------------------------------------------------------------

// 재귀함수로 작성해 보기

function fib(n, arr = [0, 1]) {
  if (n === arr.length) {
    return arr;
  }

  const nextArr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];

  return fib(n, nextArr);
}

console.log(fib(6126)); // 6126 초과되면 stack overflow됨
