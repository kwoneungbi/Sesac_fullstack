// 비순수 함수
myPush = (array, item) => {
  array[array.length] = item;
  return array;
};

console.log(myPush([1, 2, 3, 4], 5));

// 순수 함수
myPush2 = (array, item) => {
  return [...array, item];
};

console.log(myPush2([1, 2, 3, 4], 5));
