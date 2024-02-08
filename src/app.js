const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const details = require('./models/details');
const slider = require('./models/slider');
const Services = require('./models/service');
const gallery = require('./models/gallery');

mongoose.connect("mongodb://localhost/nodejs_portfolio")
    .then(()=>{
        console.log("Database Connected");

        // gallery.create([
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJ3K6O4R1hHxqavp9hqSjtnA2_8mvXc7yRQ&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3wM8tlWMercQ8_fogKSo5Pl1aVmipnmoFg&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAC8jcrKTCvC49V4CrOXHltx7eHJxTSI8s1A&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H5uzcALdnb6UQA1TaBGzlBAHHiabC9L77Q&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-R8R3y9IcPMk4ST4gVTFVvYZKlpp5yqsF9w&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxe6-fdG2a-4Xgd946gcMXgQWdpuQkmFAqQ&usqp=CAU'
        //     },
        //     {
        //         ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SSkCoQiPCUC8yCl9M1GSYA9jSdtDCWLNgA&usqp=CAU'
        //     }
        // ]);

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

app.use(bodyParser.urlencoded({
        extended:true
}))
app.use(express.static("public")); 
app.use('',routes);


// Define a custom helper to get the current year
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});


//template engine

app.set('view engine','hbs');
app.set('views','views');

hbs.registerPartials("views/partials");

app.listen(process.env.PORT || 2000,()=>{
    console.log("server started");
});