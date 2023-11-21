# 재귀함수, TCO, Memoization

> 오늘 강의에서 배운 자바스크립트의 재귀함수, TCO, Memoization에 대해 어려워서 공부하려고 velog에 작성해본다.. 처음 들어본 용어들이라 너무 어려웠다🥲

## 📌 재귀 함수 (Recusive Function)

- 재귀 함수는 함수가 자기 자신을 호출하는 것을 말한다.

재귀 함수로 코드 짜는 방법

1. 종료 조건 걸기
2. 종료가 아니면 이전 실행 결과와 조합하여 리턴

주어진 수보다 작거나 같은 모든 양의 정수를 곱하는 재귀 함수로 만들어보려고 한다.

```js
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120

/* 
내가 작성한 코드이다. 

1. if를 사용하여 factorial 함수는 aguments n이 1경우 반환을 한다. 
2. 아닐경우, n * factorial(n - 1)을 반환한다. 이때 factorial(n - 1) 이 부분을 재귀 호출이라고 한다. 자기 자신을 호출하는 것이다.
*/
```

내가 작성한 위의 코드는 잘못 작성한 코드이다ㅠ
if문 안에 `n === 1` 이것만 작성시 함수 호출시에 오류가 뜨지않아 잘 작성한 줄 알았는데.. 정확하게 작성하면 n === 0 || n === 1 이렇게 적어줘야 한다고 했다.

factorial(0)은 수학적으로 1로 정의 되어있다.
0은 1이 아니기때문에 재귀 호출이 계속 되어 결국 음수로 내려가게 되고,
스택 오버플로우 에러를 발생시키게 된다.
![](https://velog.velcdn.com/images/eungbi/post/91e26e9d-9abe-4dca-9335-c9955091f263/image.png)
함수 호출을 factorial(0) 이걸로 안해봐서 오류가 있는지 몰랐다.

```js
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
```

✔️ 이렇게 작성하기!!

## 📌 TCO (Tail Call Optimization)

- 재귀 함수에서 발생하는 스택 오버플로우를 방지하기 위한 최적화 기법이다.
- 재귀 함수는 각각의 재귀 호출마다 새로운 스택 프레임을 생성하고 이전 스택 프레임을 유지한다. 이로 인해 깊은 재귀 호출이 발생하면 스택 오버플로우가 발생할 수 있다.
- return문 직전에 재귀 함수 호출만 존재한다.(재귀 결과만 반환)

```js
function factorial(n, acc = 1) {
  if (n <= 1) {
    return acc;
  } else {
    return factorial(n - 1, n * acc);
  }
}

console.log(factorial(5)); // 120

/* 
factorial 함수에서 return factorial(n - 1, n * acc); 부분이 테일 호출이다.
factorial 함수의 마지막 연산이 또 다른 factorial 함수를 호출한다.

*/
```

하지만 현재 대부분의 JavaScript 엔진은 TCO를 지원하지 않기 때문에 실제로 이 코드를 많은 수의 인자와 함께 실행하면 "Maximum call stack size exceeded" 오류가 발생할 수 있다. ✔️ CMAScript 6 (ES6) 명세에서는 TCO가 포함되어 있지만 아직 모든 브라우저와 Node.js가 이 기능을 구현하거나 활성화하지는 않는다고 한다.
TCO가 어떤것인지만 인지하고 있어야 겠다.

## 📌 memoize Function

> 이 memoize 함수가 제일 어려웠다. 복습하고 또 복습해야겠다.

- 계산 결과를 메모리에 저장하여 동일한 계산의 반복을 피하도록 하는 기법이다.
- 동적 프로그래밍에서 자주 사용되며, 복잡한 계산이나 재귀 함수에서 효과적이다.

아랜는 숫자를 제곱하는 함수에 memoize를 적용한 코드이다.

```js
let cache = {};

function memoizedSquare(n) {
  if (n in cache) {
    return cache[n];
  } else {
    const result = n * n;
    cache[n] = result;
    return result;
  }
}

console.log("1st Call: " + memoizedSquare(4)); // "1st Call: 16"
console.log("2nd Call: " + memoizedSquare(4)); // "2nd Call: 16"

/*
함수를 처음 호출할 때는 계산 결과를 cache라는 객체에 저장하고, 이후에 같은 숫자로 함수를 다시 호출하면 이미 계산된 결과가 cache에서 바로 반환된다.
첫 번째 호출에서의 계산 결과를 기억해두었다가 두 번째 호출에서 재사용하는 것이다. 
이것이 바로 메모이제이션의 기본 원리이다.
*/
```

오늘 강의 때 배운 memoize function 코드이다.

```js
const memoized = (fn) => {
  const memoizedTable = {};
  return (k) => memoizedTable[k] || (memoizedTable[k] = fn(k));
};

const memoizedFactorial = memoized((n) => {
  memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

let memoizedFactorialRunCnt = 0;
console.log(memoizedFactorial(3)); // 6
console.log(memoizedFactorial(5)); // 120
console.log(`runCnt=${memoizedFactorialRunCnt}`); // runCnt=5

/*
1. memoized라는 고차 함수를 정의한다. 이 함수는 다른 함수 fn을 인자로 받아서 새로운 함수를 반환한다.
2. 반환된 함수는 입력값 k에 대해 이미 계산된 결과가 있으면 그 결과를 바로 반환하고, 없으면 fn(k)를 실행하여 그 결과를 저장한 후 반환한다.
3. 다음으로 팩토리얼 계산 함수인 memoizedFactorial을 정의한다. 이 때 memoized함수에 인자로 넘기는 익명함수가 실제 팩토리얼 계산 로직이다.
4. 메모이제이션된 팩토리얼 함수가 실행되는 횟수를 카운트하기 위해memoizedFactorialRunCnt라는 변수도 함께 선언하였다.
*/
```

위의 코드로 이전에 한 번도 계산하지 않은 값은 처음으로 계산하고 그 결과를 저장하며, 이미 한 번 이상 계산했던 값은 저장해 둔 값을 바로 사용하여 중복된 연산을 피하게되었다.

#### 📍 memoize 적용할 때 주의 사항

동일한 입력값에 대해 함수가 항상 동일한 결과값을 반환한다는 가정 하에 메모이제이션을 사용할 수 있다. 만약 입력값과 상관없이 결과값이 변할 수 있는 함수(랜덤 값을 반환하는 함수)라면 메모이제이션을 적용하면 안된다.
