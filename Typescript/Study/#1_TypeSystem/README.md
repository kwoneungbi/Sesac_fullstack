# **타입 시스템**

## **🔎 타입의 종류**

> 타입이 인식하는 `원시 타입(Primitive Type)`

- null
- undefined
- boolean // true 혹은 false
- string // "", "Hi", "abc123" …
- number // 0, 2.1, -4, …
- bigint // 0n, 2n, -4n, …
- symbol // Symbol(), Symbol("hi"), …

타입스크립트는 자바스크립트를 포함하는 슈퍼셋(상위확장)이므로 자바스크립트가 지원하는 타입을 그대로 사용 가능하다.

## **🔎 타입시스템**

> 프로그래밍 언어가 프로그램에서 가질 수 있는 타입을 이해하는 방법에 대한 규칙 집합

<br>

**✔️ 타입스크립트의 타입 시스템이 코드를 이해하는 방법** <br>

1. 코드를 읽고 존재하는 모든 타입과 값을 이해
2. 각 값이 초기 선언에서 가질 수 있는 타입 확인
3. 각 값이 추후 코드에서 어떻게 사용될 수 있는지
   모든 방법을 확인
4. 값의 사용법이 타입과 일치하지 않으면 사용자에게 오류 표시

## **🔎 타입 추론과정**

```ts
let firstName = "Tom";
firstName.length();

// Error : This expression is not callable.
// Type 'Number' has no call signatures.
```

**✔️ 타입스크립트가 오류를 표시하는 순서** <br><br>

1. 코드를 읽고 firstName이라는 변수 이해
2. 초깃값이 "Tom"이므로 firstName은 string 타입이라고 결론 지음
3. firstName의 .length멤버를 함수처럼 호출하는 코드 확인
4. string의 .length 멤버는 함수가 아닌 숫자라는 오류를 표시. <br><br>
   즉, 함수처럼 호출 할 수 없음

## **🔎 구문(문법) 오류 VS 타입 오류**

> 타입스크립트를 작성하는 동안 가장 자주 접하게 되는 오류 두가지!

- `구문(문법) 오류` : 타입스크립트가 자바스크립트로 변환되는 것을 차단한 경우
- `타입 오류` : 타입 검사기에 따라 일치하지 않는 것이 감지된 경우

1. 구문(문법) 오류 <br>
   타입스크립트가 코드로 이해할 수 없는 잘못된 구문을 감지할 때 발생<br>
   출력된 자바스크립트를 실행하기 전에 구문 오류를 수정 하는 것이 좋다.

```ts
let let wat;
//Error : ',' expected.

//타입스크립트 컴파일러 버전에 따라
//컴파일된 자바스크립트 결과
let let, wat;
```

2. 타입 오류 <br>
   타입스크립트의 타입 검사기가 프로그램의 타입에서 오류를 감지했을 때 발생<br>
   자바스크립트를 실행하기 전에 타입 오류를 확인하고
   발견된 문제를 해결하는 것이 가장 좋다.

```ts
console.bulb("No Pain, No Gain!!");
//Error : Property 'bulb' does not exist on type 'Console'.

// -> 구문상 유효하지만 코드가 실행될 때 충돌할 가능성이 있음을 감지
```

## **🔎 할당가능성**

> 타입스크립트에서 함수 호출이나 변수에 값을 제공할 수 있는지 여부를 확인 하는 것

```ts
let firstName = "Kim";
firstName = "Kwon"; // 동일한 string 타입이므로 가능

let lastName = "eunbi";
lastName = true; // error!!

//Error : Type 'boolean' is not assignable to type 'string'.
```

Type " "is not assignable to type " "형태의 오류는
타입스크립트에서 만나게 되는 가장 일반적인 오류 중 하나이다.

해당 오류메세지에서 언급된 첫번째 type은 코드에서 변수에 할당하려고 시도하는 값이며,
두번째 type은 첫번째 타입, 즉 값이 할당되는 변수이다.

## **🔎 타입 애너테이션(Type Annotation)**

> 진화하는 any

```ts
let rocker; // type : any

rocker = "Alice"; // type : string
rocker.toUpperCase(); // OK!

rocker = 12.34; // type : number
rocker.toPrecision(1); // OK!

rokcker.toLowerCase();
//
// Error : 'toLowerCase' does not exist on type 'number'.
```

any 타입을 사용해 any 타입으로 진화하는 것을 허용하게 되면 타입스크립트의 타입 검사 목적을 부분적으로 쓸모없게 만든다.
최대한 any 타입은 사용을 지양하는것이 좋다.

> 불필요한 에너테이션

```ts
let rocker: string = "Alice";

// string 타입 애너테이션은 중복
// 타입 표기가 필요하지 않음
// myName은 이미 타입스크립트가
//‘string’ 타입임을 유추할 수 있기 때문
```

## **🔎 타입 형태**

```ts
let rapper = "Tom";

rapper.length; // OK

rapper.push("!");
//Error : Property 'push' does not exist on type 'string'.
```

나중에 rapper 변수를 사용할 때 타입스크립트가
string 타입에서 사용 가능한 작업만을 허용한다.
타입스크립트가 string 타입에서 작동하는지 알 수 없는 작업은 허용되지 않는다.

```ts
let cher = {
  firstName: "John",
  lastName: "ahn",
};

cher.middleName;
//Error : Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.
```

cher 객체에 middleName 키가 없다는 것을
타입스크립트는 알고 오류를 표시한다.
타입스크립트는 객체의 형태에 대한 이해를 바탕으로
할당 가능성 뿐만 아니라 객체 사용과 관련된 문제도 알려준다.
