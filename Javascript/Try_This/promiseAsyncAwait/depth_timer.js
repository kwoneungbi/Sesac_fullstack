/*
앞에서 작성한 다음 코드를 Promise를 이용하여 refactoring 하시오.
setTimeout( function() {
  console.log('depth1', new Date());
  setTimeout( function() {
    console.log('depth2', new Date());
    setTimeout( function() {
      console.log('depth3', new Date());
      throw new Error('Already 3-depth!!');
    }, 3000 );
  }, 2000);
}, 1000);


console.log('START!', new Date());
*/

// solution #1

let i = 0;
const promi1 = (delay) => {
  return new Promise((resolve, reject) => {
    if (i < 3) {
      setTimeout(resolve, delay);
      i += 1;
      console.log(i);
    } else {
      reject(new Error("Already 3-depth!!"));
    }
  });
};
promi1(1000)
  .then(() => {
    console.log("depth1", new Date());
    return promi1(2000);
  }) // 1
  .then(() => {
    console.log("depth2", new Date());
    return promi1(3000);
  }) // 2
  .then(() => {
    console.log("depth2", new Date());
    return promi1();
  }) // 3
  .catch((err) => console.log(err));

// ----------------------------------------------------------------

// solution #2

const promi = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

promi(1000)
  .then(() => {
    console.log("depth1", new Date());
    return promi(2000);
  })
  .then(() => {
    console.log("depth2", new Date());
    return promi(3000);
  })
  .then(() => {
    console.log("depth3", new Date());
    reject(new Error("Already 3-depth!!"));
  });

console.log("START!", new Date());
