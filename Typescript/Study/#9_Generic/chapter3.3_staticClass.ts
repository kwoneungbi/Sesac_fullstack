// Generic - 정적 클래스 제네릭

class BothLogger<OnInstace> {
  instanceLog(value: OnInstace) {
    console.log("instanceLog.value", value);
    return value;
  }

  // static A: OnInstance;
  /* OnInstace type은 인스턴스 생성시 정해진다.
  따라서 인스턴스를 생성하지 않아도 접근 가능한 정적 클래스 메서드에서는 
  클래스에 선언된 어떤 타입 매개변수에도 접근할 수 없다. */

  static staticLog<OnStatic>(value: OnStatic) {
    console.log("staticLog.value", value);
    return value;
  }
}

const logger = new BothLogger<number[]>();
const value = logger.instanceLog([1, 2, 3]); // number[]
// logger.instanceLog(['A', 'B', 'C', 'D']); // arguments must be number[]
/* BothLogger 인스턴스 생성시에 OnInstance 타입이 number[]로 정해졌기 때문에
instanceLog() 메서드의 매개변수 타입도 number[]이다. */

const logger2 = new BothLogger();
const value2 = logger2.instanceLog("Hello"); // unknown
/* BothLogger 인스턴스(logger2) 생성시에 onInstance 타입이 정해지지 않았기 때문에
instanceLog() 메서드의 매개변수 및 리턴 타입은 unknown이다. */

BothLogger.staticLog<string[]>(["a", "b", "c"]);
BothLogger.staticLog([true, false, false]);

export {};
