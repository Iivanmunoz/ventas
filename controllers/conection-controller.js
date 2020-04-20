'use strict'
const knex = require('knex');

module.exports=knex({
	client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ventas',
    port:'3306'
}

});