(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/party/party.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/party/party.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<script src=\"https://apis.google.com/js/client.js?onload=handleClientLoad\"></script>\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"></script>\n<script src=\"https://apis.google.com/js/client.js?onload=googleApiClientReady\"></script>\n<script src=\"jquery-3.4.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap\" rel=\"stylesheet\">\n<script src=\"https://code.jquery.com/jquery-3.4.1.js\" integrity=\"sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=\"\n  crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js\"></script>\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n<body class=\"p-4\">\n  <button (click)=\"greetRoom()\">Greet</button>\n  <div class=\"mx-auto p-0\">\n    <div class=\"row\">\n      <div class=\"col-3\">\n      <div class=\"container\"><h3><span style=\"color: #DC3545\">S</span>ongs</h3></div>\n      <div class=\"card mb-4 shadow-lg\" style=\"background-color: black\">\n        <div class=\"card-header\">\n            <form (submit)=\"myFunction()\">\n                <div class=\"input-group\">\n                    <input class=\"form-control mx-auto d-inline-block\" name=\"query\"\n                    [(ngModel)]=\"search.query\" type=\"text\" placeholder=\"Look for Songs\" />\n                    <div class=\"input-group-append\">\n                      <button type=\"submit\" class=\"btn btn-danger\">Find</button>\n                    </div>\n                  </div>\n              </form>\n            <div class=\"overflow-auto\" *ngIf=\"search.query\">\n              <!-- <div id =\"results\"> -->\n                  <div id =\"results1\"></div>\n                  <div id =\"results2\"></div>\n                  <div id =\"results3\"></div>\n                  <div id =\"results4\"></div>\n                  <div id =\"results5\"></div>\n                  <div id =\"results6\"></div>\n                  <div id =\"results7\"></div>\n                  <div id =\"results8\"></div>\n                  <div id =\"results9\"></div>\n                  <div id =\"results10\"></div>\n\n              <!-- </div> -->\n                <!-- <div id=\"results\" *ngFor=\"let result of searchResults\">\n                  <p style = \"color:white\">{{result.snippet.title}}</p>\n                </div> -->\n            </div>\n\n          <!-- <form #form action=\"http://www.youtube.com/results\" method=\"get\" target=\"_blank\">\n            <div class=\"input-group\">\n              <input class=\"form-control mx-auto d-inline-block\" name=\"search_query\" type=\"text\" placeholder=\"Look for Playlists\" />\n              <div class=\"input-group-append\">\n                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"form.submit()\">Find</button>\n              </div>\n            </div>\n          </form> -->\n\n        </div>\n       <div class=\"speaker-body card-body\">\n       <div *ngIf=\"!search.query\">\n          <div class=\"speaker-hole-1 mx-auto mb-0\" style=\"margin-top: 5vh\"></div>\n          <div class=\"speaker-hole-2 mx-auto\" style=\"margin-top: -19vh;\"></div>\n          <div class=\"speaker-hole-1 mx-auto mb-0\" style=\"margin-top: 15vh\"></div>\n          <div class=\"speaker-hole-2 mx-auto\" style=\"margin-top: -19vh; background-color: black;\"></div>\n        </div>\n       </div>\n      </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"container\">\n          <p *ngIf=\"userIP\" >{{ userIP }}</p>\n          <h2><span style=\"color: #DC3545\">Socket</span>Tunez</h2>\n          <!--  music player component --------------------------------------------------------------------->\n          <h1>{{SongId}}</h1>\n          <div class=\"screen\"><app-player (playTheNextSong)=\"playTheNextSong($event)\" *ngIf=\"SongId\" [videoID]=\"SongId\"></app-player></div>\n          <div class=\"insert\">\n            <h3>Insert that next 🔥 track</h3>\n            <!--  form for song submission -->\n            <form (submit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control music-insert mx-auto\" id = \"videoInput\" name=\"link\" placeholder=\"Fire Tracks Only\"\n                       [(ngModel)]=\"newSong.link\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-danger\">Add</button>\n            </form>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\" *ngFor=\"let song of allSongs;\">\n              <div class=\"card text-white bg-dark\" style=\"max-width: 40rem;\">\n                <div class=\"card-header\">{{song}} <span class=\"font-size: 18px\">👍</span> </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"container\"><h3><span style=\"color: #DC3545\">P</span>laylists</h3></div>\n        <div class=\"card mb-4 shadow-lg\" style=\"background-color: black\">\n          <div class=\"card-header\">\n           \n              <div class=\"input-group\">\n                \n                <div class=\"input-group-append\">\n                  <div class=\"card\" style=\"width: 22rem; font-size: 13px\">\n                    <ul class=\"list-group list-group-flush\">\n                      <li class=\"list-group-item\" *ngFor=\"let song of allPlaylistSongs\">\n                        {{song.name}}\n\n                      </li>\n                    \n                    </ul>\n                  </div>\n                </div>\n              </div>\n   \n          </div>\n          <div class=\"speaker-body card-body\">\n            <div class=\"speaker-hole-1 mx-auto mb-0\" style=\"margin-top: 5vh\"></div>\n            <div class=\"speaker-hole-2 mx-auto\" style=\"margin-top: -19vh;\"></div>\n            <div class=\"speaker-hole-1 mx-auto mb-0\" style=\"margin-top: 15vh\"></div>\n            <div class=\"speaker-hole-2 mx-auto\" style=\"margin-top: -19vh; background-color: black;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- component responsible for playing current song\nlogic for retrieving next song and playing it -->\n<!-- <iframe *ngIf=\"videoID\" width=\"560\" height=\"315\" [src]=\"videoString + videoID + autoPlay | safe\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\n\n<!-- <youtube-player  *ngIf=\"videoID\"\n[videoId]=\"videoID\"\n(ready)=\"savePlayer($event)\"\n(change)=\"onStateChange($event)\"\n>\n</youtube-player> -->\n\n<div class=\"container youtube-player\" *ngIf=\"videoID\">\n    <section class=\"panel panel-info\">\n\n      <div class=\"panel-body\">\n        {{videoID}}\n        <youtube-player\n          videoId=\"{{videoID}}\"\n          (ready)=\"savePlayer($event)\"\n          (change)=\"onStateChange($event)\"\n          width=\"750\"\n          height=\"400\"\n          \n        >\n        </youtube-player>\n      </div>\n    </section>\n\n    <div class=\"col-md-12\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"playVideo()\">Play</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"pauseVideo()\">Pause</button>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <section class=\"panel panel-success\">\n        <div class=\"panel-heading\">Player State</div>\n        <div class=\"panel-body\">\n          <pre>{{ ytEvent }}</pre>\n        </div>\n      </section>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Welcome</title>\n    <!-- Compiled and minified CSS -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n\n    <!-- Compiled and minified JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n\n    <!-- Icons -->\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <!-- Format to use: <i class=\"material-icons\">add</i> -->\n\n</head>\n\n<body>\n\n    <!-- Speaker lookin Div -->\n    <div class=\"speaker1 bgBlack\">\n        <i style=\"margin-right: -2%;\" class=\"topSpk medium material-icons red-text\">blur_circular</i>\n        <i style=\"margin-right: -2%;\" class=\"botSpk medium material-icons red-text\">blur_circular</i>\n    </div>\n\n    <div class=\"container row bgBlack\">\n        <h1 class=\"center wf\">S<i style=\"margin-right: -2%;\" class=\"medium material-icons red-text\">blur_circular</i>\n            cket Tunes\n        </h1>\n\n        <div class=\"row box\">\n            <!-- Form to create a party -->\n            <div class=\"box width-45 left\">\n                <form (submit)=\"createParty()\">\n                    <div>\n                        <label for=\"\">Name your party:</label>\n                        <input style = \"color: white\" type=\"text\" name=\"name\" [(ngModel)]=\"newPlaylist.room\">\n                    </div>\n                    <button class=\"btn red accent-4\">Create Party</button>\n                </form>\n            </div>\n\n            <!-- Form to join a party -->\n            <div class=\"box width-45 right\">\n                <form (submit)=\"joinParty()\">\n                    <div>\n                        <label for=\"\">Existing Party:</label>\n                        <input style = \"color: white\" type=\"text\" name=\"name\" [(ngModel)]=\"playlist.room\">\n                    </div>\n                    <button class=\"btn red accent-4\">Join Party</button>\n                </form>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Speaker lookin Div -->\n    <div class=\"speaker2 bgBlack\">\n        <i style=\"margin-right: -2%;\" class=\" topSpk medium material-icons red-text\">blur_circular</i>\n        <i style=\"margin-right: -2%;\" class=\" botSpk medium material-icons red-text\">blur_circular</i>\n    </div>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");





const routes = [
    {
        path: 'partyroom',
        component: _party_party_component__WEBPACK_IMPORTED_MODULE_3__["PartyComponent"]
    },
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");









// Imports for sockets




const config = { url: '192.168.0.103:3333', options: {} };

let gapiClientConfig = {
    client_id: "CLIENT_ID",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
        "https://www.googleapis.com/auth/analytics.readonly",
        "https://www.googleapis.com/auth/analytics"
    ].join(" ")
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_6__["SafePipe"],
            _party_party_component__WEBPACK_IMPORTED_MODULE_10__["PartyComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__["NgxYoutubePlayerModule"].forRoot(),
            // YoutubePlayerModule,npm i ngx-youtube-player
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(config),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_13__["GoogleApiModule"].forRoot({
                provide: ng_gapi__WEBPACK_IMPORTED_MODULE_13__["NG_GAPI_CONFIG"],
                useValue: gapiClientConfig
            }),
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    createPlaylist(playlist) {
        return this._http.post('/api/playlist', playlist);
    }
    getPlaylist(room) {
        return this._http.get('/api/playlist/' + room);
    }
    updatePlaylist(playlist) {
        return this._http.put(`/api/playlist/${playlist.id}`, playlist);
    }
    deletePlaylist(id) {
        return this._http.delete('/api/playlist/' + id);
    }
    createSong(song) {
        return this._http.post('/api/songs', song);
    }
    deleteSong(id) {
        return this._http.delete('/api/songs/' + id);
    }
    getOneSong(id) {
        return this._http.get('/api/songs/' + id);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/party/party.component.css":
/*!*******************************************!*\
  !*** ./src/app/party/party.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n}\n\n/******SPEAKER DECORATIONS**************************/\n\n.speaker-body {\n  min-height: 70vh;\n}\n\n.speaker-hole-1 {\n  width: 25vh;\n  height: 25vh;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.speaker-hole-2 {\n  width: 13vh;\n  height: 13vh;\n  border-radius: 50%;\n  background-color: #DC3545;\n}\n\n/******SCREEN DECORATIONS**************************/\n\n.screen {\n  height: 50vh;\n  background-color: black;\n  border-radius: 1%;\n}\n\n/******SEARCH RESULTS**************************/\n\n.overflow-auto {\n  height: 650px;\n  overflow: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHkvcGFydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxvREFBb0Q7O0FBQ3BEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQSwrQ0FBK0M7O0FBQy9DO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhcnR5L3BhcnR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKioqKioqU1BFQUtFUiBERUNPUkFUSU9OUyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNwZWFrZXItYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG59XG5cbi5zcGVha2VyLWhvbGUtMSB7XG4gIHdpZHRoOiAyNXZoO1xuICBoZWlnaHQ6IDI1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zcGVha2VyLWhvbGUtMiB7XG4gIHdpZHRoOiAxM3ZoO1xuICBoZWlnaHQ6IDEzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDMzU0NTtcbn1cblxuLyoqKioqKlNDUkVFTiBERUNPUkFUSU9OUyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNjcmVlbiB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDElO1xufVxuXG4vKioqKioqU0VBUkNIIFJFU1VMVFMqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5vdmVyZmxvdy1hdXRvIHtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/party/party.component.ts":
/*!******************************************!*\
  !*** ./src/app/party/party.component.ts ***!
  \******************************************/
/*! exports provided: PartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyComponent", function() { return PartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_gapi_lib_GoogleApiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gapi/lib/GoogleApiService */ "./node_modules/ng-gapi/lib/GoogleApiService.js");



// Bringing in The Socket

// Added Activated Route and Params to get the Document


let PartyComponent = class PartyComponent {
    constructor(_httpService, _socket, _router, _route, gapiService) {
        this._httpService = _httpService;
        this._socket = _socket;
        this._router = _router;
        this._route = _route;
        this.gapiService = gapiService;
        this.playlist = null;
        this.search = {
            query: ''
        };
        this.allPlaylistSongs = [];
        this.weGotResults = false;
        this.searchResults = [];
        this.newSong = {
            link: "",
            name: ""
        };
        this.SongId = null;
        this.playing = false;
        gapiService.onLoad().subscribe(() => {
            // Here we can use gapi
            gapi['client'].setApiKey('AIzaSyDiHCKuqXBvB4rJBIIhP6GMr55A7o3Fj-8');
        });
    }
    ngOnInit() {
        // Grab User ID and Playlist from server
        this._socket.emit("SendID");
        this._socket.on("hereBro", (data) => {
            this.userId = data.id;
            this.playlist = data.playlist;
            console.log("Getting ID and Playlist", data);
        });
    }
    greetRoom() {
        this._socket.emit("greetRoom", { msg: "Hello everyone" });
        this._socket.on("Greeting", (data) => {
            console.log(data);
        });
    }
    onSubmit() {
        // if there is a song playing 
        // add the song the playlist songs[]
        // send the server to emit to everyone
        // in the room that a new song was added
        // update the playlist in mongo with new song
        let self = this;
        // check if there is a song playing
        if (this.playing) {
            console.log("something is playing");
            let nextUp = {
                id: this.newSong.link,
                name: this.newSong.name,
                likes: 0
            };
            this.newSong = {
                link: '',
                name: ''
            };
            if (nextUp.name != '') {
                this.allPlaylistSongs.push(nextUp);
            }
            try {
                console.log(self.playlist);
                self.playlist.songs.push(nextUp);
                this._socket.emit("updatePlaylist", this.playlist);
                this._socket.on("updated", (data) => {
                    this.playlist = data;
                    console.log("new playlist", this.playlist);
                });
            }
            catch (e) {
                console.log(e);
            }
            // this will send the playlist to the server
            // this._httpService.createSong({
            //   id: this.newSong.link,
            //   likes: [],
            //   postedBy: this.userId
            // })
            //   .subscribe((data: any) => {
            //     console.log("should be a playlist object: ", this.playlist);
            //     this.playlist.songs.push(data);
            //     console.log("should be a playlist object 2: ", this.playlist);
            //     this._httpService.updatePlaylist(this.playlist)
            //       .subscribe((data: any) => {
            //         console.log(data)
            //       });
            //   })
            // this.newSong = {
            //   link: ''
            // }
            // this._httpService.updatePlaylist(this.playlist)
            //   .subscribe(playlist => console.log(playlist));
        }
        // if not play the song - dont append the playlist and play song
        else {
            this.SongId = this.newSong.link;
            this.playing = true;
            this.newSong = {
                link: '',
                name: ''
            };
        }
        //  clear the input field
        //   set new song link to empty
    }
    makeRequest(q) {
        let self = this;
        console.log("hereeeee");
        this.weGotResults = true;
        this.searchResults = [];
        var request = gapi['client']['youtube'].search.list({
            q: q,
            part: 'snippet',
            maxResults: 10,
            type: 'video'
        });
        // console.log("hi")
        request.execute(function (response) {
            console.log("also here");
            var srchItems = response.result.items;
            // self.searchResults = self.searchResults.concat(srchItems);
            $('#results').empty();
            self.newSong.link = '';
            let counter = 1;
            $.each(srchItems, function (index, item) {
                let vidTitle = item.snippet.title;
                let vidThumburl = item.snippet.thumbnails.default.url;
                let vidThumbimg = '<pre><img  id="' + item.id.videoId + '" name="' + item.snippet.title + '" src="' + vidThumburl + '" alt="No  Image Available." style="width:300px;height:240px"></pre>';
                $(`#results${counter}`).append('<pre>' + '<p style = "color: white">' + vidTitle + '</p>' + vidThumbimg + '</pre>').on('click', function () {
                    console.log(vidTitle);
                    $("#videoInput").val(item.snippet.title);
                    self.newSong.link = item.id.videoId;
                    self.newSong.name = item.snippet.title;
                });
                counter += 1;
            });
        });
    }
    triggerEvent() {
        console.log("suhhhh");
        // var target = event.target || event.srcElement || event.currentTarget;
        // var idAttr = target.attributes.id;
        // console.log(idAttr);
    }
    myFunction() {
        console.log(this.search.query);
        console.log(window['gapi']);
        this.keyWordsearch(this.search.query);
    }
    ;
    keyWordsearch(name) {
        console.log("here");
        let self = this;
        gapi['client'].load('youtube', 'v3', function () {
            console.log("here");
            let info = '{ "data": [{"name":' + `"${name}"` + '}] }';
            console.log(info);
            JSON.stringify(info);
            console.log(info);
            let data = JSON.parse(info);
            $.each(data["data"], function (index, value) {
                self.makeRequest(value["name"]);
            });
        });
    }
    playTheNextSong(currState) {
        console.log("HERE");
        this.SongId = null;
        if (currState == 0) {
            if (this.allPlaylistSongs.length != 0) {
                console.log(this.allPlaylistSongs[0].id);
                this.SongId = this.allPlaylistSongs[0].id;
                this.playing = true;
                this.allPlaylistSongs.shift();
            }
        }
    }
};
PartyComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ng_gapi_lib_GoogleApiService__WEBPACK_IMPORTED_MODULE_5__["GoogleApiService"] }
];
PartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-party',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./party.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/party/party.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./party.component.css */ "./src/app/party/party.component.css")).default]
    })
], PartyComponent);



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 768px) {\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: SafePipe, PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' })
], SafePipe);

let PlayerComponent = class PlayerComponent {
    constructor() {
        this.title = 'app';
        this.id = '';
        this.playTheNextSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.counter = 0;
        this.autoPlay = "?autoplay=1";
        this.videoString = "https://www.youtube.com/embed/";
    }
    ngOnChanges() {
        console.log("CHANGE");
        if (this.counter <= 9) {
            this.it = this.videoID;
        }
    }
    onStateChange(event) {
        console.log(this.videoID);
        let self = this;
        this.ytEvent = event.data;
        if (event.data == 0) {
            console.log("OVER");
            this.currState = event.data;
            this.playTheNextSong.emit(this.currState);
            console.log(this.videoID);
            console.log(this.it);
            JSON.stringify(this.it);
            this.player.loadVideoById(this.it);
            this.counter = 0;
        }
        // this.playVideo();
        this.currState = 1;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayerComponent.prototype, "playTheNextSong", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "videoID", void 0);
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n    /* outline: 2px solid blue; */\n    padding: 2%;\n  }\n\n.mid {\n      vertical-align: middle;\n  }\n\ni.material-icons , i.material-icons + span {\n    vertical-align: middle;\n}\n\n.width-45 {\n    width: 45%;\n}\n\n.middle {\n  margin: 0 auto;\n}\n\n.bgBlack {\n  background-color: black;\n}\n\n.bgWhite {\n  background-color: white;\n}\n\n.red {\n  background-color: #d50000; \n}\n\n.wf {\n  color: white;\n}\n\n.speaker1 {\n  position: absolute;\n  left: 2%;\n  height: 25%;\n  top: 20%;\n  outline: 2px solid black;\n  width: 5%;\n}\n\n.speaker2 {\n  position: absolute;\n  left: 93%;\n  height: 25%;\n  top: 20%;\n  outline: 2px solid black;\n  width: 5%;\n}\n\n.topSpk {\n  position: relative;\n  top: 12%;\n  left: 5%;\n}\n\n.botSpk {\n  position: relative;\n  left: 5%;\n  top: 24%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztFQUNiOztBQUVGO01BQ00sc0JBQXNCO0VBQzFCOztBQUVGO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsUUFBUTtFQUNSLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICAvKiBvdXRsaW5lOiAycHggc29saWQgYmx1ZTsgKi9cbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuXG4ubWlkIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG5pLm1hdGVyaWFsLWljb25zICwgaS5tYXRlcmlhbC1pY29ucyArIHNwYW4ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi53aWR0aC00NSB7XG4gICAgd2lkdGg6IDQ1JTtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmdCbGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYmdXaGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDsgXG59XG5cbi53ZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXIxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIHRvcDogMjAlO1xuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA1JTtcbn1cblxuLnNwZWFrZXIyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5MyU7XG4gIGhlaWdodDogMjUlO1xuICB0b3A6IDIwJTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNSU7XG59XG5cbi50b3BTcGsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiA1JTtcbn1cblxuLmJvdFNwayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNSU7XG4gIHRvcDogMjQlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");



// Routing 

// Bringing in The Socket

let WelcomeComponent = class WelcomeComponent {
    constructor(_httpService, _router, _socket) {
        this._httpService = _httpService;
        this._router = _router;
        this._socket = _socket;
        // Playlist to be created
        this.newPlaylist = {
            songs: [],
            host: null,
            room: '',
        };
        // Playlist to join
        this.playlist = {
            room: '',
        };
    }
    ngOnInit() {
        this.grabID();
    }
    // Create a new party
    createParty() {
        this.newPlaylist.host = this.user;
        this._httpService.createPlaylist(this.newPlaylist)
            .subscribe((data) => {
            console.log("Newly Playlist: ", data.playlist);
            this._socket.emit("NewPlaylist", data.playlist);
            this._router.navigate(["/partyroom"]);
        });
    }
    // Join Party
    joinParty() {
        this._httpService.getPlaylist(this.playlist.room)
            .subscribe((data) => {
            // Once the data is recieved from the db, is sent to server to be stored
            this._socket.emit("NewPlaylist", data.playlist[0]);
            // console.log("Clean: ",data.playlist[0]);
            this._router.navigate(["/partyroom"]);
        });
    }
    // Save ID for user
    grabID() {
        this._socket.on("log", (data) => {
            this.user = data.id;
            console.log(data.msg + ' ' + data.id);
        });
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameydogom/Desktop/SocketTuneMe/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map