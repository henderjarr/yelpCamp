const mongoose = require('mongoose')
const Schema = mongoose.Schema

var campSchema = new mongoose.Schema({
    name: String,
    image: String
})   

var Campground = mongoose.model('Campground', campSchema)


module.exports = Campground