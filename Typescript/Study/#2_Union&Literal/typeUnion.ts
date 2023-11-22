type Member = {
  name: string;
  addr: string;
  discountRate: number;
};

type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

// 둘 이상의 타입으로 확장된 타입에서 일부 속성들의 조합이 어느 하나의 타입에 할당 가능하면 OK

let customer: Customer = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};

let customer1: Customer = {
  name: "홍길동",
  age: 26,
};

let customer2: Customer = {
  name: "홍길동",
  age: 26,
  addr: "용산구",
};

let customer3: Customer = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
  age: 26,
};

// let customer4: Customer = {
//   name: '홍길동',
//   addr: '용산구',
// };
// {name: string, addr: string } 형식은 Customer 형식에 할당할 수 없다.

// ----------------------------------------------------------------

//유니언으로 선언한 모든 타입에 존재하는 속성에만 접근 가능!

type Member1 = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest1 = {
  name: string;
  age: number;
};

const member: Member1 = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
const guest: Guest1 = {
  name: "김길동",
  age: 28,
};
const who = Math.random() > 0.5 ? member : guest;

who.name = "마길동"; // OK 접근 가능

// const price = 10000 - (10000 * who.discountRate);

// Error! Property 'discountRate' does not exist on type 'Member1 | Guest1'.
//  Property 'discountRate' does not exist on type 'Guest1'.
// discountRate 프로퍼티는 Member1 타입에만 존재하고 Guest 타입에는 존재하지 않으므로 접근 불가능!!

export {};
