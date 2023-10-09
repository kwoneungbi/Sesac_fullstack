// 한번만 실행되는 함수 구현하기 (once functio 만들기)

const once = (fn) => {
  let flag = false;

  return (...args) => {
    if (!flag) {
      flag = true;
      fn(...args);
    }
  };
};

// exsample1
const myFunction = (x, y) => console.log(x, y);

const onceTest = once(myFunction);
a(1, 2);
a(1, 2);
a(1, 2);

// exsample2

const myFunction2 = (name, addr) =>
  console.log(`나의 이름은 ${name}이고, 주소는 ${addr} 입니다.`);

const onceTest2 = once(myFunction2);
