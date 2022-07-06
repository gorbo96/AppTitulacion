"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_member-spence_member-spence_module_ts"],{

/***/ 70463:
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/member-spence/member-spence-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberSpencePageRoutingModule": () => (/* binding */ MemberSpencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _member_spence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-spence.page */ 83769);




const routes = [
    {
        path: '',
        component: _member_spence_page__WEBPACK_IMPORTED_MODULE_0__.MemberSpencePage
    }
];
let MemberSpencePageRoutingModule = class MemberSpencePageRoutingModule {
};
MemberSpencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberSpencePageRoutingModule);



/***/ }),

/***/ 4684:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/member-spence/member-spence.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberSpencePageModule": () => (/* binding */ MemberSpencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _member_spence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-spence-routing.module */ 70463);
/* harmony import */ var _member_spence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-spence.page */ 83769);







let MemberSpencePageModule = class MemberSpencePageModule {
};
MemberSpencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _member_spence_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberSpencePageRoutingModule
        ],
        declarations: [_member_spence_page__WEBPACK_IMPORTED_MODULE_1__.MemberSpencePage]
    })
], MemberSpencePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_member-spence_member-spence_module_ts.js.map