console.clear();
require('./src/util/conexion');
const express = require('express');
const cors  = require('cors');
const fileupload = require('express-fileupload')
const expressip = require('express-ip')
const router = require('./src/router/index');
const  app = express();


const port = process.env.PORT || 4000

app.use(expressip().getIpInfoMiddleware)
app.use(express.json());
app.use(cors());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : './public'
}))
app.use(router);

app.listen(port , function(){
    console.log(`app lista en el puesto ${puerto}`);
})
