# **destructuring 구조 분해 할당**

**Object Destructuring**
`const {id, name} = {id: 1, name: 'Hong'}`

**Iterator Destrcturing**<br>
`const [a, b] = [1, 2]`

**Default Value Destructuring**<br>
`const {id, name, add = 'Seoul'} = {id : 1, name: 'Hong'}`
`const [a, b, c = 3] = [1, 2]`

**Arguments Destructuring**<br>
`function fn({a, b}) {...}`
`fn({a: 1, b: 2})`

---

### **🔎 object destructuring 객체 구조 분해 할당**

```javascript
const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
const id = user.id;  ⇒ ⇒ const { id: id } = user;  ⇒ ⇒ const { id } = user;
const { id: userId, name: userName } = user;  ⇒ ⇒ console.log(userId, userName);
let id, name;
{ id, name } = user;  ← SyntaxError  ⇒ ⇒ ({ id, name } = user);
const { id, addr } = user;      const { city } = addr;
 ⇒ ⇒ const { id, addr: { city } } = user;
 ⇒ ⇒ const { id, addr: { city: addrCity } } = user;  // addrCity = ? Seoul
const arr = [1, 2, 3, 4, 5];  // {0: 1, 1: 2, …}
const {1: x1, 3: x2} = arr;   // x1 = 2, x2 = ? 4
const mainField = user.id > 5 ? 'name' : 'addr';   // {addr: target
const { [mainField]: target } = user;  // target = ? { city: 'Seoul' }
target ='Kim';  // Uncaught TypeError: Assignment to constant variable.
const { name: target } = user;  // ONLY Browser Console Available!! ('이미 선언되었어요!')
```

### **🔎 array destructuring 배열 구조 분해 할당**

```javascript
const [a, b] = [1, 2];

let c, d;
[c, d] = [1, 2];

const [, , d] = [1, 2, 3]; // d => 3
const [, x, , y, , z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 2, 4, 6

[f, g] = [1, 2];

let [a, b] = [1, 2];
[b, a] = [a, b];

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];
const [, { id: usrId }] = users;
console.log(usrId); // 2

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
arr.map(([{ id: x }]) => console.log(x)); // 1, 2
```

### **🔎 default value destructuring 구조 분해 할당 - 기본값**

```javascript
const { id, name, addr = "Seoul" } = { id: 1, name: "Hong" }; // addr = Seoul
const [a, b, c = 3] = [1, 2]; // a = 1, b = 2, c = 3

const { id, name = "Hong" } = { id: 1, name: "" }; // id = 1, name은 출력안됨
const [e, f, g = 3] = [1, 2, 0]; // e = 1, f = 2, g = 0
```

### **🔎 arguments destructuring 매개변수 구조 분해 할당**

```javascript
const user = { id: 3, name: "e" };

function fn(arg1, { id, name }, arg2) {
  console.log(arg1, id, name, arg2);
}
fn(10, user, 20);
```
