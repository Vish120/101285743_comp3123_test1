var fs = require('fs')
var path = "./Logs"

if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
    process.chdir(path)
    for (let i = 0; i < 10; i++) {
        var logName = `log${i}.txt`
        fs.writeFileSync(logName, logName)
        console.log(logName)
    }

} else if(fs.existsSync(path)){
    const file = fs.readdirSync(path)
    for (logName of file) {
        fs.unlinkSync(`${path}/${logName}`)
        console.log("delete files...", logName)
    }
    fs.rmdirSync(path)
   
}