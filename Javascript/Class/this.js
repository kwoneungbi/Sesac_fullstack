var name = "kwon";

const object = {
    name: "eunbi",
  func: () => {
    console.log("allow >>", this);
  },
  a() {
    console.log("선언문 >>", this.name);
  }
};

const f = object.a;
f();

object.a();
object.func();

// cf. Object Method
const obj = {
  name: "ObjName",
  bark() {
    // good!(호출한 객체)
    console.log("bark=", this.name);
  },
  bark2: () =>
    // bad!! (this = 전역)
    console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();

// ⇔ function declareFn(name) {
  const expressFn = function(name) {
    // if, 'use strict'?
    this.name = name;
    console.log("this >>>>" ,this, "new.target >>>>", new.target, "this.name >>>", this.name, name);
  } 

  function g(name) {
    this.name = name;
    console.log("globalObjThis >>>>" ,this, "globalObj new.target >>>", new.target, "globalObj this.name >>>", this.name, name);
  } 
  
  
  const arrowFn = (name) => {
    this.name = name;
    console.log("arrowThis >>>>", this, "arrow new.target >>>>", new.target,"arrow this.name >>>", this.name, name);
  }
  
  expressFn('expfn'); // this >>>> Object [global], new.target >>>> undefined, this.name >>> expfn, name -> expfn
  g('eunbi') // globalObjThis >>>> Object [global], globalObj new.target >>> undefined, globalObj this.name >>> eunbi, name -> eunbi
  arrowFn('afn'); // arrowThis >>>> { name: 'afn'}, arrow new.target >>>> undefined, arrow this.name >>> afn, name -> afn

  
  const dfn = new expressFn('D'); // this >>>> expressFn { name: 'D'}, new.target >>>> [Function: expressFn], this.name >>> D, name -> D
  const dfn2 = new g('kwon') // globalObjThis >>>> g { name: 'kwon' }, globalObj new.target >>> [Function: g], globalObj this.name >>> kwon, name -> kwon
  // const afn = new arrowFn('A'); // error!
  
