"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_profile_profile_module_ts"],{

/***/ 92156:
/*!*****************************************************!*\
  !*** ./src/app/pages/all/profile/file-size.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSizePipe": () => (/* binding */ FileSizePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
let SIZE_UNITS_LARGE = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
let FileSizePipe = class FileSizePipe {
    transform(sizeBytes, sizeForm) {
        let sizeUnits = sizeForm ? SIZE_UNITS_LARGE : SIZE_UNITS;
        let sizeRoundVal = Math.round(Math.log(sizeBytes) / Math.log(1024));
        sizeRoundVal = Math.min(sizeRoundVal, sizeUnits.length - 1);
        let size = sizeBytes / Math.pow(1024, sizeRoundVal);
        let sizeFormat = Math.round(size * 100) / 100;
        let sizeUnit = sizeUnits[sizeRoundVal];
        return `${sizeFormat} ${sizeUnit}`;
    }
};
FileSizePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'fileSize'
    })
], FileSizePipe);



/***/ }),

/***/ 48590:
/*!*************************************************************!*\
  !*** ./src/app/pages/all/profile/profile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 74467);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 24481:
/*!*****************************************************!*\
  !*** ./src/app/pages/all/profile/profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 48590);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 74467);
/* harmony import */ var _file_size_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-size.pipe */ 92156);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, _file_size_pipe__WEBPACK_IMPORTED_MODULE_2__.FileSizePipe]
    })
], ProfilePageModule);



/***/ }),

/***/ 74467:
/*!***************************************************!*\
  !*** ./src/app/pages/all/profile/profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 5656);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 31649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_domain_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/user */ 66319);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);












let ProfilePage = class ProfilePage {
    constructor(auth, loadingController, alertCtrl, router, angularFirestore, angularFireStorage, userService) {
        this.auth = auth;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.angularFirestore = angularFirestore;
        this.angularFireStorage = angularFireStorage;
        this.userService = userService;
        this.googleProvider = false;
        this.UserUpdate = new src_app_domain_user__WEBPACK_IMPORTED_MODULE_3__.User();
        this.isImgUploading = false;
        this.isImgUploaded = false;
        this.ngFirestoreCollection = angularFirestore.collection('filesCollection');
        this.files = this.ngFirestoreCollection.valueChanges();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Obtención del usuario que actualmente tiene la sesión abierta
            this.sessionUser = yield this.auth.getUserAuth();
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            // Obtener los datos del usurio de FireStore dado- 
                            //    el email proporcionado por la API de autentificación
                            this.aux = yield this.auth.getUsuario(user.email);
                            yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(res => {
                                this.name = res[0].displayName;
                                this.email = res[0].email;
                                this.photo = res[0].photoURL;
                                this.description = res[0].description;
                                this.id = res[0].uid;
                                if (res[0].role === 'A') {
                                    this.role = 'Jefe de familia';
                                }
                                else {
                                    this.role = 'Miembro de familia';
                                }
                                if (res[0].provider === 'google') {
                                    this.googleProvider = true;
                                }
                                a.dismiss().then(() => console.log('abort presenting'));
                            });
                        }));
                    }
                    catch (error) {
                        console.log('ERROR al cargar datos');
                        this.alert = "Ocurrió un error al cargar sus datos";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        a.dismiss().then(() => console.log('abort presenting'));
                        this.genericAlert(this.alert, this.advice);
                    }
                }));
            });
        });
    }
    Onlogout() {
        this.auth.salirCuenta();
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    fileUpload(event) {
        const file = event.item(0);
        if (file.type.split('/')[0] !== 'image') {
            console.log('File type is not supported!');
            this.alert = "Ocurrió un error al subir la imagen";
            this.advice = 'Por favor, inténtelo de nuevo';
            this.genericAlert(this.alert, this.advice);
            return;
        }
        this.isImgUploading = true;
        this.isImgUploaded = false;
        this.FileName = file.name;
        const fileStoragePath = `profilePic/${new Date().getTime()}_${file.name}`;
        const imageRef = this.angularFireStorage.ref(fileStoragePath);
        this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);
        this.progressNum = this.ngFireUploadTask.percentageChanges();
        try {
            this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.fileUploadedPath = imageRef.getDownloadURL();
                this.fileUploadedPath.subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.auth.getUserAuth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.aux = yield this.auth.getUsuario(user.email);
                        yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                if (resp !== 'https://firebasestorage.googleapis.com/v0/b/gestionar-gastos.appspot.com/o/default.png?alt=media&token=e8ff50d0-3177-4b40-acf6-d29127a6baf3') {
                                    yield this.userService.deletePreviousPhoto(res[0].photoURL);
                                }
                            }
                            catch (error) {
                                console.log('ERROR: Google photo URL ');
                            }
                            yield this.userService.savePhotoURL(res[0].uid, resp);
                            window.location.reload();
                        }));
                    }));
                    console.log(resp);
                    this.isImgUploading = false;
                    this.isImgUploaded = true;
                }), error => {
                    console.log(error);
                });
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(snap => {
                this.FileSize = snap.totalBytes;
            }));
        }
        catch (error) {
            console.log('ERROR: No se pudo subir la imagen');
            this.alert = "Ocurrió un error al subir la imagen";
            this.advice = 'Por favor, inténtelo de nuevo';
            this.genericAlert(this.alert, this.advice);
        }
    }
    onUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        if (this.email !== "" && this.name !== "" && this.description !== "") {
                            this.UserUpdate.uid = this.id;
                            this.UserUpdate.email = this.email;
                            this.UserUpdate.displayName = this.name;
                            this.UserUpdate.description = this.description;
                            const validation = this.validateEmail(this.email);
                            if (validation) {
                                this.auth.updateUserProfileData(this.UserUpdate);
                            }
                            else {
                                console.log('ERROR: No se pudo actualizar');
                                this.alert = "El e-mail ingresado no es correcto";
                                this.advice = 'Por favor, revise la sintaxis del correo electrónico';
                                this.genericAlert(this.alert, this.advice);
                            }
                        }
                        else {
                            console.log('ERROR: No se pudo actualizar');
                            this.alert = "Información vacía";
                            this.advice = 'Por favor, verifique que exista información en todos los campos';
                            this.genericAlert(this.alert, this.advice);
                        }
                    }
                    catch (error) {
                        this.alert = "Ocurrió un error al actualizar sus datos";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        this.genericAlert(this.alert, this.advice);
                    }
                    finally {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                }));
            });
        });
    }
    validateEmail(email) {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: [
                    {
                        text: 'Accept',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.router.navigate(["/profile"]);
                        })
                    }
                ]
            });
            yield prompt.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorage },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-home',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



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

/***/ 31649:
/*!****************************************************************!*\
  !*** ./src/app/pages/all/profile/profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('login.jpg') 0 0/100% 100% no-repeat;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#label {\n  color: #919594;\n  text-align: inherit;\n  padding-left: 7%;\n}\n\n#botonIniciar {\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n#file-input {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2JhY2tncm91bmQvbG9naW4uanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAgMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jbGFiZWwge1xyXG5cclxuICAgIGNvbG9yOiAjOTE5NTk0O1xyXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmctbGVmdDogNyU7XHJcbn1cclxuXHJcbiNib3RvbkluaWNpYXJ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNzJiZGEzICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmaWxlLWlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 5656:
/*!****************************************************************!*\
  !*** ./src/app/pages/all/profile/profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" >\r\n\r\n  <ion-card style=\"margin-top: 25%; background-color: #001230e8; border-radius: 20px;\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n\r\n        <ion-col >\r\n\r\n          <p id=\"label\" ><img src=\"{{photo}}\" alt=\"imguser\"\r\n            referrerpolicy=\"no-referrer\">\r\n          </p>\r\n\r\n          <ion-item style=\"text-align: center;\" color=\"transparent\">\r\n            <ion-input [(ngModel)]=\"name\" placeholder=\"Espere...\"></ion-input>\r\n          </ion-item>\r\n\r\n          <!--<ion-button *ngIf=\"!isImgUploading && !isImgUploaded\" size=\"small\" color=\"success\" style=\"border-radius: 100px; margin-left: 3%;\">\r\n            <ion-icon  name=\"cloud-upload-outline\" style=\"margin-right: 1%;\"></ion-icon> \r\n            <input type=\"file\" class=\"upload\" (change)=\"fileUpload($event.target.files)\" />            \r\n          </ion-button>-->\r\n\r\n        </ion-col>\r\n\r\n\r\n      </ion-row>     \r\n      \r\n      <ion-row >\r\n        <p id=\"label\" ></p>\r\n        <p id=\"label\" ></p>\r\n        \r\n        <ion-item style=\"text-align: center;\" color=\"transparent\" lines=\"none\">     </ion-item>\r\n        <ion-item style=\"text-align: center;\" color=\"transparent\" lines=\"none\">     </ion-item>\r\n\r\n        <div size=\"small\" style=\"text-align: center;\">\r\n          <input type=\"file\" (change)=\"fileUpload($event.target.files)\" id=\"file-input\" style=\"opacity: 0\">\r\n          <button ion-button (change)=\"fileUpload($event.target.files)\">Cambiar imagen\r\n            <ion-icon no-lines color=\"success\" name=\"cloud-upload-outline\" style=\"margin-right: 1%;\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </ion-row>\r\n      \r\n    </ion-grid>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card style=\"background-color: #001230e8; border-radius: 20px;\" *ngIf=\"isImgUploading && !isImgUploaded\">\r\n\r\n    <ion-card-content>\r\n      <div *ngIf=\"progressNum | async as percentage\">\r\n        Subiendo... {{ percentage | number }}%\r\n        <ion-progress-bar value=\"{{ percentage / 100 }}\"></ion-progress-bar>\r\n      </div>\r\n      <div *ngIf=\"progressSnapshot | async as pSnapshot\">\r\n        Image size: {{ pSnapshot.totalBytes | fileSize }} Transfered:\r\n        {{ pSnapshot.bytesTransferred | fileSize }}\r\n        <div *ngIf=\"progressSnapshot && pSnapshot.bytesTransferred != pSnapshot.totalBytes\">\r\n          <ion-button color=\"danger\" fill=\"outline\" size=\"small\" (click)=\"ngFireUploadTask.cancel()\">Cancel</ion-button>\r\n          <ion-button color=\"secondary\" fill=\"outline\" size=\"small\" (click)=\"ngFireUploadTask.pause()\">Pause\r\n          </ion-button>\r\n          <ion-button color=\"dark\" fill=\"outline\" size=\"small\" (click)=\"ngFireUploadTask.resume()\" class=\"button\">Resume\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card style=\"background-color: #001230e8; border-radius: 20px;\">\r\n\r\n    <ion-grid>\r\n\r\n      <ion-item color=\"transparent\">\r\n        <ion-input [(ngModel)]=\"description\" placeholder=\"Espere...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"transparent\">\r\n        <ion-label>Email:</ion-label>\r\n        <ion-input [(ngModel)]=\"email\" [disabled]=\"googleProvider\" placeholder=\"Espere...\" type = \"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"transparent\">\r\n        <ion-label>Cuenta:</ion-label>\r\n        <ion-input [(ngModel)]=\"role\" disabled=\"true\" placeholder=\"Espere...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <div style=\"text-align: center\">\r\n        <ion-button  id=\"botonIniciar\" color=\"success\"  (click)=\"onUpdate()\">Actualizar</ion-button>\r\n      </div>\r\n      \r\n    </ion-grid> \r\n\r\n\r\n  </ion-card>\r\n\r\n  <div style=\"text-align: center\">\r\n    <ion-button  id=\"botonIniciar\" color=\"success\"  (click)=\"Onlogout()\">Log out</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_profile_profile_module_ts.js.map