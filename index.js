//levantando servidores-jalamos las librerias dentro de package-lock.json
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {router} =  require('./router');//se importa todo lo que este dentro de routers


const app = express();
const apiPort = process.env.API_PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())


//todo lo que caiga en el localhost:3030/api = quiero que lo corra en router
//si no esta exactamente, entonces no jala
app.use('/', router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));