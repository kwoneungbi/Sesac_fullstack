# **변수, 식별자, 호이스팅이란?**

> ✍ **목표** : Javascript 기초부터 탄탄히 공부하기

## 🔎 변수(variable)란?

- 하나의 값을 저장하기 위해 확보한 메모리 공간 그 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.
- 자바스크립트에서 변수는 데이터를 저장하고 참조하는 데 사용되는 식별자이다.

### **변수가 왜 필요한가?**

1. **재사용**: 변수를 사용하면 데이터를 한 번만 설정하고 필요할 때마다 다시 사용할 수 있다.
2. **메모리 효율**: 같은 값을 여러 번 사용해야 하는 경우, 그 값을 변수에 저장하면 메모리 사용량을 줄일 수 있다.
3. **코드 가독성**: 적절한 이름의 변수를 사용하면 코드가 무엇을 하는지 이해하기 쉽게 만들어 준다.

## 🔎 식별자(identifier)란?

- 프로그래밍 언어에서 변수, 함수, 객체 등을 구별하기 위해 사용하는 이름이다.
- 변수 이름을 식별자라고도 한다.
- 메모리 상에 존재하는 어떤값을 구별해서 식별할 수 있는 고유한 이름을 말한다.
- 값이 아니라 `메모리 주소`를 기억하고 있다.
- `선언`에 의해 자바스크립트 엔진에 식별자의 존재를 알린다.
- 모든 식별자는 실행 컨텍스트에 등록된다.

```jsx
var js = 10; // 'js'는 식별자이다.
function myFunc() {} // 'myFunc'는 식별자이다.
```

## 🔎 변수 선언(variable declaration)이란?

- 변수를 생성하는 것을 말한다.
- 값을 저장하기 위한 메모리 공간을 확보하고 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것이다.
- 변수를 사용하려면 반드시 선언이 필요하다.
- 변수를 선언할 때는 `var`, `let`, `const` 키워드를 사용한다.

**변수 키워드란?**

ES6에서 let과 const 키워드가 도입되기 전까지는 var 키워드로만 변수를 선언할 수 있었다.
키워드는 자바스크립트 코드를 해석하고 실행하는 자바스크립트 엔진이 수행할 동작을 규정한 일종의 명령어이다.
자바스크립트 엔진은 키워드를 만나면 자신이 수행해야 할 약속된 동작을 수행한다.
예를 들어 var 키워드를 만나면 var 뒤에 오는 변수 이름으로 새로운 변수를 선언한다.

### **var**

이 키워드로 선언된 변수는 함수 레벨 범위를 가진다(function-level scope).
즉, 변수는 선언된 함수 내에서 어디서든 접근할 수 있다.
또한, var로 선언된 변수는 호이스팅(hoisting)이라는 특성을 가지며, 이는 변수가 자신의 스코프의 최상단으로 '끌어올려'짐을 의미한다.

```jsx
function f() {
  console.log(myVar); // undefined
  var myVar = 5;
  console.log(myVar); // 5
}
```

### **let**

이 키워드로 선언된 변수는 블록 레벨 범위(block-level scope)를 가진다.
즉, let으로 선언된 변수는 그것이 포함된 중괄호({}) 내에서만 접근할 수 있다.
let으로 선언한 변수도 호이스팅되지만 초기화하기 전에 참조하려고 하면 오류가 발생한다(Temporary Dead Zone).

```jsx
if (true) {
  console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
  let myLetVar = 5;
}
```

### **const**

const도 let과 같은 범위 규칙을 따르지만 한 번 할당하면 값을 변경할 수 없다.
그러나 객체를 const로 선언하는 경우 객체 자체는 변경할 수 없지만 그 속성은 변경할 수 있다.

```jsx
const myConst = "hello";
myConst = "world"; // TypeError: Assignment to constant variable.

const myObj = { id: 1, name: "홍" };
myObj.id = 2;
console.log(myObj); // {id: 2, name: '홍'}
```

## 🔎 변수 선언의 실행 시점과 변수 호이스팅

자바스크립트에서 호이스팅(hoisting)은 변수와 함수 선언이 그들의 포함 범위의 최상단으로 끌어올려지는 자바스크립트의 동작을 의미한다. 이는 코드가 실행되기 전에 발생하며, 코드 내에서 변수나 함수를 선언하기 전에 참조하거나 호출할 수 있게 한다.

**var 키워드와 호이스팅**:

var로 선언된 변수는 호이스팅되며, 초기화 없이 참조하면 `undefined`를 반환한다.

```jsx
console.log(myVar); // undefined
var myVar = 5;
```

**let 키워드와 호이스팅**:

let으로 선언된 변수도 호이스팅되지만, "일시적 사각 지대(Temporal Dead Zone, TDZ)" 때문에 초기화 전에 접근하려고 하면 ReferenceError가 발생한다.

```jsx
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
```

**const 키워드와 호이스팅**:

const로 선언된 변수도 마찬가지로 호이스팅되고 TDZ 규칙을 따른다.
따라서 초기화 전에 접근하려고 하면 에러가 발생한다.

```jsx
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 15;
```

**함수 선언과 호이스팅**:

함수선언(function declarations)은 이름과 함께 전체적으로 끌어올려진다.
이것은 함수선언을 정의하기 전에 호출할 수 있다는 것을 의미한다.

```jsx
console.log(myFunc()); // "Hello World"
function myFunc() {
  return "Hello World";
}
```

그러나 주의해야 할 점은, 함수표현식(function expressions)과 화살표 함수(arrow functions)는 끌어올려지지 않는다.

```jsx
console.log(myFunc()); // TypeError: myFunc is not a function

var myFunc = function () {
  return "Hello World";
};
```

호이스팅은 자바스크립트 엔진의 작동 방식 때문에 발생한다.
이를 방지하기 위해 변수와 함수는 사용하기 전에 선언하는 것이 좋다.

## 🔎 식별자 네이밍 규칙

1. 알파벳 문자, 달러 기호($), 밑줄(\_)로 시작할 수 있습니다.첫 글자 이후에는 숫자도 포함될 수 있다.
2. 대소문자를 구분한다 (즉, "myVariable"와 "myvariable"은 서로 다른 변수이다).
3. 자바스크립트의 예약어(like var, const, let 등)를 식별자로 사용할 수 없다.

추가적으로 좋은 네이밍 관례를 따르면 코드의 가독성을 향상시킬 수 있다.

- 의미 있는 이름: 변수나 함수의 이름은 그것이 하는 일을 명확하게 반영해야
- 카멜 케이스 사용: 여러 단어로 이루어진 식별자는 첫 번째 단어를 소문자로 시작하고 그 후의 각 단어는 대문자로 시작하는 카멜 케이스(camelCase)를 사용하는 것이 일반적이다 (예: myFirstVariable).
- 상수에 대한 대문자와 언더스코어 사용: 상수(constant) 값은 모두 대문자와 언더스코어를 사용하여 작성되곤 한다. (예: MAX_COUNT).

식별자 네이밍 규칙과 관례를 따르면 코드가 무엇을 하는지 이해하기 쉬워지며, 코드 유지 보수도 용이해진다.
