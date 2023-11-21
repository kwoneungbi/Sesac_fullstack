const arr = [
  ["name", "eunbi"],
  ["age", 26],
  ["city", "Seoul"],
];

const obj = Object.fromEntries(arr);
console.log(obj); // { name: 'eunbi', age: 26, city: 'Seoul' }

const object = {
  name: "eunbi",
  age: 26,
  city: "Seoul",
};

const array = Object.entries(object);
console.log(array); // [['name', 'eunbi'], ['age', 26], ['city', 'Seoul']]
