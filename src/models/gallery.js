const mongoose = require('mongoose');
const Gallery = mongoose.Schema({
    ImageUrl:String
})

module.exports = mongoose.model("gallery",Gallery);