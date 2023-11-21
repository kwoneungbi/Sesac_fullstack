/* delay 기간 중 재 호출시 기존 호출 무시!
즉, 마지막(최종) 호출이 delay초(ms) 후에 실행! */

export const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const act = debounce((a) => a + 1, 1000);
act(100);
// 1초 동안 n번 호출 => 실행은 1회만
// 1초 후 => cd(100) 실행
// 1.5초 후
act(100);
