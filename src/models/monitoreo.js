const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const Monitoreo = new Schema({
    Usuario:{type:[]},
    Fecha :{type:String},
    sistemaoperativo:{type:String}
})

module.exports = model('Monitoreo' , Monitoreo)