const arr = [1, 2, 3];

/* 순수 함수 */
const concat = arr.concat(4, 5);
console.log("concat>>> ", concat, "arr>>>", arr); // "concat>>> " [ 1, 2, 3, 4, 5 ] "arr>>>" [ 1, 2, 3 ]
const join = arr.join(",");
console.log("join>>> ", join, "arr>>>", arr); //  "join>>> " join >>> 1,2,3  "arr>>>" [ 1, 2, 3 ]

const indexof = arr.indexOf(3);
console.log("indexof>>> ", indexof, "arr>>>", arr); // "indexof>>> " 2  "arr>>>" [ 1, 2, 3 ]

const at = arr.at(0);
console.log("at>>> ", at, "arr>>>", arr); // "at>>>"  1 "arr>>>" [ 1, 2, 3 ]

const slice = arr.slice();
console.log("slice>>> ", slice, "arr>>>", arr); // "slice>>> "  [ 1, 2, 3 ] "arr>>> " [ 1, 2, 3 ]

const entries = arr.entries();
console.log("entries>>> ", [...entries], "arr>>>", arr); // "entries>>> " [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ] "arr>>> " [ 1, 2, 3 ]

const values = arr.values();
console.log("arr.values()", [...arr.values()], "arr>>>", arr); // "arr.values()" [ 1, 2, 3 ] "arr>>>" [ 1, 2, 3 ]

const keys = arr.keys();
console.log("arr.keys()", [...keys], "arr>>>", arr); // "arr.keys()" [ 0, 1, 2 ] "arr>>>" [ 1, 2, 3 ]

const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = arr1.flat();
console.log("flat>>> ", flat, "arr>>>", arr); // "flat>>> " [ 1, 2, 3, 4, 5, 6 ] "arr>>> " [ 1, 2, 3 ]

const map = arr.map((item) => item + 1);
console.log("map>>> ", map, "arr>>>", arr); // "map>>> " [ 2, 3, 4 ] "arr>>> " [ 1, 2, 3 ]
