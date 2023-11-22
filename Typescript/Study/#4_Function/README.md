# Function

```ts
function add(a, b) {
  return a + b;
}
// Parameter 'a' implicitly has an 'any' type.
// Parameter 'b' implicitly has an 'any' type.
```

명시적으로 타입 정보가 선언되지 않으면 절대 타입을 알 수 없다.
타입스크립트가 이를 any 타입으로 간주하며
매개변수의 타입은 무엇이든 될 수 있다.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

변수와 마찬가지로 타입스크립트를 사용하면
타입 애너테이션으로 함수 매개변수의 타입을 선언할 수 있다.

## **🔎 함수 매개변수 - 필수 매개변수**

> 타입스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정한다!

```ts
function add(a: number, b: number) {
  return a + b;
}

add(1);
//Error : Expected 2 arguments, but got 1.
add(1, 2); // Ok
add(1, 2, 3);
//Error : Expected 2 arguments, but got 3.
```

함수가 잘못된 수의 인수로 호출되면
타입스크립트는 타입 오류의 형태로 이의를 제기한다.
함수가 너무 적거나 많은 인수로 호출되면 타입스크립트는 인수의 개수를 계산한다.<br>

함수에 필수 매개변수(required parameter)를 제공하도록 강제하면
예상되는 모든 인수 값을 함수 내에 존재하도록 만들어
타입 안정성을 강화하는데 도움이 된다.

## **🔎 함수 매개변수 - 선택적 매개변수**

> 타입 애너테이션의 : 앞에 ?를 추가해 매개변수가 선택적이라고 표시

```ts
const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
  //Error : 'height' is possibly 'undefined'.
};

introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK
```

함수 호출에 선택적 매개변수를 인수로 제공할 필요 없다.
선택적 매개변수에는 항상 | undefined 가
유니언타입으로 추가 되어있기 때문이다.

```ts
const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  if (typeof height === "number") {
    // → 내로잉을 통해서 타입 좁혀줌
    console.log(`키 : ${height + 10}`);
  }
};
introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK
```

선택적 매개변수는 항상 암묵적으로 undefined가 될 수 있다.

함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수여야 한다.
필수 매개변수 전에 선택적 매개변수를 위치시키면 구문 오류 발생한다.

## **🔎 함수 매개변수 - 기본 매개변수**

> 기본 매개변수에는 기본적으로 값이 제공되기 때문에 해당 타입스크립트 타입에는
> 암묵적으로 함수 내부에 | undefined 유니언 타입이 추가된다.
> 타입스크립트는 함수의 매개변수에 대해 인수를 누락하거나
> undefined 인수를 사용하여 호출하는 것을 허용한다.

```ts
const introduce4 = (name: string, height = 0) => {
  console.log(`이름 : ${name}`);
  console.log(`키 : ${height + 10}`);
};

introduce4("권은비"); // OK
introduce4("은비", undefined);
introduce4("권은비", 170);

introduce4("권은비", "권동비");
//Error: Argument of type 'string' is not assignable to parameter of type 'number'.
/* introduce4함수에서 height는 number로 유추되지만, 함수를 호출하는 코드에서는 선택적 number | undefined가 된다.(undefined로 호출할 수 있지만 undefined가 될 순 없다!) */
```

## **🔎 함수 매개변수 - 나머지 매개변수**

> 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고, 해당 매개변수에서 시작해 함수에 전달된 나머지(rest)인수가
> 모두 단일 배열에 저장되어야 함을 나타낸다.
> 단, 인수 배열을 나타내기 위해 끝에 [] 구문이 추가된다.

```ts
const getSum = (...rest: number[]) => {
  let sum = 0;
  rest.forEach((el) => (sum += el));
  return console.log(sum);
};

getSum(1);
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
getSum(); // OK -> []
```

## **🔎 함수 매개변수 - 나머지 매개변수 (tuple로 개수 지정)**

> 스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고, 해당 매개변수에서 시작해 함수에 전달된 나머지(rest)인수가
> 모두 단일 배열에 저장되어야 함을 나타낸다.
> 단, 인수 배열을 나타내기 위해 끝에 [] 구문이 추가된다.

```ts
const getSum2 = (a: number, ...rest: [number, number]) => {
  let sum = 0;
  rest.forEach((el) => (sum += el));
  return console.log(sum);
};

getSum2(3, 2, 1); // OK
getSum2(1, 2, 3, 4, 5); // Error : Expected 3 arguments, but got 5.
```

## **🔎 함수의 반환 타입**

> 함수가 반환할 수 있는 가능한 모든 값을 이해하면 함수가 반환하는 타입을 알 수 있다.

```ts
//타입 : (songs:string[]) => number
function singSong(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}
```

singSong 함수는 number를 반환하는 것으로 파악된다.

```ts
//타입 : (songs:string[], index:number) => string|undefined
function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
```

getSongAt 함수는 string | undefined를 반환하는 것으로 유추됨.
두가지 가능한 반환값이 각각 string과 undefined 이기 때문이다.

## **🔎 함수의 반환 타입 - 명시적 반환타입**

> 함수에서 반환 타입을 명시적으로 선언하는 방식이 유용할 때가 종종 있다.

- 가능한 반환값이 많은 함수가 항상 동일한 타입의 값을 반환하도록 강제한다.
- 타입스크립트는 재귀함수의 반환 타입을 통해 타입을 유추하는 것을 거부한다.
- 수백 개 이상의 타입스크립트 파일이 있는 매우 큰 프로젝트에서 타입스크립트 타입 검사 속도를 높일 수 있다.

```ts
function singSongRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRecursive = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
```

함수 선언 반환 타입 애너테이션은
매개변수 목록이 끝나는 `)` 다음에 배치된다.
함수 선언의 경우는 `{` 앞에 배치된다.
화살표 함수의 경우 `=>` 앞에 배치된다.

> 함수의 반환문이 함수의 반환 타입으로 할당할 수 없는 값을 반환하는 경우 타입스크립트 할당가능성 오류를 표시한다.

```ts
function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case "Strong Man":
      return new Date("April 20, 2010"); //OK

    case "Painkiller":
      return "unknown";
    // Error : Type 'string' is not assignable to type 'Date'.
    default:
      return undefined; //OK
  }
}
// Date | undefined를 반환하도록 명시적으로 선언되었지만 반환문 중 하나가 string을 반환하도록 잘못 제공하고 있다.
```

## **🔎 함수 타입(Function Type) 매개변수: contravariance**

```ts
function runOnSongs(f: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(f(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}

function logSong(song: string | number) {
  return `${song}`;
}

runOnSongs(getSongAt); // OK
runOnSongs(logSong); // OK

function runOnSongs2(f: (index: number | string) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(f(i));
  }
}
runOnSongs2(getSongAt); // Error!!
runOnSongs2(logSong); // OK
```

## **🔎 void 반환 타입**

> 일부 함수는 어떤 값도 반환하지 않을 수 있음 -> 타입스크립트는 void 키워드를 사용해 반환값이 없는 함수의 타입을 확인할 수 있다.

```ts
function logSong(song: string | undefined): void {
  if (!song) {
    return; //ok
  }
  console.log(`${song}`);

  return true;
  //Type 'boolean' is not assignable to type 'void'.
}

// -> void를 반환하도록 선언되었으므로 값 반환을 허용하지 않음
```

함수 타입 선언시 void 반환 타입은 매우 유용하다.
함수 타입을 선언할 때 void를 사용하면 함수에서 반환되는 값은 모두 무시된다.

```ts
let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`);
};
songLogger("HeartBeat"); // OK
```

## **🔎 never 반환 타입**

> never 반환 함수는 (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수이다.

```ts
function fail(message: string): never {
  throw new Error(`Invariant Failure : ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }

  // 여기에서 param의 타입은 string으로 알려짐
  param.toUpperCase();
}
```

함수가 절대 반환하지 않도록 의도하려면 명시적 : never 타입 애너테이션을 추가해준다.
해당 함수를 호출한 후 모든 코드가 실행되지 않음을 나타낸다.

**`never는 void와는 다르다!!`** <br>
void는 아무것도 반환하지 않는 함수를 위한 것, never는 끝나지 않는 함수를 위한 것!
