/* class와 Array를 이용하여 Queue를 구현하시오. */

import assert from "assert";

class Queue {
  constructor(...args) {
    this.queue = args.flat();
  }
  enqueue(num) {
    this.queue.push(num);
  }
  dequeue() {
    this.queue.shift();
  }
  toArray() {
    return this.queue;
  }
}

const queue = new Queue();
queue.enqueue(3); // 추가하기
assert.deepStrictEqual(queue.toArray(), [3]);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), []);
