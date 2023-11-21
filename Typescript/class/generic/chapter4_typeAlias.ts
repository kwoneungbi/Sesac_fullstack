// Generic Type Alias - 제네릭 타입 별칭
// interface, class와 마찬가지로 타입 별칭에 제네릭을 사용할 수 있다.

type Nullish<T> = T | undefined | null;

function someFn(param: string): Nullish<number> {
  return param.length;
}

const len = someFn("hello, TS");
// console.log(len.toFixed()) // 'len' is possible 'null' or 'undefined'

// Generic - 판별된(discrimiiinated) 유니언
interface FailureResult {
  error: Error;
  succeeded: false; // 판별자(type property)
}
interface SuccessfulResult<Data> {
  data: Data;
  succeeded: true; // 판별자(type ptoperty)
}
type Result<T> = FailureResult | SuccessfulResult<T>;

function handleResult<Data>(result: Result<Data>) {
  if (result.succeeded) {
    console.log("we did it!", result.data); // SuccessfulResult<Data> 타입으로 내로잉
  } else {
    console.log(`Aww...${result.error}`); // FailureResult 타입으로 내로잉
  }
}

// Usage Example
interface IUser {
  id: number;
  name: string;
  age: number;
}
interface IDept {
  id: number;
  dname: string;
  age: string;
  captain: number;
}

function getUser(): Result<IUser> {
  return Math.random() > 0.5
    ? { error: new Error(), succeeded: false }
    : { data: { id: 1, name: "hong", age: 25 }, succeeded: true };
}

function getDept(): Result<IDept> {
  return Math.random() > 0.5
    ? { error: new Error(), succeeded: false }
    : {
        data: { id: 1, dname: "dev", captain: 10, age: "30" },
        succeeded: true,
      };
}

handleResult(getUser()); // function handleResult<IUser>(result: Result<IUser>): void
handleResult(getDept()); // function handleResult<IDept>(result: Result<IDept>): void

export {};
