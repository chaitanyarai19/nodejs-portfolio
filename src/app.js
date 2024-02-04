const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const mongoose = require('mongoose');
const details = require('./models/details');
const slider = require('./models/slider');
const Services = require('./models/service');

mongoose.connect("mongodb://localhost/nodejs_portfolio")
    .then(()=>{
        console.log("Database Connected");

    //     Services.create([
    //         {
    //         icon: 'fa-solid fa-code',
    //         title:'Website Development',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     },
    //     {
    //         icon: 'fa-solid fa-code',
    //         title:'App Development',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     },
    //     {
    //         icon: 'fa-solid fa-code',
    //         title:'College Projects',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     },
    //     {
    //         icon: 'fa-solid fa-code',
    //         title:'Graphics Designing',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     },
    //     {
    //         icon: 'fa-solid fa-code',
    //         title:'IOT Projects',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     },
    //     {
    //         icon: 'fa-solid fa-code',
    //         title:'SEO Optimization',
    //         linktext: 'View More',
    //         linkurl: '#'
    //     }

    // ]);
        // slider.create([
        //     {
        //         ImageUrl:'images/slider1.jpg'
        //     },
        //     {
        //         ImageUrl:'images/slider2.jpg'
        //     },
        //     {
        //         ImageUrl:'images/slider3.jpg'
        //     },
        // ]);

        // details.create({
        //     brandName:'Portfolio',
        //     brandIconUrl : 'https://tioitservices.bloodanytime.com/assets/img/favicon.png',
        //     links: [
        //         {
        //         label: "Home",
        //         url:"/"
        //         },
        //         {
        //             label: "gallery",
        //             url:'/gallery'
        //         },
        //         {
        //             label:"about",
        //             url:'/about'
        //         },
        //     ],

        //     dropdownLabel:"Services",
        //         dropdown:[
        //             {
        //                 label:"Website Development",
        //                 url:"#"
        //             },
        //             {
        //                 label:"Graphic Designing",
        //                 url:"#"
        //             },
        //             {
        //                 label:"College Projects",
        //                 url:"#"
        //             },
        //         ]
        // });
     })
    .catch((error)=>{
        console.log("Error Connecting to Database");
    })

app.use(express.static("public")); 
app.use('',routes);

//template engine

app.set('view engine','hbs');
app.set('views','views');

hbs.registerPartials("views/partials");

app.listen(process.env.PORT || 2000,()=>{
    console.log("server started");
});