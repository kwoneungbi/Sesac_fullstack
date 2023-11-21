/* delay 기간 별 1회 호출 보장 */

export const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const act = throttle((a) => a + 1, 1000);
act(100);
// 1초 동안 n번 호출 => 실행 1회만!
// 10초 동안 n번 호출 => 실행은 10회만!
// 매 1초 마다 => cb(100) 실행
