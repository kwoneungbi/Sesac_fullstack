# **함수 (Function)**

> 함수는 하나의 단위로 실행되는 문(statement)들의 묶음. 함수도 객체다.

매개변수는 함수 실행 컨텍스트에 별도 생성 (primitive면 값을, reference type이면 해당 주소를 받는다.)

### **🔎 함수 생성 방식**

1. 함수 선언식<br>
   `function f() {...}`
2. 함수 표현식<br>
   `const f = function ff() {...}` , `const f2 = function() {...}` -> 익명함수 표현식
3. Function 생성자 함수
   `new Function('a', 'b', 'return a + b')`

(Javascript 함수는 사실 Function 객체이다.)

### **🔎 즉시 호출 함수(IIFE)**

```javascript
(function() {
  ...
})();
```

- 불필요한 전역 변수와 메모리 낭비를 줄일 수 있다.
- closure(private) / 부분 await 활용 가능하다.
  `(async function() {
  await fetch();
})()`

### **🔎 화살표 함수(Arrow Function)**

- object method와 같은 non-constructor
- argument 객체(배열) 없다.
- 함수를 반환하는 고차 함수에 사용하기 좋다.
  `const f = () => {...};`

**생략가능**

1. function keyword
2. 매개변수가 1개라면 매개변수의 괄호
3. body가 1개 문장이면 중괄호와 return문

내부/콜백 함수 시 this가 외부(상위/전역) 객체이다.

```js
$btn1.addEventListener("click", function () {
  console.log("Click11!!!!!", this); // button
});

$btn2.addEventListener("click", () => {
  console.log("Click22!!!!!", this); // window
});
```

### 함수의 호출 방식과 this

> 호출 방식: 일반함수 | 메서드 | 생성자 함수

cf. node로 실행했을때 전역 this는 window와 다르다!!

```javascript
const obj = {
  name: "objName",
  bark() {
    // 호출한 객체
    console.log("bark=", this.name);
  },
  bark2: () => {
    // this = 전역
    console.log("bark2=", this.name);
  },
};

obj.bark(); // bark= objNeme
obj.bark2(); // bark2= undefined
```

### call, apply, bind

```javascript
fn.call(thisBindingObject, args1, args2, ...);
fn.apply(thisBindingObject, [args1, ...]);

const bindFn = fn.bind(thisBindingObject);
bindFn(args1, args2, ...)
```
