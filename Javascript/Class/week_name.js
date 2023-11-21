/* 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, 
switch문을 사용하지 않은 더 간단한 방법도 찾아보시오.

const today = new Date();  today.getDay(); 요일번호

출력 결과 오늘은 금요일입니다. */

// switch 사용
const weekDay = new Date();
const day = weekDay.getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

// swich보다 간단하게 작성
const today = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(daysOfWeek[today.getDay()]);
