const weeks = ["일", "월", "화", "수", "목", "금", "토"];
let widx = -1;
const getNextWeek = () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 100);

getNextWeek();

// 위의 코드를 순수 함수로짜보기 , 즉시 실행 함수를 이용한 클로저

const weeks1 = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeekMaker = (() => {
  let widx = -1;
  return function () {
    widx += 1;
    return `${weeks1[widx % 7]}요일`;
  };
})();

let cnt1 = 0;
const intl1 = setInterval(() => {
  console.log("call", cnt1, getNextWeekMaker());
  if ((cnt1 += 1) === 8) clearInterval(intl1);
}, 100);
