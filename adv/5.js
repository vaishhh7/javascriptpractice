function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched")

        }, 3000)


    })
}
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched")

        }, 10000)


    })

}

async function getBlogData() {
    try {
        console.log("the data is being fetched")
        // const blogdata= await fetchPostData()
        // const bd= await fetchCommentData()
        // console.log(blogdata)
        // console.log(bd)

        // const meow =await Promise.all ([fetchCommentData(), fetchCommentData()])
        // console.log(meow)


        const [blogdata, bd] = await Promise.all([fetchCommentData(), fetchPostData()])
        console.log(blogdata)
        console.log(bd)

        // basically three ways to print this 
    } catch (error) {
        console.log("error occured", error)
    }
}


getBlogData()
