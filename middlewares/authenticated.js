'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

exports.ensureAuth = function(req, res, next){
	if (!req.headers.authorization){
		return res.status(403).send({message: 'la petiicion no tiene la cabezera de autenticacion'});
	}
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		var payload = jwt.encode(token,secret);
		if (payload.exp <= moment().unix()){
			return res.status(401).send({message: 'el token a expirado'});

		}

	}catch(ex){
		console.log(ex);
		return res.status(404).send({message: 'el token no es valido'});

	}
	req.user = payload;
	next();

};