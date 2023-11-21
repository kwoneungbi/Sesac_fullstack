## **제 10장 Generic**

> ### **📌 chapter1: generic function**

js에서 아래 Identity 함수는 모든 가능한 타입으로 input을 받고 동일한 input을 출력한다고 가정해보자.
그렇다면 여기서 매개변수 타입과 반환 타입을 어떻게 설명해야 할까.

```typescript
function identity(input) {
  return input;
}

identity("string");
identity(123);
identity({ id: 1, name: "string" });
```

input을 any로 선언할 수 있지만 그렇게 되면 함수의 반환 타입도 any가 된다.

```typescript
function identity1(input: any) {
  return input;
}

let value = identity1(42); // value는 any 타입이다.
```

> ### **📌 chapter2: generic interface**

인터페이스도 제네릭으로 선언할 수 있다.
인터페이스는 함수와 유사한 제네릭 규칙을 따르며 인터페이스 이름 뒤< >사이에 선언된 임의의 수의 타입 매개변수를 갖는다.

> ### **📌 chapter3: generic class**

> ### **📌 chapter4: generic class**
