// 평가 문제 : 주문 받기 및 영수증 출력하기
// 다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오.

/* 공급가액 : MENU.짜장.price, 부가세액 : Math.round(MENU.짜장.price/1.1), 
주문합계 : 공급가액 합계, 세액합계: 부가세액 합계 */

//refectoring --------------------------------
// console.log가 너무 많음
// 수량 추가하기
// 테이블명도 추가, 메뉴 cancel시 도 추가
// 템플릿 함수 사용해서 toLocaleString().padStart(10) 중복 없애기
// unit test??
// printBill 함수 안에 너무 많음
// private한것을 앞에 _를 붙여서 알려줌

const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill() {
  const orderMenu = [];

  return {
    order: (menu) => {
      if (MENU[menu]) {
        orderMenu.push(menu);
      }
    },

    printBill: () => {
      let totalTax = 0;

      console.log(LINE);
      for (let i of orderMenu) {
        console.log(`* ${i}`);
        console.log(
          `공급가액: ${MENU[i].price.toLocaleString().padStart(10)}원`
        );

        if (!MENU[i].taxfree) {
          let taxValue = Math.round((MENU[i].price / 1.1) * 0.1);
          totalTax += taxValue;
          console.log(`부가세액: ${taxValue.toLocaleString().padStart(10)}원`);
        } else {
          console.log(`부가세액: ${"0".padStart(10)}원`);
        }
        console.log(LINE2);
      }
      // console.log("test orderMenu >>> ", orderMenu);
      console.log(
        `주문합계: ${orderMenu
          .reduce((acc, menu) => acc + MENU[menu].price, 0)
          .toLocaleString()
          .padStart(10)}원`
      );
      console.log(`세액합계: ${totalTax.toLocaleString().padStart(10)}원`);
      console.log(LINE);
    },
  };
}

const LINE = "=".repeat(22);
const LINE2 = "-".repeat(22);

const table1 = bill();

table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

const table2 = bill();
table2.order("짜장");
table2.printBill();

table1.order("탕슉");
table1.printBill();
