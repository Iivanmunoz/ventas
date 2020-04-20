'use strict'

var express = require('express');
let multer = require('multer');
var UserController = require('../controllers/user');
var path = require('path');
var api = express.Router();	
var md_auth = require('../middlewares/authenticated'); 

//var multipart = require('connect-multiparty');
//var md_upload = multipart({uploadDir: './uploads/users'});


//En esta linea de codigo se sube el archivo
let storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
  	let id = req.params.id_empresa;
    cb(null,id +`${file.originalname.toLowerCase()}`);
  }
});  
let uploadVideo = multer({ storage: storageImage, 
	fileFilter: function (req, file, cb) {
		var ext = path.extname(file.originalname);
		console.log(ext);
		if (ext.toLowerCase() !== '.png' && ext.toLowerCase() !== '.jpg' && ext.toLowerCase() !== '.gif' && ext.toLowerCase() !== '.jpeg') {
			return cb(new Error('Only images are allowed'))
		}
		cb(null, true)
	}
						});

api.get('/probando-controlador',md_auth.ensureAuth,UserController.pruebas);
api.post('/register',UserController.saveUser);

api.get('/traerimagen/:imgfile',UserController.uploadimagen);
api.post('/login',UserController.login);
api.put('/actualizar/:id_usuario',md_auth.ensureAuth,UserController.actualizar);
api.post('/direccion',UserController.direccion);
api.post('/registroempresa',UserController.registroempresa);
api.post('/giro',UserController.giro);
api.post('/grupo',UserController.grupo);
api.post('/sector',UserController.sector);
api.post('/contacto',UserController.contacto);
api.get('/traerempresa',UserController.traerempresas);
api.get('/traercolonia',UserController.traercolonia);
api.get('/traeralcaldia',UserController.traeralcaldia);
api.get('/traerestado',UserController.traerestado);
api.get('/traercontacto',UserController.traercontacto_empresa);
api.get('/traerstatus',UserController.traer_status_empresa);
api.get('/traeragenda',UserController.traer_agenda);
api.get('/traeridempresa/:id_empresa',UserController.traer_idempresa);
api.put('/editempresa/:id_empresa',UserController.editarempresa);
api.put('/editdireccion/:id_direccion',UserController.editardireccion);
api.put('/editcontacto/:id_contacto',UserController.editarcontacto);
api.get('/traer_momentos/:id_empresa',UserController.traermomentos);
api.post('/metemomentos',UserController.insertar_momento);
api.get('/traerdireccion/:id_direccion',UserController.verdireccion);
api.post('/insertarcolonia',UserController.consultarcolonia);
api.post('/insertaralcaldia',UserController.consultaralcaldia);
api.post('/insertarestado',UserController.consultarestado);
api.post('/insertargrupo',UserController.consultargrupo);
api.get('/traergrupo',UserController.traer_grupo);
api.get('/traer_sector',UserController.consul_sector);
api.get('/traertareas/:id_empresa',UserController.traer_tareas_empresa);
//api.put('/trae_tareas/:id_empresa/:id_tareas',UserController.modificar_tareas);
api.put('/traertareasestado/:id_empresa/:id_tareas',UserController.tarea_activa);

//api.post('/');


//ruta para subir img
api.put('/subeImagen/:id_empresa', uploadVideo.single('logo', 'id_empresa'), UserController.subeImg);




module.exports = api;