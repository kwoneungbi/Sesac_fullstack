// Generic - Promise
// 최종적으로 resolve된 값을 나타내는 단일 타입 매개변수를 갖는다.
/* Promise의 타입 인수를 명시적으로 선언하지 않으면 기본적으로 
매개변수 타입을 unknown으로 가정한다. */

class myPromise<Value> {
  constructor(
    executor: (
      resolve: (value: Value) => void,
      reject: (reason: unknown) => void
    ) => void
  ) {}
}

// 타입: Promise<unknown>
const resolevesUnknown = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});

// 타입: Promise<string>
const resolevesString = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});

const textEventually = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});
const lengthEventually = resolevesString.then((text) => text.length);

// -----------------------------------------------------------------------
// Generic - async function
// async 함수의 반환 타입은 항상 Promise 타입이다.

function lengthAfterSecond(text: string) {
  return new Promise<number>((resolve) =>
    setTimeout(resolve, 1000, text.length)
  );
}

async function lengthImmediately(text: string) {
  return text.length;
}

lengthAfterSecond("!!!").then(console.log); // (text: string) => Promise<number>
lengthAfterSecond("@@@").then(console.log); // (text: string) => Promise<number

export {};
