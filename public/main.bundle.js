webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(589);
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
    AuthService.prototype.getProfilelog = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/profile', { headers: headers })
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
    AuthService.prototype.updateuserprofile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/profile', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateagriprofile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/agri/profile', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatelogprofile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/profile', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateretprofile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/ret/profile', data, { headers: headers })
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
    AuthService.prototype.getcrops = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/getCrops', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addcrops = function (a) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/updatecrops', a.crops, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deletecrops = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/users/deletecrops/' + id, { headers: headers })
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
    AuthService.prototype.logaddpayment = function (rs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/addpayment', rs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.retaddpayment = function (rs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/ret/addpayment', rs, { headers: headers })
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
    AuthService.prototype.getweather = function () {
        return this.http.get('http://api.wunderground.com/api/35ff3b2e51125284/geolookup/conditions/forecast/q/India/Nasik.json')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.inittrack = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/inittrack', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.trackbyid = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/trackbyid/' + id.track, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.trackbyref = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/ret/trackbyid/' + id.track, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getlocation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/log/location', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postlocation = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/location', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatetrack = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/log/updatetrack', data, { headers: headers })
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=S:/Agri/front/src/main.js.map

/***/ }),
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */
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
            template: __webpack_require__(818),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/app.component.js.map

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_about_about_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_agri_dashboard_dashboard_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_agri_login_login_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_agri_register_register_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_log_dashboard_dashboard_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_log_login_login_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_log_register_register_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_ret_dashboard_dashboard_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_ret_login_login_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_ret_register_register_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_user_dashboard_dashboard_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_user_login_login_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_user_register_register_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_agri_agriprofile_agriprofile_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_login_login_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_log_logprofile_logprofile_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_ret_retprofile_retprofile_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_user_userprofile_userprofile_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_agri_agrichat_agrichat_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_agri_agripost_agripost_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_agri_agrireview_agrireview_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_agri_agrimain_agrimain_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_user_userchat_userchat_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_user_userreview_userreview_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_user_userproduct_userproduct_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__component_user_userpayment_userpayment_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__component_user_userposts_userposts_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__component_user_usercropdiary_usercropdiary_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__component_user_usermain_usermain_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__component_ret_retmain_retmain_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_ret_retproduct_retproduct_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__component_ret_retpayment_retpayment_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_ret_rethistory_rethistory_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_ret_rettrack_rettrack_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_ret_retreview_retreview_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_log_logpayment_logpayment_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_log_logupdate_logupdate_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_log_logtrack_logtrack_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_log_logmain_logmain_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_agri_agripost_addpost_addpost_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__component_user_userpayment_paymenthis_paymenthis_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__component_user_userpayment_paymenttemp_paymenttemp_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_user_userprofile_usereditprofile_usereditprofile_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__component_user_userprofile_usercrops_usercrops_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__component_user_addcrop_addcrop_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pipes_sortbydate_pipe__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__component_user_whether_whether_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__component_user_usernotify_usernotify_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__component_user_croplist_croplist_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__component_agri_agrieditprofile_agrieditprofile_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__component_agri_agripostlist_agripostlist_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__component_agri_agrinotify_agrinotify_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__component_log_logeditprofile_logeditprofile_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__component_log_addlocation_addlocation_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__component_log_updateprice_updateprice_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__component_log_lognotify_lognotify_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__component_log_logpaymenthis_logpaymenthis_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__component_log_logaddpayment_logaddpayment_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__component_log_locationlist_locationlist_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__component_log_trakpaymentupdate_trakpaymentupdate_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__component_log_trackview_trackview_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__component_log_updatetrack_updatetrack_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__component_ret_retaddpayment_retaddpayment_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__component_ret_retpaymenthis_retpaymenthis_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__component_ret_reteditprofile_reteditprofile_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__component_ret_rettrackview_rettrackview_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__component_ret_rettrackid_rettrackid_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__component_ret_retnotify_retnotify_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__component_footer_footer_component__ = __webpack_require__(525);
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
                        component: __WEBPACK_IMPORTED_MODULE_35__component_user_userreview_userreview_component__["a" /* UserreviewComponent */]
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
                __WEBPACK_IMPORTED_MODULE_51__component_agri_agripost_addpost_addpost_component__["a" /* AddpostComponent */],
                __WEBPACK_IMPORTED_MODULE_52__component_user_userpayment_paymenthis_paymenthis_component__["a" /* PaymenthisComponent */],
                __WEBPACK_IMPORTED_MODULE_53__component_user_userpayment_paymenttemp_paymenttemp_component__["a" /* PaymenttempComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_user_userprofile_usereditprofile_usereditprofile_component__["a" /* UsereditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_55__component_user_userprofile_usercrops_usercrops_component__["a" /* UsercropsComponent */],
                __WEBPACK_IMPORTED_MODULE_56__component_user_addcrop_addcrop_component__["a" /* AddcropComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pipes_sortbydate_pipe__["a" /* SortbydatePipe */],
                __WEBPACK_IMPORTED_MODULE_58__component_user_whether_whether_component__["a" /* WhetherComponent */],
                __WEBPACK_IMPORTED_MODULE_59__component_user_usernotify_usernotify_component__["a" /* UsernotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_60__component_user_croplist_croplist_component__["a" /* CroplistComponent */],
                __WEBPACK_IMPORTED_MODULE_61__component_agri_agrieditprofile_agrieditprofile_component__["a" /* AgrieditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_62__component_agri_agripostlist_agripostlist_component__["a" /* AgripostlistComponent */],
                __WEBPACK_IMPORTED_MODULE_63__component_agri_agrinotify_agrinotify_component__["a" /* AgrinotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_64__component_log_logeditprofile_logeditprofile_component__["a" /* LogeditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_65__component_log_addlocation_addlocation_component__["a" /* AddlocationComponent */],
                __WEBPACK_IMPORTED_MODULE_66__component_log_updateprice_updateprice_component__["a" /* UpdatepriceComponent */],
                __WEBPACK_IMPORTED_MODULE_67__component_log_lognotify_lognotify_component__["a" /* LognotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_68__component_log_logpaymenthis_logpaymenthis_component__["a" /* LogpaymenthisComponent */],
                __WEBPACK_IMPORTED_MODULE_69__component_log_logaddpayment_logaddpayment_component__["a" /* LogaddpaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_70__component_log_locationlist_locationlist_component__["a" /* LocationlistComponent */],
                __WEBPACK_IMPORTED_MODULE_71__component_log_trakpaymentupdate_trakpaymentupdate_component__["a" /* TrakpaymentupdateComponent */],
                __WEBPACK_IMPORTED_MODULE_72__component_log_trackview_trackview_component__["a" /* TrackviewComponent */],
                __WEBPACK_IMPORTED_MODULE_73__component_log_updatetrack_updatetrack_component__["a" /* UpdatetrackComponent */],
                __WEBPACK_IMPORTED_MODULE_74__component_ret_retaddpayment_retaddpayment_component__["a" /* RetaddpaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_75__component_ret_retpaymenthis_retpaymenthis_component__["a" /* RetpaymenthisComponent */],
                __WEBPACK_IMPORTED_MODULE_76__component_ret_reteditprofile_reteditprofile_component__["a" /* ReteditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_77__component_ret_rettrackview_rettrackview_component__["a" /* RettrackviewComponent */],
                __WEBPACK_IMPORTED_MODULE_78__component_ret_rettrackid_rettrackid_component__["a" /* RettrackidComponent */],
                __WEBPACK_IMPORTED_MODULE_79__component_ret_retnotify_retnotify_component__["a" /* RetnotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_80__component_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_26_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
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
/* 512 */
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
            template: __webpack_require__(819),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/about.component.js.map

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            template: __webpack_require__(820),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgrichatComponent);
    return AgrichatComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agrichat.component.js.map

/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgrieditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgrieditprofileComponent = (function () {
    function AgrieditprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AgrieditprofileComponent.prototype.ngOnInit = function () {
        this.posts = {
            name: this.user[0].name,
            clg: this.user[0].clg,
            address: this.user[0].address,
            email: this.user[0].email,
            qua: this.user[0].qualification
        };
    };
    AgrieditprofileComponent.prototype.save = function (model, isValid) {
        var _this = this;
        var data = {
            name: model.name,
            clg: model.clg,
            email: model.email,
            address: model.add,
            qua: model.qua,
        };
        this.authService.updateagriprofile(data).subscribe(function (data) {
            if (data.ok) {
                _this.flashMessage.show('Profile updated', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['agri/dashboard']);
            }
            else {
                _this.flashMessage.show('error', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AgrieditprofileComponent.prototype, "user", void 0);
    AgrieditprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agrieditprofile',
            template: __webpack_require__(821),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AgrieditprofileComponent);
    return AgrieditprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/agrieditprofile.component.js.map

/***/ }),
/* 515 */
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
            template: __webpack_require__(822),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [])
    ], AgrimainComponent);
    return AgrimainComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/agrimain.component.js.map

/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgrinotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgrinotifyComponent = (function () {
    function AgrinotifyComponent() {
    }
    AgrinotifyComponent.prototype.ngOnInit = function () {
    };
    AgrinotifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agrinotify',
            template: __webpack_require__(823),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [])
    ], AgrinotifyComponent);
    return AgrinotifyComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/agrinotify.component.js.map

/***/ }),
/* 517 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
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
        this.title = "";
        this.content = "";
        this.tag = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AddpostComponent.prototype, "userCreated", void 0);
    AddpostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(824),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AddpostComponent);
    return AddpostComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/addpost.component.js.map

/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            _this.authService.post().subscribe(function (post) {
                _this.post = post[0].post;
                // console.log(this.post);
            }, function (err) {
                console.log("error");
                return false;
            });
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
            template: __webpack_require__(825),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgripostComponent);
    return AgripostComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agripost.component.js.map

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgripostlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgripostlistComponent = (function () {
    function AgripostlistComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AgripostlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.post().subscribe(function (post) {
            _this.post = post[0].post;
            // console.log(this.post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgripostlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agripostlist',
            template: __webpack_require__(826),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AgripostlistComponent);
    return AgripostlistComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/agripostlist.component.js.map

/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function AgriprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.edit = false;
    }
    AgriprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileagri().subscribe(function (profile) {
            _this.user = profile;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    AgriprofileComponent.prototype.editprofile = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
    };
    AgriprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agriprofile',
            template: __webpack_require__(827),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AgriprofileComponent);
    return AgriprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/agriprofile.component.js.map

/***/ }),
/* 521 */
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
            template: __webpack_require__(828),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], AgrireviewComponent);
    return AgrireviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/agrireview.component.js.map

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            _this.user = profile[0];
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    agriDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(829),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], agriDashboardComponent);
    return agriDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(830),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], agriLoginComponent);
    return agriLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
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
            template: __webpack_require__(831),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], agriRegisterComponent);
    return agriRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(832),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/footer.component.js.map

/***/ }),
/* 526 */
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
            template: __webpack_require__(833),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/home.component.js.map

/***/ }),
/* 527 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddlocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddlocationComponent = (function () {
    function AddlocationComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddlocationComponent.prototype.ngOnInit = function () {
    };
    AddlocationComponent.prototype.onaddSubmit = function () {
        var data = {
            loc: this.loc,
            phone: this.phone,
            email: this.email,
            address: this.address
        };
        this.add.emit({ loc: data });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AddlocationComponent.prototype, "add", void 0);
    AddlocationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addlocation',
            template: __webpack_require__(834),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AddlocationComponent);
    return AddlocationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/addlocation.component.js.map

/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            _this.user = profile[0];
            // console.log(str.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    logDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(835),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], logDashboardComponent);
    return logDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationlistComponent = (function () {
    function LocationlistComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LocationlistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LocationlistComponent.prototype, "loc", void 0);
    LocationlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-locationlist',
            template: __webpack_require__(836),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LocationlistComponent);
    return LocationlistComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/locationlist.component.js.map

/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogaddpaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogaddpaymentComponent = (function () {
    function LogaddpaymentComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LogaddpaymentComponent.prototype.ngOnInit = function () {
    };
    LogaddpaymentComponent.prototype.onaddSubmit = function () {
        var a = {
            rs: this.money
        };
        this.add.emit({ rs: a });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LogaddpaymentComponent.prototype, "add", void 0);
    LogaddpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logaddpayment',
            template: __webpack_require__(837),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LogaddpaymentComponent);
    return LogaddpaymentComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/logaddpayment.component.js.map

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogeditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogeditprofileComponent = (function () {
    function LogeditprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LogeditprofileComponent.prototype.ngOnInit = function () {
        this.posts = {
            name: this.user[0].name,
            phone: this.user[0].phone,
            cmail: this.user[0].cmail,
            cname: this.user[0].companyname
        };
    };
    LogeditprofileComponent.prototype.save = function (model, isValid) {
        var _this = this;
        var data = {
            name: model.name,
            companyname: model.cname,
            cmail: model.cemail,
            phone: model.phone,
        };
        // console.log(data);
        this.authService.updatelogprofile(data).subscribe(function (data) {
            if (data.ok) {
                _this.flashMessage.show('Profile updated', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['log/dashboard']);
            }
            else {
                _this.flashMessage.show('error', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LogeditprofileComponent.prototype, "user", void 0);
    LogeditprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logeditprofile',
            template: __webpack_require__(838),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogeditprofileComponent);
    return LogeditprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logeditprofile.component.js.map

/***/ }),
/* 532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(839),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], logLoginComponent);
    return logLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),
/* 533 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LogmainComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LogmainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logpayment().subscribe(function (pay) {
            _this.payment = pay[0].payment;
            console.log(pay);
        }, function (err) {
            console.log("error");
            return false;
        });
        this.authService.getlocation().subscribe(function (pay) {
            _this.loc = pay[0].center;
            // console.log(pay[0].center);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    LogmainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logmain',
            template: __webpack_require__(840),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogmainComponent);
    return LogmainComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logmain.component.js.map

/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LognotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LognotifyComponent = (function () {
    function LognotifyComponent() {
    }
    LognotifyComponent.prototype.ngOnInit = function () {
    };
    LognotifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lognotify',
            template: __webpack_require__(841),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], LognotifyComponent);
    return LognotifyComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/lognotify.component.js.map

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LogpaymentComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LogpaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logpayment().subscribe(function (pay) {
            _this.payment = pay[0].payment;
            console.log(pay);
        }, function (err) {
            console.log("error");
            return false;
        });
        this.authService.logpaymenthis().subscribe(function (his) {
            // console.log(his[0].pay_his);
            _this.history = his[0].pay_his;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    LogpaymentComponent.prototype.onadd = function (event) {
        // console.log(event.rs);
        var _this = this;
        this.authService.logaddpayment(event.rs).subscribe(function (rs) {
            var a = event.rs;
            // console.log(a.rs);
            _this.authService.logpaymenthis().subscribe(function (his) {
                // console.log(his[0].pay_his);
                _this.history = his[0].pay_his;
            }, function (err) {
                console.log("error");
                return false;
            });
            if (rs.ok) {
                _this.flashMessage.show('You money added', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.payment += a.rs;
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    LogpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logpayment',
            template: __webpack_require__(842),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogpaymentComponent);
    return LogpaymentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logpayment.component.js.map

/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogpaymenthisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogpaymenthisComponent = (function () {
    function LogpaymenthisComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LogpaymenthisComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LogpaymenthisComponent.prototype, "history", void 0);
    LogpaymenthisComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logpaymenthis',
            template: __webpack_require__(843),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogpaymenthisComponent);
    return LogpaymenthisComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logpaymenthis.component.js.map

/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LogprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.edit = false;
    }
    LogprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfilelog().subscribe(function (profile) {
            _this.user = profile;
            // console.log(this.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    LogprofileComponent.prototype.editprofile = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
    };
    LogprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logprofile',
            template: __webpack_require__(844),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogprofileComponent);
    return LogprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logprofile.component.js.map

/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LogtrackComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.wtrack = false;
    }
    LogtrackComponent.prototype.ngOnInit = function () {
    };
    LogtrackComponent.prototype.ontrack = function (event) {
        var _this = this;
        this.wtrack = true;
        this.authService.trackbyid(event.track).subscribe(function (pay) {
            _this.trackd = pay[0].track[0].location;
            console.log(pay);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    LogtrackComponent.prototype.close = function () {
        this.wtrack = false;
    };
    LogtrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logtrack',
            template: __webpack_require__(845),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogtrackComponent);
    return LogtrackComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logtrack.component.js.map

/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function LogupdateComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LogupdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getlocation().subscribe(function (pay) {
            _this.loc = pay[0].center;
            // console.log(pay[0].center);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    LogupdateComponent.prototype.onadd = function (event) {
        var _this = this;
        this.authService.postlocation(event.loc).subscribe(function (rs) {
            if (rs.ok) {
                _this.authService.getlocation().subscribe(function (pay) {
                    _this.loc = pay[0].center;
                    console.log(pay[0].center);
                }, function (err) {
                    console.log("error");
                    return false;
                });
                _this.flashMessage.show('Location is added', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    LogupdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logupdate',
            template: __webpack_require__(846),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LogupdateComponent);
    return LogupdateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/logupdate.component.js.map

/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
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
            email: this.email,
            cname: this.cname,
            cmail: this.cmail
        };
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
            template: __webpack_require__(847),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], logRegisterComponent);
    return logRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackviewComponent = (function () {
    function TrackviewComponent() {
    }
    TrackviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TrackviewComponent.prototype, "trackd", void 0);
    TrackviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trackview',
            template: __webpack_require__(848),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrackviewComponent);
    return TrackviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/trackview.component.js.map

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrakpaymentupdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrakpaymentupdateComponent = (function () {
    function TrakpaymentupdateComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TrakpaymentupdateComponent.prototype.ngOnInit = function () {
    };
    TrakpaymentupdateComponent.prototype.onaddSubmit = function () {
        var a = {
            track: this.track
        };
        this.add.emit({ track: a });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TrakpaymentupdateComponent.prototype, "add", void 0);
    TrakpaymentupdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trakpaymentupdate',
            template: __webpack_require__(849),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], TrakpaymentupdateComponent);
    return TrakpaymentupdateComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/trakpaymentupdate.component.js.map

/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatepriceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatepriceComponent = (function () {
    function UpdatepriceComponent() {
    }
    UpdatepriceComponent.prototype.ngOnInit = function () {
    };
    UpdatepriceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-updateprice',
            template: __webpack_require__(850),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [])
    ], UpdatepriceComponent);
    return UpdatepriceComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/updateprice.component.js.map

/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatetrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatetrackComponent = (function () {
    function UpdatetrackComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    UpdatetrackComponent.prototype.ngOnInit = function () {
    };
    UpdatetrackComponent.prototype.onupSubmit = function () {
        var data = {
            id: this.id,
            loc: this.loc
        };
        this.authService.updatetrack(data).subscribe(function (pay) {
            console.log(pay);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UpdatetrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-updatetrack',
            template: __webpack_require__(851),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], UpdatetrackComponent);
    return UpdatetrackComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/updatetrack.component.js.map

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
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
            template: __webpack_require__(852),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(853),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/navbar.component.js.map

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            _this.user = profile[0];
            // console.log(str.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    retDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(854),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], retDashboardComponent);
    return retDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(855),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], retLoginComponent);
    return retLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(856),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], retRegisterComponent);
    return retRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetaddpaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RetaddpaymentComponent = (function () {
    function RetaddpaymentComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RetaddpaymentComponent.prototype.ngOnInit = function () {
    };
    RetaddpaymentComponent.prototype.onaddSubmit = function () {
        var a = {
            rs: this.money
        };
        this.add.emit({ rs: a });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RetaddpaymentComponent.prototype, "add", void 0);
    RetaddpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retaddpayment',
            template: __webpack_require__(857),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RetaddpaymentComponent);
    return RetaddpaymentComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/retaddpayment.component.js.map

/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReteditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReteditprofileComponent = (function () {
    function ReteditprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ReteditprofileComponent.prototype.ngOnInit = function () {
        this.posts = {
            name: this.user[0].name,
            ctype: this.user[0].companytype,
            address: this.user[0].address,
            cname: this.user[0].companyname,
            phone: this.user[0].phone
        };
    };
    ReteditprofileComponent.prototype.save = function (model, isValid) {
        var _this = this;
        var data = {
            name: model.name,
            companytype: model.ctype,
            phone: model.phone,
            address: model.add,
            companyname: model.cname
        };
        this.authService.updateretprofile(data).subscribe(function (data) {
            if (data.ok) {
                _this.flashMessage.show('Profile updated', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['ret/dashboard']);
            }
            else {
                _this.flashMessage.show('error', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ReteditprofileComponent.prototype, "user", void 0);
    ReteditprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reteditprofile',
            template: __webpack_require__(858),
            styles: [__webpack_require__(787)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], ReteditprofileComponent);
    return ReteditprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/reteditprofile.component.js.map

/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function RethistoryComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RethistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RethistoryComponent.prototype, "history", void 0);
    RethistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rethistory',
            template: __webpack_require__(859),
            styles: [__webpack_require__(788)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RethistoryComponent);
    return RethistoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/rethistory.component.js.map

/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function RetmainComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RetmainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.retpayment().subscribe(function (pay) {
            console.log(pay);
            _this.payment = pay.payment;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    RetmainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retmain',
            template: __webpack_require__(860),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RetmainComponent);
    return RetmainComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/retmain.component.js.map

/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetnotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetnotifyComponent = (function () {
    function RetnotifyComponent() {
    }
    RetnotifyComponent.prototype.ngOnInit = function () {
    };
    RetnotifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retnotify',
            template: __webpack_require__(861),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetnotifyComponent);
    return RetnotifyComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retnotify.component.js.map

/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function RetpaymentComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RetpaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.retpayment().subscribe(function (pay) {
            console.log(pay);
            _this.payment = pay.payment;
        }, function (err) {
            console.log("error");
            return false;
        });
        this.authService.retpaymenthis().subscribe(function (his) {
            // console.log(his[0].pay_his);
            _this.history = his[0].pay_his;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    RetpaymentComponent.prototype.onadd = function (event) {
        // console.log(event.rs);
        var _this = this;
        this.authService.retaddpayment(event.rs).subscribe(function (rs) {
            var a = event.rs;
            // console.log(a.rs);
            _this.authService.retpaymenthis().subscribe(function (his) {
                // console.log(his[0].pay_his);
                _this.history = his[0].pay_his;
                _this.authService.retpayment().subscribe(function (pay) {
                    console.log(pay);
                    _this.payment = pay.payment;
                }, function (err) {
                    console.log("error");
                    return false;
                });
            }, function (err) {
                console.log("error");
                return false;
            });
            if (rs.ok) {
                _this.flashMessage.show('You money added', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.payment += a.rs;
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    RetpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retpayment',
            template: __webpack_require__(862),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RetpaymentComponent);
    return RetpaymentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/retpayment.component.js.map

/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetpaymenthisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RetpaymenthisComponent = (function () {
    function RetpaymenthisComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RetpaymenthisComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RetpaymenthisComponent.prototype, "history", void 0);
    RetpaymenthisComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retpaymenthis',
            template: __webpack_require__(863),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RetpaymenthisComponent);
    return RetpaymenthisComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/retpaymenthis.component.js.map

/***/ }),
/* 557 */
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
            template: __webpack_require__(864),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetproductComponent);
    return RetproductComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retproduct.component.js.map

/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function RetprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RetprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileret().subscribe(function (profile) {
            _this.user = profile;
            console.log(_this.user);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    RetprofileComponent.prototype.editprofile = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
    };
    RetprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-retprofile',
            template: __webpack_require__(865),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], RetprofileComponent);
    return RetprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/retprofile.component.js.map

/***/ }),
/* 559 */
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
            template: __webpack_require__(866),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [])
    ], RetreviewComponent);
    return RetreviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/retreview.component.js.map

/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function RettrackComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.wtrack = false;
    }
    RettrackComponent.prototype.ngOnInit = function () {
    };
    RettrackComponent.prototype.ontrack = function (event) {
        var _this = this;
        this.wtrack = true;
        this.authService.trackbyref(event.track).subscribe(function (pay) {
            _this.trackd = pay[0].track[0].location;
            console.log(pay);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    RettrackComponent.prototype.close = function () {
        this.wtrack = false;
    };
    RettrackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rettrack',
            template: __webpack_require__(867),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RettrackComponent);
    return RettrackComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/rettrack.component.js.map

/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RettrackidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RettrackidComponent = (function () {
    function RettrackidComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RettrackidComponent.prototype.ngOnInit = function () {
    };
    RettrackidComponent.prototype.onaddSubmit = function () {
        var a = {
            track: this.track
        };
        this.add.emit({ track: a });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RettrackidComponent.prototype, "add", void 0);
    RettrackidComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rettrackid',
            template: __webpack_require__(868),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RettrackidComponent);
    return RettrackidComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/rettrackid.component.js.map

/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RettrackviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RettrackviewComponent = (function () {
    function RettrackviewComponent() {
    }
    RettrackviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RettrackviewComponent.prototype, "trackd", void 0);
    RettrackviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rettrackview',
            template: __webpack_require__(869),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [])
    ], RettrackviewComponent);
    return RettrackviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/rettrackview.component.js.map

/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddcropComponent = (function () {
    function AddcropComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddcropComponent.prototype.ngOnInit = function () {
    };
    AddcropComponent.prototype.oncropSubmit = function () {
        var a = {
            crops: this.crop
        };
        this.add.emit({ crops: a });
        this.crop = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AddcropComponent.prototype, "add", void 0);
    AddcropComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addcrop',
            template: __webpack_require__(870),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddcropComponent);
    return AddcropComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/addcrop.component.js.map

/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CroplistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CroplistComponent = (function () {
    function CroplistComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CroplistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CroplistComponent.prototype, "crops", void 0);
    CroplistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-croplist',
            template: __webpack_require__(871),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CroplistComponent);
    return CroplistComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/croplist.component.js.map

/***/ }),
/* 565 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
            _this.user = profile[0];
            // console.log(profile);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    userDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(872),
            styles: [__webpack_require__(801)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], userDashboardComponent);
    return userDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/dashboard.component.js.map

/***/ }),
/* 566 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], userLoginComponent);
    return userLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/login.component.js.map

/***/ }),
/* 567 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
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
            template: __webpack_require__(874),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], userRegisterComponent);
    return userRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/register.component.js.map

/***/ }),
/* 568 */
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
            template: __webpack_require__(875),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserchatComponent);
    return UserchatComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/userchat.component.js.map

/***/ }),
/* 569 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(876),
            styles: [__webpack_require__(805)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsercropdiaryComponent);
    return UsercropdiaryComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/usercropdiary.component.js.map

/***/ }),
/* 570 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function UsermainComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UsermainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getcrops().subscribe(function (crops) {
            _this.crops = crops.crops;
            // console.log(this.crops);
        }, function (err) {
            console.log("error");
            return false;
        });
        this.authService.userpayment().subscribe(function (pay) {
            _this.payment = pay.payment;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UsermainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usermain',
            template: __webpack_require__(877),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsermainComponent);
    return UsermainComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/usermain.component.js.map

/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsernotifyComponent = (function () {
    function UsernotifyComponent() {
    }
    UsernotifyComponent.prototype.ngOnInit = function () {
    };
    UsernotifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usernotify',
            template: __webpack_require__(878),
            styles: [__webpack_require__(807)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsernotifyComponent);
    return UsernotifyComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/usernotify.component.js.map

/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
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
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PaymenthisComponent.prototype, "history", void 0);
    PaymenthisComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paymenthis',
            template: __webpack_require__(879),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PaymenthisComponent);
    return PaymenthisComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/paymenthis.component.js.map

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PaymenttempComponent);
    return PaymenttempComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/paymenttemp.component.js.map

/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
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
        this.authService.userpaymenthis().subscribe(function (his) {
            // console.log(his[0].pay_his);
            _this.history = his[0].pay_his;
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
            _this.authService.userpaymenthis().subscribe(function (his) {
                // console.log(his[0].pay_his);
                _this.history = his[0].pay_his;
            }, function (err) {
                console.log("error");
                return false;
            });
            if (rs.ok) {
                _this.flashMessage.show('You money added', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.payment += a.rs;
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    UserpaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userpayment',
            template: __webpack_require__(881),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], UserpaymentComponent);
    return UserpaymentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/userpayment.component.js.map

/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
        this.like = false;
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
    UserpostsComponent.prototype.onlike = function (i) {
        if (this.like) {
            this.like = false;
        }
        else {
            this.like = true;
        }
    };
    UserpostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userposts',
            template: __webpack_require__(882),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserpostsComponent);
    return UserpostsComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/userposts.component.js.map

/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(4);
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserproductComponent);
    return UserproductComponent;
    var _a;
}());
//# sourceMappingURL=S:/Agri/front/src/userproduct.component.js.map

/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercropsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsercropsComponent = (function () {
    function UsercropsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UsercropsComponent.prototype.ngOnInit = function () {
    };
    // ngOnChanges(changes) {
    //     console.log('Changed', changes.crops.currentValue, changes.crops.previousValue);
    //   }
    UsercropsComponent.prototype.deletecrop = function (a, id) {
        // console.log(a);
        // console.log(id);
        var _this = this;
        this.authService.deletecrops(id).subscribe(function (post) {
            _this.crops.splice(a, 1);
            // console.log(post);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UsercropsComponent.prototype, "crops", void 0);
    UsercropsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usercrops',
            template: __webpack_require__(884),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsercropsComponent);
    return UsercropsComponent;
    var _a, _b;
}());
//# sourceMappingURL=S:/Agri/front/src/usercrops.component.js.map

/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsereditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsereditprofileComponent = (function () {
    function UsereditprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    UsereditprofileComponent.prototype.ngOnInit = function () {
        console.log(this.post);
        this.posts = {
            name: this.post[0].name,
            irr: this.post[0].irr,
            address: this.post[0].address,
            acres: this.post[0].acres,
            farm: this.post[0].farm,
            soil: this.post[0].soiltype
        };
    };
    UsereditprofileComponent.prototype.save = function (model, isValid) {
        var _this = this;
        var data = {
            name: model.name,
            irr: model.irr,
            soiltype: model.soil,
            address: model.add,
            farm: model.farm,
            acres: model.acres
        };
        this.authService.updateuserprofile(data).subscribe(function (data) {
            if (data.ok) {
                _this.flashMessage.show('Profile updated', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
                _this.router.navigate(['user/dashboard']);
            }
            else {
                _this.flashMessage.show('error', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UsereditprofileComponent.prototype, "post", void 0);
    UsereditprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usereditprofile',
            template: __webpack_require__(885),
            styles: [__webpack_require__(814)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], UsereditprofileComponent);
    return UsereditprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/usereditprofile.component.js.map

/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function UserprofileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.edit = false;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (post) {
            _this.post = post;
            // console.log(this.post);
        }, function (err) {
            console.log("error");
            return false;
        });
        this.authService.getcrops().subscribe(function (crops) {
            _this.crops = crops.crops;
            // console.log(this.crops);
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    UserprofileComponent.prototype.onadd = function (event) {
        var _this = this;
        // console.log(event);
        this.authService.addcrops(event).subscribe(function (rs) {
            if (rs.ok) {
                _this.authService.getcrops().subscribe(function (crops) {
                    _this.crops = crops.crops;
                    // console.log(this.crops);
                }, function (err) {
                    console.log("error");
                    return false;
                });
                _this.flashMessage.show('Your crops added', {
                    cssClass: 'alert-success',
                    timeout: 1000 });
            }
            else {
                _this.flashMessage.show('someerror', {
                    cssClass: 'alert-danger',
                    timeout: 1000 });
            }
        });
    };
    UserprofileComponent.prototype.editprofile = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
    };
    UserprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(886),
            styles: [__webpack_require__(815)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], UserprofileComponent);
    return UserprofileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/userprofile.component.js.map

/***/ }),
/* 580 */
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
            template: __webpack_require__(887),
            styles: [__webpack_require__(816)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserreviewComponent);
    return UserreviewComponent;
}());
//# sourceMappingURL=S:/Agri/front/src/userreview.component.js.map

/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhetherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhetherComponent = (function () {
    function WhetherComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    WhetherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getweather().subscribe(function (post) {
            _this.high = post.forecast.simpleforecast.forecastday["0"].high.celsius;
            _this.low = post.forecast.simpleforecast.forecastday["0"].low.celsius;
        }, function (err) {
            console.log("error");
            return false;
        });
    };
    WhetherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-whether',
            template: __webpack_require__(888),
            styles: [__webpack_require__(817)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servies_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], WhetherComponent);
    return WhetherComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=S:/Agri/front/src/whether.component.js.map

/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servies_auth_service__ = __webpack_require__(3);
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
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortbydatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortbydatePipe = (function () {
    function SortbydatePipe() {
    }
    SortbydatePipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    SortbydatePipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    SortbydatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortbydate'
        }), 
        __metadata('design:paramtypes', [])
    ], SortbydatePipe);
    return SortbydatePipe;
}());
//# sourceMappingURL=S:/Agri/front/src/sortbydate.pipe.js.map

/***/ }),
/* 584 */
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
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 748 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 749 */
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),
/* 750 */
/***/ (function(module, exports) {

module.exports = ".form-group input{\r\n\tmargin-bottom: 10px;\r\n}"

/***/ }),
/* 751 */
/***/ (function(module, exports) {

module.exports = "#main{\r\npadding-top: 30px;\r\n}\r\n"

/***/ }),
/* 752 */
/***/ (function(module, exports) {

module.exports = "#notify{\r\n\twidth: 600px;\r\n\t\r\n}"

/***/ }),
/* 753 */
/***/ (function(module, exports) {

module.exports = "legend{\r\n\tfont-size: 20px;\r\n}"

/***/ }),
/* 754 */
/***/ (function(module, exports) {

module.exports = "#post{\r\n\tpadding-top: 60px;\r\n\tpadding-left: 10px;\r\n}\r\n#post input,textarea{\r\n\twidth: 400px;\r\n}\r\n#posts{\r\n\t list-style-type: none;\r\n}\r\na{\r\nfloat: right;\r\n}\r\nspan{\r\n\tfloat: right;\r\n}"

/***/ }),
/* 755 */
/***/ (function(module, exports) {

module.exports = "#postlist{\r\n\twidth: 500px;\r\n}"

/***/ }),
/* 756 */
/***/ (function(module, exports) {

module.exports = "#profile{\r\n\tmargin-top: 60px;\r\n\ttext-align: center;\r\n\r\n}\r\n#edit{\r\n\tpadding:10px;\r\n\tfloat: right;\r\n}\r\n"

/***/ }),
/* 757 */
/***/ (function(module, exports) {

module.exports = "p{\r\n\tpadding-top: 100px;\r\n}"

/***/ }),
/* 758 */
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n    \r\n}\r\nul {\r\n\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\n    span{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}\r\n"

/***/ }),
/* 759 */
/***/ (function(module, exports) {

module.exports = "\r\n#form{\r\n\t\r\n  position: relative;\r\nmargin-top: 100px;\r\n height: auto;\r\n\twidth: 600px;\r\n\r\n  border-radius: 3px;\r\n\r\n margin-bottom: 200px;\r\n border-radius: 5px;\r\n\r\n/*background-color: ;*/\r\nfont-size: 15px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 300px;\r\n   margin-bottom: -1px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 0;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\nh3{\r\n  /*color: white;*/\r\n}\r\n"

/***/ }),
/* 760 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 761 */
/***/ (function(module, exports) {

module.exports = "footer{\r\nbackground: #f7f7f7;\r\npadding: 60px 20px;\r\n}\r\nfooter ul, footer p{\r\nmargin-bottom: 0;\r\n}\r\nfooter .footer-block{\r\nmargin-bottom: 30px;\r\n}\r\nfooter a{\r\ncolor: #188b87;\r\n}\r\nfooter .footer-menu a{\r\ntext-transform: uppercase;\r\n}\r\nfooter .social-icon a{\r\ndisplay: block;\r\nwidth: 40px;\r\nheight: 40px;\r\nline-height: 40px;\r\ntext-align: center;\r\nborder:1px solid #ddd;\r\n}\r\n@media (max-width: 767px){\r\nfooter .footer-menu{\r\ntext-align: center;\r\n}\r\nfooter .social-icon{\r\nfloat: none !important;\r\ntext-align: center;\r\n}\r\n}"

/***/ }),
/* 762 */
/***/ (function(module, exports) {

module.exports = ".imagewidth{\r\n  min-width: 100%;\r\n}\r\n\r\n.carousel .item {\r\n  height: 400px;\r\n\r\n}\r\n/*#we{\r\n    border-style: solid;\r\n    border-bottom: thick dotted red;\r\n}*/\r\n.carousel-caption h1 {\r\n  z-index: 10;\r\n    display:inline-block;\r\n    border-bottom:3px solid #f7f7f7;\r\n    padding-bottom:2px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.carousel-inner > .item > img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n    min-width: 100%;\r\nheight: 400px;\r\n}\r\n\r\n.item img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    min-height: 100px;\r\n}\r\n\r\n/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-4 {\r\n\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.marketing h2 {\r\n\r\n  font-weight: normal;\r\n}\r\n.marketing .col-lg-4 p {\r\n  margin-right: 10px;\r\n}\r\n.marketing{\r\n  margin-top: 20px;\r\n  margin-bottom:100px; \r\n}\r\n\r\n\r\n"

/***/ }),
/* 763 */
/***/ (function(module, exports) {

module.exports = "#addlocation{\r\n\twidth: 600px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding: 15px;\r\n\tborder-radius: 3px;\r\n}"

/***/ }),
/* 764 */
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n}\r\nul {\r\n\t\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),
/* 765 */
/***/ (function(module, exports) {

module.exports = "#loc,#mail,#address,#phone{\r\n\tpadding-right: 10px;\r\n}\r\n#location{\r\n\twidth: 600px;\r\n}"

/***/ }),
/* 766 */
/***/ (function(module, exports) {

module.exports = "#amount{\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n\tpadding-left: 10px;\r\n}\r\nlabel{\r\n\tpadding-right: 10px;\r\n}\r\nbutton{\r\n\tmargin-left: 10px;\r\n}"

/***/ }),
/* 767 */
/***/ (function(module, exports) {

module.exports = ".form-group input{\r\n\tmargin-bottom: 10px;\r\n}"

/***/ }),
/* 768 */
/***/ (function(module, exports) {

module.exports = "\r\n#form{\r\n\t\r\n  position: relative;\r\nmargin-top: 100px;\r\n height: auto;\r\n\twidth: 600px;\r\n\r\n  border-radius: 3px;\r\npadding-left: 100px;\r\n margin-bottom: 200px;\r\n border-radius: 5px;\r\n\r\n/*background-color: ;*/\r\nfont-size: 15px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 300px;\r\n   margin-bottom: -1px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 0;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\nh3{\r\n  /*color: white;*/\r\n}\r\n"

/***/ }),
/* 769 */
/***/ (function(module, exports) {

module.exports = "#balance{\r\n\tpadding: 15px;\r\n\tbackground-color: #f7f7f7;\r\n\tborder-radius: 3px;\r\n\twidth: 300px;\r\n\tmargin-top: 20px;\r\n}\r\n#logmain{\r\n\tmargin-top: 20px;\r\n}"

/***/ }),
/* 770 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 771 */
/***/ (function(module, exports) {

module.exports = "\r\n#payment{\r\n\tpadding-top: 30px;\r\n\r\n}\r\n#cash{\r\n\tmargin-bottom: 40px;\r\n}\r\n#balance{\r\n\tmargin-top: 20px;\r\n\tpadding-top: 10px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n}\r\n#addcash{\r\n\tmargin-left: 5px;\r\n}"

/***/ }),
/* 772 */
/***/ (function(module, exports) {

module.exports = "#history{\r\n\theight: 200px;\r\n}\r\nspan{\r\n\tpadding-right:30px;\r\n}\r\n"

/***/ }),
/* 773 */
/***/ (function(module, exports) {

module.exports = "#profile{\r\n\tmargin-top: 60px;\r\n\ttext-align: center;\r\n\r\n}\r\n#edit{\r\n\tpadding:10px;\r\n\tfloat: right;\r\n}\r\n"

/***/ }),
/* 774 */
/***/ (function(module, exports) {

module.exports = "#logtrack{\r\n\tmargin-top: 20px;\r\n}\r\n.fa{\r\n\tfloat: right;\r\n}"

/***/ }),
/* 775 */
/***/ (function(module, exports) {

module.exports = "#update{\r\n\tmargin-top: 20px;\r\n}"

/***/ }),
/* 776 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 777 */
/***/ (function(module, exports) {

module.exports = "#trackview{\r\n\tpadding-top: 20px;\r\n\tpadding: 30px;\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 600px;\r\n\tmargin-top: 10px;\r\n}\r\nspan{\r\n\tpadding-left: 10px;\r\n}"

/***/ }),
/* 778 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 779 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 780 */
/***/ (function(module, exports) {

module.exports = "#Updatetrack{\r\n\twidth: 600px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding: 15px;\r\n\tborder-radius: 3px;\r\n}"

/***/ }),
/* 781 */
/***/ (function(module, exports) {

module.exports = ".col-sm-3{\r\n\t/*padding: 20px;*/\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 60px;\r\n\tmargin-bottom: 150px;\r\n\tfont-size: 30px;\r\n\t border: 1px solid #3DB84E;\r\n\t margin-top: 100px;\r\n\t padding-left: 20px;\r\n\t /*margin-left: 5px;*/\r\n\t border-radius: 3px;\r\n\t text-transform: capitalize;\r\n\t text-align: center;\r\n\t text-decoration: none;\r\n}\r\n.page-header{\r\n\tbackground-color: #f7f7f7;\r\n\tpadding: 10px;\r\n\tborder-radius: 3px;\r\n}\r\n#login{\r\n\tpadding-top: 10px;\r\n}\r\n.col-sm-3 a{\r\n\t text-decoration: none;\r\n}\r\n\r\n"

/***/ }),
/* 782 */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\nbackground-color: #1abc9c;\r\n\r\nmargin-bottom: 0px;\r\n\r\n}\r\n#navbar{\r\n\tcolor: #000000;\r\n}"

/***/ }),
/* 783 */
/***/ (function(module, exports) {

module.exports = "div{\r\n\tmargin:0;\r\n}\r\nul {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),
/* 784 */
/***/ (function(module, exports) {

module.exports = "\r\n#form{\r\n\t\r\n  position: relative;\r\nmargin-top: 100px;\r\n height: auto;\r\n\twidth: 600px;\r\n\r\n  border-radius: 3px;\r\npadding-left: 100px;\r\n margin-bottom: 200px;\r\n border-radius: 5px;\r\n\r\n/*background-color: ;*/\r\nfont-size: 15px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 300px;\r\n   margin-bottom: -1px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 0;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\nh3{\r\n  /*color: white;*/\r\n}\r\n"

/***/ }),
/* 785 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 786 */
/***/ (function(module, exports) {

module.exports = "#amount{\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n\tpadding-left: 10px;\r\n}\r\nlabel{\r\n\tpadding-right: 10px;\r\n}\r\nbutton{\r\n\tmargin-left: 10px;\r\n}"

/***/ }),
/* 787 */
/***/ (function(module, exports) {

module.exports = ".form-group input{\r\n\tmargin-bottom: 10px;\r\n}"

/***/ }),
/* 788 */
/***/ (function(module, exports) {

module.exports = "#history{\r\n\theight: 200px;\r\n}\r\nspan{\r\n\tpadding-right:30px;\r\n}\r\n"

/***/ }),
/* 789 */
/***/ (function(module, exports) {

module.exports = "#balance{\r\n\tmargin-top: 20px;\r\n\tpadding-top: 10px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n}"

/***/ }),
/* 790 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 791 */
/***/ (function(module, exports) {

module.exports = "#payment{\r\n\tpadding-top: 30px;\r\n\r\n}\r\n#cash{\r\n\tmargin-bottom: 40px;\r\n}\r\n#balance{\r\n\tmargin-top: 20px;\r\n\tpadding-top: 10px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n}\r\n#addcash{\r\n\tmargin-left: 5px;\r\n}"

/***/ }),
/* 792 */
/***/ (function(module, exports) {

module.exports = "#history{\r\n\theight: 200px;\r\n}\r\nspan{\r\n\tpadding-right:30px;\r\n}\r\n"

/***/ }),
/* 793 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 794 */
/***/ (function(module, exports) {

module.exports = "#profile{\r\n\tmargin-top: 60px;\r\n\ttext-align: center;\r\n\r\n}\r\n#edit{\r\n\tpadding:10px;\r\n\tfloat: right;\r\n}"

/***/ }),
/* 795 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 796 */
/***/ (function(module, exports) {

module.exports = "#logtrack{\r\n\tmargin-top: 20px;\r\n}\r\n.fa{\r\n\tfloat: right;\r\n}"

/***/ }),
/* 797 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 798 */
/***/ (function(module, exports) {

module.exports = "#trackview{\r\n\tpadding-top: 20px;\r\n\tpadding: 30px;\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 600px;\r\n\tmargin-top: 10px;\r\n}\r\nspan{\r\n\tpadding-left: 10px;\r\n}"

/***/ }),
/* 799 */
/***/ (function(module, exports) {

module.exports = "input{\r\n\twidth: 300px;\r\n}"

/***/ }),
/* 800 */
/***/ (function(module, exports) {

module.exports = "span{\r\n\tfloat: right;\r\n}\r\n#croplist{\r\n\tpadding: 20px;\r\n\tbackground-color: #f7f7f7;\r\n\tborder-radius: 3px;\r\nwidth: 600px;\r\n\r\n}"

/***/ }),
/* 801 */
/***/ (function(module, exports) {

module.exports = "div{\r\n  margin:0;\r\n  padding: 0;\r\n}\r\nul {\r\n \r\n  width: 100%;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n\r\n\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n#subnav{\r\n        padding-bottom: 70px;\r\n}\r\nspan{\r\n    color: white;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    text-transform: capitalize;\r\n\r\n    float: right;\r\n   margin-right: 20px;\r\n}"

/***/ }),
/* 802 */
/***/ (function(module, exports) {

module.exports = "\r\n#form{\r\n\t\r\n  position: relative;\r\nmargin-top: 100px;\r\n height: auto;\r\n\twidth: 600px;\r\n\r\n  border-radius: 3px;\r\npadding-left: 100px;\r\n margin-bottom: 200px;\r\n border-radius: 5px;\r\n\r\n/*background-color: ;*/\r\nfont-size: 15px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 300px;\r\n   margin-bottom: -1px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 0;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\nh3{\r\n  /*color: white;*/\r\n}\r\n"

/***/ }),
/* 803 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 804 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 805 */
/***/ (function(module, exports) {

module.exports = "span{\r\n\tfloat: right;\r\n}\r\n#cropdiary{\r\n\tpadding-top: 30px;\r\n}"

/***/ }),
/* 806 */
/***/ (function(module, exports) {

module.exports = "#balance{\r\n\tpadding: 20px;\r\n\tborder-radius: 3px;\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 400px;\r\n\tmargin-bottom: 50px;\r\n\r\n}"

/***/ }),
/* 807 */
/***/ (function(module, exports) {

module.exports = "#notify{\r\n\twidth: 600px;\r\n\t\r\n}"

/***/ }),
/* 808 */
/***/ (function(module, exports) {

module.exports = "#history{\r\n\theight: 200px;\r\n}\r\nspan{\r\n\tpadding-right:30px;\r\n}"

/***/ }),
/* 809 */
/***/ (function(module, exports) {

module.exports = "#amount{\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n\tpadding-left: 10px;\r\n}\r\nlabel{\r\n\tpadding-right: 10px;\r\n}\r\nbutton{\r\n\tmargin-left: 10px;\r\n}"

/***/ }),
/* 810 */
/***/ (function(module, exports) {

module.exports = "#payment{\r\n\tpadding-top: 30px;\r\n\r\n}\r\n#cash{\r\n\tmargin-bottom: 40px;\r\n}\r\n#balance{\r\n\tmargin-top: 20px;\r\n\tpadding-top: 10px;\r\n\tbackground-color: #f7f7f7;\r\n\tpadding-bottom: 10px;\r\n\tborder-radius: 3px;\r\n}\r\n#addcash{\r\n\tmargin-left: 5px;\r\n}\r\n"

/***/ }),
/* 811 */
/***/ (function(module, exports) {

module.exports = "#posts{\r\n\tpadding-top: 40px;\r\n}\r\n\r\n.caption{\r\n\tbackground-color: #f7f7f7;\r\n}\r\nspan{\r\n\tfloat: right;\r\n}\r\n\r\n.panel-heading,.panel-footer{\r\n\tbackground-color: #f7f7f7;\r\n}"

/***/ }),
/* 812 */
/***/ (function(module, exports) {

module.exports = "\r\n   \r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n \r\n    html, body { height: 100%; }\r\n\r\n "

/***/ }),
/* 813 */
/***/ (function(module, exports) {

module.exports = "span{\r\n\tfloat: right;\r\n}"

/***/ }),
/* 814 */
/***/ (function(module, exports) {

module.exports = ".form-group input{\r\n\tmargin-bottom: 10px;\r\n}"

/***/ }),
/* 815 */
/***/ (function(module, exports) {

module.exports = "#profile{\r\n\tbackground:#ECF0F1;\r\n\tmargin-top: 30px;\r\n\tborder-radius: 5px;\r\n}\r\n#addcrop{\r\nmargin-top: 30px;\r\n}\r\n#croplist{\r\n\tmargin-top: 40px;\r\n}\r\n#usercrops{\r\n\tmargin-top: 40px;\r\n}\r\n#edit{\r\n\tfloat: right;\r\n\t\r\n\tpadding: 5px;\r\n\tborder-radius: 3px;\r\n}"

/***/ }),
/* 816 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 817 */
/***/ (function(module, exports) {

module.exports = "#weather{\r\n\twidth: 400px;\r\n\tpadding: 20px;\r\n\tborder-radius: 3px;\r\n\tbackground-color: #f7f7f7;\r\n\t}"

/***/ }),
/* 818 */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar>\n</app-navbar>\n<flash-messages></flash-messages>\n\n  <router-outlet></router-outlet>\n\n<app-footer>\n</app-footer>\n"

/***/ }),
/* 819 */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),
/* 820 */
/***/ (function(module, exports) {

module.exports = "<p>\n  agrichat works!\n</p>\n"

/***/ }),
/* 821 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\"> \n\n <div class=\"row\">\n <div class=\"col-md-6\">\n<form #f=\"ngForm\" (ngSubmit)=\"save(f.value, f.valid)\" novalidate>\n           <legend>Edit Profile</legend>\n<div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"name\" [(ngModel)]=\"posts.name\" \n            #name=\"ngModel\" required minlength=\"5\" class=\"form-control\">\n        \n        \n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Address</label>\n    <div class=\"col-sm-7\">\n       <input type=\"text\" \n            name=\"add\" [(ngModel)]=\"posts.address\" \n            #add=\"ngModel\" required minlength=\"5\" class=\"form-control\">\n      \n       \n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">College</label>\n    <div class=\"col-sm-7\">\n     <input type=\"text\" \n            name=\"clg\" [(ngModel)]=\"posts.clg\" \n            #clg=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n       \n     \n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Email</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"email\" [(ngModel)]=\"posts.email\" \n            #email=\"ngModel\" required class=\"form-control\" >\n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Qualification</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"qua\" [(ngModel)]=\"posts.qua\" \n            #qua=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n        \n      \n    </div>\n  </div>\n    \n  <div class=\"form-group\"> \n  <div class=\"col-md-offset-5 col-md-7\"> \n  <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Submit</button>\n  </div> </div>\n </form>\n\n\n </div> \n\n\n </div>\n\n</div>\n\n\n\n"

/***/ }),
/* 822 */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\"> \n<div class=\"container-fluid\"> \n<div class=\"row\">\n<div class=\"col-md-6\">\n <app-agrinotify>\n</app-agrinotify>\n\n</div> \n<div class=\"col-md-6\"> \n<app-whether>\n</app-whether>\n</div>\n\n</div>\n</div>\n\n\n</div>\n\n\n<app-agripostlist>\n</app-agripostlist>\n"

/***/ }),
/* 823 */
/***/ (function(module, exports) {

module.exports = "<div id=\"notify\"> \n<h3> Spotlight</h3>\n<div class=\"list-group\">\n\t<a class=\"list-group-item active\">\n\t\t<h4 class=\"list-group-item-heading\">Welcome to Agri Assistant</h4>\n\t\t<!-- <p class=\"list-group-item-text\">Content goes here</p> -->\n\t</a>\n</div>\n\n\n</div>\n"

/***/ }),
/* 824 */
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"onpostSubmit()\" class=\"form-horizontal\" role=\"form\">\n\t\t<div class=\"form-group\">\n\t\t\t<legend>Post</legend>\n\t\t</div>\n <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\"  [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\n  </div>\n   <div class=\"form-group\">\n    <label>content</label>\n   \n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Tag</label>\n   \n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"tag\" name=\"tag\"></textarea>\n  </div>\n<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-9 col-sm-offset-3\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n</form>\n"

/***/ }),
/* 825 */
/***/ (function(module, exports) {

module.exports = "<div id=\"post\"> \n<div class=\"row\"> \n<div class=\"col-md-6\">\n  \n\n<app-addpost (userCreated)=onUserCreated($event)></app-addpost>\n</div>\n<div class=\"col-md-6\"> \n<div *ngIf=\"post\"> \n<h4> List of posts</h4>\n <ul id=\"posts\" class=\"list-group\">\n      <li *ngFor=\"let posts of post;let i = index\" class=\"list-group-item\">\n      \n     \n\n         <h4 class=\"list-group-item-heading\">   {{i+1}}.{{ posts.title}}\n<span>\n        <i (click)=\"editpost(i,posts._id)\" class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"></i>\n<i (click)=\"deletepost(i,posts._id)\" class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></i>\n</span></h4>\n\n      </li>\n    </ul>\n\n\n</div>\n\n\n\n</div>\n\n\n</div>\n</div>"

/***/ }),
/* 826 */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"postlist\"> \n<div *ngIf=\"post\"> \n<h4> List of posts</h4>\n <ul id=\"posts\" class=\"list-group\">\n      <li *ngFor=\"let posts of post;let i = index\" class=\"list-group-item\">\n      \n     \n\n         <h4 class=\"list-group-item-heading\">   {{i+1}}.{{ posts.title}}\n</h4>\n\n      </li>\n    </ul>\n\n\n</div>\n</div>"

/***/ }),
/* 827 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> \n<div *ngFor=\"let posts of user\" > \n<form class=\"form-horizontal\">\n<legend align=\"center\">Profile<h6  (click)=\"editprofile()\" class=\"btn-primary\" id=\"edit\"> Edit Profile</h6></legend>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.name}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.phone}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Email:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.email}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Address:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.address}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">College:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.clg}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Qulification:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.qualification}}</p>\n    </div>\n  </div>\n</form>\n</div>\n</div>\n\n\n\n<div *ngIf=\"edit\"> \n<app-agrieditprofile [user]=\"user\" >\n</app-agrieditprofile>\n\n</div>\n"

/***/ }),
/* 828 */
/***/ (function(module, exports) {

module.exports = "<p>\n  agrireview works!\n</p>\n"

/***/ }),
/* 829 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/profile']\">Profile</a></li>\t\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/chat']\">Chat</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/post']\">Post</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/agri/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n\n <router-outlet></router-outlet>\n\n\n\n</div>\n"

/***/ }),
/* 830 */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\" id=\"form\"> \n   <h3 >Login</h3>\n   <hr>\n   <div class=\"container\"> \n   <div class=\"row\"> \n   <div class=\"col-lg-12\"> \n<form class=\"form-horizontal\" (submit)=\"onLoginSubmit()\" >\n \n  <div class=\"form-group\">\n\n   <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n\n  </div>\n \n\n  </div>\n</form>\n</div>\n\n\n</div>\n\n\n</div>\n</div>\n\n"

/***/ }),
/* 831 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>College</label>\n    <input type=\"text\" [(ngModel)]=\"clg\" name=\"clg\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Qua</label>\n    <input type=\"text\" [(ngModel)]=\"qua\" name=\"qua\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n"

/***/ }),
/* 832 */
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"footer-block\">\n\t\t\t\t\t<ul class=\"list-inline footer-menu\">\n\t\t\t\t\t\t<li><a href=\"\">Term of Use</a></li>\n\t\t\t\t\t\t<li><a href=\"\">Privacy Policy</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"footer-block text-center\">\n\t\t\t\t\t<p class=\"copyright\">\n\t\t\t\t\t\t© 2017 Agri Assistant. All rights reserved.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"footer-block\">\n\t\t\t\t\t<ul class=\"list-inline pull-right social-icon\">\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),
/* 833 */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-id\" class=\"carousel slide\" data-ride=\"carousel\">\n\t<ol class=\"carousel-indicators\">\n\t\t<li data-target=\"#carousel-id\" data-slide-to=\"0\" class=\"\"></li>\n\t\t<li data-target=\"#carousel-id\" data-slide-to=\"1\" class=\"\"></li>\n\t\t<li data-target=\"#carousel-id\" data-slide-to=\"2\" class=\"active\"></li>\n\t</ol>\n\t<div class=\"carousel-inner\">\n\t\t<div class=\"item\">\n\t\t\t<img  src=\"https://c2.staticflickr.com/4/3917/14519616715_1ace0dbbd2_z.jpg\">\n\t\t\t\n\t\t\t<!-- https://c1.staticflickr.com/3/2856/9570394696_5c37583571_b.jpg -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h1></h1>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"item\">\n\t\t\t<img  src=\"https://c2.staticflickr.com/4/3864/14622107103_aece6d1f7b_c.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h1>Another example headline.</h1>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"item active\">\n\t\t\t<img  alt=\"Third slide\" src=\"https://c2.staticflickr.com/6/5474/9543384707_99767c8981_b.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h1>One more for good measure.</h1>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n <div class=\"container marketing\">\n\n      <!-- Three columns of text below the carousel -->\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"https://cdn3.iconfinder.com/data/icons/shopping-e-commerce-32/980/E-Commerce-19-128.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Assist</h2>\n     \n         \n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"https://cdn2.iconfinder.com/data/icons/circel-ui/212/2-128.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>upload</h2>\n         \n         \n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"http://www.iconsdb.com/icons/preview/caribbean-blue/sell-xxl.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Sell</h2>\n         \n          \n        </div><!-- /.col-lg-4 -->\n         <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQY8x_2x6EF6_wXxwB0bRu2bl3CCcD-S3qayMc8jyLyrAAzpwRa5ZnphME\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Review</h2>\n     \n         \n        </div>\n         <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8wQ88gK3DY6bFkTo2tnCtaUt5iokyfmC38di5dutBLR3vhCL_ho5TVg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Chat</h2>\n     \n         \n        </div>\n         <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img class=\"img-circle\" src=\"https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/search-circle-blue-512.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Discover New Method</h2>\n     \n         \n        </div>\n      </div><!-- /.row -->"

/***/ }),
/* 834 */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"addlocation\"> \n<h2> Add Location</h2>\n<form (submit)=\"onaddSubmit()\">\n <div class=\"form-group\">\n    <label>Location</label>\n    <input type=\"text\" [(ngModel)]=\"loc\" name=\"loc\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n \n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form></div>"

/***/ }),
/* 835 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/profile']\">Profile</a></li>\t\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/update']\">Update</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/payment']\">Payment</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log/dashboard/track']\">Track</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n"

/***/ }),
/* 836 */
/***/ (function(module, exports) {

module.exports = "<div id=\"location\"> \n<div *ngIf=\"loc\">\n<h2>Center</h2>\n<div *ngFor=\"let l of loc\">\n\n\n\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"> <span id=\"loc\"> {{l.location}}</span> <span id=\"mail\">{{l.email}} </span> \n  <span id=\"address\">{{l.address}}  </span> <span id=\"phone\">{{l.phone}} </span> </li>\n\n</ul>\n\n</div>\n\n</div>\n\n </div>\n"

/***/ }),
/* 837 */
/***/ (function(module, exports) {

module.exports = "<div id=\"amount\"> \n<h3> Add cash:</h3>\n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName2\"><h3>Amount </h3></label>\n\n    <input type=\"Number\" class=\"form-control\" [(ngModel)]=\"money\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\"  class=\"btn btn-default\">Add</button>\n</form>\n\n</div>\n\n"

/***/ }),
/* 838 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\"> \n\n <div class=\"row\">\n <div class=\"col-md-6\">\n<form #f=\"ngForm\" (ngSubmit)=\"save(f.value, f.valid)\" novalidate>\n           <legend>Edit Profile</legend>\n<div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"name\" [(ngModel)]=\"posts.name\" \n            #name=\"ngModel\" required minlength=\"5\" class=\"form-control\">\n        \n        \n    </div>\n  </div>\n  \n  \n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone</label>\n    <div class=\"col-sm-7\">\n     <input type=\"number\" \n            name=\"phone\" [(ngModel)]=\"posts.phone\" \n            #phone=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n       \n     \n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Email</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"cemail\" [(ngModel)]=\"posts.cmail\" \n            #cemail=\"ngModel\" required class=\"form-control\" >\n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Name</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"cname\" [(ngModel)]=\"posts.cname\" \n            #cname=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n        \n      \n    </div>\n  </div>\n    \n  <div class=\"form-group\"> \n  <div class=\"col-md-offset-5 col-md-7\"> \n  <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Submit</button>\n  </div> </div>\n </form>\n\n\n </div> \n\n\n </div>\n\n</div>\n\n\n\n\n"

/***/ }),
/* 839 */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container\" id=\"form\"> \n   <h3 >Login</h3>\n   <hr>\n   <div class=\"container\"> \n   <div class=\"row\"> \n   <div class=\"col-lg-12\"> \n<form class=\"form-horizontal\" (submit)=\"onLoginSubmit()\" >\n \n  <div class=\"form-group\">\n\n   <div class=\"form-group\">\n    <label>E-mail</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\"  class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n\n  </div>\n"

/***/ }),
/* 840 */
/***/ (function(module, exports) {

module.exports = "<div id=\"logmain\"> \n<div class=\"row\"> \n<div class=\"col-md-6\"> \n\n<app-lognotify>\n</app-lognotify>\n</div>\n<div class=\"col-md-6\"> \n<div id=\"balance\"> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment| currency:'INR':true}}</h2>\n</div>\n</div></div>\n<app-locationlist [loc]=\"loc\">\n</app-locationlist>\n</div>\n\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),
/* 841 */
/***/ (function(module, exports) {

module.exports = "<div id=\"notify\"> \n<h3> Spotlight</h3>\n<div class=\"list-group\">\n\t<a class=\"list-group-item active\">\n\t\t<h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t<p class=\"list-group-item-text\">Content goes here</p>\n\t</a>\n</div>\n\n\n</div>"

/***/ }),
/* 842 */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container-fluid\" id=\"payment\"> \n\n<div class=\"row\" id=\"cash\">\n<div class=\"col-md-4\" id=\"balance\"> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment| currency:'INR':true}}</h2>\n</div>\n</div>\n\n</div>\n<div class=\"col-md-6\" id=\"addcash\"> \n\n<app-logaddpayment (add)=onadd($event)>\n</app-logaddpayment>\n\n\n</div>\n </div>\n\n<div > \n\t<app-logpaymenthis [history]=\"history\" >\n</app-logpaymenthis>\n\n\n\n\n</div>\n</div>\n"

/***/ }),
/* 843 */
/***/ (function(module, exports) {

module.exports = "<div id=\"history\"> \n<h2> History:</h2>\n<div *ngIf=\"history\"> \n<div *ngFor=\"let his of history | sortbydate:date:false\"> \n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"><span>\n From:{{his.from}}</span><span>\n  To:{{his.to}} </span><span> {{his.amount | currency:'INR':true}}</span>\n\n<span>{{his.date | date | uppercase}}\n </span>\n  </li>\n\n</ul>\n\n</div>\n\n</div>\n\n\n</div>\n"

/***/ }),
/* 844 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> \n<div *ngFor=\"let posts of user\" > \n<form class=\"form-horizontal\">\n<legend align=\"center\">Profile<h6  (click)=\"editprofile()\" class=\"btn-primary\" id=\"edit\"> Edit Profile</h6></legend>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.name}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.phone}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Email:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.email}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.companyname}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Mail:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.cmail}}</p>\n    </div>\n  </div>\n \n</form>\n</div>\n</div>\n\n\n\n<div *ngIf=\"edit\"> \n<app-logeditprofile [user]=\"user\" >\n</app-logeditprofile>\n\n</div>\n\n"

/***/ }),
/* 845 */
/***/ (function(module, exports) {

module.exports = "<div id=\"logtrack\">\n<div class=\"row\">\n<div class=\"col-md-6\">\n<app-updatetrack>\n</app-updatetrack>\n</div> \n<div class=\"col-md-6\"> \n<app-trakpaymentupdate (add)=ontrack($event)>\n</app-trakpaymentupdate>\n<div *ngIf=\"wtrack\" > \n<i (click)=\"close()\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n</div>\n<div *ngIf=\"wtrack\"> \n<app-trackview [trackd]=\"trackd\">\n</app-trackview>\n</div>\n\n</div>\n</div> \n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),
/* 846 */
/***/ (function(module, exports) {

module.exports = "<div id=\"update\"> \n<div class=\"row\">\n<div class=\"col-md-6\">\n<app-locationlist [loc]=\"loc\">\n</app-locationlist>\n\n\n </div>\n <div class=\"col-md-6\">\n<app-addlocation (add)=onadd($event)>\n</app-addlocation>\n\n\t\n</div>\n </div>\n\n </div>"

/***/ }),
/* 847 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" [(ngModel)]=\"cname\" name=\"cname\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Company Mail</label>\n    <input type=\"text\" [(ngModel)]=\"cmail\" name=\"cmail\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),
/* 848 */
/***/ (function(module, exports) {

module.exports = "<div id=\"trackview\"> \n<div *ngIf=\"trackd\"> \n<div *ngFor=\"let t of trackd\"> \n\n\n\n\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">  {{t.location}}  \n   <span>{{t.Date | date | uppercase}} </span> </li>\n\n</ul>\n</div></div>\n</div>"

/***/ }),
/* 849 */
/***/ (function(module, exports) {

module.exports = "<div id=\"amount\"> \n<h3> Track order:</h3>\n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    \n\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"track\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\"  class=\"btn btn-default\">Add</button> \n</form>\n\n</div>\n"

/***/ }),
/* 850 */
/***/ (function(module, exports) {

module.exports = "<p>\n  updateprice works!\n</p>\n"

/***/ }),
/* 851 */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"Updatetrack\"> \n<h2> Update Track</h2>\n<form (submit)=\"onupSubmit()\">\n <div class=\"form-group\">\n    <label>Id</label>\n    <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Location</label>\n    <input type=\"text\" [(ngModel)]=\"loc\" name=\"loc\" class=\"form-control\" >\n  </div>\n  \n \n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form></div>\n"

/***/ }),
/* 852 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \" >\n    <div class=\"col-sm-3 \" >\n    \n    <div class=\"page-header\"> Agri </div>\n    <div id=\"login\"> \n<a [routerLink]=\"['/agri/login']\"> agri Login</a>\n\n    </div>\n     <div id=\"login\"> \n<a [routerLink]=\"['/agri/register']\"> agri Register</a>\n\n    </div>\n    \n   \n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">   Farmers</div>\n   <div id=\"login\"> \n<a [routerLink]=\"['/user/login']\"> User Login</a>\n\n    </div>\n    <div id=\"login\"> \n<a [routerLink]=\"['/user/register']\"> User Register</a>\n\n    </div>\n    \n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">LOG </div>\n      <div id=\"login\"> \n<a [routerLink]=\"['/log/login']\"> Log Login</a>\n\n    </div>\n  \n    <div id=\"login\"> \n <a [routerLink]=\"['/log/register']\"> Log Register</a>\n\n    </div>\n    </div>\n    <div class=\"col-sm-3\" >\n    <div class=\"page-header\">Consumer </div>\n      <div id=\"login\"> \n<a [routerLink]=\"['/ret/login']\"> RET Login</a>\n\n    </div>\n     <div id=\"login\"> \n<a [routerLink]=\"['/ret/register']\"> RET Register</a>\n\n    </div>\n   \n    </div>\n    \n  </div>\n"

/***/ }),
/* 853 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">AA</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          \n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login/register</a></li>\n\n           \n <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li> \n            <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav> \n   \n"

/***/ }),
/* 854 */
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/profile']\">Profile</a></li>  \n\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/product']\">Find Product</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/payment']\">Payment</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/history']\">History</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/track']\">Track</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/ret/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n\n"

/***/ }),
/* 855 */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container\" id=\"form\"> \n   <h3 >Login</h3>\n   <hr>\n   <div class=\"container\"> \n   <div class=\"row\"> \n   <div class=\"col-lg-12\"> \n<form class=\"form-horizontal\" (submit)=\"onLoginSubmit()\" >\n \n  <div class=\"form-group\">\n\n   <div class=\"form-group\">\n    <label>E-mail</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\"  class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n\n  </div>\n\n"

/***/ }),
/* 856 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" [(ngModel)]=\"cname\" name=\"cname\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" >\n  </div>\n   <div class=\"form-group\">\n    <label>Company type</label>\n    <input type=\"text\" [(ngModel)]=\"ctype\" name=\"ctype\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n"

/***/ }),
/* 857 */
/***/ (function(module, exports) {

module.exports = "<div id=\"amount\"> \n<h3> Add cash:</h3>\n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName2\"><h3>Amount </h3></label>\n\n    <input type=\"Number\" class=\"form-control\" [(ngModel)]=\"money\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\"  class=\"btn btn-default\">Add</button>\n</form>\n\n</div>\n\n"

/***/ }),
/* 858 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\"> \n\n <div class=\"row\">\n <div class=\"col-md-6\">\n<form #f=\"ngForm\" (ngSubmit)=\"save(f.value, f.valid)\" novalidate>\n           <legend>Edit Profile</legend>\n<div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"name\" [(ngModel)]=\"posts.name\" \n            #name=\"ngModel\" required minlength=\"5\" class=\"form-control\">\n        \n        \n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Address</label>\n    <div class=\"col-sm-7\">\n       <input type=\"text\" \n            name=\"add\" [(ngModel)]=\"posts.address\" \n            #add=\"ngModel\" required minlength=\"5\" class=\"form-control\">\n      \n       \n    </div>\n  </div>\n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company name</label>\n    <div class=\"col-sm-7\">\n     <input type=\"text\" \n            name=\"cname\" [(ngModel)]=\"posts.cname\" \n            #cname=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n       \n     \n    </div>\n  </div>\n    \n    <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"phone\" [(ngModel)]=\"posts.phone\" \n            #phone=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n        \n      \n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Type</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" \n            name=\"ctype\" [(ngModel)]=\"posts.ctype\" \n            #ctype=\"ngModel\" required minlength=\"3\" class=\"form-control\">\n        \n      \n    </div>\n  </div>\n\n    \n  <div class=\"form-group\"> \n  <div class=\"col-md-offset-5 col-md-7\"> \n  <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Submit</button>\n  </div> </div>\n </form>\n\n\n </div> \n\n\n </div>\n\n</div>\n\n\n\n\n"

/***/ }),
/* 859 */
/***/ (function(module, exports) {

module.exports = "<div id=\"history\"> \n<h2> History:</h2>\n<div *ngIf=\"history\"> \n<div *ngFor=\"let his of history | sortbydate:date:false\"> \n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"><span>\n From:{{his.from}}</span><span>\n  To:{{his.to}} </span><span> {{his.amount | currency:'INR':true}}</span>\n\n<span>{{his.date | date | uppercase}}\n </span>\n  </li>\n\n</ul>\n\n</div>\n\n</div>\n\n\n</div>\n\n"

/***/ }),
/* 860 */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\"> \n<div class=\"row\"> \n<div class=\"col-md-6\">\n<app-retnotify>\n</app-retnotify>\n </div>\n <div class=\"col-md-6\">\n\n<div id=\"balance\"> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment| currency:'INR':true}}</h2>\n</div>\n</div>\n</div>\n<app-rethistory>\n</app-rethistory>\n\n </div>\n\n</div>\n\n</div>\n\n\n\n"

/***/ }),
/* 861 */
/***/ (function(module, exports) {

module.exports = "<div id=\"notify\"> \n<h3> Spotlight</h3>\n<div class=\"list-group\">\n\t<a class=\"list-group-item active\">\n\t\t<h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t<p class=\"list-group-item-text\">Content goes here</p>\n\t</a>\n</div>\n\n\n</div>\n"

/***/ }),
/* 862 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"payment\"> \n\n<div class=\"row\" id=\"cash\">\n<div class=\"col-md-4\" id=\"balance\"> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment| currency:'INR':true}}</h2>\n</div>\n</div>\n\n</div>\n<div class=\"col-md-6\" id=\"addcash\"> \n\n<app-retaddpayment (add)=onadd($event)>\n</app-retaddpayment>\n\n\n</div>\n </div>\n\n<div > \n\t<app-retpaymenthis [history]=\"history\" >\n</app-retpaymenthis>\n\n\n\n\n</div>\n</div>\n\n"

/***/ }),
/* 863 */
/***/ (function(module, exports) {

module.exports = "<div id=\"history\"> \n<h2> History:</h2>\n<div *ngIf=\"history\"> \n<div *ngFor=\"let his of history | sortbydate:date:false\"> \n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"><span>\n From:{{his.from}}</span><span>\n  To:{{his.to}} </span><span> {{his.amount | currency:'INR':true}}</span>\n\n<span>{{his.date | date | uppercase}}\n </span>\n  </li>\n\n</ul>\n\n</div>\n\n</div>\n\n\n</div>\n\n"

/***/ }),
/* 864 */
/***/ (function(module, exports) {

module.exports = "<p>\n  retproduct works!\n</p>\n"

/***/ }),
/* 865 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> \n<div *ngFor=\"let posts of user\" > \n<form class=\"form-horizontal\">\n<legend align=\"center\">Profile<h6  (click)=\"editprofile()\" class=\"btn-primary\" id=\"edit\"> Edit Profile</h6></legend>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.name}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.phone}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Email:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.email}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Address:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.address}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.companyname}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Company Type:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.companytype}}</p>\n    </div>\n  </div>\n  \n</form>\n</div>\n</div>\n<div *ngIf=\"edit\"> \n<app-reteditprofile [user]=\"user\" >\n</app-reteditprofile>\n\n</div>\n\n"

/***/ }),
/* 866 */
/***/ (function(module, exports) {

module.exports = "<p>\n  retreview works!\n</p>\n"

/***/ }),
/* 867 */
/***/ (function(module, exports) {

module.exports = "<div id=\"logtrack\">\n<div class=\"row\">\n<div class=\"col-md-6\">\n<app-rettrackid (add)=ontrack($event)>\n</app-rettrackid>\n</div> \n<div class=\"col-md-6\"> \n\n<div *ngIf=\"wtrack\" > \n<i (click)=\"close()\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n</div>\n<div *ngIf=\"wtrack\"> \n<app-rettrackview [trackd]=\"trackd\">\n</app-rettrackview>\n</div>\n\n</div>\n</div> \n\n</div>\n"

/***/ }),
/* 868 */
/***/ (function(module, exports) {

module.exports = "<div id=\"amount\"> \n<h3> Track order:</h3>\n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    \n\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"track\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\"  class=\"btn btn-default\">Add</button> \n</form>\n\n</div>\n"

/***/ }),
/* 869 */
/***/ (function(module, exports) {

module.exports = "<div id=\"trackview\"> \n<div *ngIf=\"trackd\"> \n<div *ngFor=\"let t of trackd\"> \n\n\n\n\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">  {{t.location}}  \n   <span>{{t.Date | date | uppercase}} </span> </li>\n\n</ul>\n</div></div>\n</div>\n"

/***/ }),
/* 870 */
/***/ (function(module, exports) {

module.exports = "<div> \n<div> \n<form (submit)=\"oncropSubmit()\">\n <div class=\"form-group\">\n    <label>Crop</label>\n    <input type=\"text\" [(ngModel)]=\"crop\" name=\"crop\" class=\"form-control\" required>\n  </div>\n \n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n</div>\n</div>"

/***/ }),
/* 871 */
/***/ (function(module, exports) {

module.exports = "<div id=\"croplist\"> \n<div *ngIf=\"crops\"> \n<h2> Crop List</h2>\n<div *ngFor=\"let crop of crops;let i = index\"> \n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" > {{crop.crop}}<span>\n{{crop.date | date | uppercase}}\n     \n\n</span></li>\n \n</ul>\n</div>\n\n\n\n</div>\n</div>"

/***/ }),
/* 872 */
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid\" id=\"subnav\"> \n<ul> \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard']\">Dashboard</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/profile']\">Profile</a></li>  \n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/chat']\">Chat</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/product']\">Product</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/payment']\">Payment</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/posts']\">Posts</a></li>\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/cropdiary']\">cropdiary</a></li>\n <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/user/dashboard/review']\">Review</a></li>\n<span  *ngIf=\"user\">\n<li>{{user.name}}</li>\n</span>\n</ul>\n <router-outlet></router-outlet>\n\n\n\n</div>\n\n\n\n"

/***/ }),
/* 873 */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div class=\"container\" id=\"form\"> \n   <h3 >Login</h3>\n   <hr>\n   <div class=\"container\"> \n   <div class=\"row\"> \n   <div class=\"col-lg-12\"> \n<form class=\"form-horizontal\" (submit)=\"onLoginSubmit()\" >\n \n  <div class=\"form-group\">\n\n   <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n\n  </div>\n \n\n  </div>\n</form>\n</div>\n\n\n</div>\n\n\n</div>\n</div>\n\n"

/***/ }),
/* 874 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" required >\n  </div>\n  <div class=\"form-group\">\n    <label>Phone no</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" required >\n  </div>\n \n   <div class=\"form-group\">\n    <label>soil type</label>\n    <input type=\"text\" [(ngModel)]=\"soil\" name=\"soil\" class=\"form-control\" required >\n  </div>\n   <div class=\"form-group\">\n    <label>Irr</label>\n    <input type=\"text\" [(ngModel)]=\"irr\" name=\"irr\" class=\"form-control\" required >\n  </div>\n   <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" required >\n  </div>\n   <div class=\"form-group\">\n    <label>Farm Type</label>\n    <input type=\"text\" [(ngModel)]=\"farm\" name=\"farm\" class=\"form-control\" required >\n  </div>\n  \n   <div class=\"form-group\">\n    <label>Acres</label>\n    <input type=\"text\" [(ngModel)]=\"acres\" name=\"acres\" class=\"form-control\" required >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" required >\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n"

/***/ }),
/* 875 */
/***/ (function(module, exports) {

module.exports = "<p>\n  userchat works!\n</p>\nf\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nr\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nr\n\nrrr\nrrr"

/***/ }),
/* 876 */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"cropdiary\"> \n<div *ngIf=\"cd\">\n<div *ngFor=\"let cds of cd;let i = index\"> \n\n\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">{{cds.cropname}} </div>\n  <div class=\"panel-body\">\n   {{cds.des}}\n  </div>\n  <div class=\"panel-footer\"> {{cds.name}} <span>  {{cds.date | date | uppercase}}</span></div>\n</div>\n\n</div> \n\n</div>\n\n</div>"

/***/ }),
/* 877 */
/***/ (function(module, exports) {

module.exports = "<div> \n\n<div class=\"row\">\n<div class=\"col-md-7\">\n<app-usernotify>\n</app-usernotify>\n<app-croplist [crops]=\"crops\">\n</app-croplist>\n </div> \n <div class=\"col-md-5\"> \n<div id=\"balance\"> \n<div *ngIf=\"payment\">\n<h2> Balance:{{payment | currency:'INR':true}}</h2>\n</div></div>\n\n<app-whether>\n</app-whether>\n </div>\n\n</div>\n\n\n</div>\n\n\n"

/***/ }),
/* 878 */
/***/ (function(module, exports) {

module.exports = "<div id=\"notify\"> \n<h3> Spotlight</h3>\n<div class=\"list-group\">\n\t<a class=\"list-group-item active\">\n\t\t<h4 class=\"list-group-item-heading\">Welcome to Agri Assistant</h4>\n\t\t<!-- <p class=\"list-group-item-text\">Content goes here</p> -->\n\t</a>\n</div>\n\n\n</div>\n"

/***/ }),
/* 879 */
/***/ (function(module, exports) {

module.exports = "<div id=\"history\"> \n<h2> History:</h2>\n<div *ngIf=\"history\"> \n<div *ngFor=\"let his of history | sortbydate:date:false\"> \n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"><span>\n From:{{his.from}}</span><span>\n  To:{{his.to}} </span><span> {{his.amount | currency:'INR':true}}</span>\n\n<span>{{his.date | date | uppercase}}\n </span>\n  </li>\n\n</ul>\n\n</div>\n\n</div>\n\n\n</div>\n"

/***/ }),
/* 880 */
/***/ (function(module, exports) {

module.exports = "<div id=\"amount\"> \n<h3> Add cash:</h3>\n<form class=\"form-inline\" (submit)=\"onaddSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName2\"><h3>Amount </h3></label>\n\n    <input type=\"Number\" class=\"form-control\" [(ngModel)]=\"money\" [ngModelOptions]=\"{standalone: true}\" required>\n  </div>\n \n  <button type=\"submit\"  class=\"btn btn-default\">Add</button>\n</form>\n\n</div>\n"

/***/ }),
/* 881 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"payment\"> \n\n<div class=\"row\" id=\"cash\">\n<div class=\"col-md-4\" id=\"balance\"> \n<div *ngIf=\"payment\">\n<div> \n<h2>Balance:{{payment | currency:'INR':true}}</h2>\n</div>\n</div>\n\n</div>\n<div class=\"col-md-6\" id=\"addcash\"> \n\n<app-paymenttemp (add)=onadd($event)>\n</app-paymenttemp>\n\n</div>\n </div>\n\n<div id=\"payment\">\n\n<app-paymenthis [history]=\"history\">\n</app-paymenthis>\n\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),
/* 882 */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"posts\"  id=\"posts\">\n <div *ngFor=\"let post of posts;let i = index\"> \n  <div class=\"panel panel-default\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">{{post.title}}  <span> {{post.name}}</span> </div>\n  <div class=\"panel-body\">\n    <p>{{post.content}}</p>\n  </div>\n<div *ngIf=\"!like\"> \n<div class=\"panel-footer\">{{post.tag}}  \n\n\n<span>\n<i (click)=\"onlike(i)\" class=\"fa fa-heart fa-2x\" aria-hidden=\"true\"></i> {{post.date | date | uppercase }}</span>\n</div>\n\n  </div>\n\n  <div *ngIf=\"like\"> \n<div class=\"panel-footer\">{{post.tag}}  \n\n\n<span>\n<i (click)=\"onlike(i)\"  class=\"fa fa-heart-o  fa-2x\" aria-hidden=\"true\"></i> {{post.date | date | uppercase }}</span>\n</div>\n\n  </div>\n<!-- <a class=\"list-group-item active\">\n\t\t<h4 class=\"list-group-item-heading\">{{post.title}}<span><h6> {{post.name}}</h6></span></h4>\n\t\t<p class=\"list-group-item-text\">{{post.content}} <span> {{post.date | date | uppercase }}</span></p>\n\n\t</a> -->\n</div></div>\n"

/***/ }),
/* 883 */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"container\">\n \n \n    <div class=\"row\">\n \n        <div class=\"col-md-3\">\n \n            <h3>Select files</h3>\n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n \n          \n        </div>\n \n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n \n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n \n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n \n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n \n        </div>\n \n    </div>\n \n</div> -->\n\n<form>\n\n<input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\n</form>"

/***/ }),
/* 884 */
/***/ (function(module, exports) {

module.exports = "<div> \n<div *ngIf=\"crops\"> \n<div *ngFor=\"let crop of crops;let i = index\"> \n<ul class=\"list-group\">\n  <li class=\"list-group-item\" > {{crop.crop}}<span>\n{{crop.date | date | uppercase}}\n     \n<i (click)=\"deletecrop(i,crop._id)\" class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></i>\n</span></li>\n \n</ul>\n</div>\n\n\n\n</div>\n</div>\n"

/***/ }),
/* 885 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\"> \r\n\r\n <div class=\"row\">\r\n <div class=\"col-md-6\">\r\n<form #f=\"ngForm\" (ngSubmit)=\"save(f.value, f.valid)\" novalidate>\r\n           <legend>Edit Profile</legend>\r\n<div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Name</label>\r\n    <div class=\"col-sm-7\">\r\n      <input type=\"text\" \r\n            name=\"name\" [(ngModel)]=\"posts.name\" \r\n            #name=\"ngModel\" required minlength=\"5\" class=\"form-control\">\r\n        \r\n        <small [hidden]=\"name.valid || (name.pristine && !f.submitted)\">\r\n            Name is required (minimum 5 characters).\r\n        </small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Address</label>\r\n    <div class=\"col-sm-7\">\r\n       <input type=\"text\" \r\n            name=\"add\" [(ngModel)]=\"posts.address\" \r\n            #add=\"ngModel\" required minlength=\"5\" class=\"form-control\">\r\n      \r\n        <small [hidden]=\"add.valid || (add.pristine && !f.submitted)\">\r\n            Name is required (minimum 5 characters).\r\n        </small>\r\n    </div>\r\n  </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Farm</label>\r\n    <div class=\"col-sm-7\">\r\n     <input type=\"text\" \r\n            name=\"farm\" [(ngModel)]=\"posts.farm\" \r\n            #farm=\"ngModel\" required minlength=\"3\" class=\"form-control\">\r\n       \r\n        <small [hidden]=\"farm.valid || (farm.pristine && !f.submitted)\">\r\n            Name is required (minimum 5 characters).\r\n        </small>\r\n    </div>\r\n  </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Acres</label>\r\n    <div class=\"col-sm-7\">\r\n      <input type=\"number\" \r\n            name=\"acres\" [(ngModel)]=\"posts.acres\" \r\n            #acres=\"ngModel\" required class=\"form-control\" >\r\n    </div>\r\n  </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Irrigation</label>\r\n    <div class=\"col-sm-7\">\r\n      <input type=\"text\" \r\n            name=\"irr\" [(ngModel)]=\"posts.irr\" \r\n            #irr=\"ngModel\" required minlength=\"3\" class=\"form-control\">\r\n        \r\n        <small [hidden]=\"irr.valid || (irr.pristine && !f.submitted)\">\r\n            Name is required (minimum 5 characters).\r\n        </small>\r\n    </div>\r\n  </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"col-sm-5 control-label\">Soiltype</label>\r\n    <div class=\"col-sm-7\">\r\n       <input type=\"text\" \r\n            name=\"soil\" [(ngModel)]=\"posts.soil\" \r\n            #soil=\"ngModel\" required minlength=\"5\" class=\"form-control\">\r\n       \r\n        <small [hidden]=\"soil.valid || (soil.pristine && !f.submitted)\">\r\n            Name is required (minimum 5 characters).\r\n        </small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\"> \r\n  <div class=\"col-md-offset-5 col-md-7\"> \r\n  <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Submit</button>\r\n  </div> </div>\r\n </form>\r\n\r\n\r\n </div> \r\n\r\n\r\n </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),
/* 886 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"> \n\n<div>\n<div class=\"row\">\n<div class=\"col-md-6\" id=\"profile\"> \n<div *ngIf=\"post\"> \n<div *ngFor=\"let posts of post\" > \n<form class=\"form-horizontal\">\n<legend align=\"center\">Profile<h6  (click)=\"editprofile()\" class=\"btn-primary\" id=\"edit\"> Edit Profile</h6></legend>\n\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Name:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.name}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Phone:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.phone}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Irrigation:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.irr}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Address:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.address}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Acres:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.acres}}</p>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <label class=\"col-sm-5 control-label\">Soiltype:</label>\n    <div class=\"col-sm-7\">\n      <p class=\"form-control-static\">{{posts.soiltype}}</p>\n    </div>\n  </div>\n</form>\n</div>\n</div>\n</div> \n<div class=\"col-md-6\" id=\"addcrop\"> \n<app-addcrop (add)=onadd($event)>\n</app-addcrop>\n<div id=\"croplist\"> \n<h4> Crop List:</h4>\n<div id=\"usercrops\"> \n<app-usercrops [crops]=\"crops\">\n</app-usercrops>\n</div>\n</div>\n</div> \n</div>\n </div>\n</div>\n<div *ngIf=\"edit\"> \n<app-usereditprofile [post]=\"post\" >\n</app-usereditprofile>\n\n</div>\n\n"

/***/ }),
/* 887 */
/***/ (function(module, exports) {

module.exports = "<p>\n  userreview works!\n</p>\n"

/***/ }),
/* 888 */
/***/ (function(module, exports) {

module.exports = "<div id=\"weather\">\n\t<h2><span class=\"glyphicon glyphicon-cloud\" aria-hidden=\"true\"></span> weather </h2>\n \n\n<div *ngIf=\"low\">\n\t<h3>\n\t<i class=\"fa fa-arrow-down\" aria-hidden=\"true\">{{low}}&deg;</i></h3>\n</div>\n<div *ngIf=\"high\"><h3> \n\t <i class=\"fa fa-arrow-up\" aria-hidden=\"true\">{{high}}&deg;</i></h3>\n</div></div>"

/***/ }),
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })
],[908]);
//# sourceMappingURL=main.bundle.map