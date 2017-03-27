webpackJsonp([1,4],{

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(517);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=S:/Agri/front/src/main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(773),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_about_about_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_agri_dashboard_dashboard_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_agri_login_login_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_agri_register_register_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_log_dashboard_dashboard_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_log_login_login_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_log_register_register_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_ret_dashboard_dashboard_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_ret_login_login_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_ret_register_register_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_user_dashboard_dashboard_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_user_login_login_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_user_register_register_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_agri_agriprofile_agriprofile_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_login_login_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_log_logprofile_logprofile_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_ret_retprofile_retprofile_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_user_userprofile_userprofile_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_agri_agrichat_agrichat_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_agri_agripost_agripost_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_agri_agrireview_agrireview_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_agri_agrimain_agrimain_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_user_userchat_userchat_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_user_userreview_userreview_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_user_userproduct_userproduct_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__component_user_userpayment_userpayment_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__component_user_userposts_userposts_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__component_user_usercropdiary_usercropdiary_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__component_user_usermain_usermain_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__component_ret_retmain_retmain_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_ret_retproduct_retproduct_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__component_ret_retpayment_retpayment_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_ret_rethistory_rethistory_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_ret_rettrack_rettrack_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_ret_retreview_retreview_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_log_logpayment_logpayment_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_log_logupdate_logupdate_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_log_logtrack_logtrack_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_log_logmain_logmain_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__component_agri_agripost_addpost_addpost_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__component_user_userpayment_paymenthis_paymenthis_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_user_userpayment_paymenttemp_paymenttemp_component__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_25__component_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'user',
        children: [
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_23__component_user_register_register_component__["a" /* userRegisterComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_22__component_user_login_login_component__["a" /* userLoginComponent */]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_21__component_user_dashboard_dashboard_component__["a" /* userDashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_40__component_user_usermain_usermain_component__["a" /* UsermainComponent */]
                    }, {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_29__component_user_userprofile_userprofile_component__["a" /* UserprofileComponent */]
                    }, {
                        path: 'chat',
                        component: __WEBPACK_IMPORTED_MODULE_34__component_user_userchat_userchat_component__["a" /* UserchatComponent */]
                    }, {
                        path: 'product',
                        component: __WEBPACK_IMPORTED_MODULE_36__component_user_userproduct_userproduct_component__["a" /* UserproductComponent */]
                    }, {
                        path: 'payment',
                        component: __WEBPACK_IMPORTED_MODULE_37__component_user_userpayment_userpayment_component__["a" /* UserpaymentComponent */]
                    }, {
                        path: 'posts',
                        component: __WEBPACK_IMPORTED_MODULE_38__component_user_userposts_userposts_component__["a" /* UserpostsComponent */]
                    }, {
                        path: 'review',
                        component: __WEBPACK_IMPORTED_MODULE_40__component_user_usermain_usermain_component__["a" /* UsermainComponent */]
                    }, {
                        path: 'cropdiary',
                        component: __WEBPACK_IMPORTED_MODULE_39__component_user_usercropdiary_usercropdiary_component__["a" /* UsercropdiaryComponent */]
                    }
                ]
            }
        ]
    },
    {
        path: 'agri',
        children: [{
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_14__component_agri_register_register_component__["a" /* agriRegisterComponent */]
            },
            { path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_13__component_agri_login_login_component__["a" /* agriLoginComponent */]
            }, {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_12__component_agri_dashboard_dashboard_component__["a" /* agriDashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_33__component_agri_agrimain_agrimain_component__["a" /* AgrimainComponent */]
                    },
                    {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_24__component_agri_agriprofile_agriprofile_component__["a" /* AgriprofileComponent */]
                    },
                    {
                        path: 'chat',
                        component: __WEBPACK_IMPORTED_MODULE_30__component_agri_agrichat_agrichat_component__["a" /* AgrichatComponent */]
                    },
                    {
                        path: 'post',
                        component: __WEBPACK_IMPORTED_MODULE_31__component_agri_agripost_agripost_component__["a" /* AgripostComponent */]
                    },
                    {
                        path: 'review',
                        component: __WEBPACK_IMPORTED_MODULE_32__component_agri_agrireview_agrireview_component__["a" /* AgrireviewComponent */]
                    }
                ]
            }
        ]
    },
    {
        path: 'log',
        children: [
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_17__component_log_register_register_component__["a" /* logRegisterComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_16__component_log_login_login_component__["a" /* logLoginComponent */]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_15__component_log_dashboard_dashboard_component__["a" /* logDashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_50__component_log_logmain_logmain_component__["a" /* LogmainComponent */]
                    }, {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_27__component_log_logprofile_logprofile_component__["a" /* LogprofileComponent */]
                    },
                    {
                        path: 'payment',
                        component: __WEBPACK_IMPORTED_MODULE_47__component_log_logpayment_logpayment_component__["a" /* LogpaymentComponent */]
                    }, {
                        path: 'update',
                        component: __WEBPACK_IMPORTED_MODULE_48__component_log_logupdate_logupdate_component__["a" /* LogupdateComponent */]
                    }, {
                        path: 'track',
                        component: __WEBPACK_IMPORTED_MODULE_49__component_log_logtrack_logtrack_component__["a" /* LogtrackComponent */]
                    }
                ]
            }
        ]
    },
    {
        path: 'ret',
        children: [{
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_20__component_ret_register_register_component__["a" /* retRegisterComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_19__component_ret_login_login_component__["a" /* retLoginComponent */]
            }, {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_18__component_ret_dashboard_dashboard_component__["a" /* retDashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_41__component_ret_retmain_retmain_component__["a" /* RetmainComponent */]
                    },
                    {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_28__component_ret_retprofile_retprofile_component__["a" /* RetprofileComponent */]
                    },
                    {
                        path: 'product',
                        component: __WEBPACK_IMPORTED_MODULE_42__component_ret_retproduct_retproduct_component__["a" /* RetproductComponent */]
                    }, {
                        path: 'payment',
                        component: __WEBPACK_IMPORTED_MODULE_43__component_ret_retpayment_retpayment_component__["a" /* RetpaymentComponent */]
                    }, {
                        path: 'history',
                        component: __WEBPACK_IMPORTED_MODULE_44__component_ret_rethistory_rethistory_component__["a" /* RethistoryComponent */]
                    },
                    { path: 'track',
                        component: __WEBPACK_IMPORTED_MODULE_45__component_ret_rettrack_rettrack_component__["a" /* RettrackComponent */]
                    }, { path: 'review',
                        component: __WEBPACK_IMPORTED_MODULE_46__component_ret_retreview_retreview_component__["a" /* RetreviewComponent */]
                    }
                ]
            }
        ] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__component_about_about_component__["a" /* AboutComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_user_dashboard_dashboard_component__["a" /* userDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_user_login_login_component__["a" /* userLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_user_register_register_component__["a" /* userRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_log_dashboard_dashboard_component__["a" /* logDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_log_login_login_component__["a" /* logLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_log_register_register_component__["a" /* logRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_ret_dashboard_dashboard_component__["a" /* retDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_ret_login_login_component__["a" /* retLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_ret_register_register_component__["a" /* retRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_agri_dashboard_dashboard_component__["a" /* agriDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_agri_login_login_component__["a" /* agriLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_agri_register_register_component__["a" /* agriRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_agri_agriprofile_agriprofile_component__["a" /* AgriprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_log_logprofile_logprofile_component__["a" /* LogprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__component_ret_retprofile_retprofile_component__["a" /* RetprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_user_userprofile_userprofile_component__["a" /* UserprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_agri_agrichat_agrichat_component__["a" /* AgrichatComponent */],
                __WEBPACK_IMPORTED_MODULE_31__component_agri_agripost_agripost_component__["a" /* AgripostComponent */],
                __WEBPACK_IMPORTED_MODULE_32__component_agri_agrireview_agrireview_component__["a" /* AgrireviewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__component_agri_agrimain_agrimain_component__["a" /* AgrimainComponent */],
                __WEBPACK_IMPORTED_MODULE_34__component_user_userchat_userchat_component__["a" /* UserchatComponent */],
                __WEBPACK_IMPORTED_MODULE_35__component_user_userreview_userreview_component__["a" /* UserreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_36__component_user_userproduct_userproduct_component__["a" /* UserproductComponent */],
                __WEBPACK_IMPORTED_MODULE_37__component_user_userpayment_userpayment_component__["a" /* UserpaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_38__component_user_userposts_userposts_component__["a" /* UserpostsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__component_user_usercropdiary_usercropdiary_component__["a" /* UsercropdiaryComponent */],
                __WEBPACK_IMPORTED_MODULE_40__component_user_usermain_usermain_component__["a" /* UsermainComponent */],
                __WEBPACK_IMPORTED_MODULE_41__component_ret_retmain_retmain_component__["a" /* RetmainComponent */],
                __WEBPACK_IMPORTED_MODULE_42__component_ret_retproduct_retproduct_component__["a" /* RetproductComponent */],
                __WEBPACK_IMPORTED_MODULE_43__component_ret_retpayment_retpayment_component__["a" /* RetpaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_44__component_ret_rethistory_rethistory_component__["a" /* RethistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_45__component_ret_rettrack_rettrack_component__["a" /* RettrackComponent */],
                __WEBPACK_IMPORTED_MODULE_46__component_ret_retreview_retreview_component__["a" /* RetreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_47__component_log_logpayment_logpayment_component__["a" /* LogpaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_48__component_log_logupdate_logupdate_component__["a" /* LogupdateComponent */],
                __WEBPACK_IMPORTED_MODULE_49__component_log_logtrack_logtrack_component__["a" /* LogtrackComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_log_logmain_logmain_component__["a" /* LogmainComponent */],
                __WEBPACK_IMPORTED_MODULE_52__component_agri_agripost_addpost_addpost_component__["a" /* AddpostComponent */],
                __WEBPACK_IMPORTED_MODULE_53__component_user_userpayment_paymenthis_paymenthis_component__["a" /* PaymenthisComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_user_userpayment_paymenttemp_paymenttemp_component__["a" /* PaymenttempComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_51_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__servies_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=S:/Agri/front/src/app.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(774),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/about.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgrichatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgrichatComponent = (function () {
    function AgrichatComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AgrichatComponent.prototype.ngOnInit = function () {
    };
    AgrichatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agrichat',
            template: __webpack_require__(775),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgrichatComponent);
    return AgrichatComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agrichat.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgrimainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgrimainComponent = (function () {
    function AgrimainComponent() {
    }
    AgrimainComponent.prototype.ngOnInit = function () {
    };
    AgrimainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agrimain',
            template: __webpack_require__(776),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], AgrimainComponent);
    return AgrimainComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/agrimain.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddpostComponent = (function () {
    function AddpostComponent(authService) {
        this.authService = authService;
        this.userCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent.prototype.onpostSubmit = function () {
        var addpost = {
            title: this.title,
            content: this.content,
            tag: this.tag.split(",")
        };
        this.userCreated.emit({ post: addpost });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AddpostComponent.prototype, "userCreated", void 0);
    AddpostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(777),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AddpostComponent);
    return AddpostComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/addpost.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgripostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import{post} from '../../../models/post';
var AgripostComponent = (function () {
    function AgripostComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AgripostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.post().subscribe(function (post) {
            _this.post = post[0].post;
            // console.log(this.post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgripostComponent.prototype.onUserCreated = function (event) {
        var _this = this;
        this.authService.addpost(event.post).subscribe(function (post) {
            _this.post.push(event.post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgripostComponent.prototype.deletepost = function (a, id) {
        // console.log(a);
        // console.log(id);
        var _this = this;
        this.authService.deletepost(id).subscribe(function (post) {
            _this.post.splice(a, 1);
            // console.log(post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgripostComponent.prototype.editpost = function (id) {
        console.log(id);
    };
    AgripostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agripost',
            template: __webpack_require__(778),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgripostComponent);
    return AgripostComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agripost.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgriprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgriprofileComponent = (function () {
    function AgriprofileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AgriprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileagri().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgriprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agriprofile',
            template: __webpack_require__(779),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgriprofileComponent);
    return AgriprofileComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agriprofile.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgrireviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgrireviewComponent = (function () {
    function AgrireviewComponent() {
    }
    AgrireviewComponent.prototype.ngOnInit = function () {
    };
    AgrireviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agrireview',
            template: __webpack_require__(780),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], AgrireviewComponent);
    return AgrireviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/agrireview.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agriDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var agriDashboardComponent = (function () {
    function agriDashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    agriDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileagri().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    agriDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(781),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], agriDashboardComponent);
    return agriDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agriLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var agriLoginComponent = (function () {
    function agriLoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    agriLoginComponent.prototype.ngOnInit = function () {
    };
    agriLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            phone: this.phone,
            password: this.password
        };
        this.authService.authenticateagri(user).subscribe(function (data) {
            // let obj = JSON.parse(data._body);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['agri/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['agri/login']);
            }
        });
    };
    agriLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(782),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], agriLoginComponent);
    return agriLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agriRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var agriRegisterComponent = (function () {
    function agriRegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    agriRegisterComponent.prototype.ngOnInit = function () {
    };
    agriRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            password: this.password,
            email: this.email,
            phone: this.phone,
            clg: this.clg,
            qua: this.qua,
            address: this.address
        };
        this.authService.registeragri(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['agri/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['agri/register']);
            }
        });
    };
    agriRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(783),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], agriRegisterComponent);
    return agriRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(784),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/home.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var logDashboardComponent = (function () {
    function logDashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    logDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfilelog().subscribe(function (profile) {
            _this.user = profile.user;
            // console.log(str.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    logDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(785),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], logDashboardComponent);
    return logDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logLoginComponent = (function () {
    function logLoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    logLoginComponent.prototype.ngOnInit = function () {
    };
    logLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticatelog(user).subscribe(function (data) {
            // let obj = JSON.parse(data._body);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['log/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['log/login']);
            }
        });
    };
    logLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(786),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], logLoginComponent);
    return logLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogmainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogmainComponent = (function () {
    function LogmainComponent() {
    }
    LogmainComponent.prototype.ngOnInit = function () {
    };
    LogmainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logmain',
            template: __webpack_require__(787),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogmainComponent);
    return LogmainComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/logmain.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogpaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogpaymentComponent = (function () {
    function LogpaymentComponent() {
    }
    LogpaymentComponent.prototype.ngOnInit = function () {
    };
    LogpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logpayment',
            template: __webpack_require__(788),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogpaymentComponent);
    return LogpaymentComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/logpayment.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogprofileComponent = (function () {
    function LogprofileComponent() {
    }
    LogprofileComponent.prototype.ngOnInit = function () {
    };
    LogprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logprofile',
            template: __webpack_require__(789),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogprofileComponent);
    return LogprofileComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/logprofile.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogtrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogtrackComponent = (function () {
    function LogtrackComponent() {
    }
    LogtrackComponent.prototype.ngOnInit = function () {
    };
    LogtrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logtrack',
            template: __webpack_require__(790),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogtrackComponent);
    return LogtrackComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/logtrack.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogupdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogupdateComponent = (function () {
    function LogupdateComponent() {
    }
    LogupdateComponent.prototype.ngOnInit = function () {
    };
    LogupdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logupdate',
            template: __webpack_require__(791),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogupdateComponent);
    return LogupdateComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/logupdate.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logRegisterComponent = (function () {
    function logRegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    logRegisterComponent.prototype.ngOnInit = function () {
    };
    logRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            phone: this.phone,
            password: this.password,
            email: this.email };
        this.authService.registerlog(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['log/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['log/register']);
            }
        });
    };
    logRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(792),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], logRegisterComponent);
    return logRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(793),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(794),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/navbar.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var retDashboardComponent = (function () {
    function retDashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    retDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileret().subscribe(function (profile) {
            _this.user = profile.user;
            // console.log(str.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    retDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(795),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], retDashboardComponent);
    return retDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var retLoginComponent = (function () {
    function retLoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    retLoginComponent.prototype.ngOnInit = function () {
    };
    retLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateret(user).subscribe(function (data) {
            // let obj = JSON.parse(data._body);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['ret/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['ret/login']);
            }
        });
    };
    retLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(796),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], retLoginComponent);
    return retLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var retRegisterComponent = (function () {
    function retRegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    retRegisterComponent.prototype.ngOnInit = function () {
    };
    retRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            name: this.name,
            password: this.password,
            companyname: this.cname,
            address: this.address,
            phone: this.phone,
            companytype: this.ctype
        };
        // const user=JSON.stringify(x);
        //register user
        // console.log(user);
        this.authService.registerret(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['ret/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['ret/register']);
            }
        });
    };
    retRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(797),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], retRegisterComponent);
    return retRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RethistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RethistoryComponent = (function () {
    function RethistoryComponent() {
    }
    RethistoryComponent.prototype.ngOnInit = function () {
    };
    RethistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rethistory',
            template: __webpack_require__(798),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], RethistoryComponent);
    return RethistoryComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/rethistory.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetmainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetmainComponent = (function () {
    function RetmainComponent() {
    }
    RetmainComponent.prototype.ngOnInit = function () {
    };
    RetmainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retmain',
            template: __webpack_require__(799),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetmainComponent);
    return RetmainComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retmain.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetpaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetpaymentComponent = (function () {
    function RetpaymentComponent() {
    }
    RetpaymentComponent.prototype.ngOnInit = function () {
    };
    RetpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retpayment',
            template: __webpack_require__(800),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetpaymentComponent);
    return RetpaymentComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retpayment.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetproductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetproductComponent = (function () {
    function RetproductComponent() {
    }
    RetproductComponent.prototype.ngOnInit = function () {
    };
    RetproductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retproduct',
            template: __webpack_require__(801),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetproductComponent);
    return RetproductComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retproduct.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetprofileComponent = (function () {
    function RetprofileComponent() {
    }
    RetprofileComponent.prototype.ngOnInit = function () {
    };
    RetprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retprofile',
            template: __webpack_require__(802),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetprofileComponent);
    return RetprofileComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retprofile.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetreviewComponent = (function () {
    function RetreviewComponent() {
    }
    RetreviewComponent.prototype.ngOnInit = function () {
    };
    RetreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retreview',
            template: __webpack_require__(803),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetreviewComponent);
    return RetreviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retreview.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RettrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RettrackComponent = (function () {
    function RettrackComponent() {
    }
    RettrackComponent.prototype.ngOnInit = function () {
    };
    RettrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rettrack',
            template: __webpack_require__(804),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], RettrackComponent);
    return RettrackComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/rettrack.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var userDashboardComponent = (function () {
    function userDashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    userDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    userDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(805),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], userDashboardComponent);
    return userDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var userLoginComponent = (function () {
    function userLoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    userLoginComponent.prototype.ngOnInit = function () {
    };
    userLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            phone: this.phone,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['user/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['user/login']);
            }
        });
    };
    userLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(806),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], userLoginComponent);
    return userLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var userRegisterComponent = (function () {
    function userRegisterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    userRegisterComponent.prototype.ngOnInit = function () {
    };
    userRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            phone: this.phone,
            password: this.password,
            address: this.address,
            irr: this.irr,
            farm: this.farm,
            soiltype: this.soil,
            acres: this.acres
        };
        // const user=JSON.stringify(x);
        //register user
        // console.log(user);
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['user/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['user/register']);
            }
        });
    };
    userRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(807),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], userRegisterComponent);
    return userRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserchatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserchatComponent = (function () {
    function UserchatComponent() {
    }
    UserchatComponent.prototype.ngOnInit = function () {
    };
    UserchatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userchat',
            template: __webpack_require__(808),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserchatComponent);
    return UserchatComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/userchat.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercropdiaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsercropdiaryComponent = (function () {
    function UsercropdiaryComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UsercropdiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.cropdiary().subscribe(function (post) {
            _this.cd = post.cropdiary;
            // console.log(this.cd);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UsercropdiaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usercropdiary',
            template: __webpack_require__(809),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsercropdiaryComponent);
    return UsercropdiaryComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/usercropdiary.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsermainComponent = (function () {
    function UsermainComponent() {
    }
    UsermainComponent.prototype.ngOnInit = function () {
    };
    UsermainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usermain',
            template: __webpack_require__(810),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsermainComponent);
    return UsermainComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/usermain.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenthisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymenthisComponent = (function () {
    function PaymenthisComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PaymenthisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userpaymenthis().subscribe(function (his) {
            // console.log(his[0].pay_his);
            _this.history = his[0].pay_his;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    PaymenthisComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paymenthis',
            template: __webpack_require__(811),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PaymenthisComponent);
    return PaymenthisComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/paymenthis.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenttempComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymenttempComponent = (function () {
    function PaymenttempComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaymenttempComponent.prototype.ngOnInit = function () {
    };
    PaymenttempComponent.prototype.onaddSubmit = function () {
        var a = {
            rs: this.money
        };
        this.add.emit({ rs: a });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PaymenttempComponent.prototype, "add", void 0);
    PaymenttempComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paymenttemp',
            template: __webpack_require__(812),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PaymenttempComponent);
    return PaymenttempComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/paymenttemp.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserpaymentComponent = (function () {
    function UserpaymentComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    UserpaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userpayment().subscribe(function (pay) {
            _this.payment = pay.payment;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UserpaymentComponent.prototype.onadd = function (event) {
        var _this = this;
        this.authService.useraddpayment(event.rs).subscribe(function (rs) {
            var a = event.rs;
            // console.log(a.rs);
            if (rs.ok) {
                _this.flashMessage.show('You money added', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.payment += a.rs;
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
            }
        });
    };
    UserpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userpayment',
            template: __webpack_require__(813),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], UserpaymentComponent);
    return UserpaymentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/userpayment.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserpostsComponent = (function () {
    function UserpostsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllPosts().subscribe(function (post) {
            // console.log(post[0].post);
            _this.posts = post[0].post;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UserpostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userposts',
            template: __webpack_require__(814),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserpostsComponent);
    return UserpostsComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/userposts.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserproductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserproductComponent = (function () {
    function UserproductComponent(http) {
        this.http = http;
        this.apiEndPoint = "http://localhost:3000/users/upload";
    }
    UserproductComponent.prototype.ngOnInit = function () {
    };
    //  public uploader:FileUploader = new FileUploader({url: "http://localhost:3000/users/upload"});
    // public hasBaseDropZoneOver:boolean = false;
    // public hasAnotherDropZoneOver:boolean = false;
    // public fileOverBase(e:any):void {
    //   this.hasBaseDropZoneOver = e;
    // }
    // public fileOverAnother(e:any):void {
    //   this.hasAnotherDropZoneOver = e;
    // }
    UserproductComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
            this.http.post("" + this.apiEndPoint, formData, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(fileList); });
        }
    };
    UserproductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userproduct',
            template: __webpack_require__(815),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserproductComponent);
    return UserproductComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/userproduct.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = (function () {
    function UserprofileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (post) {
            _this.post = post.user;
            console.log(_this.post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UserprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(816),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserprofileComponent);
    return UserprofileComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/userprofile.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserreviewComponent = (function () {
    function UserreviewComponent() {
    }
    UserreviewComponent.prototype.ngOnInit = function () {
    };
    UserreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userreview',
            template: __webpack_require__(817),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserreviewComponent);
    return UserreviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/userreview.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servies_auth_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/auth.guard.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=S:/Agri/front/src/environment.js.map

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 200px;\r\n}"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "#post{\r\n\tpadding-top: 60px;\r\n}\r\n#post input,textarea{\r\n\twidth: 400px;\r\n}\r\n#posts{\r\n\t list-style-type: none;\r\n}\r\na{\r\nfloat: right;\r\n}"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "#profile{\r\n\tmargin-top: 60px;\r\n\ttext-align: center;\r\n\r\n}\r\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n    \r\n}\r\nul {\r\n\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\n    span{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}\r\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n}\r\nul {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = ".navbar{\r\nbackground-color: #1abc9c;\r\ncolor: #f7f7f7;\r\nmargin-bottom: 0px;\r\n\r\n}"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n}\r\nul {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 200px;\r\n}"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "div{\r\n  margin:0;\r\n  padding: 0;\r\n}\r\nul {\r\n \r\n  width: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "span{\r\n\tfloat: right;\r\n}\r\n#cropdiary{\r\n\tpadding-top: 30px;\r\n}"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "#posts{\r\n\tpadding-top: 40px;\r\n}"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "\r\n   \r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n \r\n    html, body { height: 100%; }\r\n\r\n "

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n</app-navbar>\n<flash-messages></flash-messages>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<p>\n  agrichat works!\n</p>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<p>\n  agrimain works!\n</p>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"onpostSubmit()\" class=\"form-horizontal\" role=\"form\">\n\t\t<div class=\"form-group\">\n\t\t\t<legend>Post</legend>\n\t\t</div>\n <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\"  [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n   <div class=\"form-group\">\n    <label>content</label>\n   \n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Tag</label>\n   \n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"tag\" name=\"tag\"></textarea>\n  </div>\n<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-10 col-sm-offset-2\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n</form>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<div id=\"post\"> \n<div class=\"row\"> \n<div class=\"col-md-6\">\n  \n\n<app-addpost (userCreated)=onUserCreated($event)></app-addpost>\n</div>\n<div class=\"col-md-6\"> \n<div *ngIf=\"post\"> \n<h4> List of posts</h4>\n <ul id=\"posts\" class=\"list-group\">\n      <li *ngFor=\"let posts of post;let i = index\" class=\"list-group-item\">\n      \n     \n\n         <h4 class=\"list-group-item-heading\">   {{i+1}}.{{ posts.title}}</h4>\n<span>\n        <i (click)=\"editpost(i,posts._id)\" class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i>\n<i (click)=\"deletepost(i,posts._id)\" class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></i>\n</span>\n\n      </li>\n    </ul>\n\n\n</div>\n\n\n\n</div>\n\n\n</div>\n</div>"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\" id=\"profile\"> \n<h2 class=\"page-header\">Profile</h2>\n\n<form>\n\t\n{{user.name}}\n{{user.phone}}\n{{user.clg}}\n{{user.address}}\n{{user.qualification}}\n{{user.email}}\n\t\n</form>\n\n\n\n</div>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<p>\n  agrireview works!\n</p>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/profile']\">Profile</a></li>\t\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/chat']\">Chat</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/post']\">Post</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n\n <router-outlet></router-outlet>\n\n\n\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>College</label>\n    <input type=\"text\" [(ngModel)]=\"clg\" name=\"clg\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Qua</label>\n    <input type=\"text\" [(ngModel)]=\"qua\" name=\"qua\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/profile']\">Profile</a></li>\t\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/update']\">Update</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/payment']\">Payment</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/track']\">Track</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<p>\n  logmain works!\n</p>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<p>\n  logpayment works!\n</p>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<h2 class=\"page-header\">{{user.name}} </h2>\n<p> {{user.phone}}</p>\n </div>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<p>\n  logtrack works!\n</p>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<p>\n  logupdate works!\n</p>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\"> Agri </div>\n    <div id=\"login\"> \n<a [routerLink]=\"['/agri/login']\"> agri Login</a>\n\n    </div>\n     <div id=\"login\"> \n<a [routerLink]=\"['/agri/register']\"> agri Register</a>\n\n    </div>\n    \n   \n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">   Farmers</div>\n   <div id=\"login\"> \n<a [routerLink]=\"['/user/login']\"> User Login</a>\n\n    </div>\n    <div id=\"login\"> \n<a [routerLink]=\"['/user/register']\"> User Register</a>\n\n    </div>\n    \n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">LOG </div>\n      <div id=\"login\"> \n<a [routerLink]=\"['/log/login']\"> Log Login</a>\n\n    </div>\n  \n    <div id=\"login\"> \n <a [routerLink]=\"['/log/register']\"> Log Register</a>\n\n    </div>\n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">Consumer </div>\n      <div id=\"login\"> \n<a [routerLink]=\"['/ret/login']\"> RET Login</a>\n\n    </div>\n     <div id=\"login\"> \n<a [routerLink]=\"['/ret/register']\"> RET Register</a>\n\n    </div>\n   \n    </div>\n    \n  </div>\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">AA</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          \n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login/register</a></li>\n\n           \n <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li> \n            <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav> \n   \n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/profile']\">Profile</a></li>  \n\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/product']\">Find Product</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/payment']\">Payment</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/history']\">History</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/track']\">Track</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n <div class=\"form-group\">\n    <label>E-mail</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" [(ngModel)]=\"cname\" name=\"cname\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Company type</label>\n    <input type=\"text\" [(ngModel)]=\"ctype\" name=\"ctype\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<p>\n  rethistory works!\n</p>\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registeragri = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/agri/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerlog = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerret = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/ret/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateagri = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/agri/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticatelog = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateret = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/ret/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfileagri = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/agri/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.cropdiary = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/cropdiary', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfileret = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/ret/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.post = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/agri/post', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addpost = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/agri/post', post, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deletepost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/agri/post/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userpayment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/payment', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.retpayment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/ret/payment', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logpayment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/payment', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userpaymenthis = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/paymenthistory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.retpaymenthis = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/ret/paymenthistory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logpaymenthis = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/paymenthistory', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.useraddpayment = function (rs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/addpayment', rs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfilelog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllPosts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/posts', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/auth.service.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<p>\n  retpayment works!\n</p>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<p>\n  retproduct works!\n</p>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<p>\n  retprofile works!\n</p>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<p>\n  retreview works!\n</p>\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<p>\n  rettrack works!\n</p>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/profile']\">Profile</a></li>  \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/chat']\">Chat</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/product']\">Product</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/payment']\">Payment</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/posts']\">Posts</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/cropdiary']\">cropdiary</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n <div class=\"form-group\">\n    <label>Phone No</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n \n   <div class=\"form-group\">\n    <label>soil type</label>\n    <input type=\"text\" [(ngModel)]=\"soil\" name=\"soil\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Irr</label>\n    <input type=\"text\" [(ngModel)]=\"irr\" name=\"irr\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Farm Type</label>\n    <input type=\"text\" [(ngModel)]=\"farm\" name=\"farm\" class=\"form-control\" >\n  </div>\n  \n   <div class=\"form-group\">\n    <label>Acres</label>\n    <input type=\"text\" [(ngModel)]=\"acres\" name=\"acres\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<p>\n  userchat works!\n</p>\nf\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nr\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nr\n\nrrr\nrrr"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"cropdiary\"> \n<div *ngIf=\"cd\">\n<div *ngFor=\"let cds of cd;let i = index\"> \n\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n   {{cds.des}}\n  </div>\n  <div class=\"panel-footer\">{{cds.date | date | uppercase}}<span>{{cds.name}}</span></div>\n</div>\n\n</div> \n\n</div>\n\n</div>"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<p>\n  usermain works!\n</p>\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<div> \n<div *ngIf=\"history\"> \n<div *ngFor=\"let his of history\"> \n\n{{his.from}}\n{{his.to}}\n{{his.amount | currency:'INR':true}}\n{{his.date | date | uppercase}}\n\n\n</div>\n\n</div>\n\n\n</div>\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div> \n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName2\">Amount</label>\n    <input type=\"Number\" class=\"form-control\" [(ngModel)]=\"money\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\" class=\"btn btn-default\">Add</button>\n</form>\n\n</div>\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment| currency:'INR':true}}</h2>\n</div>\n</div>\n<app-paymenthis>\n</app-paymenthis>\n<app-paymenttemp (add)=onadd($event)>\n</app-paymenttemp>\n</div>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "\n\n<div  *ngIf=\"posts\"  id=\"posts\">\n <div *ngFor=\"let post of posts;let i = index\"> \n    <div class=\"thumbnail\">\n     \n      <div class=\"caption\">\n        <h3>{{post.title}}-author</h3>\n\n        <p>{{post.content}}</p>\n        \n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"container\">\n \n \n    <div class=\"row\">\n \n        <div class=\"col-md-3\">\n \n            <h3>Select files</h3>\n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n \n          \n        </div>\n \n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n \n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n \n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n \n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n \n        </div>\n \n    </div>\n \n</div> -->\n\n<form>\n\n<input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\n</form>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div> \n<div *ngIf=\"post\"> \n<div *ngFor=\"let posts of post\" > \n{{posts.name}}\n\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<p>\n  userreview works!\n</p>\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ })

},[839]);
//# sourceMappingURL=main.bundle.map