"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_registrar-presupuestos_registrar-presupuestos_module_ts"],{

/***/ 86671:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/admin/registrar-presupuestos/registrar-presupuestos-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPresupuestosPageRoutingModule": () => (/* binding */ RegistrarPresupuestosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _registrar_presupuestos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-presupuestos.page */ 2676);




const routes = [
    {
        path: '',
        component: _registrar_presupuestos_page__WEBPACK_IMPORTED_MODULE_0__.RegistrarPresupuestosPage
    }
];
let RegistrarPresupuestosPageRoutingModule = class RegistrarPresupuestosPageRoutingModule {
};
RegistrarPresupuestosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrarPresupuestosPageRoutingModule);



/***/ }),

/***/ 17735:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/registrar-presupuestos/registrar-presupuestos.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPresupuestosPageModule": () => (/* binding */ RegistrarPresupuestosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _registrar_presupuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-presupuestos-routing.module */ 86671);
/* harmony import */ var _registrar_presupuestos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar-presupuestos.page */ 2676);







let RegistrarPresupuestosPageModule = class RegistrarPresupuestosPageModule {
};
RegistrarPresupuestosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrar_presupuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrarPresupuestosPageRoutingModule
        ],
        declarations: [_registrar_presupuestos_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarPresupuestosPage]
    })
], RegistrarPresupuestosPageModule);



/***/ }),

/***/ 2676:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/registrar-presupuestos/registrar-presupuestos.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPresupuestosPage": () => (/* binding */ RegistrarPresupuestosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _registrar_presupuestos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-presupuestos.page.html?ngResource */ 18897);
/* harmony import */ var _registrar_presupuestos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar-presupuestos.page.scss?ngResource */ 95000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/presupuestos.service */ 1931);
/* harmony import */ var src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/domain/presupuesto */ 30197);










let RegistrarPresupuestosPage = class RegistrarPresupuestosPage {
    constructor(route, router, presupuestoService, //Declaracion de servicios para presupuestos
    alertCtrl, //Declaracion de servicios para alertas
    loadingController, //Declaracion de servicios de pantalla de progreso
    auth, //Declaracion de servicios de autenticacion
    menuCtrl) {
        this.route = route;
        this.router = router;
        this.presupuestoService = presupuestoService;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        //Declaracion e iniciacion de un objeto para cada uno de los diferentes presupuestos
        this.presupuestoAlimentacion = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoServicios = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoEducacion = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoOcio = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoTransporte = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoVivienda = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoSalud = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoOtros = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto();
        this.presupuestoExist = false;
        this.sumPresupuestoIng = 0;
        this.labelColor = "primary";
        this.menuCtrl.enable(true); //Menu activado
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.sessionUser = yield this.auth.getUserAuth(); //Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase    
                    this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.usuario = yield this.auth.getUsuario(user.email); //Utilizacion de servicio para obtener usuario en base a consulta base de datos
                        this.usuario.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(user => {
                            this.familia = this.presupuestoService.obtenerFamilia(user[0].id_familia); //Utilizacion de servicio para obtener familia del usuario en base a consulta base de datos
                            this.presupuestoService.obtenerPresupuestos(user[0].id_familia).subscribe(res => {
                                //  Llenar los datos de los presupuestos si estos existen
                                if (res.length > 0) {
                                    // console.log(res.filter(data => data.id_categoria === "pZbMomfUFtw8u2aD0sEC")[0])
                                    this.presupuestoExist = true;
                                    this.presupuestoAlimentacion = res.filter(data => data.id_categoria === "834IqsQWzMFPdsE7TZKu")[0];
                                    this.presupuestoServicios = res.filter(data => data.id_categoria === "yfXjC94YqUqIbn4zXMjx")[0];
                                    this.presupuestoEducacion = res.filter(data => data.id_categoria === "EjKGtXUIHEnwC0MKrzIn")[0];
                                    this.presupuestoOcio = res.filter(data => data.id_categoria === "Y2xbbnUeLwCz5UhfMMJZ")[0];
                                    this.presupuestoTransporte = res.filter(data => data.id_categoria === "pZbMomfUFtw8u2aD0sEC")[0];
                                    this.presupuestoVivienda = res.filter(data => data.id_categoria === "NgNS2EM0p4UdeAQlZ4q6")[0];
                                    this.presupuestoSalud = res.filter(data => data.id_categoria === "Mp82DGLcR5AUOEk5DSrC")[0];
                                    this.presupuestoOtros = res.filter(data => data.id_categoria === "uPtleC6y1na6ZkkpePAd")[0];
                                    this.sumaPresupuesto();
                                }
                                a.dismiss().then(() => console.log('abort presenting')); //Mensaje para registro de finalizacion de proceso
                            });
                            this.familia.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(fam => {
                                this.diaMes = fam[0].primer_dia_mes.toString(); //Asignacion de valor para restriccion de seleccion de dia, registro de presupuesto
                                this.presupuestoTotal = fam[0].presupuesto_global;
                            });
                        });
                    }));
                }));
            });
        });
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                //Mensaje
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar'] //Boton de confirmacion  
            });
            yield prompt.present();
        });
    }
    sumaPresupuesto() {
        try {
            this.sumPresupuestoIng = this.presupuestoAlimentacion.cantidad
                + this.presupuestoServicios.cantidad
                + this.presupuestoEducacion.cantidad
                + this.presupuestoOcio.cantidad
                + this.presupuestoTransporte.cantidad
                + this.presupuestoVivienda.cantidad
                + this.presupuestoSalud.cantidad
                + this.presupuestoOtros.cantidad;
            if (this.sumPresupuestoIng > this.presupuestoTotal) {
                this.labelColor = "danger";
            }
            else {
                this.labelColor = "primary";
            }
        }
        catch (error) { }
    }
    actionPresupuesto() {
        this.sumaPresupuesto();
        //Clausula para control de presupuestos y presupuesto total, ademas de verificacion de fecha de registro
        if (this.presupuestoTotal !== null
            && this.presupuestoAlimentacion.cantidad !== null
            && this.presupuestoServicios.cantidad !== null
            && this.presupuestoEducacion.cantidad !== null
            && this.presupuestoOcio.cantidad !== null
            && this.presupuestoTransporte.cantidad !== null
            && this.presupuestoVivienda.cantidad !== null
            && this.presupuestoSalud.cantidad !== null
            && this.presupuestoOtros.cantidad !== null
            && this.sumPresupuestoIng <= this.presupuestoTotal) {
            if (this.presupuestoExist) {
                this.actualizarPresupuestos();
            }
            else {
                this.registrarPresupuesto();
                this.presupuestoExist = true;
            }
        }
        else {
            this.alert = "Imposible de procesar su petición";
            this.advice = 'Por favor, llene todos los campos necesarios o no se pase de su presupuesto';
            return this.genericAlert(this.alert, this.advice);
        }
    }
    registrarPresupuesto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        try { //Clausula try-catch
                            this.usuario = yield this.auth.getUsuario(user.email);
                            this.usuario.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(user => {
                                //Asignacion de valores correspondienteas a cada presupuesto
                                this.presupuestoAlimentacion.id_familia = user[0].id_familia;
                                this.presupuestoServicios.id_familia = user[0].id_familia;
                                this.presupuestoEducacion.id_familia = user[0].id_familia;
                                this.presupuestoVivienda.id_familia = user[0].id_familia;
                                this.presupuestoTransporte.id_familia = user[0].id_familia;
                                this.presupuestoOcio.id_familia = user[0].id_familia;
                                this.presupuestoOtros.id_familia = user[0].id_familia;
                                this.presupuestoSalud.id_familia = user[0].id_familia;
                                this.presupuestoServicios.fecha = (new Date).toISOString();
                                this.presupuestoEducacion.fecha = (new Date).toISOString();
                                this.presupuestoVivienda.fecha = (new Date).toISOString();
                                this.presupuestoTransporte.fecha = (new Date).toISOString();
                                this.presupuestoOcio.fecha = (new Date).toISOString();
                                this.presupuestoOtros.fecha = (new Date).toISOString();
                                this.presupuestoSalud.fecha = (new Date).toISOString();
                                //Valores de categoria registrados en Firebase
                                this.presupuestoAlimentacion.id_categoria = "834IqsQWzMFPdsE7TZKu";
                                this.presupuestoServicios.id_categoria = "yfXjC94YqUqIbn4zXMjx";
                                this.presupuestoEducacion.id_categoria = "EjKGtXUIHEnwC0MKrzIn";
                                this.presupuestoVivienda.id_categoria = "NgNS2EM0p4UdeAQlZ4q6";
                                this.presupuestoTransporte.id_categoria = "pZbMomfUFtw8u2aD0sEC";
                                this.presupuestoOcio.id_categoria = "Y2xbbnUeLwCz5UhfMMJZ";
                                this.presupuestoOtros.id_categoria = "uPtleC6y1na6ZkkpePAd";
                                this.presupuestoSalud.id_categoria = "Mp82DGLcR5AUOEk5DSrC";
                                let sumatoria = this.presupuestoAlimentacion.cantidad + this.presupuestoEducacion.cantidad +
                                    this.presupuestoOcio.cantidad + this.presupuestoOtros.cantidad + this.presupuestoSalud.cantidad +
                                    this.presupuestoServicios.cantidad + this.presupuestoTransporte.cantidad + this.presupuestoVivienda.cantidad; //Calculo de Presupuesto total de la familia 
                                //En caso de cumplir clausula, guardar los diferentes presupuestos
                                this.presupuestoService.guardar(this.presupuestoAlimentacion);
                                this.presupuestoService.guardar(this.presupuestoEducacion);
                                this.presupuestoService.guardar(this.presupuestoOcio);
                                this.presupuestoService.guardar(this.presupuestoOtros);
                                this.presupuestoService.guardar(this.presupuestoSalud);
                                this.presupuestoService.guardar(this.presupuestoServicios);
                                this.presupuestoService.guardar(this.presupuestoTransporte);
                                this.presupuestoService.guardar(this.presupuestoVivienda);
                                this.actualizarFamilia(); //Llamada a funcion diseñada
                            });
                        }
                        catch (error) {
                            //Caso de encontrar un error, definir mesaje para alerta y lanzar alerta
                            console.log(error);
                            this.alert = "Ocurrió un error inesperado al registrar el presupuesto";
                            this.advice = 'Por favor, inténtelo de nuevo';
                            return this.genericAlert(this.alert, this.advice);
                        }
                        finally {
                            a.dismiss().then(() => console.log('abort presenting')); //Mensaje para registro de finalizacion de proceso
                        }
                    }));
                }));
            });
        });
    }
    actualizarPresupuestos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.presupuestoServicios.fecha = (new Date).toISOString();
                    this.presupuestoEducacion.fecha = (new Date).toISOString();
                    this.presupuestoVivienda.fecha = (new Date).toISOString();
                    this.presupuestoTransporte.fecha = (new Date).toISOString();
                    this.presupuestoOcio.fecha = (new Date).toISOString();
                    this.presupuestoOtros.fecha = (new Date).toISOString();
                    this.presupuestoSalud.fecha = (new Date).toISOString();
                    //En caso de cumplir clausula, guardar los diferentes presupuestos
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoAlimentacion);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoEducacion);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoOcio);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoOtros);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoSalud);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoServicios);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoTransporte);
                    this.presupuestoService.actualizarPresupuesto(this.presupuestoVivienda);
                    this.actualizarFamilia(); //Llamada a funcion diseñada
                    a.dismiss().then(() => console.log('abort presenting')); //Mensaje para registro de finalizacion de proceso
                }));
            });
        });
    }
    actualizarFamilia() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser = yield this.auth.getUserAuth();
            this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.usuario = yield this.auth.getUsuario(user.email);
                this.usuario.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(user => {
                    this.presupuestoService.actualizarFamiliaPrsp(user[0].id_familia, this.presupuestoTotal); //Llamado de servicio para actualizacion de valor, envio de id familia y valor                
                });
            }));
        });
    }
};
RegistrarPresupuestosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_3__.PresupuestosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
RegistrarPresupuestosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-registrar-presupuestos',
        template: _registrar_presupuestos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registrar_presupuestos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrarPresupuestosPage);



/***/ }),

/***/ 95000:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/admin/registrar-presupuestos/registrar-presupuestos.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXItcHJlc3VwdWVzdG9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 18897:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/admin/registrar-presupuestos/registrar-presupuestos.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Registrar Presupuestos</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-list><!--Inicio de lista-->\r\n    <ion-item-group><!--Inicio de grupo de items de una lista-->\r\n      <ion-item-divider><!--Divisor de grupos-->\r\n        <ion-label>Presupuesto General</ion-label><!--Etiqueta-->\r\n      </ion-item-divider>    \r\n      <ion-item><!--Inicio de item de lista-->\r\n        <ion-input (change)=\"sumaPresupuesto()\" placeholder=\"00.00\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoTotal\" ></ion-input><!--Elemento para ingreso, tipo numero, requerido, valor minimo 0 referencia a variable-->\r\n        <ion-label [(color)]=\"labelColor\">Asignado: {{sumPresupuestoIng}}</ion-label>\r\n      </ion-item>\r\n    </ion-item-group>\r\n    <ion-item-group>\r\n      <ion-item-divider>\r\n        <ion-label>Alimentacion</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" placeholder=\"00.00\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoAlimentacion.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"fast-food-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Servicios</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoServicios.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"water-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Educacion</ion-label>    \r\n      </ion-item-divider>    \r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoEducacion.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"book-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Ocio</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoOcio.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"brush-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Transporte</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoTransporte.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"bus-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Vivienda</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoVivienda.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"home-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Salud</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>      \r\n        <ion-input (change)=\"sumaPresupuesto()\"  inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoSalud.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        <ion-icon name=\"medkit-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item-divider>\r\n        <ion-label>Otros</ion-label>      \r\n      </ion-item-divider>\r\n      <ion-item>\r\n        <ion-input (change)=\"sumaPresupuesto()\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"presupuestoOtros.cantidad\" placeholder=\"00.00\"></ion-input>\r\n        \r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  \r\n  <!--Elemento para ingreos de fecha en formato MMM D:HH:mm, referencia a variable, requerido, condicion para eleccion de dia segun familia\r\n  <ion-item-divider>\r\n    <ion-label>Fecha</ion-label>      \r\n  </ion-item-divider>\r\n  <ion-item style=\"margin: 1%;\">\r\n    \r\n    <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"presupuestoAlimentacion.fecha\" required=\"true\" dayValues={{diaMes}}></ion-datetime>\r\n  </ion-item>-->\r\n  \r\n  <ion-item-divider>\r\n    <ion-label>Acciones</ion-label>      \r\n  </ion-item-divider>\r\n  <ion-button expand=\"block\" (click)=\"actionPresupuesto()\">Registrar presupuestos</ion-button><!--Boton-->\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_registrar-presupuestos_registrar-presupuestos_module_ts.js.map