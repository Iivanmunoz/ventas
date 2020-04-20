'use strict'

class moment{
	constructor(id_contacto,id_tipo_respuesta,id_medio_contacto,id_status_proceso,
		id_empresa,fecha,hora_momento,descripcion,proximo_momento){
		this.id_contacto = id_contacto;
		this.id_tipo_respuesta = id_tipo_respuesta;
		this.id_medio_contacto = id_medio_contacto;
		this.id_status_proceso = id_status_proceso;
		this.id_empresa = id_empresa;
		this.fecha = fecha;
		this.hora_momento = hora_momento;
		this.descripcion = descripcion;
		this.proximo_momento = proximo_momento;

	}
}
module.exports = moment;