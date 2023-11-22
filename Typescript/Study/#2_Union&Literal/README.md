# **유니언과 리터럴**

## 타입 별칭(alias)

자주 사용될 타입에 이름을 붙이자!

```ts
const something = ({
  id,
  name,
  age,
}: {
  id: number;
  name: string;
  age: number;
}) => {
  // Do something...
};
```

id, name, age를 갖는 객체를 사용할 일이 많거나 이런 객체를 매개변수로 받는 함수가 많다면 type을 만들어서 사용하면 좋다.

```ts
type PersonInfo = {
  id: number;
  name: string;
  age: number;
};

const something = ({ id, name, age }: PersonInfo) => {
  // Do something...
};
```

타입 별칭은 타입 애너테이션과 마찬가지로 자바스크립트로 컴파일되지 않는다. <br> 순전히 타입 시스템에만 존재하므로 런타임 코드에서는 참조할 수 없다.<br> 런타임에 존재하지 않는 항목에 접근하려고 하면 타입 오류가 난다.

## **🔎유니언 타입**

> 유니언(union, |): 값에 허용되는 타입을 두 개 이상의 가능한 타입으로 확장하는 것

```ts
type Person = {
  name: string;
  age: number;
  phone: number | string; // 유니언 타입
};
```

유니언으로 선언한 모든 타입에 존재하는 속성에만 접근 가능하다.

```ts
type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};
```

```ts
const member: Member = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
const guest: Guest = {
  name: "김길동",
  age: 28,
};
const who = Math.random() > 0.5 ? member : guest;

who.name = "마길동"; // OK 접근 가능

// Error! Property 'discountRate' does not exist on type 'Member | Guest'.
//  Property 'discountRate' does not exist on type 'Guest'.
const price = 10000 - 10000 * who.discountRate;
```

name 프로퍼티는 Member 타입과 Guest 타입 모두에 존재하므로 접근 가능하다!

discountRate 프로퍼티는 Member 타입에만 존재하고 Guest 타입에는 존재하지 않으므로 접근 불가능하다.

## **🔎 유니언 타입 - narrowing과 type guard**

> 유니언 타입에서 특정 타입에만 존재하는 속성에 접근하고싶다면?
> type guard를 통해 type narrowing하기

- `내로잉(narrowing)`: 값이 더 구체적인 타입임을 코드에서 유추하는 것
- `타입 가드(type guard)`: narrowing을 하기 위한 논리적인 검사

1. 값 할당을 통한 내로잉 (x = 1)
2. typeof 검사를 통한 내로잉
3. 조건 검사를 통한 내로잉 (if x === 'stringValue')
4. in
5. instanceof
6. Array.isArray

## **🔎 리터럴 타입**

원시값 자체가 리터럴 타입이 된다.

```ts
const name = "eunbi"; // name: "eunbi" type
```

## **🔎 strictNullChecks**

엄격한 null 검사 활성화 / 비활성화: null 혹은 undefined 값을 참조/할당 했을 때 타입 에러 발생 여부
⇒ 10억 달러의 실수! (NullPointerException) ⇒ `strict: true`

![](https://velog.velcdn.com/images/eungbi/post/278ee1ba-b493-473e-bbe9-4ca5d733a86d/image.png)

`엄격한 null 검사 활성화`: 다른 타입이 필요한 위치에서 null 혹은 undefined 값을 참조/할당 하는 것을 방지한다! (즉, 활성화해야만 null 및 undefined에 대해한 오류로 부터 안전해진다!)<br>
타입스크립트 컴파일러 옵션 중 하나인 strictNullChecks는 엄격한 null 검사를 활성화할지 여부를 결정한다.
<br>
`true`: null 혹은 undefined 값을 참조/할당 하는 것을 방지한다.
