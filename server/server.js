const express = require('express')
const app = express()
const path = require('path')

//cors
var cors = require('cors')
app.use(cors())

//body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//archivo pricipal de variables de configuracion
let { serverPort, serverDB }  = require('./config/config.js')

// Database
const mongoose = require('mongoose')
mongoose.connect(serverDB, { useNewUrlParser: true });



const publicPath = path.resolve(__dirname, 'public/');
console.log(publicPath);
app.use(express.static(publicPath));

//routes
let allRoutes = require("./routes/index.routes");
allRoutes(express, app);


app.listen(serverPort, ()=> {
    console.log( `Aplicacion TODO corriendo en puerto ${serverPort}` );
})