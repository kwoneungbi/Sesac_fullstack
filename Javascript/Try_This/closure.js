// 평가 문제 : 주문 받기 및 영수증 출력하기
// 다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오.

/* 공급가액 : MENU.짜장.price, 부가세액 : Math.round(MENU.짜장.price/1.1), 
주문합계 : 공급가액 합계, 세액합계: 부가세액 합계 */

const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill() {
  const orderMenu = [];

  const order = (menu) => {
    if (MENU[menu]) {
      orderMenu.push(menu);
    }
  };

  const printBill = () => {
    let totalTax = 0;

    console.log("======================");
    for (let i of orderMenu) {
      console.log(`* ${i}`);
      console.log(`공급가액: ${MENU[i].price.toLocaleString().padStart(10)}원`);

      if (!MENU[i].taxfree) {
        let taxValue = Math.round((MENU[i].price / 1.1) * 0.1);
        totalTax += taxValue;
        console.log(`부가세액: ${taxValue.toLocaleString().padStart(10)}원`);
      } else {
        console.log(`부가세액: ${"0".padStart(10)}원`);
      }

      console.log("----------------------");
    }
    // console.log("test orderMenu >>> ", orderMenu);
    console.log(
      `주문합계: ${orderMenu
        .reduce((acc, menu) => acc + MENU[menu].price, 0)
        .toLocaleString()
        .padStart(10)}원`
    );
    console.log(`세액합계: ${totalTax.toLocaleString().padStart(10)}원`);
    console.log("======================");
  };
  return { order, printBill };
}

const table1 = bill();

table1.order("짜장");
table1.order("짬뽕");
table1.printBill();
table1.order("탕슉");
table1.printBill();
