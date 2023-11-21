// Generic - 제네릭 제한자(기본값, 제한된 타입)

// #1 제네릭 기본값
// 함수의 매개변수에 기본값을 제공하듯 제네릭 타입 매개변수에 기본 타입을 지정할 수 있다.

interface Pair<K, V = K> {
  key: K;
  value: V;
}

const pair1: Pair<string, number> = { key: "key", value: 10 };
const pair2: Pair<number> = { key: 1, value: 2 };
// 두번째 타입 인수(V)를 제공하지 않아 V의 타입이 K와 동일한 타입이 됨

// const pair3: Pair = {key: 'key', value: 'value'};
/* 인터페이스가 타입 매개변수를 선언하는 경우, 해당 인터페이스를 참조하는 
모든 타입 애너테이션은 이에 상응하는 타입 인수를 반드시 제공해야된다. */

// #2 제한된 제네릭 타입(extends)
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

const post = {
  id: 10,
  title: "post",
  content: "content",
  user: { id: 1, name: "hong" },
};
const product = { id: 100, name: "TV", price: 100000 };

// function getUserInfoX<T>(params: T) {
//   return params.user // Error!
// } // Property 'user' does not exist on type 'T'

function getUserInfo<T extends { user: User }>(params: T) {
  return params.user;
}
/* 함수 내부에서 params.user에 접근하기 위해 User 타입인 user가 존재하는
타입만 타입 인수로 제공할 수 있다. 즉, extends 키워드를 사용해 T를 User타입인
user를 가지고 있는 타입으로 제한한다. */

getUserInfo(post);
// getUserInfo(product); // Error!
function getUserInfo2<T extends Post>(params: T) {
  return params.user;
}
