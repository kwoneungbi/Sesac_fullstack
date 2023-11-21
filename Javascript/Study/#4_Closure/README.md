# **Closure**

> ✍ **목표: 클로저에 대해 이해하기**

### 🔎 **closure 란?**

- "A closure is the combination of a function and the lexical environment within which that function was declared." - MDN
- 외부 함수를 참조하는 내부 함수(스코프 사슬에 접근) - 안토 아라빈스, 스리칸스 마치리주(Functional Javascript, 2020)
- 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 것 - 이선 브라운(러닝 자바스크립트, 2017)
- 로컬 변수를 참조하고 있는 함수 내의 함수 - 야마다 요시히로(자바스크립트 마스터 북, 2017)
- 자신이 생성될 때의 스코프에서 알 수 있었던 변수들 중 언젠가 자신이 실행될 때 사용할 변수들만을 기억하여 유지시키는 함수 - 유인동(함수형 자바스크립트 프로그래밍, 2017)
- 함수 선언 시 만들어지는 유효범위가 사라진 후에도 호출할 수 있는 함수 - 베어 바이볼트,존 레식(자바스크립트 닌자 비급, 2014)
- 이미 생명 주기상 끝난 외부 함수의 변수를 참조하는 함수 - 송형주,고현준(인사이드 자바스크립트, 2014)

내 생각 : "상위 스코프의 식별자를 참조하는 하위 스코프(함수 또는 객체 메서드)가 외부에서 지속적으로 참조되어 상위 스코프보다 더 오래 살아있는 것"

** Closure를 코드로 알아보기 **

1번 코드

```javascript
let user;
{
  const privateUser = { id: 1, name: "Hong" };
  user = privateUser;
  // 이 user 변수가 하위(Block) 스코프의 privateUser를 참조
}
// block은 끝나서 이 block의 BlockExecutionContext는 ECS에서 사라졌지만,privateUser를 user가 계속 참조하고 있어 BlockLexicalEnvironment(DecEnvRec)는 사라질 수 없다!

user.age = 30; // user refer to privateUser ⇒ 실제로 privateUser가 변경!
console.log(user); // { id: 1, name: 'Hong', age: 30 }
```

2번 코드

```javascript
const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFn = outer();
innerFn();
```

---

> Closure 함수 코드를 가지고 실행컨텍스트 그리기를 해보았다.

```js
function discount() {
  const dcRate = 0.1; // private variable
  return function (price) {
    // 내부함수(:외부에서 dcRate 참조 가능하도록하는 함수를 반환)
    return price * dcRate; // dcRate를 외부에서 직접 접근 못하지만 이 함수는 가능
  }; // 즉, 외부에서 현재 할인율을 알 수는 없음!
}

const items = [
  { item: "상품 A", price: 32000 },
  { item: "상품 B", price: 45000 },
];
const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}
```

### Execution Context Stack 순서

![](https://velog.velcdn.com/images/eungbi/post/f51f3792-9be0-4833-b5ea-8e4acb9600af/image.png)

### Execution Context 단계

![](https://velog.velcdn.com/images/eungbi/post/33d42dae-32d1-4913-897b-aab275814519/image.png)

![](https://velog.velcdn.com/images/eungbi/post/ec5c8626-9e21-4e35-b055-19a27dce25c9/image.png)

![](https://velog.velcdn.com/images/eungbi/post/6de161d5-bc3a-4cfe-b55f-06d509003d80/image.png)

![](https://velog.velcdn.com/images/eungbi/post/949637d6-5149-47c3-b4b6-59660d864d74/image.png)

![](https://velog.velcdn.com/images/eungbi/post/b6dcedc6-522d-441f-b828-4c2b6211a236/image.png)

![](https://velog.velcdn.com/images/eungbi/post/6ecb68e1-0b59-4a86-be2a-cd6caa8cf488/image.png)

![](https://velog.velcdn.com/images/eungbi/post/8637e204-cf26-4e2f-b9a4-b6674d7aef84/image.png)

![](https://velog.velcdn.com/images/eungbi/post/176c5ede-0db2-455a-a30e-fa9e61c16d08/image.png)

![](https://velog.velcdn.com/images/eungbi/post/8436c460-5f03-4023-992d-4faa294753a9/image.png)

![](https://velog.velcdn.com/images/eungbi/post/679c7f1b-9b81-4ab6-b4ef-90bd6837c49d/image.png)

![](https://velog.velcdn.com/images/eungbi/post/adbfba73-bc82-47d1-a286-6a9e6cde16f0/image.png)
