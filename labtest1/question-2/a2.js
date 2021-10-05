// similar to delayedSuccess
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" }
            resolve(success)
        }, 500)
    })
}

//  similar to delayedException
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("delayed exception!")
            } catch (rejection) {
                var error = {"error": rejection.message }
                reject(error)
            }
        }, 500)
    })
}

// Calling both promises separately and handle the resolved and reject results and then output
const result = async() => {
    try{
        console.log(await resolvedPromise())
        await rejectedPromise()
    } catch(rejection) {
        console.error(rejection);
    }
}
result()