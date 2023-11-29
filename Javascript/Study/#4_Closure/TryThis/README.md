# 평가 문제 : 주문 받기 및 영수증 출력하기

[📌 코드 보러가기](https://github.com/kwoneungbi/Sesac_fullstack/blob/master/Javascript/Study/%234_Closure/TryThis/billPrint.js)

다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오.<br>
부가세 = Math.round((금액/1.1) \* 0.1)

```js
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};
function bill() {}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

const table2 = bill();
table2.order("짜장");
table2.printBill();

table1.order("탕슉");
table1.printBill();
```
