/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
    function MobileMenu() {
        _classCallCheck(this, MobileMenu);

        this.pageNavigation = document.querySelector(".page-navigation");
        this.menuIcon = document.querySelector(".menu-icon");
        this.events();
    }

    _createClass(MobileMenu, [{
        key: "events",
        value: function events() {
            var _this = this;

            this.menuIcon.addEventListener("click", function () {
                return _this.toggleMenu();
            });
        }
    }, {
        key: "toggleMenu",
        value: function toggleMenu() {

            // CSS Classes
            this.pageNavigation.classList.toggle("page-navigation--is-expanded");
            this.menuIcon.classList.toggle("menu-icon--close-x");

            // Aria atributes
            if (this.menuIcon.getAttribute("aria-expanded") == "false") {
                this.menuIcon.setAttribute("aria-expanded", "true");
            } else {
                this.menuIcon.setAttribute("aria-expanded", "false");
            }
        }
    }]);

    return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StickyHeader = function () {
    function StickyHeader() {
        _classCallCheck(this, StickyHeader);

        this.pageHeader = document.querySelector(".page-header");
        this.events();
    }

    _createClass(StickyHeader, [{
        key: "events",
        value: function events() {
            var _this = this;

            window.addEventListener("scroll", function () {
                return _this.toggleShrink();
            });
        }
    }, {
        key: "toggleShrink",
        value: function toggleShrink() {
            var headerHeight = this.pageHeader.clientHeight;
            console.log("headerHeight: ", headerHeight);
            console.log("window.scrollY: ", window.scrollY);

            if (window.scrollY >= headerHeight) {
                this.pageHeader.classList.add('page-header--scrolled');
            } else {
                this.pageHeader.classList.remove('page-header--scrolled');
            }
        }
    }]);

    return StickyHeader;
}();

exports.default = StickyHeader;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(0);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _StickyHeader = __webpack_require__(1);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();
var stickyHeader = new _StickyHeader2.default();

/***/ })
/******/ ]);