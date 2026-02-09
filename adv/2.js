// closures in java script- they are basically function that remmeber their envivronment in which they were created in
//they retain varaibles created out of ijt


function outer(){
    let counter=0
    return function(){
        counter++
        return counter
    }
}
let increment = outer()
console.log(increment()) // if you do this it will just return what increment is refferencing to the function where as increment() function is getting executed

// the memory of this function is retained