# Utility Type

> 오늘은 수업때 배운 Typescript의 Utility Type에 대해 복습할겸 정리해 보려고 한다.

### 🔎 Omit<Type, Keys>

**Omit<T,K>: T에서 K에 해당하는 속성을 제외한다.**

```ts
type User = { id: number; name: string; age: number };

type OmitedAgeUser = Omit<User, "age">;
type OmitedIdAgeUser = Omit<User, "id" | "age">;
```

![](https://velog.velcdn.com/images/eungbi/post/2b7d559f-ed43-4dfa-b280-3dc0f922ec3d/image.png)![](https://velog.velcdn.com/images/eungbi/post/258d05e5-687c-42fa-b48d-2f036be83a6d/image.png)

```ts
// 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
type UserProfile = …
interface UserProfile …
let iUser: UserProfile = { id: 1, name: 'Hong', addr: 'Seoul' };
```

```ts
// 정답 !
type OmitedAgeUser = Omit<User, "age">;

type UserProfile = OmitedAgeUser & { addr: string };
interface UserProfile extends OmitedAgeUser {
  addr: string;
}
```

### 🔎 Pick<Type, Keys>

**Pick<T,K>: T에서 K에 해당하는 속성을 선택한다.**

```ts
type User = { id: number; name: string; age: number };

type PickIdName = Pick<User, "id" | "name">;
```

![](https://velog.velcdn.com/images/eungbi/post/32370d95-d180-40aa-bc72-f1ae4351ec6c/image.png)

### 🔎 Partial<Type\>

**Partial<T\>: T의 모든 속성을 선택적으로 만든다. 이를 통해 객체의 일부 속성만 설정할 수 있다. **

```ts
type User = { id: number; name: string; age: number };

type PartialUser = Partial<User>;
type PartialUser2 = Partial<User> & { name: string }; // name만 필수
let pu: PartialUser2 = { name: "eunbi" };
```

### 🔎 Required <Type\>

**Required<T\>: Type필수로 설정된 모든 속성으로 구성된 유형을 구성한다. **

```ts
interface Profile {
  name?: string;
  age?: number;
}
```

```ts
const obj: Required<Profile> = {
  name: "eunbi",
  age: 26,
}; // Profile이 옵셔널 이지만 Required를 사용하는 순간 필수 프로퍼티가된다.

const obj1: Required<Profile> = {
  age: 26,
}; // name을 작성하지 않아 error 발생
```

![](https://velog.velcdn.com/images/eungbi/post/b2aeb73c-76e9-4aa5-b31b-974bf0c6a9dc/image.png)

### 🔎 Record <Keys, Type>

**Record <Keys, Type>: 키 타입 K와 값 타입 T를 가지는 객체 타입을 생성하는 타입입니다. 주어진 키와 값의 쌍으로 이루어진 객체를 생성할 수 있다.**

```ts
// 문제1. 다음 객체들을 하나로 합쳐(extend) 보세요.

let users = [
    {name: 'Hong'},
    {age: 23},
    {id: 1, addr: 'Seoul'},
];

const userProfile: FullUser = …
```

```ts
// 정답
type FullUser = Record<string, string | number>;

const userProfile: FullUser = users.reduce(
  (acc, user) => ({ ...acc, ...user }),
  {}
);
```

`console.log(userProfile);` 아래 사진처럼 출력됨![](https://velog.velcdn.com/images/eungbi/post/c243f3b0-e2bc-4591-8920-a8564c9e2937/image.png)

### 🔎 Parameters<Type\>

**Parameters<Type\>: 함수 유형의 매개변수에 사용된 유형에서 튜플 유형을 구성한다.**

```ts
function registUser(name: string, age: number) {
  const id = 100;
  return { id, name, age };
}

type RegistUser = Parameters<typeof registUser>;

const param: RegistUser = ["Hong", 32];
const newUser = registUser(...param);
console.log("newUser:", newUser);
```

![](https://velog.velcdn.com/images/eungbi/post/84d8e841-5b0c-42ba-bac8-714e52dcd61a/image.png)

**TryThis: Parameters**

```ts
// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = <Parameters를 이용하여 이 부분을 작성해 보세요>;

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('newUser2:', newUser2);
```

```ts
// 정답
type RegistUserObj = Parameters<typeof registUserObj>[0];
```

### 🔎 ReturnType<Type\>

**ReturnType<Type\>: function 의 반환 유형으로 구성된 유형을 구성한다.**

```ts
function registUser(name: string, age: number) {
  const id = 100;
  return { id, name, age };
}

type RegistReturn = ReturnType<typeof registUser>;

type RegistUser = Parameters<typeof registUser>;
const param: RegistUser = ['Hong', 32];
const newUser: RegistReturn = registUser(...param);
console.log('newUser:', newUser);
appendUserCache(newUser);
function appendUserCache(p: ReturnType<typeof registUser>) {...}
```
