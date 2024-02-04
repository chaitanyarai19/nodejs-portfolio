const mongoose = require('mongoose');

const Service = mongoose.Schema({
    icon: String,
    title: String,
    linktext:String,
    linkurl:String
})

module.exports = mongoose.model("services", Service)