// Try This: Utility Type 만들기
/*
특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기 
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
type Change = < 이 부분을 작성하세요. >
type DeptCatain = Change<IDept, 'captain', IUser>;
type Err = Change<IDept, 'somekey', IUser>; // Error!!!
*/

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
