const Productos = require('../models/Productos')


async function CompuDataGet(req , res){
    const data = await  Productos.find({})
    res.json(data)
}

module.exports = CompuDataGet
