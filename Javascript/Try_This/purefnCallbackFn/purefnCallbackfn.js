const a = document.getElementById("a");
const b = document.getElementById("b");

const weeks = ["일", "월", "화", "수", "목", "금", "토"];

function handleClick() {
  let widx = -1;
  return (getNextWeekMaker = (event) => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    event.target.nextElementSibling.innerText = weeks[widx];
  });
}
a.addEventListener("click", handleClick());
b.addEventListener("click", handleClick());
