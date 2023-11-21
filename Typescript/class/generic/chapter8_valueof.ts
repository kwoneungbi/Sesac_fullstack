// valueof 만들기

const UserState = {
  준비: 1,
  진행중: 2,
  done: 3,
  cancel: 8,
  withdraw: 9,
  etc: 0,
} as const;

// solution #1
type State<T> = T[keyof T];

// solution #2
type UState = (typeof UserState)[keyof typeof UserState];

// -------------------------------------------------------------

type User = {
  id: number;
  name: string;
  state: State<typeof UserState>;
};

const hong: User = { id: 1, name: "Hong", state: 8 };
const kim: User = { id: 2, name: "Kim", state: 0 };

export {};
