"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_login_login_module_ts"],{

/***/ 65752:
/*!*********************************************************!*\
  !*** ./src/app/pages/all/login/login-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3082);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 71695:
/*!*************************************************!*\
  !*** ./src/app/pages/all/login/login.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 65752);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3082);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3082:
/*!***********************************************!*\
  !*** ./src/app/pages/all/login/login.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 14964);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 72272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_domain_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/user */ 66319);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);












let LoginPage = class LoginPage {
    constructor(auth, AuthenticationService, router, alertCtrl, loadingController, menuCtrl, userService) {
        this.auth = auth;
        this.AuthenticationService = AuthenticationService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.User = new src_app_domain_user__WEBPACK_IMPORTED_MODULE_2__.User();
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.onDestroy.next();
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        yield this.AuthenticationService.getUserAuth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                this.sessionUser = yield this.AuthenticationService.getUsuario(user.email);
                                yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                    if (res[0].id_familia !== "-1") {
                                        this.router.navigate(["/home"]);
                                    }
                                    else {
                                        this.router.navigate(["/createfamily"]);
                                    }
                                }));
                            }
                            catch (error) {
                                console.log("NO USER LOGGED IN");
                            }
                            finally {
                                //  Terminar la carga de la página
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                        }));
                    }
                    catch (error) {
                        console.log("NO USER LOGGED IN");
                    }
                    finally {
                        //  Terminar la carga de la página
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                }));
            });
        });
    }
    logeo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if ((this.User.email === null || this.User.email === undefined) ||
                (this.User.password === null || this.User.password === undefined)) {
                this.alert = "Ocurrió un error";
                this.advice = 'Por favor, ingrese los datos necesarios';
                //  Mostrar mensaje de al usuario
                return this.genericAlert(this.alert, this.advice);
            }
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        // Iniciar sesión con el usuario ingresado
                        yield this.AuthenticationService.onLogin(this.User);
                        // Garantizar una conexión estable con Firebase implementando un regtraso
                        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.AuthenticationService.currentUser == null ||
                                this.AuthenticationService.currentUser == undefined) {
                                //console.log('HTTP Error', err);
                                this.alert = "Ocurrió un error al cargar sus datos";
                                this.advice = 'Correo electrónico o contraseña incorrecta';
                                //  Terminar la carga de la página
                                a.dismiss().then(() => console.log('abort presenting'));
                                //  Mostrar mensaje de al usuario
                                return this.genericAlert(this.alert, this.advice);
                            }
                            // Verificación del logeo para control de excepciones si no se ingresan datos
                            if (this.User.email && this.User.password) {
                                // Obtener los datos del usurio de FireStore dado- 
                                //    el email proporcionado por la API de autentificación
                                this.user2 = yield this.AuthenticationService.getUsuario(this.User.email);
                                // Control de errores
                                try {
                                    yield this.user2.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(res => {
                                        this.AuthenticationService.timeStampLogin(res[0]);
                                        this.aux = res[0];
                                        if (res[0].id_familia === "-1" && res.length > 0) {
                                            a.dismiss().then(() => console.log('abort presenting'));
                                            this.router.navigate(["/createfamily"]);
                                        }
                                        else if (res[0].id_familia !== "-1" && res.length > 0) {
                                            a.dismiss().then(() => console.log('abort presenting'));
                                            this.router.navigate(["/home"]);
                                        }
                                    });
                                }
                                catch (error) {
                                    this.alert = "Ocurrió un error con el inicio de sesión";
                                    this.advice = 'Por favor, inténtelo de nuevo';
                                    //  Terminar la carga de la página
                                    a.dismiss().then(() => console.log('abort presenting'));
                                    //  Mostrar mensaje de al usuario
                                    this.genericAlert(this.alert, this.advice);
                                }
                                finally {
                                    a.dismiss().then(() => console.log('abort presenting'));
                                }
                            }
                            else {
                                console.log("error en el loggeo");
                                this.alert = "Los Datos ingresados son incorrectos";
                                this.advice = 'Por favor, ingréselos de nuevo';
                                //  Terminar la carga de la página
                                a.dismiss().then(() => console.log('abort presenting'));
                                //  Mostrar mensaje de al usuario
                                this.genericAlert(this.alert, this.advice);
                            }
                        }), 4000);
                    }
                    catch (error) {
                        this.alert = "Ocurrió un error con el inicio de sesión";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        //  Terminar la carga de la página
                        a.dismiss().then(() => console.log('abort presenting'));
                        //  Mostrar mensaje de al usuario
                        this.genericAlert(this.alert, this.advice);
                    }
                    finally {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                }));
            });
        });
    }
    googleLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        //  Iniciamos sesión usando Google          
                        this.user2 = yield this.AuthenticationService.googleLogin();
                        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.AuthenticationService.updateUserData(this.user2, 'google');
                            this.user2 = yield this.AuthenticationService.getUsuario(this.user2._delegate.email);
                            yield this.user2.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(res => {
                                this.aux = res[0];
                                if (this.aux.id_familia === "-1") {
                                    a.dismiss().then(() => console.log('abort presenting'));
                                    this.router.navigate(["/createfamily"]);
                                }
                                else {
                                    a.dismiss().then(() => console.log('abort presenting'));
                                    this.router.navigate(["/home"]);
                                }
                            });
                        }), 2000);
                    }
                    catch (error) {
                        console.log(error);
                        this.alert = "Ocurrió un error inesperado en con el inicio de sesión";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        //  Terminar la carga de la página
                        a.dismiss().then(() => console.log('abort presenting'));
                        //  Mostrar mensaje de al usuario
                        this.genericAlert(this.alert, this.advice);
                    }
                }));
            });
        });
    }
    emailPasswordLogin() {
        let data = this.AuthenticationService.emailPasswordLogin(this.email, this.password);
        console.log('Response:\n', data);
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar']
            });
            yield prompt.present();
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 72272:
/*!************************************************************!*\
  !*** ./src/app/pages/all/login/login.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('login_logo.jpg') 0 0/100% 100% no-repeat;\n}\n\n#input {\n  background: #001230e8;\n  border-radius: 14px;\n  margin-bottom: 8px;\n}\n\n.sc-ion-input-ios-h {\n  padding-left: 17px !important;\n}\n\n#label {\n  margin-inline: 17%;\n  padding-top: 74%;\n  text-align: center;\n  color: white;\n  --padding-top: 74%;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n#botonIniciar {\n  margin-inline: 36%;\n  margin-bottom: 7%;\n  text-align: center;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n#botonIniciar2 {\n  margin-inline: 27%;\n  font-size: 12px;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n#label2 {\n  margin-inline: 5%;\n  font-size: 11px;\n  color: #69706e;\n  --padding-top: 74%;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n#botonIniciar3 {\n  font-size: 10px;\n  --ion-color-base: #7b8783 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQUhKOztBQU1BO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFRQTtFQUdJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUFQSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYmFja2dyb3VuZC9sb2dpbl9sb2dvLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbiNpbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDEyMzBlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4jbGFiZWx7XHJcbiAgICBtYXJnaW4taW5saW5lOiAxNyU7IFxyXG4gICAgcGFkZGluZy10b3A6IDc0JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA3NCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG5cclxuI2JvdG9uSW5pY2lhcntcclxuICAgXHJcbiAgICBtYXJnaW4taW5saW5lOiAzNiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNzJiZGEzICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNib3RvbkluaWNpYXIye1xyXG4gICBcclxuICAgIG1hcmdpbi1pbmxpbmU6IDI3JTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM3MmJkYTMgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2xhYmVsMntcclxuICAgIG1hcmdpbi1pbmxpbmU6IDUlOyBcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjNjk3MDZlO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNzQlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcblxyXG4jYm90b25JbmljaWFyM3tcclxuICAgXHJcblxyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzdiODc4MyAgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 14964:
/*!************************************************************!*\
  !*** ./src/app/pages/all/login/login.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" >\r\n\r\n   \r\n\r\n\r\n  <ion-grid  style=\" margin-top: 70%;\">\r\n       <ion-input id=\"input\" placeholder=\"Email: usuario@mail.com\" type = \"email\" [(ngModel)]=\"User.email\" ></ion-input>\r\n    <ion-input  id = \"input\" type = \"Password\" placeholder= \"Contraseña: ******\" [(ngModel)]=\"User.password\" ></ion-input>\r\n  </ion-grid>\r\n\r\n  <ion-button id=\"botonIniciar\" color=\"success\"  (click)=\"logeo()\" >      Ingresar         </ion-button>\r\n  <ion-label id=\"label\"> _________________________ </ion-label>\r\n  \r\n  <ion-fab-button style=\"margin-left: 39%; margin-top: 5%; text-align: center;\" ><ion-icon name=\"logo-google\" (click)=\"googleLogin()\" ></ion-icon></ion-fab-button>\r\n \r\n\r\n\r\n  <ion-grid style=\" margin-top: 5%; text-align: center;\">\r\n    <ion-label id=\"label2\">¿No tienes una cuenta? </ion-label>\r\n    <ion-button id=\"botonIniciar3\"  color=\"success\" routerLink= \"/signup\">Crea una</ion-button>\r\n    \r\n  </ion-grid>\r\n  \r\n  \r\n  <!--<ion-fab-button ><ion-icon name=\"log-out\" (click)=\" logout()\" ></ion-icon></ion-fab-button>-->\r\n \r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_login_login_module_ts.js.map