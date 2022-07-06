"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_registrar-gasto_registrar-gasto_module_ts"],{

/***/ 42719:
/*!*********************************!*\
  !*** ./src/app/domain/gasto.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gasto": () => (/* binding */ Gasto)
/* harmony export */ });
//Declaracion de clase Gasto
class Gasto {
}


/***/ }),

/***/ 59890:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/all/registrar-gasto/registrar-gasto-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarGastoPageRoutingModule": () => (/* binding */ RegistrarGastoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _registrar_gasto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-gasto.page */ 70841);




const routes = [
    {
        path: '',
        component: _registrar_gasto_page__WEBPACK_IMPORTED_MODULE_0__.RegistrarGastoPage
    }
];
let RegistrarGastoPageRoutingModule = class RegistrarGastoPageRoutingModule {
};
RegistrarGastoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrarGastoPageRoutingModule);



/***/ }),

/***/ 46195:
/*!*********************************************************************!*\
  !*** ./src/app/pages/all/registrar-gasto/registrar-gasto.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarGastoPageModule": () => (/* binding */ RegistrarGastoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _registrar_gasto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-gasto-routing.module */ 59890);
/* harmony import */ var _registrar_gasto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar-gasto.page */ 70841);







let RegistrarGastoPageModule = class RegistrarGastoPageModule {
};
RegistrarGastoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrar_gasto_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrarGastoPageRoutingModule
        ],
        declarations: [_registrar_gasto_page__WEBPACK_IMPORTED_MODULE_1__.RegistrarGastoPage]
    })
], RegistrarGastoPageModule);



/***/ }),

/***/ 70841:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all/registrar-gasto/registrar-gasto.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarGastoPage": () => (/* binding */ RegistrarGastoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _registrar_gasto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar-gasto.page.html?ngResource */ 21398);
/* harmony import */ var _registrar_gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrar-gasto.page.scss?ngResource */ 81550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_domain_gasto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/gasto */ 42719);
/* harmony import */ var src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/gastos.service */ 40354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 90449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);












let RegistrarGastoPage = class RegistrarGastoPage {
    constructor(route, localNotifications, router, gastoService, //Declaracion de servicios para gastos
    alertCtrl, auth, //Declaracion de servicios de autenticacion
    loadingController, //Declaracion de servicios de pantalla de progreso
    menuCtrl, datepipe) {
        this.route = route;
        this.localNotifications = localNotifications;
        this.router = router;
        this.gastoService = gastoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.datepipe = datepipe;
        this.gasto = new src_app_domain_gasto__WEBPACK_IMPORTED_MODULE_2__.Gasto(); //Variable de clase 'Gasto', almacenar en formato visualizacion de informacion de firebase
        this.menuCtrl.enable(true); //Menu activado
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser = yield this.auth.getUserAuth(); //Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase  
        });
    }
    registrarGasto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.gasto.id = null; //anular el valor de id del gasto,antecedente necesario para la generacion automatica de ID's de firebase
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(this.gasto.id_categoria);
                    if (this.gasto.monto !== undefined && this.gasto.id_categoria !== undefined) {
                        this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            try { //Calusula try-catch
                                this.usuario = yield this.auth.getUsuario(user.email); //Utilizacion de servicio para obtener usuario en base a consulta base de datos
                                this.usuario.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(user => {
                                    this.gasto.id_usuario = user[0].uid; //Asignacion de id del usuario que registra el gasto
                                    this.gasto.id_familia = user[0].id_familia; //Asignacion de id de la familia
                                    var fecha = new Date(this.gasto.fecha); //Crear variable con tipo fecha para generar notificacion
                                    if (this.gasto.fecha === undefined) {
                                        this.gasto.fecha = this.datepipe.transform(new Date(), 'YYYY-MM-ddThh:mm:ssZ');
                                        fecha = new Date();
                                    }
                                    if (this.gasto.descripcion === null || this.gasto.descripcion === undefined) {
                                        this.gasto.descripcion = "No especificado";
                                    }
                                    this.localNotifications.schedule({
                                        text: "Nuevo Gasto" + this.gasto.descripcion + "\n De: " + this.gasto.monto,
                                        trigger: { at: fecha },
                                    });
                                    this.gastoService.guardar(this.gasto); //Llamado a funcion diseñada
                                    this.alert = "Registro del gasto correcto";
                                    this.advice = 'Informacion Guardada';
                                    return this.genericAlert("¡Listo!", this.alert, this.advice);
                                });
                            }
                            catch (error) {
                                //Caso de encontrar un error, definir mesaje para alerta y lanzar alerta
                                console.log(error);
                                this.alert = "Ocurrió un error inesperado al registrar el gasto";
                                this.advice = 'Por favor, inténtelo de nuevo';
                                return this.genericAlert('Lo sentimos', this.alert, this.advice);
                            }
                            finally {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        }));
                    }
                    else {
                        this.alert = "Ocurrió un error";
                        this.advice = 'Por favor, llene toda la información requerida';
                        a.dismiss().then(() => console.log('abort presenting'));
                        return this.genericAlert('Lo sentimos', this.alert, this.advice);
                    }
                }));
            });
        });
    }
    genericAlert(header, alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: header,
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar'] //Boton de confirmacion
            });
            yield prompt.present();
        });
    }
};
RegistrarGastoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__.LocalNotifications },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__.GastosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe }
];
RegistrarGastoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-registrar-gasto',
        template: _registrar_gasto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registrar_gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrarGastoPage);



/***/ }),

/***/ 40354:
/*!********************************************!*\
  !*** ./src/app/services/gastos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GastosService": () => (/* binding */ GastosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);





let GastosService = class GastosService {
    // Debugging de la función localmente
    // private regressionUrl = "http://localhost:5000/gestionar-gastos/us-central1/regressionReq";
    constructor(afs, http) {
        this.afs = afs;
        this.http = http;
    }
    guardar(gasto) {
        const refGastos = this.afs.collection("gastos"); //Referencia a la collecion en la que se desea guardar
        if (gasto.id == null) { //En caso de que el objeto recibido no tenga un ID generarlo
            gasto.id = this.afs.createId();
        }
        refGastos.doc(gasto.id).set(Object.assign({}, gasto)); //Con la referencia guardar los datos
    }
    obtenerGastos(idG) {
        return this.afs.collection("gastos", ref => ref.where("id_usuario", "==", idG)).valueChanges(); //Consultar en la coleccion gastos todos los valores correspondientes a un usuario
    }
    obtenerGastosFamilia(idG) {
        return this.afs.collection("gastos", ref => ref.where("id_familia", "==", idG)).valueChanges(); //Consultar en la coleccion gastos todos los valores correspondientes a un usuario
    }
    obtenerGastoPorId(id) {
        return this.afs.collection("gastos", ref => ref.where("id", "==", id)).valueChanges();
    }
    obtenerusrFamilia(idF) {
        //Consultar en la coleccion users todos los usuarios correspondientes a una familia y que se encuentren activos
        return this.afs.collection("users", ref => ref.where("id_familia", "==", idF).where("active", "==", true)).valueChanges();
    }
    getCategories() {
        return this.afs.collection("categories").valueChanges();
    }
    regression(id) {
        let body = new URLSearchParams();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': "*"
            })
        };
        body.set('id_familia', id);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.RG_FUNC_PATH, body, httpOptions).toPromise();
    }
    homeChartData(id) {
        let body = new URLSearchParams();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': "*"
            })
        };
        body.set('id_familia', id);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.HOME_FUNC_PATH, body, httpOptions).toPromise();
    }
};
GastosService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GastosService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], GastosService);



/***/ }),

/***/ 81550:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all/registrar-gasto/registrar-gasto.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXItZ2FzdG8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 21398:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all/registrar-gasto/registrar-gasto.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Registrar Gasto</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content><!--Contenido de pagina-->\r\n  <ion-list><!--Lista de informacion necesaria-->\r\n    <ion-item-divider><!--Separador de grupo de items-->\r\n      <ion-label>Gasto realizado</ion-label><!--Etiqueta-->\r\n    </ion-item-divider>\r\n    <ion-item-group style=\"margin-left: 1%;\"><!--Grupo de items-->\r\n      <ion-item>\r\n        <ion-label>Monto: </ion-label>\r\n        <ion-input placeholder=\"00.00\" inputmode=\"decimal\" type=\"number\" required=\"true\" min=\"0\" [(ngModel)]=\"gasto.monto\"></ion-input><!--Elemento para ingreso, tipo numero, requerido, valor minimo 0 referencia a variable-->\r\n        <ion-icon name=\"cash-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list >\r\n\r\n  <ion-list>\r\n    <ion-item-group>                  \r\n      <ion-item>\r\n        <ion-label>Categoria de gasto</ion-label>\r\n        <ion-select [(ngModel)]=\"gasto.id_categoria\" required=\"true\"><!--Elemento para seleccion de categoria, referencia a variable, requerido-->\r\n          <!--Mediante la selecion de la categoria se asigna un valor, el cual hace referencia a el codigo almacenado en Firebase-->\r\n          <ion-select-option value=\"834IqsQWzMFPdsE7TZKu\">Alimentacion</ion-select-option>\r\n          <ion-select-option value=\"yfXjC94YqUqIbn4zXMjx\">Servicios</ion-select-option>\r\n          <ion-select-option value=\"EjKGtXUIHEnwC0MKrzIn\">Educacion</ion-select-option>\r\n          <ion-select-option value=\"Y2xbbnUeLwCz5UhfMMJZ\">Ocio</ion-select-option>\r\n          <ion-select-option value=\"pZbMomfUFtw8u2aD0sEC\">Transporte</ion-select-option>\r\n          <ion-select-option value=\"NgNS2EM0p4UdeAQlZ4q6\">Vivienda</ion-select-option>\r\n          <ion-select-option value=\"Mp82DGLcR5AUOEk5DSrC\">Salud</ion-select-option>\r\n          <ion-select-option value=\"uPtleC6y1na6ZkkpePAd\">Otros</ion-select-option>\r\n        </ion-select>\r\n        <ion-icon name=\"list-circle\"></ion-icon>\r\n      </ion-item>      \r\n    </ion-item-group>\r\n  </ion-list>\r\n\r\n  <ion-item style=\"margin-top: 1%; margin-bottom: 1%;\">\r\n    <ion-label >Fecha: </ion-label>\r\n    <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"YYYY-MM-DDTHH:mm:ss.sssZ\" [(ngModel)]=\"gasto.fecha\" required=\"true\"></ion-datetime><!--Elemento para ingreso de fecha, tipo date, requerido, referencia a variable, formato de visualizacion y de obtencion-->\r\n  </ion-item>\r\n        \r\n  <ion-item-divider>\r\n    <ion-icon name=\"document-text\"></ion-icon>\r\n    <ion-label>Descripcion (Opcional) </ion-label>      \r\n  </ion-item-divider>\r\n  <ion-item-group>\r\n    <ion-item>        \r\n      <ion-textarea placeholder=\"Razón de la compra...\" inputmode=\"text\" [(ngModel)]=\"gasto.descripcion\"></ion-textarea><!--Elemento para ingreso, tipo texto, referencia a variable-->\r\n    </ion-item>\r\n  </ion-item-group>    \r\n  \r\n  <ion-button expand=\"block\" (click)=\"registrarGasto()\">Registrar</ion-button><!--Boton,llamado a funcion diseñada-->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_registrar-gasto_registrar-gasto_module_ts.js.map