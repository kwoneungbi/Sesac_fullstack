/*
1. 문자열에 한글이 있는지 체크하는 hasHangul(str) 함수를 작성하시오.
hasHangul('강원도');   // true  [ㄱ-힣]
hasHangul('ㄱㄴㄷ');   // true
hasHangul('ㅜㅜㅠㅠ;'); // true
hasHangul('케잌뷐');   // true
hasHangul('12345');  // false
hasHangul('IC');     // false   cf. hasHangul('아산IC') is true

2. 문자열이 모두 한글인지 체크하는 isHangul(str) 함수를 작성하시오.
isHangul('강원도');   // true
isHangul('ㄱㄴㄷ');   // true
isHangul('ㅜㅜㅠㅠ;'); // true
isHangul('케잌뷐');   // true
isHangul('12한글345');  // false
isHangul('아산IC');  // false
*/

import assert from "assert";

// solution #1
const hasHangul = (str) =>
  [...str].filter((x) => /[ㄱ-힣ㅏ-ㅣ]$/.test(x)).length > 0;

assert.deepStrictEqual(hasHangul("강원도"), true);
assert.deepStrictEqual(hasHangul("ㄱㄴㄷ"), true);
assert.deepStrictEqual(hasHangul("ㅜㅜㅠㅠ"), true);
assert.deepStrictEqual(hasHangul("케잌뷐"), true);
assert.deepStrictEqual(hasHangul("12345"), false);
assert.deepStrictEqual(hasHangul("IC"), false);
assert.deepStrictEqual(hasHangul("아산IC"), true);

// solution #2
const isHangul = (str) =>
  [...str].filter((x) => /[ㄱ-힣ㅏ-ㅣ]$/.test(x)).length === [...str].length;

assert.deepStrictEqual(isHangul("강원도"), true);
assert.deepStrictEqual(isHangul("ㄱㄴㄷ"), true);
assert.deepStrictEqual(isHangul("ㅜㅜㅠㅠ"), true);
assert.deepStrictEqual(isHangul("케잌뷐"), true);
assert.deepStrictEqual(isHangul("12한글345"), false);
assert.deepStrictEqual(isHangul("아산IC"), false);
