'use strict'

class tareas{
	constructor(id_empresa,descripcion,status,fecha){
		this.id_empresa = id_empresa;
		this.descripcion = descripcion;
		this.status = status;
		this.fecha = fecha;
	}
}

module.exports = tareas;