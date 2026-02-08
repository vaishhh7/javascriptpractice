let username = { 
    name: "vaish", 
    isloggedin: true }
console.log(username)
console.log(typeof username)

// control d is used to change all the occurances name of an entity in the file page
console.log(typeof username.name)

username.lastname='tiwari'
console.log(username.lastname)

let today= new Date();
console.log(today.getDay) // this way im just  calling the function so the function type will get printed
console.log(today.getDay())
// now the getDay() will basically give me 0,1,2,3,4,5,6 where 0 represents sunday and so on



// Array is a data strucntire that stotes multiple elemtsn of the same dayta type in its contigous memory location
// it allows us effective direct access to any elemenr using numercal index


/////////////////          ARRAYYY////
let anotherUser=[ 'hitesh', true, 120]

console.log("grah"+1);
// let value = true
let value ="2ab"
console.log (value +1)  // true is considered 1 and false 0
console.log("1"+1)


// IMPLICIT CONVERSION IS NOT RELIABLE IN JAVA SCRIPT

console.log(Number(value))
// we get nan not a number
console.log(typeof Number(value))

// this number should be capital man or else error
console.log( Number(undefined))// this gives nana

console.log( Number(null))// this gives 0
