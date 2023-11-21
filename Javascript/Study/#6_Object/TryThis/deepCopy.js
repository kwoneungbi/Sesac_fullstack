import assert from "assert";

const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
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
  const newObj = Array.isArray(obj) ? new Array() : new Object();
  // const newObj = Array.isArray(obj) ? [] : {}
  // const newObj = new obj.constructor();

  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = solution(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  // obj.constructor.name === Symbol

  return newObj;
};

const newKim = solution(kim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);
