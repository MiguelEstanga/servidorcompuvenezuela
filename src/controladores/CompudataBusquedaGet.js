const Productos = require('../models/Productos')


async function CompuDataBusquedaGet(req , res){
    const { name } = req.params
    const data = await  Productos.find({_id:name})
    res.json(data)
}

module.exports = CompuDataBusquedaGet