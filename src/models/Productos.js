const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const Productosmodel = new Schema({
    Nombre:{type:String},
    Descripcion:{type:String},
    Precio:{type:String},
    Ws:{type:String},
    Faceboock:{type:String},
    Imagenprincipa:{type:String},
    ColeccionImagen:[]
  
})
module.exports = model('Productos' , Productosmodel)