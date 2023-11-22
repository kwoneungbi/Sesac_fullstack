# **Object**

## **🔎 객체(Object)를 정의하는 타입**

```ts
let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
xuser = { id: 1 }; // Error (Property 'name' missing in type)
xuser = { id: 1, name: "xx", age: 30 }; // Error ({id, name, age} is not assignable to type {id,name} )

// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = { id: 1, name: "Hong" }; // OK
hong = { id: 1 }; // Error (name property missing) suppressExcessPropertyError 를 활성화(true)로 하면 오류 안남!!
hong = { id: 1, name: "Hong", addr: "Pusan" }; // Error(not assignable)
hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // OK
```

**TS의 타입시스템은 타입을 구조화하여(구조적으로) 정의**

```ts
let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
xuser = { id: 1 }; // Error (Property 'name' missing in type)
xuser = { id: 1, name: "xx", age: 30 }; // Error ({id, name, age} is not assignable to type {id,name} )

// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = { id: 1, name: "Hong" }; // OK
hong = { id: 1 }; // Error (name property missing)
hong = { id: 1, name: "Hong", addr: "Pusan" }; // Error(not assignable)
hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // OK
```

## **🔎 Type Check System**

**Structurally Typed (`Symbol Table`)** <br>
= Identifier + TypeKeyword + Properties<br>
(Type Literal, Property Signature)<br>
**Type Comparer && Inference System** <br>
⇒ Assignable <br>
**Object Assignability** <br>

- Exact Matching
- Covariance or Bivariance (when freshness off)
