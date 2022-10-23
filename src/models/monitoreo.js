const mongoose = require("mongoose")
const {Schema , model } = mongoose

const Monitoreomodel = new Schema({
    
    ip:{type:String},
    Usuatio:{type:[]}
})
module.exports = model('Monitor' , Monitoreomodel)