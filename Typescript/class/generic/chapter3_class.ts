// Generic - 제네릭 클래스
class Factory1<T> {
  protected products: T[];

  constructor(products: T) {
    this.products = [products];
  }

  create(product: T) {
    this.products.push(product);
  }
  getProducts() {
    return [...this.products];
  }
}

const factory = new Factory1({ name: "KIA", description: "car factory" });
const products = factory.getProducts();

// Generic - 제네릭 클래스 확장
// #1.
class Quote<T> {
  lines: T;

  constructor(lines: T) {
    this.lines = lines;
  }
}

class SpokenQute extends Quote<string[]> {
  speak() {
    console.log(this.lines.join("\n"));
  }
}

new Quote("The only real failure is the failure to try.").lines; // 타입: string
new Quote([3, 4, 5, 6, 7, 5]).lines; // 타입: number[]

new SpokenQute(["A", "B"]).lines; // 타입: string[]

// #2.
class AttributedQuote<Value> extends Quote<Value> {
  speaker: string;

  constructor(value: Value, speaker: string) {
    super(value);
    this.speaker = speaker;
  }
}

new AttributedQuote("A", "B"); // 타입: AttributedQuote<string>

// #3.
class Factory<T> {
  protected products: T[];

  constructor(products: T) {
    this.products = [products];
  }

  create(product: T) {
    this.products.push(product);
  }
  getProducts() {
    return [...this.products];
  }
}

type Car = { model: string; year: number };
type LapTop = { cpu: string; memory: string };

class CarFactory extends Factory<Car> {} // Car로 고정
class LapTopFactory extends Factory<LapTop> {} // LapTop으로 고정

const carFactory = new CarFactory({ model: "a-model", year: 2020 });
carFactory.create({ model: "b-model", year: 2021 });
console.log(carFactory.getProducts());

const laptopFactory = new LapTopFactory({ cpu: "4core", memory: "32GB" });
laptopFactory.create({ cpu: "8core", memory: "64GB" });
console.log(laptopFactory.getProducts());

// Additional
class CoffeeFactory<T> extends Factory<T> {}

const coffeeFactory = new CoffeeFactory<{ menu: string; price: number }>({
  menu: "americano",
  price: 2000,
});
// 제네릭 파생 클래스(자식 클래스)는 자체 타입 인수를 기본 클래스(부모 클래스)에 전달할 수도 있다.

export {};
