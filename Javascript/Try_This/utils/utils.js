export const solution = (obj) => {
  const newObj = Array.isArray(obj) ? new Array() : new Object();
  // const newObj = Array.isArray(obj) ? [] : {}
  // const newObj = new obj.constructor();

  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = solution(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  // obj.constructor.name === Symbol

  return newObj;
};
