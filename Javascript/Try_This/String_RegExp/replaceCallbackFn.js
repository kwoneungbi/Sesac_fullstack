/*
1. 문자열 str에서 대문자만 골라 소문자로 변환하세요.
upperToLower('Senior Coding Learning JS');  
         // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-' 

2. 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
telfmt('0101234567');    // '010-123-4567'
telfmt('01012345678');   // '010-1234-5678'
telfmt('0212345678');    // '02-1234-5678'
telfmt('021234567');     // '02-123-4567'
telfmt('0331234567');    // '033-123-4567'
telfmt('15771577');      // '1577-1577'
telfmt('07012341234');   // '070-1234-1234'
ex) in JSX
   <small>{telfmt(user.tel)}</small>
*/
import assert from "assert";

// solution #1
const upperToLower = (string) =>
  string.replace(/[A-Z]/g, (a) => a.toLowerCase());

console.log(upperToLower("Senior Coding Learning JS"));

// solution #2
const telfmt = (numString) => {
  if (numString?.length < 7) return numString;
  if ((numString.length === 7) | (numString.length === 8))
    return numString.replace(/^(\d{3,4})(\d{4})$/, "$1-$2");
  if (numString.length === 12)
    return numString.replace(/^(\d{4})(\d{4})(\d{4})$/, "$1-$2-$3");
  if (numString[1] === "2")
    return numString.replace(/^(\d{2})(\d{3,4})(\d{4})$/, "$1-$2-$3");
  else return numString.replace(/^(\d{3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
};

const regexp = /^\d{2,3}-\d{3,4}-\d{4}$/;

// phoneNumber 경우의 수
// '010-***-****' 10
// '010-****-****' 11
// '02-***-****' 9
// '02-****-****' 10
// '033-***-****' 10
// '033-****-****' 11
// '1577-1577' // ok 8
// '070-***-****' 11
// '070-****-****' //11
// '0504-****-****' // 안심번호 12
// '234-1577' 7

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050412341234"), "0504-1234-1234");
assert.deepStrictEqual(telfmt("2341577"), "234-1577");
