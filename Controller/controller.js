const assignmentService = require('../Service/service');
const helper = require('../Helpers/helper');
const path = require('path');

class assignmentController{

    async addCandidate(req,res){
        try{

            let serobj = new assignmentService();
            
            let timerStartedAt = helper.startTimer();
            await serobj.addCandidate(req.body);
            let pathOfFolder = path.join(__dirname,'../timerFiles/');

            helper.createFolder(pathOfFolder);
            helper.writeToFile(timerStartedAt,pathOfFolder);

            res.send(`FILE SAVED AT ${pathOfFolder}`);

        }catch(e){

            res.send(`FILE NOT SAVED`);
            console.log(e);

        }
        
    }

}

module.exports = assignmentController;