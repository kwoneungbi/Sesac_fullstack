/*
ex1) 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map(<이 부분을 작성하시오>);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => <이 부분을 작성하시오>; 
const ret2 = classNames('', 'a b c', 'd', '', 'e'); 
assert.strictEqual(ret2, 'a b c d e'); // 주의: ' a b c d  e'면 안됨!!
*/

import assert from "assert";

const arr = [1, 2, 3, true];

const ret1Before = arr.map((x) => x.toString());
const ret1After = arr.map(String);
assert.deepStrictEqual(ret1Before, ["1", "2", "3", "true"]);
assert.deepStrictEqual(ret1After, ["1", "2", "3", "true"]);

const classNamesBefore = (...args) => {
  let a = "";
  for (let i = 0; i < args.length; i++) {
    a += args[i];
  }
  return a
    .split("")
    .filter((x) => x !== " ")
    .join(" ");
};

const classNamesAfter = (...args) => args.filter((a) => Boolean(a)).join(" ");

const ret2Before = classNamesBefore("", "a b c", "d", "", "e");
const ret2After = classNamesAfter("", "a b c", "d", "", "e");
assert.deepStrictEqual(ret2Before, "a b c d e");
assert.deepStrictEqual(ret2After, "a b c d e");
