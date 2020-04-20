'use strict'
const CONN = require('./conection-controller');
var bcrypt = require('bcrypt');
let User = require('../models/user');
let Address = require('../models/address');
let Empresa = require('../models/empresa');
let Giroempresa = require('../models/giro');
let Grupoempresa = require('../models/grupo');
let Sectorempresa = require('../models/sector');
let Contactoempresa = require('../models/contacto');
let Status = require('../models/status');
let Agenda = require('../models/agenda');
let Momentos = require('../models/momentos');
let jwt = require('../services/jwt');
let Colonia = require('../models/colonia');
let Alcaldia = require('../models/alcaldia');
let Estado = require('../models/estado');
let moment = require('moment');
let Tareas = require('../models/tareas');

let fs = require('fs');
let path = require('path');


function pruebas(req, res){
	res.status(200).send({message:'probando accion del controlador de usuarios del api res con node y knex'
});

}
//funcion para modificar tareas checkbox
function tarea_activa(req,res){
	let idempresa = req.params.id_empresa;
	let idtareas = req.params.id_tarea;
	let datoactivo = new Tareas(
		req.body.id_empresa);

	CONN('tareas').where('id_empresa',idempresa)
			.andWhere('id_tarea',idtareas).update('status','1')
			.then(statusactivo =>{
				console.log(statusactivo);
				if (!statusactivo){
					res.status(500).send({ resp: 'error', error: `${error}` });
				}else{
					res.status(200).send({ resp: 'consulta exitosa de status activo ', statusactivo:statusactivo});
				}
			})

}
//funcion para modificar las tareas del checkbox
// function modificar_tareas(req,res){
// 	let idempresa = req.params.id_empresa;
// 	let idtareas = req.params.id_tareas;

// 	let datotarea = new Tareas(
// 		req.body.id_empresa,
// 		);

// 	CONN('tareas').select().where('id_empresa',idempresa)
// 	.andWhere('id_tarea',idtareas).then(tareas_empresa =>{
// 		console.log(tareas_empresa);
// 		if (!tareas_empresa){

// 			res.status(500).send({ resp: 'error', error: `${error}` });
// 		}else{
			
// 			if (tareas_empresa.status == '0'){

// 				CONN('tareas').where('id_empresa',idempresa)
// 			.andWhere('id_tarea',idtraeas).update('status','1').then(stausactivo =>{
// 				if (!stausactivo){
// 					res.status(500).send({ resp: 'error', error: `${error}` });
// 				}else{
// 					res.status(200).send({ resp: 'consulta exitosa de status activo ', statusactivo:statusactivo, tareas_empresa});
// 				}
// 			})
// 			}else{CONN('tareas').where('id_empresa',idempresa)
// 			.andWhere('id_tarea',idtraeas).update('status','0').then(statusinactivo =>{
// 				if (!statusinactivo){
// 					res.status(500).send({ resp: 'error', error: `${error}` });
// 				}else{
// 					res.status(200).send({ resp: 'consulta exitosa de status activo ', statusinactivo:statusinactivo, tareas_empresa});
// 				}
// 			})

// 			}
			
// 		}
// 	})
// }
//funcion para traer las tareas con el id de empresa
function traer_tareas_empresa(req,res){
	let idempresa = req.params.id_empresa;
	CONN('tareas').where('tareas.id_empresa', idempresa)
	.join('empresa','tareas.id_empresa','=','empresa.id_empresa')
	.select().then(tareasempresa =>{
		if (!tareasempresa){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de tareas ', tareasempresa:tareasempresa});
		}
	})


}

//funcion para agregar momento
function insertar_momento(req,res){
	let fechamoment = moment().format("YYYY-MM-DD");
	let horamoment = moment().format("h:mm:ss a");
	//let momentoid = req.params.id_momento;
	let momentoss = new Momentos(
		req.body.id_contacto,
		req.body.id_tipo_respuesta,
		req.body.id_medio_contacto,
		req.body.id_status_proceso,
		req.body.id_empresa,
		req.body.fecha = fechamoment,
		req.body.hora_momento = horamoment,
		req.body.descripcion,
		req.body.proximo_momento
		);
	console.log(momentoss);
	CONN('momentos').insert(momentoss).then(insertamoment =>{
		if (!insertamoment){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({resp: 'se a registrado correctamente el momento', insertamoment:insertamoment});
		}
		}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
	
}
function traermomentos(req,res){
	let idempresa = req.params.id_empresa;
	CONN('momentos').where('momentos.id_empresa',idempresa)
	.join('empresa','momentos.id_empresa', '=', 'empresa.id_empresa').select()
	.then(moment =>{
		if (!moment){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de momentos', moment:moment});
		}
	})
}





//funcion para actualizar el contacto
function editarcontacto(req,res){

	let contactoid = req.params.id_contacto;
	let contacto = new Contactoempresa(
		
		req.body.email,
		req.body.celular
		
		
		);

	CONN('contacto_empresa').where('id_contacto',contactoid).update({email:req.body.email,celular:req.body.celular}).then(editarcontacto =>{
		console.log(editarcontacto);
		if(!editarcontacto){
			res.status(500).send({resp: 'Error',error:'los datos no se actualizaron'});
		}else{
			CONN('contacto_empresa').where('id_contacto',contactoid).select().then(contacto =>{
				if (!contacto){
					res.status(500).send({resp: 'Error', error:'error en la consulta'});
				}else{
					res.status(200).send({resp:'Actualizacion de datos correcta',contacto: contacto});

				}
			}).catch(error =>{
				res.status(500).send({resp: 'error',
				error: `${error}`});
			});
		}
	})
}


//funcion para actualizar la direccion
function editardireccion(req,res){

	let direccionid = req.params.id_direccion;
	let direccion = new Address(
		req.body.id_colonia,
		req.body.id_alcaldia,
		req.body.id_estado,
		req.body.calle,
		req.body.numero_int,
		req.body.numero_ext,
		req.body.codigo_postal,
		req.body.alcaldia,
		req.body.estado,
		req.body.colonia
		);

	CONN('direccion_empresa').where('id_direccion',direccionid).update(direccion).then(editardireccion =>{
		console.log(editardireccion);
		if(!editardireccion){
			res.status(500).send({resp: 'Error',error:'los datos no se actualizaron'});
		}else{
			CONN('direccion_empresa').where('id_direccion',direccionid).select().then(direccion =>{
				if (!direccion){
					res.status(500).send({resp: 'Error', error:'error en la consulta'});
				}else{
					res.status(200).send({resp:'Actualizacion de datos correcta',direccion: direccion});

				}
			}).catch(error =>{
				res.status(500).send({resp: 'error',
				error: `${error}`});
			});
		}
	})
}

//funcion para ver direccion de archivos viejos
function verdireccion(req, res){
	let direccionid = req.params.id_direccion;

	CONN('empresa').where('id_direccion',direccionid).join('direccion_empresa','empresa.id_direccion', '=','direccion_empresa.id_direccion')

	.join('colonia','direccion_empresa.id_colonia', '=','colonia.id_colonia')
	.join('alcaldia','direccion_empresa.id_alcaldia', '=','alcaldia.id_alcaldia')
	.join('estado','direccion_empresa.id_estado', '=','estado.id_estado')
	.select().then(registrosviejos =>{

		if (!registrosviejos){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de registrosviejos', registrosviejos:registrosviejos});
		}

	})
}


//funcion para poder actualizar la empresa
function editarempresa(req,res){

	let empresaid = req.params.id_empresa;
	let empresa = new Empresa(
		
		req.body.nombre_empresa,
		req.body.id_status
		
		);

	CONN('empresa').where('id_empresa',empresaid).update({nombre_empresa:req.body.nombre_empresa,id_status:req.body.id_status}).then(editarnombre =>{
		console.log(editarnombre);
		if(!editarnombre){
			res.status(500).send({resp: 'Error',error:'los datos no se actualizaron'});
		}else{
			CONN('empresa').where('id_empresa',empresaid).select().then(nombre =>{
				if (!nombre){
					res.status(500).send({resp: 'Error', error:'error en la consulta'});
				}else{
					res.status(200).send({resp:'Actualizacion de datos correcta',nombre: nombre});

				}
			}).catch(error =>{
				res.status(500).send({resp: 'error',
				error: `${error}`});
			});
		}
	})
}

//funcion para consultar el id de la empresa
function traer_idempresa(req,res){
	let idempresa = req.params.id_empresa;
	CONN('empresa').where('id_empresa',idempresa).join('contacto_empresa','empresa.id_contacto','=','contacto_empresa.id_contacto')
	.join('status','empresa.id_status','=','status.id_status')

	.join('direccion_empresa','empresa.id_direccion', '=', 'direccion_empresa.id_direccion')

	.join('colonia','direccion_empresa.id_colonia', '=','colonia.id_colonia')
	.join('alcaldia','direccion_empresa.id_alcaldia', '=','alcaldia.id_alcaldia')
	.join('estado','direccion_empresa.id_estado', '=','estado.id_estado')

	.select().then(empresaid =>{
		//console.log(empresaid);
		if (!empresaid){
			res.status(500).send({resp:'Error',message:'No trajo id'})
		}else{
			res.status(200).send({empresaid:empresaid,message:'Exito al traer el id'});
		}
	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
}

//Metodo para subir la imagen del colaborador
function subeImg(req,res){
	let idempresa = req.params.id_empresa;
	let foto = req.file.filename;
	
	CONN('empresa').where('id_empresa',idempresa).
	update('logo',foto)
	.then(result=>{
		if (!result) {
			res.status(500).send({resp:'Error',message:'No se actualizo el contenido'})
		}else{
			CONN('empresa').select('logo').where('id_empresa',idempresa)
			.then(image=>{
				if (!image) {
					res.status(500).send({resp:'Error',message:'error al devolver video'})
				}
				else{
					res.status(200).send({image:image[0],message:'Exito al subir foto'});
				}
			}).catch(error=>{
				res.status(404).send({resp:'Error',error:`${error}`});
			})
		}
	}).catch(error=>{
		res.status(404).send({resp:'Error',error:`${error}`});
	})
}



//funcion para colsultar los datos de agenda
function traer_agenda(req,res){
	CONN('agenda').select().then(agenda =>{
		if (!agenda){
			res.status(500).send({resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({resp: 'consulta exitosa de agenda', agenda:agenda});
		}
	})
}

//funcion para consultar los datos de status_empresa
function traer_status_empresa(req,res){
	CONN('status').select().then(status =>{
		if (!status){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de status_empresa', status:status});
		}
	})
}

//funcion para consultar los datos de contactoempresa
function traercontacto_empresa(req,res){
	CONN('contacto_empresa').select().then(registros =>{
		if (!registros){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de contacto_empresa', registros:registros});
		}
	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
}

//funcion para CONSULTAR los datos de todas las empresas
function traerempresas(req,res){

	CONN('empresa')
	.join('contacto_empresa','empresa.id_contacto','=','contacto_empresa.id_contacto')
	.join('status','empresa.id_status','=','status.id_status')
	.join('direccion_empresa','empresa.id_direccion','=','direccion_empresa.id_direccion')
	.join('colonia','direccion_empresa.id_colonia', '=','colonia.id_colonia')
	.join('alcaldia','direccion_empresa.id_alcaldia', '=','alcaldia.id_alcaldia')
	.join('estado','direccion_empresa.id_estado', '=','estado.id_estado')

	

	.select().orderBy('empresa.id_empresa')
	.then(todas =>{
			console.log(todas);
		if (!todas){
			
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa', todas:todas });
		}
	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
}

//metodo para agregar al contacto de la empresa
function contacto(req,res){
	let contacto = new Contactoempresa(
		req.body.id_origen,
		req.body.nombre_contacto,
		req.body.area,
		req.body.extencion,
		req.body.email,
		req.body.celular,
		req.body.director_general,
		req.body.gerente_administrativo,
		req.body.gerente_personal,
		req.body.gerente_ventas,
		req.body.cel2,
		req.body.cel3,
		req.body.correo2,
		req.body.correo3
		);
	console.log(contacto);
	CONN('contacto_empresa').insert(contacto).then(idcontacto =>{

		if (!idcontacto){

			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'Datos almacenados de contacto', idcontacto:idcontacto });
		}		
	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
}


//metodo para agregar giro
function giro(req,res){
	let giro = new Giroempresa(
	req.body.giro,
	req.body.descripcion
	);

CONN('giro').insert(giro).then(idgiro =>{
	if(!idgiro){
		res.status(500).send({ resp: 'error', error: `${error}` });
	}else{
		res.status(200).send({ resp: 'Datos almacenados de giro', idgiro:idgiro });
	}
}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});


}

//funcion para consultar grupo
function traer_grupo(req,res){
	CONN('grupo').select().then(grupos =>{
		console.log(grupos);
		if (!grupos){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de grupo', grupos:grupos });
		}

	})
}

//funcion para agregar grupo
function grupo(req,res){
	let grupo = new Grupoempresa(
	req.body.grupo,
	req.body.descripcion,
	);

CONN('grupo').insert(grupo).then(idgrupo =>{
	if(!idgrupo){
		res.status(500).send({ resp: 'error', error: `${error}` });
	}else{
		res.status(200).send({ resp: 'Datos almacenados de Grupo', idgrupo:idgrupo });
	}
}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});


}
//funcion para consultar sector
function consul_sector(req,res){
	CONN('sector').select().then(traesectores =>{
		console.log(traesectores);
		if (!traesectores){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de sector', traesectores:traesectores });
		}

	})
}

//funcion para agregar sector
function sector(req,res){
	let sector = new Sectorempresa(
	req.body.sector,
	req.body.descripcion,
	);

CONN('sector').insert(sector).then(idsector =>{
	if(!idsector){
		res.status(500).send({ resp: 'error', error: `${error}` });
	}else{
		res.status(200).send({ resp: 'Datos almacenados de Sector', idsector:idsector });
	}
}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});


}

//funcion para traer colonia
function traercolonia(req, res){
	CONN('colonia').select().then(colonia =>{
		if (!colonia){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de colonia', colonia:colonia});
		}

	})
}
//funcion para traer alcaldia
function traeralcaldia(req, res){
	CONN('alcaldia').select().then(alcaldia =>{
		if (!alcaldia){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de alcaldia', alcaldia:alcaldia});
		}

	})
}
//funcion para traer estado
function traerestado(req, res){
	CONN('estado').select().then(estado =>{
		if (!estado){
			res.status(500).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({ resp: 'consulta exitosa de estado', estado:estado});
		}

	})
}

//funcion para insertar en estado con consulta
function consultarestado(req,res){
	let consulestado = new Estado(req.body.estado)

	CONN('estado').where('estado',req.body.estado).select().then(traeestado =>{
		console.log(traeestado);
		if (traeestado == ''){
			CONN('estado').insert(consulestado).then(insertaestado =>{
				if (!insertaestado){
					res.status(500).send({resp:'error', error: 'no se inserto estado'});
				}else{
					res.status(200).send({resp: 'estado guardada', insertaestado:insertaestado });
				}
			}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
		}else{
			res.status(200).send({resp: 'estado', traeestado:traeestado });
		}

	}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
}

//funcion para insertar en grupo con consulta
function consultargrupo(req,res){
	let consulgrupo = new Grupoempresa(req.body.grupo)

	CONN('grupo').where('grupo',req.body.grupo).select().then(traergrupo =>{
		console.log(traergrupo);
		if (traergrupo == ''){
			CONN('grupo').insert(consulgrupo).then(insertargrupo =>{
				if (!insertargrupo){
					res.status(500).send({resp:'error', error: 'no se inserto grupo'});
				}else{
					res.status(200).send({resp: 'grupo guardado', insertargrupo:insertargrupo });
				}
			}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
		}else{
			res.status(200).send({resp: 'grupo', traergrupo:traergrupo });
		}

	}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
}
//funcion para insertar en alcaldia con consulta
function consultaralcaldia(req,res){
	let consualcaldia = new Alcaldia(req.body.alcaldia)

	CONN('alcaldia').where('alcaldia',req.body.alcaldia).select().then(traealcaldia =>{
		console.log(traealcaldia);
		if (traealcaldia == ''){
			CONN('alcaldia').insert(consualcaldia).then(insertaralcaldia =>{
				if (!insertaralcaldia){
					res.status(500).send({resp:'error', error: 'no se inserto alcaldia'});
				}else{
					res.status(200).send({resp: 'alcaldia guardada', insertaralcaldia:insertaralcaldia });
				}
			}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
		}else{
			res.status(200).send({resp: 'alcaldia', traealcaldia:traealcaldia });
		}

	}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
}

//funcion para insertar en colonia con consulta
function consultarcolonia(req,res){
	let consulcolonia = new Colonia(req.body.colonia)

	CONN('colonia').where('colonia',req.body.colonia).select().then(traercol =>{
		console.log(traercol);
		if (traercol == ''){
			CONN('colonia').insert(consulcolonia).then(insertarcolonia =>{
				if (!insertarcolonia){
					res.status(500).send({resp:'error', error: 'no se inserto colonia'});
				}else{
					res.status(200).send({resp: 'colonia guardada', insertarcolonia:insertarcolonia });
				}
			}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
		}else{
			res.status(200).send({resp: 'colonia', traercol:traercol });
		}

	}).catch(error =>{
				res.status(500).send({resp:'error', error: `${error}` });
			});
}


//metodo para agregar direccion de la empresa 
function direccion(req, res){
	let direccion = new Address(
		req.body.id_colonia,
		req.body.id_alcaldia,
		req.body.id_estado,
		req.body.calle,
		req.body.numero_int,
		req.body.numero_ext,	
		req.body.codigo_postal,
		req.body.alcaldia,
		req.body.estado,
		req.body.colonia

		);

	CONN('direccion_empresa').insert(direccion).then(iddireccion =>{
		if(!iddireccion){
			res.status(200).send({ resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({resp:'Datos almacenados de direccion', iddireccion:iddireccion});
		}



	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});
}

//funcion para agregar datos de la empresa
function registroempresa(req,res){
	let fechamoment = moment().format("YYYY-MM-DD");
	let horamoment = moment().format("h:mm:ss a");
	let cliente = new Empresa(
		req.body.id_status,
		req.body.id_giro,
		req.body.nivel_compra,
		req.body.id_sector,
		req.body.id_grupo,
		req.body.id_direccion,
		req.body.id_contacto_empresa,
		req.body.id_archivo = null,
		req.body.nombre_empresa,
		req.body.servicio,
		req.body.num_empleados,
		req.body.fecha_registro = fechamoment,
		req.body.rfc,
		req.body.logo,
		req.body.horario_visita

		);
	
	CONN('empresa').insert(cliente).then(idempresa =>{
		console.log(cliente);
		if (!idempresa){
			res.status(200).send({resp: 'error', error: `${error}` });
		}else{
			res.status(200).send({resp:'Datos almacenados de empresa', idempresa:idempresa});
		}

	}).catch(error =>{
		res.status(500).send({resp: 'error', error: `${error}` });
	});

}

function saveUser(req, res){ 
	let usuario = new User(
		req.body.id_usuario,
		req.body.nombre,
		req.body.apellidopaterno,
		req.body.apellidomaterno,
		req.body.telefono,
		req.body.email,
		req.body.password
		);

console.log(usuario);
	
	CONN('usuario').select().where('email',req.body.email).then(Response =>{
		if(Response == ''){
			CONN('usuario').insert(usuario).then(nombre =>{

		if (!nombre){
			res.status(500).send({resp: 'Error', error: 'No se inserto el usuario'});

		}else{
			res.status(200).send({
				resp:'se guardo el registro',
				id_usuario:nombre
			});
		}
	}).catch(error =>{
		res.status(500).send({resp: 'error',
			error: `${error}`});
	});


		}else{
			res.status(404).send({resp: 'error',error: 'email ya existe'});
		}
	})	

	

}



function login(req,res){
	//let id_usuario = req.body.id_usuario;
	let email = req.body.email;
	let pass = req.body.password;
	let gethash = req.body.gethash;

	CONN('usuario').where('email',email).andWhere('password',pass)
	.select().then(usuario =>{
		console.log(usuario);
		if (!usuario){
			res.status(500).send({resp: 'error', error: 'error en el servidor'});
		}else{
			if (usuario.length <= 0){
				res.status(404).send({resp:'error',error: 'error en el usuario o contraeña'});
			}else{
					if (gethash){
						
						let token = jwt.createToken(usuario);
						res.status(200).send({
							token:token,
							resp: 'sesion iniciada',
							datos_de_usuario:usuario

						});
					}else{
						res.status(200).send({message:'sesion iniciada',usuario:usuario});
					}
			}
		}
	}).catch(error =>{
		res.status(500).send({resp: 'error',error: `${error}`});
	})
}


function actualizar(req,res){

	let usuarioid = req.body.id_usuario;
	let usuario = new User(
		req.body.id_usuario,
		req.body.nombre,
		req.body.apellidopaterno,
		req.body.apellidomaterno,
		req.body.telefono,
		req.body.email,
		req.body.password
		);

	CONN('usuario').where('id_usuario',usuarioid).update(usuario).then(actualizarusuario =>{
		console.log(actualizarusuario);
		if(!actualizarusuario){
			res.status(500).send({resp: 'Error',error:'los datos no se actualizaron'});
		}else{
			CONN('usuario').where('id_usuario',usuarioid).select().then(usuario =>{
				if (!usuario){
					res.status(500).send({resp: 'Error', error:'error en la consulta'});
				}else{
					res.status(200).send({resp:'Actualizacion de datos correcta',usuario: usuario});

				}
			}).catch(error =>{
				res.status(500).send({resp: 'error',
				error: `${error}`});
			});
		}
	})
}

//para pasar la imagen
function uploadimagen(req,res){
	let imagefile = req.params.imgfile;//es la carpeta de la imagen
	//console.log(imagefile);
	let path_file = './img/' + imagefile;

	fs.exists(path_file, function(exists){
		if (exists){
			res.sendFile(path.resolve(path_file));
		}else{
			res.status(500).send({resp:'error',message:'error al devolver la imagen'})
		}
	});
	
}



module.exports = {
	pruebas,
	uploadimagen,
	saveUser,
	login,
	actualizar,
	direccion,
	registroempresa,
	giro,
	grupo,
	sector,
	contacto,
	traerempresas,
	traercontacto_empresa,
	traer_status_empresa,
	traer_agenda,
	subeImg,
	traer_idempresa,
	editarempresa,
	editardireccion,
	editarcontacto,
	traermomentos,
	insertar_momento,
	traercolonia,
	traeralcaldia,
	traerestado,
	verdireccion,
	consultarcolonia,
	consultaralcaldia,
	consultarestado,
	consultargrupo,
	traer_grupo,
	consul_sector,
	traer_tareas_empresa,
	tarea_activa
	
};


