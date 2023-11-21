const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

/* _version1 */

// class Subway {
//   constructor(start, end) {
//     this.startIndx = LINE2.indexOf(start);
//     this.endIndex = LINE2.indexOf(end);
//   }

//   [Symbol.iterator]() {
//     let idnx = this.startIndx - 1;
//     let fff = this.endIndex + 1;
//     return {
//       next() {
//         idnx += 1;
//         LINE2[idnx] === undefined ? (idnx = 0) : idnx;
//         if (idnx === fff) return { value: LINE2[idnx], done: true };
//         return { value: LINE2[idnx], done: false };
//       },
//     };
//   }
// }

/* _version2 */
class Subway {
  LINE;
  constructor(start, end) {
    const startIndx = LINE2.indexOf(start);
    const endIndex = LINE2.indexOf(end);
    this.LINE =
      startIndx < endIndex
        ? LINE2.slice(startIndx, endIndex + 1)
        : LINE2.slice(startIndx).concat(LINE2.slice(0, endIndex + 1));
  }

  [Symbol.iterator]() {
    let idx = -1;
    const LineArr = this.LINE;
    return {
      next() {
        idx += 1;
        return { value: LineArr[idx], done: idx >= LineArr.length };
      },
    };
  }
}

const routes = new Subway("문래", "신림");
console.log([...routes]);
const routes1 = new Subway("신림", "문래");
console.log([...routes1]);
const it1 = routes[Symbol.iterator]();
const it2 = routes1[Symbol.iterator]();
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it2.next()); // { value: '문래', done: false }
// console.log(it2.next()); // { value: '문래', done: false }
// console.log(it2.next()); // { value: '문래', done: false }
// console.log(it2.next()); // { value: '문래', done: false }
// console.log(it2.next()); // { value: '문래', done: false }
