/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --body-bg-color: rgb(57, 57, 57);
  --body-color: bisque;
  --button-bg-color: rgb(4, 48, 95);
  --transition-time: 0.8s;
  --car-btn-bg-color: rgb(140, 216, 189);
  --car-btn-border-radius: 0.3rem;
  --common-title-color: rgb(190, 214, 230);
  --input-focus-bg-color: lightgray;
  --input-focus-color: black;
  --race-btn-bg-color: #e2f9b6;
  --winners-header-bg-color: rgb(15, 106, 203);
}

html, body {
  margin: 0;
  padding: 0;
  user-select: none;
}

body {
  width: 100%;
  height: 100%;
  color: var(--body-color);
  background-color: var(--body-bg-color);
}

#main-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
}

#stage-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

#stage-btn-wrapper,
#page-btn-wrapper {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.common-btn {
  width: 7rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  font-size: 0.8rem;
  color: var(--body-color);
  border-radius: 0.5rem;
  background-color: var(--button-bg-color);
  cursor: pointer;
  transition: var(--transition-time);
}

.common-btn:hover:not(.common-btn:disabled) {
  font-size: 1.01rem;
}

.common-btn:disabled {
  opacity: 0.8;
  cursor: unset;
}

#content-wrapper button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: var(--car-btn-border-radius);
  color: var(--car-btn-bg-color);
}

.title-wrapper {
  width: auto;
  height: auto;
  padding-bottom: 1rem;
}

.stage-title {
  font-size: 1.5rem;
  color: var(--common-title-color);
}

.page-num-title {
  font-size: 1.2rem;
  color: var(--common-title-color);
}

.car-list-controls {
  width: 30vw;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;
  gap: 0.5rem;
}

#race-wrapper {
  padding-bottom: 1rem;
}

#race-wrapper button {
  width: 100%;
}

.car-list-txt {
  width: 100%;
  height: 1.2rem;
  flex: 1 1 1;
  color: var(--body-bg-color);
  outline:none;
  background-color: var(--common-title-color);
  border-radius: var(--car-btn-border-radius);
  cursor: pointer;
}

.car-list-txt:focus-within {
  color: var(--input-focus-color);
  background-color: var(--input-focus-bg-color);
}

.car-list-palette {
  width: 2rem;
  height: 1.4rem;
  cursor: pointer;
}

.car-list-btn {
  width: 5rem;
  height: 1.6rem;
  border-radius: var(--car-btn-border-radius);
  cursor: pointer;
}

:is(#race-wrapper) .car-list-btn {
  width: 100%;
  border-radius: var(--car-btn-border-radius);
}

.car-list-btn:hover {
  font-weight: bold;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.2rem
}

.car-name {
  padding-left: 1rem;
}

.track-wrapper {
  position: relative;
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0 1rem;
  border-bottom: dotted 2px var(--input-focus-bg-color);
}

.car-img {
  width: 3rem;
  height: auto;
  padding-top: 0.5rem;
  align-self: flex-start;
}

.flag-img {
  position: absolute;
  right: 3rem;
  bottom: 0;
  width: 2rem;
  height: auto;
  padding-right: 3rem;
}

.car-btn {
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid var(--race-btn-bg-color);
  border-radius: var(--car-btn-border-radius);
}

.disabled-btn {
  opacity: 0.5;
}

#winners-list {
  width: 50%;
  height: auto;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 1rem;
  color: var(--body-color);
  border-collapse: collapse; 
}

#winners-list th,
#winners-list td {
  padding: 0.5rem 1rem;
}

#winners-list-first-row {
  font-size: 1.2rem;
  background-color: var(--winners-header-bg-color);
}

.winners-header {
  width: auto;
  padding: 0 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,oBAAoB;EACpB,iCAAiC;EACjC,uBAAuB;EACvB,sCAAsC;EACtC,+BAA+B;EAC/B,wCAAwC;EACxC,iCAAiC;EACjC,0BAA0B;EAC1B,4BAA4B;EAC5B,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,wBAAwB;EACxB,qBAAqB;EACrB,wCAAwC;EACxC,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,2CAA2C;EAC3C,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,2BAA2B;EAC3B,YAAY;EACZ,2CAA2C;EAC3C,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,6CAA6C;AAC/C;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB;AACF;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;EACX,eAAe;EACf,qDAAqD;AACvD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;EACzC,0CAA0C;EAC1C,2CAA2C;AAC7C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,eAAe;AACjB","sourcesContent":[":root {\r\n  --body-bg-color: rgb(57, 57, 57);\r\n  --body-color: bisque;\r\n  --button-bg-color: rgb(4, 48, 95);\r\n  --transition-time: 0.8s;\r\n  --car-btn-bg-color: rgb(140, 216, 189);\r\n  --car-btn-border-radius: 0.3rem;\r\n  --common-title-color: rgb(190, 214, 230);\r\n  --input-focus-bg-color: lightgray;\r\n  --input-focus-color: black;\r\n  --race-btn-bg-color: #e2f9b6;\r\n  --winners-header-bg-color: rgb(15, 106, 203);\r\n}\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: var(--body-color);\r\n  background-color: var(--body-bg-color);\r\n}\r\n\r\n#main-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#stage-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#stage-btn-wrapper,\r\n#page-btn-wrapper {\r\n  width: auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.common-btn {\r\n  width: 7rem;\r\n  height: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.7rem;\r\n  font-size: 0.8rem;\r\n  color: var(--body-color);\r\n  border-radius: 0.5rem;\r\n  background-color: var(--button-bg-color);\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.common-btn:hover:not(.common-btn:disabled) {\r\n  font-size: 1.01rem;\r\n}\r\n\r\n.common-btn:disabled {\r\n  opacity: 0.8;\r\n  cursor: unset;\r\n}\r\n\r\n#content-wrapper button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 0.8rem;\r\n  border-radius: var(--car-btn-border-radius);\r\n  color: var(--car-btn-bg-color);\r\n}\r\n\r\n.title-wrapper {\r\n  width: auto;\r\n  height: auto;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.stage-title {\r\n  font-size: 1.5rem;\r\n  color: var(--common-title-color);\r\n}\r\n\r\n.page-num-title {\r\n  font-size: 1.2rem;\r\n  color: var(--common-title-color);\r\n}\r\n\r\n.car-list-controls {\r\n  width: 30vw;\r\n  height: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-size: 0.8rem;\r\n  gap: 0.5rem;\r\n}\r\n\r\n#race-wrapper {\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n#race-wrapper button {\r\n  width: 100%;\r\n}\r\n\r\n.car-list-txt {\r\n  width: 100%;\r\n  height: 1.2rem;\r\n  flex: 1 1 1;\r\n  color: var(--body-bg-color);\r\n  outline:none;\r\n  background-color: var(--common-title-color);\r\n  border-radius: var(--car-btn-border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list-txt:focus-within {\r\n  color: var(--input-focus-color);\r\n  background-color: var(--input-focus-bg-color);\r\n}\r\n\r\n.car-list-palette {\r\n  width: 2rem;\r\n  height: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list-btn {\r\n  width: 5rem;\r\n  height: 1.6rem;\r\n  border-radius: var(--car-btn-border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n:is(#race-wrapper) .car-list-btn {\r\n  width: 100%;\r\n  border-radius: var(--car-btn-border-radius);\r\n}\r\n\r\n.car-list-btn:hover {\r\n  font-weight: bold;\r\n}\r\n\r\n.button-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 0.2rem\r\n}\r\n\r\n.car-name {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.track-wrapper {\r\n  position: relative;\r\n  width: 90vw;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 0.5rem;\r\n  padding: 0 1rem;\r\n  border-bottom: dotted 2px var(--input-focus-bg-color);\r\n}\r\n\r\n.car-img {\r\n  width: 3rem;\r\n  height: auto;\r\n  padding-top: 0.5rem;\r\n  align-self: flex-start;\r\n}\r\n\r\n.flag-img {\r\n  position: absolute;\r\n  right: 3rem;\r\n  bottom: 0;\r\n  width: 2rem;\r\n  height: auto;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.car-btn {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  border: 1px solid var(--race-btn-bg-color);\r\n  border-radius: var(--car-btn-border-radius);\r\n}\r\n\r\n.disabled-btn {\r\n  opacity: 0.5;\r\n}\r\n\r\n#winners-list {\r\n  width: 50%;\r\n  height: auto;\r\n  margin-bottom: 2rem;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: var(--body-color);\r\n  border-collapse: collapse; \r\n}\r\n\r\n#winners-list th,\r\n#winners-list td {\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n#winners-list-first-row {\r\n  font-size: 1.2rem;\r\n  background-color: var(--winners-header-bg-color);\r\n}\r\n\r\n.winners-header {\r\n  width: auto;\r\n  padding: 0 2rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewCar: () => (/* binding */ addNewCar),
/* harmony export */   getCars: () => (/* binding */ getCars),
/* harmony export */   getCarsNumber: () => (/* binding */ getCarsNumber),
/* harmony export */   getWinners: () => (/* binding */ getWinners),
/* harmony export */   getWinnersNumber: () => (/* binding */ getWinnersNumber),
/* harmony export */   removeCar: () => (/* binding */ removeCar),
/* harmony export */   updateCar: () => (/* binding */ updateCar),
/* harmony export */   winnerList: () => (/* binding */ winnerList)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const serverURL = 'http://127.0.0.1:3000';
function getCars() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/garage');
        return answer;
    });
}
function getCarsNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/garage' + '?_limit=1');
        return answer;
    });
}
function addNewCar(carObj) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(serverURL + '/garage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carObj),
        });
    });
}
function updateCar(carObj, carID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(serverURL + '/garage/' + carID, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carObj),
        });
    });
}
function removeCar(carID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(serverURL + '/garage/' + carID, { method: 'DELETE' });
    });
}
function getWinners() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/winners');
        return answer;
    });
}
function getWinnersNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/winners' + '?_limit=1');
        return answer;
    });
}
const winnerList = [];


/***/ }),

/***/ "./src/components/cars/cars.ts":
/*!*************************************!*\
  !*** ./src/components/cars/cars.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCars: () => (/* binding */ createCars),
/* harmony export */   selectedCarID: () => (/* binding */ selectedCarID)
/* harmony export */ });
/* harmony import */ var _garage_garage_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../garage/garage-ui */ "./src/components/garage/garage-ui.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/index.ts");
/* harmony import */ var _garage_garage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../garage/garage */ "./src/components/garage/garage.ts");



let selectedCarID = 0;
let selectedCarName = '';
let selectedCarColor = '';
function createCars(carsArray) {
    const startIndex = (_index__WEBPACK_IMPORTED_MODULE_1__.activeGaragePage - 1) * 7;
    const stopIndex = startIndex + 7 > carsArray.length ? carsArray.length : startIndex + 7;
    for (let i = startIndex; i < stopIndex; i++) {
        const carWrapper = document.createElement('div');
        carWrapper.setAttribute('id', `car-no-${i + 1}`);
        const carObj = carsArray[i];
        _garage_garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.append(carWrapper);
        addButtonsAndTrack(carWrapper, carObj);
    }
}
function addButtonsAndTrack(parentElement, carObj) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');
    parentElement.append(buttonWrapper);
    const selectCarBTN = document.createElement('button');
    selectCarBTN.classList.add('select-btn');
    selectCarBTN.textContent = 'Select';
    selectCarBTN.addEventListener('click', () => {
        if (selectedCarID > 0) {
            const elem = document.getElementById(`car-no-${selectedCarID}`);
            if (elem !== null)
                elem.style.backgroundColor = 'rgb(57, 57, 57)';
        }
        selectedCarID = Number(carObj.id);
        selectedCarName = carObj.name;
        selectedCarColor = carObj.color;
        (0,_garage_garage__WEBPACK_IMPORTED_MODULE_2__.setNameAndColor)(selectedCarName, selectedCarColor);
        parentElement.style.backgroundColor = 'rgb(84, 83, 83)';
    });
    buttonWrapper.append(selectCarBTN);
    const removeCarBTN = document.createElement('button');
    removeCarBTN.classList.add('remove-btn');
    removeCarBTN.textContent = 'Remove';
    removeCarBTN.addEventListener('click', () => {
        selectedCarID = Number(carObj.id);
        (0,_garage_garage__WEBPACK_IMPORTED_MODULE_2__.deleteCar)();
    });
    buttonWrapper.append(removeCarBTN);
    const carName = document.createElement('div');
    carName.classList.add('car-name');
    carName.textContent = carObj.name;
    buttonWrapper.append(carName);
    addTrack(parentElement, carObj);
}
function addTrack(parentElement, carObj) {
    const trackWrapper = document.createElement('div');
    trackWrapper.classList.add('track-wrapper');
    parentElement.append(trackWrapper);
    const startCarBTN = document.createElement('div');
    startCarBTN.classList.add('car-btn');
    startCarBTN.classList.add('start-btn');
    startCarBTN.textContent = 'A';
    trackWrapper.append(startCarBTN);
    const stopCarBTN = document.createElement('div');
    stopCarBTN.classList.add('car-btn');
    stopCarBTN.classList.add('stop-btn');
    stopCarBTN.classList.add('disabled-btn');
    stopCarBTN.textContent = 'B';
    trackWrapper.append(stopCarBTN);
    const carIMG = document.createElement('svg');
    // const carColor = carObj.color;
    carIMG.innerHTML = `<svg
    fill="${carObj.color}"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    class="car-img"
    viewBox="0 0 98.796374 38.292306"
    xml:space="preserve"
    width="98.796371"
    height="38.292305"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"><defs
      id="defs15" /><g
      id="g10"
      transform="matrix(-1,0,0,1,98.797374,-30.251694)"><g
        id="g8"><path
          d="m 15.796,52.934 c -4.31,0 -7.805,3.492 -7.805,7.804 0,0.334 0.027,0.66 0.069,0.982 0.483,3.847 3.759,6.824 7.736,6.824 4.087,0 7.434,-3.142 7.773,-7.141 0.018,-0.221 0.034,-0.44 0.034,-0.667 10e-4,-4.309 -3.494,-7.802 -7.807,-7.802 z m -3.909,4.863 1.593,1.593 c -0.124,0.213 -0.221,0.441 -0.283,0.687 h -2.245 c 0.117,-0.852 0.444,-1.627 0.935,-2.28 z m -0.942,3.63 h 2.26 c 0.064,0.239 0.158,0.469 0.282,0.677 l -1.596,1.595 C 11.399,63.05 11.064,62.273 10.945,61.427 Z m 4.177,4.161 C 14.277,65.471 13.508,65.14 12.858,64.649 l 1.587,-1.587 c 0.208,0.122 0.438,0.211 0.677,0.273 z m 0,-7.446 c -0.246,0.062 -0.476,0.161 -0.69,0.288 l -1.59,-1.591 c 0.653,-0.496 1.429,-0.825 2.28,-0.943 z m 1.352,-2.246 c 0.852,0.118 1.627,0.447 2.28,0.944 l -1.59,1.59 C 16.95,58.303 16.72,58.204 16.474,58.142 Z m 0,9.691 v -2.252 c 0.24,-0.063 0.468,-0.152 0.677,-0.275 l 1.588,1.589 c -0.651,0.488 -1.421,0.82 -2.265,0.938 z m 3.234,-1.882 -1.601,-1.603 c 0.124,-0.209 0.227,-0.434 0.291,-0.676 h 2.243 c -0.12,0.847 -0.441,1.629 -0.933,2.279 z m -1.31,-3.63 c -0.063,-0.244 -0.159,-0.474 -0.283,-0.687 l 1.593,-1.593 c 0.493,0.653 0.818,1.429 0.935,2.278 z"
          id="path2" /><path
          d="m 81.505,52.934 c -4.31,0 -7.805,3.492 -7.805,7.804 0,0.334 0.027,0.66 0.069,0.982 0.482,3.847 3.759,6.824 7.735,6.824 4.087,0 7.435,-3.142 7.773,-7.141 0.018,-0.221 0.034,-0.44 0.034,-0.667 0.002,-4.309 -3.493,-7.802 -7.806,-7.802 z m -3.91,4.863 1.594,1.593 c -0.124,0.213 -0.222,0.441 -0.283,0.687 h -2.245 c 0.117,-0.852 0.443,-1.627 0.934,-2.28 z m -0.941,3.63 h 2.26 c 0.064,0.239 0.158,0.469 0.282,0.677 L 77.6,63.698 C 77.109,63.05 76.773,62.273 76.654,61.427 Z m 4.177,4.161 C 79.986,65.471 79.217,65.14 78.567,64.649 l 1.587,-1.587 c 0.208,0.122 0.438,0.211 0.677,0.273 z m 0,-7.446 c -0.246,0.062 -0.476,0.161 -0.689,0.288 l -1.591,-1.591 c 0.653,-0.496 1.43,-0.825 2.28,-0.943 z m 1.351,-2.246 c 0.852,0.118 1.627,0.447 2.279,0.944 l -1.59,1.59 c -0.214,-0.127 -0.444,-0.226 -0.689,-0.288 z m 0,9.691 v -2.252 c 0.239,-0.063 0.468,-0.152 0.677,-0.275 l 1.588,1.589 c -0.651,0.488 -1.419,0.82 -2.265,0.938 z m 3.234,-1.882 -1.601,-1.603 c 0.124,-0.209 0.227,-0.434 0.291,-0.676 h 2.243 c -0.12,0.847 -0.439,1.629 -0.933,2.279 z m -1.308,-3.63 c -0.063,-0.244 -0.159,-0.474 -0.283,-0.687 l 1.593,-1.593 c 0.493,0.653 0.818,1.429 0.936,2.278 z"
          id="path4" /><path
          d="m 98.125,50.451 -1.5,-1.433 0.003,-4.521 C 96.629,43.31 96.19,42.166 95.395,41.286 L 89.85,35.145 V 35.142 C 89.823,33.866 88.907,32.788 87.653,32.553 81.06,31.314 60.604,28.111 44.413,32.461 34.41,35.148 24.24,40.557 24.24,40.557 c 0,0 -17.66,2.25 -21.892,7.766 -1.474,1.92 -2.092,4.442 -2.316,6.714 -0.313,3.175 1.775,6.074 4.886,6.775 L 6.551,62.18 C 6.537,62.091 6.516,62.004 6.505,61.912 6.451,61.496 6.424,61.108 6.424,60.735 c 0,-5.169 4.206,-9.374 9.375,-9.374 5.17,0 9.376,4.205 9.376,9.374 0,0.271 -0.018,0.533 -0.04,0.798 -0.027,0.319 -0.072,0.633 -0.131,0.941 l 47.323,0.096 c -0.043,-0.218 -0.086,-0.435 -0.114,-0.658 -0.054,-0.416 -0.081,-0.804 -0.081,-1.177 0,-5.169 4.206,-9.374 9.375,-9.374 5.17,0 9.376,4.205 9.376,9.374 0,0.271 -0.018,0.533 -0.04,0.798 -0.03,0.365 -0.09,0.723 -0.162,1.074 l 0.646,10e-4 2.692,-1.475 c 2.808,-1.537 4.602,-4.438 4.723,-7.636 l 0.054,-1.399 C 98.818,51.48 98.575,50.882 98.125,50.451 Z M 33.543,41.193 34.267,38.3 c 0,0 10.961,-5.734 29.306,-5.11 v 8.549 l -29.381,2.318 c 0,0 0.158,-1.834 -0.649,-2.864 z m 47.078,-0.798 -13.815,1.09 V 33.37 c 4.543,0.33 9.48,1.047 14.779,2.327 0.536,0.129 0.966,0.527 1.137,1.051 0.172,0.524 0.06,1.1 -0.297,1.52 z"
          id="path6" /></g></g></svg>`;
    trackWrapper.append(carIMG);
    const flagIMG = document.createElement('div');
    flagIMG.innerHTML = `<svg viewBox="0 -2 366.03679 366" xmlns="http://www.w3.org/2000/svg" class="flag-img">
  <path d="m364.699219 177.824219-70.300781-146.023438c-3.121094-6.503906-10.75-9.472656-17.507813-6.914062-9.882813 3.535156-18.074219 5.683593-25.855469 6.757812-22.070312 3.023438-45.621094-1.636719-66.304687-13.105469-25.90625-14.898437-55.296875-20.992187-85.042969-17.613281-25.910156 2.917969-49.972656 12.800781-70.195312 28.722657l-3.6875-7.679688c-.203126-.460938-.460938-.871094-.769532-1.226562.566406-1.433594.871094-3.023438.871094-4.710938 0-7.117188-5.785156-12.953125-12.953125-12.953125-7.117187 0-12.953125 5.785156-12.953125 12.953125 0 5.988281 4.097656 11.058594 9.625 12.492188.101562.308593.257812.664062.410156.972656l157.183594 326.808594c1.484375 3.125 4.609375 4.917968 7.835938 4.917968 1.277343 0 2.558593-.257812 3.785156-.871094 4.355468-2.101562 6.144531-7.273437 4.097656-11.625l-71.066406-147.609374c39.066406-32.460938 93.902344-37.324219 138.394531-11.671876 16.027344 9.164063 34.253906 14.695313 52.683594 15.972657 2.765625.207031 5.480469.257812 8.246093.257812 15.714844 0 31.539063-3.019531 46.078126-8.910156 3.585937-1.433594 6.398437-4.351563 7.78125-7.882813 1.433593-3.636718 1.28125-7.679687-.355469-11.058593zm-55.503907 10.496093-22.371093-47.003906c1.226562.050782 2.457031.050782 3.683593.050782 11.777344 0 23.554688-1.84375 34.765626-5.375l22.117187 45.925781c-12.441406 4.507812-25.34375 6.65625-38.195313 6.402343zm-107.058593-32-22.375-46.953124c18.484375 1.589843 36.8125 7.117187 53.660156 16.792968.355469.207032.664063.359375 1.023437.566406l22.066407 46.230469c-17-9.316406-35.429688-14.949219-54.375-16.636719zm-100.863281-91.242187c16.949218-5.9375 35.019531-8.292969 52.890624-6.910156l23.859376 50.023437c-17.921876-1.28125-35.890626 1.125-52.839844 7.066406zm74.855468-31.382813s.050782 0 .050782.050782c0 0 .050781.050781.050781.050781 5.734375 3.175781 11.671875 5.886719 17.714843 8.140625l15.308594 32.152344c-17.101562-9.828125-35.6875-15.359375-54.425781-16.894532l-18.074219-37.9375c13.570313 2.457032 26.882813 7.269532 39.375 14.4375zm35.480469 42.800782c14.285156 7.679687 30.3125 12.339844 46.542969 13.414062 1.023437.054688 2.097656.105469 3.121094.15625l23.910156 50.175782c-17.253906-.820313-34.355469-5.632813-49.972656-14.335938zm41.726563-27.59375c8.296874-1.128906 16.847656-3.277344 26.777343-6.707032l20.074219 41.726563c-12.496094 3.992187-25.398438 5.734375-38.195312 5.273437l-18.792969-39.371093c3.429687-.15625 6.808593-.460938 10.136719-.921875zm-173.464844-26.371094 20.019531 41.933594c-15.101563 5.429687-29.335937 13.671875-41.882813 24.628906l-20.835937-43.367188c12.800781-10.699218 27.339844-18.484374 42.699219-23.195312zm3.125 118.582031c12.441406-10.957031 26.625-19.148437 41.675781-24.578125l21.914063 45.925782c-15.359376 4.917968-29.695313 12.546874-42.496094 22.53125zm0 0" fill="#000000" style="fill: rgb(237, 12, 12);"></path></svg>`;
    flagIMG.setAttribute('fill', '');
    trackWrapper.append(flagIMG);
}


/***/ }),

/***/ "./src/components/common.ts":
/*!**********************************!*\
  !*** ./src/components/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCommonUI: () => (/* binding */ createCommonUI),
/* harmony export */   garageBTN: () => (/* binding */ garageBTN),
/* harmony export */   garageContentWrapper: () => (/* binding */ garageContentWrapper),
/* harmony export */   nextPageBTN: () => (/* binding */ nextPageBTN),
/* harmony export */   prevPageBTN: () => (/* binding */ prevPageBTN),
/* harmony export */   winnersBTN: () => (/* binding */ winnersBTN),
/* harmony export */   winnersContentWrapper: () => (/* binding */ winnersContentWrapper)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");

const garageContentWrapper = document.createElement('div');
const winnersContentWrapper = document.createElement('div');
const garageBTN = document.createElement('button');
const winnersBTN = document.createElement('button');
const prevPageBTN = document.createElement('button');
const nextPageBTN = document.createElement('button');
function createCommonUI() {
    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', 'main-wrapper');
    document.body.append(mainWrapper);
    // Wrapper for Garage and Winners buttons as well as stage title and page number
    const stageWrapper = document.createElement('div');
    stageWrapper.setAttribute('id', 'stage-wrapper');
    mainWrapper.append(stageWrapper);
    // Wrapper for Garage and Winners buttons alone
    const stageBTNWrapper = document.createElement('div');
    stageBTNWrapper.setAttribute('id', 'stage-btn-wrapper');
    stageWrapper.append(stageBTNWrapper);
    garageBTN.setAttribute('id', 'garage-btn');
    garageBTN.classList.add('common-btn');
    garageBTN.textContent = 'Garage';
    stageBTNWrapper.append(garageBTN);
    winnersBTN.setAttribute('id', 'winners-btn');
    winnersBTN.classList.add('common-btn');
    winnersBTN.textContent = 'Winners';
    stageBTNWrapper.append(winnersBTN);
    // Wrapper for lists of cars and winner with their interface
    // populated with the content in garage-ui.ts and winners.tsd
    // respectively
    garageContentWrapper.setAttribute('id', 'garage-wrapper');
    garageContentWrapper.classList.add('content-wrapper');
    mainWrapper.append(garageContentWrapper);
    winnersContentWrapper.setAttribute('id', 'winners-wrapper');
    winnersContentWrapper.classList.add('content-wrapper');
    winnersContentWrapper.style.display = 'none';
    mainWrapper.append(winnersContentWrapper);
    // Wrapper for pagination buttons down the main wrapper
    const pageBTNWrapper = document.createElement('div');
    pageBTNWrapper.setAttribute('id', 'page-btn-wrapper');
    mainWrapper.append(pageBTNWrapper);
    prevPageBTN.setAttribute('id', 'prev-pg-btn');
    prevPageBTN.classList.add('common-btn');
    prevPageBTN.textContent = 'Prev';
    pageBTNWrapper.append(prevPageBTN);
    nextPageBTN.setAttribute('id', 'next-pg-btn');
    nextPageBTN.classList.add('common-btn');
    nextPageBTN.textContent = 'Next';
    pageBTNWrapper.append(nextPageBTN);
}


/***/ }),

/***/ "./src/components/garage/garage-ui.ts":
/*!********************************************!*\
  !*** ./src/components/garage/garage-ui.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCarBTN: () => (/* binding */ addCarBTN),
/* harmony export */   addCarColor: () => (/* binding */ addCarColor),
/* harmony export */   addCarName: () => (/* binding */ addCarName),
/* harmony export */   carListWrapper: () => (/* binding */ carListWrapper),
/* harmony export */   carsInGarage: () => (/* binding */ carsInGarage),
/* harmony export */   createGarageUI: () => (/* binding */ createGarageUI),
/* harmony export */   generateCarsBTN: () => (/* binding */ generateCarsBTN),
/* harmony export */   raceBTN: () => (/* binding */ raceBTN),
/* harmony export */   resetBTN: () => (/* binding */ resetBTN),
/* harmony export */   updateCarBTN: () => (/* binding */ updateCarBTN),
/* harmony export */   updateCarColor: () => (/* binding */ updateCarColor),
/* harmony export */   updateCarName: () => (/* binding */ updateCarName),
/* harmony export */   updateGarageTitle: () => (/* binding */ updateGarageTitle)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.css */ "./src/style.css");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/components/common.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "./src/index.ts");




let carsInGarage;
const addCarBTN = document.createElement('button');
const updateCarBTN = document.createElement('button');
const raceBTN = document.createElement('button');
const resetBTN = document.createElement('button');
const generateCarsBTN = document.createElement('button');
const carListWrapper = document.createElement('div');
const addCarName = document.createElement('input');
const addCarColor = document.createElement('input');
const updateCarName = document.createElement('input');
const updateCarColor = document.createElement('input');
const garageTitle = document.createElement('div');
const garagePageNum = document.createElement('div');
function createGarageUI() {
    createGarageTitle();
    createAddCarMenu();
    createUpdateCarMenu();
    createRaceResetGenerateMenu();
    createCarList();
}
function createAddCarMenu() {
    const addCarWrapper = document.createElement('div');
    addCarWrapper.setAttribute('id', 'add-car-wrapper');
    addCarWrapper.classList.add('car-list-controls');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(addCarWrapper);
    addCarName.setAttribute('id', 'add-car-name');
    addCarName.setAttribute('type', 'text');
    addCarName.setAttribute('placeholder', 'car name');
    addCarName.classList.add('car-list-txt');
    addCarWrapper.append(addCarName);
    addCarColor.setAttribute('id', 'add-car-color');
    addCarColor.setAttribute('type', 'color');
    addCarColor.setAttribute('value', '#9ae5be');
    addCarColor.classList.add('car-list-palette');
    addCarWrapper.append(addCarColor);
    addCarBTN.setAttribute('id', 'add-car-btn');
    addCarBTN.textContent = 'Create';
    addCarBTN.classList.add('car-list-btn');
    addCarWrapper.append(addCarBTN);
}
function createUpdateCarMenu() {
    const updateCarWrapper = document.createElement('div');
    updateCarWrapper.setAttribute('id', 'update-car-wrapper');
    updateCarWrapper.classList.add('car-list-controls');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(updateCarWrapper);
    updateCarName.setAttribute('id', 'update-car-name');
    updateCarName.setAttribute('type', 'text');
    updateCarName.setAttribute('placeholder', 'car name');
    updateCarName.classList.add('car-list-txt');
    updateCarWrapper.append(updateCarName);
    updateCarColor.setAttribute('id', 'update-car-color');
    updateCarColor.setAttribute('type', 'color');
    updateCarColor.setAttribute('value', '#9ae5be');
    updateCarColor.classList.add('car-list-palette');
    updateCarWrapper.append(updateCarColor);
    updateCarBTN.setAttribute('id', 'update-car-btn');
    updateCarBTN.textContent = 'Update';
    updateCarBTN.classList.add('car-list-btn');
    updateCarWrapper.append(updateCarBTN);
}
function createRaceResetGenerateMenu() {
    const raceWrapper = document.createElement('div');
    raceWrapper.setAttribute('id', 'race-wrapper');
    raceWrapper.classList.add('car-list-controls');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(raceWrapper);
    raceBTN.setAttribute('id', 'race-btn');
    raceBTN.textContent = 'Race';
    raceWrapper.append(raceBTN);
    resetBTN.setAttribute('id', 'reset-btn');
    resetBTN.textContent = 'Reset';
    raceWrapper.append(resetBTN);
    generateCarsBTN.setAttribute('id', 'generate-cars-btn');
    generateCarsBTN.textContent = 'Generate';
    raceWrapper.append(generateCarsBTN);
}
function createGarageTitle() {
    const garageTitleWrapper = document.createElement('div');
    garageTitleWrapper.classList.add('title-wrapper');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(garageTitleWrapper);
    garageTitle.setAttribute('id', 'garage-title');
    garageTitle.classList.add('stage-title');
    garageTitleWrapper.append(garageTitle);
    garagePageNum.setAttribute('id', 'garage-page');
    garagePageNum.classList.add('page-num-title');
    garagePageNum.textContent = 'Page #1';
    garageTitleWrapper.append(garagePageNum);
    updateGarageTitle();
    carListWrapper.setAttribute('id', 'car-list');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(carListWrapper);
}
function createCarList() {
    carListWrapper.setAttribute('id', 'car-list');
    _common__WEBPACK_IMPORTED_MODULE_2__.garageContentWrapper.append(carListWrapper);
}
function updateGarageTitle() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.getCarsNumber)()
        .then((data) => data.headers.get('x-total-count'))
        .then((data) => {
        carsInGarage = Number(data);
        garageTitle.textContent = `Garage (${carsInGarage})`;
    });
    garagePageNum.textContent = `Page ${_index__WEBPACK_IMPORTED_MODULE_3__.activeGaragePage}`;
}


/***/ }),

/***/ "./src/components/garage/garage.ts":
/*!*****************************************!*\
  !*** ./src/components/garage/garage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGarage: () => (/* binding */ createGarage),
/* harmony export */   deleteCar: () => (/* binding */ deleteCar),
/* harmony export */   populateCarList: () => (/* binding */ populateCarList),
/* harmony export */   setNameAndColor: () => (/* binding */ setNameAndColor)
/* harmony export */ });
/* harmony import */ var _garage_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garage-ui */ "./src/components/garage/garage-ui.ts");
/* harmony import */ var _cars_cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars/cars */ "./src/components/cars/cars.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");





function createGarage() {
    (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.createGarageUI)();
    populateCarList();
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.addCarBTN.addEventListener('click', addOneCar);
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarBTN.addEventListener('click', updateOneCar);
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.raceBTN.addEventListener('click', () => { });
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.resetBTN.addEventListener('click', () => { });
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.generateCarsBTN.addEventListener('click', () => { });
}
function populateCarList() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.getCars)()
        .then((data) => data.json())
        .then((data) => {
        console.log('populateCarList data = ', data);
        (0,_cars_cars__WEBPACK_IMPORTED_MODULE_1__.createCars)(data);
    });
}
function addOneCar() {
    if (_garage_ui__WEBPACK_IMPORTED_MODULE_0__.addCarName.value === '')
        return;
    const newCar = {
        name: _garage_ui__WEBPACK_IMPORTED_MODULE_0__.addCarName.value,
        color: _garage_ui__WEBPACK_IMPORTED_MODULE_0__.addCarColor.value,
    };
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.addNewCar)(newCar);
    (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateGarageTitle)();
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.innerHTML = '';
    populateCarList();
}
function updateOneCar() {
    if (_cars_cars__WEBPACK_IMPORTED_MODULE_1__.selectedCarID === 0)
        return;
    const updatedCar = {
        name: _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarName.value,
        color: _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarColor.value,
    };
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.updateCar)(updatedCar, _cars_cars__WEBPACK_IMPORTED_MODULE_1__.selectedCarID).then(() => {
        (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateGarageTitle)();
        _garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.innerHTML = '';
        populateCarList();
    });
}
function deleteCar() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.removeCar)(_cars_cars__WEBPACK_IMPORTED_MODULE_1__.selectedCarID);
    (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateGarageTitle)();
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.innerHTML = '';
    populateCarList();
}
function setNameAndColor(name, color) {
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarName.value = name;
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarColor.value = color;
}


/***/ }),

/***/ "./src/components/winners/winners.ts":
/*!*******************************************!*\
  !*** ./src/components/winners/winners.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinners: () => (/* binding */ createWinners),
/* harmony export */   populateWinnersList: () => (/* binding */ populateWinnersList),
/* harmony export */   updateWinnersTitle: () => (/* binding */ updateWinnersTitle),
/* harmony export */   winnersListWrapper: () => (/* binding */ winnersListWrapper),
/* harmony export */   winnersListed: () => (/* binding */ winnersListed)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/components/common.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/index.ts");



const winnersListWrapper = document.createElement('div');
let winnersListed;
const winnersTitle = document.createElement('div');
const winnersPageNum = document.createElement('div');
const winnerList = document.createElement('table');
function createWinners() {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.createCommonUI)();
    createWinnersUI();
}
function createWinnersUI() {
    createWinnersTitle();
    createWinnersList();
}
function createWinnersTitle() {
    const winnerTitleWrapper = document.createElement('div');
    winnerTitleWrapper.classList.add('title-wrapper');
    _common__WEBPACK_IMPORTED_MODULE_0__.winnersContentWrapper.append(winnerTitleWrapper);
    winnersTitle.setAttribute('id', 'winners-title');
    winnersTitle.classList.add('stage-title');
    winnerTitleWrapper.append(winnersTitle);
    winnersPageNum.setAttribute('id', 'winners-page');
    winnersPageNum.classList.add('page-num-title');
    winnersPageNum.textContent = 'Page #1';
    winnerTitleWrapper.append(winnersPageNum);
    updateWinnersTitle();
    winnersListWrapper.setAttribute('id', 'winners-list');
    _common__WEBPACK_IMPORTED_MODULE_0__.winnersContentWrapper.append(winnersListWrapper);
}
function updateWinnersTitle() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.getWinnersNumber)()
        .then((data) => data.headers.get('x-total-count'))
        .then((data) => {
        winnersListed = Number(data);
        winnersTitle.textContent = `Winners (${winnersListed})`;
    });
    winnersPageNum.textContent = `Page ${_index__WEBPACK_IMPORTED_MODULE_2__.activeWinnersPage}`;
}
function createWinnersList() {
    createWinnersTable();
    populateWinnersList();
}
function createWinnersTable() {
    winnerList.setAttribute('id', 'winners-list');
    _common__WEBPACK_IMPORTED_MODULE_0__.winnersContentWrapper.append(winnerList);
    const listFirstRow = document.createElement('tr');
    listFirstRow.setAttribute('id', 'winners-list-first-row');
    winnerList.append(listFirstRow);
    const listNum = document.createElement('th');
    listNum.classList.add('winners-header');
    listNum.textContent = 'Number';
    listFirstRow.append(listNum);
    const listCar = document.createElement('th');
    listCar.classList.add('winners-header');
    listCar.textContent = 'Car';
    listFirstRow.append(listCar);
    const carName = document.createElement('th');
    carName.classList.add('winners-header');
    carName.textContent = 'Name';
    listFirstRow.append(carName);
    const carWins = document.createElement('th');
    carWins.classList.add('winners-header');
    carWins.textContent = 'Wins';
    listFirstRow.append(carWins);
    const carTime = document.createElement('th');
    carTime.classList.add('winners-header');
    carTime.textContent = 'Best time (seconds)';
    listFirstRow.append(carTime);
}
function populateWinnersList() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.getWinners)()
        .then((data) => data.json())
        .then((data) => {
        fillWinners(data);
    });
}
function fillWinners(winnersArr) {
    const listLen = winnersArr.length;
    for (let i = 0; i < listLen; i++) {
        const listRow = document.createElement('tr');
        winnerList.append(listRow);
        const listNum = document.createElement('td');
        listNum.textContent = '' + i + 1;
        listRow.append(listNum);
        const listCar = document.createElement('td');
        listCar.textContent = 'Car';
        listRow.append(listCar);
        const carName = document.createElement('td');
        carName.textContent = 'Name';
        listRow.append(carName);
        const carWins = document.createElement('td');
        carWins.textContent = 'Wins';
        listRow.append(carWins);
        const carTime = document.createElement('td');
        carTime.textContent = 'Time';
        listRow.append(carTime);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeGaragePage: () => (/* binding */ activeGaragePage),
/* harmony export */   activeView: () => (/* binding */ activeView),
/* harmony export */   activeWinnersPage: () => (/* binding */ activeWinnersPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_garage_garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/garage/garage */ "./src/components/garage/garage.ts");
/* harmony import */ var _components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/garage/garage-ui */ "./src/components/garage/garage-ui.ts");
/* harmony import */ var _components_winners_winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/winners/winners */ "./src/components/winners/winners.ts");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common */ "./src/components/common.ts");






let activeGaragePage = 1;
const activeWinnersPage = 1;
const GARAGE = 0;
const WINNERS = 1;
let activeView = GARAGE;
(0,_components_common__WEBPACK_IMPORTED_MODULE_4__.createCommonUI)();
_components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.setAttribute('disabled', '');
_components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.setAttribute('disabled', '');
(0,_components_garage_garage__WEBPACK_IMPORTED_MODULE_1__.createGarage)();
(0,_components_winners_winners__WEBPACK_IMPORTED_MODULE_3__.createWinners)();
_components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.addEventListener('click', () => {
    activeView = WINNERS;
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.removeAttribute('disabled');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.setAttribute('disabled', '');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersContentWrapper.style.display = 'flex';
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageContentWrapper.style.display = 'none';
});
_components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.addEventListener('click', () => {
    activeView = GARAGE;
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.setAttribute('disabled', '');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.removeAttribute('disabled');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersContentWrapper.style.display = 'none';
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageContentWrapper.style.display = 'flex';
});
_components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.addEventListener('click', () => {
    activeGaragePage--;
    if (activeGaragePage === 1)
        _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.setAttribute('disabled', '');
    if (activeGaragePage === Math.ceil(_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carsInGarage / 7) - 1)
        _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.removeAttribute('disabled');
    (0,_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.updateGarageTitle)();
    _components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carListWrapper.innerHTML = '';
    (0,_components_garage_garage__WEBPACK_IMPORTED_MODULE_1__.populateCarList)();
});
_components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.addEventListener('click', () => {
    activeGaragePage++;
    if (activeGaragePage === 2)
        _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.removeAttribute('disabled');
    if (activeGaragePage === Math.ceil(_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carsInGarage / 7))
        _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.setAttribute('disabled', '');
    (0,_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.updateGarageTitle)();
    _components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carListWrapper.innerHTML = '';
    (0,_components_garage_garage__WEBPACK_IMPORTED_MODULE_1__.populateCarList)();
});


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9B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QixJQUFJLDBFQUFlO0FBQ25CLENBQUM7QUFDRCwyREFBVztBQUNYO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CLHVDQUF1QyxzRUFBWTtBQUNuRCxRQUFRLDJEQUFXO0FBQ25CLElBQUksK0VBQWlCO0FBQ3JCLElBQUksd0VBQWM7QUFDbEIsSUFBSSwwRUFBZTtBQUNuQixDQUFDOzs7Ozs7O1VDakREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NhcnMvY2Fycy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZS11aS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMvd2lubmVycy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1ib2R5LWJnLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XHJcbiAgLS1ib2R5LWNvbG9yOiBiaXNxdWU7XHJcbiAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xyXG4gIC0tdHJhbnNpdGlvbi10aW1lOiAwLjhzO1xyXG4gIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xyXG4gIC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgLS1jb21tb24tdGl0bGUtY29sb3I6IHJnYigxOTAsIDIxNCwgMjMwKTtcclxuICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XHJcbiAgLS1yYWNlLWJ0bi1iZy1jb2xvcjogI2UyZjliNjtcclxuICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNtYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNzdGFnZS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNzdGFnZS1idG4td3JhcHBlcixcclxuI3BhZ2UtYnRuLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tb24tYnRuIHtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLmNvbW1vbi1idG46aG92ZXI6bm90KC5jb21tb24tYnRuOmRpc2FibGVkKSB7XHJcbiAgZm9udC1zaXplOiAxLjAxcmVtO1xyXG59XHJcblxyXG4uY29tbW9uLWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiNjb250ZW50LXdyYXBwZXIgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxuICBjb2xvcjogdmFyKC0tY2FyLWJ0bi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi50aXRsZS13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGFnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wYWdlLW51bS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1jb250cm9scyB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI3JhY2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNyYWNlLXdyYXBwZXIgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhci1saXN0LXR4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgZmxleDogMSAxIDE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyLWxpc3QtdHh0OmZvY3VzLXdpdGhpbiB7XHJcbiAgY29sb3I6IHZhcigtLWlucHV0LWZvY3VzLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1wYWxldHRlIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDEuNHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1idG4ge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogMS42cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aXMoI3JhY2Utd3JhcHBlcikgLmNhci1saXN0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLmNhci1saXN0LWJ0bjpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMC4ycmVtXHJcbn1cclxuXHJcbi5jYXItbmFtZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udHJhY2std3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDJweCB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItaW1nIHtcclxuICB3aWR0aDogM3JlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxhZy1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5jYXItYnRuIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2UtYnRuLWJnLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYnRuIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbiN3aW5uZXJzLWxpc3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59XHJcblxyXG4jd2lubmVycy1saXN0IHRoLFxyXG4jd2lubmVycy1saXN0IHRkIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuI3dpbm5lcnMtbGlzdC1maXJzdC1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLndpbm5lcnMtaGVhZGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJvZHktYmctY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXHJcXG4gIC0tYm9keS1jb2xvcjogYmlzcXVlO1xcclxcbiAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xcclxcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDAuOHM7XFxyXFxuICAtLWNhci1idG4tYmctY29sb3I6IHJnYigxNDAsIDIxNiwgMTg5KTtcXHJcXG4gIC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAtLWNvbW1vbi10aXRsZS1jb2xvcjogcmdiKDE5MCwgMjE0LCAyMzApO1xcclxcbiAgLS1pbnB1dC1mb2N1cy1iZy1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XFxyXFxuICAtLXJhY2UtYnRuLWJnLWNvbG9yOiAjZTJmOWI2O1xcclxcbiAgLS13aW5uZXJzLWhlYWRlci1iZy1jb2xvcjogcmdiKDE1LCAxMDYsIDIwMyk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNtYWluLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWdlLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhZ2UtYnRuLXdyYXBwZXIsXFxyXFxuI3BhZ2UtYnRuLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbW9uLWJ0biB7XFxyXFxuICB3aWR0aDogN3JlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tb24tYnRuOmhvdmVyOm5vdCguY29tbW9uLWJ0bjpkaXNhYmxlZCkge1xcclxcbiAgZm9udC1zaXplOiAxLjAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbW9uLWJ0bjpkaXNhYmxlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC13cmFwcGVyIGJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgY29sb3I6IHZhcigtLWNhci1idG4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhZ2UtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbnVtLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1jb250cm9scyB7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNyYWNlLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyYWNlLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWxpc3QtdHh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxLjJyZW07XFxyXFxuICBmbGV4OiAxIDEgMTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG4gIG91dGxpbmU6bm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWxpc3QtdHh0OmZvY3VzLXdpdGhpbiB7XFxyXFxuICBjb2xvcjogdmFyKC0taW5wdXQtZm9jdXMtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWxpc3QtcGFsZXR0ZSB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMS40cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWxpc3QtYnRuIHtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoI3JhY2Utd3JhcHBlcikgLmNhci1saXN0LWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1idG46aG92ZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMC4ycmVtXFxyXFxufVxcclxcblxcclxcbi5jYXItbmFtZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50cmFjay13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMnB4IHZhcigtLWlucHV0LWZvY3VzLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbWcge1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsYWctaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzcmVtO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJ0biB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2UtYnRuLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZC1idG4ge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHRoLFxcclxcbiN3aW5uZXJzLWxpc3QgdGQge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXJzLWxpc3QtZmlyc3Qtcm93IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2lubmVycy1oZWFkZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1oZWFkZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IHNlcnZlclVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJzTnVtYmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvZ2FyYWdlJyArICc/X2xpbWl0PTEnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdDYXIoY2FyT2JqKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyT2JqKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FyKGNhck9iaiwgY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2dhcmFnZS8nICsgY2FySUQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhck9iaiksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhcihjYXJJRCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvZ2FyYWdlLycgKyBjYXJJRCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbm5lcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy93aW5uZXJzJyk7XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyc051bWJlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL3dpbm5lcnMnICsgJz9fbGltaXQ9MScpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IHdpbm5lckxpc3QgPSBbXTtcbiIsImltcG9ydCB7IGNhckxpc3RXcmFwcGVyIH0gZnJvbSAnLi4vZ2FyYWdlL2dhcmFnZS11aSc7XG5pbXBvcnQgeyBhY3RpdmVHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgc2V0TmFtZUFuZENvbG9yLCBkZWxldGVDYXIgfSBmcm9tICcuLi9nYXJhZ2UvZ2FyYWdlJztcbmV4cG9ydCBsZXQgc2VsZWN0ZWRDYXJJRCA9IDA7XG5sZXQgc2VsZWN0ZWRDYXJOYW1lID0gJyc7XG5sZXQgc2VsZWN0ZWRDYXJDb2xvciA9ICcnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcnMoY2Fyc0FycmF5KSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChhY3RpdmVHYXJhZ2VQYWdlIC0gMSkgKiA3O1xuICAgIGNvbnN0IHN0b3BJbmRleCA9IHN0YXJ0SW5kZXggKyA3ID4gY2Fyc0FycmF5Lmxlbmd0aCA/IGNhcnNBcnJheS5sZW5ndGggOiBzdGFydEluZGV4ICsgNztcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0b3BJbmRleDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhci1uby0ke2kgKyAxfWApO1xuICAgICAgICBjb25zdCBjYXJPYmogPSBjYXJzQXJyYXlbaV07XG4gICAgICAgIGNhckxpc3RXcmFwcGVyLmFwcGVuZChjYXJXcmFwcGVyKTtcbiAgICAgICAgYWRkQnV0dG9uc0FuZFRyYWNrKGNhcldyYXBwZXIsIGNhck9iaik7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkQnV0dG9uc0FuZFRyYWNrKHBhcmVudEVsZW1lbnQsIGNhck9iaikge1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi13cmFwcGVyJyk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmQoYnV0dG9uV3JhcHBlcik7XG4gICAgY29uc3Qgc2VsZWN0Q2FyQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VsZWN0Q2FyQlROLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1idG4nKTtcbiAgICBzZWxlY3RDYXJCVE4udGV4dENvbnRlbnQgPSAnU2VsZWN0JztcbiAgICBzZWxlY3RDYXJCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZENhcklEID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXItbm8tJHtzZWxlY3RlZENhcklEfWApO1xuICAgICAgICAgICAgaWYgKGVsZW0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RlZENhcklEID0gTnVtYmVyKGNhck9iai5pZCk7XG4gICAgICAgIHNlbGVjdGVkQ2FyTmFtZSA9IGNhck9iai5uYW1lO1xuICAgICAgICBzZWxlY3RlZENhckNvbG9yID0gY2FyT2JqLmNvbG9yO1xuICAgICAgICBzZXROYW1lQW5kQ29sb3Ioc2VsZWN0ZWRDYXJOYW1lLCBzZWxlY3RlZENhckNvbG9yKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDg0LCA4MywgODMpJztcbiAgICB9KTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZChzZWxlY3RDYXJCVE4pO1xuICAgIGNvbnN0IHJlbW92ZUNhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUNhckJUTi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYnRuJyk7XG4gICAgcmVtb3ZlQ2FyQlROLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgcmVtb3ZlQ2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWxlY3RlZENhcklEID0gTnVtYmVyKGNhck9iai5pZCk7XG4gICAgICAgIGRlbGV0ZUNhcigpO1xuICAgIH0pO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKHJlbW92ZUNhckJUTik7XG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhck5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyLW5hbWUnKTtcbiAgICBjYXJOYW1lLnRleHRDb250ZW50ID0gY2FyT2JqLm5hbWU7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmQoY2FyTmFtZSk7XG4gICAgYWRkVHJhY2socGFyZW50RWxlbWVudCwgY2FyT2JqKTtcbn1cbmZ1bmN0aW9uIGFkZFRyYWNrKHBhcmVudEVsZW1lbnQsIGNhck9iaikge1xuICAgIGNvbnN0IHRyYWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0cmFjay13cmFwcGVyJyk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmQodHJhY2tXcmFwcGVyKTtcbiAgICBjb25zdCBzdGFydENhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0Q2FyQlROLmNsYXNzTGlzdC5hZGQoJ2Nhci1idG4nKTtcbiAgICBzdGFydENhckJUTi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idG4nKTtcbiAgICBzdGFydENhckJUTi50ZXh0Q29udGVudCA9ICdBJztcbiAgICB0cmFja1dyYXBwZXIuYXBwZW5kKHN0YXJ0Q2FyQlROKTtcbiAgICBjb25zdCBzdG9wQ2FyQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcENhckJUTi5jbGFzc0xpc3QuYWRkKCdjYXItYnRuJyk7XG4gICAgc3RvcENhckJUTi5jbGFzc0xpc3QuYWRkKCdzdG9wLWJ0bicpO1xuICAgIHN0b3BDYXJCVE4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtYnRuJyk7XG4gICAgc3RvcENhckJUTi50ZXh0Q29udGVudCA9ICdCJztcbiAgICB0cmFja1dyYXBwZXIuYXBwZW5kKHN0b3BDYXJCVE4pO1xuICAgIGNvbnN0IGNhcklNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIC8vIGNvbnN0IGNhckNvbG9yID0gY2FyT2JqLmNvbG9yO1xuICAgIGNhcklNRy5pbm5lckhUTUwgPSBgPHN2Z1xuICAgIGZpbGw9XCIke2Nhck9iai5jb2xvcn1cIlxuICAgIHZlcnNpb249XCIxLjFcIlxuICAgIGlkPVwiQ2FwYV8xXCJcbiAgICB4PVwiMHB4XCJcbiAgICB5PVwiMHB4XCJcbiAgICBjbGFzcz1cImNhci1pbWdcIlxuICAgIHZpZXdCb3g9XCIwIDAgOTguNzk2Mzc0IDM4LjI5MjMwNlwiXG4gICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgIHdpZHRoPVwiOTguNzk2MzcxXCJcbiAgICBoZWlnaHQ9XCIzOC4yOTIzMDVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnNcbiAgICAgIGlkPVwiZGVmczE1XCIgLz48Z1xuICAgICAgaWQ9XCJnMTBcIlxuICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC0xLDAsMCwxLDk4Ljc5NzM3NCwtMzAuMjUxNjk0KVwiPjxnXG4gICAgICAgIGlkPVwiZzhcIj48cGF0aFxuICAgICAgICAgIGQ9XCJtIDE1Ljc5Niw1Mi45MzQgYyAtNC4zMSwwIC03LjgwNSwzLjQ5MiAtNy44MDUsNy44MDQgMCwwLjMzNCAwLjAyNywwLjY2IDAuMDY5LDAuOTgyIDAuNDgzLDMuODQ3IDMuNzU5LDYuODI0IDcuNzM2LDYuODI0IDQuMDg3LDAgNy40MzQsLTMuMTQyIDcuNzczLC03LjE0MSAwLjAxOCwtMC4yMjEgMC4wMzQsLTAuNDQgMC4wMzQsLTAuNjY3IDEwZS00LC00LjMwOSAtMy40OTQsLTcuODAyIC03LjgwNywtNy44MDIgeiBtIC0zLjkwOSw0Ljg2MyAxLjU5MywxLjU5MyBjIC0wLjEyNCwwLjIxMyAtMC4yMjEsMC40NDEgLTAuMjgzLDAuNjg3IGggLTIuMjQ1IGMgMC4xMTcsLTAuODUyIDAuNDQ0LC0xLjYyNyAwLjkzNSwtMi4yOCB6IG0gLTAuOTQyLDMuNjMgaCAyLjI2IGMgMC4wNjQsMC4yMzkgMC4xNTgsMC40NjkgMC4yODIsMC42NzcgbCAtMS41OTYsMS41OTUgQyAxMS4zOTksNjMuMDUgMTEuMDY0LDYyLjI3MyAxMC45NDUsNjEuNDI3IFogbSA0LjE3Nyw0LjE2MSBDIDE0LjI3Nyw2NS40NzEgMTMuNTA4LDY1LjE0IDEyLjg1OCw2NC42NDkgbCAxLjU4NywtMS41ODcgYyAwLjIwOCwwLjEyMiAwLjQzOCwwLjIxMSAwLjY3NywwLjI3MyB6IG0gMCwtNy40NDYgYyAtMC4yNDYsMC4wNjIgLTAuNDc2LDAuMTYxIC0wLjY5LDAuMjg4IGwgLTEuNTksLTEuNTkxIGMgMC42NTMsLTAuNDk2IDEuNDI5LC0wLjgyNSAyLjI4LC0wLjk0MyB6IG0gMS4zNTIsLTIuMjQ2IGMgMC44NTIsMC4xMTggMS42MjcsMC40NDcgMi4yOCwwLjk0NCBsIC0xLjU5LDEuNTkgQyAxNi45NSw1OC4zMDMgMTYuNzIsNTguMjA0IDE2LjQ3NCw1OC4xNDIgWiBtIDAsOS42OTEgdiAtMi4yNTIgYyAwLjI0LC0wLjA2MyAwLjQ2OCwtMC4xNTIgMC42NzcsLTAuMjc1IGwgMS41ODgsMS41ODkgYyAtMC42NTEsMC40ODggLTEuNDIxLDAuODIgLTIuMjY1LDAuOTM4IHogbSAzLjIzNCwtMS44ODIgLTEuNjAxLC0xLjYwMyBjIDAuMTI0LC0wLjIwOSAwLjIyNywtMC40MzQgMC4yOTEsLTAuNjc2IGggMi4yNDMgYyAtMC4xMiwwLjg0NyAtMC40NDEsMS42MjkgLTAuOTMzLDIuMjc5IHogbSAtMS4zMSwtMy42MyBjIC0wLjA2MywtMC4yNDQgLTAuMTU5LC0wLjQ3NCAtMC4yODMsLTAuNjg3IGwgMS41OTMsLTEuNTkzIGMgMC40OTMsMC42NTMgMC44MTgsMS40MjkgMC45MzUsMi4yNzggelwiXG4gICAgICAgICAgaWQ9XCJwYXRoMlwiIC8+PHBhdGhcbiAgICAgICAgICBkPVwibSA4MS41MDUsNTIuOTM0IGMgLTQuMzEsMCAtNy44MDUsMy40OTIgLTcuODA1LDcuODA0IDAsMC4zMzQgMC4wMjcsMC42NiAwLjA2OSwwLjk4MiAwLjQ4MiwzLjg0NyAzLjc1OSw2LjgyNCA3LjczNSw2LjgyNCA0LjA4NywwIDcuNDM1LC0zLjE0MiA3Ljc3MywtNy4xNDEgMC4wMTgsLTAuMjIxIDAuMDM0LC0wLjQ0IDAuMDM0LC0wLjY2NyAwLjAwMiwtNC4zMDkgLTMuNDkzLC03LjgwMiAtNy44MDYsLTcuODAyIHogbSAtMy45MSw0Ljg2MyAxLjU5NCwxLjU5MyBjIC0wLjEyNCwwLjIxMyAtMC4yMjIsMC40NDEgLTAuMjgzLDAuNjg3IGggLTIuMjQ1IGMgMC4xMTcsLTAuODUyIDAuNDQzLC0xLjYyNyAwLjkzNCwtMi4yOCB6IG0gLTAuOTQxLDMuNjMgaCAyLjI2IGMgMC4wNjQsMC4yMzkgMC4xNTgsMC40NjkgMC4yODIsMC42NzcgTCA3Ny42LDYzLjY5OCBDIDc3LjEwOSw2My4wNSA3Ni43NzMsNjIuMjczIDc2LjY1NCw2MS40MjcgWiBtIDQuMTc3LDQuMTYxIEMgNzkuOTg2LDY1LjQ3MSA3OS4yMTcsNjUuMTQgNzguNTY3LDY0LjY0OSBsIDEuNTg3LC0xLjU4NyBjIDAuMjA4LDAuMTIyIDAuNDM4LDAuMjExIDAuNjc3LDAuMjczIHogbSAwLC03LjQ0NiBjIC0wLjI0NiwwLjA2MiAtMC40NzYsMC4xNjEgLTAuNjg5LDAuMjg4IGwgLTEuNTkxLC0xLjU5MSBjIDAuNjUzLC0wLjQ5NiAxLjQzLC0wLjgyNSAyLjI4LC0wLjk0MyB6IG0gMS4zNTEsLTIuMjQ2IGMgMC44NTIsMC4xMTggMS42MjcsMC40NDcgMi4yNzksMC45NDQgbCAtMS41OSwxLjU5IGMgLTAuMjE0LC0wLjEyNyAtMC40NDQsLTAuMjI2IC0wLjY4OSwtMC4yODggeiBtIDAsOS42OTEgdiAtMi4yNTIgYyAwLjIzOSwtMC4wNjMgMC40NjgsLTAuMTUyIDAuNjc3LC0wLjI3NSBsIDEuNTg4LDEuNTg5IGMgLTAuNjUxLDAuNDg4IC0xLjQxOSwwLjgyIC0yLjI2NSwwLjkzOCB6IG0gMy4yMzQsLTEuODgyIC0xLjYwMSwtMS42MDMgYyAwLjEyNCwtMC4yMDkgMC4yMjcsLTAuNDM0IDAuMjkxLC0wLjY3NiBoIDIuMjQzIGMgLTAuMTIsMC44NDcgLTAuNDM5LDEuNjI5IC0wLjkzMywyLjI3OSB6IG0gLTEuMzA4LC0zLjYzIGMgLTAuMDYzLC0wLjI0NCAtMC4xNTksLTAuNDc0IC0wLjI4MywtMC42ODcgbCAxLjU5MywtMS41OTMgYyAwLjQ5MywwLjY1MyAwLjgxOCwxLjQyOSAwLjkzNiwyLjI3OCB6XCJcbiAgICAgICAgICBpZD1cInBhdGg0XCIgLz48cGF0aFxuICAgICAgICAgIGQ9XCJtIDk4LjEyNSw1MC40NTEgLTEuNSwtMS40MzMgMC4wMDMsLTQuNTIxIEMgOTYuNjI5LDQzLjMxIDk2LjE5LDQyLjE2NiA5NS4zOTUsNDEuMjg2IEwgODkuODUsMzUuMTQ1IFYgMzUuMTQyIEMgODkuODIzLDMzLjg2NiA4OC45MDcsMzIuNzg4IDg3LjY1MywzMi41NTMgODEuMDYsMzEuMzE0IDYwLjYwNCwyOC4xMTEgNDQuNDEzLDMyLjQ2MSAzNC40MSwzNS4xNDggMjQuMjQsNDAuNTU3IDI0LjI0LDQwLjU1NyBjIDAsMCAtMTcuNjYsMi4yNSAtMjEuODkyLDcuNzY2IC0xLjQ3NCwxLjkyIC0yLjA5Miw0LjQ0MiAtMi4zMTYsNi43MTQgLTAuMzEzLDMuMTc1IDEuNzc1LDYuMDc0IDQuODg2LDYuNzc1IEwgNi41NTEsNjIuMTggQyA2LjUzNyw2Mi4wOTEgNi41MTYsNjIuMDA0IDYuNTA1LDYxLjkxMiA2LjQ1MSw2MS40OTYgNi40MjQsNjEuMTA4IDYuNDI0LDYwLjczNSBjIDAsLTUuMTY5IDQuMjA2LC05LjM3NCA5LjM3NSwtOS4zNzQgNS4xNywwIDkuMzc2LDQuMjA1IDkuMzc2LDkuMzc0IDAsMC4yNzEgLTAuMDE4LDAuNTMzIC0wLjA0LDAuNzk4IC0wLjAyNywwLjMxOSAtMC4wNzIsMC42MzMgLTAuMTMxLDAuOTQxIGwgNDcuMzIzLDAuMDk2IGMgLTAuMDQzLC0wLjIxOCAtMC4wODYsLTAuNDM1IC0wLjExNCwtMC42NTggLTAuMDU0LC0wLjQxNiAtMC4wODEsLTAuODA0IC0wLjA4MSwtMS4xNzcgMCwtNS4xNjkgNC4yMDYsLTkuMzc0IDkuMzc1LC05LjM3NCA1LjE3LDAgOS4zNzYsNC4yMDUgOS4zNzYsOS4zNzQgMCwwLjI3MSAtMC4wMTgsMC41MzMgLTAuMDQsMC43OTggLTAuMDMsMC4zNjUgLTAuMDksMC43MjMgLTAuMTYyLDEuMDc0IGwgMC42NDYsMTBlLTQgMi42OTIsLTEuNDc1IGMgMi44MDgsLTEuNTM3IDQuNjAyLC00LjQzOCA0LjcyMywtNy42MzYgbCAwLjA1NCwtMS4zOTkgQyA5OC44MTgsNTEuNDggOTguNTc1LDUwLjg4MiA5OC4xMjUsNTAuNDUxIFogTSAzMy41NDMsNDEuMTkzIDM0LjI2NywzOC4zIGMgMCwwIDEwLjk2MSwtNS43MzQgMjkuMzA2LC01LjExIHYgOC41NDkgbCAtMjkuMzgxLDIuMzE4IGMgMCwwIDAuMTU4LC0xLjgzNCAtMC42NDksLTIuODY0IHogbSA0Ny4wNzgsLTAuNzk4IC0xMy44MTUsMS4wOSBWIDMzLjM3IGMgNC41NDMsMC4zMyA5LjQ4LDEuMDQ3IDE0Ljc3OSwyLjMyNyAwLjUzNiwwLjEyOSAwLjk2NiwwLjUyNyAxLjEzNywxLjA1MSAwLjE3MiwwLjUyNCAwLjA2LDEuMSAtMC4yOTcsMS41MiB6XCJcbiAgICAgICAgICBpZD1cInBhdGg2XCIgLz48L2c+PC9nPjwvc3ZnPmA7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZChjYXJJTUcpO1xuICAgIGNvbnN0IGZsYWdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbGFnSU1HLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIC0yIDM2Ni4wMzY3OSAzNjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJmbGFnLWltZ1wiPlxuICA8cGF0aCBkPVwibTM2NC42OTkyMTkgMTc3LjgyNDIxOS03MC4zMDA3ODEtMTQ2LjAyMzQzOGMtMy4xMjEwOTQtNi41MDM5MDYtMTAuNzUtOS40NzI2NTYtMTcuNTA3ODEzLTYuOTE0MDYyLTkuODgyODEzIDMuNTM1MTU2LTE4LjA3NDIxOSA1LjY4MzU5My0yNS44NTU0NjkgNi43NTc4MTItMjIuMDcwMzEyIDMuMDIzNDM4LTQ1LjYyMTA5NC0xLjYzNjcxOS02Ni4zMDQ2ODctMTMuMTA1NDY5LTI1LjkwNjI1LTE0Ljg5ODQzNy01NS4yOTY4NzUtMjAuOTkyMTg3LTg1LjA0Mjk2OS0xNy42MTMyODEtMjUuOTEwMTU2IDIuOTE3OTY5LTQ5Ljk3MjY1NiAxMi44MDA3ODEtNzAuMTk1MzEyIDI4LjcyMjY1N2wtMy42ODc1LTcuNjc5Njg4Yy0uMjAzMTI2LS40NjA5MzgtLjQ2MDkzOC0uODcxMDk0LS43Njk1MzItMS4yMjY1NjIuNTY2NDA2LTEuNDMzNTk0Ljg3MTA5NC0zLjAyMzQzOC44NzEwOTQtNC43MTA5MzggMC03LjExNzE4OC01Ljc4NTE1Ni0xMi45NTMxMjUtMTIuOTUzMTI1LTEyLjk1MzEyNS03LjExNzE4NyAwLTEyLjk1MzEyNSA1Ljc4NTE1Ni0xMi45NTMxMjUgMTIuOTUzMTI1IDAgNS45ODgyODEgNC4wOTc2NTYgMTEuMDU4NTk0IDkuNjI1IDEyLjQ5MjE4OC4xMDE1NjIuMzA4NTkzLjI1NzgxMi42NjQwNjIuNDEwMTU2Ljk3MjY1NmwxNTcuMTgzNTk0IDMyNi44MDg1OTRjMS40ODQzNzUgMy4xMjUgNC42MDkzNzUgNC45MTc5NjggNy44MzU5MzggNC45MTc5NjggMS4yNzczNDMgMCAyLjU1ODU5My0uMjU3ODEyIDMuNzg1MTU2LS44NzEwOTQgNC4zNTU0NjgtMi4xMDE1NjIgNi4xNDQ1MzEtNy4yNzM0MzcgNC4wOTc2NTYtMTEuNjI1bC03MS4wNjY0MDYtMTQ3LjYwOTM3NGMzOS4wNjY0MDYtMzIuNDYwOTM4IDkzLjkwMjM0NC0zNy4zMjQyMTkgMTM4LjM5NDUzMS0xMS42NzE4NzYgMTYuMDI3MzQ0IDkuMTY0MDYzIDM0LjI1MzkwNiAxNC42OTUzMTMgNTIuNjgzNTk0IDE1Ljk3MjY1NyAyLjc2NTYyNS4yMDcwMzEgNS40ODA0NjkuMjU3ODEyIDguMjQ2MDkzLjI1NzgxMiAxNS43MTQ4NDQgMCAzMS41MzkwNjMtMy4wMTk1MzEgNDYuMDc4MTI2LTguOTEwMTU2IDMuNTg1OTM3LTEuNDMzNTk0IDYuMzk4NDM3LTQuMzUxNTYzIDcuNzgxMjUtNy44ODI4MTMgMS40MzM1OTMtMy42MzY3MTggMS4yODEyNS03LjY3OTY4Ny0uMzU1NDY5LTExLjA1ODU5M3ptLTU1LjUwMzkwNyAxMC40OTYwOTMtMjIuMzcxMDkzLTQ3LjAwMzkwNmMxLjIyNjU2Mi4wNTA3ODIgMi40NTcwMzEuMDUwNzgyIDMuNjgzNTkzLjA1MDc4MiAxMS43NzczNDQgMCAyMy41NTQ2ODgtMS44NDM3NSAzNC43NjU2MjYtNS4zNzVsMjIuMTE3MTg3IDQ1LjkyNTc4MWMtMTIuNDQxNDA2IDQuNTA3ODEyLTI1LjM0Mzc1IDYuNjU2MjUtMzguMTk1MzEzIDYuNDAyMzQzem0tMTA3LjA1ODU5My0zMi0yMi4zNzUtNDYuOTUzMTI0YzE4LjQ4NDM3NSAxLjU4OTg0MyAzNi44MTI1IDcuMTE3MTg3IDUzLjY2MDE1NiAxNi43OTI5NjguMzU1NDY5LjIwNzAzMi42NjQwNjMuMzU5Mzc1IDEuMDIzNDM3LjU2NjQwNmwyMi4wNjY0MDcgNDYuMjMwNDY5Yy0xNy05LjMxNjQwNi0zNS40Mjk2ODgtMTQuOTQ5MjE5LTU0LjM3NS0xNi42MzY3MTl6bS0xMDAuODYzMjgxLTkxLjI0MjE4N2MxNi45NDkyMTgtNS45Mzc1IDM1LjAxOTUzMS04LjI5Mjk2OSA1Mi44OTA2MjQtNi45MTAxNTZsMjMuODU5Mzc2IDUwLjAyMzQzN2MtMTcuOTIxODc2LTEuMjgxMjUtMzUuODkwNjI2IDEuMTI1LTUyLjgzOTg0NCA3LjA2NjQwNnptNzQuODU1NDY4LTMxLjM4MjgxM3MuMDUwNzgyIDAgLjA1MDc4Mi4wNTA3ODJjMCAwIC4wNTA3ODEuMDUwNzgxLjA1MDc4MS4wNTA3ODEgNS43MzQzNzUgMy4xNzU3ODEgMTEuNjcxODc1IDUuODg2NzE5IDE3LjcxNDg0MyA4LjE0MDYyNWwxNS4zMDg1OTQgMzIuMTUyMzQ0Yy0xNy4xMDE1NjItOS44MjgxMjUtMzUuNjg3NS0xNS4zNTkzNzUtNTQuNDI1NzgxLTE2Ljg5NDUzMmwtMTguMDc0MjE5LTM3LjkzNzVjMTMuNTcwMzEzIDIuNDU3MDMyIDI2Ljg4MjgxMyA3LjI2OTUzMiAzOS4zNzUgMTQuNDM3NXptMzUuNDgwNDY5IDQyLjgwMDc4MmMxNC4yODUxNTYgNy42Nzk2ODcgMzAuMzEyNSAxMi4zMzk4NDQgNDYuNTQyOTY5IDEzLjQxNDA2MiAxLjAyMzQzNy4wNTQ2ODggMi4wOTc2NTYuMTA1NDY5IDMuMTIxMDk0LjE1NjI1bDIzLjkxMDE1NiA1MC4xNzU3ODJjLTE3LjI1MzkwNi0uODIwMzEzLTM0LjM1NTQ2OS01LjYzMjgxMy00OS45NzI2NTYtMTQuMzM1OTM4em00MS43MjY1NjMtMjcuNTkzNzVjOC4yOTY4NzQtMS4xMjg5MDYgMTYuODQ3NjU2LTMuMjc3MzQ0IDI2Ljc3NzM0My02LjcwNzAzMmwyMC4wNzQyMTkgNDEuNzI2NTYzYy0xMi40OTYwOTQgMy45OTIxODctMjUuMzk4NDM4IDUuNzM0Mzc1LTM4LjE5NTMxMiA1LjI3MzQzN2wtMTguNzkyOTY5LTM5LjM3MTA5M2MzLjQyOTY4Ny0uMTU2MjUgNi44MDg1OTMtLjQ2MDkzOCAxMC4xMzY3MTktLjkyMTg3NXptLTE3My40NjQ4NDQtMjYuMzcxMDk0IDIwLjAxOTUzMSA0MS45MzM1OTRjLTE1LjEwMTU2MyA1LjQyOTY4Ny0yOS4zMzU5MzcgMTMuNjcxODc1LTQxLjg4MjgxMyAyNC42Mjg5MDZsLTIwLjgzNTkzNy00My4zNjcxODhjMTIuODAwNzgxLTEwLjY5OTIxOCAyNy4zMzk4NDQtMTguNDg0Mzc0IDQyLjY5OTIxOS0yMy4xOTUzMTJ6bTMuMTI1IDExOC41ODIwMzFjMTIuNDQxNDA2LTEwLjk1NzAzMSAyNi42MjUtMTkuMTQ4NDM3IDQxLjY3NTc4MS0yNC41NzgxMjVsMjEuOTE0MDYzIDQ1LjkyNTc4MmMtMTUuMzU5Mzc2IDQuOTE3OTY4LTI5LjY5NTMxMyAxMi41NDY4NzQtNDIuNDk2MDk0IDIyLjUzMTI1em0wIDBcIiBmaWxsPVwiIzAwMDAwMFwiIHN0eWxlPVwiZmlsbDogcmdiKDIzNywgMTIsIDEyKTtcIj48L3BhdGg+PC9zdmc+YDtcbiAgICBmbGFnSU1HLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcnKTtcbiAgICB0cmFja1dyYXBwZXIuYXBwZW5kKGZsYWdJTUcpO1xufVxuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuZXhwb3J0IGNvbnN0IGdhcmFnZUNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3Qgd2lubmVyc0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgZ2FyYWdlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgd2lubmVyc0JUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByZXZQYWdlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbmV4dFBhZ2VCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21tb25VSSgpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13cmFwcGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbldyYXBwZXIpO1xuICAgIC8vIFdyYXBwZXIgZm9yIEdhcmFnZSBhbmQgV2lubmVycyBidXR0b25zIGFzIHdlbGwgYXMgc3RhZ2UgdGl0bGUgYW5kIHBhZ2UgbnVtYmVyXG4gICAgY29uc3Qgc3RhZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhZ2Utd3JhcHBlcicpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZChzdGFnZVdyYXBwZXIpO1xuICAgIC8vIFdyYXBwZXIgZm9yIEdhcmFnZSBhbmQgV2lubmVycyBidXR0b25zIGFsb25lXG4gICAgY29uc3Qgc3RhZ2VCVE5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhZ2VCVE5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhZ2UtYnRuLXdyYXBwZXInKTtcbiAgICBzdGFnZVdyYXBwZXIuYXBwZW5kKHN0YWdlQlROV3JhcHBlcik7XG4gICAgZ2FyYWdlQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FyYWdlLWJ0bicpO1xuICAgIGdhcmFnZUJUTi5jbGFzc0xpc3QuYWRkKCdjb21tb24tYnRuJyk7XG4gICAgZ2FyYWdlQlROLnRleHRDb250ZW50ID0gJ0dhcmFnZSc7XG4gICAgc3RhZ2VCVE5XcmFwcGVyLmFwcGVuZChnYXJhZ2VCVE4pO1xuICAgIHdpbm5lcnNCVE4uc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXJzLWJ0bicpO1xuICAgIHdpbm5lcnNCVE4uY2xhc3NMaXN0LmFkZCgnY29tbW9uLWJ0bicpO1xuICAgIHdpbm5lcnNCVE4udGV4dENvbnRlbnQgPSAnV2lubmVycyc7XG4gICAgc3RhZ2VCVE5XcmFwcGVyLmFwcGVuZCh3aW5uZXJzQlROKTtcbiAgICAvLyBXcmFwcGVyIGZvciBsaXN0cyBvZiBjYXJzIGFuZCB3aW5uZXIgd2l0aCB0aGVpciBpbnRlcmZhY2VcbiAgICAvLyBwb3B1bGF0ZWQgd2l0aCB0aGUgY29udGVudCBpbiBnYXJhZ2UtdWkudHMgYW5kIHdpbm5lcnMudHNkXG4gICAgLy8gcmVzcGVjdGl2ZWx5XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdnYXJhZ2Utd3JhcHBlcicpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZChnYXJhZ2VDb250ZW50V3JhcHBlcik7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy13cmFwcGVyJyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIHdpbm5lcnNDb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZCh3aW5uZXJzQ29udGVudFdyYXBwZXIpO1xuICAgIC8vIFdyYXBwZXIgZm9yIHBhZ2luYXRpb24gYnV0dG9ucyBkb3duIHRoZSBtYWluIHdyYXBwZXJcbiAgICBjb25zdCBwYWdlQlROV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VCVE5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZS1idG4td3JhcHBlcicpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZChwYWdlQlROV3JhcHBlcik7XG4gICAgcHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2LXBnLWJ0bicpO1xuICAgIHByZXZQYWdlQlROLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1idG4nKTtcbiAgICBwcmV2UGFnZUJUTi50ZXh0Q29udGVudCA9ICdQcmV2JztcbiAgICBwYWdlQlROV3JhcHBlci5hcHBlbmQocHJldlBhZ2VCVE4pO1xuICAgIG5leHRQYWdlQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wZy1idG4nKTtcbiAgICBuZXh0UGFnZUJUTi5jbGFzc0xpc3QuYWRkKCdjb21tb24tYnRuJyk7XG4gICAgbmV4dFBhZ2VCVE4udGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgcGFnZUJUTldyYXBwZXIuYXBwZW5kKG5leHRQYWdlQlROKTtcbn1cbiIsImltcG9ydCAnLi4vLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldENhcnNOdW1iZXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IGdhcmFnZUNvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IGFjdGl2ZUdhcmFnZVBhZ2UgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5leHBvcnQgbGV0IGNhcnNJbkdhcmFnZTtcbmV4cG9ydCBjb25zdCBhZGRDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCByYWNlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgcmVzZXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhcnNCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBjYXJMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IGFkZENhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGFkZENhckNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBnYXJhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZ2FyYWdlUGFnZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhcmFnZVVJKCkge1xuICAgIGNyZWF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY3JlYXRlQWRkQ2FyTWVudSgpO1xuICAgIGNyZWF0ZVVwZGF0ZUNhck1lbnUoKTtcbiAgICBjcmVhdGVSYWNlUmVzZXRHZW5lcmF0ZU1lbnUoKTtcbiAgICBjcmVhdGVDYXJMaXN0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVBZGRDYXJNZW51KCkge1xuICAgIGNvbnN0IGFkZENhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDYXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLWNhci13cmFwcGVyJyk7XG4gICAgYWRkQ2FyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1jb250cm9scycpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZChhZGRDYXJXcmFwcGVyKTtcbiAgICBhZGRDYXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLWNhci1uYW1lJyk7XG4gICAgYWRkQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZENhck5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjYXIgbmFtZScpO1xuICAgIGFkZENhck5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtdHh0Jyk7XG4gICAgYWRkQ2FyV3JhcHBlci5hcHBlbmQoYWRkQ2FyTmFtZSk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLWNvbG9yJyk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjOWFlNWJlJyk7XG4gICAgYWRkQ2FyQ29sb3IuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtcGFsZXR0ZScpO1xuICAgIGFkZENhcldyYXBwZXIuYXBwZW5kKGFkZENhckNvbG9yKTtcbiAgICBhZGRDYXJCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLWJ0bicpO1xuICAgIGFkZENhckJUTi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICAgIGFkZENhckJUTi5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1idG4nKTtcbiAgICBhZGRDYXJXcmFwcGVyLmFwcGVuZChhZGRDYXJCVE4pO1xufVxuZnVuY3Rpb24gY3JlYXRlVXBkYXRlQ2FyTWVudSgpIHtcbiAgICBjb25zdCB1cGRhdGVDYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwZGF0ZS1jYXItd3JhcHBlcicpO1xuICAgIHVwZGF0ZUNhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtY29udHJvbHMnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQodXBkYXRlQ2FyV3JhcHBlcik7XG4gICAgdXBkYXRlQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwZGF0ZS1jYXItbmFtZScpO1xuICAgIHVwZGF0ZUNhck5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB1cGRhdGVDYXJOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2FyIG5hbWUnKTtcbiAgICB1cGRhdGVDYXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LXR4dCcpO1xuICAgIHVwZGF0ZUNhcldyYXBwZXIuYXBwZW5kKHVwZGF0ZUNhck5hbWUpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci1jb2xvcicpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnIzlhZTViZScpO1xuICAgIHVwZGF0ZUNhckNvbG9yLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LXBhbGV0dGUnKTtcbiAgICB1cGRhdGVDYXJXcmFwcGVyLmFwcGVuZCh1cGRhdGVDYXJDb2xvcik7XG4gICAgdXBkYXRlQ2FyQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci1idG4nKTtcbiAgICB1cGRhdGVDYXJCVE4udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcbiAgICB1cGRhdGVDYXJCVE4uY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtYnRuJyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5hcHBlbmQodXBkYXRlQ2FyQlROKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJhY2VSZXNldEdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCByYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJhY2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmFjZS13cmFwcGVyJyk7XG4gICAgcmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtY29udHJvbHMnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQocmFjZVdyYXBwZXIpO1xuICAgIHJhY2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdyYWNlLWJ0bicpO1xuICAgIHJhY2VCVE4udGV4dENvbnRlbnQgPSAnUmFjZSc7XG4gICAgcmFjZVdyYXBwZXIuYXBwZW5kKHJhY2VCVE4pO1xuICAgIHJlc2V0QlROLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzZXQtYnRuJyk7XG4gICAgcmVzZXRCVE4udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICAgIHJhY2VXcmFwcGVyLmFwcGVuZChyZXNldEJUTik7XG4gICAgZ2VuZXJhdGVDYXJzQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2VuZXJhdGUtY2Fycy1idG4nKTtcbiAgICBnZW5lcmF0ZUNhcnNCVE4udGV4dENvbnRlbnQgPSAnR2VuZXJhdGUnO1xuICAgIHJhY2VXcmFwcGVyLmFwcGVuZChnZW5lcmF0ZUNhcnNCVE4pO1xufVxuZnVuY3Rpb24gY3JlYXRlR2FyYWdlVGl0bGUoKSB7XG4gICAgY29uc3QgZ2FyYWdlVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXdyYXBwZXInKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQoZ2FyYWdlVGl0bGVXcmFwcGVyKTtcbiAgICBnYXJhZ2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcmFnZS10aXRsZScpO1xuICAgIGdhcmFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLXRpdGxlJyk7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmFwcGVuZChnYXJhZ2VUaXRsZSk7XG4gICAgZ2FyYWdlUGFnZU51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcmFnZS1wYWdlJyk7XG4gICAgZ2FyYWdlUGFnZU51bS5jbGFzc0xpc3QuYWRkKCdwYWdlLW51bS10aXRsZScpO1xuICAgIGdhcmFnZVBhZ2VOdW0udGV4dENvbnRlbnQgPSAnUGFnZSAjMSc7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmFwcGVuZChnYXJhZ2VQYWdlTnVtKTtcbiAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgIGNhckxpc3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyLWxpc3QnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQoY2FyTGlzdFdyYXBwZXIpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FyTGlzdCgpIHtcbiAgICBjYXJMaXN0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nhci1saXN0Jyk7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuYXBwZW5kKGNhckxpc3RXcmFwcGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VUaXRsZSgpIHtcbiAgICBnZXRDYXJzTnVtYmVyKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY2Fyc0luR2FyYWdlID0gTnVtYmVyKGRhdGEpO1xuICAgICAgICBnYXJhZ2VUaXRsZS50ZXh0Q29udGVudCA9IGBHYXJhZ2UgKCR7Y2Fyc0luR2FyYWdlfSlgO1xuICAgIH0pO1xuICAgIGdhcmFnZVBhZ2VOdW0udGV4dENvbnRlbnQgPSBgUGFnZSAke2FjdGl2ZUdhcmFnZVBhZ2V9YDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUdhcmFnZVVJIH0gZnJvbSAnLi9nYXJhZ2UtdWknO1xuaW1wb3J0IHsgYWRkQ2FyQlROLCB1cGRhdGVDYXJCVE4sIHJhY2VCVE4sIHJlc2V0QlROLCBnZW5lcmF0ZUNhcnNCVE4sIHVwZGF0ZUdhcmFnZVRpdGxlIH0gZnJvbSAnLi9nYXJhZ2UtdWknO1xuaW1wb3J0IHsgYWRkQ2FyTmFtZSwgYWRkQ2FyQ29sb3IsIHVwZGF0ZUNhck5hbWUsIHVwZGF0ZUNhckNvbG9yLCBjYXJMaXN0V3JhcHBlciB9IGZyb20gJy4vZ2FyYWdlLXVpJztcbmltcG9ydCB7IGNyZWF0ZUNhcnMsIHNlbGVjdGVkQ2FySUQgfSBmcm9tICcuLi9jYXJzL2NhcnMnO1xuaW1wb3J0IHsgZ2V0Q2FycywgYWRkTmV3Q2FyLCB1cGRhdGVDYXIsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhcmFnZSgpIHtcbiAgICBjcmVhdGVHYXJhZ2VVSSgpO1xuICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xuICAgIGFkZENhckJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE9uZUNhcik7XG4gICAgdXBkYXRlQ2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlT25lQ2FyKTtcbiAgICByYWNlQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbiAgICByZXNldEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgfSk7XG4gICAgZ2VuZXJhdGVDYXJzQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUNhckxpc3QoKSB7XG4gICAgZ2V0Q2FycygpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcHVsYXRlQ2FyTGlzdCBkYXRhID0gJywgZGF0YSk7XG4gICAgICAgIGNyZWF0ZUNhcnMoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRPbmVDYXIoKSB7XG4gICAgaWYgKGFkZENhck5hbWUudmFsdWUgPT09ICcnKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgbmV3Q2FyID0ge1xuICAgICAgICBuYW1lOiBhZGRDYXJOYW1lLnZhbHVlLFxuICAgICAgICBjb2xvcjogYWRkQ2FyQ29sb3IudmFsdWUsXG4gICAgfTtcbiAgICBhZGROZXdDYXIobmV3Q2FyKTtcbiAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xufVxuZnVuY3Rpb24gdXBkYXRlT25lQ2FyKCkge1xuICAgIGlmIChzZWxlY3RlZENhcklEID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlZENhciA9IHtcbiAgICAgICAgbmFtZTogdXBkYXRlQ2FyTmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6IHVwZGF0ZUNhckNvbG9yLnZhbHVlLFxuICAgIH07XG4gICAgdXBkYXRlQ2FyKHVwZGF0ZWRDYXIsIHNlbGVjdGVkQ2FySUQpLnRoZW4oKCkgPT4ge1xuICAgICAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgICAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdWxhdGVDYXJMaXN0KCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2FyKCkge1xuICAgIHJlbW92ZUNhcihzZWxlY3RlZENhcklEKTtcbiAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWVBbmRDb2xvcihuYW1lLCBjb2xvcikge1xuICAgIHVwZGF0ZUNhck5hbWUudmFsdWUgPSBuYW1lO1xuICAgIHVwZGF0ZUNhckNvbG9yLnZhbHVlID0gY29sb3I7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb21tb25VSSwgd2lubmVyc0NvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IGdldFdpbm5lcnMsIGdldFdpbm5lcnNOdW1iZXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IGFjdGl2ZVdpbm5lcnNQYWdlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuZXhwb3J0IGNvbnN0IHdpbm5lcnNMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGxldCB3aW5uZXJzTGlzdGVkO1xuY29uc3Qgd2lubmVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB3aW5uZXJzUGFnZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgd2lubmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2lubmVycygpIHtcbiAgICBjcmVhdGVDb21tb25VSSgpO1xuICAgIGNyZWF0ZVdpbm5lcnNVSSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlV2lubmVyc1VJKCkge1xuICAgIGNyZWF0ZVdpbm5lcnNUaXRsZSgpO1xuICAgIGNyZWF0ZVdpbm5lcnNMaXN0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVXaW5uZXJzVGl0bGUoKSB7XG4gICAgY29uc3Qgd2lubmVyVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2lubmVyVGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXdyYXBwZXInKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuYXBwZW5kKHdpbm5lclRpdGxlV3JhcHBlcik7XG4gICAgd2lubmVyc1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy10aXRsZScpO1xuICAgIHdpbm5lcnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdGFnZS10aXRsZScpO1xuICAgIHdpbm5lclRpdGxlV3JhcHBlci5hcHBlbmQod2lubmVyc1RpdGxlKTtcbiAgICB3aW5uZXJzUGFnZU51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtcGFnZScpO1xuICAgIHdpbm5lcnNQYWdlTnVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbnVtLXRpdGxlJyk7XG4gICAgd2lubmVyc1BhZ2VOdW0udGV4dENvbnRlbnQgPSAnUGFnZSAjMSc7XG4gICAgd2lubmVyVGl0bGVXcmFwcGVyLmFwcGVuZCh3aW5uZXJzUGFnZU51bSk7XG4gICAgdXBkYXRlV2lubmVyc1RpdGxlKCk7XG4gICAgd2lubmVyc0xpc3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1saXN0Jyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLmFwcGVuZCh3aW5uZXJzTGlzdFdyYXBwZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcnNUaXRsZSgpIHtcbiAgICBnZXRXaW5uZXJzTnVtYmVyKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgd2lubmVyc0xpc3RlZCA9IE51bWJlcihkYXRhKTtcbiAgICAgICAgd2lubmVyc1RpdGxlLnRleHRDb250ZW50ID0gYFdpbm5lcnMgKCR7d2lubmVyc0xpc3RlZH0pYDtcbiAgICB9KTtcbiAgICB3aW5uZXJzUGFnZU51bS50ZXh0Q29udGVudCA9IGBQYWdlICR7YWN0aXZlV2lubmVyc1BhZ2V9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNMaXN0KCkge1xuICAgIGNyZWF0ZVdpbm5lcnNUYWJsZSgpO1xuICAgIHBvcHVsYXRlV2lubmVyc0xpc3QoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNUYWJsZSgpIHtcbiAgICB3aW5uZXJMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1saXN0Jyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLmFwcGVuZCh3aW5uZXJMaXN0KTtcbiAgICBjb25zdCBsaXN0Rmlyc3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxpc3RGaXJzdFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtbGlzdC1maXJzdC1yb3cnKTtcbiAgICB3aW5uZXJMaXN0LmFwcGVuZChsaXN0Rmlyc3RSb3cpO1xuICAgIGNvbnN0IGxpc3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGxpc3ROdW0uY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBsaXN0TnVtLnRleHRDb250ZW50ID0gJ051bWJlcic7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChsaXN0TnVtKTtcbiAgICBjb25zdCBsaXN0Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBsaXN0Q2FyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcnMtaGVhZGVyJyk7XG4gICAgbGlzdENhci50ZXh0Q29udGVudCA9ICdDYXInO1xuICAgIGxpc3RGaXJzdFJvdy5hcHBlbmQobGlzdENhcik7XG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY2FyTmFtZS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLWhlYWRlcicpO1xuICAgIGNhck5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChjYXJOYW1lKTtcbiAgICBjb25zdCBjYXJXaW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjYXJXaW5zLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcnMtaGVhZGVyJyk7XG4gICAgY2FyV2lucy50ZXh0Q29udGVudCA9ICdXaW5zJztcbiAgICBsaXN0Rmlyc3RSb3cuYXBwZW5kKGNhcldpbnMpO1xuICAgIGNvbnN0IGNhclRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNhclRpbWUuY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBjYXJUaW1lLnRleHRDb250ZW50ID0gJ0Jlc3QgdGltZSAoc2Vjb25kcyknO1xuICAgIGxpc3RGaXJzdFJvdy5hcHBlbmQoY2FyVGltZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVXaW5uZXJzTGlzdCgpIHtcbiAgICBnZXRXaW5uZXJzKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBmaWxsV2lubmVycyhkYXRhKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpbGxXaW5uZXJzKHdpbm5lcnNBcnIpIHtcbiAgICBjb25zdCBsaXN0TGVuID0gd2lubmVyc0Fyci5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0TGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGlzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIHdpbm5lckxpc3QuYXBwZW5kKGxpc3RSb3cpO1xuICAgICAgICBjb25zdCBsaXN0TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgbGlzdE51bS50ZXh0Q29udGVudCA9ICcnICsgaSArIDE7XG4gICAgICAgIGxpc3RSb3cuYXBwZW5kKGxpc3ROdW0pO1xuICAgICAgICBjb25zdCBsaXN0Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgbGlzdENhci50ZXh0Q29udGVudCA9ICdDYXInO1xuICAgICAgICBsaXN0Um93LmFwcGVuZChsaXN0Q2FyKTtcbiAgICAgICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNhck5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgICAgIGxpc3RSb3cuYXBwZW5kKGNhck5hbWUpO1xuICAgICAgICBjb25zdCBjYXJXaW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY2FyV2lucy50ZXh0Q29udGVudCA9ICdXaW5zJztcbiAgICAgICAgbGlzdFJvdy5hcHBlbmQoY2FyV2lucyk7XG4gICAgICAgIGNvbnN0IGNhclRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjYXJUaW1lLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgICAgICBsaXN0Um93LmFwcGVuZChjYXJUaW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUdhcmFnZSwgcG9wdWxhdGVDYXJMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHsgY2Fyc0luR2FyYWdlLCBjYXJMaXN0V3JhcHBlciwgdXBkYXRlR2FyYWdlVGl0bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZS11aSc7XG5pbXBvcnQgeyBjcmVhdGVXaW5uZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lcnMvd2lubmVycyc7XG5pbXBvcnQgeyBnYXJhZ2VCVE4sIHdpbm5lcnNCVE4sIGNyZWF0ZUNvbW1vblVJLCBwcmV2UGFnZUJUTiwgbmV4dFBhZ2VCVE4gfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uJztcbmltcG9ydCB7IHdpbm5lcnNDb250ZW50V3JhcHBlciwgZ2FyYWdlQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uJztcbmV4cG9ydCBsZXQgYWN0aXZlR2FyYWdlUGFnZSA9IDE7XG5leHBvcnQgY29uc3QgYWN0aXZlV2lubmVyc1BhZ2UgPSAxO1xuY29uc3QgR0FSQUdFID0gMDtcbmNvbnN0IFdJTk5FUlMgPSAxO1xuZXhwb3J0IGxldCBhY3RpdmVWaWV3ID0gR0FSQUdFO1xuY3JlYXRlQ29tbW9uVUkoKTtcbmdhcmFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xucHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbmNyZWF0ZUdhcmFnZSgpO1xuY3JlYXRlV2lubmVycygpO1xud2lubmVyc0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVWaWV3ID0gV0lOTkVSUztcbiAgICBnYXJhZ2VCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHdpbm5lcnNCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5nYXJhZ2VCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlVmlldyA9IEdBUkFHRTtcbiAgICBnYXJhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB3aW5uZXJzQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5wcmV2UGFnZUJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVHYXJhZ2VQYWdlLS07XG4gICAgaWYgKGFjdGl2ZUdhcmFnZVBhZ2UgPT09IDEpXG4gICAgICAgIHByZXZQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgaWYgKGFjdGl2ZUdhcmFnZVBhZ2UgPT09IE1hdGguY2VpbChjYXJzSW5HYXJhZ2UgLyA3KSAtIDEpXG4gICAgICAgIG5leHRQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xufSk7XG5uZXh0UGFnZUJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVHYXJhZ2VQYWdlKys7XG4gICAgaWYgKGFjdGl2ZUdhcmFnZVBhZ2UgPT09IDIpXG4gICAgICAgIHByZXZQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBpZiAoYWN0aXZlR2FyYWdlUGFnZSA9PT0gTWF0aC5jZWlsKGNhcnNJbkdhcmFnZSAvIDcpKVxuICAgICAgICBuZXh0UGFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY2FyTGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcG9wdWxhdGVDYXJMaXN0KCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9