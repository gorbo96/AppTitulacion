"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_createfamily_createfamily_module_ts"],{

/***/ 43178:
/*!***********************************************************************!*\
  !*** ./src/app/pages/all/createfamily/createfamily-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatefamilyPageRoutingModule": () => (/* binding */ CreatefamilyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _createfamily_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createfamily.page */ 52195);




const routes = [
    {
        path: '',
        component: _createfamily_page__WEBPACK_IMPORTED_MODULE_0__.CreatefamilyPage
    }
];
let CreatefamilyPageRoutingModule = class CreatefamilyPageRoutingModule {
};
CreatefamilyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatefamilyPageRoutingModule);



/***/ }),

/***/ 69716:
/*!***************************************************************!*\
  !*** ./src/app/pages/all/createfamily/createfamily.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatefamilyPageModule": () => (/* binding */ CreatefamilyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _createfamily_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createfamily-routing.module */ 43178);
/* harmony import */ var _createfamily_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createfamily.page */ 52195);







let CreatefamilyPageModule = class CreatefamilyPageModule {
};
CreatefamilyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _createfamily_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatefamilyPageRoutingModule
        ],
        declarations: [_createfamily_page__WEBPACK_IMPORTED_MODULE_1__.CreatefamilyPage]
    })
], CreatefamilyPageModule);



/***/ }),

/***/ 52195:
/*!*************************************************************!*\
  !*** ./src/app/pages/all/createfamily/createfamily.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatefamilyPage": () => (/* binding */ CreatefamilyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _createfamily_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createfamily.page.html?ngResource */ 7937);
/* harmony import */ var _createfamily_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createfamily.page.scss?ngResource */ 48919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_domain_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/family */ 10836);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let CreatefamilyPage = class CreatefamilyPage {
    constructor(router, auth, alertCtrl, activate, menuCtrl, loadingController) {
        this.router = router;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.activate = activate;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.fam = new src_app_domain_family__WEBPACK_IMPORTED_MODULE_3__.Familia();
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Obtención del usuario que actualmente tiene la sesión abierta
            this.sessionUser = yield this.auth.getUserAuth();
        });
    }
    crear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if ((this.fam.nombre === null || this.fam.nombre === undefined) ||
                (this.fam.presupuesto_global === null || this.fam.presupuesto_global === undefined) ||
                (this.fam.primer_dia_mes === null || this.fam.primer_dia_mes === undefined)) {
                this.alert = "Ocurrió un error";
                this.advice = 'Por favor, ingrese los datos necesarios';
                //  Mostrar mensaje de al usuario
                return this.genericAlert(this.alert, this.advice);
            }
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (this.fam) {
                        // Obtener los datos del usurio de FireStore dado- 
                        //    el email proporcionado por la API de autentificación
                        yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                this.User = yield this.auth.getUsuario(user.email);
                                this.aux = yield this.auth.createFamily(this.fam);
                                yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    yield this.User.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(res2 => {
                                        this.auth.changeFamily(res2[0], res[0]);
                                        this.auth.modifyRole(res2[0], 'A');
                                        a.dismiss().then(() => console.log('abort presenting'));
                                    });
                                }));
                            }
                            catch (error) {
                                console.log("error al crear familia");
                                this.alert = "Ocurrió un error inesperado al ingresar su familia";
                                this.advice = 'Por favor, inténtelo de nuevo';
                                return this.genericAlert(this.alert, this.advice);
                            }
                            finally {
                                a.dismiss().then(() => console.log('abort presenting'));
                            }
                            return this.router.navigate(["/home"]);
                        }));
                    }
                    else {
                        console.log("error al crear familia");
                        this.alert = "Debe llenar todos los datos necesarios";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        return this.genericAlert(this.alert, this.advice);
                    }
                }));
            });
        });
    }
    prompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Buscar familia',
                message: 'Ingrese el correo del jefe de la familia',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'ejemplo@mail.com',
                        type: 'email',
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Buscar',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            return yield this.loadingController.create({}).then(a => {
                                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    console.log('Accept ' + data.email);
                                    yield this.join(data.email);
                                    a.dismiss().then(() => console.log('abort presenting'));
                                }));
                            });
                        })
                    }
                ]
            });
            yield prompt.present();
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    join(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.User = yield this.auth.getUsuario(email);
                //console.log(this.id);  
                yield this.User.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (res[0].id_familia === "-1") {
                        console.log("no existe esa familia");
                        this.alert = "No existe ninguna familia registrada con el correo electrónico ingresado";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        return this.genericAlert(this.alert, this.advice);
                    }
                    else {
                        yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.aux = yield this.auth.getUsuario(user.email);
                            this.fam.id = res[0].id_familia;
                            yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(res2 => {
                                this.auth.changeFamily(res2[0], this.fam);
                                this.auth.modifyRole(res2[0], 'U');
                            });
                            return this.router.navigate(["/home"]);
                        }));
                    }
                }));
                return this.router.navigate(["/home"]);
            }
            catch (error) {
                console.log("error al asignar familia");
                this.alert = "Ocurrió un error inesperado al ingresar su familia";
                this.advice = 'Por favor, inténtelo de nuevo';
                return this.genericAlert(this.alert, this.advice);
            }
        });
    }
    regresar() {
        this.router.navigate(["/login"]);
    }
    genericAlert(alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Lo sentimos',
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar']
            });
            yield prompt.present();
        });
    }
};
CreatefamilyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
CreatefamilyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-createfamily',
        template: _createfamily_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_createfamily_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatefamilyPage);



/***/ }),

/***/ 48919:
/*!**************************************************************************!*\
  !*** ./src/app/pages/all/createfamily/createfamily.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('login.jpg') 0 0/100% 100% no-repeat;\n}\n\n#input {\n  background: #001230e8;\n  border-radius: 14px;\n  margin-bottom: 5%;\n}\n\n.sc-ion-input-ios-h {\n  padding-left: 17px !important;\n}\n\n#label {\n  margin-inline: 15%;\n  padding-top: 74%;\n  color: white;\n  --padding-top: 74%;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n#botonIniciar {\n  margin-inline: 30%;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n#botonConozco {\n  margin-inline: 22%;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZWZhbWlseS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtBQUNGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBRUUsa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUFKRjs7QUFPQTtFQUVFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBTEYiLCJmaWxlIjoiY3JlYXRlZmFtaWx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYmFja2dyb3VuZC9sb2dpbi5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxuXHJcbiNpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogIzAwMTIzMGU4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtaW9zLWgge1xyXG4gIHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG5cclxuI2xhYmVse1xyXG4gIG1hcmdpbi1pbmxpbmU6IDE1JTsgXHJcbiAgcGFkZGluZy10b3A6IDc0JTsgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tcGFkZGluZy10b3A6IDc0JTtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG4jYm90b25JbmljaWFye1xyXG4gXHJcbiAgbWFyZ2luLWlubGluZTogMzAlO1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICM3MmJkYTMgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jYm90b25Db25vemNve1xyXG4gXHJcbiAgbWFyZ2luLWlubGluZTogMjIlO1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICM3MmJkYTMgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 7937:
/*!**************************************************************************!*\
  !*** ./src/app/pages/all/createfamily/createfamily.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" >\r\n\r\n   \r\n\r\n\r\n  <ion-grid  style=\" margin-top: 70%;\">\r\n      <ion-label>Nombre de la familia</ion-label>\r\n      <ion-input id=\"input\" placeholder=\"Familia Ejemplo\" [(ngModel)]=\"fam.nombre\" ></ion-input>\r\n\r\n      <ion-label>Presupuesto global</ion-label>\r\n      <ion-input  id = \"input\" type = \"number\" placeholder= \"0.00\" [(ngModel)]=\"fam.presupuesto_global\" ></ion-input>\r\n\r\n      <ion-item>\r\n        <ion-label>Primer día del mes</ion-label>\r\n        <ion-select [value]=\"1\" [(ngModel)]=\"fam.primer_dia_mes\" color=\"sunny\">\r\n          <ion-select-option [value]=\"1\">1</ion-select-option>\r\n          <ion-select-option [value]=\"2\">2</ion-select-option>\r\n          <ion-select-option [value]=\"3\">3</ion-select-option>\r\n          <ion-select-option [value]=\"4\">4</ion-select-option>\r\n          <ion-select-option [value]=\"5\">5</ion-select-option>\r\n          <ion-select-option [value]=\"6\">6</ion-select-option>\r\n          <ion-select-option [value]=\"7\">7</ion-select-option>\r\n          <ion-select-option [value]=\"8\">8</ion-select-option>\r\n          <ion-select-option [value]=\"9\">9</ion-select-option>\r\n          <ion-select-option [value]=\"10\">10</ion-select-option>\r\n          <ion-select-option [value]=\"11\">11</ion-select-option>\r\n          <ion-select-option [value]=\"12\">12</ion-select-option>\r\n          <ion-select-option [value]=\"13\">13</ion-select-option>\r\n          <ion-select-option [value]=\"14\">14</ion-select-option>\r\n          <ion-select-option [value]=\"15\">15</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-button id=\"botonIniciar\" style=\" margin-bottom: 7%;\" color=\"success\"  (click)=\"crear()\" > Crear familia </ion-button>\r\n  <ion-button id=\"botonConozco\" style=\" margin-bottom: 7%;\" color=\"success\"  (click)=\"prompt()\" > Conozco una familia </ion-button>\r\n  \r\n  \r\n  <!--<ion-fab-button ><ion-icon name=\"log-out\" (click)=\" logout()\" ></ion-icon></ion-fab-button>-->\r\n \r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_createfamily_createfamily_module_ts.js.map