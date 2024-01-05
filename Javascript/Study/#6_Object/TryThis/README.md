# Try This: Object Deep Copy

[코드 보러가기](https://github.com/kwoneungbi/Sesac_fullstack/blob/master/Javascript/Study/%236_Object/TryThis/deepCopy.js)

> 객체 kim을 깊은 복사하는 deepCopy 함수를 작성하시오.

```js
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
const newKim = deepCopy(kim);
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
```
