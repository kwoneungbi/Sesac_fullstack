// Generic - extends keyof
// keyof는 전체키 대상, extends keyof는 해당 property의 특정키를 직접 검사!

interface User {
  id: number;
  name: string;
}
interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
}
interface Product {
  id: number;
  name: string;
  price: number;
}

function get<T>(container: T, key: keyof T) {
  return container[key];
}
const user = get<Post>(post, "user");
/* const user: string | number | User 
get() 함수의 반환 타입은 모든 키에 대한 타입으로 유니언이 된다. */

function get1<T, k extends keyof T>(container: T, key: k) {
  return container[key];
}
const user1 = get1<Post, "user">(post, "user");
const user2 = get1(post, "user"); // 함수 타입 매개변수의 타입 인수는 생략 가능

// ----------------------------------------------------------------------
// Generic - in keyof

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type X<T> = {
  [x in keyof T]: T[keyof T];
};
type XDept = X<IDept>;
/* type XDept = {
    id: string | number;
    age: string | number;
    dname: string | number;
    captain: string | number;
} */

type Y<T> = {
  [x in keyof T]: T[x];
};
type YDept = Y<IDept>;
/* type YDept = {
    id: number;
    age: string;
    dname: string;
    captain: string;
} */

type Z<T, K extends keyof T> = {
  [x in K]: T[x];
};
type ZDept = Z<IDept, "id" | "age">;
/* type ZDept = {
    id: number;
    age: string;
} */

export {};
