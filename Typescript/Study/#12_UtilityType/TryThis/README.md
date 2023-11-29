# Try This: Omit, Record, Parameter

1. Omit: 다음 UserProfile 타입을 type 또는 interface로 정의하시오.

```ts
type User = { id: number; name: string; age: number };
type UserProfile = …
interface UserProfile …
let iUser: UserProfile = { id: 1, name: 'Hong', addr: 'Seoul' };
```

2. Record: 다음 객체들을 하나로 합쳐(extend) 보세요.

```ts
let users = [
    {name: 'Hong'},
    {age: 23},
    {id: 1, addr: 'Seoul'},
];

type FullUser…
const userProfile: FullUser = …
```

3. Parameters: regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.

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
