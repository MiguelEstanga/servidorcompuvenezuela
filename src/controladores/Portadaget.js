const Portada = require('../models/Portada')


async function PortadaGet(req , res){
    const data = await  Portada.find({})
    res.json(data)
}

module.exports = PortadaGet
