const myIterator = (obj) => {
  obj[Symbol.iterator] = () => {
    const values = Object.values(obj); // [ 1, 'eunbi', 26 ]
    console.log(values);
    let num = -1;
    return {
      next: () => {
        num += 1;
        if (values.length === num) return { value: undefined, done: true };
        else return { value: values[num], done: false };
      },
    };
  };
};

const object = { id: 1, name: "eunbi", age: 26 };

myIterator(object);

for (let i of object) {
  console.log(i);
}
// 1
// eunbi
// 26
