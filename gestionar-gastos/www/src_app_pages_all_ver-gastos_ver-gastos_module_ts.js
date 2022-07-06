"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_ver-gastos_ver-gastos_module_ts"],{

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

/***/ 4973:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all/ver-gastos/ver-gastos-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerGastosPageRoutingModule": () => (/* binding */ VerGastosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ver_gastos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-gastos.page */ 87763);




const routes = [
    {
        path: '',
        component: _ver_gastos_page__WEBPACK_IMPORTED_MODULE_0__.VerGastosPage
    }
];
let VerGastosPageRoutingModule = class VerGastosPageRoutingModule {
};
VerGastosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerGastosPageRoutingModule);



/***/ }),

/***/ 96745:
/*!***********************************************************!*\
  !*** ./src/app/pages/all/ver-gastos/ver-gastos.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerGastosPageModule": () => (/* binding */ VerGastosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ver_gastos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-gastos-routing.module */ 4973);
/* harmony import */ var _ver_gastos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-gastos.page */ 87763);







let VerGastosPageModule = class VerGastosPageModule {
};
VerGastosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ver_gastos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerGastosPageRoutingModule
        ],
        declarations: [_ver_gastos_page__WEBPACK_IMPORTED_MODULE_1__.VerGastosPage]
    })
], VerGastosPageModule);



/***/ }),

/***/ 87763:
/*!*********************************************************!*\
  !*** ./src/app/pages/all/ver-gastos/ver-gastos.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerGastosPage": () => (/* binding */ VerGastosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ver_gastos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-gastos.page.html?ngResource */ 3245);
/* harmony import */ var _ver_gastos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-gastos.page.scss?ngResource */ 26273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_domain_gasto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/gasto */ 42719);
/* harmony import */ var src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/gastos.service */ 40354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);










let VerGastosPage = class VerGastosPage {
    constructor(route, router, gastoService, //Declaracion de servicios para gastos
    alertCtrl, //Declaracion de servicios para alertas
    auth, //Declaracion de servicios de autenticacion
    loadingController, //Declaracion de servicios de pantalla de progreso
    menuCtrl) {
        this.route = route;
        this.router = router;
        this.gastoService = gastoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.filter = "default";
        this.filterDate = "todo";
        this.gastosF = []; //Vector de objetos 'Gasto', almacenar en formato visualizacion de informacion de firebase
        this.menuCtrl.enable(true); //Menu activado
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser = yield this.auth.getUserAuth(); //Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase    
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        //  Obtener las categorías
                        yield this.gastoService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(cat => {
                            this.categories = cat;
                            this.obtenerGastosUsr(a); //Llamado a funcion diseñada
                        }, err => {
                            console.log('HTTP Error', err);
                            this.alert = "Ocurrió un error al cargar sus datos";
                            this.advice = 'Por favor, inténtelo de nuevo';
                            this.genericAlert(this.alert, this.advice);
                        }, () => console.log('HTTP request stream done'));
                    }
                    catch (error) {
                        //Caso de encontrar un error, definir mesaje para alerta y lanzar alerta
                        console.log(error);
                        this.alert = "Ocurrió un error al cargar sus datos";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga
                        this.genericAlert(this.alert, this.advice);
                    }
                }));
            });
        });
    }
    obtenerGastosUsr(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.usuario = yield this.auth.getUsuario(user.email); //Utilizacion de servicio para obtener usuario en base a consulta base de datos        
                this.usuario.forEach((element) => {
                    this.gastos = this.gastoService.obtenerGastos(element[0].uid); //Utilizacion de servicio para obtener gastos del usuario en base a consulta base de datos
                    this.gastos.forEach(element => {
                        for (let index = 0; index < element.length; index++) {
                            let aux = new src_app_domain_gasto__WEBPACK_IMPORTED_MODULE_2__.Gasto(); //Variable auxilizar de clase gasto
                            //Asignacion de valores correspondientes a la lectura desde Firebase, con cambios para la visualizacion
                            aux.id = element[index].id;
                            aux.monto = element[index].monto;
                            aux.id_usuario = element[index].id_usuario;
                            //Cambio de contenido de variabe segun categoria
                            this.categories.forEach(cat => {
                                if (cat.id === element[index].id_categoria) {
                                    aux.id_categoria = cat.name;
                                }
                            });
                            aux.fecha = element[index].fecha;
                            aux.descripcion = element[index].descripcion;
                            this.gastosF.push(aux); //Adicion a vector para posterio lectura
                        }
                        this.filteredContent = this.gastosF;
                        a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga
                    });
                });
            }));
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
    filterContent() {
        if (this.filter === "default") {
            this.filteredContent = this.gastosF;
        }
        else {
            this.filteredContent = this.gastosF.filter(data => data.id_categoria == this.filter);
        }
    }
    filterContentDate() {
        if (this.filterDate === "mes") {
            this.filtroAux = this.filteredContent;
            this.filteredContent = this.filteredContent.filter(data => (new Date(data.fecha)).getMonth() == (new Date).getMonth());
        }
        else {
            this.filteredContent = this.filtroAux;
        }
    }
};
VerGastosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__.GastosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController }
];
VerGastosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ver-gastos',
        template: _ver_gastos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ver_gastos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerGastosPage);



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
    categoryData(id) {
        let body = new URLSearchParams();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': "*"
            })
        };
        body.set('id_familia', id);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CATEGORY_FUNC_PATH, body, httpOptions).toPromise();
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

/***/ 26273:
/*!**********************************************************************!*\
  !*** ./src/app/pages/all/ver-gastos/ver-gastos.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".filter {\n  --background: #001230e8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlci1nYXN0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSiIsImZpbGUiOiJ2ZXItZ2FzdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAxMjMwZTggIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 3245:
/*!**********************************************************************!*\
  !*** ./src/app/pages/all/ver-gastos/ver-gastos.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ver Gastos</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item class=\"filter\">\r\n    <ion-label>Filtrar</ion-label>\r\n    <ion-select class=\"custom-options\" interface=\"popover\" (ionChange)=\"filterContent()\" [(ngModel)]=\"filter\"><!--Elemento para seleccion de categoria, referencia a variable, requerido-->\r\n      <!--Mediante la selecion de la categoria se asigna un valor, el cual hace referencia a el codigo almacenado en Firebase-->\r\n      <ion-select-option value=\"default\">Todo</ion-select-option>\r\n      <ion-select-option value=\"Alimentación\">Alimentación</ion-select-option>\r\n      <ion-select-option value=\"Servicios\">Servicios</ion-select-option>\r\n      <ion-select-option value=\"Educación\">Educación</ion-select-option>\r\n      <ion-select-option value=\"Ocio\">Ocio</ion-select-option>\r\n      <ion-select-option value=\"Transporte\">Transporte</ion-select-option>\r\n      <ion-select-option value=\"Vivienda\">Vivienda</ion-select-option>\r\n      <ion-select-option value=\"Salud\">Salud</ion-select-option>\r\n      <ion-select-option value=\"Otros\">Otros</ion-select-option>\r\n    </ion-select>\r\n\r\n    <ion-select icon=\"filter-outline\" class=\"custom-options\" interface=\"popover\" (ionChange)=\"filterContentDate()\" [(ngModel)]=\"filterDate\"><!--Elemento para seleccion de categoria, referencia a variable, requerido-->\r\n      <!--Mediante la selecion de la categoria se asigna un valor, el cual hace referencia a el codigo almacenado en Firebase-->\r\n      <ion-select-option value=\"todo\">Todo el tiempo</ion-select-option>\r\n      <ion-select-option value=\"mes\">Último mes</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>  \r\n\r\n  <div div style=\"float: left; width: 100%;\">\r\n    <div *ngFor=\"let gasto of filteredContent\"><!--Bucle con codigo angular para visualizar gastos-->\r\n      <ion-item><!--Item de lista-->        \r\n        <ion-label><!--Etiqueta compuesta-->  \r\n          <div div style=\"float: left; width: 50%; margin-left: 5%;\"> \r\n            <!--Visualizacion de informacion acerca del gasto-->               \r\n            <h2>$ {{ gasto.monto }}</h2>\r\n            <h2>{{ gasto.id_categoria }}</h2>\r\n            <p>{{ gasto.descripcion }}</p>\r\n            <p>{{ gasto.fecha }}</p>\r\n          </div>            \r\n        </ion-label>\r\n      </ion-item>      \r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_ver-gastos_ver-gastos_module_ts.js.map