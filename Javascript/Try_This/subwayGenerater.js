/*
이전에 작성한 subway클래스에서 iterator를 generator함수로 작성하시오. (기능은 동일함)   
[Symbol.iterator]() {} ⇒⇒⇒⇒ *[Symbol.iterator]() {}
*/

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

// version #1
// class Subway {
//   #currIdx;
//   #endIdx;
//   constructor(start, end) {
//     this.#currIdx = LINE2.indexOf(start);
//     this.#endIdx = LINE2.indexOf(end);
//   }

//   *[Symbol.iterator]() {
//     while (true) {
//       yield LINE2[this.#currIdx];
//       if (this.#currIdx === this.#endIdx) return;
//       this.#currIdx = (this.#currIdx + 1) % LINE2.length; // idx는 인덱스
//     }
//   }
// }

// version #1 refectoring
class Subway {
  #currIdx;
  #endIdx;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#endIdx = LINE2.indexOf(end);
  }

  *[Symbol.iterator]() {
    let idx = this.#currIdx;
    while (true) {
      yield LINE2[idx];
      if (idx === this.#endIdx) return;
      idx = (idx + 1) % LINE2.length; // idx는 인덱스
    }
  }
}

const routes = new Subway("문래", "신림");
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]

const it1 = routes[Symbol.iterator]();
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '대림', done: false }
console.log(it1.next()); // { value: '구로디지털단지', done: false }
console.log(it1.next()); // { value: '신대방', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway("을지로3가", "성수");
console.log([...routes2]); // [ '을지로3가', '을지로입구', '신도림', '성수' ]
