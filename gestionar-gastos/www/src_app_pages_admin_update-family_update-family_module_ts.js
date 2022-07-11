"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_update-family_update-family_module_ts"],{

/***/ 75142:
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/update-family/update-family-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateFamilyPageRoutingModule": () => (/* binding */ UpdateFamilyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _update_family_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-family.page */ 61418);




const routes = [
    {
        path: '',
        component: _update_family_page__WEBPACK_IMPORTED_MODULE_0__.UpdateFamilyPage
    }
];
let UpdateFamilyPageRoutingModule = class UpdateFamilyPageRoutingModule {
};
UpdateFamilyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateFamilyPageRoutingModule);



/***/ }),

/***/ 79180:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/update-family/update-family.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateFamilyPageModule": () => (/* binding */ UpdateFamilyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_family_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-family-routing.module */ 75142);
/* harmony import */ var _update_family_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-family.page */ 61418);







let UpdateFamilyPageModule = class UpdateFamilyPageModule {
};
UpdateFamilyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_family_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateFamilyPageRoutingModule
        ],
        declarations: [_update_family_page__WEBPACK_IMPORTED_MODULE_1__.UpdateFamilyPage]
    })
], UpdateFamilyPageModule);



/***/ }),

/***/ 61418:
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/update-family/update-family.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateFamilyPage": () => (/* binding */ UpdateFamilyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_family_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-family.page.html?ngResource */ 95107);
/* harmony import */ var _update_family_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-family.page.scss?ngResource */ 44469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_domain_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/family */ 10836);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let UpdateFamilyPage = class UpdateFamilyPage {
    constructor(router, auth, alertCtrl, activate, loadingController) {
        this.router = router;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.activate = activate;
        this.loadingController = loadingController;
        this.fam = new src_app_domain_family__WEBPACK_IMPORTED_MODULE_3__.Familia();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    // Obtención del usuario que actualmente tiene la sesión abierta
                    this.sessionUser = yield this.auth.getUserAuth();
                    yield this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        // Obtener los datos del usurio de FireStore dado- 
                        //    el email proporcionado por la API de autentificación
                        this.user = yield this.auth.getUsuario(user.email);
                        yield this.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.aux = yield this.auth.getFamily(res[0].id_familia);
                            yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(res2 => {
                                this.id = res2[0].id;
                                this.nombre = res2[0].nombre;
                                this.presupuesto_global = res2[0].presupuesto_global;
                                this.primer_dia_mes = res2[0].primer_dia_mes;
                                a.dismiss().then(() => console.log('abort presenting'));
                            });
                        }));
                    }));
                }));
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    update(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        this.fam.id = this.id;
                        this.fam.nombre = this.nombre;
                        this.fam.presupuesto_global = this.presupuesto_global;
                        this.fam.primer_dia_mes = this.primer_dia_mes;
                        //console.log(this.fam)
                        this.auth.updateFamily(this.fam);
                        a.dismiss().then(() => console.log('abort presenting'));
                        this.header = 'Listo';
                        this.alert = "";
                        this.advice = 'Datos actualizados correctamente';
                        this.genericAlert(this.header, this.alert, this.advice);
                        return this.router.navigate(["/tabs"]);
                    }
                    catch (error) {
                        console.log("error al asignar familia");
                        this.header = 'Lo sentimos';
                        this.alert = "Ocurrió un error inesperado al ingresar su familia";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        return this.genericAlert(this.header, this.alert, this.advice);
                    }
                }));
            });
        });
    }
    regresar() {
        this.router.navigate(["/login"]);
    }
    genericAlert(header, alert_message, advice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: header,
                subHeader: alert_message,
                message: advice,
                buttons: ['Aceptar']
            });
            yield prompt.present();
        });
    }
};
UpdateFamilyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
UpdateFamilyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-update-family',
        template: _update_family_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_family_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateFamilyPage);



/***/ }),

/***/ 44469:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/update-family/update-family.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('login.jpg') 0 0/100% 100% no-repeat;\n}\n\n#input {\n  background: #001230e8;\n  border-radius: 14px;\n  margin-bottom: 5%;\n}\n\n.sc-ion-input-ios-h {\n  padding-left: 17px !important;\n}\n\n#label {\n  margin-inline: 15%;\n  padding-top: 74%;\n  color: white;\n  --padding-top: 74%;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n#botonIniciar {\n  margin-inline: 30%;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1mYW1pbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQUE7QUFDSjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsNkJBQUE7QUFESjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUVFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBSkoiLCJmaWxlIjoidXBkYXRlLWZhbWlseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYmFja2dyb3VuZC9sb2dpbi5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAjaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTIzMGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNsYWJlbHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDE1JTsgXHJcbiAgICBwYWRkaW5nLXRvcDogNzQlOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC0tcGFkZGluZy10b3A6IDc0JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIH1cclxuICBcclxuICAjYm90b25JbmljaWFye1xyXG4gICBcclxuICAgIG1hcmdpbi1pbmxpbmU6IDMwJTtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM3MmJkYTMgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgIl19 */";

/***/ }),

/***/ 95107:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/update-family/update-family.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" >\r\n\r\n  <ion-grid  style=\" margin-top: 70%;\">\r\n    \r\n      <ion-label>Nombre de la familia</ion-label>\r\n    <ion-input id=\"input\" [(ngModel)]=\"nombre\" placeholder=\"Familia Ejemplo\" ></ion-input>\r\n\r\n      <ion-label>Presupuesto global</ion-label>\r\n      <ion-input disabled=\"true\" [(ngModel)]=\"presupuesto_global\" id = \"input\" type = \"number\" placeholder= \"0.00\" ></ion-input>\r\n\r\n      <ion-item>\r\n        <ion-label>Primer día del mes</ion-label>\r\n        <ion-select [(ngModel)]=\"primer_dia_mes\"  color=\"sunny\">\r\n          <ion-select-option [value]=\"1\">1</ion-select-option>\r\n          <ion-select-option [value]=\"2\">2</ion-select-option>\r\n          <ion-select-option [value]=\"3\">3</ion-select-option>\r\n          <ion-select-option [value]=\"4\">4</ion-select-option>\r\n          <ion-select-option [value]=\"5\">5</ion-select-option>\r\n          <ion-select-option [value]=\"6\">6</ion-select-option>\r\n          <ion-select-option [value]=\"7\">7</ion-select-option>\r\n          <ion-select-option [value]=\"8\">8</ion-select-option>\r\n          <ion-select-option [value]=\"9\">9</ion-select-option>\r\n          <ion-select-option [value]=\"10\">10</ion-select-option>\r\n          <ion-select-option [value]=\"11\">11</ion-select-option>\r\n          <ion-select-option [value]=\"12\">12</ion-select-option>\r\n          <ion-select-option [value]=\"13\">13</ion-select-option>\r\n          <ion-select-option [value]=\"14\">14</ion-select-option>\r\n          <ion-select-option [value]=\"15\">15</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-button id=\"botonIniciar\" style=\" margin-bottom: 7%;\" color=\"success\"  (click)=\"update()\" > Actualizar datos </ion-button>\r\n  \r\n  \r\n  <!--<ion-fab-button ><ion-icon name=\"log-out\" (click)=\" logout()\" ></ion-icon></ion-fab-button>-->\r\n \r\n  \r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_update-family_update-family_module_ts.js.map