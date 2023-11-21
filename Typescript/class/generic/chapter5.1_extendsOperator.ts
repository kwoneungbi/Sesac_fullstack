// Generic - extends operator

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}
interface IUser {
  id: number;
  age: number;
  name: string;
}

type BN<T, U> = T extends keyof U ? boolean : number;
type IdBN1 = BN<"id", IDept>; // boolean
type IdBN2 = BN<"idd", IDept>; // number

type TX<T, U> = T extends keyof U ? T : U;
type TXID1 = TX<"id", IDept>; // 'id'
type TXID2 = TX<"idd", IDept>; // IDept

type Except<T, U> = T extends U ? never : T;
type Ex0 = Except<IUser, IDept>; // IUser
type Ex1 = Except<keyof IUser, keyof IDept>; // name
type Ex2 = Except<keyof IDept, keyof IUser>; // dname | captain

type Intersect<T, U> = T extends U ? T : never;
type Ext1 = Intersect<keyof IUser, keyof IDept>; // id | age
type Ext2 = Intersect<keyof IDept, keyof IUser>; // id | age

export {};
