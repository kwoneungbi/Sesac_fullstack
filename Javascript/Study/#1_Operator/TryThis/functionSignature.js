const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

// solution #1
const solution = (userObj) => {
  const { id, name } = userObj;
  console.log(id, name);
};

// solution #2
const solution1 = (userObj) => console.log(userObj.id, userObj.name);

// solution #3
const solution2 = (userObj) => console.log(userObj["id"], userObj["name"]);

solution(hong);
solution(lee);
solution1(hong);
solution1(lee);
solution1(hong);
solution1(lee);
