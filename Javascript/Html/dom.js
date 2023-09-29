// const $spanA = document.getElementById("spanA");
// console.log("dddd", $spanA);

// const $divs = document.getElementsByTagName("div");
// console.log("dddd", $divs);

// const $div = $divs[0];
// console.log($div);

// const fc = $div.fristCild;
// console.log(fc);

// const p = $div.firstElementChild;
// console.log(p);

const spanX = document.getElementById("spanX");
for (let i = 0; i < 500; i += 1) {
  spanX.offsetWidth <= 500 ? (spanX.innerText += "X") : spanX.innerText;
}
