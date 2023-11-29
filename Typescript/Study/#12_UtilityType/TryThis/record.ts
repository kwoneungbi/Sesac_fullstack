// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type FullUser = Record<string, string | number>;
const userProfile: FullUser = users.reduce(
  (acc, user) => ({ ...acc, ...user }),
  {}
);
console.log(userProfile); // { name: 'Hong', age: 23, id: 1, addr: 'Seoul' }
export {};
