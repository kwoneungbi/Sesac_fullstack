// 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오.

const kim = {
  nid: 3,
  addr: "Pusan",
  add: [1, 2, 3, { aid: 1 }, [20, 30]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
};
const deepCopy = (name) => {};

const newKim = deepCopy(kim);
