// 산술연산자 중 %의 연산자 우선순위를 증명하시오.

// 출력 결과
// '%' 우선순위는 '+-'보다는 앞선다..
// '%' 우선순위는 '*/'보다는 앞선다.
// '**' 우선순위는 '%'보다는 앞선다.

const operator = (2 + 3) % 4;
const operator2 = 2 + (3 % 4);
const operator3 = (2 * 3) % 4;
const operator4 = 2 * (3 % 4);
const operator5 = (3 % 4) ** 2;
const operator6 = 3 % 4 ** 2;

if (operator === operator2) {
  console.log("'%' 우선순위는 '+-'와는 같다.");
} else {
  console.log("'%' 우선순위는 '+-'보다는 앞선다.");
}

if (operator3 === operator4) {
  console.log("'%' 우선순위는 '*/'와는 같다.");
} else {
  console.log("'%' 우선순위는 '*/'보다는 앞선다.");
}

if (operator5 === operator6) {
  console.log("'**' 우선순위는 '%'와는 같다.");
} else {
  console.log("'**' 우선순위는 '%'보다는 앞선다.");
}
