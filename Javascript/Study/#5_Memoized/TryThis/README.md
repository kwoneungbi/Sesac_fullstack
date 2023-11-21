# Try This: memoization

### **📌 문제 1**<br>

피보나치 수열을 memoized하여 출력하는 함수를 작성해 보세요.<br>
수열의 규칙은 f(n) = f(n - 2) + f(n - 1) (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.<br><br>
fibonacci(5); // 5<br>
fibonacci(7); // 13

### **📌 문제 2**<br>

문제 1번의 memoizedFibonacci를 CallStack이 풀 나지 않도록하는 neverFullCallStack 함수를 만들어 보시오.

```js
const neverFullFibonacci = neverFullV2(memoizedFibonacci);
console.log("ret>>", neverFullFibonacci(4));
console.log("ret>>", neverFullFibonacci(8));
console.log("ret>>", neverFullFibonacci(100));
console.log("ret>>", neverFullFibonacci(50000));
```
