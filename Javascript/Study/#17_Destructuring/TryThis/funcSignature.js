const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

// solution 1
const f1 = ({ id, name }) => {
  console.log(id, name);
};

// solution 2
const f2 = (user) => {
  console.log(user.id, user.name);
};

// solution 3
const f3 = (...user) => {
  const [{ id, name }] = user;
  console.log(id, name);
};

f1(hong);
f1(lee);
f2(hong);
f2(lee);
f3(hong);
f3(lee);
