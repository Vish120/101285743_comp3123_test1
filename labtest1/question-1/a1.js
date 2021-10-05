function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        try {
            var a1 = array.filter(item => typeof item == "string")
            
            var lowerStrArray = a1.map(
                x => x.toLowerCase()) 

            resolve(lowerStrArray)
        } catch (rejection) {
            reject(rejection.message)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const out = async() => {
    var out = await lowerCaseWords(mixedArray)
    console.log(out)
}
out()