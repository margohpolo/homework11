(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "1lEP":
/*!*********************************************************!*\
  !*** ./src/app/services/business/business.component.ts ***!
  \*********************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BusinessComponent {
    constructor() { }
    ngOnInit() {
    }
}
BusinessComponent.ɵfac = function BusinessComponent_Factory(t) { return new (t || BusinessComponent)(); };
BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessComponent, selectors: [["app-business"]], decls: 3, vars: 0, template: function BusinessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Business works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-routing.module */ "fD4K");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business/business.component */ "1lEP");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai/ai.component */ "TSVm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ServicesModule {
}
ServicesModule.ɵfac = function ServicesModule_Factory(t) { return new (t || ServicesModule)(); };
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServicesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_business_business_component__WEBPACK_IMPORTED_MODULE_2__["BusinessComponent"],
        _ai_ai_component__WEBPACK_IMPORTED_MODULE_3__["AiComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _services_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServicesRoutingModule"]] }); })();


/***/ }),

/***/ "TSVm":
/*!*********************************************!*\
  !*** ./src/app/services/ai/ai.component.ts ***!
  \*********************************************/
/*! exports provided: AiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiComponent", function() { return AiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AiComponent {
    constructor() { }
    ngOnInit() {
    }
}
AiComponent.ɵfac = function AiComponent_Factory(t) { return new (t || AiComponent)(); };
AiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AiComponent, selectors: [["app-ai"]], decls: 3, vars: 0, template: function AiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A.I. works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhaS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fD4K":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai/ai.component */ "TSVm");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business/business.component */ "1lEP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _business_business_component__WEBPACK_IMPORTED_MODULE_2__["BusinessComponent"] },
    { path: 'business', component: _business_business_component__WEBPACK_IMPORTED_MODULE_2__["BusinessComponent"] },
    { path: 'ai', component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__["AiComponent"] }
];
class ServicesRoutingModule {
}
ServicesRoutingModule.ɵfac = function ServicesRoutingModule_Factory(t) { return new (t || ServicesRoutingModule)(); };
ServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ServicesRoutingModule });
ServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map