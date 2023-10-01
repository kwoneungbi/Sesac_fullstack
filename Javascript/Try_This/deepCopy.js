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

const solution = (obj) => {
  const newObj = Array.isArray(obj) ? [] : {};

  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = solution(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

const newKim = solution(kim);

kim.oo.id = 3;
kim.add[3].aid = 3;

console.log("kim >>> ", kim);
console.log("newKim >>>", newKim);
