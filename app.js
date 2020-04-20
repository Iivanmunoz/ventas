'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//antes de ejecutar la funcionalidad principal
app.use(bodyParser.urlencoded({extended:false}));
//todo lo va a convertir a json
app.use(bodyParser.json());
//cabezeras http
app.use((req, res, next) =>{
	res.header('Access-Control-allow-Origin','*');
	req.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE')
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

	next();
});



//rutas como si fuera un modulo
var user_routes = require('./routers/user');

//ruta base
app.use('/api',user_routes);
var port = 8081;

//crear servidor 
app.listen(port, () => {

	console.log("servidor corriendo correctamente localhost:8081");
});


//exportar
module.exports = app;