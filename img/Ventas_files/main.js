(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    \n\n<!-- Toolbar -->\n<div class=\"toolbar\" style=\"position: fixed;\" role=\"banner\">\n\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n  </a>\n  \n\n    \n</div>  \n\n  \n\n  \n\n  <!-- Links -->\n  \n  \n  <div id=\"wrapper\" *ngIf=\"identity\">\n\n        <!-- Sidebar -->\n        <div id=\"sidebar-wrapper\" *ngIf=\"identity\">\n            <ul class=\"sidebar-nav\">\n              <i class=\"fal fa-truck-monster\"></i>\n              <button class=\"btn btn-warning\"  (click)=\"logout()\">\n                      cerrar sesion\n              </button>\n              \n                <li><a [routerLink]=\"['/dashboard']\" class=\"fas fa-home\"></a></li>\n                <li><a [routerLink]=\"['/empresa']\" class=\"fas fa-city\"></a></li>\n                <li><a [routerLink]=\"['/contacto']\"class=\"far fa-address-book\"></a></li>\n                <li><a [routerLink]=\"['/negocio']\" class=\"fas fa-business-time\"></a></li>\n                <li><a [routerLink]=\"['/calendario']\" class=\"far fa-calendar-alt\"></a></li>\n                <li><a [routerLink]=\"['/estadistica']\" class=\"fas fa-chart-bar\"></a></li>\n                <li>\n                <a href=\"\">\n                  \n                </a> \n              </li>\n            </ul>\n        </div>\n \n</div>\n    <!-- /#wrapper -->\n     <!-- Menu Toggle Script -->\n    <script>\n    $(\"#menu-toggle\").click(function(e) {\n        e.preventDefault();\n        $(\"#wrapper\").toggleClass(\"toggled\");\n    });\n    </script>\n<!--login -->\n\n    \n\n<div class=\"col-lg-12\"  *ngIf=\"!identity\">\n  <div class=\"row\">\n  <div class=\"col-lg-5\">\n      <h1>Identificate</h1>\n      <hr>\n\n      <div *ngIf=\"errorMessage\">\n\n        <div class=\" alert alert-info\">\n          <strong>Error</strong>\n          {{errorMessage}}\n        </div>\n\n      </div>\n\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10\">\n        <p>\n          <label>Correo electrónico:</label>\n          <input type=\"text\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"usuario.email\" class=\"form-control\" placeholder=\"Email\" required />\n          <span *ngIf=\"email.touched && !email.valid\"> \n            es obligatorio\n          </span>\n          \n          \n          \n        </p>\n\n        <p>\n          <label>Contraseña:</label>\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"usuario.password\"  class=\"form-control\" placeholder=\"Password\" required>\n        </p>\n\n        <input type=\"submit\" value=\"Entrar\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-primary\" >\n        \n      </form>\n  </div>\n  <!--Formulario para registro-->\n  <div class=\"col-lg-6\" >\n    <h1>Registrate</h1>\n    <hr>\n\n    <div *ngIf=\"alertRegister\">\n      <div class=\" alert alert-info\">\n        <strong></strong>\n        {{alertRegister}}\n      </div>\n      \n\n    </div>\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"col-md-10\">\n      <p>\n        <label>Nombre:</label>\n        <input type=\"text\" name=\"ngModel\" name=\"name\" [(ngModel)]=\"usuario_registro.nombre\" class=\"form-control\" placeholder=\"Nombre\"  required>\n        \n        \n      </p>\n\n      <p>\n        <label>Apellido Paterno:</label>\n        <input type=\"text\" name=\"ngModel\" name=\"paterno\" [(ngModel)]=\"usuario_registro.apellidopaterno\" class=\"form-control\" placeholder=\"Apellido Paterno\" required>\n        \n      </p>\n      <p>\n        <label>Apellido Materno:</label>\n        <input type=\"text\" name=\"ngModel\" name=\"materno\" [(ngModel)]=\"usuario_registro.apellidomaterno\" class=\"form-control\" placeholder=\"Apellido Materno\" required>\n        \n      </p>\n      <p>\n        <label>Telefono:</label>\n        <input type=\"text\" name=\"ngModel\" name=\"telefono\" [(ngModel)]=\"usuario_registro.telefono\" class=\"form-control\" placeholder=\"Telefono\" required>\n        \n      </p>\n      <p>\n        <label>Correo Electrónico:</label>\n        <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"usuario_registro.email\" class=\"form-control\"  placeholder=\"Email\" required />\n        \n      </p>\n\n      <p>\n        <label>Contraseña:</label>\n\n        <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"usuario_registro.password\"  class=\"form-control\" placeholder=\"Contraseña\" required>\n        \n      </p>\n\n      <input type=\"submit\" value=\"Registrarse\" [disabled]=\"!registerForm.form.valid\" class=\"btn btn-primary\">\n\n\n      \n    </form>\n\n  </div>\n    \n  </div>\n\n  \n\n\n</div>\n\n\n\n\n\n  <div id=\"contenido\" *ngIf=\"identity\">\n      <router-outlet ></router-outlet>\n\n  </div>\n \n  \n\n  \n  \n\n\n\n  <!-- Footer -->\n  \n  \n\n\n\n\n\n\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendario/calendario.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendario/calendario.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>calendario works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contacto works!</p>\n<section class=\"main\">\n\t\n\n<ul class=\"ch-grid\">\n<li> \n\t<div  class = \"ch-item\"> \t\t\t\t\n\t\t<div  class = \"ch-info\"> \n\t\t\t<div  class = \"ch-info-front ch-img-1\"> </div> \n\t\t\t<div  class = \"ch -info-back\"> \n\t\t\t\t<h3 > mouse </h3> \n\t\t\t\t<p > por Alexander Shumihin <a  href = \"http://drbl.in/eAoj\" >Ver en Dribbble </a> </p> \n\t\t\t</div> \t\n\t\t</div> \n\t</div> \n</li>\n\n\t\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"ch-item\">\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"ch-info\">\n\t\t\t\t\t\t\t\t<div class=\"ch-info-front ch-img-1\"></div>\n\t\t\t\t\t\t\t\t<div class=\"ch-info-back\">\n\t\t\t\t\t\t\t\t\t<h3>Mouse</h3>\n\t\t\t\t\t\t\t\t\t<p>by Alexander Shumihin <a href=\"http://drbl.in/eAoj\">View on Dribbble</a></p>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t</ul>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("       <div class=\"row\">\n\n            <!-- Area Chart -->\n            <div class=\"col-xl-6 col-lg-6\">\n              <div class=\"card shadow mb-4\">\n                <!-- Card Header - Dropdown -->\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Tareas</h6>\n                  \n                  <div class=\"dropdown no-arrow\">\n                    <select name=\"dataTable_length\" aria-controls=\"dataTable\">\n\n                    <option value=\"mes\">mes</option>\n                    <option value=\"dia\">dia</option>\n                    \n\n                  </select>\n                    \n                    \n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n                      \n                    </div>\n                  </div>\n                </div>\n                <!-- Card Body -->\n                <div class=\"card-body\">\n                  <div class=\"chart-area\">\n                    \n                        \n                      <div class=\"form-check\">\n                         <input type=\"checkbox\" class=\"casilla\"> <label> Default checkbox 2</label>\n                      </div>\n\n                      <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"casilla\"> <label> Default checkbox </label>\n                      </div>\n                                        \n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Pie Chart -->\n            <div class=\"col-xl-5 col-lg-5\">\n              <div class=\"card shadow mb-4\">\n                <!-- Card Header - Dropdown -->\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Reuniones</h6>\n                  <div class=\"dropdown no-arrow\">\n                    <select name=\"dataTable_length\" aria-controls=\"dataTable\">\n\n                    <option value=\"mes\">mes</option>\n                    <option value=\"dia\">dia</option>\n                    \n\n                  </select>\n                    \n                  </div>\n                </div>\n                <!-- Card Body -->\n                <div class=\"card-body\">\n\n                  \n                    <div class=\"row\">\n                      <div class=\"col-sm\">\n                        One of three columns\n                      </div>\n                      <div class=\"col-sm\">\n                        One of three columns\n                      </div>\n                      <div class=\"col-sm\">\n                        One of three columns\n                      </div>\n                    </div>\n                  \n\n                </div>\n              </div>\n            </div>\n          </div>\n          \n            <!-- Content Column -->\n            <div class=\"col-sm-3\" style=\"margin-left: -29px;\">\n\n              <!-- Actualizaciones -->\n              <div class=\"col-sm\">\n                <div class=\"card shadow mb-2\">\n                  <div class=\"card-header py-3\" style=\"background-color: white;\">\n\n                    <div class=\"row\">\n                      <div class=\"col\">\n                        <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"empresa\">\n                      </div>\n                      <div class=\"col\">\n                        <button class=\"btn\" type=\"button\">\n                        <i class=\"fas fa-search fa-sm\"></i>\n                      </button>\n                      </div>\n                    </div>\n\n                  </div>\n\n                  <div class=\"card-body todas\">\n\n                    <div class=\"row renglones\" *ngFor=\"let empresas of datos_empresa\">\n                      \n                      <div class=\"col-sm\" class=\"ch-item\">\n\n                        <div class=\"ch-info\">\n\n                          <div class=\"ch-info-front ch-img\">\n\n                            <img class=\"imgRedonda\" src=\"{{url + 'traerimagen/' + empresas.logo}}\">\n\n                          </div>\n                          <div class=\"ch-info-back\">\n                            <p class=\"lista\" (click)=\"traer_idempresa(empresas.id_empresa)\">empresa: {{empresas.nombre_empresa}}</p>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n                </div>\n              </div>\n            </div>\n              <!-- CONTENIDO DE EDITAR EMPRESA -->\n\n            <div class=\"col-lg-8\">\n\n              <!-- contacto -->\n              <div class=\"card shadow mb-4\">\n                <div class=\"card-header py-3\">\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Contacto : este mes</h6>\n                </div>\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                      <div class=\"col-sm\">\n                        <p>Empresa:</p>\n                        <input #empresa ='ngModel' name=\"nombre\" [(ngModel)]='cliente.nombre_empresa' type=\"text\">\n                        <p>Celular:</p>\n                        <input #telefono ='ngModel' name=\"celular\" [(ngModel)]='contactoempresa.telefono' type=\"text\" name=\"telefono\">\n                        <p>Correo:</p>\n                        <input #correo ='ngModel' name=\"correo\" [(ngModel)]='contactoempresa.email' type=\"text\" name=\"correo\">\n                        <select class=\"statusselect\" name=\"status\" [(ngModel)]=\"statusempresa.id_status_empresa\">\n                          <option *ngFor=\"let status of datos_status\" value=\"{{status.id_status_empresa}}\">{{status.estatus}}</option>\n                          \n                        </select>\n                        \n\n                        \n                      </div>\n                      <div class=\"col-sm\">\n                        <p>calle:</p>\n                        <input #calle ='ngModel' name=\"calle\" [(ngModel)]='direccion.calle' type=\"text\">\n                        <p>numero_int:</p>\n                        <input #calle ='ngModel' name=\"numero_int\" [(ngModel)]='direccion.numero_int' type=\"text\">\n                        <p>numero_ext:</p>\n                        <input #calle ='ngModel' name=\"numero_ext\" [(ngModel)]='direccion.numero_ext' type=\"text\">\n                        <p>colonia:</p>\n                        <input #calle ='ngModel' name=\"colonia\" [(ngModel)]='direccion.colonia' type=\"text\">\n                        <p>alcaldia:</p>\n                        <input #calle ='ngModel' name=\"alcaldia\" [(ngModel)]='direccion.alcaldia' type=\"text\">\n                        <p>estado:</p>\n                        <input #calle ='ngModel' name=\"estado\" [(ngModel)]='direccion.estado' type=\"text\">\n                      </div>\n                      <div class=\"col-sm\">\n                      <div class=\"row\">\n                        <div class=\"col\">\n                          <button class=\"btn\">Guardar</button>\n                        </div>\n                        <div class=\"col\">\n                          <button class=\"btn\">Editar</button>\n                        </div>\n\n                      </div>\n                        <div>\n                          <button class=\"btn abrir\">Abrir los Documentos</button>\n                          \n                        </div>\n                      </div>\n                    </div>\n                  \n\n\n                </div>\n              </div>\n\n              \n\n            </div>\n          \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/crearempresa.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/crearempresa.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Empresa</h1>\n<div mat-dialog-content class=\"ventanaempresa\">\n\t<form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitEmpresa()\">\n\n\t        <label>Empresa:</label>\n\t        <input type=\"text\"  #empresa ='ngModel' name=\"nombre\" [(ngModel)]='cliente.nombre_empresa' \n\t         class=\"form-control\" placeholder=\"Empresa\">\n\n\t        <label>Servicio a ofrecer:</label>\n\t        <input type=\"text\" #servicio=\"ngModel\" name=\"servicio\" [(ngModel)]='cliente.servicio' class=\"form-control\" placeholder=\"Servicio\" required>\n\n\t    <div class=\"row\">\n\n\t\t    <div class=\"col-sm\">\n\t\t        <label>Grupo:</label>\n\t\t        <input type=\"text\" #grupo='ngModel' name=\"grupo\" [(ngModel)]='grupoempresa.grupo' class=\"form-control\" placeholder=\"Grupo\"  required>\n\t\t        <label>Rfc:</label>\n\t\t        <input type=\"text\" #rfc='ngModel' name=\"rfc\" [(ngModel)]='cliente.rfc' class=\"form-control\" placeholder=\"Rfc\"  required>\n\t\t    </div>\n\t\t    <div class=\"col-sm\">\n\t\t        <label>Giro:</label>\n\t\t        <input type=\"text\" #giro='ngModel' name=\"giro\" [(ngModel)]='giroempresa.giro' class=\"form-control\" placeholder=\"Giro\"  required>\n\t\t        <label>Num_empreados:</label>\n\t\t        <input type=\"text\" #empleados='ngModel' name=\"empleados\" [(ngModel)]='cliente.num_empleados' class=\"form-control\" placeholder=\"empreados\"  required> \n\t\t    </div>\n\t\t    <div class=\"col-sm\">\n\t\t\t     <label>Sector:</label>\n\t\t\t     <input type=\"text\" #sector='ngModel' name=\"sector\" [(ngModel)]='sectorempresa.sector' class=\"form-control\" placeholder=\"Sector\"  required>\n\t\t\t     <br>\n\t\t\t     <select class=\"selector\" [(ngModel)]=\"cliente.id_status_empresa\" name=\"seleccionar_status\">\n\n\t\t\t     \t<option *ngFor=\"let status1 of guardarstatus\" [value]=\"status1.id_status_empresa\">{{status1.estatus}}</option>\n\n\t\t\t     </select>\n\t\t    </div>\n\n  \t\t</div>\n  \t\t<hr>\n\n  \t\t<div class=\"row\">\n\n\t\t    <div class=\"col-sm\">\t\t\n\t\t        <label>Calle:</label>\n\t\t        <input type=\"text\" #calle='ngModel' name=\"calle\" [(ngModel)]='direccion.calle' class=\"form-control\" placeholder=\"Calle\"  required> \n\t\t        <label>Colonia:</label>\n\t\t        <input type=\"text\" #colonia='ngModel' name=\"colonia\" [(ngModel)]='direccion.colonia' class=\"form-control\" placeholder=\"colonia\"  required> \n\t\t    </div>\n\t\t    <div class=\"col-sm\">\n\t\t        <label>Num int:</label>\n\t\t        <input type=\"text\" #numint='ngModel' name=\"numint\" [(ngModel)]='direccion.numero_int' class=\"form-control\" placeholder=\"int\"  required>\n\t\t        <label>Alcaldia:</label>\n\t\t        <input type=\"text\" #alcaldia='ngModel' name=\"alcadia\" [(ngModel)]='direccion.alcaldia' class=\"form-control\" placeholder=\"Alcaldia\"  required> \n\t\t    </div>\n\t\t    <div class=\"col-sm\">\n\t\t    \t<label>Num ext:</label>\n\t\t        <input type=\"text\" #numext='ngModel' name=\"numext\" [(ngModel)]='direccion.numero_ext' class=\"form-control\" placeholder=\"ext\"  required> \n\t\t\t     <label>Estado:</label>\n\t\t\t     <input type=\"text\" #estado='ngModel' name=\"estado\" [(ngModel)]='direccion.estado' class=\"form-control\" placeholder=\"Estado\"  required>\n\t\t    </div>\n\n  \t\t</div>\n  \t\t<hr>\n  \t\t<div class=\"row\">\n  \t\t\t<div class=\"col-9\">\n  \t\t\t\t<label>Nombre:</label>\n\t\t        <input type=\"text\" #nombrecontacto='ngModel' name=\"contacto\" [(ngModel)]='contactoempresa.nombre_contacto' class=\"form-control\" placeholder=\"Nombre\"  required>\n\n  \t\t\t</div>\n  \t\t\t<div class=\"col-9\">\n  \t\t\t\t<label>Correo:</label>\n\t\t        <input type=\"text\" #correo='ngModel' name=\"correo\" [(ngModel)]='contactoempresa.email' class=\"form-control\" placeholder=\"Correo\"  required> \n  \t\t\t\t\n  \t\t\t</div>\t\n\n\t  \t\t\t\t<div class=\"col-6\">\n\t  \t\t\t\t\t<label>Celular:</label>\n\t\t\t        \t<input type=\"text\" #celular='ngModel' name=\"celular\" [(ngModel)]='contactoempresa.celular' class=\"form-control\" placeholder=\"telefono\"  required> \n\t  \t\t\t\t\t\n\t  \t\t\t\t</div>\n\t\t\t        <div class=\"col-6\">\n\t\t\t        \t<label>Telefono:</label>\n\t\t\t        \t<input type=\"text\" #telefono='ngModel' name=\"telefono\" [(ngModel)]='contactoempresa.telefono' class=\"form-control\" placeholder=\"telefono\"  required> \n\t\t\t        </div>\n\t  \t\t\t\t\n\t  \t\t\t\n  \t\t\t\t\n  \t\t\t\n  \t\t</div>\n\n  \t\t<input (change)=\"fileChangeEvent($event)\" class=\"traerarchivo\" type=\"file\"   name=\"FOTO\">\n  \t\t<br>\n\n  \t\t<input class=\"agregarempresa\" type=\"submit\" value=\"Agregar Empresa\" [disabled]=\"!registerForm.form.valid\" class=\"btn\">\n\n  \t\t\n\n\t</form>\n\n  \n</div>\n\n<div>\n  \n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  \n  <div class=\"row\">\n    <div class=\"col\">\n      <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n            <div class=\"input-group\">\n\n              <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"empresa\">\n\n                <button class=\"btn\" type=\"button\">\n                  <i class=\"fas fa-search fa-sm\"></i>\n                </button>\n           \n            </div>\n      </form>\n\n    </div>\n    <div class=\"col\">\n      <button class=\"btn\" type=\"button\" id=\"botonempresa\">\n                  <i class=\"\">filtro</i>\n      </button>\n    </div>\n    \n    <div class=\"col\">\n      <button class=\"btn\" type=\"button\" id=\"botonempresa\">\n                  <i class=\"\">Importar</i>\n      </button>\n    </div>\n\n    <div class=\"col\">\n      \n        <button class=\"btn\" data-toggle=\"modal\" id=\"botonempresa\"  mat-raised-button (click)=\"openDialog()\">Crear empresa</button>\n      \n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-xl-12 col-lg-11\">\n              <div class=\"card shadow mb-4\">\n                <!-- Card Header - Dropdown -->\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Tareas</h6>\n                  \n                  <div class=\"dropdown no-arrow\">\n                    <select name=\"dataTable_length\" aria-controls=\"dataTable\">\n\n                    <option value=\"mes\">mes</option>\n                    <option value=\"dia\">dia</option>\n                    \n\n                  </select>\n                    \n                    \n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n                      \n                    </div>\n                  </div>\n                </div>\n                <!-- Card Body -->\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                      <img src='dott.jpg' class='imgRedonda'/>\n                      <p>nombre de la empresa</p>\n                    <div class=\"col\">\n\n                      <p>Estatus:</p>\n                      <p>Sector:</p>\n                      <p>Giro:</p>\n                    </div>\n                    <div class=\"col\">\n                      <p>dueño del contacto:</p>\n                      <p>Clasificación:</p>\n                      <p>Contacto:</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n</div>\n\n            <!-- nota correo registrar llamada programar -->\n            \n\n            <div class=\"container\" class=\"col-xl-6 col-lg-11\">\n\n              \n\n              \n\n              <div class=\"card shadow mb-4\">\n\n                <div class=\"card-body\">\n                  <!--seccion nota-->\n                  <mat-tab-group> \n                <mat-tab  label = \"nota\"> nota </mat-tab> \n                <mat-tab  label = \"correo\"> correo </mat-tab> \n                <mat-tab  label = \"registrar actividad\"> registrar actividad </mat-tab>\n                <mat-tab  label = \"programar\"> programar </mat-tab>\n              </mat-tab-group >\n                              \n\n                </div>\n              </div>\n              \n            </div>\n  \n<!-- Modal / Ventana emergente -->\n\n<\n\n            \n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadistica/estadistica.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadistica/estadistica.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>estadistica works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/negocio/negocio.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/negocio/negocio.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>negocio works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modelos/LoginUsuario */ "./src/app/components/modelos/LoginUsuario.ts");




let AppComponent = class AppComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.title = 'ventas';
        //this.title = configuracion.descripcion;
        this.usuario = new _components_modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
        this.usuario_registro = new _components_modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
    }
    ngOnInit() {
        //para llamar a cualquier metodo del servicio
        //this._userService.singup(this.usuario);
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    logout() {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
    }
    onSubmitRegister() {
        this._userService.register(this.usuario_registro).subscribe(response => {
            let user = response.id_usuario;
            //this.usuario_registro = user;
            console.log(response);
            if (!user) {
                this.alertRegister = 'Error al registrarse';
            }
            else {
                this.alertRegister = 'el registro se a realizado correctamente, identificate con:  ' + this.usuario_registro.email;
                this.usuario_registro = new _components_modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.alertRegister = body.message;
                console.log(error);
            }
        });
    }
    onSubmit() {
        //console.log(this.usuario);
        this._userService.singup(this.usuario).subscribe(response => {
            let identity = response.usuario;
            this.identity = identity;
            if (!this.identity) {
                alert("el usuario no se puede identificar");
            }
            else {
                //crear elemento en el localstorge para tener el usuario sesion
                localStorage.setItem('identity', JSON.stringify(identity));
                //conseguir el token para enviarselo a cada peticion http
                this._userService.singup(this.usuario, 'true').subscribe(response => {
                    let token = response.token;
                    this.token = token;
                    console.log(token);
                    console.log(identity);
                    if (this.token.length <= 0) {
                        alert("el token no se ha generado");
                    }
                    else {
                        //crear elemento en el localstorge para tener el token disponible
                        localStorage.setItem('token', token);
                    }
                }, error => {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        this.errorMessage = body.message;
                        console.log(error);
                    }
                });
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(error);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/empresa/empresa.component */ "./src/app/components/empresa/empresa.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_negocio_negocio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/negocio/negocio.component */ "./src/app/components/negocio/negocio.component.ts");
/* harmony import */ var _components_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/calendario/calendario.component */ "./src/app/components/calendario/calendario.component.ts");
/* harmony import */ var _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/estadistica/estadistica.component */ "./src/app/components/estadistica/estadistica.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");










//esto es para el pop up











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_10__["EmpresaComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__["ContactoComponent"],
            _components_negocio_negocio_component__WEBPACK_IMPORTED_MODULE_13__["NegocioComponent"],
            _components_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_14__["CalendarioComponent"],
            _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_15__["EstadisticaComponent"],
            //esto es para el pop up
            _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_10__["DialogOverviewExampleDialog"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"]
        ],
        entryComponents: [
            _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_10__["DialogOverviewExampleDialog"]
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/empresa/empresa.component */ "./src/app/components/empresa/empresa.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_negocio_negocio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/negocio/negocio.component */ "./src/app/components/negocio/negocio.component.ts");
/* harmony import */ var _components_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calendario/calendario.component */ "./src/app/components/calendario/calendario.component.ts");
/* harmony import */ var _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/estadistica/estadistica.component */ "./src/app/components/estadistica/estadistica.component.ts");








const appRoutes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'empresa', component: _components_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_2__["EmpresaComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__["ContactoComponent"] },
    { path: 'negocio', component: _components_negocio_negocio_component__WEBPACK_IMPORTED_MODULE_5__["NegocioComponent"] },
    { path: 'calendario', component: _components_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_6__["CalendarioComponent"] },
    { path: 'estadistica', component: _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_7__["EstadisticaComponent"] }
];
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/calendario/calendario.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/calendario/calendario.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXJpby9jYWxlbmRhcmlvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/calendario/calendario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/calendario/calendario.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioComponent", function() { return CalendarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalendarioComponent = class CalendarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalendarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendario/calendario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendario.component.css */ "./src/app/components/calendario/calendario.component.css")).default]
    })
], CalendarioComponent);



/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactoComponent = class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacto/contacto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacto.component.css */ "./src/app/components/contacto/contacto.component.css")).default]
    })
], ContactoComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _components_modelos_Crearempresa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modelos/Crearempresa */ "./src/app/components/modelos/Crearempresa.ts");
/* harmony import */ var _components_modelos_contacto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modelos/contacto */ "./src/app/components/modelos/contacto.ts");
/* harmony import */ var _components_modelos_Direccionempresa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modelos/Direccionempresa */ "./src/app/components/modelos/Direccionempresa.ts");
/* harmony import */ var _components_modelos_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modelos/Status */ "./src/app/components/modelos/Status.ts");








let DashboardComponent = class DashboardComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.cliente = new _components_modelos_Crearempresa__WEBPACK_IMPORTED_MODULE_4__["Crearempresa"]("", "", "", "", "", "", "", "", "", "", "", "", "", "");
        this.direccion = new _components_modelos_Direccionempresa__WEBPACK_IMPORTED_MODULE_6__["Direccionempresa"]("", "", "", "", "", "", "");
        this.contactoempresa = new _components_modelos_contacto__WEBPACK_IMPORTED_MODULE_5__["contacto"]("", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
        this.statusempresa = new _components_modelos_Status__WEBPACK_IMPORTED_MODULE_7__["status"]("", "", "");
    }
    ngOnInit() {
        this.traer_empresa();
        this.traer_status();
    }
    traer_idempresa(id_empresa) {
        this._userService.traerid_empresa(id_empresa).subscribe(response => {
            console.log(response);
            this.empresa = response.empresaid;
            this.cliente = response.empresaid[0];
            this.direccion = response.empresaid[0];
            this.contactoempresa = response.empresaid[0];
            this.statusempresa = response.empresaid[0];
            console.log(this.cliente);
        });
    }
    traer_status() {
        this._userService.traerstatus_empresa().subscribe(response => {
            console.log(response);
            this.datos_status = response.status;
        });
    }
    traer_empresa() {
        this._userService.traerempresa().subscribe(response => {
            console.log(response.todas);
            this.datos_empresa = response.todas;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/empresa/empresa.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/empresa/empresa.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wcmVzYS9lbXByZXNhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/empresa/empresa.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/empresa/empresa.component.ts ***!
  \*********************************************************/
/*! exports provided: EmpresaComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_modelos_Direccionempresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modelos/Direccionempresa */ "./src/app/components/modelos/Direccionempresa.ts");
/* harmony import */ var _components_modelos_Crearempresa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modelos/Crearempresa */ "./src/app/components/modelos/Crearempresa.ts");
/* harmony import */ var _components_modelos_giro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modelos/giro */ "./src/app/components/modelos/giro.ts");
/* harmony import */ var _components_modelos_grupo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modelos/grupo */ "./src/app/components/modelos/grupo.ts");
/* harmony import */ var _components_modelos_sector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modelos/sector */ "./src/app/components/modelos/sector.ts");
/* harmony import */ var _components_modelos_contacto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modelos/contacto */ "./src/app/components/modelos/contacto.ts");
/* harmony import */ var _components_modelos_Status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/modelos/Status */ "./src/app/components/modelos/Status.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");











;


let EmpresaComponent = class EmpresaComponent {
    constructor(dialog, _userService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_10__["GLOBAL"].url;
    }
    /*hacer los imports de los otros modelos y hacer las funciones */
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '400px',
            height: 'auto',
            data: { name: this.name, animal: this.animal, url: this.url }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
EmpresaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
EmpresaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empresa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empresa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empresa.component.css */ "./src/app/components/empresa/empresa.component.css")).default]
    })
], EmpresaComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(_userService, dialogRef, data) {
        this._userService = _userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.url = this.data.url;
        this.filtrarimg = 1;
        this.cliente = new _components_modelos_Crearempresa__WEBPACK_IMPORTED_MODULE_4__["Crearempresa"]("", "", "", "", "", "", "", "", "", "", "", "", "", "");
        this.direccion = new _components_modelos_Direccionempresa__WEBPACK_IMPORTED_MODULE_3__["Direccionempresa"]("", "", "", "", "", "", "");
        this.giroempresa = new _components_modelos_giro__WEBPACK_IMPORTED_MODULE_5__["giro"]("", "", "");
        this.grupoempresa = new _components_modelos_grupo__WEBPACK_IMPORTED_MODULE_6__["grupo"]("", "", "");
        this.sectorempresa = new _components_modelos_sector__WEBPACK_IMPORTED_MODULE_7__["sector"]("", "", "");
        this.contactoempresa = new _components_modelos_contacto__WEBPACK_IMPORTED_MODULE_8__["contacto"]("", null, "", "", "", "", "", "", "", "", "", "", "", "", "");
        this.statusempresa = new _components_modelos_Status__WEBPACK_IMPORTED_MODULE_9__["status"]("", "", "");
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.consulta_status();
    }
    //Metodo para subir la imagen de perfil
    upload() {
        console.log(this.filesToUpload);
        this.makeFileRequest(this.url + 'subeImagen/' + this.clienteid, [], this.filesToUpload)
            .then((result) => {
            this.cliente.logo = result.image;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se ha cambiado la imagen',
                showConfirmButton: false,
                timer: 1500
            });
            console.log(result);
            this.filtrarimg = 1;
            this.ngOnInit();
            //document.getElementById('FOTO').setAttribute('src',urlImagen);
        });
    }
    fileChangeEvent(fileInput) {
        //console.log(fileInput.target.files);
        if (fileInput.target.files[0].type != "image/png" && fileInput.target.files[0].type != "image/jpg"
            && fileInput.target.files[0].type != "image/jpeg" && fileInput.target.files[0].type != "image/gif") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                position: 'center',
                icon: 'error',
                title: 'No es una imagen',
                showConfirmButton: false,
                timer: 1500
            });
            this.filtrarimg = 1;
            fileInput = '';
        }
        else {
            this.filesToUpload = fileInput.target.files;
            this.filtrarimg = 2;
        }
    }
    makeFileRequest(url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('logo', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("PUT", url, true);
            xhr.send(formData);
        });
    }
    //funcion para consultar catalogo de status
    consulta_status() {
        this._userService.traerstatus_empresa().subscribe(response => {
            //console.log(response);
            this.guardarstatus = response.status;
            console.log(this.guardarstatus);
        });
    }
    //funcion para que se agregue todo el pop up
    onSubmitEmpresa() {
        //para agregar la direccion del pop up
        this._userService.empresa_direccion(this.direccion).subscribe(response => {
            this.direccionid = response.iddireccion[0];
            //this.usuario_registro = user;
            if (this.direccionid == '') {
                //console.log(user);
                this.alertRegister = 'no se registro la direccion';
            }
            else {
                this.alertRegister = 'el registro se a realizado correctamente,en direccion';
                this.direccion = new _components_modelos_Direccionempresa__WEBPACK_IMPORTED_MODULE_3__["Direccionempresa"]("", "", "", "", "", "", "");
                //para agregar la grupo del pop up
                this._userService.empresa_grupo(this.grupoempresa).subscribe(response => {
                    this.grupoid = response.idgrupo[0];
                    if (!this.grupoid) {
                        this.alertRegister = 'no se guardo la grupo';
                    }
                    else {
                        this.alertRegister = 'el registro se a realizado correctamente en grupo';
                        this.grupoempresa = new _components_modelos_grupo__WEBPACK_IMPORTED_MODULE_6__["grupo"]("", "", "");
                        //para agregar la giro del pop up
                        //console.log(this.grupo);
                        this._userService.empresa_giro(this.giroempresa).subscribe(response => {
                            this.giroid = response.idgiro[0];
                            if (!this.giroid) {
                                this.alertRegister = 'no se guardo el giro';
                            }
                            else {
                                this.alertRegister = 'el registro se guardo correctamente en giro';
                                this.giroempresa = new _components_modelos_giro__WEBPACK_IMPORTED_MODULE_5__["giro"]("", "", "");
                                //para agregar la sector del pop up
                                //console.log(this.giro);
                                this._userService.empresa_sector(this.sectorempresa).subscribe(response => {
                                    this.sectorid = response.idsector[0];
                                    if (!this.sectorid) {
                                        this.alertRegister = 'no se guardo el sector';
                                    }
                                    else {
                                        this.alertRegister = 'el registro se guardo correctamente en sector';
                                        this.sectorempresa = new _components_modelos_sector__WEBPACK_IMPORTED_MODULE_7__["sector"]("", "", "");
                                        //para agregar la contacto del pop up
                                        //console.log(this.sector);
                                        this._userService.empresa_contacto(this.contactoempresa).subscribe(response => {
                                            this.contactoid = response.idcontacto[0];
                                            if (!this.contactoid) {
                                                this.alertRegister = 'no se guardo el contacto';
                                            }
                                            else {
                                                console.log(this.contactoid);
                                                this.alertRegister = 'se guardo correctamente en contacto';
                                                this.contactoempresa = new _components_modelos_contacto__WEBPACK_IMPORTED_MODULE_8__["contacto"]("", null, "", "", "", "", "", "", "", "", "", "", "", "", "");
                                                this.cliente.id_giro = this.giroid;
                                                this.cliente.id_nivel_compra = "1";
                                                this.cliente.id_sector = this.sectorid;
                                                this.cliente.id_grupo = this.grupoid;
                                                this.cliente.id_direccion = this.direccionid;
                                                this.cliente.id_contacto_empresa = this.contactoid;
                                                this.cliente.id_archivo = null;
                                                //this.cliente.id_archivo = 1;
                                                console.log(this.cliente);
                                                this._userService.empresa_register(this.cliente).subscribe(response => {
                                                    //console.log(response);
                                                    this.clienteid = response.idempresa[0];
                                                    this.upload();
                                                    //console.log(upload());
                                                    if (!this.clienteid) {
                                                        this.alertRegister = 'no se guardo cliente';
                                                    }
                                                    else {
                                                        this.alertRegister = 'se guardo correctamente en cliente';
                                                        this.cliente = new _components_modelos_Crearempresa__WEBPACK_IMPORTED_MODULE_4__["Crearempresa"]("", "", "", "", "", "", "", "", "", "", "", "", "", "");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.alertRegister = body.message;
                console.log(error);
            }
        });
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crearempresa.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/crearempresa.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);



/***/ }),

/***/ "./src/app/components/estadistica/estadistica.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/estadistica/estadistica.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXN0YWRpc3RpY2EvZXN0YWRpc3RpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/estadistica/estadistica.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/estadistica/estadistica.component.ts ***!
  \*****************************************************************/
/*! exports provided: EstadisticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaComponent", function() { return EstadisticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EstadisticaComponent = class EstadisticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
EstadisticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estadistica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estadistica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/estadistica/estadistica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estadistica.component.css */ "./src/app/components/estadistica/estadistica.component.css")).default]
    })
], EstadisticaComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/LoginUsuario */ "./src/app/components/modelos/LoginUsuario.ts");




let LoginComponent = class LoginComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.usuario = new _modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
        this.usuario_registro = new _modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
    }
    //
    ngOnInit() {
        //para llamar a cualquier metodo del servicio
        //this._userService.singup(this.usuario);
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    logout() {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
    }
    onSubmitRegister() {
        this._userService.register(this.usuario_registro).subscribe(response => {
            let user = response.id_usuario;
            //this.usuario_registro = user;
            console.log(response);
            if (!user) {
                this.alertRegister = 'Error al registrarse';
            }
            else {
                this.alertRegister = 'el registro se a realizado correctamente, identificate con:  ' + this.usuario_registro.email;
                this.usuario_registro = new _modelos_LoginUsuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"]("", "", "", "", "", "", "");
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.alertRegister = body.message;
                console.log(error);
            }
        });
    }
    onSubmit() {
        //console.log(this.usuario);
        this._userService.singup(this.usuario).subscribe(response => {
            let identity = response.usuario;
            this.identity = identity;
            if (!this.identity) {
                alert("el usuario no se puede identificar");
            }
            else {
                //crear elemento en el localstorge para tener el usuario sesion
                localStorage.setItem('identity', JSON.stringify(identity));
                //conseguir el token para enviarselo a cada peticion http
                this._userService.singup(this.usuario, 'true').subscribe(response => {
                    let token = response.token;
                    this.token = token;
                    console.log(token);
                    console.log(identity);
                    if (this.token.length <= 0) {
                        alert("el token no se ha generado");
                    }
                    else {
                        //crear elemento en el localstorge para tener el token disponible
                        localStorage.setItem('token', token);
                    }
                }, error => {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        this.errorMessage = body.message;
                        console.log(error);
                    }
                });
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(error);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/modelos/Crearempresa.ts":
/*!****************************************************!*\
  !*** ./src/app/components/modelos/Crearempresa.ts ***!
  \****************************************************/
/*! exports provided: Crearempresa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crearempresa", function() { return Crearempresa; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Crearempresa {
    constructor(id_status_empresa, id_giro, id_nivel_compra, id_sector, id_grupo, id_direccion, id_contacto_empresa, id_archivo, nombre_empresa, servicio, num_empleados, fecha_registro, rfc, logo) {
        this.id_status_empresa = id_status_empresa;
        this.id_giro = id_giro;
        this.id_nivel_compra = id_nivel_compra;
        this.id_sector = id_sector;
        this.id_grupo = id_grupo;
        this.id_direccion = id_direccion;
        this.id_contacto_empresa = id_contacto_empresa;
        this.id_archivo = id_archivo;
        this.nombre_empresa = nombre_empresa;
        this.servicio = servicio;
        this.num_empleados = num_empleados;
        this.fecha_registro = fecha_registro;
        this.rfc = rfc;
        this.logo = logo;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/Direccionempresa.ts":
/*!********************************************************!*\
  !*** ./src/app/components/modelos/Direccionempresa.ts ***!
  \********************************************************/
/*! exports provided: Direccionempresa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direccionempresa", function() { return Direccionempresa; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Direccionempresa {
    constructor(_id, calle, numero_int, numero_ext, colonia, alcaldia, estado) {
        this._id = _id;
        this.calle = calle;
        this.numero_int = numero_int;
        this.numero_ext = numero_ext;
        this.colonia = colonia;
        this.alcaldia = alcaldia;
        this.estado = estado;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/LoginUsuario.ts":
/*!****************************************************!*\
  !*** ./src/app/components/modelos/LoginUsuario.ts ***!
  \****************************************************/
/*! exports provided: LoginUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuario", function() { return LoginUsuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginUsuario {
    constructor(_id, nombre, apellidopaterno, apellidomaterno, telefono, email, password) {
        this._id = _id;
        this.nombre = nombre;
        this.apellidopaterno = apellidopaterno;
        this.apellidomaterno = apellidomaterno;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/Status.ts":
/*!**********************************************!*\
  !*** ./src/app/components/modelos/Status.ts ***!
  \**********************************************/
/*! exports provided: status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class status {
    constructor(_id, status, descripcion) {
        this._id = _id;
        this.status = status;
        this.descripcion = descripcion;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/contacto.ts":
/*!************************************************!*\
  !*** ./src/app/components/modelos/contacto.ts ***!
  \************************************************/
/*! exports provided: contacto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacto", function() { return contacto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class contacto {
    constructor(_id, id_origen, nombre_contacto, area, extencion, email, celular, puesto, telefono, fecha_registro, telefono2, telefono3, telefono4, correo2, correo3) {
        this._id = _id;
        this.id_origen = id_origen;
        this.nombre_contacto = nombre_contacto;
        this.area = area;
        this.extencion = extencion;
        this.email = email;
        this.celular = celular;
        this.puesto = puesto;
        this.telefono = telefono;
        this.fecha_registro = fecha_registro;
        this.telefono2 = telefono2;
        this.telefono3 = telefono3;
        this.telefono4 = telefono4;
        this.correo2 = correo2;
        this.correo3 = correo3;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/giro.ts":
/*!********************************************!*\
  !*** ./src/app/components/modelos/giro.ts ***!
  \********************************************/
/*! exports provided: giro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giro", function() { return giro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class giro {
    constructor(_id, giro, descripcion) {
        this._id = _id;
        this.giro = giro;
        this.descripcion = descripcion;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/grupo.ts":
/*!*********************************************!*\
  !*** ./src/app/components/modelos/grupo.ts ***!
  \*********************************************/
/*! exports provided: grupo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grupo", function() { return grupo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class grupo {
    constructor(_id, grupo, descripcion) {
        this._id = _id;
        this.grupo = grupo;
        this.descripcion = descripcion;
    }
}


/***/ }),

/***/ "./src/app/components/modelos/sector.ts":
/*!**********************************************!*\
  !*** ./src/app/components/modelos/sector.ts ***!
  \**********************************************/
/*! exports provided: sector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sector", function() { return sector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class sector {
    constructor(_id, sector, descripcion) {
        this._id = _id;
        this.sector = sector;
        this.descripcion = descripcion;
    }
}


/***/ }),

/***/ "./src/app/components/negocio/negocio.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/negocio/negocio.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmVnb2Npby9uZWdvY2lvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/negocio/negocio.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/negocio/negocio.component.ts ***!
  \*********************************************************/
/*! exports provided: NegocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegocioComponent", function() { return NegocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NegocioComponent = class NegocioComponent {
    constructor() { }
    ngOnInit() {
    }
};
NegocioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-negocio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./negocio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/negocio/negocio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./negocio.component.css */ "./src/app/components/negocio/negocio.component.css")).default]
    })
], NegocioComponent);



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GLOBAL = {
    url: 'http://localhost:8081/api/',
};


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
    }
    singup(user_to_login, gethash = null) {
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        //return 'hola mundo desde el servicio';
        //para convertir a json 
        let json = JSON.stringify(user_to_login);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        //devuelves la peticion a la url le pasas params y headers 
        //capturar respuesta es map
        return this._http.post(this.url + 'login', params, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => res.json()));
    }
    //servicio para traer el id 
    traerid_empresa(id_empresa) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'traeridempresa/' + id_empresa, { headers: headers })
            .map(res => res.json());
    }
    //servicio para traer todos los status de empresa
    traerstatus_empresa() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'traerstatus', { headers: headers })
            .map(res => res.json());
    }
    //servicio para traer todos los contactos
    traercontacto_empresa() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'traercontacto', { headers: headers })
            .map(res => res.json());
    }
    //servicio para traer todas las empresas
    traerempresa() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.get(this.url + 'traerempresa', { headers: headers })
            .map(res => res.json());
    }
    register(user_to_register) {
        let json = JSON.stringify(user_to_register);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .map(res => res.json());
    }
    /*para el formulario de crear empresa*/
    empresa_register(user_to_empresa) {
        let json = JSON.stringify(user_to_empresa);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'registroempresa', params, { headers: headers })
            .map(res => res.json());
    }
    empresa_direccion(user_to_direccion) {
        let json = JSON.stringify(user_to_direccion);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'direccion', params, { headers: headers })
            .map(res => res.json());
    }
    empresa_giro(user_to_giro) {
        let json = JSON.stringify(user_to_giro);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'giro', params, { headers: headers })
            .map(res => res.json());
    }
    empresa_grupo(user_to_grupo) {
        let json = JSON.stringify(user_to_grupo);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'grupo', params, { headers: headers })
            .map(res => res.json());
    }
    empresa_sector(user_to_sector) {
        let json = JSON.stringify(user_to_sector);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'sector', params, { headers: headers })
            .map(res => res.json());
    }
    empresa_contacto(user_to_sector) {
        let json = JSON.stringify(user_to_sector);
        let params = json;
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'contacto', params, { headers: headers })
            .map(res => res.json());
    }
    /*
        actualizar(user_to_update){
            let json = JSON.stringify(user_to_update);
            let headers = new Headers({'Content-Type':'application/json',
                                        'autorization':this.getToken()});
    
            return this._http.put(this.url + 'update.user'+user_to_update._id,
            params,{headers:headers}).map(res => res.json());
    
        }
    */
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefiend") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    getToken() {
        let token = localStorage.getItem('token');
        if (token != "undefiend") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ivanmunoz/Documents/VENTAS-COMPLETO/ventas/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/ivanmunoz/Documents/VENTAS-COMPLETO/ventas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map