/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Forum-Regular.ttf */ "./src/fonts/Forum-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-Regular.ttf */ "./src/fonts/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-Bold.ttf */ "./src/fonts/Inter-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Kill-Switch.ttf */ "./src/fonts/Kill-Switch.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/background4.jpeg */ "./src/assets/img/background4.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Forum';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Forum Bold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Inter Bold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Kill-Switch';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  font-weight: 400;
  font-style: normal;
}

:root {
  --header-back-color: rgb(255, 64, 125);
  --header-button-color: rgb(64, 103, 158);
  --modal-bg-color: rgb(232, 117, 26);
  --modal-button-color: rgb(253, 164, 3);
  --modal-button-color-disabled: rgba(253, 164, 3, 0.6);
  --input-background-color: lightgray;
  --disabled-txt-color: gray;
  --input-txt-color: black;
  --txt-hightlighted: white;  
  --warning-color: lightpink;
  --header-color: rgb(249, 240, 122);
  --transition-time: 0.3s;
}

html {
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Inter';

  user-select: none;
}

header {
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding: 0.5rem 5rem;
  background-color: var(--header-back-color);
}

header button {
  width: auto;
  height: auto;
  padding: 0.3rem 1rem;
  display: flex;
  font-size: 1.5rem;
  border-radius: 1rem;
  background-color: var(--header-button-color);
  color: var(--input-background-color);
  cursor: pointer;
  transition: var(--transition-time);
}

header button:hover {
  color: var(--txt-hightlighted);
}

.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem;
  padding-top: 5rem;
  border-radius: 2rem;
  transform: translate(-50%, -50%);
  background-color: var(--modal-bg-color);
}

.hidden-modal {
  display: none;
}

.modal #header {
  width: 100%;
  height: auto;
  color: var(--header-color);
  padding-bottom: 1rem;
  font-family: 'Kill-Switch';
  font-size: 4.5rem;
  text-align: center;
}

.modal button {
  /* display: none; */  
  width: 10rem;
  height: auto;
  padding: 1rem;
  line-height: 1.5rem;
  font-size: 1.5rem;
  color: var(--input-txt-color);
  background-color: var(--modal-button-color);
  border-radius: 1rem;
  border: 0px solid transparent;
  cursor: pointer;
  transition: var(--transition-time);
}

.modal button:hover:not(:disabled) {
  font-weight: bold;
}

.modal button:disabled {
  color: var(--disabled-txt-color);
  background-color: var(--modal-button-color-disabled);
  cursor: default;
}

#logout-wrapper {
  padding: 3rem;
}

#logout-txt {
  font-size: 1.7rem;
  text-align: center;
  width: 30rem;
  height: auto;
  padding: 0 1rem;
}

#logout-btn-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem 2rem;
}

.input-wrap {
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.input-wrap label {
  align-self: flex-start;
  padding-left: 0.8rem;
  font-size: 1.7rem;
  font-family: 'Inter';
}

.input-wrap:nth-child(3) {
  padding-bottom: 2rem;
}

.user-input {
  width: 30rem;
  height: auto;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: var(--input-txt-color);
  background-color: var(--input-background-color);
  border: 5px solid transparent;
  border-radius: 1rem;
  cursor: pointer;
}

.user-input:focus {
  color: var(--input-txt-color);
  outline: none;
}

#start-screen-wrapper {
  width: 40vw;
  height: auto;
  gap: 0;
}

h1 {
  margin: 0;
  padding-bottom: 0;  
  font-size: 3rem;
}

#start-screen-main-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
}

.start-img {
  width: 30rem;
  gap: 1rem;
  border-radius: 2rem;
  overflow: hidden;
}

#start-screen-txt {
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--header-color);
}

#start-screen-wrapper button {
  width: 15rem;
}

#greeting-wrapper {
  padding: 2rem 3rem;
  padding-bottom: 1.5rem;
  width: 30vw;
  height: auto;
}

#greeting-txt {
  width: 100%;
  height: auto;
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--header-color);
}

#greeting-close {
  position: absolute;
  display: block;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: var(--transition-time);
}

.greeting-close-svg {
  fill: var(--header-color);
}

#greeting-close:hover {
  transform: scale(120%);
}


.tooltip {
  position: absolute;
  bottom: 0;
  left: 15px;
  visibility: visible;
  width: auto;
  height: auto;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--header-color);
  transform: translateY(120%);
  z-index: 1;
}

.tooltip::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -0.5rem;
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

@media (max-width: 1400px) {
  #login-wrapper {
    width: 50vw;
    padding: 1.5rem 3rem;
    gap: 1.5rem;
    padding-top: 1rem;
  }
}

@media (max-width: 1130px) {
  #login-wrapper {
    width: 60vw;
    padding: 1.5rem 3rem;
  }
}

@media (max-width: 930px) {
  #login-wrapper {
    width: 70vw;
    padding: 1.5rem 2rem;
    gap: 1.5rem;
    padding-top: 1rem;
  }

  .user-input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.8rem;
  }

  html {
    background-size: 150vh;
  }

  
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Forum';\r\n  src: url('../fonts/Forum-Regular.ttf');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Forum Bold';\r\n  src: url('../fonts/Forum-Regular.ttf');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Inter';\r\n  src: url('../fonts/Inter-Regular.ttf');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Inter Bold';\r\n  src: url('../fonts/Inter-Bold.ttf');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Kill-Switch';\r\n  src: url('../fonts/Kill-Switch.ttf');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n:root {\r\n  --header-back-color: rgb(255, 64, 125);\r\n  --header-button-color: rgb(64, 103, 158);\r\n  --modal-bg-color: rgb(232, 117, 26);\r\n  --modal-button-color: rgb(253, 164, 3);\r\n  --modal-button-color-disabled: rgba(253, 164, 3, 0.6);\r\n  --input-background-color: lightgray;\r\n  --disabled-txt-color: gray;\r\n  --input-txt-color: black;\r\n  --txt-hightlighted: white;  \r\n  --warning-color: lightpink;\r\n  --header-color: rgb(249, 240, 122);\r\n  --transition-time: 0.3s;\r\n}\r\n\r\nhtml {\r\n  background-size: 100% 100vh;\r\n  background-repeat: no-repeat;\r\n  background-image: url(../assets/img/background4.jpeg);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Inter';\r\n\r\n  user-select: none;\r\n}\r\n\r\nheader {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 4rem;\r\n  position: fixed;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: end;\r\n  padding: 0.5rem 5rem;\r\n  background-color: var(--header-back-color);\r\n}\r\n\r\nheader button {\r\n  width: auto;\r\n  height: auto;\r\n  padding: 0.3rem 1rem;\r\n  display: flex;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--header-button-color);\r\n  color: var(--input-background-color);\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\nheader button:hover {\r\n  color: var(--txt-hightlighted);\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  width: auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 4rem;\r\n  padding-top: 5rem;\r\n  border-radius: 2rem;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--modal-bg-color);\r\n}\r\n\r\n.hidden-modal {\r\n  display: none;\r\n}\r\n\r\n.modal #header {\r\n  width: 100%;\r\n  height: auto;\r\n  color: var(--header-color);\r\n  padding-bottom: 1rem;\r\n  font-family: 'Kill-Switch';\r\n  font-size: 4.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.modal button {\r\n  /* display: none; */  \r\n  width: 10rem;\r\n  height: auto;\r\n  padding: 1rem;\r\n  line-height: 1.5rem;\r\n  font-size: 1.5rem;\r\n  color: var(--input-txt-color);\r\n  background-color: var(--modal-button-color);\r\n  border-radius: 1rem;\r\n  border: 0px solid transparent;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.modal button:hover:not(:disabled) {\r\n  font-weight: bold;\r\n}\r\n\r\n.modal button:disabled {\r\n  color: var(--disabled-txt-color);\r\n  background-color: var(--modal-button-color-disabled);\r\n  cursor: default;\r\n}\r\n\r\n#logout-wrapper {\r\n  padding: 3rem;\r\n}\r\n\r\n#logout-txt {\r\n  font-size: 1.7rem;\r\n  text-align: center;\r\n  width: 30rem;\r\n  height: auto;\r\n  padding: 0 1rem;\r\n}\r\n\r\n#logout-btn-wrap {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 3rem;\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.input-wrap {\r\n  position: relative;\r\n  width: auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.7rem;\r\n}\r\n\r\n.input-wrap label {\r\n  align-self: flex-start;\r\n  padding-left: 0.8rem;\r\n  font-size: 1.7rem;\r\n  font-family: 'Inter';\r\n}\r\n\r\n.input-wrap:nth-child(3) {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.user-input {\r\n  width: 30rem;\r\n  height: auto;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 2rem;\r\n  color: var(--input-txt-color);\r\n  background-color: var(--input-background-color);\r\n  border: 5px solid transparent;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-input:focus {\r\n  color: var(--input-txt-color);\r\n  outline: none;\r\n}\r\n\r\n#start-screen-wrapper {\r\n  width: 40vw;\r\n  height: auto;\r\n  gap: 0;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding-bottom: 0;  \r\n  font-size: 3rem;\r\n}\r\n\r\n#start-screen-main-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 2rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.start-img {\r\n  width: 30rem;\r\n  gap: 1rem;\r\n  border-radius: 2rem;\r\n  overflow: hidden;\r\n}\r\n\r\n#start-screen-txt {\r\n  width: 100%;\r\n  text-align: justify;\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n  color: var(--header-color);\r\n}\r\n\r\n#start-screen-wrapper button {\r\n  width: 15rem;\r\n}\r\n\r\n#greeting-wrapper {\r\n  padding: 2rem 3rem;\r\n  padding-bottom: 1.5rem;\r\n  width: 30vw;\r\n  height: auto;\r\n}\r\n\r\n#greeting-txt {\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: justify;\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n  color: var(--header-color);\r\n}\r\n\r\n#greeting-close {\r\n  position: absolute;\r\n  display: block;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.greeting-close-svg {\r\n  fill: var(--header-color);\r\n}\r\n\r\n#greeting-close:hover {\r\n  transform: scale(120%);\r\n}\r\n\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 15px;\r\n  visibility: visible;\r\n  width: auto;\r\n  height: auto;\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--header-color);\r\n  transform: translateY(120%);\r\n  z-index: 1;\r\n}\r\n\r\n.tooltip::after {\r\n  content: \" \";\r\n  position: absolute;\r\n  bottom: 100%;  /* At the top of the tooltip */\r\n  left: 50%;\r\n  margin-left: -0.5rem;\r\n  border-width: 0.5rem;\r\n  border-style: solid;\r\n  border-color: transparent transparent black transparent;\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  #login-wrapper {\r\n    width: 50vw;\r\n    padding: 1.5rem 3rem;\r\n    gap: 1.5rem;\r\n    padding-top: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 1130px) {\r\n  #login-wrapper {\r\n    width: 60vw;\r\n    padding: 1.5rem 3rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 930px) {\r\n  #login-wrapper {\r\n    width: 70vw;\r\n    padding: 1.5rem 2rem;\r\n    gap: 1.5rem;\r\n    padding-top: 1rem;\r\n  }\r\n\r\n  .user-input {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  html {\r\n    background-size: 150vh;\r\n  }\r\n\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/login.ts":
/*!**********************!*\
  !*** ./src/login.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startLogin: () => (/* binding */ startLogin)
/* harmony export */ });
const inputWindow = document.createElement('div');
inputWindow.setAttribute('id', 'login-wrapper');
inputWindow.classList.add('modal');
// document.body.append(inputWindow);
const loginHeader = document.createElement('div');
loginHeader.setAttribute('id', 'header');
loginHeader.textContent = 'RSS Puzzle Login';
// inputWindow.append(loginHeader);
const inputWrapperFirst = document.createElement('div');
inputWrapperFirst.classList.add('input-wrap');
// inputWindow.append(inputWrapperFirst);
const firstNameLBL = document.createElement('label');
firstNameLBL.setAttribute('for', 'first-name');
firstNameLBL.textContent = 'First Name (min 3 characters)';
// inputWrapperFirst.append(firstNameLBL);
const firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('id', 'first-name');
firstNameInput.setAttribute('autocomplete', 'off');
// prettier-ignore
firstNameInput.setAttribute('pattern', '[A-Z][a-z\\-]{2,}'); // eslint-disable-line no-useless-escape
firstNameInput.classList.add('user-input');
// inputWrapperFirst.append(firstNameInput);
const inputWrapperLast = document.createElement('div');
inputWrapperLast.classList.add('input-wrap');
// inputWindow.append(inputWrapperLast);
const lastNameLBL = document.createElement('label');
lastNameLBL.setAttribute('for', 'first-name');
lastNameLBL.textContent = 'Surname (min 4 characters)';
// inputWrapperLast.append(lastNameLBL);
const lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('id', 'last-name');
lastNameInput.setAttribute('autocomplete', 'off');
// prettier-ignore
lastNameInput.setAttribute('pattern', '[A-Z][a-z\\-]{3,}'); // eslint-disable-line no-useless-escape
lastNameInput.classList.add('user-input');
// inputWrapperLast.append(lastNameInput);
const warningTip = document.createElement('div');
warningTip.classList.add('tooltip');
warningTip.innerText = 'Test';
const loginBTN = document.createElement('button');
loginBTN.setAttribute('disabled', '');
loginBTN.innerText = 'Login';
// inputWindow.append(loginBTN);
const userDataValid = {
    firstName: false,
    lastName: false,
};
// const userData = {
//     firstName: '',
//     lastName: '',
// };
const warningMessage = [
    'Minimum name length is ',
    'Enter your name in latin caracters',
    'First letter must be in upper case',
];
function checkInput(event, inputObj) {
    if (inputObj.value.length == 0)
        return;
    // if(event.target.value.length == 0) return;
    if (inputObj.validity.patternMismatch) {
        event.preventDefault();
        if (issueWarning(event, inputObj)) {
            inputObj.focus();
            closeWarnForCorrection(inputObj);
        }
        else {
            checkDataIsComplete(inputObj);
        }
    }
    else {
        checkDataIsComplete(inputObj);
    }
}
function checkDataIsComplete(inputObj) {
    if (inputObj === lastNameInput) {
        // userData.lastName = inputObj.value;
        userDataValid.lastName = true;
        if (userDataValid.firstName === true)
            loginBTN.removeAttribute('disabled');
    }
    else {
        // userData.firstName = inputObj.value;
        userDataValid.firstName = true;
        if (userDataValid.lastName === true)
            loginBTN.removeAttribute('disabled');
    }
}
function closeWarnForCorrection(inputField) {
    inputField.addEventListener('input', () => {
        warningTip.remove();
        inputField.style.backgroundColor = 'var(--input-background-color)';
    }, { once: true });
}
function issueWarning(event, inputObj) {
    const string = inputObj.value;
    // let string = event.target.value;
    const inputLenLimit = inputObj === lastNameInput ? 4 : 3;
    const regxLatin = /[^a-z\-]/; // eslint-disable-line no-useless-escape
    const regxUpper = /^[A-Z]/;
    let warning = '';
    loginBTN.setAttribute('disabled', '');
    if (string.length < inputLenLimit)
        warning = warningMessage[0] + inputLenLimit + ' caracters. ';
    if (regxLatin.test(string)) {
        warning += warningMessage[1] + '. ';
    }
    if (!regxUpper.test(string)) {
        warning += warningMessage[2] + '. ';
    }
    if (warning.length === 0)
        return false;
    showCollout(warning, inputObj);
    return true;
}
function showCollout(message, targetObj) {
    targetObj.style.backgroundColor = 'var(--warning-color)';
    warningTip.textContent = message;
    // compensate surname input bottom padding
    if (targetObj.parentElement === inputWrapperLast)
        warningTip.style.bottom = '2rem';
    if (targetObj.parentElement !== null)
        targetObj.parentElement.append(warningTip);
}
function makeLoginWindow() {
    document.body.append(inputWindow);
    inputWindow.append(loginHeader);
    inputWindow.append(inputWrapperFirst);
    inputWrapperFirst.append(firstNameLBL);
    firstNameInput.value = '';
    inputWrapperFirst.append(firstNameInput);
    inputWindow.append(inputWrapperLast);
    inputWrapperLast.append(lastNameLBL);
    lastNameInput.value = '';
    inputWrapperLast.append(lastNameInput);
    inputWindow.append(loginBTN);
}
function saveInLocalStorage() {
    return new Promise((res) => {
        const inputData = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
        };
        localStorage.setItem('rss-puzzle-user', JSON.stringify(inputData));
        res(true);
    });
}
function startLogin() {
    return new Promise((res) => {
        makeLoginWindow();
        firstNameInput.addEventListener('blur', (e) => {
            checkInput(e, firstNameInput);
        });
        firstNameInput.addEventListener('change', (e) => {
            checkInput(e, firstNameInput);
        });
        lastNameInput.addEventListener('blur', (e) => {
            checkInput(e, lastNameInput);
        });
        lastNameInput.addEventListener('change', (e) => {
            checkInput(e, lastNameInput);
        });
        loginBTN.addEventListener('click', () => {
            // Close input window
            inputWindow.remove();
            saveInLocalStorage().then(() => res());
        });
    });
}


/***/ }),

/***/ "./src/assets/img/background4.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/img/background4.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43a355a5ca23b2e94e43.jpeg";

/***/ }),

/***/ "./src/fonts/Forum-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Forum-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b8e836eb36b2f54db9a.ttf";

/***/ }),

/***/ "./src/fonts/Inter-Bold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Inter-Bold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0eaf807b1cf0eceabe0f.ttf";

/***/ }),

/***/ "./src/fonts/Inter-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Inter-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ca9ba81e9dcaa12b3a1.ttf";

/***/ }),

/***/ "./src/fonts/Kill-Switch.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Kill-Switch.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f98dc6beea26bf4b567b.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");


const userData = {
    firstName: '',
    lastName: '',
};
const header = document.createElement('header');
const logoutBTN = document.createElement('button');
logoutBTN.textContent = 'Log Out';
const logOutWindow = document.createElement('div');
logOutWindow.setAttribute('id', 'logout-wrapper');
logOutWindow.classList.add('modal');
logOutWindow.classList.add('hidden-modal');
document.body.append(logOutWindow);
const logOutText = document.createElement('p');
logOutText.setAttribute('id', 'logout-txt');
logOutText.classList.add('info-txt');
logOutText.textContent =
    'Are You sure You want to log out? Your account will be removed and You will need to log in again.';
logOutWindow.append(logOutText);
const logOutBTNWrapper = document.createElement('div');
logOutBTNWrapper.setAttribute('id', 'logout-btn-wrap');
logOutWindow.append(logOutBTNWrapper);
const logOutCancelBTN = document.createElement('button');
logOutCancelBTN.innerText = 'Cancel';
logOutBTNWrapper.append(logOutCancelBTN);
const logOutConfirmBTN = document.createElement('button');
logOutConfirmBTN.innerText = 'Log Out';
logOutBTNWrapper.append(logOutConfirmBTN);
const startScreen = document.createElement('div');
startScreen.setAttribute('id', 'start-screen-wrapper');
startScreen.classList.add('modal');
startScreen.classList.add('hidden-modal');
document.body.append(startScreen);
const startScreenHeader = document.createElement('h1');
startScreenHeader.setAttribute('id', 'start-screen-header');
startScreenHeader.setAttribute('id', 'header');
startScreenHeader.textContent = 'RSS PUZZLE';
startScreen.append(startScreenHeader);
const startScreenMain = document.createElement('div');
startScreenMain.setAttribute('id', 'start-screen-main-wrapper');
startScreen.append(startScreenMain);
const startScreenIMG1 = document.createElement('img');
startScreenIMG1.setAttribute('id', 'start-screen-img1');
startScreenIMG1.setAttribute('src', '../src/assets/img/candy_girl.png');
startScreenIMG1.setAttribute('alt', 'funny-girl-image');
startScreenIMG1.classList.add('start-img');
startScreenMain.append(startScreenIMG1);
const startScreenTxt = document.createElement('p');
startScreenTxt.setAttribute('id', 'start-screen-txt');
startScreenTxt.textContent = `RSS Puzzle is an interactive 
mini-game aimed at enhancing English language skills. Players assemble 
sentences from jumbled words, inspired by Lingualeo's Phrase Constructor 
training. The game integrates various levels of difficulty, hint options, 
and a unique puzzle-like experience with artwork.`;
startScreenMain.append(startScreenTxt);
const startGameBTN = document.createElement('button');
startGameBTN.innerText = 'Start Plying';
startScreen.append(startGameBTN);
const greetingWindow = document.createElement('div');
greetingWindow.setAttribute('id', 'greeting-wrapper');
greetingWindow.classList.add('modal');
greetingWindow.classList.add('hidden-modal');
document.body.append(greetingWindow);
const greetingTxt = document.createElement('p');
greetingTxt.setAttribute('id', 'greeting-txt');
greetingWindow.append(greetingTxt);
const greetingClose = document.createElement('div');
greetingClose.setAttribute('id', 'greeting-close');
greetingClose.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="greetng-close-svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
greetingWindow.append(greetingClose);
prepareUser();
function prepareUser() {
    new Promise((res) => {
        if (checkLocalStorage() === false) {
            (0,_login__WEBPACK_IMPORTED_MODULE_0__.startLogin)().then(() => res());
        }
        else {
            res();
        }
    }).then(() => {
        document.body.append(header);
        header.append(logoutBTN);
        logoutBTN.addEventListener('click', () => {
            logUserOut();
        });
        showStartScreen();
    });
}
function logUserOut() {
    logOutWindow.classList.remove('hidden-modal');
    logOutCancelBTN.addEventListener('click', () => {
        logOutWindow.classList.add('hidden-modal');
    }, true);
    logOutConfirmBTN.addEventListener('click', () => {
        header.style.display = 'none';
        logOutWindow.classList.add('hidden-modal');
        localStorage.removeItem('rss-puzzle-user');
        prepareUser();
    }, true);
}
function checkLocalStorage() {
    const storageData = localStorage.getItem('rss-puzzle-user');
    if (storageData === null)
        return false;
    const localData = Object.assign({}, JSON.parse(storageData));
    userData.firstName = localData.firstName;
    userData.lastName = localData.lastName;
    return true;
}
function showStartScreen() {
    header.style.display = 'none';
    startScreen.classList.remove('hidden-modal');
    console.log('firstName & lastName = ', userData.firstName, userData.lastName);
    startGameBTN.addEventListener('click', () => {
        startScreen.classList.add('hidden-modal');
        startGame();
    }, true);
}
function startGame() {
    greetingTxt.textContent = `Dear ${userData.firstName} ${userData.lastName} ! 
    We appreciate Your interest in RSS Puzzle game. 
    Hope You enjoy playing and learn a lot of English vocabulary.`;
    greetingWindow.classList.remove('hidden-modal');
    greetingClose.addEventListener('click', () => {
        greetingWindow.classList.add('hidden-modal');
    }, true);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxnSUFBNkM7QUFDekYsNENBQTRDLGdJQUE2QztBQUN6Riw0Q0FBNEMsMEhBQTBDO0FBQ3RGLDRDQUE0Qyw0SEFBMkM7QUFDdkYsNENBQTRDLHdJQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLHVCQUF1QixXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxHQUFHLElBQUk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxHQUFHLElBQUk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUksWUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ1Q7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLG9CQUFvQixFQUFFLG1CQUFtQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvbG9naW4udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Gb3J1bS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9LaWxsLVN3aXRjaC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL2JhY2tncm91bmQ0LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0ZvcnVtJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdGb3J1bSBCb2xkJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0ludGVyIEJvbGQnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdLaWxsLVN3aXRjaCc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWhlYWRlci1iYWNrLWNvbG9yOiByZ2IoMjU1LCA2NCwgMTI1KTtcclxuICAtLWhlYWRlci1idXR0b24tY29sb3I6IHJnYig2NCwgMTAzLCAxNTgpO1xyXG4gIC0tbW9kYWwtYmctY29sb3I6IHJnYigyMzIsIDExNywgMjYpO1xyXG4gIC0tbW9kYWwtYnV0dG9uLWNvbG9yOiByZ2IoMjUzLCAxNjQsIDMpO1xyXG4gIC0tbW9kYWwtYnV0dG9uLWNvbG9yLWRpc2FibGVkOiByZ2JhKDI1MywgMTY0LCAzLCAwLjYpO1xyXG4gIC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIC0tZGlzYWJsZWQtdHh0LWNvbG9yOiBncmF5O1xyXG4gIC0taW5wdXQtdHh0LWNvbG9yOiBibGFjaztcclxuICAtLXR4dC1oaWdodGxpZ2h0ZWQ6IHdoaXRlOyAgXHJcbiAgLS13YXJuaW5nLWNvbG9yOiBsaWdodHBpbms7XHJcbiAgLS1oZWFkZXItY29sb3I6IHJnYigyNDksIDI0MCwgMTIyKTtcclxuICAtLXRyYW5zaXRpb24tdGltZTogMC4zcztcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2stY29sb3IpO1xyXG59XHJcblxyXG5oZWFkZXIgYnV0dG9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1idXR0b24tY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuaGVhZGVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXR4dC1oaWdodGxpZ2h0ZWQpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xyXG59XHJcblxyXG4uaGlkZGVuLW1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwgI2hlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2lsbC1Td2l0Y2gnO1xyXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIGJ1dHRvbiB7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi8gIFxyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10eHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJ1dHRvbi1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLm1vZGFsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tb2RhbCBidXR0b246ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10eHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJ1dHRvbi1jb2xvci1kaXNhYmxlZCk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jbG9nb3V0LXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbiNsb2dvdXQtdHh0IHtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbiNsb2dvdXQtYnRuLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDNyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuN3JlbTtcclxufVxyXG5cclxuLmlucHV0LXdyYXAgbGFiZWwge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwOm50aC1jaGlsZCgzKSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi51c2VyLWlucHV0IHtcclxuICB3aWR0aDogMzByZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogdmFyKC0taW5wdXQtdHh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVzZXItaW5wdXQ6Zm9jdXMge1xyXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10eHQtY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNzdGFydC1zY3JlZW4td3JhcHBlciB7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGdhcDogMDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDsgIFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuI3N0YXJ0LXNjcmVlbi1tYWluLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGFydC1pbWcge1xyXG4gIHdpZHRoOiAzMHJlbTtcclxuICBnYXA6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jc3RhcnQtc2NyZWVuLXR4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG5cclxuI3N0YXJ0LXNjcmVlbi13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4jZ3JlZXRpbmctd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jZ3JlZXRpbmctdHh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG5cclxuI2dyZWV0aW5nLWNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLmdyZWV0aW5nLWNsb3NlLXN2ZyB7XHJcbiAgZmlsbDogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxufVxyXG5cclxuI2dyZWV0aW5nLWNsb3NlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xyXG59XHJcblxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMTVweDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udG9vbHRpcDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwMCU7ICAvKiBBdCB0aGUgdG9wIG9mIHRoZSB0b29sdGlwICovXHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xyXG4gIGJvcmRlci13aWR0aDogMC41cmVtO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICNsb2dpbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4gICNsb2dpbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICAjbG9naW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC51c2VyLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG5cclxuICBodG1sIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwdmg7XHJcbiAgfVxyXG5cclxuICBcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsNENBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNENBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNENBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsd0NBQXdDO0VBQ3hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMscURBQXFEO0VBQ3JELG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIseURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjs7RUFFcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFD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bkIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZLEdBQUcsOEJBQThCO0VBQzdDLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRm9ydW0nO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0ZvcnVtLVJlZ3VsYXIudHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRm9ydW0gQm9sZCc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvRm9ydW0tUmVndWxhci50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0ludGVyLVJlZ3VsYXIudHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXIgQm9sZCc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItQm9sZC50dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnS2lsbC1Td2l0Y2gnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0tpbGwtU3dpdGNoLnR0ZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmFjay1jb2xvcjogcmdiKDI1NSwgNjQsIDEyNSk7XFxyXFxuICAtLWhlYWRlci1idXR0b24tY29sb3I6IHJnYig2NCwgMTAzLCAxNTgpO1xcclxcbiAgLS1tb2RhbC1iZy1jb2xvcjogcmdiKDIzMiwgMTE3LCAyNik7XFxyXFxuICAtLW1vZGFsLWJ1dHRvbi1jb2xvcjogcmdiKDI1MywgMTY0LCAzKTtcXHJcXG4gIC0tbW9kYWwtYnV0dG9uLWNvbG9yLWRpc2FibGVkOiByZ2JhKDI1MywgMTY0LCAzLCAwLjYpO1xcclxcbiAgLS1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAtLWRpc2FibGVkLXR4dC1jb2xvcjogZ3JheTtcXHJcXG4gIC0taW5wdXQtdHh0LWNvbG9yOiBibGFjaztcXHJcXG4gIC0tdHh0LWhpZ2h0bGlnaHRlZDogd2hpdGU7ICBcXHJcXG4gIC0td2FybmluZy1jb2xvcjogbGlnaHRwaW5rO1xcclxcbiAgLS1oZWFkZXItY29sb3I6IHJnYigyNDksIDI0MCwgMTIyKTtcXHJcXG4gIC0tdHJhbnNpdGlvbi10aW1lOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kNC5qcGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXHJcXG5cXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1idXR0b24tY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWhpZ2h0bGlnaHRlZCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsICNoZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdLaWxsLVN3aXRjaCc7XFxyXFxuICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICAvKiBkaXNwbGF5OiBub25lOyAqLyAgXFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWlucHV0LXR4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1idXR0b24tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdHh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJ1dHRvbi1jb2xvci1kaXNhYmxlZCk7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbiNsb2dvdXQtd3JhcHBlciB7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nb3V0LXR4dCB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMHJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ291dC1idG4td3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXAgbGFiZWwge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbnB1dCB7XFxyXFxuICB3aWR0aDogMzByZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10eHQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWlucHV0OmZvY3VzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10eHQtY29sb3IpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0LXNjcmVlbi13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDsgIFxcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQtc2NyZWVuLW1haW4td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWltZyB7XFxyXFxuICB3aWR0aDogMzByZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0LXNjcmVlbi10eHQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQtc2NyZWVuLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0aW5nLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JlZXRpbmctdHh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0aW5nLWNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5ncmVldGluZy1jbG9zZS1zdmcge1xcclxcbiAgZmlsbDogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2dyZWV0aW5nLWNsb3NlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTIwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDE1cHg7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAlKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwMCU7ICAvKiBBdCB0aGUgdG9wIG9mIHRoZSB0b29sdGlwICovXFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cmVtO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgYmxhY2sgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXHJcXG4gICNsb2dpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTMwcHgpIHtcXHJcXG4gICNsb2dpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcXHJcXG4gICNsb2dpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaHRtbCB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbnB1dFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5wdXRXaW5kb3cuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi13cmFwcGVyJyk7XG5pbnB1dFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmQoaW5wdXRXaW5kb3cpO1xuY29uc3QgbG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5sb2dpbkhlYWRlci50ZXh0Q29udGVudCA9ICdSU1MgUHV6emxlIExvZ2luJztcbi8vIGlucHV0V2luZG93LmFwcGVuZChsb2dpbkhlYWRlcik7XG5jb25zdCBpbnB1dFdyYXBwZXJGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5wdXRXcmFwcGVyRmlyc3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcCcpO1xuLy8gaW5wdXRXaW5kb3cuYXBwZW5kKGlucHV0V3JhcHBlckZpcnN0KTtcbmNvbnN0IGZpcnN0TmFtZUxCTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5maXJzdE5hbWVMQkwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3QtbmFtZScpO1xuZmlyc3ROYW1lTEJMLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUgKG1pbiAzIGNoYXJhY3RlcnMpJztcbi8vIGlucHV0V3JhcHBlckZpcnN0LmFwcGVuZChmaXJzdE5hbWVMQkwpO1xuY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZmlyc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmlyc3QtbmFtZScpO1xuZmlyc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4vLyBwcmV0dGllci1pZ25vcmVcbmZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsICdbQS1aXVthLXpcXFxcLV17Mix9Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmZpcnN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5wdXQnKTtcbi8vIGlucHV0V3JhcHBlckZpcnN0LmFwcGVuZChmaXJzdE5hbWVJbnB1dCk7XG5jb25zdCBpbnB1dFdyYXBwZXJMYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbnB1dFdyYXBwZXJMYXN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcbi8vIGlucHV0V2luZG93LmFwcGVuZChpbnB1dFdyYXBwZXJMYXN0KTtcbmNvbnN0IGxhc3ROYW1lTEJMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmxhc3ROYW1lTEJMLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0LW5hbWUnKTtcbmxhc3ROYW1lTEJMLnRleHRDb250ZW50ID0gJ1N1cm5hbWUgKG1pbiA0IGNoYXJhY3RlcnMpJztcbi8vIGlucHV0V3JhcHBlckxhc3QuYXBwZW5kKGxhc3ROYW1lTEJMKTtcbmNvbnN0IGxhc3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubGFzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xubGFzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhc3QtbmFtZScpO1xubGFzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxubGFzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnW0EtWl1bYS16XFxcXC1dezMsfScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5sYXN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3VzZXItaW5wdXQnKTtcbi8vIGlucHV0V3JhcHBlckxhc3QuYXBwZW5kKGxhc3ROYW1lSW5wdXQpO1xuY29uc3Qgd2FybmluZ1RpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud2FybmluZ1RpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XG53YXJuaW5nVGlwLmlubmVyVGV4dCA9ICdUZXN0JztcbmNvbnN0IGxvZ2luQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5sb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xubG9naW5CVE4uaW5uZXJUZXh0ID0gJ0xvZ2luJztcbi8vIGlucHV0V2luZG93LmFwcGVuZChsb2dpbkJUTik7XG5jb25zdCB1c2VyRGF0YVZhbGlkID0ge1xuICAgIGZpcnN0TmFtZTogZmFsc2UsXG4gICAgbGFzdE5hbWU6IGZhbHNlLFxufTtcbi8vIGNvbnN0IHVzZXJEYXRhID0ge1xuLy8gICAgIGZpcnN0TmFtZTogJycsXG4vLyAgICAgbGFzdE5hbWU6ICcnLFxuLy8gfTtcbmNvbnN0IHdhcm5pbmdNZXNzYWdlID0gW1xuICAgICdNaW5pbXVtIG5hbWUgbGVuZ3RoIGlzICcsXG4gICAgJ0VudGVyIHlvdXIgbmFtZSBpbiBsYXRpbiBjYXJhY3RlcnMnLFxuICAgICdGaXJzdCBsZXR0ZXIgbXVzdCBiZSBpbiB1cHBlciBjYXNlJyxcbl07XG5mdW5jdGlvbiBjaGVja0lucHV0KGV2ZW50LCBpbnB1dE9iaikge1xuICAgIGlmIChpbnB1dE9iai52YWx1ZS5sZW5ndGggPT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGlmKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgIGlmIChpbnB1dE9iai52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGlzc3VlV2FybmluZyhldmVudCwgaW5wdXRPYmopKSB7XG4gICAgICAgICAgICBpbnB1dE9iai5mb2N1cygpO1xuICAgICAgICAgICAgY2xvc2VXYXJuRm9yQ29ycmVjdGlvbihpbnB1dE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGVja0RhdGFJc0NvbXBsZXRlKGlucHV0T2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hlY2tEYXRhSXNDb21wbGV0ZShpbnB1dE9iaik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2hlY2tEYXRhSXNDb21wbGV0ZShpbnB1dE9iaikge1xuICAgIGlmIChpbnB1dE9iaiA9PT0gbGFzdE5hbWVJbnB1dCkge1xuICAgICAgICAvLyB1c2VyRGF0YS5sYXN0TmFtZSA9IGlucHV0T2JqLnZhbHVlO1xuICAgICAgICB1c2VyRGF0YVZhbGlkLmxhc3ROYW1lID0gdHJ1ZTtcbiAgICAgICAgaWYgKHVzZXJEYXRhVmFsaWQuZmlyc3ROYW1lID09PSB0cnVlKVxuICAgICAgICAgICAgbG9naW5CVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gdXNlckRhdGEuZmlyc3ROYW1lID0gaW5wdXRPYmoudmFsdWU7XG4gICAgICAgIHVzZXJEYXRhVmFsaWQuZmlyc3ROYW1lID0gdHJ1ZTtcbiAgICAgICAgaWYgKHVzZXJEYXRhVmFsaWQubGFzdE5hbWUgPT09IHRydWUpXG4gICAgICAgICAgICBsb2dpbkJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xvc2VXYXJuRm9yQ29ycmVjdGlvbihpbnB1dEZpZWxkKSB7XG4gICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgd2FybmluZ1RpcC5yZW1vdmUoKTtcbiAgICAgICAgaW5wdXRGaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0taW5wdXQtYmFja2dyb3VuZC1jb2xvciknO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn1cbmZ1bmN0aW9uIGlzc3VlV2FybmluZyhldmVudCwgaW5wdXRPYmopIHtcbiAgICBjb25zdCBzdHJpbmcgPSBpbnB1dE9iai52YWx1ZTtcbiAgICAvLyBsZXQgc3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGlucHV0TGVuTGltaXQgPSBpbnB1dE9iaiA9PT0gbGFzdE5hbWVJbnB1dCA/IDQgOiAzO1xuICAgIGNvbnN0IHJlZ3hMYXRpbiA9IC9bXmEtelxcLV0vOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgY29uc3QgcmVneFVwcGVyID0gL15bQS1aXS87XG4gICAgbGV0IHdhcm5pbmcgPSAnJztcbiAgICBsb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgaW5wdXRMZW5MaW1pdClcbiAgICAgICAgd2FybmluZyA9IHdhcm5pbmdNZXNzYWdlWzBdICsgaW5wdXRMZW5MaW1pdCArICcgY2FyYWN0ZXJzLiAnO1xuICAgIGlmIChyZWd4TGF0aW4udGVzdChzdHJpbmcpKSB7XG4gICAgICAgIHdhcm5pbmcgKz0gd2FybmluZ01lc3NhZ2VbMV0gKyAnLiAnO1xuICAgIH1cbiAgICBpZiAoIXJlZ3hVcHBlci50ZXN0KHN0cmluZykpIHtcbiAgICAgICAgd2FybmluZyArPSB3YXJuaW5nTWVzc2FnZVsyXSArICcuICc7XG4gICAgfVxuICAgIGlmICh3YXJuaW5nLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHNob3dDb2xsb3V0KHdhcm5pbmcsIGlucHV0T2JqKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNob3dDb2xsb3V0KG1lc3NhZ2UsIHRhcmdldE9iaikge1xuICAgIHRhcmdldE9iai5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0td2FybmluZy1jb2xvciknO1xuICAgIHdhcm5pbmdUaXAudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIC8vIGNvbXBlbnNhdGUgc3VybmFtZSBpbnB1dCBib3R0b20gcGFkZGluZ1xuICAgIGlmICh0YXJnZXRPYmoucGFyZW50RWxlbWVudCA9PT0gaW5wdXRXcmFwcGVyTGFzdClcbiAgICAgICAgd2FybmluZ1RpcC5zdHlsZS5ib3R0b20gPSAnMnJlbSc7XG4gICAgaWYgKHRhcmdldE9iai5wYXJlbnRFbGVtZW50ICE9PSBudWxsKVxuICAgICAgICB0YXJnZXRPYmoucGFyZW50RWxlbWVudC5hcHBlbmQod2FybmluZ1RpcCk7XG59XG5mdW5jdGlvbiBtYWtlTG9naW5XaW5kb3coKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW5wdXRXaW5kb3cpO1xuICAgIGlucHV0V2luZG93LmFwcGVuZChsb2dpbkhlYWRlcik7XG4gICAgaW5wdXRXaW5kb3cuYXBwZW5kKGlucHV0V3JhcHBlckZpcnN0KTtcbiAgICBpbnB1dFdyYXBwZXJGaXJzdC5hcHBlbmQoZmlyc3ROYW1lTEJMKTtcbiAgICBmaXJzdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0V3JhcHBlckZpcnN0LmFwcGVuZChmaXJzdE5hbWVJbnB1dCk7XG4gICAgaW5wdXRXaW5kb3cuYXBwZW5kKGlucHV0V3JhcHBlckxhc3QpO1xuICAgIGlucHV0V3JhcHBlckxhc3QuYXBwZW5kKGxhc3ROYW1lTEJMKTtcbiAgICBsYXN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXRXcmFwcGVyTGFzdC5hcHBlbmQobGFzdE5hbWVJbnB1dCk7XG4gICAgaW5wdXRXaW5kb3cuYXBwZW5kKGxvZ2luQlROKTtcbn1cbmZ1bmN0aW9uIHNhdmVJbkxvY2FsU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dERhdGEgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyc3MtcHV6emxlLXVzZXInLCBKU09OLnN0cmluZ2lmeShpbnB1dERhdGEpKTtcbiAgICAgICAgcmVzKHRydWUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TG9naW4oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgbWFrZUxvZ2luV2luZG93KCk7XG4gICAgICAgIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChlLCBmaXJzdE5hbWVJbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaXJzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChlLCBmaXJzdE5hbWVJbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tJbnB1dChlLCBsYXN0TmFtZUlucHV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoZSwgbGFzdE5hbWVJbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2dpbkJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIENsb3NlIGlucHV0IHdpbmRvd1xuICAgICAgICAgICAgaW5wdXRXaW5kb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UoKS50aGVuKCgpID0+IHJlcygpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc3RhcnRMb2dpbiB9IGZyb20gJy4vbG9naW4nO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuY29uc3QgdXNlckRhdGEgPSB7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG59O1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5jb25zdCBsb2dvdXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmxvZ291dEJUTi50ZXh0Q29udGVudCA9ICdMb2cgT3V0JztcbmNvbnN0IGxvZ091dFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nT3V0V2luZG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nb3V0LXdyYXBwZXInKTtcbmxvZ091dFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xubG9nT3V0V2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQobG9nT3V0V2luZG93KTtcbmNvbnN0IGxvZ091dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sb2dPdXRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nb3V0LXR4dCcpO1xubG9nT3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXR4dCcpO1xubG9nT3V0VGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ0FyZSBZb3Ugc3VyZSBZb3Ugd2FudCB0byBsb2cgb3V0PyBZb3VyIGFjY291bnQgd2lsbCBiZSByZW1vdmVkIGFuZCBZb3Ugd2lsbCBuZWVkIHRvIGxvZyBpbiBhZ2Fpbi4nO1xubG9nT3V0V2luZG93LmFwcGVuZChsb2dPdXRUZXh0KTtcbmNvbnN0IGxvZ091dEJUTldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ091dEJUTldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvdXQtYnRuLXdyYXAnKTtcbmxvZ091dFdpbmRvdy5hcHBlbmQobG9nT3V0QlROV3JhcHBlcik7XG5jb25zdCBsb2dPdXRDYW5jZWxCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmxvZ091dENhbmNlbEJUTi5pbm5lclRleHQgPSAnQ2FuY2VsJztcbmxvZ091dEJUTldyYXBwZXIuYXBwZW5kKGxvZ091dENhbmNlbEJUTik7XG5jb25zdCBsb2dPdXRDb25maXJtQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5sb2dPdXRDb25maXJtQlROLmlubmVyVGV4dCA9ICdMb2cgT3V0JztcbmxvZ091dEJUTldyYXBwZXIuYXBwZW5kKGxvZ091dENvbmZpcm1CVE4pO1xuY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN0YXJ0U2NyZWVuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnQtc2NyZWVuLXdyYXBwZXInKTtcbnN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5zdGFydFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YXJ0U2NyZWVuKTtcbmNvbnN0IHN0YXJ0U2NyZWVuSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnN0YXJ0U2NyZWVuSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnQtc2NyZWVuLWhlYWRlcicpO1xuc3RhcnRTY3JlZW5IZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbnN0YXJ0U2NyZWVuSGVhZGVyLnRleHRDb250ZW50ID0gJ1JTUyBQVVpaTEUnO1xuc3RhcnRTY3JlZW4uYXBwZW5kKHN0YXJ0U2NyZWVuSGVhZGVyKTtcbmNvbnN0IHN0YXJ0U2NyZWVuTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3RhcnRTY3JlZW5NYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnQtc2NyZWVuLW1haW4td3JhcHBlcicpO1xuc3RhcnRTY3JlZW4uYXBwZW5kKHN0YXJ0U2NyZWVuTWFpbik7XG5jb25zdCBzdGFydFNjcmVlbklNRzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnN0YXJ0U2NyZWVuSU1HMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0LXNjcmVlbi1pbWcxJyk7XG5zdGFydFNjcmVlbklNRzEuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2Fzc2V0cy9pbWcvY2FuZHlfZ2lybC5wbmcnKTtcbnN0YXJ0U2NyZWVuSU1HMS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmdW5ueS1naXJsLWltYWdlJyk7XG5zdGFydFNjcmVlbklNRzEuY2xhc3NMaXN0LmFkZCgnc3RhcnQtaW1nJyk7XG5zdGFydFNjcmVlbk1haW4uYXBwZW5kKHN0YXJ0U2NyZWVuSU1HMSk7XG5jb25zdCBzdGFydFNjcmVlblR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnN0YXJ0U2NyZWVuVHh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnQtc2NyZWVuLXR4dCcpO1xuc3RhcnRTY3JlZW5UeHQudGV4dENvbnRlbnQgPSBgUlNTIFB1enpsZSBpcyBhbiBpbnRlcmFjdGl2ZSBcbm1pbmktZ2FtZSBhaW1lZCBhdCBlbmhhbmNpbmcgRW5nbGlzaCBsYW5ndWFnZSBza2lsbHMuIFBsYXllcnMgYXNzZW1ibGUgXG5zZW50ZW5jZXMgZnJvbSBqdW1ibGVkIHdvcmRzLCBpbnNwaXJlZCBieSBMaW5ndWFsZW8ncyBQaHJhc2UgQ29uc3RydWN0b3IgXG50cmFpbmluZy4gVGhlIGdhbWUgaW50ZWdyYXRlcyB2YXJpb3VzIGxldmVscyBvZiBkaWZmaWN1bHR5LCBoaW50IG9wdGlvbnMsIFxuYW5kIGEgdW5pcXVlIHB1enpsZS1saWtlIGV4cGVyaWVuY2Ugd2l0aCBhcnR3b3JrLmA7XG5zdGFydFNjcmVlbk1haW4uYXBwZW5kKHN0YXJ0U2NyZWVuVHh0KTtcbmNvbnN0IHN0YXJ0R2FtZUJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3RhcnRHYW1lQlROLmlubmVyVGV4dCA9ICdTdGFydCBQbHlpbmcnO1xuc3RhcnRTY3JlZW4uYXBwZW5kKHN0YXJ0R2FtZUJUTik7XG5jb25zdCBncmVldGluZ1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ3JlZXRpbmdXaW5kb3cuc2V0QXR0cmlidXRlKCdpZCcsICdncmVldGluZy13cmFwcGVyJyk7XG5ncmVldGluZ1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuZ3JlZXRpbmdXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLW1vZGFsJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChncmVldGluZ1dpbmRvdyk7XG5jb25zdCBncmVldGluZ1R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmdyZWV0aW5nVHh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JlZXRpbmctdHh0Jyk7XG5ncmVldGluZ1dpbmRvdy5hcHBlbmQoZ3JlZXRpbmdUeHQpO1xuY29uc3QgZ3JlZXRpbmdDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ3JlZXRpbmdDbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyZWV0aW5nLWNsb3NlJyk7XG5ncmVldGluZ0Nsb3NlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZ3JlZXRuZy1jbG9zZS1zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJDNi40NywyIDIsNi40NyAyLDEyQzIsMTcuNTMgNi40NywyMiAxMiwyMkMxNy41MywyMiAyMiwxNy41MyAyMiwxMkMyMiw2LjQ3IDE3LjUzLDIgMTIsMk0xNC41OSw4TDEyLDEwLjU5TDkuNDEsOEw4LDkuNDFMMTAuNTksMTJMOCwxNC41OUw5LjQxLDE2TDEyLDEzLjQxTDE0LjU5LDE2TDE2LDE0LjU5TDEzLjQxLDEyTDE2LDkuNDFMMTQuNTksOFpcIiAvPjwvc3ZnPic7XG5ncmVldGluZ1dpbmRvdy5hcHBlbmQoZ3JlZXRpbmdDbG9zZSk7XG5wcmVwYXJlVXNlcigpO1xuZnVuY3Rpb24gcHJlcGFyZVVzZXIoKSB7XG4gICAgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICBpZiAoY2hlY2tMb2NhbFN0b3JhZ2UoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0YXJ0TG9naW4oKS50aGVuKCgpID0+IHJlcygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcygpO1xuICAgICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmQobG9nb3V0QlROKTtcbiAgICAgICAgbG9nb3V0QlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9nVXNlck91dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hvd1N0YXJ0U2NyZWVuKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2dVc2VyT3V0KCkge1xuICAgIGxvZ091dFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKTtcbiAgICBsb2dPdXRDYW5jZWxCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvZ091dFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKTtcbiAgICB9LCB0cnVlKTtcbiAgICBsb2dPdXRDb25maXJtQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbG9nT3V0V2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncnNzLXB1enpsZS11c2VyJyk7XG4gICAgICAgIHByZXBhcmVVc2VyKCk7XG4gICAgfSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yYWdlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyc3MtcHV6emxlLXVzZXInKTtcbiAgICBpZiAoc3RvcmFnZURhdGEgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBsb2NhbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBKU09OLnBhcnNlKHN0b3JhZ2VEYXRhKSk7XG4gICAgdXNlckRhdGEuZmlyc3ROYW1lID0gbG9jYWxEYXRhLmZpcnN0TmFtZTtcbiAgICB1c2VyRGF0YS5sYXN0TmFtZSA9IGxvY2FsRGF0YS5sYXN0TmFtZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNob3dTdGFydFNjcmVlbigpIHtcbiAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzdGFydFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKTtcbiAgICBjb25zb2xlLmxvZygnZmlyc3ROYW1lICYgbGFzdE5hbWUgPSAnLCB1c2VyRGF0YS5maXJzdE5hbWUsIHVzZXJEYXRhLmxhc3ROYW1lKTtcbiAgICBzdGFydEdhbWVCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9LCB0cnVlKTtcbn1cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBncmVldGluZ1R4dC50ZXh0Q29udGVudCA9IGBEZWFyICR7dXNlckRhdGEuZmlyc3ROYW1lfSAke3VzZXJEYXRhLmxhc3ROYW1lfSAhIFxuICAgIFdlIGFwcHJlY2lhdGUgWW91ciBpbnRlcmVzdCBpbiBSU1MgUHV6emxlIGdhbWUuIFxuICAgIEhvcGUgWW91IGVuam95IHBsYXlpbmcgYW5kIGxlYXJuIGEgbG90IG9mIEVuZ2xpc2ggdm9jYWJ1bGFyeS5gO1xuICAgIGdyZWV0aW5nV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpO1xuICAgIGdyZWV0aW5nQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdyZWV0aW5nV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgIH0sIHRydWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9