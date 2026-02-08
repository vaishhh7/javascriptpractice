// numbers

// Primitive: Basic data types in JavaScript that store a single value and are immutable 
// (like number, string, boolean, null, undefined, symbol, bigint).


let balance =120
let anotherBalance = new Number(120)
console.log(typeof(balance));
console.log(typeof(anotherBalance))
// in js almost everthing is a object
let active =true
let isactive = new Boolean(true)
console.log(typeof active)
console.log(typeof isactive)

let firstname= null
console.log(firstname)


// string
// even tho it is primitive it has a lot of functionalities
let mystring="hello"
let mystring1= 'bye'
let greet= 'bad'
let username ='vaish'
// string interpreaton
let greetmess = `hello ${username}`
console.log(greetmess)

let demo1='meow'
let demo2= `this is a cat and she goes ${demo1}`
console.log(demo2)


// symbol
let s1= Symbol()
let s2= Symbol()
console.log(s1)

