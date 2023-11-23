import assert from "assert";

// ex1)
for (let i = 0.1; i < 1; i += 0.1) console.log(i.toFixed(1));

// ex2)
// console.log(0.21354 + 0.1); // 0.31354000000000004 Bad!!
assert.deepEqual((0.21354 + 0.1).toFixed(5), 0.31354); // 0.31354 Good!!

// ex3)
assert.deepEqual((0.14 + 0.28).toFixed(2), 0.42);
