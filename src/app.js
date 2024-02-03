const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./routes/main');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/nodejs_portfolio")
    .then(()=>{
        console.log("Database Connected");
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