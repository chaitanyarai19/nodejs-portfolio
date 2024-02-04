const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    name: String,
    email:String,
    phone:String,
    state:String,
    city:String,
    zip:String,
    message:String,
})

module.exports = mongoose.model("contact", Contact);