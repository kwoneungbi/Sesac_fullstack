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

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

/* TDD
{
  id: number;
  age: string;
  dname: string;
  captain: IUser;
}
*/
type DeptCatain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, "somekey", IUser>; // Error!!!

export {};
