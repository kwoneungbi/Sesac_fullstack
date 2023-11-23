// ex1
for (let i = 1; i <= 10; i += 1)
  if (!Number.isInteger(Math.sqrt(i))) console.log(Math.sqrt(i).toFixed(3));

// ex2
const today = new Date();

switch (today.getDay()) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
}

// ex2: refectoring
const today1 = new Date();
const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const weekName = () => {
  const day = today1.getDay(); // 0 ~ 7

  console.log(`오늘은 ${weeks[day]}요일입니다.`);
};
weekName();
