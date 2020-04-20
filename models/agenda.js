'use strict'

class agenda{
	constructor(id_contacto, id_usuario,fecha,hora,status,lugar_cita){
		//this.id_grupo = id_grupo;
		this.id_contacto = id_contacto;
		this.id_usuario = id_usuario;
		this.fecha = fecha;
		this.hora = hora;
		this.status = status;
		this.lugar_cita = lugar_cita;
	}
}

module.exports = agenda;