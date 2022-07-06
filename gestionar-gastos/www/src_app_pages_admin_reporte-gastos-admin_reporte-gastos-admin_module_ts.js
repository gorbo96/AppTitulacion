"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_reporte-gastos-admin_reporte-gastos-admin_module_ts"],{

/***/ 467:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/reporte-gastos-admin/reporte-gastos-admin-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteGastosAdminPageRoutingModule": () => (/* binding */ ReporteGastosAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reporte_gastos_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-gastos-admin.page */ 52425);




const routes = [
    {
        path: '',
        component: _reporte_gastos_admin_page__WEBPACK_IMPORTED_MODULE_0__.ReporteGastosAdminPage
    }
];
let ReporteGastosAdminPageRoutingModule = class ReporteGastosAdminPageRoutingModule {
};
ReporteGastosAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReporteGastosAdminPageRoutingModule);



/***/ }),

/***/ 379:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/reporte-gastos-admin/reporte-gastos-admin.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteGastosAdminPageModule": () => (/* binding */ ReporteGastosAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reporte_gastos_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-gastos-admin-routing.module */ 467);
/* harmony import */ var _reporte_gastos_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-gastos-admin.page */ 52425);







let ReporteGastosAdminPageModule = class ReporteGastosAdminPageModule {
};
ReporteGastosAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reporte_gastos_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReporteGastosAdminPageRoutingModule
        ],
        declarations: [_reporte_gastos_admin_page__WEBPACK_IMPORTED_MODULE_1__.ReporteGastosAdminPage]
    })
], ReporteGastosAdminPageModule);



/***/ }),

/***/ 52425:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/reporte-gastos-admin/reporte-gastos-admin.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteGastosAdminPage": () => (/* binding */ ReporteGastosAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reporte_gastos_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-gastos-admin.page.html?ngResource */ 64738);
/* harmony import */ var _reporte_gastos_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-gastos-admin.page.scss?ngResource */ 66903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 10177);
/* harmony import */ var src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/gastos.service */ 40354);
/* harmony import */ var src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/presupuestos.service */ 1931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);











let ReporteGastosAdminPage = class ReporteGastosAdminPage {
    constructor(route, router, gastoService, //Declaracion de servicios para gastos
    presupuestoService, //Declaracion de servicios para presupuestos
    alertCtrl, //Declaracion de servicios para alertas
    auth, //Declaracion de servicios de autenticacion
    loadingController, //Declaracion de servicios de pantalla de progreso
    menuCtrl) {
        this.route = route;
        this.router = router;
        this.gastoService = gastoService;
        this.presupuestoService = presupuestoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.presp = 0.0; //Variable para el presupuesto total de la familia
        this.prespGst = 0.0; //Variable para el monto restante del presupuesto total de la familia
        this.gastoTot = 0.0; //Variable para el total de los gastos de la familia
        //Variables para las cantidades de presupuesto de cada categoria
        this.presupuestoSalud = 0.0;
        this.presupuestoTransporte = 0.0;
        this.presupuestoVivienda = 0.0;
        this.presupuestoOcio = 0.0;
        this.presupuestoEducacion = 0.0;
        this.presupuestoAlimentacion = 0.0;
        this.presupuestoServicios = 0.0;
        //Grafica seleccionada
        this.myPlot = 0;
        this.loadPlot = true;
        this.menuCtrl.enable(true); //Menu activado
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        this.entrada(a);
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
    entrada(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.sessionUser = yield this.auth.getUserAuth(); //Utilizacion del servicio para obtener usuario que inicio sesion mediante Firebase        
            this.sessionUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.usuario = yield this.auth.getUsuario(user.email); //Utilizacion de servicio para obtener usuario en base a consulta base de datos
                this.usuario.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    this.usuarios = this.gastoService.obtenerusrFamilia(user[0].id_familia); //Utilizacion de servicio para obtener los usuarios miembros de la familia del usuario en base a consulta base de datos
                    this.familia = this.presupuestoService.obtenerFamilia(user[0].id_familia); //Utilizacion de servicio para obtener familia del usuario en base a consulta base de datos
                    this.presupuestos = this.presupuestoService.obtenerPresupuestos(user[0].id_familia); //Utilizacion de servicio para obtener presupuestos de la familia en base a consulta base de datos
                    yield this.gastoService.homeChartData(user[0].id_familia).then((res) => {
                        this.resReqHome = res;
                    });
                    yield this.gastoService.categoryData(user[0].id_familia).then((res) => {
                        this.resReqCategory = res;
                    });
                    this.presupuestos.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(prespt => {
                        for (let index = 0; index < prespt.length; index++) {
                            //Asignacion de valores de las diferentes categorias, se diferencian mediante codigo almacenado en firebase
                            if (prespt[index].id_categoria == "834IqsQWzMFPdsE7TZKu") {
                                this.presupuestoAlimentacion = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "yfXjC94YqUqIbn4zXMjx") {
                                this.presupuestoServicios = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "EjKGtXUIHEnwC0MKrzIn") {
                                this.presupuestoEducacion = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "Y2xbbnUeLwCz5UhfMMJZ") {
                                this.presupuestoOcio = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "pZbMomfUFtw8u2aD0sEC") {
                                this.presupuestoTransporte = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "NgNS2EM0p4UdeAQlZ4q6") {
                                this.presupuestoVivienda = prespt[index].cantidad;
                            }
                            if (prespt[index].id_categoria == "Mp82DGLcR5AUOEk5DSrC") {
                                this.presupuestoSalud = prespt[index].cantidad;
                            }
                        }
                        //Llamado a las funciones correspondientes para generar un grafico para cada categoria                  
                        this.graficaEstrella(); //Comparativa entre presupuestos
                        a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga
                    });
                }));
            }));
        });
    }
    graficaGeneral() {
        if (this.generalChart != null) { //En caso de que el grafico este inicializado
            this.generalChart.destroy(); //Destruir la instancia
        }
        this.generalChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.generalCanvas.nativeElement, {
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
                        data: [this.resReqHome.presp, this.resReqHome.prespGst, this.resReqHome.gastoTot],
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
        this.loadPlot = false;
    }
    graficaSalud() {
        if (this.saludChart != null) {
            this.saludChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoSalud >= this.resReqCategory.presupuestoSalud) {
            aux = 0;
        }
        else {
            aux = this.presupuestoSalud - this.resReqCategory.gastoSalud;
        }
        this.saludChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.saludCanvas.nativeElement, {
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
                        data: [this.presupuestoSalud, aux, this.resReqCategory.gastoSalud],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaVivienda() {
        if (this.viviendaChart != null) {
            this.viviendaChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoVivienda >= this.resReqCategory.presupuestoVivienda) {
            aux = 0.0;
        }
        else {
            aux = this.presupuestoVivienda - this.resReqCategory.gastoVivienda;
        }
        this.viviendaChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.viviendaCanvas.nativeElement, {
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
                        data: [this.presupuestoVivienda, aux, this.resReqCategory.gastoVivienda],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaTransporte() {
        if (this.transporteChart != null) {
            this.transporteChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoTransporte >= this.presupuestoTransporte) {
            aux = 0;
        }
        else {
            aux = this.presupuestoTransporte - this.resReqCategory.gastoTransporte;
        }
        this.transporteChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.transporteCanvas.nativeElement, {
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
                        data: [this.presupuestoTransporte, aux, this.resReqCategory.gastoTransporte],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaOcio() {
        if (this.ocioChart != null) {
            this.ocioChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoOcio >= this.presupuestoOcio) {
            aux = 0;
        }
        else {
            aux = this.presupuestoOcio - this.resReqCategory.gastoOcio;
        }
        this.ocioChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.ocioCanvas.nativeElement, {
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
                        data: [this.presupuestoOcio, aux, this.resReqCategory.gastoOcio],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaEducacion() {
        if (this.educacionChart != null) {
            this.educacionChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoEducacion >= this.presupuestoEducacion) {
            aux = 0;
        }
        else {
            aux = this.presupuestoEducacion - this.resReqCategory.gastoEducacion;
        }
        this.educacionChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.educacionCanvas.nativeElement, {
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
                        data: [this.presupuestoEducacion, aux, this.resReqCategory.gastoEducacion],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaServicios() {
        if (this.serviciosChart != null) {
            this.serviciosChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoServicios >= this.presupuestoServicios) {
            aux = 0;
        }
        else {
            aux = this.presupuestoServicios - this.resReqCategory.gastoServicios;
        }
        this.serviciosChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.serviciosCanvas.nativeElement, {
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
                        data: [this.presupuestoServicios, aux, this.resReqCategory.gastoServicios],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaAlimentacion() {
        if (this.alimentacionChart != null) {
            this.alimentacionChart.destroy();
        }
        var aux = 0.0;
        if (this.resReqCategory.gastoAlimentacion >= this.presupuestoAlimentacion) {
            aux = 0;
        }
        else {
            aux = this.presupuestoAlimentacion - this.resReqCategory.gastoAlimentacion;
        }
        this.alimentacionChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.alimentacionCanvas.nativeElement, {
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
                        data: [this.presupuestoAlimentacion, aux, this.resReqCategory.gastoAlimentacion],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        hoverBorderColor: ['#ff9f40', '#36a2eb', '#ff6384'],
                        borderWidth: [1, 1, 1],
                        hoverBorderWidth: [1, 1, 1]
                    }]
            }
        });
        this.loadPlot = false;
    }
    graficaEstrella() {
        if (this.estrellaChart != null) {
            this.estrellaChart.destroy();
        }
        this.estrellaChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.estrellaCanvas.nativeElement, {
            type: 'radar',
            data: {
                labels: ['Alimentacion', 'Servicios', 'Educacion', 'Ocio', 'Transporte', 'Vivienda', 'Salud'],
                datasets: [{
                        label: 'Porcentaje de Consumo',
                        //Calculo de porcentaje para cada categoria
                        //Regla de 3, siendo 100% el presupuesto, calculo de porcentaje de gasto
                        data: [(this.resReqCategory.gastoAlimentacion * 100 / this.presupuestoAlimentacion),
                            (this.resReqCategory.gastoServicios * 100 / this.presupuestoServicios),
                            (this.resReqCategory.gastoEducacion * 100 / this.presupuestoEducacion),
                            (this.resReqCategory.gastoOcio * 100 / this.presupuestoOcio),
                            (this.resReqCategory.gastoTransporte * 100 / this.presupuestoTransporte),
                            (this.resReqCategory.gastoVivienda * 100 / this.presupuestoVivienda),
                            (this.resReqCategory.gastoSalud * 100 / this.presupuestoSalud)
                        ],
                        fill: true,
                        backgroundColor: 'rgba(255, 159, 64, 0.4)',
                        borderColor: '#ff9f40',
                        pointBackgroundColor: 'rgb(10, 10, 10)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1,
                        pointHitRadius: 5,
                        pointRadius: 5 //Radio de punto
                    }]
            },
            options: {
                scales: {
                    r: {
                        grid: {
                            color: 'rgb(38, 38, 38)'
                        }
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            },
        });
        this.loadPlot = false;
    }
    plotSelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loadPlot = true;
            return yield this.loadingController.create({}).then(a => {
                a.present().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (this.myPlot == 1) {
                        this.graficaGeneral();
                    }
                    else if (this.myPlot == 2) {
                        this.graficaSalud();
                    }
                    else if (this.myPlot == 3) {
                        this.graficaTransporte();
                    }
                    else if (this.myPlot == 4) {
                        this.graficaVivienda();
                    }
                    else if (this.myPlot == 5) {
                        this.graficaOcio();
                    }
                    else if (this.myPlot == 6) {
                        this.graficaEducacion();
                    }
                    else if (this.myPlot == 7) {
                        this.graficaAlimentacion();
                    }
                    else if (this.myPlot == 8) {
                        this.graficaServicios();
                    }
                    else if (this.myPlot == 0) {
                        this.graficaEstrella();
                    }
                    a.dismiss().then(() => console.log('abort presenting')); //Termino de pantalla de carga 
                }));
            });
        });
    }
};
ReporteGastosAdminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_gastos_service__WEBPACK_IMPORTED_MODULE_3__.GastosService },
    { type: src_app_services_presupuestos_service__WEBPACK_IMPORTED_MODULE_4__.PresupuestosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
ReporteGastosAdminPage.propDecorators = {
    generalCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['generalCanvas',] }],
    saludCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['saludCanvas',] }],
    transporteCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['transporteCanvas',] }],
    viviendaCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['viviendaCanvas',] }],
    ocioCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['ocioCanvas',] }],
    educacionCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['educacionCanvas',] }],
    alimentacionCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['alimentacionCanvas',] }],
    serviciosCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['serviciosCanvas',] }],
    estrellaCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['estrellaCanvas',] }]
};
ReporteGastosAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-reporte-gastos-admin',
        template: _reporte_gastos_admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reporte_gastos_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReporteGastosAdminPage);



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

/***/ 66903:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/admin/reporte-gastos-admin/reporte-gastos-admin.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLWdhc3Rvcy1hZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 64738:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/admin/reporte-gastos-admin/reporte-gastos-admin.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Reportes Gráficos</ion-title><!--Titulo de la pagina-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"loadPlot\" style=\"margin-left: 5%;\">Cargando sus gráficas...</p>\r\n  <div  *ngIf=\"myPlot == 0\">\r\n    <ion-card-header>\r\n      <ion-card-title>Su resumen</ion-card-title>\r\n      <ion-card-subtitle> Comparativa de los distintos presupuestos</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      \r\n      <canvas #estrellaCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria comparativa de categorias-->        \r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 1\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto General</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #generalCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica General-->        \r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 2\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Salud</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #saludCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Salud-->        \r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 3\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Transporte</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #transporteCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Transporte-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 4\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Vivienda</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #viviendaCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Vivienda-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 5\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Ocio</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #ocioCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Ocio-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 6\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Educacion</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #educacionCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Educacion-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 7\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Alimentacion</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #alimentacionCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Alimentacion-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <div *ngIf=\"myPlot == 8\">\r\n    <ion-card-header>    \r\n      <ion-card-subtitle> Comparativa de Gastos y Presupuesto Servicios</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>    \r\n      <canvas #serviciosCanvas style=\"position: relative; height:20vh; width:40vw\"></canvas><!--Espacio para grafica de categoria Servicios-->\r\n    </ion-card-content>\r\n  </div>\r\n\r\n  <ion-item>\r\n    <ion-label>Categoría de gasto</ion-label>\r\n    <ion-select [(ngModel)]=\"myPlot\" (ionChange)=\"plotSelected()\" [value]=\"0\">\r\n      <ion-select-option [value]=\"0\">General comparativa</ion-select-option>\r\n      <ion-select-option [value]=\"1\">Presupuesto general</ion-select-option>\r\n      <ion-select-option [value]=\"2\">Salud</ion-select-option>\r\n      <ion-select-option [value]=\"3\">Transporte</ion-select-option>\r\n      <ion-select-option [value]=\"4\">Vivienda</ion-select-option>\r\n      <ion-select-option [value]=\"5\">Ocio</ion-select-option>\r\n      <ion-select-option [value]=\"6\">Educación</ion-select-option>\r\n      <ion-select-option [value]=\"7\">Alimentación</ion-select-option>\r\n      <ion-select-option [value]=\"8\">Servicios</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-card-content style=\"margin-left: 5%; margin-top: 2%; margin-right: 5%; background-color: #001230e8; border-radius: 20px;\">\r\n    <ion-card-subtitle >Visualizar los gastos de su falmilia</ion-card-subtitle>   \r\n    <p>Selecciones las categorías que de gastos de su interes o de un vistazo a los resumenes en gráficas generales.</p>    \r\n  </ion-card-content>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_reporte-gastos-admin_reporte-gastos-admin_module_ts.js.map