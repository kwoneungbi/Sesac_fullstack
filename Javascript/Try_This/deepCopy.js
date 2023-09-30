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

const deepCopy = (obj) => {
  const newObj = {};
  for (const i of Reflect.ownKeys(obj)) {
    console.log("reflect >>>", i);
    // console.log(typeof obj[i]);
    if (typeof obj[i] === "object" && obj[i]) {
      console.log("test");
      newObj[i] = deepCopy(obj[i]);
    } else newObj[i] = obj[i];
  }
  return newObj;
};

const newKim = deepCopy(kim);

// newKim.nid = 6;
newKim.add[1] = 9;
// newKim.add[3].aid = 5;
newKim.oo.addr.city = "Busan";
newKim.oo.name = "kwon";

console.log("kim>>", kim);
console.log("newKim>>", newKim);
