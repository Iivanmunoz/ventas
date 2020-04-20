'use strict'

class usuario{
	constructor(id_usuario,nombre,apellidopaterno,apellidomaterno,telefono,email,password){
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.apellidopaterno = apellidopaterno;
		this.apellidomaterno = apellidomaterno;
		this.telefono = telefono;
		this.email = email;
		this.password = password;

	}
}

module.exports = usuario;