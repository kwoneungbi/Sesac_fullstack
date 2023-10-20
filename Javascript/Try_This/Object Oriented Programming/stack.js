/* class와 Array를 이용하여 Stack과 Queue를 구현하시오. */
import assert from "assert";

class Stack {
  #arr;
  constructor(...args) {
    // this.stack = args.flat();
    this.#arr = args;
  }
  push(value) {
    this.#arr.push(value);
  }
  pop() {
    return this.#arr.pop();
  }

  toArray() {
    return this.#arr;
  }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
stack.pop();
assert.deepStrictEqual(stack.toArray(), []);

// ----------------------------------------------------------------

class Stack1 {
  constructor(...args) {
    this.stack1 = args.flat();
  }
  push(num) {
    this.stack1.push(num);
  }
  pop() {
    this.stack1.pop();
  }
  toArray() {
    return this.stack1;
  }
}

const a = new Stack1();
const b = new Stack1([1, 2]);
const c = new Stack1(1, 2);
a.push(3);
assert.deepStrictEqual(a.toArray(), [3]);
b.push(0);
assert.deepStrictEqual(b.toArray(), [1, 2, 0]);
c.push(1);
assert.deepStrictEqual(c.toArray(), [1, 2, 1]);
c.pop();
assert.deepStrictEqual(c.toArray(), [1, 2]);
