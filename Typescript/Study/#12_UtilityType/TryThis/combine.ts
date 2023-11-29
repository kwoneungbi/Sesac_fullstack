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

// type Combine<A, B> = A & B;
// type Combine<T, U> = { [k in keyof (T & U)]: (T & U)[k] }; // 모든 key,value를 합치기
//
type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

/* TDD
{
  id: number;
  age: string | number;
  dname: string;
  captain: string;
}
*/
type ICombined = Combine<IUser, IDept>;

export {};
