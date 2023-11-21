// Generic - 제네릭 인터페이스

type Color = "red" | "green" | "blue";
type Address = { sigungu: string; zipcode: string };

interface Info<T> {
  id: number;
  name: string;
  additional?: T;
}

const info1: Info<Color> = {
  id: 1,
  name: "kwon",
  additional: "red",
};

const info2: Info<Address> = {
  id: 2,
  name: "hong",
  additional: { sigungu: "Seoul", zipcode: "07777" },
};

interface MyNode<T> {
  value: T;
  next: MyNode<T> | null;
}

function push<T>(currNode: MyNode<T>, nextNode: MyNode<T>) {
  currNode.next = nextNode;
}

function createNode<T>(value: T): MyNode<T> {
  return {
    value,
    next: null,
  };
}

const defaultNode = createNode({ name: "kwon", age: 25 });
// push(defaultNode, {
//   value: 'hong', // value는 현재 {name: string, age: number}형식이기 때문에 string이 올 수 없다.
//   next: null
// })

export {};
