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

// ----------------------------------------------------------------

class Queue1 {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  enqueue(value) {
    return this.#arr.push(value);
  }

  dequeue() {
    return this.#arr.shift();
  }

  toArray() {
    return this.#arr;
  }
}

const queue1 = new Queue();
queue1.enqueue(3); // 추가하기
assert.deepStrictEqual(queue1.toArray(), [3]);
queue1.dequeue();
assert.deepStrictEqual(queue1.toArray(), []);

const queue2 = new Queue1(1, 2);
queue2.enqueue(3);
assert.deepStrictEqual(queue2.toArray(), [1, 2, 3]);
assert.deepEqual(queue2.dequeue(), 1);
assert.deepEqual(queue2.toArray(), [2, 3]);
