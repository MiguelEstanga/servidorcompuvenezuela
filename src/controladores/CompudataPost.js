const Productos = require('../models/Productos')
const uploadsImagenes = require("../util/cloudinary")

async function CompuData(req , res){
    const {Descripcion , 
           Precio , 
           ws , 
           Faceboock,
           Nombre
          }  = req.body

    const { tempFilePath } = req.files.file
    const Imagenprincipal  = await uploadsImagenes(tempFilePath , 'compumaturin')
    const data = new Productos({
        Descripcion,
        Precio,
        ws,
        Faceboock,
        Imagenprincipa:Imagenprincipal.url

    })
    data.save()
    res.send('todo bien').status(200)
    res.json({mensage:'funciona'})
}

module.exports = CompuData
