"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_admin_member-spence_member-spence_page_ts"],{

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

/***/ 83769:
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/member-spence/member-spence.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberSpencePage": () => (/* binding */ MemberSpencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _member_spence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-spence.page.html?ngResource */ 78634);
/* harmony import */ var _member_spence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-spence.page.scss?ngResource */ 95029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_domain_gasto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/gasto */ 42719);
/* harmony import */ var src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/gastos.service */ 40354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);











let MemberSpencePage = class MemberSpencePage {
    constructor(route, router, userService, gastoService, //Declaracion de servicios para gastos
    alertCtrl, //Declaracion de servicios para alertas
    auth, //Declaracion de servicios de autenticacion
    loadingController, //Declaracion de servicios de pantalla de progreso
    menuCtrl) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.gastoService = gastoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.gastosF = []; //Vector de objetos 'Gasto', almacenar en formato visualizacion de informacion de firebase
        this.menuCtrl.enable(true); //Menu activado
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        //  Obtener las categorías
                        yield this.gastoService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(cat => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.gastos = this.gastoService.obtenerGastos(this.id); //Utilizacion de servicio para obtener gastos del usuario en base a consulta base de datos
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
                a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga
            });
        });
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar'] //Boton de confirmacion
            });
            yield prompt.present();
        });
    }
};
MemberSpencePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__.GastosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
MemberSpencePage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
MemberSpencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-member-spence',
        template: _member_spence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_member_spence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberSpencePage);



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

/***/ 95029:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/member-spence/member-spence.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItc3BlbmNlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 78634:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/member-spence/member-spence.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Gastos</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div div style=\"float: left; width: 100%;\">\r\n    <div *ngFor=\"let gasto of gastosF\"><!--Bucle con codigo angular para visualizar gastos-->\r\n      <ion-item><!--Item de lista-->        \r\n        <ion-label><!--Etiqueta compuesta-->  \r\n          <div div style=\"float: left; width: 50%; margin-left: 5%;\"> \r\n            <!--Visualizacion de informacion acerca del gasto-->               \r\n            <h2>$ {{ gasto.monto }}</h2>\r\n            <h2>{{ gasto.id_categoria }}</h2>\r\n            <p>{{ gasto.descripcion }}</p>\r\n            <p>{{ gasto.fecha }}</p>\r\n          </div>            \r\n        </ion-label>\r\n      </ion-item>      \r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_admin_member-spence_member-spence_page_ts.js.map