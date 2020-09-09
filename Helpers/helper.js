const path = require('path');
const fs = require('fs');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

exports.startTimer = ()=>{

    let timer = new Date();
    return timer.getTime();

}

exports.writeToFile = (startTime,folderPath)=>{

    try{

        let time = new Date();
        let diffTime = (time.getTime() - startTime)/1000;
        let fileName = `${folderPath}${time.getDate()}-${months[time.getMonth()]}-${time.getUTCFullYear()},${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}.txt`;

        fs.writeFile(fileName,diffTime,(err)=>{
            if(err){
                console.log(err);
            }
        })

    }catch(e){

        console.log(e);
        throw new Error(e);

    }
    

    
}

exports.createFolder = (targetDir, opts) => {

    const isRelativeToScript = opts && opts.isRelativeToScript
    const sep = path.sep
    const initDir = path.isAbsolute(targetDir) ? sep : ''
    const baseDir = isRelativeToScript ? __dirname : '.'

    return targetDir.split(sep).reduce((parentDir, childDir) => {
        const curDir = path.resolve(baseDir, parentDir, childDir)
        try {
            fs.mkdirSync(curDir)
            console.info(`Directory ${curDir} created!`)
        } catch (err) {
            if (err.code === 'EEXIST') { // curDir already exists!
                // console.info(`Directory ${curDir} already exists!`)
                return curDir
            }

            // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows
            if (err.code === 'ENOENT') { // Throw the original parentDir error on curDir `ENOENT` failure.
                throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`)
            }

            const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1
            if (!caughtErr || caughtErr && curDir === path.resolve(targetDir)) {
                throw err // Throw if it's just the last created dir.
            }
        }

        return curDir
    }, initDir)
}