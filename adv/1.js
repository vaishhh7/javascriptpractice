console.log("this is my first file")
function sum(){
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    

}
sum()
function hello() {
    console.log("hello how are you")
}

setTimeout(() => {
    hello();

}, 10000)


// this is how the code works asynchronusly

// js doesnt have this timer function built in but it can still execute it 
// even on the browser
 