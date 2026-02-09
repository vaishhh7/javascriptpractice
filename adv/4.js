

function fetUserData (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name:"vaishnavi", url:"https://www.google.com/"})


        }, 2000)
    })
}

async function getUserData(){
    try{
        console.log("fetching user data")
        const userData= await fetUserData() // we can only use this await when there is an asynnc
        console.log(userData)

    } catch (error){
        console.log("this is the error fatching data ", error)

    }
}
getUserData()
