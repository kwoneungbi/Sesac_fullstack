# **Promise**

```ts
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

const lengthEventually = resolevesString.then((text) => text.length);
```
