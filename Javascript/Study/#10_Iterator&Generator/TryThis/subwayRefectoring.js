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

//_version3
class Subway {
  #currIdx;
  #end;
  #isEnd;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#end = end;
  }

  *[Symbol.iterator]() {
    return {
      next: () => {
        if (this.#isEnd) return { value: undefined, done: true };
        if (this.#currIdx === LINE2.length) this.#currIdx = 0;
        const value = LINE2[this.#currIdx++];
        this.#isEnd = value === this.#end;
        return { value, done: false };
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
