const express = require('express');
const routes = express.Router();

const Details = require('../models/details');
const Slider = require('../models/slider');
const Service = require('../models/service');
const Contact = require('../models/contact');
const Gallery = require('../models/gallery');


routes.get("/", async (req,res)=>{
   const details = await Details.findOne({"_id":"65be888cfd6c04dca1a760c3"})
   const slides = await Slider.find();
   const service = await Service.find()
   //console.log(details);
    res.render("index", {
        details : details,
        slides : slides,
        service: service
    });
})

routes.get("/gallery", async (req,res)=>{
    const details = await Details.findOne({"_id":"65be888cfd6c04dca1a760c3"})
    const gallery = await Gallery.find()
     res.render("gallery", {
         details : details,
         gallery: gallery
     });
})

routes.get("/about", async (req,res)=>{
  const details = await Details.findOne({"_id":"65be888cfd6c04dca1a760c3"})
   res.render("about", {
       details : details,
   });
})

routes.post("/contact-form", async (req,res)=>{
  try{
    const data= await Contact.create(req.body)
    console.log(data)
    res.redirect("/")
  }catch(e){
    console.log(e)
    res.redirect("/")
  }
})


module.exports = routes;