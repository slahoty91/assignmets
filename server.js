const express = require('express');
const bodyParser = require('body-parser');
const route = require('./Routes/route');

const app = express();
(() =>{

    try{

        app.listen(3000, ()=>{
            console.log("Server Started");
    
        })
    
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use('/api/assignment', route);

    }catch(e){
        console.log(e);
    }
    

})()