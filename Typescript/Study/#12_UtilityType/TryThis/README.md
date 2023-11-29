# Try This: Omit, Record, Parameter

1. Omit: 다음 UserProfile 타입을 type 또는 interface로 정의하시오.(omit.ts)

```ts
type User = { id: number; name: string; age: number };
type UserProfile = …
interface UserProfile …
let iUser: UserProfile = { id: 1, name: 'Hong', addr: 'Seoul' };
```

2. Record: 다음 객체들을 하나로 합쳐(extend) 보세요.(record.ts)

```ts
let users = [
    {name: 'Hong'},
    {age: 23},
    {id: 1, addr: 'Seoul'},
];

type FullUser…
const userProfile: FullUser = …
```

3. Parameters: regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.(parameters.ts)

```ts
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = <Parameters를 이용하여 이 부분을 작성해 보세요>;

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);
```

4. 특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기 (changeKeyType.ts)

```ts
interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}
type Change = < 이 부분을 작성하세요. >
type DeptCatain = Change<IDept, 'captain', IUser>;
type Err = Change<IDept, 'somekey', IUser>; // Error!!!
```

5. 두 타입을 합치는 Combine 유틸리티 타입 만들기(combine.ts)

```ts
interface IUser {
id: number;
age: number;
name: string;
}

interface IDept {
id: number;
age: string;
dname: string;
captain: string;
}

type Combine = < 이 부분을 작성하세요. >
type ICombined = Combine<IUser, IDept>;
```
