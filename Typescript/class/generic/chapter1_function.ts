// 호출하는 방식에 따라 다양한 타입으로 작동하도록 의도한다.

// 일반함수
function identity<T>(input: T) {
  return input;
}

// 화살표 함수
const identity2 = <T>(input: T) => input;

/* 명시적 제네릭 타입 인수 사용, 해당 타입 인수가 무엇인지 명시함 */
const s1 = identity<string>("me"); // string
const n1 = identity2<number>(123); // number

/* identity 함수에 제공된 인수를 사용해 해당 함수 매개변수의 타입 인수를 유추 */
const s2 = identity("me"); // 'me'
const n2 = identity(123); // 123

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    callback(input);
  };
}

const doCallback1 = logWrapper((input: string) => {
  // stirng 유추 가능
  console.log("input>>", input, "length >>", input.length);
});

const doCallback2 = logWrapper<string>((input) => {
  // 제네릭으로 타입 명시 해둠
  console.log("input>>", input, "length >>", input.length);
});

// const doCallback3 = logWrapper((input) => { // Error 발생, 타입 유추가 불가능 하기 때문에 input은 unknown 타입으로 지정된다.
//   console.log("input>>", input, "length >>", input.length)
// })

// ---------------------------------------------------------------------------------------
// 다중 함수 타입 매개변수

function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}

const tuple = makeTuple(true, "abc"); // 타입: readonly [boolean, string]
const [leval, agree] = makeTuple<number, boolean>(10, true);
const [emp, dept] = makeTuple(
  {
    id: 1,
    name: "hong",
  },
  {
    id: 3,
    dname: "development",
  }
);

function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value };
}

makePair("abc", 123);
makePair<string, number>("abc", 123);
makePair<"abc", 123>("abc", 123);
// makePair<string>("abc", 123); // Error: Expected 2 type arguments, but got 1.

export {};
