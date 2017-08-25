/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __webpack_require__(2);
window.addEventListener('load', function (e) {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var samples = generateRandomPoints(canvas);
    for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
        var _a = samples_1[_i], x = _a[0], y = _a[1];
        ctx.fillRect(x, y, 1, 1);
    }
    var _b = src_1.linearFit(samples), a0 = _b[0], a1 = _b[1];
    ctx.strokeStyle = '#f00';
    ctx.beginPath();
    for (var x = 0; x < canvas.width; ++x) {
        var y = a0 + a1 * x;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
});
function generateRandomPoints(size) {
    var samples = [];
    var a = Math.random() - 0.5;
    var c = Math.random() * 0.5;
    for (var i = 0; i < 800; ++i) {
        var x = size.width * Math.random();
        var w = 2 * (x / size.width) - 1;
        var y = a * size.height * w + size.height * c + 50 * Math.random();
        samples.push([x, y]);
    }
    return samples;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    y = a0 + a1*x approximate samples
    samples : [(x_1, y1), ..., (x_n, y_n)]
 */
function linearFit(samples) {
    var sx0 = 0;
    var sx1 = 0;
    var sx2 = 0;
    var syx0 = 0;
    var syx1 = 0;
    for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
        var _a = samples_1[_i], x = _a[0], y = _a[1];
        sx0 += 1;
        sx1 += x;
        sx2 += x * x;
        syx0 += y;
        syx1 += y * x;
    }
    var D = sx0 * sx2 - sx1 * sx1;
    var a0 = (-sx1 * syx1 + sx2 * syx0) / D;
    var a1 = (sx0 * syx1 - sx1 * syx0) / D;
    return [a0, a1];
}
exports.linearFit = linearFit;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ })
/******/ ]);