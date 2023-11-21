/* 문제 :  user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오. */

const hong = { id: 1, name: "hong" };
const lee = { id: 2, name: "lee" };

function f1(id, name) {
  console.log("f1>>", id, name);
}

function f2(user) {
  console.log("f2>>", hong.id, hong.name);
}

function f3({ id, name }) {
  console.log("f3>>", id, name);
}

function f4() {
  const { id, name } = arguments[0];
  console.log("f4>>", id, name);
}

function f5(...args) {
  const [{ id, name }] = args;
  console.log("f5>>", id, name);
}

f1(hong.id, hong.name);
f2(hong);
f3(hong);
f4(hong);
f5(hong);
