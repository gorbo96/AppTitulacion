"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_ver-presupuestos_ver-presupuestos_module_ts"],{

/***/ 80696:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/all/ver-presupuestos/ver-presupuestos-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerPresupuestosPageRoutingModule": () => (/* binding */ VerPresupuestosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ver_presupuestos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-presupuestos.page */ 38392);




const routes = [
    {
        path: '',
        component: _ver_presupuestos_page__WEBPACK_IMPORTED_MODULE_0__.VerPresupuestosPage
    }
];
let VerPresupuestosPageRoutingModule = class VerPresupuestosPageRoutingModule {
};
VerPresupuestosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerPresupuestosPageRoutingModule);



/***/ }),

/***/ 46119:
/*!***********************************************************************!*\
  !*** ./src/app/pages/all/ver-presupuestos/ver-presupuestos.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerPresupuestosPageModule": () => (/* binding */ VerPresupuestosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ver_presupuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-presupuestos-routing.module */ 80696);
/* harmony import */ var _ver_presupuestos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-presupuestos.page */ 38392);







let VerPresupuestosPageModule = class VerPresupuestosPageModule {
};
VerPresupuestosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ver_presupuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerPresupuestosPageRoutingModule
        ],
        declarations: [_ver_presupuestos_page__WEBPACK_IMPORTED_MODULE_1__.VerPresupuestosPage]
    })
], VerPresupuestosPageModule);



/***/ }),

/***/ 38392:
/*!*********************************************************************!*\
  !*** ./src/app/pages/all/ver-presupuestos/ver-presupuestos.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerPresupuestosPage": () => (/* binding */ VerPresupuestosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ver_presupuestos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-presupuestos.page.html?ngResource */ 69488);
/* harmony import */ var _ver_presupuestos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-presupuestos.page.scss?ngResource */ 42320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/presupuestos.service */ 1931);
/* harmony import */ var src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/domain/presupuesto */ 30197);










let VerPresupuestosPage = class VerPresupuestosPage {
    constructor(route, router, presupuestoService, //Declaracion de servicios para presupuestos
    alertCtrl, //Declaracion de servicios para alertas
    auth, //Declaracion de servicios de autenticacion
    loadingController, //Declaracion de servicios de pantalla de progreso
    menuCtrl) {
        this.route = route;
        this.router = router;
        this.presupuestoService = presupuestoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.loadGlobal = false;
        this.presupuestosF = []; //Vector de objetos 'Presupuesto', almacenar en formato visualizacion de informacion de firebase
        this.menuCtrl.enable(true); //Menu activado
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser = yield this.auth.getUserAuth(); //Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase
            this.obtenerPresupuestos(); //Llamado a funcion diseñada
        });
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar'] //Boton de confirmacion
            });
            yield prompt.present();
        });
    }
    obtenerPresupuestos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.usuario = yield this.auth.getUsuario(user.email); //Utilizacion de servicio para obtener usuario en base a consulta base de datos  
                            this.usuario.forEach((element) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                yield this.presupuestoService.obtenerFamilia(element[0].id_familia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(fam => {
                                    this.presupuestoGlobal = fam[0].presupuesto_global;
                                    this.loadGlobal = true;
                                });
                                this.presupuestos = this.presupuestoService.obtenerPresupuestos(element[0].id_familia); //Utilizacion de servicio para obtener presupuestos de la familia correspondiente al usuario en base a consulta base de datos
                                this.presupuestos.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(presp => {
                                    for (let index = 0; index < presp.length; index++) {
                                        let aux = new src_app_domain_presupuesto__WEBPACK_IMPORTED_MODULE_4__.Presupuesto(); //Variable auxilizar de clase gasto
                                        //Asignacion de valores correspondientes a la lectura desde Firebase, con cambios para la visualizacion
                                        aux.id = presp[index].id;
                                        aux.cantidad = presp[index].cantidad;
                                        aux.id_familia = presp[index].id_familia;
                                        //Cambio de contenido de variabe segun categoria
                                        if (presp[index].id_categoria == '834IqsQWzMFPdsE7TZKu') {
                                            aux.id_categoria = "Alimentacion";
                                        }
                                        if (presp[index].id_categoria == 'yfXjC94YqUqIbn4zXMjx') {
                                            aux.id_categoria = "Servicios";
                                        }
                                        if (presp[index].id_categoria == 'EjKGtXUIHEnwC0MKrzIn') {
                                            aux.id_categoria = "Educacion";
                                        }
                                        if (presp[index].id_categoria == 'Y2xbbnUeLwCz5UhfMMJZ') {
                                            aux.id_categoria = "Ocio";
                                        }
                                        if (presp[index].id_categoria == 'pZbMomfUFtw8u2aD0sEC') {
                                            aux.id_categoria = "Transporte";
                                        }
                                        if (presp[index].id_categoria == 'NgNS2EM0p4UdeAQlZ4q6') {
                                            aux.id_categoria = "Vivienda";
                                        }
                                        if (presp[index].id_categoria == 'Mp82DGLcR5AUOEk5DSrC') {
                                            aux.id_categoria = "Salud";
                                        }
                                        if (presp[index].id_categoria == 'uPtleC6y1na6ZkkpePAd') {
                                            aux.id_categoria = "Otros";
                                        }
                                        aux.fecha = presp[index].fecha;
                                        this.presupuestosF.push(aux); //Adicion a vector para posterio lectura 
                                    }
                                });
                            }));
                        }));
                    }
                    catch (error) {
                        this.alert = "Ocurrió un error inesperado al registrar el presupuesto";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        return this.genericAlert(this.alert, this.advice);
                    }
                    finally {
                        a.dismiss().then(() => console.log('abort presenting')); //Mensaje para registro de finalizacion de proceso             
                    }
                }));
            });
        });
    }
};
VerPresupuestosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_3__.PresupuestosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
VerPresupuestosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ver-presupuestos',
        template: _ver_presupuestos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ver_presupuestos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerPresupuestosPage);



/***/ }),

/***/ 42320:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/all/ver-presupuestos/ver-presupuestos.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItcHJlc3VwdWVzdG9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 69488:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/all/ver-presupuestos/ver-presupuestos.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ver-presupuestos</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div div style=\"float: left; width: 100%;\">\r\n\r\n    <ion-item *ngIf=\"loadGlobal\"><!--Item de lista-->\r\n      <ion-label><!--Etiqueta compuesta--> \r\n        <div div style=\"width: 100%; margin-left: 5%;\">\r\n          <!--Visualizacion de informacion acerca del presupuesto-->  \r\n          <h1>Presupuesto Global</h1>\r\n          <h1>$ {{ presupuestoGlobal }}</h1>            \r\n        </div>            \r\n      </ion-label>\r\n    </ion-item> \r\n    \r\n    <div *ngFor=\"let presupuesto of presupuestosF\"><!--Bucle con codigo angular para visualizar presupuestos-->   \r\n      <ion-item><!--Item de lista-->\r\n        <ion-label><!--Etiqueta compuesta--> \r\n          <div div style=\"float: left; width: 50%; margin-left: 5%;\">\r\n            <!--Visualizacion de informacion acerca del presupuesto-->  \r\n            <h2>{{ presupuesto.id_categoria }}</h2>\r\n            <h2>$ {{ presupuesto.cantidad }}</h2>            \r\n          </div>            \r\n        </ion-label>\r\n      </ion-item>            \r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_ver-presupuestos_ver-presupuestos_module_ts.js.map