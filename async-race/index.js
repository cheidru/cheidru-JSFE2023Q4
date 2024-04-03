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
/* harmony export */   runCar: () => (/* binding */ runCar)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");

const carRace = {
    distance: 0,
    velocity: 0,
};
function runCar(carID, animationData, carRace) {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.startEngine)(carID)
        .then((data) => data.json())
        .then((data) => {
        carRace = data;
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.driveCar)(carID);
    })
        .then(() => animatedRace(carID, animationData, carRace));
}
function animatedRace(carID, animationData, carRace) {
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
        if (!done) {
            requestAnimationFrame(carRunning);
        }
    }
    console.log('animatedRace started', carID, animationData);
}
// const animationStartData: object = {
//   trackLength: trackWrapper.offsetWidth,
//   startPosition: thisCarIMG.offsetLeft,
//   startCarFrontPosition: thisCarIMG.offsetLeft + thisCarIMG.offsetWidth,
//   carObject: thisCarIMG,


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
    _garage_ui__WEBPACK_IMPORTED_MODULE_0__.raceBTN.addEventListener('click', () => { });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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cUVBQXFCO0FBQ3pCLElBQUksb0VBQW9CO0FBQ3hCLENBQUM7QUFDRCwyREFBVztBQUNYO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQSx1Q0FBdUMsc0VBQVk7QUFDbkQsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0EsSUFBSSwrRUFBaUI7QUFDckIsSUFBSSx3RUFBYztBQUNsQixJQUFJLDBFQUFlO0FBQ25CLENBQUM7QUFDRCwyREFBVztBQUNYO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQSx1Q0FBdUMsc0VBQVk7QUFDbkQsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0EsSUFBSSwrRUFBaUI7QUFDckIsSUFBSSx3RUFBYztBQUNsQixJQUFJLDBFQUFlO0FBQ25CLENBQUM7Ozs7Ozs7VUN4RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvY2Fycy9jYXJzLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NhcnMvcmFjZS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZS11aS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMvd2lubmVycy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1ib2R5LWJnLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XHJcbiAgLS1ib2R5LWNvbG9yOiBiaXNxdWU7XHJcbiAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xyXG4gIC0tdHJhbnNpdGlvbi10aW1lOiAwLjhzO1xyXG4gIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xyXG4gIC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgLS1jb21tb24tdGl0bGUtY29sb3I6IHJnYigxOTAsIDIxNCwgMjMwKTtcclxuICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XHJcbiAgLS1yYWNlLWJ0bi1iZy1jb2xvcjogI2UyZjliNjtcclxuICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNtYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNzdGFnZS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNzdGFnZS1idG4td3JhcHBlcixcclxuI3BhZ2UtYnRuLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tb24tYnRuIHtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLmNvbW1vbi1idG46aG92ZXI6bm90KC5jb21tb24tYnRuOmRpc2FibGVkKSB7XHJcbiAgZm9udC1zaXplOiAxLjAxcmVtO1xyXG59XHJcblxyXG4uY29tbW9uLWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiNjb250ZW50LXdyYXBwZXIgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxuICBjb2xvcjogdmFyKC0tY2FyLWJ0bi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi50aXRsZS13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGFnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wYWdlLW51bS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1jb250cm9scyB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuI3JhY2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNyYWNlLXdyYXBwZXIgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhci1saXN0LXR4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgZmxleDogMSAxIDE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyLWxpc3QtdHh0OmZvY3VzLXdpdGhpbiB7XHJcbiAgY29sb3I6IHZhcigtLWlucHV0LWZvY3VzLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1wYWxldHRlIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDEuNHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXItbGlzdC1idG4ge1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogMS42cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aXMoI3JhY2Utd3JhcHBlcikgLmNhci1saXN0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcclxufVxyXG5cclxuLmNhci1saXN0LWJ0bjpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMC4ycmVtXHJcbn1cclxuXHJcbi5jYXItbmFtZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udHJhY2std3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDJweCB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5jYXItaW1nIHtcclxuICB3aWR0aDogM3JlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxhZy1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5jYXItYnRuIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2UtYnRuLWJnLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXItYnRuLWJvcmRlci1yYWRpdXMpO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuLCAuc3RvcC1idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkLWJ0biB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiN3aW5uZXJzLWxpc3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59XHJcblxyXG4jd2lubmVycy1saXN0IHRoLFxyXG4jd2lubmVycy1saXN0IHRkIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuI3dpbm5lcnMtbGlzdC1maXJzdC1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLndpbm5lcnMtaGVhZGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tYm9keS1iZy1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcclxcbiAgLS1ib2R5LWNvbG9yOiBiaXNxdWU7XFxyXFxuICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDQsIDQ4LCA5NSk7XFxyXFxuICAtLXRyYW5zaXRpb24tdGltZTogMC44cztcXHJcXG4gIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xcclxcbiAgLS1jYXItYnRuLWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIC0tY29tbW9uLXRpdGxlLWNvbG9yOiByZ2IoMTkwLCAyMTQsIDIzMCk7XFxyXFxuICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAtLWlucHV0LWZvY3VzLWNvbG9yOiBibGFjaztcXHJcXG4gIC0tcmFjZS1idG4tYmctY29sb3I6ICNlMmY5YjY7XFxyXFxuICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4td3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhZ2Utd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNzdGFnZS1idG4td3JhcHBlcixcXHJcXG4jcGFnZS1idG4td3JhcHBlciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tb24tYnRuIHtcXHJcXG4gIHdpZHRoOiA3cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC43cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1vbi1idG46aG92ZXI6bm90KC5jb21tb24tYnRuOmRpc2FibGVkKSB7XFxyXFxuICBmb250LXNpemU6IDEuMDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tb24tYnRuOmRpc2FibGVkIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGN1cnNvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY2FyLWJ0bi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGFnZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1udW0tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0LWNvbnRyb2xzIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2Utd3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2Utd3JhcHBlciBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC10eHQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gIGZsZXg6IDEgMSAxO1xcclxcbiAgY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xcclxcbiAgb3V0bGluZTpub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC10eHQ6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1wYWxldHRlIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXItbGlzdC1idG4ge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhci1idG4tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbjppcygjcmFjZS13cmFwcGVyKSAuY2FyLWxpc3QtYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0LWJ0bjpob3ZlciB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjJyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1uYW1lIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYWNrLXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCAycHggdmFyKC0taW5wdXQtZm9jdXMtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWltZyB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhZy1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDNyZW07XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmFjZS1idG4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyLWJ0bi1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0biwgLnN0b3AtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkLWJ0biB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVycy1saXN0IHRoLFxcclxcbiN3aW5uZXJzLWxpc3QgdGQge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbiN3aW5uZXJzLWxpc3QtZmlyc3Qtcm93IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2lubmVycy1oZWFkZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1oZWFkZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IHNlcnZlclVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPbmVDYXIoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2dhcmFnZS8nICsgY2FySUQpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnNOdW1iZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UnICsgJz9fbGltaXQ9MScpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0NhcihjYXJPYmopIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FyICcsIGNhck9iaiwgJyBhZGRlZCcpO1xuICAgICAgICB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2dhcmFnZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJPYmopLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXIoY2FyT2JqLCBjYXJJRCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvZ2FyYWdlLycgKyBjYXJJRCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyT2JqKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FyKGNhcklEKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9nYXJhZ2UvJyArIGNhcklELCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVycygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL3dpbm5lcnMnKTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5uZXJzTnVtYmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHlpZWxkIGZldGNoKHNlcnZlclVSTCArICcvd2lubmVycycgKyAnP19saW1pdD0xJyk7XG4gICAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFbmdpbmUoY2FySUQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB5aWVsZCBmZXRjaChzZXJ2ZXJVUkwgKyAnL2VuZ2luZS8/aWQ9JyArIGNhcklEICsgJyZzdGF0dXM9c3RhcnRlZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydEVuZ2luZSByZXMgPSAnLCBhbnN3ZXIpO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyaXZlQ2FyKGNhcklEKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgZmV0Y2goc2VydmVyVVJMICsgJy9lbmdpbmUvP2lkPScgKyBjYXJJRCArICcmc3RhdHVzPWRyaXZlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFhbnN3ZXIub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcml2ZUNhciByZXMgZXJyb3IgPSAnLCBhbnN3ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RyaXZlQ2FyIHJlcyBvayA9ICcsIGFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCB3aW5uZXJMaXN0ID0gW107XG4iLCJpbXBvcnQgeyBjYXJMaXN0V3JhcHBlciB9IGZyb20gJy4uL2dhcmFnZS9nYXJhZ2UtdWknO1xuaW1wb3J0IHsgYWN0aXZlR2FyYWdlUGFnZSB9IGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCB7IHNldE5hbWVBbmRDb2xvciwgZGVsZXRlQ2FyIH0gZnJvbSAnLi4vZ2FyYWdlL2dhcmFnZSc7XG5pbXBvcnQgeyBjcmVhdGVDYXJJbWFnZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBydW5DYXIsIGNhclJhY2UgfSBmcm9tICcuL3JhY2UnO1xuZXhwb3J0IGxldCBzZWxlY3RlZENhcklEID0gMDtcbmxldCBzZWxlY3RlZENhck5hbWUgPSAnJztcbmxldCBzZWxlY3RlZENhckNvbG9yID0gJyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FycyhjYXJzQXJyYXkpIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gKGFjdGl2ZUdhcmFnZVBhZ2UgLSAxKSAqIDc7XG4gICAgY29uc3Qgc3RvcEluZGV4ID0gc3RhcnRJbmRleCArIDcgPiBjYXJzQXJyYXkubGVuZ3RoID8gY2Fyc0FycmF5Lmxlbmd0aCA6IHN0YXJ0SW5kZXggKyA3O1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgc3RvcEluZGV4OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyLW5vLSR7aSArIDF9YCk7XG4gICAgICAgIGNvbnN0IGNhck9iaiA9IGNhcnNBcnJheVtpXTtcbiAgICAgICAgY2FyTGlzdFdyYXBwZXIuYXBwZW5kKGNhcldyYXBwZXIpO1xuICAgICAgICBhZGRCdXR0b25zQW5kVHJhY2soY2FyV3JhcHBlciwgY2FyT2JqKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRCdXR0b25zQW5kVHJhY2socGFyZW50RWxlbWVudCwgY2FyT2JqKSB7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXdyYXBwZXInKTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgICBjb25zdCBzZWxlY3RDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWxlY3RDYXJCVE4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0LWJ0bicpO1xuICAgIHNlbGVjdENhckJUTi50ZXh0Q29udGVudCA9ICdTZWxlY3QnO1xuICAgIHNlbGVjdENhckJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2FySUQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhci1uby0ke3NlbGVjdGVkQ2FySUR9YCk7XG4gICAgICAgICAgICBpZiAoZWxlbSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoNTcsIDU3LCA1NyknO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdGVkQ2FySUQgPSBOdW1iZXIoY2FyT2JqLmlkKTtcbiAgICAgICAgc2VsZWN0ZWRDYXJOYW1lID0gY2FyT2JqLm5hbWU7XG4gICAgICAgIHNlbGVjdGVkQ2FyQ29sb3IgPSBjYXJPYmouY29sb3I7XG4gICAgICAgIHNldE5hbWVBbmRDb2xvcihzZWxlY3RlZENhck5hbWUsIHNlbGVjdGVkQ2FyQ29sb3IpO1xuICAgICAgICBwYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoODQsIDgzLCA4MyknO1xuICAgIH0pO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKHNlbGVjdENhckJUTik7XG4gICAgY29uc3QgcmVtb3ZlQ2FyQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQ2FyQlROLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1idG4nKTtcbiAgICByZW1vdmVDYXJCVE4udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICByZW1vdmVDYXJCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkQ2FySUQgPSBOdW1iZXIoY2FyT2JqLmlkKTtcbiAgICAgICAgZGVsZXRlQ2FyKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmQocmVtb3ZlQ2FyQlROKTtcbiAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXItbmFtZScpO1xuICAgIGNhck5hbWUudGV4dENvbnRlbnQgPSBjYXJPYmoubmFtZTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZChjYXJOYW1lKTtcbiAgICBhZGRUcmFjayhwYXJlbnRFbGVtZW50LCBjYXJPYmopO1xufVxuZnVuY3Rpb24gYWRkVHJhY2socGFyZW50RWxlbWVudCwgY2FyT2JqKSB7XG4gICAgY29uc3QgdHJhY2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RyYWNrLXdyYXBwZXInKTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZCh0cmFja1dyYXBwZXIpO1xuICAgIGNvbnN0IHN0YXJ0Q2FyQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhcnRDYXJCVE4uY2xhc3NMaXN0LmFkZCgnY2FyLWJ0bicpO1xuICAgIHN0YXJ0Q2FyQlROLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ0bicpO1xuICAgIHN0YXJ0Q2FyQlROLnRleHRDb250ZW50ID0gJ0EnO1xuICAgIHRyYWNrV3JhcHBlci5hcHBlbmQoc3RhcnRDYXJCVE4pO1xuICAgIHN0YXJ0Q2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydENhckJUTi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idG4nKTtcbiAgICAgICAgc3RvcENhckJUTi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC1idG4nKTtcbiAgICAgICAgaWYgKGNhck9iai5pZCkge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uU3RhcnREYXRhID0ge1xuICAgICAgICAgICAgICAgIHRyYWNrTGVuZ3RoOiB0cmFja1dyYXBwZXIub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbjogdGhpc0NhcklNRy5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2FyRnJvbnRQb3NpdGlvbjogdGhpc0NhcklNRy5vZmZzZXRMZWZ0ICsgdGhpc0NhcklNRy5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBjYXJPYmplY3Q6IHRoaXNDYXJJTUcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcnVuQ2FyKGNhck9iai5pZCwgYW5pbWF0aW9uU3RhcnREYXRhLCBjYXJSYWNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHN0b3BDYXJCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9wQ2FyQlROLmNsYXNzTGlzdC5hZGQoJ2Nhci1idG4nKTtcbiAgICBzdG9wQ2FyQlROLmNsYXNzTGlzdC5hZGQoJ3N0b3AtYnRuJyk7XG4gICAgc3RvcENhckJUTi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idG4nKTtcbiAgICBzdG9wQ2FyQlROLnRleHRDb250ZW50ID0gJ0InO1xuICAgIHRyYWNrV3JhcHBlci5hcHBlbmQoc3RvcENhckJUTik7XG4gICAgY29uc3QgdGhpc0NhcklNRyA9IGNyZWF0ZUNhckltYWdlKGNhck9iaik7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZCh0aGlzQ2FySU1HKTtcbiAgICBjb25zdCBmbGFnSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmxhZ0lNRy5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAtMiAzNjYuMDM2NzkgMzY2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZmxhZy1pbWdcIj5cbiAgPHBhdGggZD1cIm0zNjQuNjk5MjE5IDE3Ny44MjQyMTktNzAuMzAwNzgxLTE0Ni4wMjM0MzhjLTMuMTIxMDk0LTYuNTAzOTA2LTEwLjc1LTkuNDcyNjU2LTE3LjUwNzgxMy02LjkxNDA2Mi05Ljg4MjgxMyAzLjUzNTE1Ni0xOC4wNzQyMTkgNS42ODM1OTMtMjUuODU1NDY5IDYuNzU3ODEyLTIyLjA3MDMxMiAzLjAyMzQzOC00NS42MjEwOTQtMS42MzY3MTktNjYuMzA0Njg3LTEzLjEwNTQ2OS0yNS45MDYyNS0xNC44OTg0MzctNTUuMjk2ODc1LTIwLjk5MjE4Ny04NS4wNDI5NjktMTcuNjEzMjgxLTI1LjkxMDE1NiAyLjkxNzk2OS00OS45NzI2NTYgMTIuODAwNzgxLTcwLjE5NTMxMiAyOC43MjI2NTdsLTMuNjg3NS03LjY3OTY4OGMtLjIwMzEyNi0uNDYwOTM4LS40NjA5MzgtLjg3MTA5NC0uNzY5NTMyLTEuMjI2NTYyLjU2NjQwNi0xLjQzMzU5NC44NzEwOTQtMy4wMjM0MzguODcxMDk0LTQuNzEwOTM4IDAtNy4xMTcxODgtNS43ODUxNTYtMTIuOTUzMTI1LTEyLjk1MzEyNS0xMi45NTMxMjUtNy4xMTcxODcgMC0xMi45NTMxMjUgNS43ODUxNTYtMTIuOTUzMTI1IDEyLjk1MzEyNSAwIDUuOTg4MjgxIDQuMDk3NjU2IDExLjA1ODU5NCA5LjYyNSAxMi40OTIxODguMTAxNTYyLjMwODU5My4yNTc4MTIuNjY0MDYyLjQxMDE1Ni45NzI2NTZsMTU3LjE4MzU5NCAzMjYuODA4NTk0YzEuNDg0Mzc1IDMuMTI1IDQuNjA5Mzc1IDQuOTE3OTY4IDcuODM1OTM4IDQuOTE3OTY4IDEuMjc3MzQzIDAgMi41NTg1OTMtLjI1NzgxMiAzLjc4NTE1Ni0uODcxMDk0IDQuMzU1NDY4LTIuMTAxNTYyIDYuMTQ0NTMxLTcuMjczNDM3IDQuMDk3NjU2LTExLjYyNWwtNzEuMDY2NDA2LTE0Ny42MDkzNzRjMzkuMDY2NDA2LTMyLjQ2MDkzOCA5My45MDIzNDQtMzcuMzI0MjE5IDEzOC4zOTQ1MzEtMTEuNjcxODc2IDE2LjAyNzM0NCA5LjE2NDA2MyAzNC4yNTM5MDYgMTQuNjk1MzEzIDUyLjY4MzU5NCAxNS45NzI2NTcgMi43NjU2MjUuMjA3MDMxIDUuNDgwNDY5LjI1NzgxMiA4LjI0NjA5My4yNTc4MTIgMTUuNzE0ODQ0IDAgMzEuNTM5MDYzLTMuMDE5NTMxIDQ2LjA3ODEyNi04LjkxMDE1NiAzLjU4NTkzNy0xLjQzMzU5NCA2LjM5ODQzNy00LjM1MTU2MyA3Ljc4MTI1LTcuODgyODEzIDEuNDMzNTkzLTMuNjM2NzE4IDEuMjgxMjUtNy42Nzk2ODctLjM1NTQ2OS0xMS4wNTg1OTN6bS01NS41MDM5MDcgMTAuNDk2MDkzLTIyLjM3MTA5My00Ny4wMDM5MDZjMS4yMjY1NjIuMDUwNzgyIDIuNDU3MDMxLjA1MDc4MiAzLjY4MzU5My4wNTA3ODIgMTEuNzc3MzQ0IDAgMjMuNTU0Njg4LTEuODQzNzUgMzQuNzY1NjI2LTUuMzc1bDIyLjExNzE4NyA0NS45MjU3ODFjLTEyLjQ0MTQwNiA0LjUwNzgxMi0yNS4zNDM3NSA2LjY1NjI1LTM4LjE5NTMxMyA2LjQwMjM0M3ptLTEwNy4wNTg1OTMtMzItMjIuMzc1LTQ2Ljk1MzEyNGMxOC40ODQzNzUgMS41ODk4NDMgMzYuODEyNSA3LjExNzE4NyA1My42NjAxNTYgMTYuNzkyOTY4LjM1NTQ2OS4yMDcwMzIuNjY0MDYzLjM1OTM3NSAxLjAyMzQzNy41NjY0MDZsMjIuMDY2NDA3IDQ2LjIzMDQ2OWMtMTctOS4zMTY0MDYtMzUuNDI5Njg4LTE0Ljk0OTIxOS01NC4zNzUtMTYuNjM2NzE5em0tMTAwLjg2MzI4MS05MS4yNDIxODdjMTYuOTQ5MjE4LTUuOTM3NSAzNS4wMTk1MzEtOC4yOTI5NjkgNTIuODkwNjI0LTYuOTEwMTU2bDIzLjg1OTM3NiA1MC4wMjM0MzdjLTE3LjkyMTg3Ni0xLjI4MTI1LTM1Ljg5MDYyNiAxLjEyNS01Mi44Mzk4NDQgNy4wNjY0MDZ6bTc0Ljg1NTQ2OC0zMS4zODI4MTNzLjA1MDc4MiAwIC4wNTA3ODIuMDUwNzgyYzAgMCAuMDUwNzgxLjA1MDc4MS4wNTA3ODEuMDUwNzgxIDUuNzM0Mzc1IDMuMTc1NzgxIDExLjY3MTg3NSA1Ljg4NjcxOSAxNy43MTQ4NDMgOC4xNDA2MjVsMTUuMzA4NTk0IDMyLjE1MjM0NGMtMTcuMTAxNTYyLTkuODI4MTI1LTM1LjY4NzUtMTUuMzU5Mzc1LTU0LjQyNTc4MS0xNi44OTQ1MzJsLTE4LjA3NDIxOS0zNy45Mzc1YzEzLjU3MDMxMyAyLjQ1NzAzMiAyNi44ODI4MTMgNy4yNjk1MzIgMzkuMzc1IDE0LjQzNzV6bTM1LjQ4MDQ2OSA0Mi44MDA3ODJjMTQuMjg1MTU2IDcuNjc5Njg3IDMwLjMxMjUgMTIuMzM5ODQ0IDQ2LjU0Mjk2OSAxMy40MTQwNjIgMS4wMjM0MzcuMDU0Njg4IDIuMDk3NjU2LjEwNTQ2OSAzLjEyMTA5NC4xNTYyNWwyMy45MTAxNTYgNTAuMTc1NzgyYy0xNy4yNTM5MDYtLjgyMDMxMy0zNC4zNTU0NjktNS42MzI4MTMtNDkuOTcyNjU2LTE0LjMzNTkzOHptNDEuNzI2NTYzLTI3LjU5Mzc1YzguMjk2ODc0LTEuMTI4OTA2IDE2Ljg0NzY1Ni0zLjI3NzM0NCAyNi43NzczNDMtNi43MDcwMzJsMjAuMDc0MjE5IDQxLjcyNjU2M2MtMTIuNDk2MDk0IDMuOTkyMTg3LTI1LjM5ODQzOCA1LjczNDM3NS0zOC4xOTUzMTIgNS4yNzM0MzdsLTE4Ljc5Mjk2OS0zOS4zNzEwOTNjMy40Mjk2ODctLjE1NjI1IDYuODA4NTkzLS40NjA5MzggMTAuMTM2NzE5LS45MjE4NzV6bS0xNzMuNDY0ODQ0LTI2LjM3MTA5NCAyMC4wMTk1MzEgNDEuOTMzNTk0Yy0xNS4xMDE1NjMgNS40Mjk2ODctMjkuMzM1OTM3IDEzLjY3MTg3NS00MS44ODI4MTMgMjQuNjI4OTA2bC0yMC44MzU5MzctNDMuMzY3MTg4YzEyLjgwMDc4MS0xMC42OTkyMTggMjcuMzM5ODQ0LTE4LjQ4NDM3NCA0Mi42OTkyMTktMjMuMTk1MzEyem0zLjEyNSAxMTguNTgyMDMxYzEyLjQ0MTQwNi0xMC45NTcwMzEgMjYuNjI1LTE5LjE0ODQzNyA0MS42NzU3ODEtMjQuNTc4MTI1bDIxLjkxNDA2MyA0NS45MjU3ODJjLTE1LjM1OTM3NiA0LjkxNzk2OC0yOS42OTUzMTMgMTIuNTQ2ODc0LTQyLjQ5NjA5NCAyMi41MzEyNXptMCAwXCIgZmlsbD1cIiMwMDAwMDBcIiBzdHlsZT1cImZpbGw6IHJnYigyMzcsIDEyLCAxMik7XCI+PC9wYXRoPjwvc3ZnPmA7XG4gICAgZmxhZ0lNRy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnJyk7XG4gICAgdHJhY2tXcmFwcGVyLmFwcGVuZChmbGFnSU1HKTtcbn1cbiIsImltcG9ydCB7IHN0YXJ0RW5naW5lLCBkcml2ZUNhciB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuZXhwb3J0IGNvbnN0IGNhclJhY2UgPSB7XG4gICAgZGlzdGFuY2U6IDAsXG4gICAgdmVsb2NpdHk6IDAsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkNhcihjYXJJRCwgYW5pbWF0aW9uRGF0YSwgY2FyUmFjZSkge1xuICAgIHN0YXJ0RW5naW5lKGNhcklEKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNhclJhY2UgPSBkYXRhO1xuICAgICAgICBkcml2ZUNhcihjYXJJRCk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gYW5pbWF0ZWRSYWNlKGNhcklELCBhbmltYXRpb25EYXRhLCBjYXJSYWNlKSk7XG59XG5mdW5jdGlvbiBhbmltYXRlZFJhY2UoY2FySUQsIGFuaW1hdGlvbkRhdGEsIGNhclJhY2UpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FyUnVubmluZyk7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgZWxhcHNlZERpc3RhbmNlID0gMDtcbiAgICBmdW5jdGlvbiBjYXJSdW5uaW5nKCkge1xuICAgICAgICAvLyBsZXQgc3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIGxldCAgcHJldmlvdXNUaW1lU3RhbXA7XG4gICAgICAgIC8vIEF2ZXJhZ2Ugc3BlZWQgMTAwIGFuZCBtb3ZlbWVudCByYXRlIDMwMCBweC9zZWMgd2l0aCA2MCByZW5kZXIvc2VjIGdpdmVzIDVweCBwZXIgdGljXG4gICAgICAgIGNvbnN0IHNwZWVkUmF0aW8gPSBjYXJSYWNlLnZlbG9jaXR5IC8gMTAwO1xuICAgICAgICBjb25zdCBjYXJTaGlmdFBpeFBlclRpYyA9IHNwZWVkUmF0aW8gKiA1O1xuICAgICAgICBlbGFwc2VkRGlzdGFuY2UgKz0gY2FyU2hpZnRQaXhQZXJUaWM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXJTaGlmdFBpeFBlclRpYyA9ICcsIGNhclNoaWZ0UGl4UGVyVGljLCAnZWxhcHNlZERpc3RhbmNlID0gJywgZWxhcHNlZERpc3RhbmNlKTtcbiAgICAgICAgaWYgKGVsYXBzZWREaXN0YW5jZSA+PSAxMjcwKVxuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIGFuaW1hdGlvbkRhdGEuY2FyT2JqZWN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7ZWxhcHNlZERpc3RhbmNlfXB4KWA7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhclJ1bm5pbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdhbmltYXRlZFJhY2Ugc3RhcnRlZCcsIGNhcklELCBhbmltYXRpb25EYXRhKTtcbn1cbi8vIGNvbnN0IGFuaW1hdGlvblN0YXJ0RGF0YTogb2JqZWN0ID0ge1xuLy8gICB0cmFja0xlbmd0aDogdHJhY2tXcmFwcGVyLm9mZnNldFdpZHRoLFxuLy8gICBzdGFydFBvc2l0aW9uOiB0aGlzQ2FySU1HLm9mZnNldExlZnQsXG4vLyAgIHN0YXJ0Q2FyRnJvbnRQb3NpdGlvbjogdGhpc0NhcklNRy5vZmZzZXRMZWZ0ICsgdGhpc0NhcklNRy5vZmZzZXRXaWR0aCxcbi8vICAgY2FyT2JqZWN0OiB0aGlzQ2FySU1HLFxuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuZXhwb3J0IGNvbnN0IGdhcmFnZUNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3Qgd2lubmVyc0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgZ2FyYWdlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgd2lubmVyc0JUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByZXZQYWdlQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbmV4dFBhZ2VCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tbW9uVUkoKSB7XG4gICAgbWFpbldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLXdyYXBwZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluV3JhcHBlcik7XG4gICAgY3JlYXRlVmlld1dyYXBwZXIoKTtcbiAgICBjcmVhdGVDb250ZW50V3JhcHBlcigpO1xuICAgIGNyZWF0ZVBhZ2VXcmFwcGVyKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVWaWV3V3JhcHBlcigpIHtcbiAgICBjb25zdCB2aWV3V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZXdXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhZ2Utd3JhcHBlcicpO1xuICAgIG1haW5XcmFwcGVyLmFwcGVuZCh2aWV3V3JhcHBlcik7XG4gICAgY29uc3Qgdmlld0JUTldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWV3QlROV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YWdlLWJ0bi13cmFwcGVyJyk7XG4gICAgdmlld1dyYXBwZXIuYXBwZW5kKHZpZXdCVE5XcmFwcGVyKTtcbiAgICBnYXJhZ2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdnYXJhZ2UtYnRuJyk7XG4gICAgZ2FyYWdlQlROLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1idG4nKTtcbiAgICBnYXJhZ2VCVE4udGV4dENvbnRlbnQgPSAnR2FyYWdlJztcbiAgICB2aWV3QlROV3JhcHBlci5hcHBlbmQoZ2FyYWdlQlROKTtcbiAgICB3aW5uZXJzQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1idG4nKTtcbiAgICB3aW5uZXJzQlROLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1idG4nKTtcbiAgICB3aW5uZXJzQlROLnRleHRDb250ZW50ID0gJ1dpbm5lcnMnO1xuICAgIHZpZXdCVE5XcmFwcGVyLmFwcGVuZCh3aW5uZXJzQlROKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRXcmFwcGVyKCkge1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FyYWdlLXdyYXBwZXInKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXdyYXBwZXInKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmQoZ2FyYWdlQ29udGVudFdyYXBwZXIpO1xuICAgIHdpbm5lcnNDb250ZW50V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtd3JhcHBlcicpO1xuICAgIHdpbm5lcnNDb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXdyYXBwZXInKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtYWluV3JhcHBlci5hcHBlbmQod2lubmVyc0NvbnRlbnRXcmFwcGVyKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VXcmFwcGVyKCkge1xuICAgIGNvbnN0IHBhZ2VCVE5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUJUTldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlLWJ0bi13cmFwcGVyJyk7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kKHBhZ2VCVE5XcmFwcGVyKTtcbiAgICBwcmV2UGFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYtcGctYnRuJyk7XG4gICAgcHJldlBhZ2VCVE4uY2xhc3NMaXN0LmFkZCgnY29tbW9uLWJ0bicpO1xuICAgIHByZXZQYWdlQlROLnRleHRDb250ZW50ID0gJ1ByZXYnO1xuICAgIHBhZ2VCVE5XcmFwcGVyLmFwcGVuZChwcmV2UGFnZUJUTik7XG4gICAgbmV4dFBhZ2VCVE4uc2V0QXR0cmlidXRlKCdpZCcsICduZXh0LXBnLWJ0bicpO1xuICAgIG5leHRQYWdlQlROLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1idG4nKTtcbiAgICBuZXh0UGFnZUJUTi50ZXh0Q29udGVudCA9ICdOZXh0JztcbiAgICBwYWdlQlROV3JhcHBlci5hcHBlbmQobmV4dFBhZ2VCVE4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhckltYWdlKGNhck9iaikge1xuICAgIGNvbnN0IGNhcklNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIGNhcklNRy5pbm5lckhUTUwgPSBgPHN2Z1xuICBmaWxsPVwiJHtjYXJPYmouY29sb3J9XCJcbiAgdmVyc2lvbj1cIjEuMVwiXG4gIGlkPVwiQ2FwYV8xXCJcbiAgeD1cIjBweFwiXG4gIHk9XCIwcHhcIlxuICBjbGFzcz1cImNhci1pbWdcIlxuICB2aWV3Qm94PVwiMCAwIDk4Ljc5NjM3NCAzOC4yOTIzMDZcIlxuICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gIHdpZHRoPVwiOTguNzk2MzcxXCJcbiAgaGVpZ2h0PVwiMzguMjkyMzA1XCJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIHhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnNcbiAgICBpZD1cImRlZnMxNVwiIC8+PGdcbiAgICBpZD1cImcxMFwiXG4gICAgdHJhbnNmb3JtPVwibWF0cml4KC0xLDAsMCwxLDk4Ljc5NzM3NCwtMzAuMjUxNjk0KVwiPjxnXG4gICAgICBpZD1cImc4XCI+PHBhdGhcbiAgICAgICAgZD1cIm0gMTUuNzk2LDUyLjkzNCBjIC00LjMxLDAgLTcuODA1LDMuNDkyIC03LjgwNSw3LjgwNCAwLDAuMzM0IDAuMDI3LDAuNjYgMC4wNjksMC45ODIgMC40ODMsMy44NDcgMy43NTksNi44MjQgNy43MzYsNi44MjQgNC4wODcsMCA3LjQzNCwtMy4xNDIgNy43NzMsLTcuMTQxIDAuMDE4LC0wLjIyMSAwLjAzNCwtMC40NCAwLjAzNCwtMC42NjcgMTBlLTQsLTQuMzA5IC0zLjQ5NCwtNy44MDIgLTcuODA3LC03LjgwMiB6IG0gLTMuOTA5LDQuODYzIDEuNTkzLDEuNTkzIGMgLTAuMTI0LDAuMjEzIC0wLjIyMSwwLjQ0MSAtMC4yODMsMC42ODcgaCAtMi4yNDUgYyAwLjExNywtMC44NTIgMC40NDQsLTEuNjI3IDAuOTM1LC0yLjI4IHogbSAtMC45NDIsMy42MyBoIDIuMjYgYyAwLjA2NCwwLjIzOSAwLjE1OCwwLjQ2OSAwLjI4MiwwLjY3NyBsIC0xLjU5NiwxLjU5NSBDIDExLjM5OSw2My4wNSAxMS4wNjQsNjIuMjczIDEwLjk0NSw2MS40MjcgWiBtIDQuMTc3LDQuMTYxIEMgMTQuMjc3LDY1LjQ3MSAxMy41MDgsNjUuMTQgMTIuODU4LDY0LjY0OSBsIDEuNTg3LC0xLjU4NyBjIDAuMjA4LDAuMTIyIDAuNDM4LDAuMjExIDAuNjc3LDAuMjczIHogbSAwLC03LjQ0NiBjIC0wLjI0NiwwLjA2MiAtMC40NzYsMC4xNjEgLTAuNjksMC4yODggbCAtMS41OSwtMS41OTEgYyAwLjY1MywtMC40OTYgMS40MjksLTAuODI1IDIuMjgsLTAuOTQzIHogbSAxLjM1MiwtMi4yNDYgYyAwLjg1MiwwLjExOCAxLjYyNywwLjQ0NyAyLjI4LDAuOTQ0IGwgLTEuNTksMS41OSBDIDE2Ljk1LDU4LjMwMyAxNi43Miw1OC4yMDQgMTYuNDc0LDU4LjE0MiBaIG0gMCw5LjY5MSB2IC0yLjI1MiBjIDAuMjQsLTAuMDYzIDAuNDY4LC0wLjE1MiAwLjY3NywtMC4yNzUgbCAxLjU4OCwxLjU4OSBjIC0wLjY1MSwwLjQ4OCAtMS40MjEsMC44MiAtMi4yNjUsMC45MzggeiBtIDMuMjM0LC0xLjg4MiAtMS42MDEsLTEuNjAzIGMgMC4xMjQsLTAuMjA5IDAuMjI3LC0wLjQzNCAwLjI5MSwtMC42NzYgaCAyLjI0MyBjIC0wLjEyLDAuODQ3IC0wLjQ0MSwxLjYyOSAtMC45MzMsMi4yNzkgeiBtIC0xLjMxLC0zLjYzIGMgLTAuMDYzLC0wLjI0NCAtMC4xNTksLTAuNDc0IC0wLjI4MywtMC42ODcgbCAxLjU5MywtMS41OTMgYyAwLjQ5MywwLjY1MyAwLjgxOCwxLjQyOSAwLjkzNSwyLjI3OCB6XCJcbiAgICAgICAgaWQ9XCJwYXRoMlwiIC8+PHBhdGhcbiAgICAgICAgZD1cIm0gODEuNTA1LDUyLjkzNCBjIC00LjMxLDAgLTcuODA1LDMuNDkyIC03LjgwNSw3LjgwNCAwLDAuMzM0IDAuMDI3LDAuNjYgMC4wNjksMC45ODIgMC40ODIsMy44NDcgMy43NTksNi44MjQgNy43MzUsNi44MjQgNC4wODcsMCA3LjQzNSwtMy4xNDIgNy43NzMsLTcuMTQxIDAuMDE4LC0wLjIyMSAwLjAzNCwtMC40NCAwLjAzNCwtMC42NjcgMC4wMDIsLTQuMzA5IC0zLjQ5MywtNy44MDIgLTcuODA2LC03LjgwMiB6IG0gLTMuOTEsNC44NjMgMS41OTQsMS41OTMgYyAtMC4xMjQsMC4yMTMgLTAuMjIyLDAuNDQxIC0wLjI4MywwLjY4NyBoIC0yLjI0NSBjIDAuMTE3LC0wLjg1MiAwLjQ0MywtMS42MjcgMC45MzQsLTIuMjggeiBtIC0wLjk0MSwzLjYzIGggMi4yNiBjIDAuMDY0LDAuMjM5IDAuMTU4LDAuNDY5IDAuMjgyLDAuNjc3IEwgNzcuNiw2My42OTggQyA3Ny4xMDksNjMuMDUgNzYuNzczLDYyLjI3MyA3Ni42NTQsNjEuNDI3IFogbSA0LjE3Nyw0LjE2MSBDIDc5Ljk4Niw2NS40NzEgNzkuMjE3LDY1LjE0IDc4LjU2Nyw2NC42NDkgbCAxLjU4NywtMS41ODcgYyAwLjIwOCwwLjEyMiAwLjQzOCwwLjIxMSAwLjY3NywwLjI3MyB6IG0gMCwtNy40NDYgYyAtMC4yNDYsMC4wNjIgLTAuNDc2LDAuMTYxIC0wLjY4OSwwLjI4OCBsIC0xLjU5MSwtMS41OTEgYyAwLjY1MywtMC40OTYgMS40MywtMC44MjUgMi4yOCwtMC45NDMgeiBtIDEuMzUxLC0yLjI0NiBjIDAuODUyLDAuMTE4IDEuNjI3LDAuNDQ3IDIuMjc5LDAuOTQ0IGwgLTEuNTksMS41OSBjIC0wLjIxNCwtMC4xMjcgLTAuNDQ0LC0wLjIyNiAtMC42ODksLTAuMjg4IHogbSAwLDkuNjkxIHYgLTIuMjUyIGMgMC4yMzksLTAuMDYzIDAuNDY4LC0wLjE1MiAwLjY3NywtMC4yNzUgbCAxLjU4OCwxLjU4OSBjIC0wLjY1MSwwLjQ4OCAtMS40MTksMC44MiAtMi4yNjUsMC45MzggeiBtIDMuMjM0LC0xLjg4MiAtMS42MDEsLTEuNjAzIGMgMC4xMjQsLTAuMjA5IDAuMjI3LC0wLjQzNCAwLjI5MSwtMC42NzYgaCAyLjI0MyBjIC0wLjEyLDAuODQ3IC0wLjQzOSwxLjYyOSAtMC45MzMsMi4yNzkgeiBtIC0xLjMwOCwtMy42MyBjIC0wLjA2MywtMC4yNDQgLTAuMTU5LC0wLjQ3NCAtMC4yODMsLTAuNjg3IGwgMS41OTMsLTEuNTkzIGMgMC40OTMsMC42NTMgMC44MTgsMS40MjkgMC45MzYsMi4yNzggelwiXG4gICAgICAgIGlkPVwicGF0aDRcIiAvPjxwYXRoXG4gICAgICAgIGQ9XCJtIDk4LjEyNSw1MC40NTEgLTEuNSwtMS40MzMgMC4wMDMsLTQuNTIxIEMgOTYuNjI5LDQzLjMxIDk2LjE5LDQyLjE2NiA5NS4zOTUsNDEuMjg2IEwgODkuODUsMzUuMTQ1IFYgMzUuMTQyIEMgODkuODIzLDMzLjg2NiA4OC45MDcsMzIuNzg4IDg3LjY1MywzMi41NTMgODEuMDYsMzEuMzE0IDYwLjYwNCwyOC4xMTEgNDQuNDEzLDMyLjQ2MSAzNC40MSwzNS4xNDggMjQuMjQsNDAuNTU3IDI0LjI0LDQwLjU1NyBjIDAsMCAtMTcuNjYsMi4yNSAtMjEuODkyLDcuNzY2IC0xLjQ3NCwxLjkyIC0yLjA5Miw0LjQ0MiAtMi4zMTYsNi43MTQgLTAuMzEzLDMuMTc1IDEuNzc1LDYuMDc0IDQuODg2LDYuNzc1IEwgNi41NTEsNjIuMTggQyA2LjUzNyw2Mi4wOTEgNi41MTYsNjIuMDA0IDYuNTA1LDYxLjkxMiA2LjQ1MSw2MS40OTYgNi40MjQsNjEuMTA4IDYuNDI0LDYwLjczNSBjIDAsLTUuMTY5IDQuMjA2LC05LjM3NCA5LjM3NSwtOS4zNzQgNS4xNywwIDkuMzc2LDQuMjA1IDkuMzc2LDkuMzc0IDAsMC4yNzEgLTAuMDE4LDAuNTMzIC0wLjA0LDAuNzk4IC0wLjAyNywwLjMxOSAtMC4wNzIsMC42MzMgLTAuMTMxLDAuOTQxIGwgNDcuMzIzLDAuMDk2IGMgLTAuMDQzLC0wLjIxOCAtMC4wODYsLTAuNDM1IC0wLjExNCwtMC42NTggLTAuMDU0LC0wLjQxNiAtMC4wODEsLTAuODA0IC0wLjA4MSwtMS4xNzcgMCwtNS4xNjkgNC4yMDYsLTkuMzc0IDkuMzc1LC05LjM3NCA1LjE3LDAgOS4zNzYsNC4yMDUgOS4zNzYsOS4zNzQgMCwwLjI3MSAtMC4wMTgsMC41MzMgLTAuMDQsMC43OTggLTAuMDMsMC4zNjUgLTAuMDksMC43MjMgLTAuMTYyLDEuMDc0IGwgMC42NDYsMTBlLTQgMi42OTIsLTEuNDc1IGMgMi44MDgsLTEuNTM3IDQuNjAyLC00LjQzOCA0LjcyMywtNy42MzYgbCAwLjA1NCwtMS4zOTkgQyA5OC44MTgsNTEuNDggOTguNTc1LDUwLjg4MiA5OC4xMjUsNTAuNDUxIFogTSAzMy41NDMsNDEuMTkzIDM0LjI2NywzOC4zIGMgMCwwIDEwLjk2MSwtNS43MzQgMjkuMzA2LC01LjExIHYgOC41NDkgbCAtMjkuMzgxLDIuMzE4IGMgMCwwIDAuMTU4LC0xLjgzNCAtMC42NDksLTIuODY0IHogbSA0Ny4wNzgsLTAuNzk4IC0xMy44MTUsMS4wOSBWIDMzLjM3IGMgNC41NDMsMC4zMyA5LjQ4LDEuMDQ3IDE0Ljc3OSwyLjMyNyAwLjUzNiwwLjEyOSAwLjk2NiwwLjUyNyAxLjEzNywxLjA1MSAwLjE3MiwwLjUyNCAwLjA2LDEuMSAtMC4yOTcsMS41MiB6XCJcbiAgICAgICAgaWQ9XCJwYXRoNlwiIC8+PC9nPjwvZz48L3N2Zz5gO1xuICAgIHJldHVybiBjYXJJTUc7XG59XG4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRDYXJzTnVtYmVyIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBnYXJhZ2VDb250ZW50V3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBhY3RpdmVHYXJhZ2VQYWdlLCB1bmxvY2tnYXJhZ2VOZXh0UGFnZSB9IGZyb20gJy4uLy4uL2luZGV4JztcbmV4cG9ydCBsZXQgY2Fyc0luR2FyYWdlO1xuZXhwb3J0IGNvbnN0IGFkZENhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhckJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHJhY2VCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCByZXNldEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2Fyc0JUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGNhckxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgYWRkQ2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5leHBvcnQgY29uc3QgYWRkQ2FyQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhckNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGdhcmFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBnYXJhZ2VQYWdlTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FyYWdlVUkoKSB7XG4gICAgY3JlYXRlR2FyYWdlVGl0bGUoKTtcbiAgICBjcmVhdGVBZGRDYXJNZW51KCk7XG4gICAgY3JlYXRlVXBkYXRlQ2FyTWVudSgpO1xuICAgIGNyZWF0ZVJhY2VSZXNldEdlbmVyYXRlTWVudSgpO1xuICAgIGNyZWF0ZUNhckxpc3QoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFkZENhck1lbnUoKSB7XG4gICAgY29uc3QgYWRkQ2FyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENhcldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLXdyYXBwZXInKTtcbiAgICBhZGRDYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LWNvbnRyb2xzJyk7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuYXBwZW5kKGFkZENhcldyYXBwZXIpO1xuICAgIGFkZENhck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtY2FyLW5hbWUnKTtcbiAgICBhZGRDYXJOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgYWRkQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2NhciBuYW1lJyk7XG4gICAgYWRkQ2FyTmFtZS5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC10eHQnKTtcbiAgICBhZGRDYXJXcmFwcGVyLmFwcGVuZChhZGRDYXJOYW1lKTtcbiAgICBhZGRDYXJDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1jYXItY29sb3InKTtcbiAgICBhZGRDYXJDb2xvci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICBhZGRDYXJDb2xvci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyM5YWU1YmUnKTtcbiAgICBhZGRDYXJDb2xvci5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1wYWxldHRlJyk7XG4gICAgYWRkQ2FyV3JhcHBlci5hcHBlbmQoYWRkQ2FyQ29sb3IpO1xuICAgIGFkZENhckJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1jYXItYnRuJyk7XG4gICAgYWRkQ2FyQlROLnRleHRDb250ZW50ID0gJ0NyZWF0ZSc7XG4gICAgYWRkQ2FyQlROLmNsYXNzTGlzdC5hZGQoJ2Nhci1saXN0LWJ0bicpO1xuICAgIGFkZENhcldyYXBwZXIuYXBwZW5kKGFkZENhckJUTik7XG59XG5mdW5jdGlvbiBjcmVhdGVVcGRhdGVDYXJNZW51KCkge1xuICAgIGNvbnN0IHVwZGF0ZUNhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1cGRhdGVDYXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci13cmFwcGVyJyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1jb250cm9scycpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZCh1cGRhdGVDYXJXcmFwcGVyKTtcbiAgICB1cGRhdGVDYXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBkYXRlLWNhci1uYW1lJyk7XG4gICAgdXBkYXRlQ2FyTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHVwZGF0ZUNhck5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjYXIgbmFtZScpO1xuICAgIHVwZGF0ZUNhck5hbWUuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtdHh0Jyk7XG4gICAgdXBkYXRlQ2FyV3JhcHBlci5hcHBlbmQodXBkYXRlQ2FyTmFtZSk7XG4gICAgdXBkYXRlQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsICd1cGRhdGUtY2FyLWNvbG9yJyk7XG4gICAgdXBkYXRlQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgdXBkYXRlQ2FyQ29sb3Iuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjOWFlNWJlJyk7XG4gICAgdXBkYXRlQ2FyQ29sb3IuY2xhc3NMaXN0LmFkZCgnY2FyLWxpc3QtcGFsZXR0ZScpO1xuICAgIHVwZGF0ZUNhcldyYXBwZXIuYXBwZW5kKHVwZGF0ZUNhckNvbG9yKTtcbiAgICB1cGRhdGVDYXJCVE4uc2V0QXR0cmlidXRlKCdpZCcsICd1cGRhdGUtY2FyLWJ0bicpO1xuICAgIHVwZGF0ZUNhckJUTi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuICAgIHVwZGF0ZUNhckJUTi5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1idG4nKTtcbiAgICB1cGRhdGVDYXJXcmFwcGVyLmFwcGVuZCh1cGRhdGVDYXJCVE4pO1xufVxuZnVuY3Rpb24gY3JlYXRlUmFjZVJlc2V0R2VuZXJhdGVNZW51KCkge1xuICAgIGNvbnN0IHJhY2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmFjZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdyYWNlLXdyYXBwZXInKTtcbiAgICByYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXItbGlzdC1jb250cm9scycpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZChyYWNlV3JhcHBlcik7XG4gICAgcmFjZUJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JhY2UtYnRuJyk7XG4gICAgcmFjZUJUTi50ZXh0Q29udGVudCA9ICdSYWNlJztcbiAgICByYWNlV3JhcHBlci5hcHBlbmQocmFjZUJUTik7XG4gICAgcmVzZXRCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdyZXNldC1idG4nKTtcbiAgICByZXNldEJUTi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gICAgcmFjZVdyYXBwZXIuYXBwZW5kKHJlc2V0QlROKTtcbiAgICBnZW5lcmF0ZUNhcnNCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdnZW5lcmF0ZS1jYXJzLWJ0bicpO1xuICAgIGdlbmVyYXRlQ2Fyc0JUTi50ZXh0Q29udGVudCA9ICdHZW5lcmF0ZSc7XG4gICAgcmFjZVdyYXBwZXIuYXBwZW5kKGdlbmVyYXRlQ2Fyc0JUTik7XG59XG5mdW5jdGlvbiBjcmVhdGVHYXJhZ2VUaXRsZSgpIHtcbiAgICBjb25zdCBnYXJhZ2VUaXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYXJhZ2VUaXRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtd3JhcHBlcicpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZChnYXJhZ2VUaXRsZVdyYXBwZXIpO1xuICAgIGdhcmFnZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FyYWdlLXRpdGxlJyk7XG4gICAgZ2FyYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtdGl0bGUnKTtcbiAgICBnYXJhZ2VUaXRsZVdyYXBwZXIuYXBwZW5kKGdhcmFnZVRpdGxlKTtcbiAgICBnYXJhZ2VQYWdlTnVtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FyYWdlLXBhZ2UnKTtcbiAgICBnYXJhZ2VQYWdlTnVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbnVtLXRpdGxlJyk7XG4gICAgZ2FyYWdlUGFnZU51bS50ZXh0Q29udGVudCA9ICdQYWdlICMxJztcbiAgICBnYXJhZ2VUaXRsZVdyYXBwZXIuYXBwZW5kKGdhcmFnZVBhZ2VOdW0pO1xuICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY2FyTGlzdFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjYXItbGlzdCcpO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLmFwcGVuZChjYXJMaXN0V3JhcHBlcik7XG59XG5mdW5jdGlvbiBjcmVhdGVDYXJMaXN0KCkge1xuICAgIGNhckxpc3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyLWxpc3QnKTtcbiAgICBnYXJhZ2VDb250ZW50V3JhcHBlci5hcHBlbmQoY2FyTGlzdFdyYXBwZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdhcmFnZVRpdGxlKCkge1xuICAgIGdldENhcnNOdW1iZXIoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5oZWFkZXJzLmdldCgneC10b3RhbC1jb3VudCcpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjYXJzSW5HYXJhZ2UgPSBOdW1iZXIoZGF0YSk7XG4gICAgICAgIGlmIChjYXJzSW5HYXJhZ2UgPiA2KVxuICAgICAgICAgICAgdW5sb2NrZ2FyYWdlTmV4dFBhZ2UoKTtcbiAgICAgICAgZ2FyYWdlVGl0bGUudGV4dENvbnRlbnQgPSBgR2FyYWdlICgke2NhcnNJbkdhcmFnZX0pYDtcbiAgICB9KTtcbiAgICBnYXJhZ2VQYWdlTnVtLnRleHRDb250ZW50ID0gYFBhZ2UgJHthY3RpdmVHYXJhZ2VQYWdlfWA7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGNyZWF0ZUdhcmFnZVVJIH0gZnJvbSAnLi9nYXJhZ2UtdWknO1xuaW1wb3J0IHsgYWRkQ2FyQlROLCB1cGRhdGVDYXJCVE4sIHJhY2VCVE4sIHJlc2V0QlROLCBnZW5lcmF0ZUNhcnNCVE4sIHVwZGF0ZUdhcmFnZVRpdGxlIH0gZnJvbSAnLi9nYXJhZ2UtdWknO1xuaW1wb3J0IHsgYWRkQ2FyTmFtZSwgYWRkQ2FyQ29sb3IsIHVwZGF0ZUNhck5hbWUsIHVwZGF0ZUNhckNvbG9yLCBjYXJMaXN0V3JhcHBlciB9IGZyb20gJy4vZ2FyYWdlLXVpJztcbmltcG9ydCB7IGNyZWF0ZUNhcnMsIHNlbGVjdGVkQ2FySUQgfSBmcm9tICcuLi9jYXJzL2NhcnMnO1xuaW1wb3J0IHsgZ2V0Q2FycywgYWRkTmV3Q2FyLCB1cGRhdGVDYXIsIHJlbW92ZUNhciB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhcmFnZSgpIHtcbiAgICBjcmVhdGVHYXJhZ2VVSSgpO1xuICAgIHBvcHVsYXRlQ2FyTGlzdCgpO1xuICAgIGFkZENhckJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE9uZUNhcik7XG4gICAgdXBkYXRlQ2FyQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlT25lQ2FyKTtcbiAgICByYWNlQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbiAgICByZXNldEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgfSk7XG4gICAgZ2VuZXJhdGVDYXJzQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQ2FyTG90KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUNhckxpc3QoKSB7XG4gICAgZ2V0Q2FycygpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY3JlYXRlQ2FycyhkYXRhKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZE9uZUNhcigpIHtcbiAgICBpZiAoYWRkQ2FyTmFtZS52YWx1ZSA9PT0gJycpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBuZXdDYXIgPSB7XG4gICAgICAgIG5hbWU6IGFkZENhck5hbWUudmFsdWUsXG4gICAgICAgIGNvbG9yOiBhZGRDYXJDb2xvci52YWx1ZSxcbiAgICB9O1xuICAgIGFkZE5ld0NhcihuZXdDYXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgICAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdWxhdGVDYXJMaXN0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVPbmVDYXIoKSB7XG4gICAgaWYgKHNlbGVjdGVkQ2FySUQgPT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCB1cGRhdGVkQ2FyID0ge1xuICAgICAgICBuYW1lOiB1cGRhdGVDYXJOYW1lLnZhbHVlLFxuICAgICAgICBjb2xvcjogdXBkYXRlQ2FyQ29sb3IudmFsdWUsXG4gICAgfTtcbiAgICB1cGRhdGVDYXIodXBkYXRlZENhciwgc2VsZWN0ZWRDYXJJRCkudGhlbigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgICAgIGNhckxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwb3B1bGF0ZUNhckxpc3QoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXIoKSB7XG4gICAgcmVtb3ZlQ2FyKHNlbGVjdGVkQ2FySUQpO1xuICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY2FyTGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcG9wdWxhdGVDYXJMaXN0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TmFtZUFuZENvbG9yKG5hbWUsIGNvbG9yKSB7XG4gICAgdXBkYXRlQ2FyTmFtZS52YWx1ZSA9IG5hbWU7XG4gICAgdXBkYXRlQ2FyQ29sb3IudmFsdWUgPSBjb2xvcjtcbn1cbmZ1bmN0aW9uIGFkZENhckxvdCgpIHtcbiAgICBnZW5lcmF0ZUNhckxvdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB1cGRhdGVHYXJhZ2VUaXRsZSgpO1xuICAgICAgICBjYXJMaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdWxhdGVDYXJMaXN0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNhckxvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBicmFuZE5vID0gcmFuZG9tTnVtKDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTm8gPSByYW5kb21OdW0oY2FyTW9kZWxbYnJhbmROb10ubW9kZWwubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjYXJNb2RlbFticmFuZE5vXS5icmFuZCArICcgJyArIGNhck1vZGVsW2JyYW5kTm9dLm1vZGVsW21vZGVsTm9dLFxuICAgICAgICAgICAgICAgIGNvbG9yOiByYW5kb21SR0JDb2xvcigpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZE5ld0NhcihuZXdDYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmFuZG9tTnVtKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuZnVuY3Rpb24gcmFuZG9tUkdCQ29sb3IoKSB7XG4gICAgY29uc3QgaGV4QXJyID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICAgIGxldCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2xvciArPSBoZXhBcnJbcmFuZG9tTnVtKDE2KV0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuY29uc3QgY2FyTW9kZWwgPSBbXG4gICAge1xuICAgICAgICBicmFuZDogJ1Rlc2xhJyxcbiAgICAgICAgbW9kZWw6IFsnUm9hZHN0ZXInLCAnTW9kZWwgUycsICdNb2RlbCBYJywgJ01vZGVsIDMnLCAnTW9kZWwgWSddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ0ZvcmQnLFxuICAgICAgICBtb2RlbDogW1xuICAgICAgICAgICAgJ0ZvY3VzJyxcbiAgICAgICAgICAgICdNb25kZW8nLFxuICAgICAgICAgICAgJ1RhdXJ1cycsXG4gICAgICAgICAgICAnTXVzdGFuZycsXG4gICAgICAgICAgICAnQnJvbmNvJyxcbiAgICAgICAgICAgICdFZGdlJyxcbiAgICAgICAgICAgICdFc2NhcGUnLFxuICAgICAgICAgICAgJ0t1Z2EnLFxuICAgICAgICAgICAgJ0V4cGxvcmVyJyxcbiAgICAgICAgICAgICdQdW1hJyxcbiAgICAgICAgICAgICdNYXZlcmljaycsXG4gICAgICAgICAgICAnRi0xNTAnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ01lcmNlZGVzJyxcbiAgICAgICAgbW9kZWw6IFtcbiAgICAgICAgICAgICdBLUNsYXNzJyxcbiAgICAgICAgICAgICdDLUNsYXNzJyxcbiAgICAgICAgICAgICdDTEEnLFxuICAgICAgICAgICAgJ0UtQ2xhc3MnLFxuICAgICAgICAgICAgJ1MtQ2xhc3MnLFxuICAgICAgICAgICAgJ0MtQ2xhc3MnLFxuICAgICAgICAgICAgJ0VRQScsXG4gICAgICAgICAgICAnRVFDJyxcbiAgICAgICAgICAgICdFUUUgU1VWJyxcbiAgICAgICAgICAgICdHLUNsYXNzJyxcbiAgICAgICAgICAgICdBTUcgT25lJyxcbiAgICAgICAgICAgICdDTEUnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ1ZvbGtzd2FnZW4nLFxuICAgICAgICBtb2RlbDogWydHb2xmJywgJ1BvbG8nLCAnQXJ0ZW9uJywgJ0JvcmEnLCAnSmV0dGEnLCAnTGF2aWRhJywgJ1Bhc3NhdCcsICdBdGxhcycsICdUYXlyb24nLCAnVGlndWFuJywgJ1RvdWFyZWcnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYnJhbmQ6ICdUb3lvdGEnLFxuICAgICAgICBtb2RlbDogW1xuICAgICAgICAgICAgJ0F2YWxvbicsXG4gICAgICAgICAgICAnQ2FtcnknLFxuICAgICAgICAgICAgJ0NlbnR1cnknLFxuICAgICAgICAgICAgJ0Nvcm9sbGEnLFxuICAgICAgICAgICAgJ0Nyb3duJyxcbiAgICAgICAgICAgICdNaXJhaScsXG4gICAgICAgICAgICAnUHJpdXMnLFxuICAgICAgICAgICAgJ1lhcmlzJyxcbiAgICAgICAgICAgICdBcXVhJyxcbiAgICAgICAgICAgICdWaXR6JyxcbiAgICAgICAgICAgICdGcm9udGxhbmRlcicsXG4gICAgICAgICAgICAnSGFycmllcicsXG4gICAgICAgICAgICAnUkFWNCcsXG4gICAgICAgICAgICAnTGFuZCBDcnVpc2VyJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYnJhbmQ6ICdCTVcnLFxuICAgICAgICBtb2RlbDogWydHcmFuIENvdXBlJywgJ1gxJywgJ1gyJywgJ1gzJywgJ1g2JywgJ1g3JywgJ2kzJywgJ2k0JywgJ2lYMicsICdpWDMnLCAnWjQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYnJhbmQ6ICdMYWRhJyxcbiAgICAgICAgbW9kZWw6IFtcbiAgICAgICAgICAgICdWZXN0YScsXG4gICAgICAgICAgICAnTGFyZ3VzJyxcbiAgICAgICAgICAgICdHcmFudGEnLFxuICAgICAgICAgICAgJ05pdmEgVHJhdmVsJyxcbiAgICAgICAgICAgICcyMTA1JyxcbiAgICAgICAgICAgICcyMTA3JyxcbiAgICAgICAgICAgICdTYW1hcmEnLFxuICAgICAgICAgICAgJ0thbGluYScsXG4gICAgICAgICAgICAnUHJpb3JhJyxcbiAgICAgICAgICAgICdYLVJheScsXG4gICAgICAgICAgICAnWC1Dcm9zcyA1JyxcbiAgICAgICAgICAgICcyMTAzJyxcbiAgICAgICAgICAgICcyMTAxJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYnJhbmQ6ICdIeXVuZGFpJyxcbiAgICAgICAgbW9kZWw6IFsnQXVyYScsICdFbGFudHJhJywgJ1NvbmF0YScsICdDcmV0YScsICdTYW50YSBGZScsICdUdWNzb24nLCAnUGFsaXNhZGUnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYnJhbmQ6ICdPcGVsJyxcbiAgICAgICAgbW9kZWw6IFsnQXN0cmEnLCAnQ29yc2EnLCAnTW9ra2EnLCAnWmFmaXJhJywgJ0NvbWJvJywgJ01hbnRhIEdTZSddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBicmFuZDogJ1ZvbHZvJyxcbiAgICAgICAgbW9kZWw6IFsnVjQwJywgJ1M3MCcsICdDNzAnLCAnUzgwJywgJ1hDOTAnLCAnWEM2MCcsICc3ODAnLCAnRVgzMCcsICdFTTkwJ10sXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb21tb25VSSwgd2lubmVyc0NvbnRlbnRXcmFwcGVyLCBjcmVhdGVDYXJJbWFnZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBnZXRXaW5uZXJzLCBnZXRXaW5uZXJzTnVtYmVyLCBnZXRPbmVDYXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcbmltcG9ydCB7IGFjdGl2ZVdpbm5lcnNQYWdlIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuZXhwb3J0IGNvbnN0IHdpbm5lcnNMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGxldCB3aW5uZXJzTGlzdGVkO1xuY29uc3Qgd2lubmVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB3aW5uZXJzUGFnZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgd2lubmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2lubmVycygpIHtcbiAgICBjcmVhdGVDb21tb25VSSgpO1xuICAgIGNyZWF0ZVdpbm5lcnNVSSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlV2lubmVyc1VJKCkge1xuICAgIGNyZWF0ZVdpbm5lcnNUaXRsZSgpO1xuICAgIGNyZWF0ZVdpbm5lcnNMaXN0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVXaW5uZXJzVGl0bGUoKSB7XG4gICAgY29uc3Qgd2lubmVyVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2lubmVyVGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXdyYXBwZXInKTtcbiAgICB3aW5uZXJzQ29udGVudFdyYXBwZXIuYXBwZW5kKHdpbm5lclRpdGxlV3JhcHBlcik7XG4gICAgd2lubmVyc1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy10aXRsZScpO1xuICAgIHdpbm5lcnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdGFnZS10aXRsZScpO1xuICAgIHdpbm5lclRpdGxlV3JhcHBlci5hcHBlbmQod2lubmVyc1RpdGxlKTtcbiAgICB3aW5uZXJzUGFnZU51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtcGFnZScpO1xuICAgIHdpbm5lcnNQYWdlTnVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbnVtLXRpdGxlJyk7XG4gICAgd2lubmVyc1BhZ2VOdW0udGV4dENvbnRlbnQgPSAnUGFnZSAjMSc7XG4gICAgd2lubmVyVGl0bGVXcmFwcGVyLmFwcGVuZCh3aW5uZXJzUGFnZU51bSk7XG4gICAgdXBkYXRlV2lubmVyc1RpdGxlKCk7XG4gICAgd2lubmVyc0xpc3RXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1saXN0Jyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLmFwcGVuZCh3aW5uZXJzTGlzdFdyYXBwZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcnNUaXRsZSgpIHtcbiAgICBnZXRXaW5uZXJzTnVtYmVyKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgd2lubmVyc0xpc3RlZCA9IE51bWJlcihkYXRhKTtcbiAgICAgICAgd2lubmVyc1RpdGxlLnRleHRDb250ZW50ID0gYFdpbm5lcnMgKCR7d2lubmVyc0xpc3RlZH0pYDtcbiAgICB9KTtcbiAgICB3aW5uZXJzUGFnZU51bS50ZXh0Q29udGVudCA9IGBQYWdlICR7YWN0aXZlV2lubmVyc1BhZ2V9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNMaXN0KCkge1xuICAgIGNyZWF0ZVdpbm5lcnNUYWJsZSgpO1xuICAgIHBvcHVsYXRlV2lubmVyc0xpc3QoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNUYWJsZSgpIHtcbiAgICB3aW5uZXJMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2lubmVycy1saXN0Jyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLmFwcGVuZCh3aW5uZXJMaXN0KTtcbiAgICBjb25zdCBsaXN0Rmlyc3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxpc3RGaXJzdFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbm5lcnMtbGlzdC1maXJzdC1yb3cnKTtcbiAgICB3aW5uZXJMaXN0LmFwcGVuZChsaXN0Rmlyc3RSb3cpO1xuICAgIGNvbnN0IGxpc3ROdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGxpc3ROdW0uY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBsaXN0TnVtLnRleHRDb250ZW50ID0gJ051bWJlcic7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChsaXN0TnVtKTtcbiAgICBjb25zdCBsaXN0Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBsaXN0Q2FyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcnMtaGVhZGVyJyk7XG4gICAgbGlzdENhci50ZXh0Q29udGVudCA9ICdDYXInO1xuICAgIGxpc3RGaXJzdFJvdy5hcHBlbmQobGlzdENhcik7XG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY2FyTmFtZS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLWhlYWRlcicpO1xuICAgIGNhck5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgbGlzdEZpcnN0Um93LmFwcGVuZChjYXJOYW1lKTtcbiAgICBjb25zdCBjYXJXaW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjYXJXaW5zLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcnMtaGVhZGVyJyk7XG4gICAgY2FyV2lucy50ZXh0Q29udGVudCA9ICdXaW5zJztcbiAgICBsaXN0Rmlyc3RSb3cuYXBwZW5kKGNhcldpbnMpO1xuICAgIGNvbnN0IGNhclRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNhclRpbWUuY2xhc3NMaXN0LmFkZCgnd2lubmVycy1oZWFkZXInKTtcbiAgICBjYXJUaW1lLnRleHRDb250ZW50ID0gJ0Jlc3QgdGltZSAoc2Vjb25kcyknO1xuICAgIGxpc3RGaXJzdFJvdy5hcHBlbmQoY2FyVGltZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVXaW5uZXJzTGlzdCgpIHtcbiAgICBnZXRXaW5uZXJzKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBmaWxsV2lubmVycyhkYXRhKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpbGxXaW5uZXJzKHdpbm5lcnNBcnIpIHtcbiAgICBjb25zdCBsaXN0TGVuID0gd2lubmVyc0Fyci5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0TGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgd2lubmVyT2JqID0gd2lubmVyc0FycltpXTtcbiAgICAgICAgY29uc3QgbGlzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIHdpbm5lckxpc3QuYXBwZW5kKGxpc3RSb3cpO1xuICAgICAgICBjb25zdCBsaXN0TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgbGlzdE51bS50ZXh0Q29udGVudCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGlzdFJvdy5hcHBlbmQobGlzdE51bSk7XG4gICAgICAgIGdldENhckluZm8od2lubmVyT2JqLCBsaXN0Um93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRDYXJJbmZvKGNhciwgcm93KSB7XG4gICAgZ2V0T25lQ2FyKGNhci5pZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBwb3B1bGF0ZVdpbm5lckRhdGEoZGF0YSwgY2FyLCByb3cpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVXaW5uZXJEYXRhKGNhckluZm8sIHdpbm5lck9iaiwgbGlzdFJvdykge1xuICAgIGNvbnN0IHdpbm5lckNhcklNRyA9IGNyZWF0ZUNhckltYWdlKGNhckluZm8pO1xuICAgIHdpbm5lckNhcklNRy5zdHlsZS5maWxsID0gY2FySW5mby5jb2xvcjtcbiAgICBjb25zdCBsaXN0Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsaXN0Um93LmFwcGVuZChsaXN0Q2FyKTtcbiAgICBsaXN0Q2FyLmFwcGVuZCh3aW5uZXJDYXJJTUcpO1xuICAgIGNvbnN0IGNhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNhck5hbWUudGV4dENvbnRlbnQgPSBjYXJJbmZvLm5hbWU7XG4gICAgbGlzdFJvdy5hcHBlbmQoY2FyTmFtZSk7XG4gICAgY29uc3QgY2FyV2lucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2FyV2lucy50ZXh0Q29udGVudCA9IHdpbm5lck9iai53aW5zLnRvU3RyaW5nKCk7XG4gICAgbGlzdFJvdy5hcHBlbmQoY2FyV2lucyk7XG4gICAgY29uc3QgY2FyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2FyVGltZS50ZXh0Q29udGVudCA9IHdpbm5lck9iai50aW1lLnRvU3RyaW5nKCk7XG4gICAgbGlzdFJvdy5hcHBlbmQoY2FyVGltZSk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUdhcmFnZSwgcG9wdWxhdGVDYXJMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IHsgY2Fyc0luR2FyYWdlLCBjYXJMaXN0V3JhcHBlciwgdXBkYXRlR2FyYWdlVGl0bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FyYWdlL2dhcmFnZS11aSc7XG5pbXBvcnQgeyBjcmVhdGVXaW5uZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL3dpbm5lcnMvd2lubmVycyc7XG5pbXBvcnQgeyBnYXJhZ2VCVE4sIHdpbm5lcnNCVE4sIGNyZWF0ZUNvbW1vblVJLCBwcmV2UGFnZUJUTiwgbmV4dFBhZ2VCVE4gfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uJztcbmltcG9ydCB7IHdpbm5lcnNDb250ZW50V3JhcHBlciwgZ2FyYWdlQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uJztcbmV4cG9ydCBsZXQgYWN0aXZlR2FyYWdlUGFnZSA9IDE7XG5leHBvcnQgY29uc3QgYWN0aXZlV2lubmVyc1BhZ2UgPSAxO1xuY29uc3QgR0FSQUdFID0gMDtcbmNvbnN0IFdJTk5FUlMgPSAxO1xuZXhwb3J0IGxldCBhY3RpdmVWaWV3ID0gR0FSQUdFO1xuY3JlYXRlQ29tbW9uVUkoKTtcbmdhcmFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xucHJldlBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbm5leHRQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5jcmVhdGVHYXJhZ2UoKTtcbmNyZWF0ZVdpbm5lcnMoKTtcbmxldCBnYXJhZ2VOZXh0UGFnZVN0YXRlID0gJ2Rpc2FibGVkJztcbmxldCBnYXJhZ2VQcmV2UGFnZVN0YXRlID0gJ2Rpc2FibGVkJztcbmNvbnN0IHdpbm5lcnNOZXh0UGFnZVN0YXRlID0gJ2Rpc2FibGVkJztcbmNvbnN0IHdpbm5lcnNGaXJzdFBhZ2VTdGF0ZSA9ICdkaXNhYmxlZCc7XG5leHBvcnQgZnVuY3Rpb24gdW5sb2NrZ2FyYWdlTmV4dFBhZ2UoKSB7XG4gICAgZ2FyYWdlTmV4dFBhZ2VTdGF0ZSA9ICdlbmFibGVkJztcbiAgICBuZXh0UGFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59XG53aW5uZXJzQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFjdGl2ZVZpZXcgPSBXSU5ORVJTO1xuICAgIGdhcmFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgd2lubmVyc0JUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHVwZGF0ZVdpbm5lclZpZXdQYWdlQnV0dG9ucygnbW92ZSBpbicpO1xuICAgIHdpbm5lcnNDb250ZW50V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGdhcmFnZUNvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmZ1bmN0aW9uIHVwZGF0ZVdpbm5lclZpZXdQYWdlQnV0dG9ucyhhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09PSAnbW92ZSBpbicpIHtcbiAgICAgICAgaWYgKHdpbm5lcnNOZXh0UGFnZVN0YXRlID09ICdkaXNhYmxlZCcpXG4gICAgICAgICAgICBuZXh0UGFnZUJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICAvLyBpZiAod2lubmVyc05leHRQYWdlU3RhdGUgPT0gJ2VuYWJsZWQnKSBuZXh0UGFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmICh3aW5uZXJzRmlyc3RQYWdlU3RhdGUgPT0gJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIHByZXZQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIC8vIGlmICh3aW5uZXJzRmlyc3RQYWdlU3RhdGUgPT0gJ2VuYWJsZWQnKSBwcmV2UGFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24gPT09ICdtb3ZlIG91dCcpIHtcbiAgICAgICAgaWYgKGdhcmFnZU5leHRQYWdlU3RhdGUgPT0gJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIG5leHRQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIGlmIChnYXJhZ2VOZXh0UGFnZVN0YXRlID09ICdlbmFibGVkJylcbiAgICAgICAgICAgIG5leHRQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaWYgKGdhcmFnZVByZXZQYWdlU3RhdGUgPT0gJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIHByZXZQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIGlmIChnYXJhZ2VQcmV2UGFnZVN0YXRlID09ICdlbmFibGVkJylcbiAgICAgICAgICAgIHByZXZQYWdlQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG59XG5nYXJhZ2VCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlVmlldyA9IEdBUkFHRTtcbiAgICBnYXJhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB3aW5uZXJzQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB1cGRhdGVXaW5uZXJWaWV3UGFnZUJ1dHRvbnMoJ21vdmUgb3V0Jyk7XG4gICAgd2lubmVyc0NvbnRlbnRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZ2FyYWdlQ29udGVudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xucHJldlBhZ2VCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWN0aXZlR2FyYWdlUGFnZS0tO1xuICAgIGlmIChhY3RpdmVHYXJhZ2VQYWdlID09PSAxKSB7XG4gICAgICAgIHByZXZQYWdlQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIGdhcmFnZVByZXZQYWdlU3RhdGUgPSAnZGlzYWJsZWQnO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlR2FyYWdlUGFnZSA9PT0gTWF0aC5jZWlsKGNhcnNJbkdhcmFnZSAvIDcpIC0gMSkge1xuICAgICAgICBuZXh0UGFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGdhcmFnZU5leHRQYWdlU3RhdGUgPSAnZW5hYmxlZCc7XG4gICAgfVxuICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY2FyTGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcG9wdWxhdGVDYXJMaXN0KCk7XG59KTtcbm5leHRQYWdlQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFjdGl2ZUdhcmFnZVBhZ2UrKztcbiAgICBpZiAoYWN0aXZlR2FyYWdlUGFnZSA9PT0gMikge1xuICAgICAgICBwcmV2UGFnZUJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGdhcmFnZVByZXZQYWdlU3RhdGUgPSAnZW5hYmxlZCc7XG4gICAgfVxuICAgIGlmIChhY3RpdmVHYXJhZ2VQYWdlID09PSBNYXRoLmNlaWwoY2Fyc0luR2FyYWdlIC8gNykpIHtcbiAgICAgICAgbmV4dFBhZ2VCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgZ2FyYWdlTmV4dFBhZ2VTdGF0ZSA9ICdkaXNhYmxlZCc7XG4gICAgfVxuICAgIHVwZGF0ZUdhcmFnZVRpdGxlKCk7XG4gICAgY2FyTGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcG9wdWxhdGVDYXJMaXN0KCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9