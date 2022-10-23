const mongoose = require("mongoose")
const {Schema , model } = mongoose

const Portadamodel = new Schema({
    
    Portada:{type:String}
})
module.exports = model('Portada' , Portadamodel)