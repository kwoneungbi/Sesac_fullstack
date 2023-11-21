// Generic - 제네릭 인터페이스 구현

type Address1 = { sigungu: string; zipcode: string };

interface Info1<T> {
  id: number;
  name: string;
  additional: T;
}

class MyInfo1<T> implements Info1<T> {
  id: number;
  name: string;
  additional: T;

  constructor(id: number, name: string, additional: T) {
    this.id = id;
    this.name = name;
    this.additional = additional;
  }
}

const me1 = new MyInfo1<Address1>(1, "kwon", {
  sigungu: "Seoul",
  zipcode: "08783",
});
console.log(`I live in ${me1.additional.sigungu}`);

export {};
