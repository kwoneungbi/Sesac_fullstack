/*
TryThis: error 출력
다음에서 '가', '나', '다', '라' 어떤 걸 throw 해도 에러 메시지를 출력하도록 수정하시오.
try {
  // throw new Error('some error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  throw ['some', 'array', 'error'];       // 다
  // throw ["some", "array", "error"];    // 다
} catch (error) {
  console.log((error as Error).message);
}
*/

// solution #1
try {
  // throw new Error('some error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  throw ["some", "array", "error"]; // 다
  // throw ["some", "array", "error"];    // 라
} catch (error) {
  console.log(error instanceof Error ? error.message : error);
}

// solution #2
try {
  // throw new Error('some error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  // throw ["some", "array", "error"];    // 다
  throw { code: 503, message: "Internal Server Error!" }; // 라
} catch (error) {
  if (error !== null && typeof error === "object" && "message" in error)
    console.log(error.message);
  else console.log(JSON.stringify(error));
}
