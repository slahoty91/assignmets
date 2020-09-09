

class assignmentService{
    // TO MIMIC FETCHING DATA FROM SERVER
    addCandidate(data){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("FROM SERVICE");
            },1000)
        })
        
    }

}

module.exports = assignmentService