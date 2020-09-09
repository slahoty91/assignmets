const Rout = require('express');
const Router = Rout.Router();
const controllerClass = require('../Controller/controller');

console.log("From routesssssssssssss");
let contObj = new controllerClass();
Router.route('/addCandidates')
    .get(contObj.addCandidate)

module.exports = Router;