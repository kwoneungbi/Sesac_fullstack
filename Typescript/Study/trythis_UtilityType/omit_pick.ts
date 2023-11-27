/*
type User = { id: number; name: string; age: number };

// ex) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
type UserProfile = …
interface UserProfile …
let iUser: UserProfile = { id: 1, name: 'Hong', addr: 'Seoul' };
*/

// Omit<Type, keys>
type User = { id: number; name: string; age: number };
type OmitedAgeUser = Omit<User, "age">;

// type UserProfile = OmitedAgeUser & { addr: string };
interface UserProfile extends OmitedAgeUser {
  addr: string;
}
let iUser: UserProfile = { id: 1, name: "Hong", addr: "Seoul" };

export {};
