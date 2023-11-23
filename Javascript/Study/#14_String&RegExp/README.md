# **String & RegExp**

## **🔎 template literal**

> 템플릿 리터럴은 + 연산자를 사용하지 않고 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 문자열 인터폴레이션이라고 한다.<br>
> 문자열 인터폴레이션은 ${...}로 표현식을 감싸준다.

```js
const first = "Kwon";
const second = "Eunbi";

// ES6 이전에는 아래와 같이 문자열을 삽입하였다.
console.log("My name is" + first + " " + second + "."); // My name is Kwon Eunbi.

// ES6 부터 백틱(`)을 사용하여 아래와 같이 더 간단한 방법으로 작성할 수 있게 되었다.
console.log(`My name is ${first} ${second}.`); // My name is Kwon Eunbi.
```

함수의 매개변수로 템플릿 리터럴을 작성할 수 있는데 아래 예시를 보자.

```js
const name = "eunbi";
const templateFn = ([a, b], name) => console.log(`${a} ${name} ${b}`);

templateFn`내 이름은 ${name} 입니다.`;
// stirng은 첫번째 매개변수인 [a, b]에 순서대로 입력된다. 두번째 매개변수로는 name 변수가 입력된다.
```
