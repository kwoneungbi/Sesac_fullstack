/* 재귀 함수를 사용하여 aguments n을 받아 n보다 작은 양의 정수를 다 더한 값을 출력하시오.*/

const sum1 = (n) => {
  if (n === 1) return 1;
  return n + sum1(n - 1);
};

console.log(sum1(100));
