const mongoose = require('mongoose');
const slider = mongoose.Schema({
    ImageUrl: String,
    class: String
})

module.exports = mongoose.model("slider",slider);