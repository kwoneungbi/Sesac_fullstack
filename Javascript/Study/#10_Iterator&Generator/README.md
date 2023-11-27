# **iteraor와 iterable란?**

> `목표`: 반복 가능한 객체를 다루는데 사용하는 iterator와 iterable에 대해 알아보려고 한다.

## **iterable**

`Symbol.iterator` 메서드를 가지고 있는 객체이다.
`Symbol.iterator` 메서드는 이터레이터를 반환하는 함수로, 해당 객체가 반복 가능한지 여부와 함께 어떤 순서로 요소에 접근 할 수 있는지 정의한다.
대표적인 예시로 `Array`, `String`, `Set`, `Map` 등이 있다.

```js
const iterable = [1, 2, 3];

console.log(typeof iterable[Symbol.iterator]); // function
```

## **iterator**

값을 차례대로 반환하는 객체이다.
`iteration protocol`을 따르며 `next()` 메서드를 호출한다.
`next()` 메서드는 `{value, done}` 형태의 결과를 반환하며, value에는 다음 값이 저장되고 done은 반복의 종료 여부를 나타낸다.

```js
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

위 예시에서 [1, 2, 3] 배열은 이터러블하며 `[Symbol.iterator]()` 메서드 호출을 통해 해당 배열의 이터레이터가 생성된다. 그 후 iterator.next()를 호출할 때마다 배열의 요소들을 차례대로 가져온다.

## **for...of**

for...of 루프는 이터러블 객체에서 사용되며 간결하게 반복(iteration)할 수 있는 구문이다. for...of 루프는 내부적으로 자동으로 이터레이션 프로토콜을 사용하여 값을 순회한다.

```js
const iterable = [1, 2, 3];

for (let item of iterable) {
  console.log(item);
}
// 1
// 2
// 3
```

위 예시에서 for...of 루프를 사용하여 [1 ,2 ,3] 배열의 요소들을 순회하면서 각각의 값들을 출력한다.
