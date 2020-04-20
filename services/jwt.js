'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';


exports.createToken = function(user){
	var payload = {
		sub:user._id,
		nombre: user.nombre,
		apellidopaterno: user.apellidopaterno,
		apellidomaterno: user.apellidomaterno,
		email: user.email,
		role: user.role,
		image: user.image,
		//fecha de creacion del token
		iat: moment().unix(),
		exp: moment().add(30,'days').unix

	};

	return jwt.encode(payload,secret);
};