/*
[문제 1]
const arr = [100, 200, 300, 400, 500, 600, 700];

1. for-in문을 사용하여 배열의 인덱스를 출력하시오.
2. for-in문을 사용하여 배열의 원소를 출력하시오.

[문제 2]
const obj = { name: ‘lim’, addr: ‘Yongsan’, level: 1, role: 9, receive: false }

3. for-in문을 사용하여 프로퍼티 이름을 출력하시오.
4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
6. level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
*/

// [문제 1]
const arr = [100, 200, 300, 400, 500, 600, 700];

// 1.
for (let i in arr) {
  console.log(i);
}

// 2.
for (let i in arr) {
  console.log(arr[i]);
}

// [문제 2]
const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };

// 3.
for (let i in obj) {
  console.log(i);
}

// 4.
for (let i in obj) {
  console.log(obj[i]);
}

// 5.
for (let i of Object.entries(obj)) {
  console.log(i[1]);
}

// 6.
Object.defineProperty(obj, "level", {
  enumerable: false,
});

// 7.
Object.defineProperty(obj, "role", {
  writable: false,
});
