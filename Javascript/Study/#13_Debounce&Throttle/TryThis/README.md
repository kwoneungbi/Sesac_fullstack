# **Try This - debounce & throttle**

0.1초에 한번씩 rand를 총 20회 호출하였을 때, 다음의 각 상황에서 총 몇 번 호출되는지 증명하시오.<br>
단순 호출 시 ⇒ 총 20회 실행!<br>
1초 Debounce 호출 시 ⇒ 1회 (총 3초에 실행)<br>
1초 Throttle 호출 시 ⇒ 총 2초 동안 ⇒ 2회 실행!(1초에 한번씩)<br>

```js
const rand = (s, e) => {
  const ret = s + Math.floor((e - s + 1) * Math.random());
  console.log("rand>>", ret);
  return ret;
};
```
