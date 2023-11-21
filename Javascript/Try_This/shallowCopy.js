/* 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 
Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오. 
*/
const kim = { nid: 3, nm: "Hong", addr: "Busan" };

const newKim = kim;

console.log(kim.addr === newKim.addr);
console.log(kim.nm === newKim.nm);
console.log(kim.nid === newKim.nid);
