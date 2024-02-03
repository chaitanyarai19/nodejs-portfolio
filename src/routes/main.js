const express = require('express');
const routes = express.Router();

const Details = require('../models/details');

routes.get("/", async (req,res)=>{
   const details = await Details.findOne({"_id":"65be888cfd6c04dca1a760c3"})
   //console.log(details);
    res.render("index", {
        details : details
    });
})

routes.get("/gallery", async (req,res)=>{
    const details = await Details.findOne({"_id":"65be888cfd6c04dca1a760c3"})
    //console.log(details);
     res.render("gallery", {
         details : details
     });
})


module.exports = routes;