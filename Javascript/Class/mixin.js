/* 
jake.__proto__ = Pet.prototype;
         // Bad! 이제 jake는 Dog의 본성을 잃음!!

jake.feed('dog-food'); // OK!
jake.bark(); // But, this is not a Function!
const petMixin = {
  likesPeople() {
    console.log(`${this.name} like…`);
  }
}

Object.assign(jake, petMixin); // jake만!
Object.assign(Dog.prototype, petMixin); // 모든 개들에게 likesPeople() 부여

문제 : jake에게 Pet 클래스의 feed를 Mixin하려면??
*/

class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("bowwow", this.name);
  }
}

const jake = new Dog("Jake");
jake.bark();

class Pet {
  feed(nutrient) {
    console.log(`feed to ${this.name}: `, nutrient);
  }
}

// 방법 1
// Dog.prototype.feed = Pet.prototype.feed;

Object.assign(jake, {
  likesPeople() {
    console.log(`${this.name} likes you.`);
  },
});

// console.log(Object.getOwnPropertyDescriptors(Pet.prototype));

// 방법 2
Object.defineProperty(Pet.prototype, "feed", { enumerable: true });
Object.assign(jake, Pet.prototype);
Object.defineProperty(Pet.prototype, "feed", { enumerable: false });

// 방법 3
Object.assign(jake, {
  feed: Pet.prototype.feed,
});

jake.feed("dog-food");
