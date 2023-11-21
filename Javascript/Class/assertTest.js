var assert = require("assert");
var x = { a: { n: 0 } };
var y = { a: { n: 0 } };
var z = { a: { n: "0" } };
assert.deepStrictEqual(x, y); //OK
assert.deepStrictEqual(x, z);
