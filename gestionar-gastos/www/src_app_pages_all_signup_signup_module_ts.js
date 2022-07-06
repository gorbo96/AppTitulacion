"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all_signup_signup_module_ts"],{

/***/ 44817:
/*!***********************************************************!*\
  !*** ./src/app/pages/all/signup/signup-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 61228);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 40225:
/*!***************************************************!*\
  !*** ./src/app/pages/all/signup/signup.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 44817);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 61228);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 61228:
/*!*************************************************!*\
  !*** ./src/app/pages/all/signup/signup.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 59466);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 14121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_domain_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/user */ 66319);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);








let SignupPage = class SignupPage {
    constructor(router, auth, alertCtrl, menuCtrl, loadingController) {
        this.router = router;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.User = new src_app_domain_user__WEBPACK_IMPORTED_MODULE_2__.User();
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    registro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if ((this.User.email === null || this.User.email === undefined) ||
                (this.User.password === null || this.User.password === undefined) ||
                (this.User.displayName === null || this.User.displayName === undefined)) {
                this.alert = "Ocurrió un error";
                this.advice = 'Por favor, ingrese los datos necesarios';
                //  Mostrar mensaje de al usuario
                return this.genericAlert('Lo sentimos', this.alert, this.advice);
            }
            const user = yield this.auth.onRegistro(this.User);
            this.User.role = 'N';
            this.User.description = 'Hola, estoy manejando mis finanzas';
            this.User.active = true;
            this.User.id_familia = "-1";
            this.User.photoURL = 'https://firebasestorage.googleapis.com/v0/b/gestionar-gastos.appspot.com/o/default.png?alt=media&token=e8ff50d0-3177-4b40-acf6-d29127a6baf3';
            this.User.createdAt = new Date();
            this.User.lastLogin = new Date();
            this.User.provider = 'gestion-gastos';
            // Control de la interacción del usuario usando una rueda de carga
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        if (user) {
                            this.ID = yield this.auth.verificacion();
                            console.log(" ES EL ID (EMAIL)", this.ID);
                            yield this.auth.save(this.User);
                            console.log("exito de registro ");
                            a.dismiss().then(() => console.log('abort presenting'));
                            this.header = 'Bienvenido';
                            this.alert = "Se ha registrado el usuario con éxito";
                            this.advice = '¡Comienze a gestionar su dinero!';
                            this.genericAlert(this.header, this.alert, this.advice);
                        }
                        else {
                            console.log("error en registro");
                            this.header = 'Lo sentimos';
                            this.alert = "Ocurrió un error inesperado en con el registro";
                            this.advice = 'Por favor, inténtelo de nuevo';
                            this.genericAlert(this.header, this.alert, this.advice);
                        }
                    }
                    catch (error) {
                        this.header = 'Lo sentimos';
                        this.alert = "Ocurrió un error inesperado en con el registro";
                        this.advice = 'Por favor, inténtelo de nuevo';
                        this.genericAlert(this.header, this.alert, this.advice);
                    }
                    finally {
                        a.dismiss().then(() => console.log('abort presenting'));
                        this.router.navigate(["/login"]);
                    }
                }));
            });
        });
    }
    regresar() {
        this.router.navigate(["/login"]);
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
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
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 14121:
/*!**************************************************************!*\
  !*** ./src/app/pages/all/signup/signup.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('login.jpg') 0 0/100% 100% no-repeat;\n}\n\n#input {\n  background: #001230e8;\n  border-radius: 14px;\n  margin-bottom: 5%;\n}\n\n.sc-ion-input-ios-h {\n  padding-left: 17px !important;\n}\n\n#label {\n  margin-inline: 15%;\n  padding-top: 74%;\n  color: white;\n  --padding-top: 74%;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n#botonIniciar {\n  margin-inline: 30%;\n  --ion-color-base: #72bda3 !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBQTtBQUNKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBRUksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUFKSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2JhY2tncm91bmQvbG9naW4uanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcblxyXG4jaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTIzMGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4jbGFiZWx7XHJcbiAgICBtYXJnaW4taW5saW5lOiAxNSU7IFxyXG4gICAgcGFkZGluZy10b3A6IDc0JTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA3NCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG5cclxuI2JvdG9uSW5pY2lhcntcclxuICAgXHJcbiAgICBtYXJnaW4taW5saW5lOiAzMCU7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNzJiZGEzICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 59466:
/*!**************************************************************!*\
  !*** ./src/app/pages/all/signup/signup.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  \r\n</ion-header>\r\n\r\n<ion-content  class=\"background\">\r\n\r\n    <ion-grid  style=\" margin-top:  70%;\">\r\n      <ion-input  id=\"input\" placeholder=\"Email usuario@mail.com\" type = \"email\" [(ngModel)]=\"User.email\"></ion-input>\r\n      <ion-input id = \"input\"  placeholder= \"************\" type = \"Password\" [(ngModel)]=\"User.password\"></ion-input>\r\n      <ion-input  id=\"input\" placeholder=\"Nombre Apellido\"  [(ngModel)]=\"User.displayName\"></ion-input>\r\n    </ion-grid>\r\n  \r\n\r\n  <ion-grid>\r\n    <ion-label id=\"label\"> _________________________ </ion-label>\r\n    \r\n    <ion-button id=\"botonIniciar\" style=\" margin-top: -9%;\" color=\"success\" (click)=\"registro()\">\r\n    Crear Cuenta\r\n    </ion-button>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_all_signup_signup_module_ts.js.map