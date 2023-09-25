/* 피보나치 수열을 memoized를 출력하는 함수를 작성해 보세요. 
수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다. */

function solution(n) {
  const memo = {};

  function fib(n) {
    if (n <= 1) {
      return n;
    }

    if (n in memo) {
      return memo[n];
    }

    memo[n] = fib(n - 2) + fib(n - 1);
    return memo[n];
  }

  const fibSequence = [];
  for (let i = 0; i <= n; i++) {
    fibSequence.push(fib(i));
  }

  return fibSequence;
}

console.log(solution(5));
console.log(solution(10));

/* 
1. solution 함수 정의
solution 함수는 입력값 n에 따른 피보나치 수열을 반환합니다.

2. 메모이제이션(memoization)
memo라는 객체를 생성하여 이미 계산한 값을 저장합니다.
이렇게 함으로써 중복 계산을 피하고, 이미 계산된 값은 다시 사용할 수 있습니다.

3. fibonacci 함수 정의
내부에서 재귀적으로 호출되며, 피보나치 수열 값을 계산합니다.
기저 조건인 n <= 1일 때는 그대로 값을 반환합니다.
만약 이미 계산된 값인 경우(n in memo) 저장된 값을 반환합니다.
그렇지 않은 경우에는 재귀적으로 호출하여 fibonacci(n - 2)와 fibonacci(n - 1)을 더한 후, 결과를 저장하고 반환합니다.

4. 피보나치 수열 계산 및 반환
주어진 입력값(n)까지 반복문(for)을 사용하여 각 인덱스에 대한 피보나치 수열 값을 구하고, 배열(fibSequence)에 추가합니다.
반복문이 종료되면 최종적으로 구해진 피보나치 수열 배열을 반환합니다. 
*/
