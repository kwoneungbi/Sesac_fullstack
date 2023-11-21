/* 
unary는 고차함수에서 인수(매개 변수)의 개수를 1개로 제한하여 실행한다. 
즉, f(1, 2) -> f(1)로 실행! 

parseInt 함수는 두 개의 인자를 받는다.

첫번째 인자 : 이 문자열을 파싱하여 정수로 변환한다.
두번째 인자 : 문자열이 표현하는 수의 진법이다.
*/

const arr = ["1", "2", "3"];

const rets = arr.map(parseInt);
console.log(rets); // [ 1, NaN, NaN ]

const rets1 = arr.map((num) => parseInt(num));
console.log(rets1); // [ 1, 2, 3 ]

// const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));
const unary = (fn) => (arg) => fn(arg);

const rets2 = arr.map(unary(parseInt));
console.log("rets2", rets2); // [1, 2, 3]

function unary1(fn) {
  return function (x) {
    return fn(x);
  };
}

const square = (x) => x * x;
const unarySquare = unary1(square);

console.log(unarySquare(5)); // 25
console.log(unarySquare(5, 10)); // 25

const isEmpty = (str) => str.length === 0;
const unaryIsEmpty = unary1(isEmpty);

console.log(unaryIsEmpty("")); // ture
console.log(unaryIsEmpty("Hello")); // false
