/* 
js에서 아래 Identity 함수는 모든 가능한 타입으로 input을 받고 동일한 input을 출력한다고 가정해보자.
그렇다면 여기서 매개변수 타입과 반환 타입을 어떻게 설명해야 할까.
*/

// function identity(input) {
//   return input;
// }

// identity("string");
// identity(123);
// identity({ id: 1, name: "string" });

/* input을 any로 선언할 수 있지만 그렇게 되면 함수의 반환 타입도 any가 된다. */

function identity1(input: any) {
  return input;
}

let value = identity1(42); // value는 any 타입이다.

// ---------------------------------------------------------------------------------------
// 제네릭을 사용

function identity2<T>(input: T) {
  return input;
}

let a = identity2(42); // 타입: number
const b = identity2("eunbi"); // 타입: eunbi

// ---------------------------------------------------------------------------------------
// 다중 함수 타입 매개변수

function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}

let tuple = makeTuple(true, "abc"); // 타입: readonly [boolean, string]

function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value };
}

makePair("abc", 123);
makePair<string, number>("abc", 123);
makePair<"abc", 123>("abc", 123);
// makePair<string>("abc", 123); // Error: Expected 2 type arguments, but got 1.

// ---------------------------------------------------------------------------------------
// 제네릭 인터페이스

interface Box<T> {
  inside: T;
}

let stringyBox: Box<string> = {
  inside: "abc",
};

let numberBox: Box<number> = {
  inside: 123,
};

// let incorrectBox: Box<number> = {
//   inside: false
// }
// Error: Type 'boolean' is not assignable to type 'number'

// ---------------------------------------------------------------------------------------
// 제네릭 클래스

class Secret<Key, Value> {
  key: Key;
  value: Value;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }

  getValue(key: Key): Value | undefined {
    return this.key === key ? this.value : undefined;
  }
}

const storage = new Secret(12345, "luggage"); // 타입: Secret<number, string>

storage.getValue(1987); // 타입: string | undefined

// ---------------------------------------------------------------------------------------
// 제네릭 클래스 확장

class Quote<T> {
  lines: T;

  constructor(lines: T) {
    this.lines = lines;
  }
}

class SpokenQute extends Quote<string[]> {
  speak() {
    console.log(this.lines.join("\n"));
  }
}

new Quote("The only real failure is the failure to try.").lines; // 타입: string
new Quote([3, 4, 5, 6, 7, 5]).lines; // 타입: number[]

new SpokenQute(["A", "B"]).lines; // 타입: string[]

class AttributedQuote<Value> extends Quote<Value> {
  speaker: string;

  constructor(value: Value, speaker: string) {
    super(value);
    this.speaker = speaker;
  }
}

new AttributedQuote("A", "B"); // 타입: AttributedQuote<string>
