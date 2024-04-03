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

.start-btn, .stop-btn {
  cursor: pointer;
}

.disabled-btn {
  opacity: 0.5;
  cursor: unset;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --body-bg-color: rgb(57, 57, 57);\r\n  --body-color: bisque;\r\n  --button-bg-color: rgb(4, 48, 95);\r\n  --transition-time: 0.8s;\r\n  --car-btn-bg-color: rgb(140, 216, 189);\r\n  --car-btn-border-radius: 0.3rem;\r\n  --common-title-color: rgb(190, 214, 230);\r\n  --input-focus-bg-color: lightgray;\r\n  --input-focus-color: black;\r\n  --race-btn-bg-color: #e2f9b6;\r\n  --winners-header-bg-color: rgb(15, 106, 203);\r\n}\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: var(--body-color);\r\n  background-color: var(--body-bg-color);\r\n}\r\n\r\n#main-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#stage-wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#stage-btn-wrapper,\r\n#page-btn-wrapper {\r\n  width: auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.common-btn {\r\n  width: 7rem;\r\n  height: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.7rem;\r\n  font-size: 0.8rem;\r\n  color: var(--body-color);\r\n  border-radius: 0.5rem;\r\n  background-color: var(--button-bg-color);\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.common-btn:hover:not(.common-btn:disabled) {\r\n  font-size: 1.01rem;\r\n}\r\n\r\n.common-btn:disabled {\r\n  opacity: 0.8;\r\n  cursor: unset;\r\n}\r\n\r\n#content-wrapper button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 0.8rem;\r\n  border-radius: var(--car-btn-border-radius);\r\n  color: var(--car-btn-bg-color);\r\n}\r\n\r\n.title-wrapper {\r\n  width: auto;\r\n  height: auto;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.stage-title {\r\n  font-size: 1.5rem;\r\n  color: var(--common-title-color);\r\n}\r\n\r\n.page-num-title {\r\n  font-size: 1.2rem;\r\n  color: var(--common-title-color);\r\n}\r\n\r\n.car-list-controls {\r\n  width: 30vw;\r\n  height: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-size: 0.8rem;\r\n  gap: 0.5rem;\r\n}\r\n\r\n#race-wrapper {\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n#race-wrapper button {\r\n  width: 100%;\r\n}\r\n\r\n.car-list-txt {\r\n  width: 100%;\r\n  height: 1.2rem;\r\n  flex: 1 1 1;\r\n  color: var(--body-bg-color);\r\n  outline:none;\r\n  background-color: var(--common-title-color);\r\n  border-radius: var(--car-btn-border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list-txt:focus-within {\r\n  color: var(--input-focus-color);\r\n  background-color: var(--input-focus-bg-color);\r\n}\r\n\r\n.car-list-palette {\r\n  width: 2rem;\r\n  height: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list-btn {\r\n  width: 5rem;\r\n  height: 1.6rem;\r\n  border-radius: var(--car-btn-border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n:is(#race-wrapper) .car-list-btn {\r\n  width: 100%;\r\n  border-radius: var(--car-btn-border-radius);\r\n}\r\n\r\n.car-list-btn:hover {\r\n  font-weight: bold;\r\n}\r\n\r\n.button-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 0.2rem\r\n}\r\n\r\n.car-name {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.track-wrapper {\r\n  position: relative;\r\n  width: 90vw;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 0.5rem;\r\n  padding: 0 1rem;\r\n  border-bottom: dotted 2px var(--input-focus-bg-color);\r\n}\r\n\r\n.car-img {\r\n  width: 3rem;\r\n  height: auto;\r\n  padding-top: 0.5rem;\r\n  align-self: flex-start;\r\n}\r\n\r\n.flag-img {\r\n  position: absolute;\r\n  right: 3rem;\r\n  bottom: 0;\r\n  width: 2rem;\r\n  height: auto;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.car-btn {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  border: 1px solid var(--race-btn-bg-color);\r\n  border-radius: var(--car-btn-border-radius);\r\n}\r\n\r\n.start-btn, .stop-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.disabled-btn {\r\n  opacity: 0.5;\r\n  cursor: unset;\r\n}\r\n\r\n#winners-list {\r\n  width: 50%;\r\n  height: auto;\r\n  margin-bottom: 2rem;\r\n  text-align: left;\r\n  font-size: 1rem;\r\n  color: var(--body-color);\r\n  border-collapse: collapse; \r\n}\r\n\r\n#winners-list th,\r\n#winners-list td {\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n#winners-list-first-row {\r\n  font-size: 1.2rem;\r\n  background-color: var(--winners-header-bg-color);\r\n}\r\n\r\n.winners-header {\r\n  width: auto;\r\n  padding: 0 2rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   driveCar: () => (/* binding */ driveCar),
/* harmony export */   getCars: () => (/* binding */ getCars),
/* harmony export */   getCarsNumber: () => (/* binding */ getCarsNumber),
/* harmony export */   getOneCar: () => (/* binding */ getOneCar),
/* harmony export */   getWinners: () => (/* binding */ getWinners),
/* harmony export */   getWinnersNumber: () => (/* binding */ getWinnersNumber),
/* harmony export */   removeCar: () => (/* binding */ removeCar),
/* harmony export */   startEngine: () => (/* binding */ startEngine),
/* harmony export */   stopEngine: () => (/* binding */ stopEngine),
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
function getOneCar(carID) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/garage/' + carID);
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
        console.log('Car ', carObj, ' added');
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
function startEngine(carID) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/engine/?id=' + carID + '&status=started', {
            method: 'PATCH',
        });
        console.log('startEngine res = ', answer);
        return answer;
    });
}
function stopEngine(carID) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/engine/?id=' + carID + '&status=stopped', {
            method: 'PATCH',
        });
        console.log('stopEngine res = ', answer);
        return answer;
    });
}
function driveCar(carID) {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield fetch(serverURL + '/engine/?id=' + carID + '&status=drive', {
            method: 'PATCH',
        });
        if (!answer.ok) {
            console.log('driveCar res error = ', answer);
        }
        else {
            console.log('driveCar res ok = ', answer);
        }
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./src/components/common.ts");
/* harmony import */ var _race__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./race */ "./src/components/cars/race.ts");





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
    startCarBTN.addEventListener('click', () => {
        startCarBTN.classList.add('disabled-btn');
        stopCarBTN.classList.remove('disabled-btn');
        if (carObj.id) {
            const animationStartData = {
                trackLength: trackWrapper.offsetWidth,
                startPosition: thisCarIMG.offsetLeft,
                startCarFrontPosition: thisCarIMG.offsetLeft + thisCarIMG.offsetWidth,
                carObject: thisCarIMG,
            };
            (0,_race__WEBPACK_IMPORTED_MODULE_4__.runCar)(carObj.id, animationStartData, _race__WEBPACK_IMPORTED_MODULE_4__.carRace);
        }
    });
    const stopCarBTN = document.createElement('div');
    stopCarBTN.classList.add('car-btn');
    stopCarBTN.classList.add('stop-btn');
    stopCarBTN.classList.add('disabled-btn');
    stopCarBTN.textContent = 'B';
    trackWrapper.append(stopCarBTN);
    stopCarBTN.addEventListener('click', () => {
        if (carObj.id) {
            (0,_race__WEBPACK_IMPORTED_MODULE_4__.stopCar)(carObj.id, thisCarIMG).then(() => {
                stopCarBTN.classList.add('disabled-btn');
                startCarBTN.classList.remove('disabled-btn');
            });
        }
    });
    const thisCarIMG = (0,_common__WEBPACK_IMPORTED_MODULE_3__.createCarImage)(carObj);
    trackWrapper.append(thisCarIMG);
    const flagIMG = document.createElement('div');
    flagIMG.innerHTML = `<svg viewBox="0 -2 366.03679 366" xmlns="http://www.w3.org/2000/svg" class="flag-img">
  <path d="m364.699219 177.824219-70.300781-146.023438c-3.121094-6.503906-10.75-9.472656-17.507813-6.914062-9.882813 3.535156-18.074219 5.683593-25.855469 6.757812-22.070312 3.023438-45.621094-1.636719-66.304687-13.105469-25.90625-14.898437-55.296875-20.992187-85.042969-17.613281-25.910156 2.917969-49.972656 12.800781-70.195312 28.722657l-3.6875-7.679688c-.203126-.460938-.460938-.871094-.769532-1.226562.566406-1.433594.871094-3.023438.871094-4.710938 0-7.117188-5.785156-12.953125-12.953125-12.953125-7.117187 0-12.953125 5.785156-12.953125 12.953125 0 5.988281 4.097656 11.058594 9.625 12.492188.101562.308593.257812.664062.410156.972656l157.183594 326.808594c1.484375 3.125 4.609375 4.917968 7.835938 4.917968 1.277343 0 2.558593-.257812 3.785156-.871094 4.355468-2.101562 6.144531-7.273437 4.097656-11.625l-71.066406-147.609374c39.066406-32.460938 93.902344-37.324219 138.394531-11.671876 16.027344 9.164063 34.253906 14.695313 52.683594 15.972657 2.765625.207031 5.480469.257812 8.246093.257812 15.714844 0 31.539063-3.019531 46.078126-8.910156 3.585937-1.433594 6.398437-4.351563 7.78125-7.882813 1.433593-3.636718 1.28125-7.679687-.355469-11.058593zm-55.503907 10.496093-22.371093-47.003906c1.226562.050782 2.457031.050782 3.683593.050782 11.777344 0 23.554688-1.84375 34.765626-5.375l22.117187 45.925781c-12.441406 4.507812-25.34375 6.65625-38.195313 6.402343zm-107.058593-32-22.375-46.953124c18.484375 1.589843 36.8125 7.117187 53.660156 16.792968.355469.207032.664063.359375 1.023437.566406l22.066407 46.230469c-17-9.316406-35.429688-14.949219-54.375-16.636719zm-100.863281-91.242187c16.949218-5.9375 35.019531-8.292969 52.890624-6.910156l23.859376 50.023437c-17.921876-1.28125-35.890626 1.125-52.839844 7.066406zm74.855468-31.382813s.050782 0 .050782.050782c0 0 .050781.050781.050781.050781 5.734375 3.175781 11.671875 5.886719 17.714843 8.140625l15.308594 32.152344c-17.101562-9.828125-35.6875-15.359375-54.425781-16.894532l-18.074219-37.9375c13.570313 2.457032 26.882813 7.269532 39.375 14.4375zm35.480469 42.800782c14.285156 7.679687 30.3125 12.339844 46.542969 13.414062 1.023437.054688 2.097656.105469 3.121094.15625l23.910156 50.175782c-17.253906-.820313-34.355469-5.632813-49.972656-14.335938zm41.726563-27.59375c8.296874-1.128906 16.847656-3.277344 26.777343-6.707032l20.074219 41.726563c-12.496094 3.992187-25.398438 5.734375-38.195312 5.273437l-18.792969-39.371093c3.429687-.15625 6.808593-.460938 10.136719-.921875zm-173.464844-26.371094 20.019531 41.933594c-15.101563 5.429687-29.335937 13.671875-41.882813 24.628906l-20.835937-43.367188c12.800781-10.699218 27.339844-18.484374 42.699219-23.195312zm3.125 118.582031c12.441406-10.957031 26.625-19.148437 41.675781-24.578125l21.914063 45.925782c-15.359376 4.917968-29.695313 12.546874-42.496094 22.53125zm0 0" fill="#000000" style="fill: rgb(237, 12, 12);"></path></svg>`;
    flagIMG.setAttribute('fill', '');
    trackWrapper.append(flagIMG);
}


/***/ }),

/***/ "./src/components/cars/race.ts":
/*!*************************************!*\
  !*** ./src/components/cars/race.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carRace: () => (/* binding */ carRace),
/* harmony export */   runCar: () => (/* binding */ runCar),
/* harmony export */   startRace: () => (/* binding */ startRace),
/* harmony export */   stopCar: () => (/* binding */ stopCar)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const carRace = {
    distance: 0,
    velocity: 0,
};
let stopCarRunning = false;
function stopCar(carID, thisCarIMG) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Stop Car');
        stopCarRunning = true;
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.stopEngine)(carID).then(() => {
            thisCarIMG.style.transform = `translateX(0)`;
        });
    });
}
function runCar(carID, animationData, carRace) {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.startEngine)(carID)
        .then((data) => data.json())
        .then((data) => {
        carRace = data;
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.driveCar)(carID);
    })
        .then(() => animatedRace(animationData, carRace));
}
function animatedRace(animationData, carRace) {
    console.log('start animation');
    requestAnimationFrame(carRunning);
    let done = false;
    let elapsedDistance = 0;
    function carRunning() {
        // let start = undefined;
        // let  previousTimeStamp;
        // Average speed 100 and movement rate 300 px/sec with 60 render/sec gives 5px per tic
        const speedRatio = carRace.velocity / 100;
        const carShiftPixPerTic = speedRatio * 5;
        elapsedDistance += carShiftPixPerTic;
        console.log('carShiftPixPerTic = ', carShiftPixPerTic, 'elapsedDistance = ', elapsedDistance);
        if (elapsedDistance >= 1270)
            done = true;
        animationData.carObject.style.transform = `translateX(${elapsedDistance}px)`;
        if (!done && stopCarRunning === false) {
            requestAnimationFrame(carRunning);
        }
    }
    stopCarRunning = false;
}
function startRace() { }


/***/ }),

/***/ "./src/components/common.ts":
/*!**********************************!*\
  !*** ./src/components/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarImage: () => (/* binding */ createCarImage),
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
const mainWrapper = document.createElement('div');
function createCommonUI() {
    mainWrapper.setAttribute('id', 'main-wrapper');
    document.body.append(mainWrapper);
    createViewWrapper();
    createContentWrapper();
    createPageWrapper();
}
function createViewWrapper() {
    const viewWrapper = document.createElement('div');
    viewWrapper.setAttribute('id', 'stage-wrapper');
    mainWrapper.append(viewWrapper);
    const viewBTNWrapper = document.createElement('div');
    viewBTNWrapper.setAttribute('id', 'stage-btn-wrapper');
    viewWrapper.append(viewBTNWrapper);
    garageBTN.setAttribute('id', 'garage-btn');
    garageBTN.classList.add('common-btn');
    garageBTN.textContent = 'Garage';
    viewBTNWrapper.append(garageBTN);
    winnersBTN.setAttribute('id', 'winners-btn');
    winnersBTN.classList.add('common-btn');
    winnersBTN.textContent = 'Winners';
    viewBTNWrapper.append(winnersBTN);
}
function createContentWrapper() {
    garageContentWrapper.setAttribute('id', 'garage-wrapper');
    garageContentWrapper.classList.add('content-wrapper');
    mainWrapper.append(garageContentWrapper);
    winnersContentWrapper.setAttribute('id', 'winners-wrapper');
    winnersContentWrapper.classList.add('content-wrapper');
    winnersContentWrapper.style.display = 'none';
    mainWrapper.append(winnersContentWrapper);
}
function createPageWrapper() {
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
function createCarImage(carObj) {
    const carIMG = document.createElement('svg');
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
    return carIMG;
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
        if (carsInGarage > 6)
            (0,_index__WEBPACK_IMPORTED_MODULE_3__.unlockgarageNextPage)();
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
/* harmony import */ var _cars_race__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cars/race */ "./src/components/cars/race.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function createGarage() {
    (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.createGarageUI)();
    populateCarList();
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.addCarBTN.addEventListener('click', addOneCar);
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateCarBTN.addEventListener('click', updateOneCar);
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.raceBTN.addEventListener('click', _cars_race__WEBPACK_IMPORTED_MODULE_3__.startRace);
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.resetBTN.addEventListener('click', () => { });
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.generateCarsBTN.addEventListener('click', addCarLot);
}
function populateCarList() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.getCars)()
        .then((data) => data.json())
        .then((data) => {
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
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.addNewCar)(newCar).then(() => {
        (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateGarageTitle)();
        _garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.innerHTML = '';
        populateCarList();
    });
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
function addCarLot() {
    generateCarLot().then(() => {
        (0,_garage_ui__WEBPACK_IMPORTED_MODULE_0__.updateGarageTitle)();
        _garage_ui__WEBPACK_IMPORTED_MODULE_0__.carListWrapper.innerHTML = '';
        populateCarList();
    });
}
function generateCarLot() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 100; i++) {
            const brandNo = randomNum(10);
            const modelNo = randomNum(carModel[brandNo].model.length);
            const newCar = {
                name: carModel[brandNo].brand + ' ' + carModel[brandNo].model[modelNo],
                color: randomRGBColor(),
            };
            (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.addNewCar)(newCar);
        }
        return true;
    });
}
function randomNum(max) {
    return Math.floor(Math.random() * max);
}
function randomRGBColor() {
    const hexArr = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexArr[randomNum(16)].toString();
    }
    return color;
}
const carModel = [
    {
        brand: 'Tesla',
        model: ['Roadster', 'Model S', 'Model X', 'Model 3', 'Model Y'],
    },
    {
        brand: 'Ford',
        model: [
            'Focus',
            'Mondeo',
            'Taurus',
            'Mustang',
            'Bronco',
            'Edge',
            'Escape',
            'Kuga',
            'Explorer',
            'Puma',
            'Maverick',
            'F-150',
        ],
    },
    {
        brand: 'Mercedes',
        model: [
            'A-Class',
            'C-Class',
            'CLA',
            'E-Class',
            'S-Class',
            'C-Class',
            'EQA',
            'EQC',
            'EQE SUV',
            'G-Class',
            'AMG One',
            'CLE',
        ],
    },
    {
        brand: 'Volkswagen',
        model: ['Golf', 'Polo', 'Arteon', 'Bora', 'Jetta', 'Lavida', 'Passat', 'Atlas', 'Tayron', 'Tiguan', 'Touareg'],
    },
    {
        brand: 'Toyota',
        model: [
            'Avalon',
            'Camry',
            'Century',
            'Corolla',
            'Crown',
            'Mirai',
            'Prius',
            'Yaris',
            'Aqua',
            'Vitz',
            'Frontlander',
            'Harrier',
            'RAV4',
            'Land Cruiser',
        ],
    },
    {
        brand: 'BMW',
        model: ['Gran Coupe', 'X1', 'X2', 'X3', 'X6', 'X7', 'i3', 'i4', 'iX2', 'iX3', 'Z4'],
    },
    {
        brand: 'Lada',
        model: [
            'Vesta',
            'Largus',
            'Granta',
            'Niva Travel',
            '2105',
            '2107',
            'Samara',
            'Kalina',
            'Priora',
            'X-Ray',
            'X-Cross 5',
            '2103',
            '2101',
        ],
    },
    {
        brand: 'Hyundai',
        model: ['Aura', 'Elantra', 'Sonata', 'Creta', 'Santa Fe', 'Tucson', 'Palisade'],
    },
    {
        brand: 'Opel',
        model: ['Astra', 'Corsa', 'Mokka', 'Zafira', 'Combo', 'Manta GSe'],
    },
    {
        brand: 'Volvo',
        model: ['V40', 'S70', 'C70', 'S80', 'XC90', 'XC60', '780', 'EX30', 'EM90'],
    },
];


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
        const winnerObj = winnersArr[i];
        const listRow = document.createElement('tr');
        winnerList.append(listRow);
        const listNum = document.createElement('td');
        listNum.textContent = (i + 1).toString();
        listRow.append(listNum);
        getCarInfo(winnerObj, listRow);
    }
}
function getCarInfo(car, row) {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.getOneCar)(car.id)
        .then((data) => data.json())
        .then((data) => {
        populateWinnerData(data, car, row);
    });
}
function populateWinnerData(carInfo, winnerObj, listRow) {
    const winnerCarIMG = (0,_common__WEBPACK_IMPORTED_MODULE_0__.createCarImage)(carInfo);
    winnerCarIMG.style.fill = carInfo.color;
    const listCar = document.createElement('td');
    listRow.append(listCar);
    listCar.append(winnerCarIMG);
    const carName = document.createElement('td');
    carName.textContent = carInfo.name;
    listRow.append(carName);
    const carWins = document.createElement('td');
    carWins.textContent = winnerObj.wins.toString();
    listRow.append(carWins);
    const carTime = document.createElement('td');
    carTime.textContent = winnerObj.time.toString();
    listRow.append(carTime);
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
/* harmony export */   activeWinnersPage: () => (/* binding */ activeWinnersPage),
/* harmony export */   unlockgarageNextPage: () => (/* binding */ unlockgarageNextPage)
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
_components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.setAttribute('disabled', '');
(0,_components_garage_garage__WEBPACK_IMPORTED_MODULE_1__.createGarage)();
(0,_components_winners_winners__WEBPACK_IMPORTED_MODULE_3__.createWinners)();
let garageNextPageState = 'disabled';
let garagePrevPageState = 'disabled';
const winnersNextPageState = 'disabled';
const winnersFirstPageState = 'disabled';
function unlockgarageNextPage() {
    garageNextPageState = 'enabled';
    _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.removeAttribute('disabled');
}
_components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.addEventListener('click', () => {
    activeView = WINNERS;
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.removeAttribute('disabled');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.setAttribute('disabled', '');
    updateWinnerViewPageButtons('move in');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersContentWrapper.style.display = 'flex';
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageContentWrapper.style.display = 'none';
});
function updateWinnerViewPageButtons(action) {
    if (action === 'move in') {
        if (winnersNextPageState == 'disabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.setAttribute('disabled', '');
        // if (winnersNextPageState == 'enabled') nextPageBTN.removeAttribute('disabled');
        if (winnersFirstPageState == 'disabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.setAttribute('disabled', '');
        // if (winnersFirstPageState == 'enabled') prevPageBTN.removeAttribute('disabled');
    }
    if (action === 'move out') {
        if (garageNextPageState == 'disabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.setAttribute('disabled', '');
        if (garageNextPageState == 'enabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.removeAttribute('disabled');
        if (garagePrevPageState == 'disabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.setAttribute('disabled', '');
        if (garagePrevPageState == 'enabled')
            _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.removeAttribute('disabled');
    }
}
_components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.addEventListener('click', () => {
    activeView = GARAGE;
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageBTN.setAttribute('disabled', '');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersBTN.removeAttribute('disabled');
    updateWinnerViewPageButtons('move out');
    _components_common__WEBPACK_IMPORTED_MODULE_4__.winnersContentWrapper.style.display = 'none';
    _components_common__WEBPACK_IMPORTED_MODULE_4__.garageContentWrapper.style.display = 'flex';
});
_components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.addEventListener('click', () => {
    activeGaragePage--;
    if (activeGaragePage === 1) {
        _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.setAttribute('disabled', '');
        garagePrevPageState = 'disabled';
    }
    if (activeGaragePage === Math.ceil(_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carsInGarage / 7) - 1) {
        _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.removeAttribute('disabled');
        garageNextPageState = 'enabled';
    }
    (0,_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.updateGarageTitle)();
    _components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carListWrapper.innerHTML = '';
    (0,_components_garage_garage__WEBPACK_IMPORTED_MODULE_1__.populateCarList)();
});
_components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.addEventListener('click', () => {
    activeGaragePage++;
    if (activeGaragePage === 2) {
        _components_common__WEBPACK_IMPORTED_MODULE_4__.prevPageBTN.removeAttribute('disabled');
        garagePrevPageState = 'enabled';
    }
    if (activeGaragePage === Math.ceil(_components_garage_garage_ui__WEBPACK_IMPORTED_MODULE_2__.carsInGarage / 7)) {
        _components_common__WEBPACK_IMPORTED_MODULE_4__.nextPageBTN.setAttribute('disabled', '');
        garageNextPageState = 'disabled';
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGlDQUFpQyx1Q0FBdUMsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsNkNBQTZDLHNDQUFzQywrQ0FBK0Msd0NBQXdDLGlDQUFpQyxtQ0FBbUMsbURBQW1ELEtBQUssb0JBQW9CLGdCQUFnQixpQkFBaUIsd0JBQXdCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLCtCQUErQiw2Q0FBNkMsS0FBSyx1QkFBdUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxrQkFBa0Isb0JBQW9CLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QixLQUFLLGtEQUFrRCxrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEtBQUsscUJBQXFCLGtCQUFrQixxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLHdCQUF3QiwrQkFBK0IsNEJBQTRCLCtDQUErQyxzQkFBc0IseUNBQXlDLEtBQUsscURBQXFELHlCQUF5QixLQUFLLDhCQUE4QixtQkFBbUIsb0JBQW9CLEtBQUssaUNBQWlDLG9CQUFvQiwwQkFBMEIsOEJBQThCLHdCQUF3QixrREFBa0QscUNBQXFDLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIsMkJBQTJCLEtBQUssc0JBQXNCLHdCQUF3Qix1Q0FBdUMsS0FBSyx5QkFBeUIsd0JBQXdCLHVDQUF1QyxLQUFLLDRCQUE0QixrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGtDQUFrQyx3QkFBd0Isa0JBQWtCLEtBQUssdUJBQXVCLDJCQUEyQixLQUFLLDhCQUE4QixrQkFBa0IsS0FBSyx1QkFBdUIsa0JBQWtCLHFCQUFxQixrQkFBa0Isa0NBQWtDLG1CQUFtQixrREFBa0Qsa0RBQWtELHNCQUFzQixLQUFLLG9DQUFvQyxzQ0FBc0Msb0RBQW9ELEtBQUssMkJBQTJCLGtCQUFrQixxQkFBcUIsc0JBQXNCLEtBQUssdUJBQXVCLGtCQUFrQixxQkFBcUIsa0RBQWtELHNCQUFzQixLQUFLLDBDQUEwQyxrQkFBa0Isa0RBQWtELEtBQUssNkJBQTZCLHdCQUF3QixLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLHNCQUFzQixtQkFBbUIseUJBQXlCLEtBQUssd0JBQXdCLHlCQUF5QixrQkFBa0Isb0JBQW9CLDBCQUEwQiwwQkFBMEIsa0NBQWtDLGtCQUFrQixzQkFBc0IsNERBQTRELEtBQUssa0JBQWtCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZCQUE2QixLQUFLLG1CQUFtQix5QkFBeUIsa0JBQWtCLGdCQUFnQixrQkFBa0IsbUJBQW1CLDBCQUEwQixLQUFLLGtCQUFrQixrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdEQUFnRCxpREFBaUQsa0RBQWtELEtBQUssK0JBQStCLHNCQUFzQixLQUFLLHVCQUF1QixtQkFBbUIsb0JBQW9CLEtBQUssdUJBQXVCLGlCQUFpQixtQkFBbUIsMEJBQTBCLHVCQUF1QixzQkFBc0IsK0JBQStCLGlDQUFpQyxLQUFLLCtDQUErQywyQkFBMkIsS0FBSyxpQ0FBaUMsd0JBQXdCLHVEQUF1RCxLQUFLLHlCQUF5QixrQkFBa0Isc0JBQXNCLEtBQUssdUJBQXVCO0FBQy8zTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzlQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0NBQW9DO0FBQzNEO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0Esc0RBQXNELGtCQUFrQjtBQUN4RSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzhDO0FBQ047QUFDZTtBQUNuQjtBQUNPO0FBQzNDO0FBQ1A7QUFDQTtBQUNPO0FBQ1Asd0JBQXdCLG9EQUFnQjtBQUN4QztBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQSxRQUFRLDZEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQU0sZ0NBQWdDLDBDQUFPO0FBQ3pEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFPO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLHVEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDZ3RkFBNndGO0FBQzd3RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ2tFO0FBQzNEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ087QUFDUCxJQUFJLHFEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxnQkFBZ0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FeUI7QUFDcUI7QUFDRztBQUNvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFvQjtBQUN4QjtBQUNPO0FBQ1AsSUFBSSx1REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQW9CO0FBQ2hDLDZDQUE2QyxhQUFhO0FBQzFELEtBQUs7QUFDTCx3Q0FBd0Msb0RBQWdCLENBQUM7QUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQzZDO0FBQ2dFO0FBQ1I7QUFDNUM7QUFDZ0I7QUFDaEM7QUFDbEM7QUFDUCxJQUFJLDBEQUFjO0FBQ2xCO0FBQ0EsSUFBSSxpREFBUztBQUNiLElBQUksb0RBQVk7QUFDaEIsSUFBSSwrQ0FBTywyQkFBMkIsaURBQVM7QUFDL0MsSUFBSSxnREFBUSxvQ0FBb0M7QUFDaEQsSUFBSSx1REFBZTtBQUNuQjtBQUNPO0FBQ1AsSUFBSSxpREFBTztBQUNYO0FBQ0E7QUFDQSxRQUFRLHNEQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxrREFBVTtBQUNsQjtBQUNBO0FBQ0EsY0FBYyxrREFBVTtBQUN4QixlQUFlLG1EQUFXO0FBQzFCO0FBQ0EsSUFBSSxtREFBUztBQUNiLFFBQVEsNkRBQWlCO0FBQ3pCLFFBQVEsc0RBQWM7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEscURBQWE7QUFDckI7QUFDQTtBQUNBLGNBQWMscURBQWE7QUFDM0IsZUFBZSxzREFBYztBQUM3QjtBQUNBLElBQUksbURBQVMsYUFBYSxxREFBYTtBQUN2QyxRQUFRLDZEQUFpQjtBQUN6QixRQUFRLHNEQUFjO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUCxJQUFJLG1EQUFTLENBQUMscURBQWE7QUFDM0IsSUFBSSw2REFBaUI7QUFDckIsSUFBSSxzREFBYztBQUNsQjtBQUNBO0FBQ087QUFDUCxJQUFJLHFEQUFhO0FBQ2pCLElBQUksc0RBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBaUI7QUFDekIsUUFBUSxzREFBYztBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFTO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTWtGO0FBQ1Y7QUFDeEI7QUFDekM7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSx1REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFxQjtBQUN6QjtBQUNPO0FBQ1AsSUFBSSwwREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0QsS0FBSztBQUNMLHlDQUF5QyxxREFBaUIsQ0FBQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxvREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5Qix1REFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIcUI7QUFDc0Q7QUFDcUI7QUFDbkM7QUFDeUM7QUFDcEI7QUFDM0U7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQLGtFQUFjO0FBQ2QseURBQVM7QUFDVCwyREFBVztBQUNYLDJEQUFXO0FBQ1gsdUVBQVk7QUFDWiwwRUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLDBEQUFVO0FBQ1Y7QUFDQSxJQUFJLHlEQUFTO0FBQ2IsSUFBSSwwREFBVTtBQUNkO0FBQ0EsSUFBSSxxRUFBcUI7QUFDekIsSUFBSSxvRUFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksMkRBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFXO0FBQ3ZCO0FBQ0EsWUFBWSwyREFBVztBQUN2QjtBQUNBLFlBQVksMkRBQVc7QUFDdkI7QUFDQSxZQUFZLDJEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSx5REFBUztBQUNUO0FBQ0EsSUFBSSx5REFBUztBQUNiLElBQUksMERBQVU7QUFDZDtBQUNBLElBQUkscUVBQXFCO0FBQ3pCLElBQUksb0VBQW9CO0FBQ3hCLENBQUM7QUFDRCwyREFBVztBQUNYO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQSx1Q0FBdUMsc0VBQVk7QUFDbkQsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0EsSUFBSSwrRUFBaUI7QUFDckIsSUFBSSx3RUFBYztBQUNsQixJQUFJLDBFQUFlO0FBQ25CLENBQUM7QUFDRCwyREFBVztBQUNYO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQSx1Q0FBdUMsc0VBQVk7QUFDbkQsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0EsSUFBSSwrRUFBaUI7QUFDckIsSUFBSSx3RUFBYztBQUNsQixJQUFJLDBFQUFlO0FBQ25CLENBQUM7Ozs7Ozs7VUN4RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvY2Fycy9jYXJzLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NhcnMvcmFjZS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZS11aS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMvd2lubmVycy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1ib2R5LWJnLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XHJcbiAgLS1ib2R5LWNvbG9yOiBiaXNxdWU7XHJcbiAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xyXG4gIC0tdHJhbnNpdGlvbi10aW1lOiAwLjhzO1xyXG4gIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xyXG4gIC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgLS1jb21tb24tdGl0bGUtY29sb3I6IHJnYigxOTAsIDIxNCwgMjMwKTtcclxuICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XHJcbiAgLS1yYWNlLWJ0bi1iZy1jb2xvcjogI2UyZjliNjtcclxuICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNtYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNzdGFnZS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNzdGFnZS1idG4td3JhcHBlcixcclxuI3BhZ2UtYnRuLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tb24tYnRuIHtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLmNvbW1vbi1idG46aG92ZXI6bm90KC5jb21tb24tYnRuOmRpc2FibGVkKSB7XHJcbiAgZm9udC1zaXplOiAxLjAxcmVtO1xyXG59XHJcblxyXG4uY29tbW9uLWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiNjb250ZW50LXdyYXBwZXIgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxuICBjb2xvcjogdmFyKC0tY2FyLWJ0bi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi50aXRsZS13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGFnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wYWdlLW51bS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1jb250cm9scyB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI3JhY2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNyYWNlLXdyYXBwZXIgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhci1saXN0LXR4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgZmxleDogMSAxIDE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyLWxpc3QtdHh0OmZvY3VzLXdpdGhpbiB7XHJcbiAgY29sb3I6IHZhcigtLWlucHV0LWZvY3VzLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1wYWxldHRlIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDEuNHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1idG4ge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogMS42cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aXMoI3JhY2Utd3JhcHBlcikgLmNhci1saXN0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLmNhci1saXN0LWJ0bjpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMC4ycmVtXHJcbn1cclxuXHJcbi5jYXItbmFtZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udHJhY2std3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDJweCB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItaW1nIHtcclxuICB3aWR0aDogM3JlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxhZy1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5jYXItYnRuIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2UtYnRuLWJnLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuLCAuc3RvcC1idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkLWJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiN3aW5uZXJzLWxpc3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59XHJcblxyXG4jd2lubmVycy1saXN0IHRoLFxyXG4jd2lubmVycy1saXN0IHRkIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuI3dpbm5lcnMtbGlzdC1maXJzdC1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLndpbm5lcnMtaGVhZGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRDQUE0QztBQUM5Qzs7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Q0UsaUJBQWlCO0VBQ2pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tYm9keS1iZy1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcclxcbiAgLS1ib2R5LWNvbG9yOiBiaXNxdWU7XFxyXFxuICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDQsIDQ4LCA5NSk7XFxyXFxuICAtLXRyYW5zaXRpb24tdGltZTogMC44cztcXHJcXG4gIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xcclxcbiAgLS1jYXItYnRuLWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIC0tY29tbW9uLXRpdGxlLWNvbG9yOiByZ2IoMTkwLCAyMTQsIDIzMCk7XFxyXFxuICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAtLWlucHV0LWZvY3VzLWNvbG9yOiBibGFjaztcXHJcXG4gIC0tcmFjZS1idG4tYmctY29sb3I6ICNlMmY5YjY7XFxyXFxuICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4td3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhZ2Utd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNzdGFnZS1idG4td3JhcHBlcixcXHJcXG4jcGFnZS1idG4td3JhcHBlciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tb24tYnRuIHtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC43cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1vbi1idG46aG92ZXI6bm90KC5jb21tb24tYnRuOmRpc2FibGVkKSB7XFxyXFxuICBmb250LXNpemU6IDEuMDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tb24tYnRuOmRpc2FibGVkIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGN1cnNvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY2FyLWJ0bi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGFnZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1udW0tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0LWNvbnRyb2xzIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2Utd3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2Utd3JhcHBlciBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC10eHQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gIGZsZXg6IDEgMSAxO1xcclxcbiAgY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xcclxcbiAgb3V0bGluZTpub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC10eHQ6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1wYWxldHRlIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1idG4ge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbjppcygjcmFjZS13cmFwcGVyKSAuY2FyLWxpc3QtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0LWJ0bjpob3ZlciB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjJyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1uYW1lIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYWNrLXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCAycHggdmFyKC0taW5wdXQtZm9jdXMtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWltZyB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZy1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDNyZW07XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmFjZS1idG4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0biwgLnN0b3AtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkLWJ0biB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHRoLFxcclxcbiN3aW5uZXJzLWxpc3QgdGQge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXJzLWxpc3QtZmlyc3Qtcm93IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2lubmVycy1oZWFkZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1oZWFkZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IHNlcnZlclVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPbmVDYXIoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2dhcmFnZS8nICsgY2FySUQpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnNOdW1iZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnICsgJz9fbGltaXQ9MScpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0NhcihjYXJPYmopIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FyICcsIGNhck9iaiwgJyBhZGRlZCcpO1xuICAgICAgICB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2dhcmFnZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJPYmopLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXIoY2FyT2JqLCBjYXJJRCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvZ2FyYWdlLycgKyBjYXJJRCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyT2JqKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FyKGNhcklEKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UvJyArIGNhcklELCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVycygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL3dpbm5lcnMnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5uZXJzTnVtYmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvd2lubmVycycgKyAnP19saW1pdD0xJyk7XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFbmdpbmUoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2VuZ2luZS8/aWQ9JyArIGNhcklEICsgJyZzdGF0dXM9c3RhcnRlZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydEVuZ2luZSByZXMgPSAnLCBhbnN3ZXIpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BFbmdpbmUoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2VuZ2luZS8/aWQ9JyArIGNhcklEICsgJyZzdGF0dXM9c3RvcHBlZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9wRW5naW5lIHJlcyA9ICcsIGFuc3dlcik7XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJpdmVDYXIoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2VuZ2luZS8/aWQ9JyArIGNhcklEICsgJyZzdGF0dXM9ZHJpdmUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWFuc3dlci5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RyaXZlQ2FyIHJlcyBlcnJvciA9ICcsIGFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHJpdmVDYXIgcmVzIG9rID0gJywgYW5zd2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IHdpbm5lckxpc3QgPSBbXTtcbiIsImltcG9ydCB7IGNhckxpc3RXcmFwcGVyIH0gZnJvbSAnLi4vZ2FyYWdlL2dhcmFnZS11aSc7XG5pbXBvcnQgeyBhY3RpdmVHYXJhZ2VQYWdlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuaW1wb3J0IHsgc2V0TmFtZUFuZENvbG9yLCBkZWxldGVDYXIgfSBmcm9tICcuLi9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCB7IGNyZWF0ZUNhckltYWdlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IHJ1bkNhciwgY2FyUmFjZSwgc3RvcENhciB9IGZyb20gJy4vcmFjZSc7XG5leHBvcnQgbGV0IHNlbGVjdGVkQ2FySUQgPSAwO1xubGV0IHNlbGVjdGVkQ2FyTmFtZSA9ICcnO1xubGV0IHNlbGVjdGVkQ2FyQ29sb3IgPSAnJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJzKGNhcnNBcnJheSkge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAoYWN0aXZlR2FyYWdlUGFnZSAtIDEpICogNztcbiAgICBjb25zdCBzdG9wSW5kZXggPSBzdGFydEluZGV4ICsgNyA+IGNhcnNBcnJheS5sZW5ndGggPyBjYXJzQXJyYXkubGVuZ3RoIDogc3RhcnRJbmRleCArIDc7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBzdG9wSW5kZXg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBjYXItbm8tJHtpICsgMX1gKTtcbiAgICAgICAgY29uc3QgY2FyT2JqID0gY2Fyc0FycmF5W2ldO1xuICAgICAgICBjYXJMaXN0V3JhcHBlci5hcHBlbmQoY2FyV3JhcHBlcik7XG4gICAgICAgIGFkZEJ1dHRvbnNBbmRUcmFjayhjYXJXcmFwcGVyLCBjYXJPYmopO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEJ1dHRvbnNBbmRUcmFjayhwYXJlbnRFbGVtZW50LCBjYXJPYmopIHtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdidXR0b24td3JhcHBlcicpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICAgIGNvbnN0IHNlbGVjdENhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlbGVjdENhckJUTi5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtYnRuJyk7XG4gICAgc2VsZWN0Q2FyQlROLnRleHRDb250ZW50ID0gJ1NlbGVjdCc7XG4gICAgc2VsZWN0Q2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDYXJJRCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FyLW5vLSR7c2VsZWN0ZWRDYXJJRH1gKTtcbiAgICAgICAgICAgIGlmIChlbGVtICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig1NywgNTcsIDU3KSc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0ZWRDYXJJRCA9IE51bWJlcihjYXJPYmouaWQpO1xuICAgICAgICBzZWxlY3RlZENhck5hbWUgPSBjYXJPYmoubmFtZTtcbiAgICAgICAgc2VsZWN0ZWRDYXJDb2xvciA9IGNhck9iai5jb2xvcjtcbiAgICAgICAgc2V0TmFtZUFuZENvbG9yKHNlbGVjdGVkQ2FyTmFtZSwgc2VsZWN0ZWRDYXJDb2xvcik7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig4NCwgODMsIDgzKSc7XG4gICAgfSk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmQoc2VsZWN0Q2FyQlROKTtcbiAgICBjb25zdCByZW1vdmVDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVDYXJCVE4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWJ0bicpO1xuICAgIHJlbW92ZUNhckJUTi50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuICAgIHJlbW92ZUNhckJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VsZWN0ZWRDYXJJRCA9IE51bWJlcihjYXJPYmouaWQpO1xuICAgICAgICBkZWxldGVDYXIoKTtcbiAgICB9KTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZChyZW1vdmVDYXJCVE4pO1xuICAgIGNvbnN0IGNhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2Nhci1uYW1lJyk7XG4gICAgY2FyTmFtZS50ZXh0Q29udGVudCA9IGNhck9iai5uYW1lO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKGNhck5hbWUpO1xuICAgIGFkZFRyYWNrKHBhcmVudEVsZW1lbnQsIGNhck9iaik7XG59XG5mdW5jdGlvbiBhZGRUcmFjayhwYXJlbnRFbGVtZW50LCBjYXJPYmopIHtcbiAgICBjb25zdCB0cmFja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFja1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndHJhY2std3JhcHBlcicpO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRyYWNrV3JhcHBlcik7XG4gICAgY29uc3Qgc3RhcnRDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFydENhckJUTi5jbGFzc0xpc3QuYWRkKCdjYXItYnRuJyk7XG4gICAgc3RhcnRDYXJCVE4uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnRuJyk7XG4gICAgc3RhcnRDYXJCVE4udGV4dENvbnRlbnQgPSAnQSc7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZChzdGFydENhckJUTik7XG4gICAgc3RhcnRDYXJCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0Q2FyQlROLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLWJ0bicpO1xuICAgICAgICBzdG9wQ2FyQlROLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkLWJ0bicpO1xuICAgICAgICBpZiAoY2FyT2JqLmlkKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25TdGFydERhdGEgPSB7XG4gICAgICAgICAgICAgICAgdHJhY2tMZW5ndGg6IHRyYWNrV3JhcHBlci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uOiB0aGlzQ2FySU1HLm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgc3RhcnRDYXJGcm9udFBvc2l0aW9uOiB0aGlzQ2FySU1HLm9mZnNldExlZnQgKyB0aGlzQ2FySU1HLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIGNhck9iamVjdDogdGhpc0NhcklNRyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBydW5DYXIoY2FyT2JqLmlkLCBhbmltYXRpb25TdGFydERhdGEsIGNhclJhY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc3RvcENhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3BDYXJCVE4uY2xhc3NMaXN0LmFkZCgnY2FyLWJ0bicpO1xuICAgIHN0b3BDYXJCVE4uY2xhc3NMaXN0LmFkZCgnc3RvcC1idG4nKTtcbiAgICBzdG9wQ2FyQlROLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkLWJ0bicpO1xuICAgIHN0b3BDYXJCVE4udGV4dENvbnRlbnQgPSAnQic7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZChzdG9wQ2FyQlROKTtcbiAgICBzdG9wQ2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY2FyT2JqLmlkKSB7XG4gICAgICAgICAgICBzdG9wQ2FyKGNhck9iai5pZCwgdGhpc0NhcklNRykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcENhckJUTi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idG4nKTtcbiAgICAgICAgICAgICAgICBzdGFydENhckJUTi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC1idG4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdGhpc0NhcklNRyA9IGNyZWF0ZUNhckltYWdlKGNhck9iaik7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZCh0aGlzQ2FySU1HKTtcbiAgICBjb25zdCBmbGFnSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmxhZ0lNRy5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAtMiAzNjYuMDM2NzkgMzY2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZmxhZy1pbWdcIj5cbiAgPHBhdGggZD1cIm0zNjQuNjk5MjE5IDE3Ny44MjQyMTktNzAuMzAwNzgxLTE0Ni4wMjM0MzhjLTMuMTIxMDk0LTYuNTAzOTA2LTEwLjc1LTkuNDcyNjU2LTE3LjUwNzgxMy02LjkxNDA2Mi05Ljg4MjgxMyAzLjUzNTE1Ni0xOC4wNzQyMTkgNS42ODM1OTMtMjUuODU1NDY5IDYuNzU3ODEyLTIyLjA3MDMxMiAzLjAyMzQzOC00NS42MjEwOTQtMS42MzY3MTktNjYuMzA0Njg3LTEzLjEwNTQ2OS0yNS45MDYyNS0xNC44OTg0MzctNTUuMjk2ODc1LTIwLjk5MjE4Ny04NS4wNDI5NjktMTcuNjEzMjgxLTI1LjkxMDE1NiAyLjkxNzk2OS00OS45NzI2NTYgMTIuODAwNzgxLTcwLjE5NTMxMiAyOC43MjI2NTdsLTMuNjg3NS03LjY3OTY4OGMtLjIwMzEyNi0uNDYwOTM4LS40NjA5MzgtLjg3MTA5NC0uNzY5NTMyLTEuMjI2NTYyLjU2NjQwNi0xLjQzMzU5NC44NzEwOTQtMy4wMjM0MzguODcxMDk0LTQuNzEwOTM4IDAtNy4xMTcxODgtNS43ODUxNTYtMTIuOTUzMTI1LTEyLjk1MzEyNS0xMi45NTMxMjUtNy4xMTcxODcgMC0xMi45NTMxMjUgNS43ODUxNTYtMTIuOTUzMTI1IDEyLjk1MzEyNSAwIDUuOTg4MjgxIDQuMDk3NjU2IDExLjA1ODU5NCA5LjYyNSAxMi40OTIxODguMTAxNTYyLjMwODU5My4yNTc4MTIuNjY0MDYyLjQxMDE1Ni45NzI2NTZsMTU3LjE4MzU5NCAzMjYuODA4NTk0YzEuNDg0Mzc1IDMuMTI1IDQuNjA5Mzc1IDQuOTE3OTY4IDcuODM1OTM4IDQuOTE3OTY4IDEuMjc3MzQzIDAgMi41NTg1OTMtLjI1NzgxMiAzLjc4NTE1Ni0uODcxMDk0IDQuMzU1NDY4LTIuMTAxNTYyIDYuMTQ0NTMxLTcuMjczNDM3IDQuMDk3NjU2LTExLjYyNWwtNzEuMDY2NDA2LTE0Ny42MDkzNzRjMzkuMDY2NDA2LTMyLjQ2MDkzOCA5My45MDIzNDQtMzcuMzI0MjE5IDEzOC4zOTQ1MzEtMTEuNjcxODc2IDE2LjAyNzM0NCA5LjE2NDA2MyAzNC4yNTM5MDYgMTQuNjk1MzEzIDUyLjY4MzU5NCAxNS45NzI2NTcgMi43NjU2MjUuMjA3MDMxIDUuNDgwNDY5LjI1NzgxMiA4LjI0NjA5My4yNTc4MTIgMTUuNzE0ODQ0IDAgMzEuNTM5MDYzLTMuMDE5NTMxIDQ2LjA3ODEyNi04LjkxMDE1NiAzLjU4NTkzNy0xLjQzMzU5NCA2LjM5ODQzNy00LjM1MTU2MyA3Ljc4MTI1LTcuODgyODEzIDEuNDMzNTkzLTMuNjM2NzE4IDEuMjgxMjUtNy42Nzk2ODctLjM1NTQ2OS0xMS4wNTg1OTN6bS01NS41MDM5MDcgMTAuNDk2MDkzLTIyLjM3MTA5My00Ny4wMDM5MDZjMS4yMjY1NjIuMDUwNzgyIDIuNDU3MDMxLjA1MDc4MiAzLjY4MzU5My4wNTA3ODIgMTEuNzc3MzQ0IDAgMjMuNTU0Njg4LTEuODQzNzUgMzQuNzY1NjI2LTUuMzc1bDIyLjExNzE4NyA0NS45MjU3ODFjLTEyLjQ0MTQwNiA0LjUwNzgxMi0yNS4zNDM3NSA2LjY1NjI1LTM4LjE5NTMxMyA2LjQwMjM0M3ptLTEwNy4wNTg1OTMtMzItMjIuMzc1LTQ2Ljk1MzEyNGMxOC40ODQzNzUgMS41ODk4NDMgMzYuODEyNSA3LjExNzE4NyA1My42NjAxNTYgMTYuNzkyOTY4LjM1NTQ2OS4yMDcwMzIuNjY0MDYzLjM1OTM3NSAxLjAyMzQzNy41NjY0MDZsMjIuMDY2NDA3IDQ2LjIzMDQ2OWMtMTctOS4zMTY0MDYtMzUuNDI5Njg4LTE0Ljk0OTIxOS01NC4zNzUtMTYuNjM2NzE5em0tMTAwLjg2MzI4MS05MS4yNDIxODdjMTYuOTQ5MjE4LTUuOTM3NSAzNS4wMTk1MzEtOC4yOTI5NjkgNTIuODkwNjI0LTYuOTEwMTU2bDIzLjg1OTM3NiA1MC4wMjM0MzdjLTE3LjkyMTg3Ni0xLjI4MTI1LTM1Ljg5MDYyNiAxLjEyNS01Mi44Mzk4NDQgNy4wNjY0MDZ6bTc0Ljg1NTQ2OC0zMS4zODI4MTNzLjA1MDc4MiAwIC4wNTA3ODIuMDUwNzgyYzAgMCAuMDUwNzgxLjA1MDc4MS4wNTA3ODEuMDUwNzgxIDUuNzM0Mzc1IDMuMTc1NzgxIDExLjY3MTg3NSA1Ljg4NjcxOSAxNy43MTQ4NDMgOC4xNDA2MjVsMTUuMzA4NTk0IDMyLjE1MjM0NGMtMTcuMTAxNTYyLTkuODI4MTI1LTM1LjY4NzUtMTUuMzU5Mzc1LTU0LjQyNTc4MS0xNi44OTQ1MzJsLTE4LjA3NDIxOS0zNy45Mzc1YzEzLjU3MDMxMyAyLjQ1NzAzMiAyNi44ODI4MTMgNy4yNjk1MzIgMzkuMzc1IDE0LjQzNzV6bTM1LjQ4MDQ2OSA0Mi44MDA3ODJjMTQuMjg1MTU2IDcuNjc5Njg3IDMwLjMxMjUgMTIuMzM5ODQ0IDQ2LjU0Mjk2OSAxMy40MTQwNjIgMS4wMjM0MzcuMDU0Njg4IDIuMDk3NjU2LjEwNTQ2OSAzLjEyMTA5NC4xNTYyNWwyMy45MTAxNTYgNTAuMTc1NzgyYy0xNy4yNTM5MDYtLjgyMDMxMy0zNC4zNTU0NjktNS42MzI4MTMtNDkuOTcyNjU2LTE0LjMzNTkzOHptNDEuNzI2NTYzLTI3LjU5Mzc1YzguMjk2ODc0LTEuMTI4OTA2IDE2Ljg0NzY1Ni0zLjI3NzM0NCAyNi43NzczNDMtNi43MDcwMzJsMjAuMDc0MjE5IDQxLjcyNjU2M2MtMTIuNDk2MDk0IDMuOTkyMTg3LTI1LjM5ODQzOCA1LjczNDM3NS0zOC4xOTUzMTIgNS4yNzM0MzdsLTE4Ljc5Mjk2OS0zOS4zNzEwOTNjMy40Mjk2ODctLjE1NjI1IDYuODA4NTkzLS40NjA5MzggMTAuMTM2NzE5LS45MjE4NzV6bS0xNzMuNDY0ODQ0LTI2LjM3MTA5NCAyMC4wMTk1MzEgNDEuOTMzNTk0Yy0xNS4xMDE1NjMgNS40Mjk2ODctMjkuMzM1OTM3IDEzLjY3MTg3NS00MS44ODI4MTMgMjQuNjI4OTA2bC0yMC44MzU5MzctNDMuMzY3MTg4YzEyLjgwMDc4MS0xMC42OTkyMTggMjcuMzM5ODQ0LTE4LjQ4NDM3NCA0Mi42OTkyMTktMjMuMTk1MzEyem0zLjEyNSAxMTguNTgyMDMxYzEyLjQ0MTQwNi0xMC45NTcwMzEgMjYuNjI1LTE5LjE0ODQzNyA0MS42NzU3ODEtMjQuNTc4MTI1bDIxLjkxNDA2MyA0NS45MjU3ODJjLTE1LjM1OTM3NiA0LjkxNzk2OC0yOS42OTUzMTMgMTIuNTQ2ODc0LTQyLjQ5NjA5NCAyMi41MzEyNXptMCAwXCIgZmlsbD1cIiMwMDAwMDBcIiBzdHlsZT1cImZpbGw6IHJnYigyMzcsIDEyLCAxMik7XCI+PC9wYXRoPjwvc3ZnPmA7XG4gICAgZmxhZ0lNRy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnJyk7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZChmbGFnSU1HKTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgc3RhcnRFbmdpbmUsIGRyaXZlQ2FyLCBzdG9wRW5naW5lIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5leHBvcnQgY29uc3QgY2FyUmFjZSA9IHtcbiAgICBkaXN0YW5jZTogMCxcbiAgICB2ZWxvY2l0eTogMCxcbn07XG5sZXQgc3RvcENhclJ1bm5pbmcgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBzdG9wQ2FyKGNhcklELCB0aGlzQ2FySU1HKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0b3AgQ2FyJyk7XG4gICAgICAgIHN0b3BDYXJSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RvcEVuZ2luZShjYXJJRCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzQ2FySU1HLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDApYDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcnVuQ2FyKGNhcklELCBhbmltYXRpb25EYXRhLCBjYXJSYWNlKSB7XG4gICAgc3RhcnRFbmdpbmUoY2FySUQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY2FyUmFjZSA9IGRhdGE7XG4gICAgICAgIGRyaXZlQ2FyKGNhcklEKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBhbmltYXRlZFJhY2UoYW5pbWF0aW9uRGF0YSwgY2FyUmFjZSkpO1xufVxuZnVuY3Rpb24gYW5pbWF0ZWRSYWNlKGFuaW1hdGlvbkRhdGEsIGNhclJhY2UpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgYW5pbWF0aW9uJyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhclJ1bm5pbmcpO1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgbGV0IGVsYXBzZWREaXN0YW5jZSA9IDA7XG4gICAgZnVuY3Rpb24gY2FyUnVubmluZygpIHtcbiAgICAgICAgLy8gbGV0IHN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBsZXQgIHByZXZpb3VzVGltZVN0YW1wO1xuICAgICAgICAvLyBBdmVyYWdlIHNwZWVkIDEwMCBhbmQgbW92ZW1lbnQgcmF0ZSAzMDAgcHgvc2VjIHdpdGggNjAgcmVuZGVyL3NlYyBnaXZlcyA1cHggcGVyIHRpY1xuICAgICAgICBjb25zdCBzcGVlZFJhdGlvID0gY2FyUmFjZS52ZWxvY2l0eSAvIDEwMDtcbiAgICAgICAgY29uc3QgY2FyU2hpZnRQaXhQZXJUaWMgPSBzcGVlZFJhdGlvICogNTtcbiAgICAgICAgZWxhcHNlZERpc3RhbmNlICs9IGNhclNoaWZ0UGl4UGVyVGljO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FyU2hpZnRQaXhQZXJUaWMgPSAnLCBjYXJTaGlmdFBpeFBlclRpYywgJ2VsYXBzZWREaXN0YW5jZSA9ICcsIGVsYXBzZWREaXN0YW5jZSk7XG4gICAgICAgIGlmIChlbGFwc2VkRGlzdGFuY2UgPj0gMTI3MClcbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICBhbmltYXRpb25EYXRhLmNhck9iamVjdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2VsYXBzZWREaXN0YW5jZX1weClgO1xuICAgICAgICBpZiAoIWRvbmUgJiYgc3RvcENhclJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FyUnVubmluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcENhclJ1bm5pbmcgPSBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJhY2UoKSB7IH1cbiIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmV4cG9ydCBjb25zdCBnYXJhZ2VDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IHdpbm5lcnNDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IGdhcmFnZUJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHdpbm5lcnNCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcmV2UGFnZUJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IG5leHRQYWdlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbW1vblVJKCkge1xuICAgIG1haW5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13cmFwcGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbldyYXBwZXIpO1xuICAgIGNyZWF0ZVZpZXdXcmFwcGVyKCk7XG4gICAgY3JlYXRlQ29udGVudFdyYXBwZXIoKTtcbiAgICBjcmVhdGVQYWdlV3JhcHBlcigpO1xufVxuZnVuY3Rpb24gY3JlYXRlVmlld1dyYXBwZXIoKSB7XG4gICAgY29uc3Qgdmlld1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWV3V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YWdlLXdyYXBwZXInKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmQodmlld1dyYXBwZXIpO1xuICAgIGNvbnN0IHZpZXdCVE5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmlld0JUTldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFnZS1idG4td3JhcHBlcicpO1xuICAgIHZpZXdXcmFwcGVyLmFwcGVuZCh2aWV3QlROV3JhcHBlcik7XG4gICAgZ2FyYWdlQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FyYWdlLWJ0bicpO1xuICAgIGdhcmFnZUJUTi5jbGFzc0xpc3QuYWRkKCdjb21tb24tYnRuJyk7XG4gICAgZ2FyYWdlQlROLnRleHRDb250ZW50ID0gJ0dhcmFnZSc7XG4gICAgdmlld0JUTldyYXBwZXIuYXBwZW5kKGdhcmFnZUJUTik7XG4gICAgd2lubmVyc0JUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtYnRuJyk7XG4gICAgd2lubmVyc0JUTi5jbGFzc0xpc3QuYWRkKCdjb21tb24tYnRuJyk7XG4gICAgd2lubmVyc0JUTi50ZXh0Q29udGVudCA9ICdXaW5uZXJzJztcbiAgICB2aWV3QlROV3JhcHBlci5hcHBlbmQod2lubmVyc0JUTik7XG59XG5mdW5jdGlvbiBjcmVhdGVDb250ZW50V3JhcHBlcigpIHtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcmFnZS13cmFwcGVyJyk7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKGdhcmFnZUNvbnRlbnRXcmFwcGVyKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXJzLXdyYXBwZXInKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKHdpbm5lcnNDb250ZW50V3JhcHBlcik7XG59XG5mdW5jdGlvbiBjcmVhdGVQYWdlV3JhcHBlcigpIHtcbiAgICBjb25zdCBwYWdlQlROV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VCVE5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZS1idG4td3JhcHBlcicpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZChwYWdlQlROV3JhcHBlcik7XG4gICAgcHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2LXBnLWJ0bicpO1xuICAgIHByZXZQYWdlQlROLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1idG4nKTtcbiAgICBwcmV2UGFnZUJUTi50ZXh0Q29udGVudCA9ICdQcmV2JztcbiAgICBwYWdlQlROV3JhcHBlci5hcHBlbmQocHJldlBhZ2VCVE4pO1xuICAgIG5leHRQYWdlQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dC1wZy1idG4nKTtcbiAgICBuZXh0UGFnZUJUTi5jbGFzc0xpc3QuYWRkKCdjb21tb24tYnRuJyk7XG4gICAgbmV4dFBhZ2VCVE4udGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgcGFnZUJUTldyYXBwZXIuYXBwZW5kKG5leHRQYWdlQlROKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJJbWFnZShjYXJPYmopIHtcbiAgICBjb25zdCBjYXJJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICBjYXJJTUcuaW5uZXJIVE1MID0gYDxzdmdcbiAgZmlsbD1cIiR7Y2FyT2JqLmNvbG9yfVwiXG4gIHZlcnNpb249XCIxLjFcIlxuICBpZD1cIkNhcGFfMVwiXG4gIHg9XCIwcHhcIlxuICB5PVwiMHB4XCJcbiAgY2xhc3M9XCJjYXItaW1nXCJcbiAgdmlld0JveD1cIjAgMCA5OC43OTYzNzQgMzguMjkyMzA2XCJcbiAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICB3aWR0aD1cIjk4Ljc5NjM3MVwiXG4gIGhlaWdodD1cIjM4LjI5MjMwNVwiXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzXG4gICAgaWQ9XCJkZWZzMTVcIiAvPjxnXG4gICAgaWQ9XCJnMTBcIlxuICAgIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwwLDAsMSw5OC43OTczNzQsLTMwLjI1MTY5NClcIj48Z1xuICAgICAgaWQ9XCJnOFwiPjxwYXRoXG4gICAgICAgIGQ9XCJtIDE1Ljc5Niw1Mi45MzQgYyAtNC4zMSwwIC03LjgwNSwzLjQ5MiAtNy44MDUsNy44MDQgMCwwLjMzNCAwLjAyNywwLjY2IDAuMDY5LDAuOTgyIDAuNDgzLDMuODQ3IDMuNzU5LDYuODI0IDcuNzM2LDYuODI0IDQuMDg3LDAgNy40MzQsLTMuMTQyIDcuNzczLC03LjE0MSAwLjAxOCwtMC4yMjEgMC4wMzQsLTAuNDQgMC4wMzQsLTAuNjY3IDEwZS00LC00LjMwOSAtMy40OTQsLTcuODAyIC03LjgwNywtNy44MDIgeiBtIC0zLjkwOSw0Ljg2MyAxLjU5MywxLjU5MyBjIC0wLjEyNCwwLjIxMyAtMC4yMjEsMC40NDEgLTAuMjgzLDAuNjg3IGggLTIuMjQ1IGMgMC4xMTcsLTAuODUyIDAuNDQ0LC0xLjYyNyAwLjkzNSwtMi4yOCB6IG0gLTAuOTQyLDMuNjMgaCAyLjI2IGMgMC4wNjQsMC4yMzkgMC4xNTgsMC40NjkgMC4yODIsMC42NzcgbCAtMS41OTYsMS41OTUgQyAxMS4zOTksNjMuMDUgMTEuMDY0LDYyLjI3MyAxMC45NDUsNjEuNDI3IFogbSA0LjE3Nyw0LjE2MSBDIDE0LjI3Nyw2NS40NzEgMTMuNTA4LDY1LjE0IDEyLjg1OCw2NC42NDkgbCAxLjU4NywtMS41ODcgYyAwLjIwOCwwLjEyMiAwLjQzOCwwLjIxMSAwLjY3NywwLjI3MyB6IG0gMCwtNy40NDYgYyAtMC4yNDYsMC4wNjIgLTAuNDc2LDAuMTYxIC0wLjY5LDAuMjg4IGwgLTEuNTksLTEuNTkxIGMgMC42NTMsLTAuNDk2IDEuNDI5LC0wLjgyNSAyLjI4LC0wLjk0MyB6IG0gMS4zNTIsLTIuMjQ2IGMgMC44NTIsMC4xMTggMS42MjcsMC40NDcgMi4yOCwwLjk0NCBsIC0xLjU5LDEuNTkgQyAxNi45NSw1OC4zMDMgMTYuNzIsNTguMjA0IDE2LjQ3NCw1OC4xNDIgWiBtIDAsOS42OTEgdiAtMi4yNTIgYyAwLjI0LC0wLjA2MyAwLjQ2OCwtMC4xNTIgMC42NzcsLTAuMjc1IGwgMS41ODgsMS41ODkgYyAtMC42NTEsMC40ODggLTEuNDIxLDAuODIgLTIuMjY1LDAuOTM4IHogbSAzLjIzNCwtMS44ODIgLTEuNjAxLC0xLjYwMyBjIDAuMTI0LC0wLjIwOSAwLjIyNywtMC40MzQgMC4yOTEsLTAuNjc2IGggMi4yNDMgYyAtMC4xMiwwLjg0NyAtMC40NDEsMS42MjkgLTAuOTMzLDIuMjc5IHogbSAtMS4zMSwtMy42MyBjIC0wLjA2MywtMC4yNDQgLTAuMTU5LC0wLjQ3NCAtMC4yODMsLTAuNjg3IGwgMS41OTMsLTEuNTkzIGMgMC40OTMsMC42NTMgMC44MTgsMS40MjkgMC45MzUsMi4yNzggelwiXG4gICAgICAgIGlkPVwicGF0aDJcIiAvPjxwYXRoXG4gICAgICAgIGQ9XCJtIDgxLjUwNSw1Mi45MzQgYyAtNC4zMSwwIC03LjgwNSwzLjQ5MiAtNy44MDUsNy44MDQgMCwwLjMzNCAwLjAyNywwLjY2IDAuMDY5LDAuOTgyIDAuNDgyLDMuODQ3IDMuNzU5LDYuODI0IDcuNzM1LDYuODI0IDQuMDg3LDAgNy40MzUsLTMuMTQyIDcuNzczLC03LjE0MSAwLjAxOCwtMC4yMjEgMC4wMzQsLTAuNDQgMC4wMzQsLTAuNjY3IDAuMDAyLC00LjMwOSAtMy40OTMsLTcuODAyIC03LjgwNiwtNy44MDIgeiBtIC0zLjkxLDQuODYzIDEuNTk0LDEuNTkzIGMgLTAuMTI0LDAuMjEzIC0wLjIyMiwwLjQ0MSAtMC4yODMsMC42ODcgaCAtMi4yNDUgYyAwLjExNywtMC44NTIgMC40NDMsLTEuNjI3IDAuOTM0LC0yLjI4IHogbSAtMC45NDEsMy42MyBoIDIuMjYgYyAwLjA2NCwwLjIzOSAwLjE1OCwwLjQ2OSAwLjI4MiwwLjY3NyBMIDc3LjYsNjMuNjk4IEMgNzcuMTA5LDYzLjA1IDc2Ljc3Myw2Mi4yNzMgNzYuNjU0LDYxLjQyNyBaIG0gNC4xNzcsNC4xNjEgQyA3OS45ODYsNjUuNDcxIDc5LjIxNyw2NS4xNCA3OC41NjcsNjQuNjQ5IGwgMS41ODcsLTEuNTg3IGMgMC4yMDgsMC4xMjIgMC40MzgsMC4yMTEgMC42NzcsMC4yNzMgeiBtIDAsLTcuNDQ2IGMgLTAuMjQ2LDAuMDYyIC0wLjQ3NiwwLjE2MSAtMC42ODksMC4yODggbCAtMS41OTEsLTEuNTkxIGMgMC42NTMsLTAuNDk2IDEuNDMsLTAuODI1IDIuMjgsLTAuOTQzIHogbSAxLjM1MSwtMi4yNDYgYyAwLjg1MiwwLjExOCAxLjYyNywwLjQ0NyAyLjI3OSwwLjk0NCBsIC0xLjU5LDEuNTkgYyAtMC4yMTQsLTAuMTI3IC0wLjQ0NCwtMC4yMjYgLTAuNjg5LC0wLjI4OCB6IG0gMCw5LjY5MSB2IC0yLjI1MiBjIDAuMjM5LC0wLjA2MyAwLjQ2OCwtMC4xNTIgMC42NzcsLTAuMjc1IGwgMS41ODgsMS41ODkgYyAtMC42NTEsMC40ODggLTEuNDE5LDAuODIgLTIuMjY1LDAuOTM4IHogbSAzLjIzNCwtMS44ODIgLTEuNjAxLC0xLjYwMyBjIDAuMTI0LC0wLjIwOSAwLjIyNywtMC40MzQgMC4yOTEsLTAuNjc2IGggMi4yNDMgYyAtMC4xMiwwLjg0NyAtMC40MzksMS42MjkgLTAuOTMzLDIuMjc5IHogbSAtMS4zMDgsLTMuNjMgYyAtMC4wNjMsLTAuMjQ0IC0wLjE1OSwtMC40NzQgLTAuMjgzLC0wLjY4NyBsIDEuNTkzLC0xLjU5MyBjIDAuNDkzLDAuNjUzIDAuODE4LDEuNDI5IDAuOTM2LDIuMjc4IHpcIlxuICAgICAgICBpZD1cInBhdGg0XCIgLz48cGF0aFxuICAgICAgICBkPVwibSA5OC4xMjUsNTAuNDUxIC0xLjUsLTEuNDMzIDAuMDAzLC00LjUyMSBDIDk2LjYyOSw0My4zMSA5Ni4xOSw0Mi4xNjYgOTUuMzk1LDQxLjI4NiBMIDg5Ljg1LDM1LjE0NSBWIDM1LjE0MiBDIDg5LjgyMywzMy44NjYgODguOTA3LDMyLjc4OCA4Ny42NTMsMzIuNTUzIDgxLjA2LDMxLjMxNCA2MC42MDQsMjguMTExIDQ0LjQxMywzMi40NjEgMzQuNDEsMzUuMTQ4IDI0LjI0LDQwLjU1NyAyNC4yNCw0MC41NTcgYyAwLDAgLTE3LjY2LDIuMjUgLTIxLjg5Miw3Ljc2NiAtMS40NzQsMS45MiAtMi4wOTIsNC40NDIgLTIuMzE2LDYuNzE0IC0wLjMxMywzLjE3NSAxLjc3NSw2LjA3NCA0Ljg4Niw2Ljc3NSBMIDYuNTUxLDYyLjE4IEMgNi41MzcsNjIuMDkxIDYuNTE2LDYyLjAwNCA2LjUwNSw2MS45MTIgNi40NTEsNjEuNDk2IDYuNDI0LDYxLjEwOCA2LjQyNCw2MC43MzUgYyAwLC01LjE2OSA0LjIwNiwtOS4zNzQgOS4zNzUsLTkuMzc0IDUuMTcsMCA5LjM3Niw0LjIwNSA5LjM3Niw5LjM3NCAwLDAuMjcxIC0wLjAxOCwwLjUzMyAtMC4wNCwwLjc5OCAtMC4wMjcsMC4zMTkgLTAuMDcyLDAuNjMzIC0wLjEzMSwwLjk0MSBsIDQ3LjMyMywwLjA5NiBjIC0wLjA0MywtMC4yMTggLTAuMDg2LC0wLjQzNSAtMC4xMTQsLTAuNjU4IC0wLjA1NCwtMC40MTYgLTAuMDgxLC0wLjgwNCAtMC4wODEsLTEuMTc3IDAsLTUuMTY5IDQuMjA2LC05LjM3NCA5LjM3NSwtOS4zNzQgNS4xNywwIDkuMzc2LDQuMjA1IDkuMzc2LDkuMzc0IDAsMC4yNzEgLTAuMDE4LDAuNTMzIC0wLjA0LDAuNzk4IC0wLjAzLDAuMzY1IC0wLjA5LDAuNzIzIC0wLjE2MiwxLjA3NCBsIDAuNjQ2LDEwZS00IDIuNjkyLC0xLjQ3NSBjIDIuODA4LC0xLjUzNyA0LjYwMiwtNC40MzggNC43MjMsLTcuNjM2IGwgMC4wNTQsLTEuMzk5IEMgOTguODE4LDUxLjQ4IDk4LjU3NSw1MC44ODIgOTguMTI1LDUwLjQ1MSBaIE0gMzMuNTQzLDQxLjE5MyAzNC4yNjcsMzguMyBjIDAsMCAxMC45NjEsLTUuNzM0IDI5LjMwNiwtNS4xMSB2IDguNTQ5IGwgLTI5LjM4MSwyLjMxOCBjIDAsMCAwLjE1OCwtMS44MzQgLTAuNjQ5LC0yLjg2NCB6IG0gNDcuMDc4LC0wLjc5OCAtMTMuODE1LDEuMDkgViAzMy4zNyBjIDQuNTQzLDAuMzMgOS40OCwxLjA0NyAxNC43NzksMi4zMjcgMC41MzYsMC4xMjkgMC45NjYsMC41MjcgMS4xMzcsMS4wNTEgMC4xNzIsMC41MjQgMC4wNiwxLjEgLTAuMjk3LDEuNTIgelwiXG4gICAgICAgIGlkPVwicGF0aDZcIiAvPjwvZz48L2c+PC9zdmc+YDtcbiAgICByZXR1cm4gY2FySU1HO1xufVxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0Q2Fyc051bWJlciB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgZ2FyYWdlQ29udGVudFdyYXBwZXIgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgYWN0aXZlR2FyYWdlUGFnZSwgdW5sb2NrZ2FyYWdlTmV4dFBhZ2UgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5leHBvcnQgbGV0IGNhcnNJbkdhcmFnZTtcbmV4cG9ydCBjb25zdCBhZGRDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCByYWNlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgcmVzZXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhcnNCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBjYXJMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IGFkZENhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IGFkZENhckNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBnYXJhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZ2FyYWdlUGFnZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhcmFnZVVJKCkge1xuICAgIGNyZWF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY3JlYXRlQWRkQ2FyTWVudSgpO1xuICAgIGNyZWF0ZVVwZGF0ZUNhck1lbnUoKTtcbiAgICBjcmVhdGVSYWNlUmVzZXRHZW5lcmF0ZU1lbnUoKTtcbiAgICBjcmVhdGVDYXJMaXN0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVBZGRDYXJNZW51KCkge1xuICAgIGNvbnN0IGFkZENhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDYXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLWNhci13cmFwcGVyJyk7XG4gICAgYWRkQ2FyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1jb250cm9scycpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZChhZGRDYXJXcmFwcGVyKTtcbiAgICBhZGRDYXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLWNhci1uYW1lJyk7XG4gICAgYWRkQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZENhck5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjYXIgbmFtZScpO1xuICAgIGFkZENhck5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtdHh0Jyk7XG4gICAgYWRkQ2FyV3JhcHBlci5hcHBlbmQoYWRkQ2FyTmFtZSk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLWNvbG9yJyk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgYWRkQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjOWFlNWJlJyk7XG4gICAgYWRkQ2FyQ29sb3IuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtcGFsZXR0ZScpO1xuICAgIGFkZENhcldyYXBwZXIuYXBwZW5kKGFkZENhckNvbG9yKTtcbiAgICBhZGRDYXJCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLWJ0bicpO1xuICAgIGFkZENhckJUTi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xuICAgIGFkZENhckJUTi5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1idG4nKTtcbiAgICBhZGRDYXJXcmFwcGVyLmFwcGVuZChhZGRDYXJCVE4pO1xufVxuZnVuY3Rpb24gY3JlYXRlVXBkYXRlQ2FyTWVudSgpIHtcbiAgICBjb25zdCB1cGRhdGVDYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwZGF0ZS1jYXItd3JhcHBlcicpO1xuICAgIHVwZGF0ZUNhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtY29udHJvbHMnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQodXBkYXRlQ2FyV3JhcHBlcik7XG4gICAgdXBkYXRlQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwZGF0ZS1jYXItbmFtZScpO1xuICAgIHVwZGF0ZUNhck5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB1cGRhdGVDYXJOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2FyIG5hbWUnKTtcbiAgICB1cGRhdGVDYXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LXR4dCcpO1xuICAgIHVwZGF0ZUNhcldyYXBwZXIuYXBwZW5kKHVwZGF0ZUNhck5hbWUpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci1jb2xvcicpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgIHVwZGF0ZUNhckNvbG9yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnIzlhZTViZScpO1xuICAgIHVwZGF0ZUNhckNvbG9yLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LXBhbGV0dGUnKTtcbiAgICB1cGRhdGVDYXJXcmFwcGVyLmFwcGVuZCh1cGRhdGVDYXJDb2xvcik7XG4gICAgdXBkYXRlQ2FyQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci1idG4nKTtcbiAgICB1cGRhdGVDYXJCVE4udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcbiAgICB1cGRhdGVDYXJCVE4uY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtYnRuJyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5hcHBlbmQodXBkYXRlQ2FyQlROKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJhY2VSZXNldEdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCByYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJhY2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmFjZS13cmFwcGVyJyk7XG4gICAgcmFjZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtY29udHJvbHMnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQocmFjZVdyYXBwZXIpO1xuICAgIHJhY2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdyYWNlLWJ0bicpO1xuICAgIHJhY2VCVE4udGV4dENvbnRlbnQgPSAnUmFjZSc7XG4gICAgcmFjZVdyYXBwZXIuYXBwZW5kKHJhY2VCVE4pO1xuICAgIHJlc2V0QlROLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzZXQtYnRuJyk7XG4gICAgcmVzZXRCVE4udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICAgIHJhY2VXcmFwcGVyLmFwcGVuZChyZXNldEJUTik7XG4gICAgZ2VuZXJhdGVDYXJzQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2VuZXJhdGUtY2Fycy1idG4nKTtcbiAgICBnZW5lcmF0ZUNhcnNCVE4udGV4dENvbnRlbnQgPSAnR2VuZXJhdGUnO1xuICAgIHJhY2VXcmFwcGVyLmFwcGVuZChnZW5lcmF0ZUNhcnNCVE4pO1xufVxuZnVuY3Rpb24gY3JlYXRlR2FyYWdlVGl0bGUoKSB7XG4gICAgY29uc3QgZ2FyYWdlVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXdyYXBwZXInKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQoZ2FyYWdlVGl0bGVXcmFwcGVyKTtcbiAgICBnYXJhZ2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcmFnZS10aXRsZScpO1xuICAgIGdhcmFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLXRpdGxlJyk7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmFwcGVuZChnYXJhZ2VUaXRsZSk7XG4gICAgZ2FyYWdlUGFnZU51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhcmFnZS1wYWdlJyk7XG4gICAgZ2FyYWdlUGFnZU51bS5jbGFzc0xpc3QuYWRkKCdwYWdlLW51bS10aXRsZScpO1xuICAgIGdhcmFnZVBhZ2VOdW0udGV4dENvbnRlbnQgPSAnUGFnZSAjMSc7XG4gICAgZ2FyYWdlVGl0bGVXcmFwcGVyLmFwcGVuZChnYXJhZ2VQYWdlTnVtKTtcbiAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgIGNhckxpc3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyLWxpc3QnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQoY2FyTGlzdFdyYXBwZXIpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FyTGlzdCgpIHtcbiAgICBjYXJMaXN0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nhci1saXN0Jyk7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuYXBwZW5kKGNhckxpc3RXcmFwcGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VUaXRsZSgpIHtcbiAgICBnZXRDYXJzTnVtYmVyKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY2Fyc0luR2FyYWdlID0gTnVtYmVyKGRhdGEpO1xuICAgICAgICBpZiAoY2Fyc0luR2FyYWdlID4gNilcbiAgICAgICAgICAgIHVubG9ja2dhcmFnZU5leHRQYWdlKCk7XG4gICAgICAgIGdhcmFnZVRpdGxlLnRleHRDb250ZW50ID0gYEdhcmFnZSAoJHtjYXJzSW5HYXJhZ2V9KWA7XG4gICAgfSk7XG4gICAgZ2FyYWdlUGFnZU51bS50ZXh0Q29udGVudCA9IGBQYWdlICR7YWN0aXZlR2FyYWdlUGFnZX1gO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjcmVhdGVHYXJhZ2VVSSB9IGZyb20gJy4vZ2FyYWdlLXVpJztcbmltcG9ydCB7IGFkZENhckJUTiwgdXBkYXRlQ2FyQlROLCByYWNlQlROLCByZXNldEJUTiwgZ2VuZXJhdGVDYXJzQlROLCB1cGRhdGVHYXJhZ2VUaXRsZSB9IGZyb20gJy4vZ2FyYWdlLXVpJztcbmltcG9ydCB7IGFkZENhck5hbWUsIGFkZENhckNvbG9yLCB1cGRhdGVDYXJOYW1lLCB1cGRhdGVDYXJDb2xvciwgY2FyTGlzdFdyYXBwZXIgfSBmcm9tICcuL2dhcmFnZS11aSc7XG5pbXBvcnQgeyBjcmVhdGVDYXJzLCBzZWxlY3RlZENhcklEIH0gZnJvbSAnLi4vY2Fycy9jYXJzJztcbmltcG9ydCB7IGdldENhcnMsIGFkZE5ld0NhciwgdXBkYXRlQ2FyLCByZW1vdmVDYXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IHN0YXJ0UmFjZSB9IGZyb20gJy4uL2NhcnMvcmFjZSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FyYWdlKCkge1xuICAgIGNyZWF0ZUdhcmFnZVVJKCk7XG4gICAgcG9wdWxhdGVDYXJMaXN0KCk7XG4gICAgYWRkQ2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkT25lQ2FyKTtcbiAgICB1cGRhdGVDYXJCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVPbmVDYXIpO1xuICAgIHJhY2VCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFJhY2UpO1xuICAgIHJlc2V0QlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbiAgICBnZW5lcmF0ZUNhcnNCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDYXJMb3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQ2FyTGlzdCgpIHtcbiAgICBnZXRDYXJzKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjcmVhdGVDYXJzKGRhdGEpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkT25lQ2FyKCkge1xuICAgIGlmIChhZGRDYXJOYW1lLnZhbHVlID09PSAnJylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG5ld0NhciA9IHtcbiAgICAgICAgbmFtZTogYWRkQ2FyTmFtZS52YWx1ZSxcbiAgICAgICAgY29sb3I6IGFkZENhckNvbG9yLnZhbHVlLFxuICAgIH07XG4gICAgYWRkTmV3Q2FyKG5ld0NhcikudGhlbigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZU9uZUNhcigpIHtcbiAgICBpZiAoc2VsZWN0ZWRDYXJJRCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHVwZGF0ZWRDYXIgPSB7XG4gICAgICAgIG5hbWU6IHVwZGF0ZUNhck5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiB1cGRhdGVDYXJDb2xvci52YWx1ZSxcbiAgICB9O1xuICAgIHVwZGF0ZUNhcih1cGRhdGVkQ2FyLCBzZWxlY3RlZENhcklEKS50aGVuKCgpID0+IHtcbiAgICAgICAgdXBkYXRlR2FyYWdlVGl0bGUoKTtcbiAgICAgICAgY2FyTGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNhcigpIHtcbiAgICByZW1vdmVDYXIoc2VsZWN0ZWRDYXJJRCk7XG4gICAgdXBkYXRlR2FyYWdlVGl0bGUoKTtcbiAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lQW5kQ29sb3IobmFtZSwgY29sb3IpIHtcbiAgICB1cGRhdGVDYXJOYW1lLnZhbHVlID0gbmFtZTtcbiAgICB1cGRhdGVDYXJDb2xvci52YWx1ZSA9IGNvbG9yO1xufVxuZnVuY3Rpb24gYWRkQ2FyTG90KCkge1xuICAgIGdlbmVyYXRlQ2FyTG90KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FyTG90KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJyYW5kTm8gPSByYW5kb21OdW0oMTApO1xuICAgICAgICAgICAgY29uc3QgbW9kZWxObyA9IHJhbmRvbU51bShjYXJNb2RlbFticmFuZE5vXS5tb2RlbC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2FyID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNhck1vZGVsW2JyYW5kTm9dLmJyYW5kICsgJyAnICsgY2FyTW9kZWxbYnJhbmROb10ubW9kZWxbbW9kZWxOb10sXG4gICAgICAgICAgICAgICAgY29sb3I6IHJhbmRvbVJHQkNvbG9yKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkTmV3Q2FyKG5ld0Nhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByYW5kb21OdW0obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5mdW5jdGlvbiByYW5kb21SR0JDb2xvcigpIHtcbiAgICBjb25zdCBoZXhBcnIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4gICAgbGV0IGNvbG9yID0gJyMnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yICs9IGhleEFycltyYW5kb21OdW0oMTYpXS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG59XG5jb25zdCBjYXJNb2RlbCA9IFtcbiAgICB7XG4gICAgICAgIGJyYW5kOiAnVGVzbGEnLFxuICAgICAgICBtb2RlbDogWydSb2Fkc3RlcicsICdNb2RlbCBTJywgJ01vZGVsIFgnLCAnTW9kZWwgMycsICdNb2RlbCBZJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJyYW5kOiAnRm9yZCcsXG4gICAgICAgIG1vZGVsOiBbXG4gICAgICAgICAgICAnRm9jdXMnLFxuICAgICAgICAgICAgJ01vbmRlbycsXG4gICAgICAgICAgICAnVGF1cnVzJyxcbiAgICAgICAgICAgICdNdXN0YW5nJyxcbiAgICAgICAgICAgICdCcm9uY28nLFxuICAgICAgICAgICAgJ0VkZ2UnLFxuICAgICAgICAgICAgJ0VzY2FwZScsXG4gICAgICAgICAgICAnS3VnYScsXG4gICAgICAgICAgICAnRXhwbG9yZXInLFxuICAgICAgICAgICAgJ1B1bWEnLFxuICAgICAgICAgICAgJ01hdmVyaWNrJyxcbiAgICAgICAgICAgICdGLTE1MCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJyYW5kOiAnTWVyY2VkZXMnLFxuICAgICAgICBtb2RlbDogW1xuICAgICAgICAgICAgJ0EtQ2xhc3MnLFxuICAgICAgICAgICAgJ0MtQ2xhc3MnLFxuICAgICAgICAgICAgJ0NMQScsXG4gICAgICAgICAgICAnRS1DbGFzcycsXG4gICAgICAgICAgICAnUy1DbGFzcycsXG4gICAgICAgICAgICAnQy1DbGFzcycsXG4gICAgICAgICAgICAnRVFBJyxcbiAgICAgICAgICAgICdFUUMnLFxuICAgICAgICAgICAgJ0VRRSBTVVYnLFxuICAgICAgICAgICAgJ0ctQ2xhc3MnLFxuICAgICAgICAgICAgJ0FNRyBPbmUnLFxuICAgICAgICAgICAgJ0NMRScsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJyYW5kOiAnVm9sa3N3YWdlbicsXG4gICAgICAgIG1vZGVsOiBbJ0dvbGYnLCAnUG9sbycsICdBcnRlb24nLCAnQm9yYScsICdKZXR0YScsICdMYXZpZGEnLCAnUGFzc2F0JywgJ0F0bGFzJywgJ1RheXJvbicsICdUaWd1YW4nLCAnVG91YXJlZyddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ1RveW90YScsXG4gICAgICAgIG1vZGVsOiBbXG4gICAgICAgICAgICAnQXZhbG9uJyxcbiAgICAgICAgICAgICdDYW1yeScsXG4gICAgICAgICAgICAnQ2VudHVyeScsXG4gICAgICAgICAgICAnQ29yb2xsYScsXG4gICAgICAgICAgICAnQ3Jvd24nLFxuICAgICAgICAgICAgJ01pcmFpJyxcbiAgICAgICAgICAgICdQcml1cycsXG4gICAgICAgICAgICAnWWFyaXMnLFxuICAgICAgICAgICAgJ0FxdWEnLFxuICAgICAgICAgICAgJ1ZpdHonLFxuICAgICAgICAgICAgJ0Zyb250bGFuZGVyJyxcbiAgICAgICAgICAgICdIYXJyaWVyJyxcbiAgICAgICAgICAgICdSQVY0JyxcbiAgICAgICAgICAgICdMYW5kIENydWlzZXInLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ0JNVycsXG4gICAgICAgIG1vZGVsOiBbJ0dyYW4gQ291cGUnLCAnWDEnLCAnWDInLCAnWDMnLCAnWDYnLCAnWDcnLCAnaTMnLCAnaTQnLCAnaVgyJywgJ2lYMycsICdaNCddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ0xhZGEnLFxuICAgICAgICBtb2RlbDogW1xuICAgICAgICAgICAgJ1Zlc3RhJyxcbiAgICAgICAgICAgICdMYXJndXMnLFxuICAgICAgICAgICAgJ0dyYW50YScsXG4gICAgICAgICAgICAnTml2YSBUcmF2ZWwnLFxuICAgICAgICAgICAgJzIxMDUnLFxuICAgICAgICAgICAgJzIxMDcnLFxuICAgICAgICAgICAgJ1NhbWFyYScsXG4gICAgICAgICAgICAnS2FsaW5hJyxcbiAgICAgICAgICAgICdQcmlvcmEnLFxuICAgICAgICAgICAgJ1gtUmF5JyxcbiAgICAgICAgICAgICdYLUNyb3NzIDUnLFxuICAgICAgICAgICAgJzIxMDMnLFxuICAgICAgICAgICAgJzIxMDEnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ0h5dW5kYWknLFxuICAgICAgICBtb2RlbDogWydBdXJhJywgJ0VsYW50cmEnLCAnU29uYXRhJywgJ0NyZXRhJywgJ1NhbnRhIEZlJywgJ1R1Y3NvbicsICdQYWxpc2FkZSddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ09wZWwnLFxuICAgICAgICBtb2RlbDogWydBc3RyYScsICdDb3JzYScsICdNb2trYScsICdaYWZpcmEnLCAnQ29tYm8nLCAnTWFudGEgR1NlJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJyYW5kOiAnVm9sdm8nLFxuICAgICAgICBtb2RlbDogWydWNDAnLCAnUzcwJywgJ0M3MCcsICdTODAnLCAnWEM5MCcsICdYQzYwJywgJzc4MCcsICdFWDMwJywgJ0VNOTAnXSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbW1vblVJLCB3aW5uZXJzQ29udGVudFdyYXBwZXIsIGNyZWF0ZUNhckltYWdlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IGdldFdpbm5lcnMsIGdldFdpbm5lcnNOdW1iZXIsIGdldE9uZUNhciB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgYWN0aXZlV2lubmVyc1BhZ2UgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5leHBvcnQgY29uc3Qgd2lubmVyc0xpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgbGV0IHdpbm5lcnNMaXN0ZWQ7XG5jb25zdCB3aW5uZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHdpbm5lcnNQYWdlTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB3aW5uZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaW5uZXJzKCkge1xuICAgIGNyZWF0ZUNvbW1vblVJKCk7XG4gICAgY3JlYXRlV2lubmVyc1VJKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVXaW5uZXJzVUkoKSB7XG4gICAgY3JlYXRlV2lubmVyc1RpdGxlKCk7XG4gICAgY3JlYXRlV2lubmVyc0xpc3QoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNUaXRsZSgpIHtcbiAgICBjb25zdCB3aW5uZXJUaXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5uZXJUaXRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtd3JhcHBlcicpO1xuICAgIHdpbm5lcnNDb250ZW50V3JhcHBlci5hcHBlbmQod2lubmVyVGl0bGVXcmFwcGVyKTtcbiAgICB3aW5uZXJzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXJzLXRpdGxlJyk7XG4gICAgd2lubmVyc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLXRpdGxlJyk7XG4gICAgd2lubmVyVGl0bGVXcmFwcGVyLmFwcGVuZCh3aW5uZXJzVGl0bGUpO1xuICAgIHdpbm5lcnNQYWdlTnVtLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1wYWdlJyk7XG4gICAgd2lubmVyc1BhZ2VOdW0uY2xhc3NMaXN0LmFkZCgncGFnZS1udW0tdGl0bGUnKTtcbiAgICB3aW5uZXJzUGFnZU51bS50ZXh0Q29udGVudCA9ICdQYWdlICMxJztcbiAgICB3aW5uZXJUaXRsZVdyYXBwZXIuYXBwZW5kKHdpbm5lcnNQYWdlTnVtKTtcbiAgICB1cGRhdGVXaW5uZXJzVGl0bGUoKTtcbiAgICB3aW5uZXJzTGlzdFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXJzLWxpc3QnKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuYXBwZW5kKHdpbm5lcnNMaXN0V3JhcHBlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2lubmVyc1RpdGxlKCkge1xuICAgIGdldFdpbm5lcnNOdW1iZXIoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5oZWFkZXJzLmdldCgneC10b3RhbC1jb3VudCcpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB3aW5uZXJzTGlzdGVkID0gTnVtYmVyKGRhdGEpO1xuICAgICAgICB3aW5uZXJzVGl0bGUudGV4dENvbnRlbnQgPSBgV2lubmVycyAoJHt3aW5uZXJzTGlzdGVkfSlgO1xuICAgIH0pO1xuICAgIHdpbm5lcnNQYWdlTnVtLnRleHRDb250ZW50ID0gYFBhZ2UgJHthY3RpdmVXaW5uZXJzUGFnZX1gO1xufVxuZnVuY3Rpb24gY3JlYXRlV2lubmVyc0xpc3QoKSB7XG4gICAgY3JlYXRlV2lubmVyc1RhYmxlKCk7XG4gICAgcG9wdWxhdGVXaW5uZXJzTGlzdCgpO1xufVxuZnVuY3Rpb24gY3JlYXRlV2lubmVyc1RhYmxlKCkge1xuICAgIHdpbm5lckxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd3aW5uZXJzLWxpc3QnKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuYXBwZW5kKHdpbm5lckxpc3QpO1xuICAgIGNvbnN0IGxpc3RGaXJzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgbGlzdEZpcnN0Um93LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1saXN0LWZpcnN0LXJvdycpO1xuICAgIHdpbm5lckxpc3QuYXBwZW5kKGxpc3RGaXJzdFJvdyk7XG4gICAgY29uc3QgbGlzdE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgbGlzdE51bS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLWhlYWRlcicpO1xuICAgIGxpc3ROdW0udGV4dENvbnRlbnQgPSAnTnVtYmVyJztcbiAgICBsaXN0Rmlyc3RSb3cuYXBwZW5kKGxpc3ROdW0pO1xuICAgIGNvbnN0IGxpc3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGxpc3RDYXIuY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBsaXN0Q2FyLnRleHRDb250ZW50ID0gJ0Nhcic7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChsaXN0Q2FyKTtcbiAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjYXJOYW1lLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcnMtaGVhZGVyJyk7XG4gICAgY2FyTmFtZS50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICBsaXN0Rmlyc3RSb3cuYXBwZW5kKGNhck5hbWUpO1xuICAgIGNvbnN0IGNhcldpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNhcldpbnMuY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBjYXJXaW5zLnRleHRDb250ZW50ID0gJ1dpbnMnO1xuICAgIGxpc3RGaXJzdFJvdy5hcHBlbmQoY2FyV2lucyk7XG4gICAgY29uc3QgY2FyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY2FyVGltZS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLWhlYWRlcicpO1xuICAgIGNhclRpbWUudGV4dENvbnRlbnQgPSAnQmVzdCB0aW1lIChzZWNvbmRzKSc7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChjYXJUaW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVdpbm5lcnNMaXN0KCkge1xuICAgIGdldFdpbm5lcnMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGZpbGxXaW5uZXJzKGRhdGEpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmlsbFdpbm5lcnMod2lubmVyc0Fycikge1xuICAgIGNvbnN0IGxpc3RMZW4gPSB3aW5uZXJzQXJyLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RMZW47IGkrKykge1xuICAgICAgICBjb25zdCB3aW5uZXJPYmogPSB3aW5uZXJzQXJyW2ldO1xuICAgICAgICBjb25zdCBsaXN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgd2lubmVyTGlzdC5hcHBlbmQobGlzdFJvdyk7XG4gICAgICAgIGNvbnN0IGxpc3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBsaXN0TnVtLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICBsaXN0Um93LmFwcGVuZChsaXN0TnVtKTtcbiAgICAgICAgZ2V0Q2FySW5mbyh3aW5uZXJPYmosIGxpc3RSb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldENhckluZm8oY2FyLCByb3cpIHtcbiAgICBnZXRPbmVDYXIoY2FyLmlkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlV2lubmVyRGF0YShkYXRhLCBjYXIsIHJvdyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVdpbm5lckRhdGEoY2FySW5mbywgd2lubmVyT2JqLCBsaXN0Um93KSB7XG4gICAgY29uc3Qgd2lubmVyQ2FySU1HID0gY3JlYXRlQ2FySW1hZ2UoY2FySW5mbyk7XG4gICAgd2lubmVyQ2FySU1HLnN0eWxlLmZpbGwgPSBjYXJJbmZvLmNvbG9yO1xuICAgIGNvbnN0IGxpc3RDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxpc3RSb3cuYXBwZW5kKGxpc3RDYXIpO1xuICAgIGxpc3RDYXIuYXBwZW5kKHdpbm5lckNhcklNRyk7XG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2FyTmFtZS50ZXh0Q29udGVudCA9IGNhckluZm8ubmFtZTtcbiAgICBsaXN0Um93LmFwcGVuZChjYXJOYW1lKTtcbiAgICBjb25zdCBjYXJXaW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjYXJXaW5zLnRleHRDb250ZW50ID0gd2lubmVyT2JqLndpbnMudG9TdHJpbmcoKTtcbiAgICBsaXN0Um93LmFwcGVuZChjYXJXaW5zKTtcbiAgICBjb25zdCBjYXJUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjYXJUaW1lLnRleHRDb250ZW50ID0gd2lubmVyT2JqLnRpbWUudG9TdHJpbmcoKTtcbiAgICBsaXN0Um93LmFwcGVuZChjYXJUaW1lKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlR2FyYWdlLCBwb3B1bGF0ZUNhckxpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgeyBjYXJzSW5HYXJhZ2UsIGNhckxpc3RXcmFwcGVyLCB1cGRhdGVHYXJhZ2VUaXRsZSB9IGZyb20gJy4vY29tcG9uZW50cy9nYXJhZ2UvZ2FyYWdlLXVpJztcbmltcG9ydCB7IGNyZWF0ZVdpbm5lcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvd2lubmVycy93aW5uZXJzJztcbmltcG9ydCB7IGdhcmFnZUJUTiwgd2lubmVyc0JUTiwgY3JlYXRlQ29tbW9uVUksIHByZXZQYWdlQlROLCBuZXh0UGFnZUJUTiB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tb24nO1xuaW1wb3J0IHsgd2lubmVyc0NvbnRlbnRXcmFwcGVyLCBnYXJhZ2VDb250ZW50V3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tb24nO1xuZXhwb3J0IGxldCBhY3RpdmVHYXJhZ2VQYWdlID0gMTtcbmV4cG9ydCBjb25zdCBhY3RpdmVXaW5uZXJzUGFnZSA9IDE7XG5jb25zdCBHQVJBR0UgPSAwO1xuY29uc3QgV0lOTkVSUyA9IDE7XG5leHBvcnQgbGV0IGFjdGl2ZVZpZXcgPSBHQVJBR0U7XG5jcmVhdGVDb21tb25VSSgpO1xuZ2FyYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5wcmV2UGFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xubmV4dFBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbmNyZWF0ZUdhcmFnZSgpO1xuY3JlYXRlV2lubmVycygpO1xubGV0IGdhcmFnZU5leHRQYWdlU3RhdGUgPSAnZGlzYWJsZWQnO1xubGV0IGdhcmFnZVByZXZQYWdlU3RhdGUgPSAnZGlzYWJsZWQnO1xuY29uc3Qgd2lubmVyc05leHRQYWdlU3RhdGUgPSAnZGlzYWJsZWQnO1xuY29uc3Qgd2lubmVyc0ZpcnN0UGFnZVN0YXRlID0gJ2Rpc2FibGVkJztcbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2tnYXJhZ2VOZXh0UGFnZSgpIHtcbiAgICBnYXJhZ2VOZXh0UGFnZVN0YXRlID0gJ2VuYWJsZWQnO1xuICAgIG5leHRQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cbndpbm5lcnNCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlVmlldyA9IFdJTk5FUlM7XG4gICAgZ2FyYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB3aW5uZXJzQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgdXBkYXRlV2lubmVyVmlld1BhZ2VCdXR0b25zKCdtb3ZlIGluJyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuZnVuY3Rpb24gdXBkYXRlV2lubmVyVmlld1BhZ2VCdXR0b25zKGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gPT09ICdtb3ZlIGluJykge1xuICAgICAgICBpZiAod2lubmVyc05leHRQYWdlU3RhdGUgPT0gJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIG5leHRQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIC8vIGlmICh3aW5uZXJzTmV4dFBhZ2VTdGF0ZSA9PSAnZW5hYmxlZCcpIG5leHRQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaWYgKHdpbm5lcnNGaXJzdFBhZ2VTdGF0ZSA9PSAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgcHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgLy8gaWYgKHdpbm5lcnNGaXJzdFBhZ2VTdGF0ZSA9PSAnZW5hYmxlZCcpIHByZXZQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ21vdmUgb3V0Jykge1xuICAgICAgICBpZiAoZ2FyYWdlTmV4dFBhZ2VTdGF0ZSA9PSAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgbmV4dFBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgaWYgKGdhcmFnZU5leHRQYWdlU3RhdGUgPT0gJ2VuYWJsZWQnKVxuICAgICAgICAgICAgbmV4dFBhZ2VCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBpZiAoZ2FyYWdlUHJldlBhZ2VTdGF0ZSA9PSAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgcHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgaWYgKGdhcmFnZVByZXZQYWdlU3RhdGUgPT0gJ2VuYWJsZWQnKVxuICAgICAgICAgICAgcHJldlBhZ2VCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbmdhcmFnZUJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVWaWV3ID0gR0FSQUdFO1xuICAgIGdhcmFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHdpbm5lcnNCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHVwZGF0ZVdpbm5lclZpZXdQYWdlQnV0dG9ucygnbW92ZSBvdXQnKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufSk7XG5wcmV2UGFnZUJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhY3RpdmVHYXJhZ2VQYWdlLS07XG4gICAgaWYgKGFjdGl2ZUdhcmFnZVBhZ2UgPT09IDEpIHtcbiAgICAgICAgcHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgZ2FyYWdlUHJldlBhZ2VTdGF0ZSA9ICdkaXNhYmxlZCc7XG4gICAgfVxuICAgIGlmIChhY3RpdmVHYXJhZ2VQYWdlID09PSBNYXRoLmNlaWwoY2Fyc0luR2FyYWdlIC8gNykgLSAxKSB7XG4gICAgICAgIG5leHRQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZ2FyYWdlTmV4dFBhZ2VTdGF0ZSA9ICdlbmFibGVkJztcbiAgICB9XG4gICAgdXBkYXRlR2FyYWdlVGl0bGUoKTtcbiAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbn0pO1xubmV4dFBhZ2VCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlR2FyYWdlUGFnZSsrO1xuICAgIGlmIChhY3RpdmVHYXJhZ2VQYWdlID09PSAyKSB7XG4gICAgICAgIHByZXZQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgZ2FyYWdlUHJldlBhZ2VTdGF0ZSA9ICdlbmFibGVkJztcbiAgICB9XG4gICAgaWYgKGFjdGl2ZUdhcmFnZVBhZ2UgPT09IE1hdGguY2VpbChjYXJzSW5HYXJhZ2UgLyA3KSkge1xuICAgICAgICBuZXh0UGFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICBnYXJhZ2VOZXh0UGFnZVN0YXRlID0gJ2Rpc2FibGVkJztcbiAgICB9XG4gICAgdXBkYXRlR2FyYWdlVGl0bGUoKTtcbiAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=