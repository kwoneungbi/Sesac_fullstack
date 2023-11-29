type User = { id: number; name: string; age: number };

// type UserProfile = Omit<User, "age"> & { addr: string };
interface UserProfile extends Omit<User, "age"> {
  addr: string;
}

let iUser: UserProfile = { id: 1, name: "Hong", addr: "Seoul" };

export {};
