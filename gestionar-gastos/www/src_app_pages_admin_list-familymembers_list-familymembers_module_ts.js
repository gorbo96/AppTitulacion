"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_list-familymembers_list-familymembers_module_ts"],{

/***/ 42694:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/list-familymembers/list-familymembers-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListFamilymembersPageRoutingModule": () => (/* binding */ ListFamilymembersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_familymembers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-familymembers.page */ 25799);




const routes = [
    {
        path: '',
        component: _list_familymembers_page__WEBPACK_IMPORTED_MODULE_0__.ListFamilymembersPage
    }
];
let ListFamilymembersPageRoutingModule = class ListFamilymembersPageRoutingModule {
};
ListFamilymembersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListFamilymembersPageRoutingModule);



/***/ }),

/***/ 22286:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/list-familymembers/list-familymembers.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListFamilymembersPageModule": () => (/* binding */ ListFamilymembersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _list_familymembers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-familymembers-routing.module */ 42694);
/* harmony import */ var _list_familymembers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-familymembers.page */ 25799);







let ListFamilymembersPageModule = class ListFamilymembersPageModule {
};
ListFamilymembersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_familymembers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListFamilymembersPageRoutingModule
        ],
        declarations: [_list_familymembers_page__WEBPACK_IMPORTED_MODULE_1__.ListFamilymembersPage]
    })
], ListFamilymembersPageModule);



/***/ }),

/***/ 25799:
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/list-familymembers/list-familymembers.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListFamilymembersPage": () => (/* binding */ ListFamilymembersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_familymembers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-familymembers.page.html?ngResource */ 4917);
/* harmony import */ var _list_familymembers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-familymembers.page.scss?ngResource */ 97755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _member_spence_member_spence_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member-spence/member-spence.page */ 83769);










let ListFamilymembersPage = class ListFamilymembersPage {
    constructor(userService, auth, loadingController, alertCtrl, modalCtrl) {
        this.userService = userService;
        this.auth = auth;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.currentModal = null;
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
                            yield this.aux.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                this.members = yield this.userService.getFamilyMembers(res[0].id_familia);
                                a.dismiss().then(() => console.log('abort presenting'));
                            }));
                        }));
                    }
                    catch (error) {
                        console.log('ERROR al cargar datos');
                        this.alert = "Ocurrió un error al cargar sus datos";
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
    deleteMember(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Eliminar de familia',
                message: '¿Está seguro que quiere eliminar a ' + item.displayName + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: data => {
                            console.log('Cancel');
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Accept');
                            return yield this.loadingController.create({}).then(a => {
                                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                    try {
                                        yield this.userService.deleteFamily(item.uid, '-1');
                                    }
                                    catch (error) {
                                        console.log('ERROR al eliminar miembro');
                                        this.alert = "Ocurrió un error al eliminar";
                                        this.advice = 'Por favor, inténtelo de nuevo';
                                        this.genericAlert(this.alert, this.advice);
                                    }
                                    finally {
                                        a.dismiss().then(() => console.log('abort presenting'));
                                    }
                                }));
                            });
                        })
                    }
                ]
            });
            yield prompt.present();
        });
    }
    presentModal(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _member_spence_member_spence_page__WEBPACK_IMPORTED_MODULE_4__.MemberSpencePage,
                breakpoints: [0, 0.3, 0.5, 0.8],
                initialBreakpoint: 0.5,
                componentProps: {
                    'id': id
                }
            });
            yield modal.present();
        });
    }
    isHidden(rl) {
        if (rl === 'A') {
            return true;
        }
        else {
            return false;
        }
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
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
                            console.log('Aceptar');
                        })
                    }
                ]
            });
            yield prompt.present();
        });
    }
};
ListFamilymembersPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ListFamilymembersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-list-familymembers',
        template: _list_familymembers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_familymembers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListFamilymembersPage);



/***/ }),

/***/ 97755:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/admin/list-familymembers/list-familymembers.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWZhbWlseW1lbWJlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4917:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/admin/list-familymembers/list-familymembers.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Familia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list lines=\"none\">\r\n\r\n    <ion-item-group>\r\n      <ion-item-divider>\r\n        <ion-label>Miembros de tu familia</ion-label>\r\n      </ion-item-divider>\r\n      \r\n      <ion-item (click)=\"presentModal(item.uid)\" *ngFor=\"let item of members | async\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"item.photoURL\" referrerpolicy=\"no-referrer\" alt=\"\">\r\n        </ion-avatar>\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h2>{{item.displayName}}</h2>\r\n          <p>{{item.description}}</p>                      \r\n        </ion-label>\r\n\r\n        <div [hidden]='isHidden(item.role)'>\r\n          <ion-icon color= 'danger' name=\"close-circle\" size=\"small\" slot=\"end\" (click)=\"deleteMember(item)\"></ion-icon>\r\n        </div>\r\n          \r\n      </ion-item>\r\n        \r\n    </ion-item-group>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_list-familymembers_list-familymembers_module_ts.js.map