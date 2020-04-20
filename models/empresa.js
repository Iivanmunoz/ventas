'use strict'
class empresa{
	constructor(id_status,id_giro,nivel_compra,id_sector,id_grupo,id_direccion,
		id_contacto,id_archivo,nombre_empresa,servicio,num_empleados,fecha_registro,
		rfc,logo,horario_visita){
		
		this.id_status = id_status;
		this.id_giro = id_giro;
		this.nivel_compra = nivel_compra;
		this.id_sector = id_sector;
		this.id_grupo = id_grupo;
		this.id_direccion = id_direccion;
		this.id_contacto = id_contacto;
		this.id_archivo = id_archivo;
		this.nombre_empresa = nombre_empresa;
		this.servicio = servicio;
		this.num_empleados = num_empleados;
		this.fecha_registro = fecha_registro;
		this.rfc = rfc;
		this.logo = logo;
		this.horario_visita = horario_visita;
	}

}

module.exports = empresa;