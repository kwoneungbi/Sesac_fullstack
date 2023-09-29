const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in을 사용하여 배열의 인덱스를 출력하시오
for (let i in arr) {
  console.log("1. >>>", i);
}
// 2. for-in을 사용하여 배열의 원소를 출력하시오.
for (let i in arr) {
  console.log("2. >>>", arr[i]);
}

const obj = { name: "lim", addr: "yongsan", level: 1, role: 9, receive: false };

// 3. for-in문을 사용하여 프로퍼티 이름을 출력하시오.
for (let i in obj) {
  console.log("3. >>>", i);
}

// 4. for-in문은 사용하여 프로퍼티 값을 출력하시오.
for (let i in obj) {
  console.log("4. >>>", obj[i]);
}

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// for (let i of obj) {
//   console.log(i);
// }

// level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "level", {
  value: "1",
  enumerable: false,
});

for (let i in obj) {
  console.log("5. level 열거되지않게 >>>", obj[i]);
}

// role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "role", {
  value: "9",
  writable: false,
});

for (let i in obj) {
  console.log("6. role 읽기전용 >>>", obj[i]);
}
