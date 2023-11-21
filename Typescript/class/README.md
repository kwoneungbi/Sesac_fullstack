## 유니언 타입에서 특정 타입에만 존재하는 속성에 접근하고싶다면?

> type guard를 통해 type narrowing!!!

- 내로잉(narrowing): 값이 더 구체적인 타입임을 코드에서 유추하는 것
- 타입 가드(type guard): narrowing을 하기 위한 논리적인 검사

1. 값 할당을 통한 내로잉 (x = 1) assignable infer the value type
2. typeof 검사를 통한 내로잉
3. 조건 검사를 통한 내로잉 (if x === 'stringValue')
4. in
5. instanceof
6. Array.isArray

### 1. 값 할당을 통한 내로잉

변수에 값을 직접 할당하면 할당된 값의 타입으로 좁혀진다!

```typescript
type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

let who: Member | Guest;
who = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
// who; // const who: Member
const price = 10000 - 10000 * who.discountRate;
```

### 2. typeof 검사를 통한 내로잉

```typescript
type Member = {
  name: string;
  spend: number[];
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  spend: number;
  age: number;
};

const member: Member = {
  name: "hong",
  spend: [1000, 30000, 50000],
  addr: "yong",
  discountRate: 0.1,
};
const guest: Guest = {
  name: "kim",
  spend: 5500,
  age: 28,
};

/*
reduce는 Array 타입에만 존재한다.
조건식 블록 내에서는 타입이 좁혀진다.

블록을 빠져나오면 who.spend의 타입은 다시 number | number[] 타입이 되므로 reduce() 함수 사용 불가 => 타입스크립트는 truthy로 확인된
일부에 한해서만 변수의 타입을 좁힐 수 있다.

*/
const who = Math.random() > 0.5 ? member : guest;

let totalAmount: number;
if (typeof who.spend !== "number") {
  totalAmount = who.spend.reduce((s, c) => s + c, 0);
} else {
  totalAmount = who.spend;
}
// who.spend.reduce((s, c) => s + c, 0); // Error!!
```

이전 예제에서 if문의 조건식은 who.spend의 타입만 검사할 뿐이다.
=> who.spend의 타입만 narrowing
who.spend의 타입이 number[] 타입이라고해서 who의 타입이 Member로 narrowing된 것이 아님!

```typescript
const who = Math.random() > 0.5 ? member : guest;

let totalAmount: number;
if (typeof who.spend !== "number") {
  totalAmount = who.spend.reduce((s, c) => s + c, 0);
  who.discountRate; // Error Property 'discountRate' does not exist on type 'Member | Guest'.
} else {
  totalAmount = who.spend;
}
// who.spend.reduce((s, c) => s + c, 0); // Error
```

### 3. 조건 검사를 통한 내로잉

```typescript
// let gilding: false | string
let gildong = Math.random() > 0.5 && "HongGilDong";

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  gildong; // false | string
}
/*
if문 블록 내에서 gildong의 타입은 string 타입으로 좁혀졌기 때문에 toUpperCase() 함수 사용이 가능하다.
*/
```
