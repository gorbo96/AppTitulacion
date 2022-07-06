"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_home_home_module_ts"],{

/***/ 52517:
/*!*******************************************************!*\
  !*** ./src/app/pages/all/home/home-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 81786);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 61097:
/*!***********************************************!*\
  !*** ./src/app/pages/all/home/home.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52517);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 81786);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 81786:
/*!*********************************************!*\
  !*** ./src/app/pages/all/home/home.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 32500);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 60402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 10177);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/gastos.service */ 40354);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 90449);
/* harmony import */ var src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/presupuestos.service */ 1931);













let HomePage = class HomePage {
    constructor(menuCtrl, auth, router, loadingController, alertCtrl, userService, gastoService, localNotifications, presupuestoService, routerOutlet) {
        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.gastoService = gastoService;
        this.localNotifications = localNotifications;
        this.presupuestoService = presupuestoService;
        this.routerOutlet = routerOutlet;
        this.loaded = false;
        this.presp = 0.0; //Variable para el presupuesto total de la familia
        this.prespGst = 0.0; //Variable para el monto restante del presupuesto total de la familia
        this.gastoTot = 0.0; //Variable para el total de los gastos de la familia
        this.routerOutlet.swipeGesture = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    // Obtención del usuario que actualmente tiene la sesión abierta
                    yield this.auth.getUserAuth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        // Control de errores
                        try {
                            this.sessionEmail = user.email;
                            this.menuCtrl.enable(true); // Visualizar el menú solo al iniciar sesión
                            // Obtener los datos del usurio de FireStore dado- 
                            //    el email proporcionado por la API de autentificación
                            this.sessionUser = yield this.auth.getUsuario(this.sessionEmail);
                            yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                //  Actualizar la págicna con las opciones del mennu de acuerdo a su rol
                                if (!this.auth.sideMenu) {
                                    window.location.reload();
                                }
                                // Verificar si el usuario está asignado a una familia
                                if (res[0].id_familia === '-1') {
                                    this.router.navigate(["/login"]);
                                }
                                //  Todos los gastos familiares serán mostrados                
                                this.gastosHome = this.gastoService.obtenerGastosFamilia(res[0].id_familia);
                                // Verificar si el usuario tiene un rolde administrador
                                if (res[0].role == "A") {
                                    this.startMes = "Saludos, " + res[0].displayName + ". Comienza a ahorra contigo y tu familia. Tu eres el jefe, puedes monitorear los gastos.";
                                }
                                else {
                                    this.startMes = "Saludos, " + res[0].displayName + ". Comienza a ahorra contigo y tu familia.";
                                }
                                this.gastosHome.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((gasto) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    var sumatoria = 0.0;
                                    for (let index = 0; index < gasto.length; index++) {
                                        var aux = new Date(gasto[index].fecha);
                                        var actual = new Date();
                                        if (aux.getDate() == actual.getDate()) {
                                            sumatoria += gasto[index].monto;
                                        }
                                    }
                                    this.localNotifications.schedule({
                                        text: "Gastos del dia " + sumatoria,
                                        trigger: { at: new Date() },
                                    });
                                    this.entrada(a);
                                }));
                            }));
                        }
                        catch (error) {
                            console.log(error);
                            this.alert = "Ocurrió un error al cargar sus datos";
                            this.advice = 'Por favor, inténtelo de nuevo';
                            this.genericAlert(this.alert, this.advice);
                            this.router.navigate(["/login"]);
                        }
                        finally {
                            //  Terminar la carga de la página
                            a.dismiss().then(() => console.log('abort presenting'));
                        }
                    }));
                }));
            });
        });
    }
    entrada(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                yield this.gastoService.homeChartData(user[0].id_familia).then((res) => {
                    if (this.doughnutChart != null) { //En caso de que el grafico este inicializado
                        this.doughnutChart.destroy(); //Destruir la instancia
                    }
                    this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.doughnutCanvas.nativeElement, {
                        type: 'polarArea',
                        options: {
                            scales: {
                                r: {
                                    grid: {
                                        color: 'rgb(38, 38, 38)'
                                    }
                                }
                            }
                        },
                        data: {
                            labels: ['Presupuesto', 'Presupuesto Restante', 'Gastos Totales'],
                            datasets: [{
                                    label: 'Cantidad en Dolares $',
                                    data: [res.presp, res.prespGst, res.gastoTot],
                                    backgroundColor: [
                                        //Colores definidos para las partes del area a graficar
                                        'rgba(255, 159, 64, 0.4)',
                                        'rgba(54, 162, 235, 0.4)',
                                        'rgba(255, 99, 132, 0.4)'
                                    ],
                                    borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                                    hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                                    hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                                    borderWidth: [1, 1, 1],
                                    hoverBorderWidth: [1, 1, 1] //Tamaño de borde de las partes, sin enfoque                       
                                }]
                        }
                    });
                    this.loaded = true;
                    a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga
                }).catch(err => {
                    console.log('HTTP Error', err);
                    this.alert = "Ocurrió un error al cargar sus datos o no se encontraron datos de gastos";
                    this.advice = 'Por favor, inténtelo de nuevo';
                    a.dismiss().then(() => console.log('abort presenting'));
                    this.genericAlert(this.alert, this.advice);
                });
            }));
        });
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar'] //Boton de confirmacion
            });
            yield prompt.present();
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    cargarNotificaciones() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_5__.GastosService },
    { type: _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__.LocalNotifications },
    { type: src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_7__.PresupuestosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet }
];
HomePage.propDecorators = {
    doughnutCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['doughnutCanvas',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



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

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 64580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);








let UserService = class UserService {
    constructor(afAuth, afs, platform, googlePlus, router, angularFireStorage) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.router = router;
        this.angularFireStorage = angularFireStorage;
    }
    updateUserProfileData(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.afs.collection("users").doc(user.uid).update({ description: user.description, displayName: user.displayName, email: user.email });
        });
    }
    getFamilyMembers(fid) {
        return this.afs.collection("users", ref => ref.where("id_familia", "==", fid).where("active", "==", true)).valueChanges();
    }
    getUserbyId(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.afs.collection("users", ref => ref.where("uid", "==", uid)).valueChanges();
        });
    }
    savePhotoURL(user, path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.afs.collection("users").doc(user).update({ photoURL: path });
        });
    }
    deletePreviousPhoto(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.angularFireStorage.storage.refFromURL(path).delete();
        });
    }
    changeFamily(user, family) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.afs.collection("users").doc(user.uid).update({ id_familia: family.id });
        });
    }
    deleteFamily(user, family) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.afs.collection("users").doc(user).update({ id_familia: family });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 60402:
/*!**********************************************************!*\
  !*** ./src/app/pages/all/home/home.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 32500:
/*!**********************************************************!*\
  !*** ./src/app/pages/all/home/home.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Inicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-card-content *ngIf=\"loaded\" style=\"margin-left: 5%; margin-top: 5%; margin-right: 5%; background-color: #001230e8; border-radius: 20px;\">\r\n    <h1>¡Bienvenido!</h1>   \r\n    <p>{{startMes}}</p>    \r\n  </ion-card-content>\r\n\r\n  <div class=\"ion-padding\">\r\n    \r\n    <ion-card-header>\r\n      <ion-card-title *ngIf=\"loaded\">Resumen mensual</ion-card-title>\r\n      <ion-card-subtitle *ngIf=\"loaded\"> Presupuesto globa vs. gastos</ion-card-subtitle>       \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <canvas #doughnutCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas>        \r\n    </ion-card-content>\r\n  \r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_home_home_module_ts.js.map