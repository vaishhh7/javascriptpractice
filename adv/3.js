// promises is a utility provided by js. its a asynchronus behavour shown by js

// for deliberately showing asynch behvaiour we can use promises


// to create a promise we use new Promise method

// prmise takes a call back , it has two this either resolve or reject.. reject meaning the promise didnt work
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false
            if (success) {
                resolve("data fetched")
            } else {
                reject("error iss")
            }

        },5000)
    })

}

// let response =fetchData()
// console.log(response)

// a promise has two types of states asscoicated with it 


fetchData()
    .then((data)=> console.log(data))
    // multilevel aslso done like .then(()=>{})
    .catch((error)=> console.log(error))

// this then() handles the completiojn taht is the resolve and theh catch handles the rejections
// and both of these have a call back

 