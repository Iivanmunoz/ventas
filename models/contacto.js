'use strict'

class contacto{
	constructor(id_origen,nombre_contacto,area,extencion,email,celular,director_general,
		gerente_administrativo,gerente_personal,gerente_ventas,cel2,
		cel3,correo2,correo3){
		
		this.id_origen = id_origen;
		this.nombre_contacto = nombre_contacto;
		this.area = area;
		this.extencion = extencion;
		this.email = email;
		this.celular = celular;
		this.director_general = director_general;
		this.gerente_administrativo = gerente_administrativo;
		this.gerente_personal = gerente_personal;
		this.gerente_ventas = gerente_ventas;
		this.cel2 = cel2;
		this.cel3 = cel3;
		this.correo2 = correo2;
		this.correo3 = correo3;
		
		

	}

}

module.exports = contacto;