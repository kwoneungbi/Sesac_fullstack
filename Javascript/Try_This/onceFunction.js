/*
함수를 한번만 실행하게 하는 once 함수를 작성하시오.

ex)
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
*/

const f = (x, y) => {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`;
};

const once = (fx) => {
  let flag = false;
  return (x, y) => {
    if (flag === false) {
      flag = true;
      return fx(x, y);
    }
    return;
  };
};

const fn = once(f);
console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));
