const Portada = require('../models/Portada')
const uploadsImagenes = require("../util/cloudinary")

async function PortadaP(req , res){
  
    const { tempFilePath } = req.files.file
    const img = await uploadsImagenes(tempFilePath , 'Portadaventacompu')
    const data = new Portada({
       
        Portada:img.url

    })
    data.save()
    res.send('todo bien').status(200)
    res.json({mensage:'funciona'})
}

module.exports = PortadaP