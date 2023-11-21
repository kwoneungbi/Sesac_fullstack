// Generic - 메서드 제네릭

type Syrup =
  | { syrup: "choco"; price: 500 }
  | { syrup: "strawberry"; price: 800 };
type Topping = "java" | "cherry";
type Coffee = {
  menu: string;
  price: number;
};

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

class CoffeeFactory1 extends Factory1<Coffee> {
  order<T>(menu: string, topping: T[]) {
    // 인스턴스와 무관하게 메서드에서 자체 제네릭 타입 사용 가능
    const coffee = this.products.find(({ menu: coffee }) => coffee === menu);
    return coffee ? { ...coffee, additives: topping } : null;
  }
}

const coffeeFactory1 = new CoffeeFactory1({
  menu: "americano",
  price: 2000,
});

export {};
