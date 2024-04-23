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
    --body-color: rgb(57, 57, 57);
    --body-bg-color: bisque;
    --button-bg-color: rgb(4, 48, 95);
    --transition-time: 0.8s;
    --car-btn-bg-color: rgb(140, 216, 189);
    --border-radius: 0.5rem;
    --common-title-color: rgb(190, 214, 230);
    --input-focus-bg-color: rgb(211, 209, 209);
    --input-focus-color: black;
    --race-btn-bg-color: #e2f9b6;
    --winners-header-bg-color: rgb(15, 106, 203);
    --modal-bg-color: rgb(179, 230, 187);
    --modal-button-color: rgb(253, 164, 3);
    --modal-button-color-disabled: rgba(253, 164, 3, 0.6);
  }
  
  html, body {
    margin: 0;
    padding: 0;
    user-select: none;
  }
  
  body {
    width: 100%;
    height: 100vh;
    color: var(--body-color);
    background-color: var(--body-bg-color);
    overflow-x: hidden;
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

#login-wrapper {
  width: 20vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: var(--modal-bg-color);
}

#login-header {
  font-size: 1.5rem;
}

.input-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0;
}

input {
  width: 8rem;
  height: auto;
  justify-self: right;
  font-size: 1.2rem;
}

.login-label {
  width: 6rem;
  flex-shrink: 0;
  text-align: left;
  font-size: 1.2rem;
}

.login-input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 0.5rem;
}

.user-input {
  width: 100%;
}

.input-warning {
  width: 100%;
  color: rgb(205, 45, 17);
  font-size: 1.1em;
}

#login-btn-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
}

/* .login-window-btn {
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border-width: 0;
  cursor: pointer;
}

.login-window-btn:disabled {
  cursor: unset;
}

.login-window-btn:hover:not(:disabled) {
  font-weight: bold;
} */

button {
  width: 6rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: var(--border-radius);
  border-width: 0;
  cursor: pointer;
}

button:disabled {
  cursor: unset;
}

button:hover:not(:disabled) {
  font-weight: bold;
}

#chat-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#chat-header-wrapper,
#chat-footer-wrapper {
  box-sizing: border-box;
  width: 100vw;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 5rem;
  color: var(--modal-bg-color);
  font-size: 1.5rem;
  background-color: var(--body-color);
}

#chat-header-wrapper {
  order: 1;
}

#header-btn-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

#main-chat-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  order: 2;
}

#user-panel-wrapper,
#messenger-wrapper {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

#user-panel-wrapper {
  width: 30%;
  background-color: var(--input-focus-bg-color);
}

#user-search,
#new-message-input {
  box-sizing: border-box;  
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

#user-list {
  display: flex;
  flex-direction: column;
}

.user-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1rem 0;
  font-family: Arial;
  font-size: 1.2rem;
  cursor: pointer;
}

.user-wrapper:hover:not(.user-msg-number) {
  font-weight: bold;
}

.user-status-icon {
  width: 1rem;
  height: 1rem;
  background-color:rgb(15, 106, 203);
  border-radius: 50%;
  border-width: 0px;
}

.user-msg-number {
  width: auto;
  height: auto;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  color: whitesmoke;
  background-color: green;
}

.user-msg-number:empty {
  padding: 0;
}

#messenger-wrapper {
  position: relative;
  flex-grow: 1;
}

#message-header-wrapper {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--body-color);
}

#messages {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: calc(100% - 8rem);  
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 1rem;
}

#chat-invite-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  width: auto;
  height: auto;
  padding: 1rem 2rem;
  font-size: 2rem;
  transform: translate(-50%, -50%);
}

.message-wrapper {
  width: 70%;
  height: auto;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  font-size: 1.2rem;
  overflow: hidden;
}

.message-header,
.message-footer {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.2rem 1.5rem;
  font-size: 0.9rem;
  font-family:Arial, Helvetica, sans-serif;
  background-color: rgb(228, 225, 225);
}

.message-txt {
  width: 100%;  
  height: auto;
  flex-grow: 1;
  padding: 0.5rem 1rem;
  background-color: whitesmoke;
}

#new-message-wrapper {
  display: flex;
  width: 100%;
  height: 3rem;
  padding-top: 0.8rem;
  gap: 1rem;
  border-top: 2px solid var(--body-color);
}

#chat-footer-wrapper {  
  order: 3;
}

.footer-link {
  color: var(--modal-bg-color);
  text-decoration: none;
}

.rss-svg {
  width: 6rem;
  height: auto;
  padding: 0.2rem;
  margin-top: 0.4rem;
  background-color: beige;
  border-radius: 0.5rem;
}

#power-layer {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(64, 63, 61, 0.80);
  z-index: 2;
}

.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  padding-top: 4rem;
  border-radius: var(--border-radius);
  transform: translate(-50%, -50%);
  background-color: var(--common-title-color);
  z-index: 3;
}

#modal-close {
  position: absolute;
  display: block;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: var(--transition-time);
}

.modal-close-svg {
  fill: black;
}

#modal-close:hover {
  transform: scale(115%);
}

.hidden-modal {
    display: none;
  }

#modal-text {
  font-size: 1.2rem;
  text-align: justify;
}

@media (max-width: 800px) {
    
  #login-wrapper {
    width: 60vw;
  }
    
  #main-chat-wrapper {
    flex-direction: column;
  }

  #user-list {
    flex-direction: row;
    gap: 1.5rem;
    padding-left: 0;
    overflow-x: auto;
  }

  .user-wrapper {
    gap: 0.5rem;
  }

  #messenger-wrapper {
    flex-grow: 2;
  }

  #user-panel-wrapper {
    height: auto;
}
  
  #chat-header-wrapper,
  #chat-footer-wrapper {
    padding: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --body-color: rgb(57, 57, 57);\r\n    --body-bg-color: bisque;\r\n    --button-bg-color: rgb(4, 48, 95);\r\n    --transition-time: 0.8s;\r\n    --car-btn-bg-color: rgb(140, 216, 189);\r\n    --border-radius: 0.5rem;\r\n    --common-title-color: rgb(190, 214, 230);\r\n    --input-focus-bg-color: rgb(211, 209, 209);\r\n    --input-focus-color: black;\r\n    --race-btn-bg-color: #e2f9b6;\r\n    --winners-header-bg-color: rgb(15, 106, 203);\r\n    --modal-bg-color: rgb(179, 230, 187);\r\n    --modal-button-color: rgb(253, 164, 3);\r\n    --modal-button-color-disabled: rgba(253, 164, 3, 0.6);\r\n  }\r\n  \r\n  html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    user-select: none;\r\n  }\r\n  \r\n  body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    color: var(--body-color);\r\n    background-color: var(--body-bg-color);\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n#main-wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 0.5rem;\r\n    padding: 1rem;\r\n  }\r\n\r\n#login-wrapper {\r\n  width: 20vw;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: var(--modal-bg-color);\r\n}\r\n\r\n#login-header {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.input-wrap {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: start;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 0;\r\n}\r\n\r\ninput {\r\n  width: 8rem;\r\n  height: auto;\r\n  justify-self: right;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.login-label {\r\n  width: 6rem;\r\n  flex-shrink: 0;\r\n  text-align: left;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.login-input-wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.user-input {\r\n  width: 100%;\r\n}\r\n\r\n.input-warning {\r\n  width: 100%;\r\n  color: rgb(205, 45, 17);\r\n  font-size: 1.1em;\r\n}\r\n\r\n#login-btn-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* .login-window-btn {\r\n  padding: 0.5rem 2rem;\r\n  border-radius: 0.5rem;\r\n  border-width: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.login-window-btn:disabled {\r\n  cursor: unset;\r\n}\r\n\r\n.login-window-btn:hover:not(:disabled) {\r\n  font-weight: bold;\r\n} */\r\n\r\nbutton {\r\n  width: 6rem;\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n  border-radius: var(--border-radius);\r\n  border-width: 0;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:disabled {\r\n  cursor: unset;\r\n}\r\n\r\nbutton:hover:not(:disabled) {\r\n  font-weight: bold;\r\n}\r\n\r\n#chat-wrapper {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#chat-header-wrapper,\r\n#chat-footer-wrapper {\r\n  box-sizing: border-box;\r\n  width: 100vw;\r\n  height: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 2rem 5rem;\r\n  color: var(--modal-bg-color);\r\n  font-size: 1.5rem;\r\n  background-color: var(--body-color);\r\n}\r\n\r\n#chat-header-wrapper {\r\n  order: 1;\r\n}\r\n\r\n#header-btn-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#main-chat-wrapper {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-grow: 1;\r\n  order: 2;\r\n}\r\n\r\n#user-panel-wrapper,\r\n#messenger-wrapper {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#user-panel-wrapper {\r\n  width: 30%;\r\n  background-color: var(--input-focus-bg-color);\r\n}\r\n\r\n#user-search,\r\n#new-message-input {\r\n  box-sizing: border-box;  \r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  font-size: 1.2rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#user-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.user-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 1.5rem;\r\n  padding: 1rem 0;\r\n  font-family: Arial;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-wrapper:hover:not(.user-msg-number) {\r\n  font-weight: bold;\r\n}\r\n\r\n.user-status-icon {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  background-color:rgb(15, 106, 203);\r\n  border-radius: 50%;\r\n  border-width: 0px;\r\n}\r\n\r\n.user-msg-number {\r\n  width: auto;\r\n  height: auto;\r\n  padding: 0 0.5rem;\r\n  border-radius: 0.5rem;\r\n  color: whitesmoke;\r\n  background-color: green;\r\n}\r\n\r\n.user-msg-number:empty {\r\n  padding: 0;\r\n}\r\n\r\n#messenger-wrapper {\r\n  position: relative;\r\n  flex-grow: 1;\r\n}\r\n\r\n#message-header-wrapper {\r\n  width: 100%;\r\n  height: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: 2px solid var(--body-color);\r\n}\r\n\r\n#messages {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  width: 100%;\r\n  height: calc(100% - 8rem);  \r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 0;\r\n  align-items: flex-end;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#chat-invite-modal {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  width: auto;\r\n  height: auto;\r\n  padding: 1rem 2rem;\r\n  font-size: 2rem;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.message-wrapper {\r\n  width: 70%;\r\n  height: auto;\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: space-between;\r\n  font-size: 1.2rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.message-header,\r\n.message-footer {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n  padding: 0.2rem 1.5rem;\r\n  font-size: 0.9rem;\r\n  font-family:Arial, Helvetica, sans-serif;\r\n  background-color: rgb(228, 225, 225);\r\n}\r\n\r\n.message-txt {\r\n  width: 100%;  \r\n  height: auto;\r\n  flex-grow: 1;\r\n  padding: 0.5rem 1rem;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n#new-message-wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding-top: 0.8rem;\r\n  gap: 1rem;\r\n  border-top: 2px solid var(--body-color);\r\n}\r\n\r\n#chat-footer-wrapper {  \r\n  order: 3;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--modal-bg-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.rss-svg {\r\n  width: 6rem;\r\n  height: auto;\r\n  padding: 0.2rem;\r\n  margin-top: 0.4rem;\r\n  background-color: beige;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#power-layer {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color:rgba(64, 63, 61, 0.80);\r\n  z-index: 2;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  width: 20rem;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 2rem;\r\n  padding-top: 4rem;\r\n  border-radius: var(--border-radius);\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--common-title-color);\r\n  z-index: 3;\r\n}\r\n\r\n#modal-close {\r\n  position: absolute;\r\n  display: block;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  cursor: pointer;\r\n  transition: var(--transition-time);\r\n}\r\n\r\n.modal-close-svg {\r\n  fill: black;\r\n}\r\n\r\n#modal-close:hover {\r\n  transform: scale(115%);\r\n}\r\n\r\n.hidden-modal {\r\n    display: none;\r\n  }\r\n\r\n#modal-text {\r\n  font-size: 1.2rem;\r\n  text-align: justify;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    \r\n  #login-wrapper {\r\n    width: 60vw;\r\n  }\r\n    \r\n  #main-chat-wrapper {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #user-list {\r\n    flex-direction: row;\r\n    gap: 1.5rem;\r\n    padding-left: 0;\r\n    overflow-x: auto;\r\n  }\r\n\r\n  .user-wrapper {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  #messenger-wrapper {\r\n    flex-grow: 2;\r\n  }\r\n\r\n  #user-panel-wrapper {\r\n    height: auto;\r\n}\r\n  \r\n  #chat-header-wrapper,\r\n  #chat-footer-wrapper {\r\n    padding: 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   checkServerAuth: () => (/* binding */ checkServerAuth),
/* harmony export */   fillMessageList: () => (/* binding */ fillMessageList),
/* harmony export */   logoutCurrentUser: () => (/* binding */ logoutCurrentUser),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage),
/* harmony export */   userOffLine: () => (/* binding */ userOffLine),
/* harmony export */   userOnLine: () => (/* binding */ userOnLine)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "./src/common/common.ts");
/* harmony import */ var _chat_chat_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat/chat-main */ "./src/chat/chat-main.ts");
/* harmony import */ var _chat_chat_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/chat-header */ "./src/chat/chat-header.ts");
/* harmony import */ var _chat_chat_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat/chat-users */ "./src/chat/chat-users.ts");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login */ "./src/login/login.ts");
/* harmony import */ var _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat-messages */ "./src/chat/chat-messages.ts");






let userOnLine = [];
let userOffLine = [];
let userOnLineInit = false;
let userOffLineInit = false;
let wSocket;
function checkServerAuth(name, pass) {
    // ToDo Error handling
    // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#connection_errors
    wSocket = new WebSocket('ws://localhost:4000');
    wSocket.onopen = () => authorizeUser(wSocket, name, pass);
    wSocket.onmessage = (event) => onMessageAction(event, wSocket, name, pass);
}
function authorizeUser(socketObj, name, pass) {
    console.log('wSocket opened');
    const userAuthData = {
        id: `user ${name} authentication request`,
        type: 'USER_LOGIN',
        payload: { user: { login: `${name}`, password: `${pass}` } },
    };
    socketObj.send(JSON.stringify(userAuthData));
}
function onMessageAction(event, socketObj, name, pass) {
    const serverResp = JSON.parse(event.data);
    const messageArray = [];
    console.log('Server response received: ', serverResp, 'response id = ', serverResp.id);
    switch (serverResp.type) {
        case 'USER_LOGIN':
            console.log('USER_LOGIN');
            requestRegisteredUserInfo(socketObj);
            openChatWindow(name, pass);
            break;
        case 'USER_ACTIVE':
            console.log('Active users received');
            userOnLine = serverResp.payload.users;
            userOnLine = sortUsers(userOnLine);
            userOnLineInit = true;
            break;
        case 'USER_INACTIVE':
            console.log('Inactive users received');
            userOffLine = serverResp.payload.users;
            // sortUsers(userOffLine);
            userOffLineInit = true;
            break;
        case 'USER_EXTERNAL_LOGIN':
            console.log('Third-party User received');
            if (serverResp.payload.user.login === _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent)
                updateMessengerTitle('login');
            requestRegisteredUserInfo(socketObj);
            break;
        case 'MSG_FROM_USER':
            console.log('User Mailing history fetched');
            console.log(serverResp.payload.messages);
            (0,_chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.showMessages)(serverResp.payload.messages);
            break;
        case 'MSG_SEND':
            console.log('User sent mail or received mail');
            console.log(serverResp.payload.message);
            messageArray.push(serverResp.payload.message);
            (0,_chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.showMessages)(messageArray);
            break;
        case 'USER_LOGOUT':
            console.log('A user logged out');
            closeChatWindow();
            break;
        case 'USER_EXTERNAL_LOGOUT':
            console.log('A user logged out');
            if (serverResp.payload.user.login === _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent)
                updateMessengerTitle('logout');
            requestRegisteredUserInfo(socketObj);
            break;
        case 'ERROR':
            console.log('Error received');
            (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.showModal)('User ' + name + ' is already logged in', _login_login__WEBPACK_IMPORTED_MODULE_4__.loginWindow);
            break;
    }
    if (userOnLineInit === true && userOffLineInit === true) {
        console.log('User List Populated', _chat_chat_users__WEBPACK_IMPORTED_MODULE_3__.userList, userOnLine, userOffLine);
        (0,_chat_chat_users__WEBPACK_IMPORTED_MODULE_3__.populateUserList)(_chat_chat_users__WEBPACK_IMPORTED_MODULE_3__.userList, userOnLine, userOffLine);
        userOnLineInit = false;
        userOffLineInit = false;
    }
}
function updateMessengerTitle(status) {
    console.log('updateMessengerTitle status =', status);
    if (status === 'login') {
        _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatStatus.textContent = 'online';
        _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatStatus.style.color = '#87A922';
    }
    if (status === 'logout') {
        _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatStatus.textContent = 'offline';
        // Doesn't work
        _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatStatus.style.color = 'rgb(57, 57, 57)';
    }
}
function sortUsers(userArray) {
    const tmpArr = [];
    // Search and delete Active User name
    // Sort array
    for (const user of userArray) {
        if (user.login !== _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name)
            tmpArr.push(user);
    }
    console.log('sortUsers ', 'userArray = ', userArray, 'tmpArr = ', tmpArr);
    return tmpArr;
}
function openChatWindow(name, pass) {
    sessionStorage.setItem(name, pass);
    _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name = name;
    _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.pass = pass;
    _chat_chat_header__WEBPACK_IMPORTED_MODULE_2__.ownUserName.textContent = _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name;
    _login_login__WEBPACK_IMPORTED_MODULE_4__.loginWindow.style.display = 'none';
    _chat_chat_main__WEBPACK_IMPORTED_MODULE_1__.chatWrapper.style.display = 'flex';
}
function closeChatWindow() {
    _login_login__WEBPACK_IMPORTED_MODULE_4__.loginWindow.style.display = 'flex';
    _chat_chat_main__WEBPACK_IMPORTED_MODULE_1__.chatWrapper.style.display = 'none';
}
function requestRegisteredUserInfo(socketObj) {
    const chatUserOnlineData = {
        id: `list of users online`,
        type: 'USER_ACTIVE',
        payload: null,
    };
    socketObj.send(JSON.stringify(chatUserOnlineData));
    const chatUserOfflineData = {
        id: `list of users offline`,
        type: 'USER_INACTIVE',
        payload: null,
    };
    socketObj.send(JSON.stringify(chatUserOfflineData));
}
function fillMessageList() {
    const fetchMailReqObj = {
        id: 'Fetch mailing with user ' + _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent,
        type: 'MSG_FROM_USER',
        payload: { user: { login: _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent } },
    };
    wSocket.send(JSON.stringify(fetchMailReqObj));
}
function sendMessage(message) {
    const messageObj = {
        id: 'new message from ' + _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name + ' to ' + _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent,
        type: 'MSG_SEND',
        payload: { message: { to: _chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.userToChatName.textContent, text: message } },
    };
    wSocket.send(JSON.stringify(messageObj));
}
function logoutCurrentUser() {
    const messageObj = {
        id: 'log out user ' + _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name,
        type: 'USER_LOGOUT',
        payload: {
            user: {
                login: _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.name,
                password: _login_login__WEBPACK_IMPORTED_MODULE_4__.activeUser.pass,
            },
        },
    };
    wSocket.send(JSON.stringify(messageObj));
}


/***/ }),

/***/ "./src/chat/chat-footer.ts":
/*!*********************************!*\
  !*** ./src/chat/chat-footer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showFooter: () => (/* binding */ showFooter)
/* harmony export */ });
function showFooter(parent) {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'chat-footer-wrapper');
    parent.append(footer);
    const schoolLogo = document.createElement('a');
    schoolLogo.setAttribute('href', 'https://app.rs.school/');
    schoolLogo.classList.add('footer-link');
    schoolLogo.innerHTML = `<svg id="Layer_1" class="rss-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 552.8 205.3"><style>.st0{fill:#fff}.st1{clip-path:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{clip-path:url(#SVGID_6_)}.st4{clip-path:url(#SVGID_8_)}.st5{fill:#fff;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st6{clip-path:url(#SVGID_8_)}.st6,.st7{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st8,.st9{clip-path:url(#SVGID_10_)}.st9{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}</style><title>rs_school_js</title><path d="M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z"/><path d="M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z"/><path d="M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z"/><path d="M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z"/><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"/><defs><ellipse id="SVGID_1_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st1"><path transform="rotate(-37.001 420.82 68.353)" class="st0" d="M330.9-14.2h179.8v165.1H330.9z"/><g id="Layer_2_1_"><defs><path id="SVGID_3_" transform="rotate(-37.001 420.82 68.353)" d="M330.9-14.2h179.8v165.1H330.9z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g id="Layer_1-2" class="st2"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"/><defs><ellipse id="SVGID_5_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st3"><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"/><defs><path id="SVGID_7_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><g class="st4"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"/></g><path transform="rotate(-37 420.799 68.802)" class="st6" d="M357.8 17h125.9v103.7H357.8z"/><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"/><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"/><defs><path id="SVGID_9_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><g class="st8"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"/></g><path transform="rotate(-37 420.799 68.802)" class="st9" d="M357.8 17h125.9v103.7H357.8z"/><path transform="rotate(-37.001 420.82 68.353)" class="st7" d="M330.9-14.2h179.8v165.1H330.9z"/></g><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"/><path d="M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z"/></g></g></g></svg>`;
    footer.append(schoolLogo);
    const authorGHub = document.createElement('a');
    authorGHub.setAttribute('href', 'https://github.com/cheidru');
    authorGHub.classList.add('footer-link');
    authorGHub.textContent = 'Igor Checheurov';
    footer.append(authorGHub);
    const appYear = document.createElement('p');
    appYear.setAttribute('id', 'app-year');
    appYear.textContent = '2024';
    footer.append(appYear);
}


/***/ }),

/***/ "./src/chat/chat-header.ts":
/*!*********************************!*\
  !*** ./src/chat/chat-header.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ownUserName: () => (/* binding */ ownUserName),
/* harmony export */   showHeader: () => (/* binding */ showHeader)
/* harmony export */ });
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login */ "./src/login/login.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");


const ownUserName = document.createElement('div');
function showHeader(parent) {
    const headerWrapper = document.createElement('div');
    headerWrapper.setAttribute('id', 'chat-header-wrapper');
    parent.append(headerWrapper);
    ownUserName.setAttribute('id', 'own-user-name');
    console.log('activeUser.name = ', _login_login__WEBPACK_IMPORTED_MODULE_0__.activeUser);
    ownUserName.textContent = _login_login__WEBPACK_IMPORTED_MODULE_0__.activeUser.name;
    headerWrapper.append(ownUserName);
    const appName = document.createElement('div');
    appName.setAttribute('id', 'app-name');
    appName.textContent = 'Fun Chat';
    headerWrapper.append(appName);
    const btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('id', 'header-btn-wrapper');
    headerWrapper.append(btnWrapper);
    const logOutBTN = document.createElement('button');
    logOutBTN.setAttribute('id', 'header-logout-btn');
    logOutBTN.innerText = 'Log out';
    btnWrapper.append(logOutBTN);
    logOutBTN.addEventListener('click', () => {
        (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.logoutCurrentUser)();
    });
}


/***/ }),

/***/ "./src/chat/chat-main.ts":
/*!*******************************!*\
  !*** ./src/chat/chat-main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatWrapper: () => (/* binding */ chatWrapper),
/* harmony export */   createChatWindow: () => (/* binding */ createChatWindow)
/* harmony export */ });
/* harmony import */ var _chat_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-header */ "./src/chat/chat-header.ts");
/* harmony import */ var _chat_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-footer */ "./src/chat/chat-footer.ts");
/* harmony import */ var _chat_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-users */ "./src/chat/chat-users.ts");
/* harmony import */ var _chat_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-messages */ "./src/chat/chat-messages.ts");




// import { usersOnLine, usersOffLine } from '../login/login';
const chatWrapper = document.createElement('div');
function createChatWindow() {
    chatWrapper.setAttribute('id', 'chat-wrapper');
    chatWrapper.style.display = 'none';
    document.body.append(chatWrapper);
    (0,_chat_header__WEBPACK_IMPORTED_MODULE_0__.showHeader)(chatWrapper);
    showMainWindow(chatWrapper);
    (0,_chat_footer__WEBPACK_IMPORTED_MODULE_1__.showFooter)(chatWrapper);
}
function showMainWindow(parent) {
    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', 'main-chat-wrapper');
    parent.append(mainWrapper);
    (0,_chat_users__WEBPACK_IMPORTED_MODULE_2__.showUserPanel)(mainWrapper);
    (0,_chat_messages__WEBPACK_IMPORTED_MODULE_3__.showMessagePanel)(mainWrapper);
}


/***/ }),

/***/ "./src/chat/chat-messages.ts":
/*!***********************************!*\
  !*** ./src/chat/chat-messages.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeInviteMSG: () => (/* binding */ changeInviteMSG),
/* harmony export */   messages: () => (/* binding */ messages),
/* harmony export */   newMessage: () => (/* binding */ newMessage),
/* harmony export */   sendBTN: () => (/* binding */ sendBTN),
/* harmony export */   showMessagePanel: () => (/* binding */ showMessagePanel),
/* harmony export */   showMessages: () => (/* binding */ showMessages),
/* harmony export */   userToChatName: () => (/* binding */ userToChatName),
/* harmony export */   userToChatStatus: () => (/* binding */ userToChatStatus)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login */ "./src/login/login.ts");


const userToChatName = document.createElement('div');
const userToChatStatus = document.createElement('div');
const inviteMessage = document.createElement('div');
const messages = document.createElement('div');
const sendBTN = document.createElement('button');
const newMessage = document.createElement('input');
function changeInviteMSG(message) {
    console.log('changeInviteMSG to ', message);
    inviteMessage.textContent = message;
}
function showMessagePanel(parent) {
    const messengerWrapper = document.createElement('div');
    messengerWrapper.setAttribute('id', 'messenger-wrapper');
    parent.append(messengerWrapper);
    showMessagePanelHeader(messengerWrapper);
    messages.setAttribute('id', 'messages');
    messengerWrapper.append(messages);
    inviteMessage.setAttribute('id', 'chat-invite-modal');
    inviteMessage.textContent = 'Select a user to start messaging';
    messengerWrapper.append(inviteMessage);
    sendNewMessagePanel(messengerWrapper);
}
function showMessagePanelHeader(parent) {
    const headerWrapper = document.createElement('div');
    headerWrapper.setAttribute('id', 'message-header-wrapper');
    parent.append(headerWrapper);
    userToChatName.setAttribute('id', 'user-name');
    userToChatName.textContent = '';
    headerWrapper.append(userToChatName);
    userToChatStatus.setAttribute('id', 'user-status');
    userToChatStatus.textContent = '';
    headerWrapper.append(userToChatStatus);
}
function sendNewMessagePanel(parent) {
    const newMessageWrapper = document.createElement('div');
    newMessageWrapper.setAttribute('id', 'new-message-wrapper');
    parent.append(newMessageWrapper);
    newMessage.setAttribute('id', 'new-message-input');
    newMessage.setAttribute('placeholder', 'Write new message ...');
    newMessage.setAttribute('autocomplete', 'off');
    newMessageWrapper.append(newMessage);
    newMessage.addEventListener('input', () => {
        if (newMessage.value.length > 0)
            sendBTN.removeAttribute('disabled');
        if (newMessage.value.length === 0)
            sendBTN.setAttribute('disabled', '');
    });
    sendBTN.setAttribute('id', 'send-message-btn');
    sendBTN.textContent = 'Send';
    newMessageWrapper.append(sendBTN);
    sendBTN.addEventListener('click', () => {
        inviteMessage.style.display = 'none';
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(newMessage.value);
        newMessage.value = '';
    });
}
function showMessages(messageArray) {
    const messageNum = messageArray.length;
    if (messageArray.length > 0)
        changeInviteMSG('');
    console.log('showMessages messageArray = ', messageArray, 'messageNum = ', messageNum);
    for (let i = 0; i < messageNum; i++) {
        // Message from the user I'm chatting now
        if (messageArray[i].from === userToChatName.textContent || messageArray[i].from === _login_login__WEBPACK_IMPORTED_MODULE_1__.activeUser.name) {
            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('message-wrapper');
            messages.append(messageWrapper);
            const messageHeader = document.createElement('div');
            messageHeader.classList.add('message-header');
            messageWrapper.append(messageHeader);
            const messageSender = document.createElement('div');
            const fro = messageArray[i].from === userToChatName.textContent ? messageArray[i].from : 'You';
            messageSender.textContent = fro;
            if (fro === 'You')
                messageWrapper.style.alignSelf = 'flex-start';
            messageHeader.append(messageSender);
            const messageDate = document.createElement('div');
            const msgDate = new Date(messageArray[i].datetime);
            messageDate.textContent = `${norm(msgDate.getDate())}-${norm(msgDate.getMonth())}-${msgDate.getFullYear()} ${norm(msgDate.getHours())}:${norm(msgDate.getMinutes())}:${norm(msgDate.getSeconds())}`;
            messageHeader.append(messageDate);
            const messageTxt = document.createElement('div');
            messageTxt.classList.add('message-txt');
            messageTxt.textContent = messageArray[i].text;
            messageWrapper.append(messageTxt);
            const messageFooter = document.createElement('div');
            messageFooter.classList.add('message-footer');
            if (messageArray[i].status.isEdited === true) {
                messageFooter.textContent = 'Edited';
            }
            else if (messageArray[i].status.isReaded === true) {
                messageFooter.textContent = 'Opened';
            }
            else if (messageArray[i].status.isDelivered === true) {
                messageFooter.textContent = 'Delivered';
            }
            else {
                messageFooter.textContent = 'Not delivered';
            }
            messageWrapper.append(messageFooter);
        }
        else {
            const userWrapperList = document.querySelectorAll('.user-id');
            for (const user of userWrapperList) {
                if (user.textContent === messageArray[i].from && messageArray[i].status.isReaded === false) {
                    if (user.parentElement !== null) {
                        const mailNum = user.parentElement.children[2].textContent === ''
                            ? 1
                            : Number(user.parentElement.children[2].textContent) + 1;
                        user.parentElement.children[2].textContent = mailNum.toString();
                    }
                }
            }
        }
    }
}
function norm(dayMin) {
    return dayMin < 10 ? '0' + dayMin : dayMin.toString();
}


/***/ }),

/***/ "./src/chat/chat-users.ts":
/*!********************************!*\
  !*** ./src/chat/chat-users.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateUserList: () => (/* binding */ populateUserList),
/* harmony export */   selectedContact: () => (/* binding */ selectedContact),
/* harmony export */   showUserPanel: () => (/* binding */ showUserPanel),
/* harmony export */   userList: () => (/* binding */ userList)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
/* harmony import */ var _chat_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-messages */ "./src/chat/chat-messages.ts");


const userList = document.createElement('ul');
let selectedContact = '';
let selectedUserElement;
function showUserPanel(parent) {
    const userPanelWrapper = document.createElement('div');
    userPanelWrapper.setAttribute('id', 'user-panel-wrapper');
    parent.append(userPanelWrapper);
    const userSearch = document.createElement('input');
    userSearch.setAttribute('id', 'user-search');
    userSearch.setAttribute('placeholder', 'Search ...');
    userSearch.setAttribute('autocomplete', 'off');
    userPanelWrapper.append(userSearch);
    userList.setAttribute('id', 'user-list');
    userPanelWrapper.append(userList);
    userSearch.addEventListener('input', () => {
        const userWrapperList = document.querySelectorAll('.user-wrapper');
        console.log('Start searching ', userWrapperList);
        // Search pattern starts with input lowercase value
        const regexp = new RegExp(`^${userSearch.value.toLowerCase()}`);
        for (let i = 0; i < userWrapperList.length; i++) {
            const userNameElement = userWrapperList[i].children[1];
            const userWrapper = userWrapperList[i];
            let userName = '';
            if (userNameElement.textContent !== null)
                userName = userNameElement.textContent.toLowerCase();
            // Hide user if it doesn't match pattern
            if (regexp && !regexp.test(userName))
                userWrapper.style.display = 'none';
            // Show all users if pattern (input value) is empty or show hidden user when pattern changed
            if (!regexp || (regexp && regexp.test(userName)))
                userWrapper.style.display = 'flex';
        }
    });
    userList.addEventListener('click', (event) => {
        // If any user was selected before, remove this selection
        if (selectedUserElement)
            selectedUserElement.style.color = 'rgb(57, 57, 57)';
        catchUserListElementClicked(event);
        _chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatName.textContent = selectedUserElement.textContent;
        _chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatStatus.textContent = selectedUserElement.dataset.status;
        if (_chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatStatus.textContent === 'online')
            _chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatStatus.style.color = '#87A922';
        if (_chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatStatus.textContent === 'offline')
            _chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatStatus.style.color = 'rgb(57, 57, 57)';
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.fillMessageList)();
    });
}
function catchUserListElementClicked(event) {
    const element = event.target;
    // User wrapper is clicked
    if (element !== null && element.classList.contains('user-wrapper')) {
        const userNameElement = element.children[1];
        selectedContact = userNameElement.textContent;
        changeAttributesAccToNewContact(userNameElement);
    }
    // User icon is clicked
    if (element !== null && element.parentElement !== null && element.classList.contains('user-status-icon')) {
        const userNameElement = element.parentElement.children[1];
        selectedContact = userNameElement.textContent;
        changeAttributesAccToNewContact(userNameElement);
    }
    // User name is clicked
    if (element !== null && element.parentElement !== null && element.classList.contains('user-id')) {
        const userNameElement = element.parentElement.children[1];
        selectedContact = element.parentElement.children[1].textContent;
        changeAttributesAccToNewContact(userNameElement);
    }
    // User message number is clicked
    if (element !== null && element.parentElement !== null && element.classList.contains('user-msg-number')) {
        const userNameElement = element.parentElement.children[1];
        selectedContact = element.parentElement.children[1].textContent;
        changeAttributesAccToNewContact(userNameElement);
    }
}
function changeAttributesAccToNewContact(newContact) {
    if (selectedUserElement === newContact)
        return;
    selectedUserElement = newContact;
    newContact.style.color = 'blue';
    (0,_chat_messages__WEBPACK_IMPORTED_MODULE_1__.changeInviteMSG)('Start messaging');
    _chat_messages__WEBPACK_IMPORTED_MODULE_1__.sendBTN.removeAttribute('disabled');
    _chat_messages__WEBPACK_IMPORTED_MODULE_1__.newMessage.removeAttribute('disabled');
    if (newContact.parentElement !== null)
        newContact.parentElement.children[2].textContent = '';
    _chat_messages__WEBPACK_IMPORTED_MODULE_1__.messages.innerHTML = '';
}
function populateUserList(parent, userOnLineList, userOffLineList) {
    parent.innerHTML = '';
    if (_chat_messages__WEBPACK_IMPORTED_MODULE_1__.userToChatName.textContent === '') {
        (0,_chat_messages__WEBPACK_IMPORTED_MODULE_1__.changeInviteMSG)('');
        _chat_messages__WEBPACK_IMPORTED_MODULE_1__.sendBTN.setAttribute('disabled', '');
        _chat_messages__WEBPACK_IMPORTED_MODULE_1__.newMessage.setAttribute('disabled', '');
    }
    if (userOnLineList.length > 0) {
        for (let i = 0; i < userOnLineList.length; i++) {
            createUserListElement(parent, userOnLineList, i, '#87A922', 'online');
        }
    }
    if (userOffLineList.length > 0) {
        for (let i = 0; i < userOffLineList.length; i++) {
            createUserListElement(parent, userOffLineList, i, '#B3C8CF', 'offline');
        }
    }
}
function createUserListElement(parent, userArray, index, iconColor, status) {
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');
    parent.append(userWrapper);
    const statusIcon = document.createElement('div');
    statusIcon.classList.add('user-status-icon');
    statusIcon.style.backgroundColor = iconColor;
    userWrapper.append(statusIcon);
    const userID = document.createElement('div');
    userID.classList.add('user-id');
    userID.textContent = userArray[index].login;
    userID.setAttribute('data-status', status);
    userWrapper.append(userID);
    const msgNum = document.createElement('div');
    msgNum.classList.add('user-msg-number');
    userWrapper.append(msgNum);
}


/***/ }),

/***/ "./src/common/common.ts":
/*!******************************!*\
  !*** ./src/common/common.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appInfo: () => (/* binding */ appInfo),
/* harmony export */   createModal: () => (/* binding */ createModal),
/* harmony export */   showLoader: () => (/* binding */ showLoader),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
const appInfo = `What could be better than chatting with your friends using a chat app?
  But what if the service owner deletes your messages? Or, on the contrary, 
  they can store your chat history without your consent! You know how to create 
  an outstanding design and functionality, right? Let's not delay and get down to work! 
  Let's create our own chat.`;
const powerLayer = document.createElement('div');
const modal = document.createElement('div');
const modalText = document.createElement('div');
const modalClose = document.createElement('div');
function createModal() {
    powerLayer.setAttribute('id', 'power-layer');
    document.body.append(powerLayer);
    modal.classList.add('modal');
    document.body.append(modal);
    modalClose.setAttribute('id', 'modal-close');
    modalClose.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="modal-close-svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
    modal.append(modalClose);
    modalText.setAttribute('id', 'modal-text');
    modalText.textContent = '';
    modal.append(modalText);
    powerLayer.style.display = 'none';
    modal.style.display = 'none';
}
function showModal(content, parent) {
    powerLayer.style.display = 'block';
    modal.style.display = 'flex';
    parent.style.display = 'none';
    modalText.textContent = content;
    modalClose.addEventListener('click', () => {
        powerLayer.style.display = 'none';
        modal.style.display = 'none';
        parent.style.display = 'flex';
    }, true);
}
function showLoader(parent) {
    const loader = document.createElement('span');
    loader.classList.add('loader');
    parent.append(loader);
}


/***/ }),

/***/ "./src/login/login-buttons.ts":
/*!************************************!*\
  !*** ./src/login/login-buttons.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loginBTN: () => (/* binding */ loginBTN),
/* harmony export */   showButtons: () => (/* binding */ showButtons)
/* harmony export */ });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "./src/common/common.ts");

const loginBTN = document.createElement('button');
function showButtons(parent) {
    const btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('id', 'login-btn-wrapper');
    parent.append(btnWrapper);
    loginBTN.setAttribute('disabled', '');
    loginBTN.classList.add('login-window-btn');
    loginBTN.setAttribute('id', 'login-btn');
    loginBTN.innerText = 'Login';
    btnWrapper.append(loginBTN);
    const infoBTN = document.createElement('button');
    infoBTN.classList.add('login-window-btn');
    infoBTN.setAttribute('id', 'info-btn');
    infoBTN.innerText = 'Info';
    btnWrapper.append(infoBTN);
    infoBTN.addEventListener('click', () => {
        (0,_common_common__WEBPACK_IMPORTED_MODULE_0__.showModal)(_common_common__WEBPACK_IMPORTED_MODULE_0__.appInfo, parent);
    });
}


/***/ }),

/***/ "./src/login/login-input.ts":
/*!**********************************!*\
  !*** ./src/login/login-input.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showLoginInput: () => (/* binding */ showLoginInput)
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login/login.ts");
/* harmony import */ var _login_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-buttons */ "./src/login/login-buttons.ts");


const warningMessage = [
    'Minimum name length is 3 latin letters. Only first letter must be in upper case',
    'Minimum password length is 5 characters. It must contain letters and numbers',
];
function showLoginInput(parent) {
    const inputWrapperName = document.createElement('div');
    inputWrapperName.classList.add('input-wrap');
    parent.append(inputWrapperName);
    showInputField(inputWrapperName, 'user-name', 'User Name', '[A-Z][a-z\\-]{2,}');
    const inputWrapperPass = document.createElement('div');
    inputWrapperPass.classList.add('input-wrap');
    parent.append(inputWrapperPass);
    showInputField(inputWrapperPass, 'user-pass', 'Password', '^(?=.*?[a-z])(?=.*?[0-9]).{5,}$');
}
function showInputField(parent, attrID, lblText, pattern) {
    const label = document.createElement('div');
    label.setAttribute('id', `${attrID}-label`);
    label.classList.add('login-label');
    label.textContent = lblText;
    parent.append(label);
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add('login-input-wrapper');
    parent.append(inputWrapper);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `${attrID}`);
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('pattern', `${pattern}`);
    input.classList.add('user-input');
    inputWrapper.append(input);
    const warn = document.createElement('div');
    warn.setAttribute('id', `${attrID}-warning`);
    warn.classList.add('input-warning');
    inputWrapper.append(warn);
    input.addEventListener('input', (e) => {
        if (checkInput(e, input)) {
            if (_login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.name === true && _login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.pass === true)
                _login_buttons__WEBPACK_IMPORTED_MODULE_1__.loginBTN.removeAttribute('disabled');
        }
        else {
            _login_buttons__WEBPACK_IMPORTED_MODULE_1__.loginBTN.setAttribute('disabled', '');
        }
    });
}
function checkInput(event, inputObj) {
    let warnField;
    if (inputObj && inputObj.parentElement && inputObj.parentElement.lastChild) {
        warnField = inputObj.parentElement.lastChild;
        if (inputObj.value.length == 0) {
            warnField.textContent = '';
            return false;
        }
        if (inputObj.validity.patternMismatch) {
            event.preventDefault();
            if (inputObj.id == 'user-name') {
                warnField.textContent = warningMessage[0];
                _login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.name = false;
                _login__WEBPACK_IMPORTED_MODULE_0__.activeUser.name = '';
            }
            if (inputObj.id == 'user-pass') {
                warnField.textContent = warningMessage[1];
                _login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.pass = false;
                _login__WEBPACK_IMPORTED_MODULE_0__.activeUser.pass = '';
            }
            return false;
        }
        else {
            warnField.textContent = '';
            if (inputObj.id == 'user-name') {
                _login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.name = true;
                _login__WEBPACK_IMPORTED_MODULE_0__.activeUser.name = inputObj.value;
            }
            if (inputObj.id == 'user-pass') {
                _login__WEBPACK_IMPORTED_MODULE_0__.userDataValid.pass = true;
                _login__WEBPACK_IMPORTED_MODULE_0__.activeUser.pass = inputObj.value;
            }
            return true;
        }
    }
}


/***/ }),

/***/ "./src/login/login.ts":
/*!****************************!*\
  !*** ./src/login/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeUser: () => (/* binding */ activeUser),
/* harmony export */   loginWindow: () => (/* binding */ loginWindow),
/* harmony export */   showLoginWindow: () => (/* binding */ showLoginWindow),
/* harmony export */   userDataValid: () => (/* binding */ userDataValid)
/* harmony export */ });
/* harmony import */ var _login_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-input */ "./src/login/login-input.ts");
/* harmony import */ var _login_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-buttons */ "./src/login/login-buttons.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");



const userDataValid = {
    name: false,
    pass: false,
};
const activeUser = {
    name: '',
    pass: '',
};
const loginWindow = document.createElement('div');
function showLoginWindow() {
    loginWindow.setAttribute('id', 'login-wrapper');
    loginWindow.classList.add('modal');
    document.body.append(loginWindow);
    const pass = document.getElementById('user-pass');
    const name = document.getElementById('user-name');
    showTitle(loginWindow);
    (0,_login_input__WEBPACK_IMPORTED_MODULE_0__.showLoginInput)(loginWindow);
    (0,_login_buttons__WEBPACK_IMPORTED_MODULE_1__.showButtons)(loginWindow);
    document.addEventListener('keydown', keyDownHandler);
    function keyDownHandler(event) {
        if (event.code === 'Enter' && userDataValid.name === true && userDataValid.pass === true) {
            document.removeEventListener('keydown', keyDownHandler);
            if (activeUser.name !== null && activeUser.pass !== null)
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.checkServerAuth)(activeUser.name, activeUser.pass);
        }
        else {
            if (activeUser.name !== null && document.activeElement === name) {
                if (pass !== null)
                    pass.focus();
            }
            else {
                if (name !== null)
                    name.focus();
            }
        }
    }
    _login_buttons__WEBPACK_IMPORTED_MODULE_1__.loginBTN.addEventListener('click', () => {
        console.log('name = ', activeUser.name, 'pass = ', activeUser.pass);
        document.removeEventListener('keydown', keyDownHandler);
        if (activeUser.name !== null && activeUser.pass !== null)
            (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.checkServerAuth)(activeUser.name, activeUser.pass);
    });
}
function showTitle(parent) {
    const loginHeader = document.createElement('div');
    loginHeader.setAttribute('id', 'login-header');
    loginHeader.textContent = 'Log in';
    parent.append(loginHeader);
}
// function checkServerAuth(name: string, pass: string) {
//   console.log('checkServerAuth started');
//   // ToDo Error handling
//   // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#connection_errors
//   const wSocket = new WebSocket('ws://localhost:4000');
//   wSocket.onopen = function () {
//     console.log('wSocket opened');
//     const userAuthData = {
//       id: `user ${name} authentication request`,
//       type: 'USER_LOGIN',
//       payload: { user: { login: `${name}`, password: `${pass}` } },
//     };
//     wSocket.send(JSON.stringify(userAuthData));
//   };
//   wSocket.onmessage = function (event) {
//     const serverAuthResp = JSON.parse(event.data);
//     console.log('Server response received: ', serverAuthResp, 'response id = ', serverAuthResp.id);
//     if (serverAuthResp.type === 'USER_LOGIN') {
//       sessionStorage.setItem(name, pass);
//       activeUser.name = name;
//       activeUser.pass = pass;
//       loginWindow.style.display = 'none';
//       chatWrapper.style.display = 'flex';
//       console.log('Chat is opened');
//       const chatUserOnlineData = {
//         id: `list of users online`,
//         type: 'USER_ACTIVE',
//         payload: null,
//       };
//       wSocket.send(JSON.stringify(chatUserOnlineData));
//       const chatUserOfflineData = {
//         id: `list of users offline`,
//         type: 'USER_INACTIVE',
//         payload: null,
//       };
//       wSocket.send(JSON.stringify(chatUserOfflineData));
//     }
//     if (serverAuthResp.type === 'USER_ACTIVE') {
//       console.log('Active users received');
//       usersOnLine = serverAuthResp.payload;
//     }
//     if (serverAuthResp.type === 'USER_INACTIVE') {
//       console.log('Inactive users received');
//       usersOffLine = serverAuthResp.payload;
//     }
//     if (serverAuthResp.type === 'ERROR') {
//       console.log('Error received');
//       const loginErrorMSG = `User ${name} is already logged in`;
//       showModal(loginErrorMSG, loginWindow);
//     }
//   };
// }


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login */ "./src/login/login.ts");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common */ "./src/common/common.ts");
/* harmony import */ var _chat_chat_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat-main */ "./src/chat/chat-main.ts");




(0,_common_common__WEBPACK_IMPORTED_MODULE_2__.createModal)();
(0,_login_login__WEBPACK_IMPORTED_MODULE_1__.showLoginWindow)();
(0,_chat_chat_main__WEBPACK_IMPORTED_MODULE_3__.createChatWindow)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0saUJBQWlCLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMyQjtBQUNGO0FBQ007QUFDcEQsMkRBQVc7QUFDWCw2REFBZTtBQUNmLGlFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY2hhdC9jaGF0LWZvb3Rlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jaGF0L2NoYXQtaGVhZGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NoYXQvY2hhdC1tYWluLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NoYXQvY2hhdC1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jaGF0L2NoYXQtdXNlcnMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY29tbW9uL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9sb2dpbi9sb2dpbi1idXR0b25zLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2xvZ2luL2xvZ2luLWlucHV0LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2xvZ2luL2xvZ2luLnRzIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJvZHktY29sb3I6IHJnYig1NywgNTcsIDU3KTtcclxuICAgIC0tYm9keS1iZy1jb2xvcjogYmlzcXVlO1xyXG4gICAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xyXG4gICAgLS10cmFuc2l0aW9uLXRpbWU6IDAuOHM7XHJcbiAgICAtLWNhci1idG4tYmctY29sb3I6IHJnYigxNDAsIDIxNiwgMTg5KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgLS1jb21tb24tdGl0bGUtY29sb3I6IHJnYigxOTAsIDIxNCwgMjMwKTtcclxuICAgIC0taW5wdXQtZm9jdXMtYmctY29sb3I6IHJnYigyMTEsIDIwOSwgMjA5KTtcclxuICAgIC0taW5wdXQtZm9jdXMtY29sb3I6IGJsYWNrO1xyXG4gICAgLS1yYWNlLWJ0bi1iZy1jb2xvcjogI2UyZjliNjtcclxuICAgIC0td2lubmVycy1oZWFkZXItYmctY29sb3I6IHJnYigxNSwgMTA2LCAyMDMpO1xyXG4gICAgLS1tb2RhbC1iZy1jb2xvcjogcmdiKDE3OSwgMjMwLCAxODcpO1xyXG4gICAgLS1tb2RhbC1idXR0b24tY29sb3I6IHJnYigyNTMsIDE2NCwgMyk7XHJcbiAgICAtLW1vZGFsLWJ1dHRvbi1jb2xvci1kaXNhYmxlZDogcmdiYSgyNTMsIDE2NCwgMywgMC42KTtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4jbWFpbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuI2xvZ2luLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcclxufVxyXG5cclxuI2xvZ2luLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ubG9naW4tbGFiZWwge1xyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udXNlci1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC13YXJuaW5nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogcmdiKDIwNSwgNDUsIDE3KTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4jbG9naW4tYnRuLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5sb2dpbi13aW5kb3ctYnRuIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXdpbmRvdy1idG46ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbi5sb2dpbi13aW5kb3ctYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSAqL1xyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiB1bnNldDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2NoYXQtd3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY2hhdC1oZWFkZXItd3JhcHBlcixcclxuI2NoYXQtZm9vdGVyLXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW0gNXJlbTtcclxuICBjb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4jY2hhdC1oZWFkZXItd3JhcHBlciB7XHJcbiAgb3JkZXI6IDE7XHJcbn1cclxuXHJcbiNoZWFkZXItYnRuLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI21haW4tY2hhdC13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG9yZGVyOiAyO1xyXG59XHJcblxyXG4jdXNlci1wYW5lbC13cmFwcGVyLFxyXG4jbWVzc2VuZ2VyLXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI3VzZXItcGFuZWwtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiN1c2VyLXNlYXJjaCxcclxuI25ldy1tZXNzYWdlLWlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuI3VzZXItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udXNlci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLXdyYXBwZXI6aG92ZXI6bm90KC51c2VyLW1zZy1udW1iZXIpIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVzZXItc3RhdHVzLWljb24ge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNSwgMTA2LCAyMDMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG5cclxuLnVzZXItbXNnLW51bWJlciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnVzZXItbXNnLW51bWJlcjplbXB0eSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI21lc3Nlbmdlci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4jbWVzc2FnZS1oZWFkZXItd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuI21lc3NhZ2VzIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pOyAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI2NoYXQtaW52aXRlLW1vZGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1lc3NhZ2UtaGVhZGVyLFxyXG4ubWVzc2FnZS1mb290ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyNSwgMjI1KTtcclxufVxyXG5cclxuLm1lc3NhZ2UtdHh0IHtcclxuICB3aWR0aDogMTAwJTsgIFxyXG4gIGhlaWdodDogYXV0bztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuI25ldy1tZXNzYWdlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuI2NoYXQtZm9vdGVyLXdyYXBwZXIgeyAgXHJcbiAgb3JkZXI6IDM7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayB7XHJcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5yc3Mtc3ZnIHtcclxuICB3aWR0aDogNnJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbiNwb3dlci1sYXllciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg2NCwgNjMsIDYxLCAwLjgwKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiNtb2RhbC1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMXJlbTtcclxuICByaWdodDogMXJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZS1zdmcge1xyXG4gIGZpbGw6IGJsYWNrO1xyXG59XHJcblxyXG4jbW9kYWwtY2xvc2U6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMTE1JSk7XHJcbn1cclxuXHJcbi5oaWRkZW4tbW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4jbW9kYWwtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBcclxuICAjbG9naW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICB9XHJcbiAgICBcclxuICAjbWFpbi1jaGF0LXdyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICN1c2VyLWxpc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIC51c2VyLXdyYXBwZXIge1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAjbWVzc2VuZ2VyLXdyYXBwZXIge1xyXG4gICAgZmxleC1ncm93OiAyO1xyXG4gIH1cclxuXHJcbiAgI3VzZXItcGFuZWwtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuICBcclxuICAjY2hhdC1oZWFkZXItd3JhcHBlcixcclxuICAjY2hhdC1mb290ZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsMENBQTBDO0lBQzFDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMscURBQXFEO0VBQ3ZEOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztBQUVGO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUE7RUFD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QWdDO0VBQ2hDLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVGO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7QUFDaEI7O0VBRUU7O0lBRUUsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJvZHktY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXHJcXG4gICAgLS1ib2R5LWJnLWNvbG9yOiBiaXNxdWU7XFxyXFxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoNCwgNDgsIDk1KTtcXHJcXG4gICAgLS10cmFuc2l0aW9uLXRpbWU6IDAuOHM7XFxyXFxuICAgIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgLS1jb21tb24tdGl0bGUtY29sb3I6IHJnYigxOTAsIDIxNCwgMjMwKTtcXHJcXG4gICAgLS1pbnB1dC1mb2N1cy1iZy1jb2xvcjogcmdiKDIxMSwgMjA5LCAyMDkpO1xcclxcbiAgICAtLWlucHV0LWZvY3VzLWNvbG9yOiBibGFjaztcXHJcXG4gICAgLS1yYWNlLWJ0bi1iZy1jb2xvcjogI2UyZjliNjtcXHJcXG4gICAgLS13aW5uZXJzLWhlYWRlci1iZy1jb2xvcjogcmdiKDE1LCAxMDYsIDIwMyk7XFxyXFxuICAgIC0tbW9kYWwtYmctY29sb3I6IHJnYigxNzksIDIzMCwgMTg3KTtcXHJcXG4gICAgLS1tb2RhbC1idXR0b24tY29sb3I6IHJnYigyNTMsIDE2NCwgMyk7XFxyXFxuICAgIC0tbW9kYWwtYnV0dG9uLWNvbG9yLWRpc2FibGVkOiByZ2JhKDI1MywgMTY0LCAzLCAwLjYpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBodG1sLCBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4jbWFpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4jbG9naW4td3JhcHBlciB7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9naW4taGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtd3JhcCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgd2lkdGg6IDhyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1sYWJlbCB7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4taW5wdXQtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtd2FybmluZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiByZ2IoMjA1LCA0NSwgMTcpO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ2luLWJ0bi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubG9naW4td2luZG93LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLXdpbmRvdy1idG46ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLXdpbmRvdy1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufSAqL1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdC13cmFwcGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdC1oZWFkZXItd3JhcHBlcixcXHJcXG4jY2hhdC1mb290ZXItd3JhcHBlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNjaGF0LWhlYWRlci13cmFwcGVyIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWJ0bi13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jaGF0LXdyYXBwZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBvcmRlcjogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItcGFuZWwtd3JhcHBlcixcXHJcXG4jbWVzc2VuZ2VyLXdyYXBwZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItcGFuZWwtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1zZWFyY2gsXFxyXFxuI25ldy1tZXNzYWdlLWlucHV0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi51c2VyLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci13cmFwcGVyOmhvdmVyOm5vdCgudXNlci1tc2ctbnVtYmVyKSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItc3RhdHVzLWljb24ge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNSwgMTA2LCAyMDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW1zZy1udW1iZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi51c2VyLW1zZy1udW1iZXI6ZW1wdHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3Nlbmdlci13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2UtaGVhZGVyLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2VzIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7ICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdC1pbnZpdGUtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZS13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtaGVhZGVyLFxcclxcbi5tZXNzYWdlLWZvb3RlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyNSwgMjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtdHh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlOyAgXFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbiNuZXctbWVzc2FnZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYm9keS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNjaGF0LWZvb3Rlci13cmFwcGVyIHsgIFxcclxcbiAgb3JkZXI6IDM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucnNzLXN2ZyB7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcG93ZXItbGF5ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg2NCwgNjMsIDYxLCAwLjgwKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0b3A6IDFyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNsb3NlLXN2ZyB7XFxyXFxuICBmaWxsOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWNsb3NlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTE1JSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tbW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiNtb2RhbC10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIFxcclxcbiAgI2xvZ2luLXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gIH1cXHJcXG4gICAgXFxyXFxuICAjbWFpbi1jaGF0LXdyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VzZXItbGlzdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci13cmFwcGVyIHtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWVzc2VuZ2VyLXdyYXBwZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdXNlci1wYW5lbC13cmFwcGVyIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4gIFxcclxcbiAgI2NoYXQtaGVhZGVyLXdyYXBwZXIsXFxyXFxuICAjY2hhdC1mb290ZXItd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuLi9jb21tb24vY29tbW9uJztcbmltcG9ydCB7IGNoYXRXcmFwcGVyIH0gZnJvbSAnLi4vY2hhdC9jaGF0LW1haW4nO1xuaW1wb3J0IHsgb3duVXNlck5hbWUgfSBmcm9tICcuLi9jaGF0L2NoYXQtaGVhZGVyJztcbmltcG9ydCB7IHBvcHVsYXRlVXNlckxpc3QsIHVzZXJMaXN0IH0gZnJvbSAnLi4vY2hhdC9jaGF0LXVzZXJzJztcbmltcG9ydCB7IGFjdGl2ZVVzZXIsIGxvZ2luV2luZG93IH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgdXNlclRvQ2hhdE5hbWUsIHVzZXJUb0NoYXRTdGF0dXMsIHNob3dNZXNzYWdlcyB9IGZyb20gJy4uL2NoYXQvY2hhdC1tZXNzYWdlcyc7XG5leHBvcnQgbGV0IHVzZXJPbkxpbmUgPSBbXTtcbmV4cG9ydCBsZXQgdXNlck9mZkxpbmUgPSBbXTtcbmxldCB1c2VyT25MaW5lSW5pdCA9IGZhbHNlO1xubGV0IHVzZXJPZmZMaW5lSW5pdCA9IGZhbHNlO1xubGV0IHdTb2NrZXQ7XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZXJ2ZXJBdXRoKG5hbWUsIHBhc3MpIHtcbiAgICAvLyBUb0RvIEVycm9yIGhhbmRsaW5nXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYlNvY2tldHNfQVBJL1dyaXRpbmdfV2ViU29ja2V0X2NsaWVudF9hcHBsaWNhdGlvbnMjY29ubmVjdGlvbl9lcnJvcnNcbiAgICB3U29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6NDAwMCcpO1xuICAgIHdTb2NrZXQub25vcGVuID0gKCkgPT4gYXV0aG9yaXplVXNlcih3U29ja2V0LCBuYW1lLCBwYXNzKTtcbiAgICB3U29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4gb25NZXNzYWdlQWN0aW9uKGV2ZW50LCB3U29ja2V0LCBuYW1lLCBwYXNzKTtcbn1cbmZ1bmN0aW9uIGF1dGhvcml6ZVVzZXIoc29ja2V0T2JqLCBuYW1lLCBwYXNzKSB7XG4gICAgY29uc29sZS5sb2coJ3dTb2NrZXQgb3BlbmVkJyk7XG4gICAgY29uc3QgdXNlckF1dGhEYXRhID0ge1xuICAgICAgICBpZDogYHVzZXIgJHtuYW1lfSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0YCxcbiAgICAgICAgdHlwZTogJ1VTRVJfTE9HSU4nLFxuICAgICAgICBwYXlsb2FkOiB7IHVzZXI6IHsgbG9naW46IGAke25hbWV9YCwgcGFzc3dvcmQ6IGAke3Bhc3N9YCB9IH0sXG4gICAgfTtcbiAgICBzb2NrZXRPYmouc2VuZChKU09OLnN0cmluZ2lmeSh1c2VyQXV0aERhdGEpKTtcbn1cbmZ1bmN0aW9uIG9uTWVzc2FnZUFjdGlvbihldmVudCwgc29ja2V0T2JqLCBuYW1lLCBwYXNzKSB7XG4gICAgY29uc3Qgc2VydmVyUmVzcCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgY29uc3QgbWVzc2FnZUFycmF5ID0gW107XG4gICAgY29uc29sZS5sb2coJ1NlcnZlciByZXNwb25zZSByZWNlaXZlZDogJywgc2VydmVyUmVzcCwgJ3Jlc3BvbnNlIGlkID0gJywgc2VydmVyUmVzcC5pZCk7XG4gICAgc3dpdGNoIChzZXJ2ZXJSZXNwLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVVNFUl9MT0dJTic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUl9MT0dJTicpO1xuICAgICAgICAgICAgcmVxdWVzdFJlZ2lzdGVyZWRVc2VySW5mbyhzb2NrZXRPYmopO1xuICAgICAgICAgICAgb3BlbkNoYXRXaW5kb3cobmFtZSwgcGFzcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9BQ1RJVkUnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdGl2ZSB1c2VycyByZWNlaXZlZCcpO1xuICAgICAgICAgICAgdXNlck9uTGluZSA9IHNlcnZlclJlc3AucGF5bG9hZC51c2VycztcbiAgICAgICAgICAgIHVzZXJPbkxpbmUgPSBzb3J0VXNlcnModXNlck9uTGluZSk7XG4gICAgICAgICAgICB1c2VyT25MaW5lSW5pdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9JTkFDVElWRSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5hY3RpdmUgdXNlcnMgcmVjZWl2ZWQnKTtcbiAgICAgICAgICAgIHVzZXJPZmZMaW5lID0gc2VydmVyUmVzcC5wYXlsb2FkLnVzZXJzO1xuICAgICAgICAgICAgLy8gc29ydFVzZXJzKHVzZXJPZmZMaW5lKTtcbiAgICAgICAgICAgIHVzZXJPZmZMaW5lSW5pdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9FWFRFUk5BTF9MT0dJTic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcmQtcGFydHkgVXNlciByZWNlaXZlZCcpO1xuICAgICAgICAgICAgaWYgKHNlcnZlclJlc3AucGF5bG9hZC51c2VyLmxvZ2luID09PSB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICB1cGRhdGVNZXNzZW5nZXJUaXRsZSgnbG9naW4nKTtcbiAgICAgICAgICAgIHJlcXVlc3RSZWdpc3RlcmVkVXNlckluZm8oc29ja2V0T2JqKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNU0dfRlJPTV9VU0VSJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIE1haWxpbmcgaGlzdG9yeSBmZXRjaGVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXNwLnBheWxvYWQubWVzc2FnZXMpO1xuICAgICAgICAgICAgc2hvd01lc3NhZ2VzKHNlcnZlclJlc3AucGF5bG9hZC5tZXNzYWdlcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTVNHX1NFTkQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgc2VudCBtYWlsIG9yIHJlY2VpdmVkIG1haWwnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcnZlclJlc3AucGF5bG9hZC5tZXNzYWdlKTtcbiAgICAgICAgICAgIG1lc3NhZ2VBcnJheS5wdXNoKHNlcnZlclJlc3AucGF5bG9hZC5tZXNzYWdlKTtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlcyhtZXNzYWdlQXJyYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VTRVJfTE9HT1VUJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBIHVzZXIgbG9nZ2VkIG91dCcpO1xuICAgICAgICAgICAgY2xvc2VDaGF0V2luZG93KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9FWFRFUk5BTF9MT0dPVVQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0EgdXNlciBsb2dnZWQgb3V0Jyk7XG4gICAgICAgICAgICBpZiAoc2VydmVyUmVzcC5wYXlsb2FkLnVzZXIubG9naW4gPT09IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NlbmdlclRpdGxlKCdsb2dvdXQnKTtcbiAgICAgICAgICAgIHJlcXVlc3RSZWdpc3RlcmVkVXNlckluZm8oc29ja2V0T2JqKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVjZWl2ZWQnKTtcbiAgICAgICAgICAgIHNob3dNb2RhbCgnVXNlciAnICsgbmFtZSArICcgaXMgYWxyZWFkeSBsb2dnZWQgaW4nLCBsb2dpbldpbmRvdyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHVzZXJPbkxpbmVJbml0ID09PSB0cnVlICYmIHVzZXJPZmZMaW5lSW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBMaXN0IFBvcHVsYXRlZCcsIHVzZXJMaXN0LCB1c2VyT25MaW5lLCB1c2VyT2ZmTGluZSk7XG4gICAgICAgIHBvcHVsYXRlVXNlckxpc3QodXNlckxpc3QsIHVzZXJPbkxpbmUsIHVzZXJPZmZMaW5lKTtcbiAgICAgICAgdXNlck9uTGluZUluaXQgPSBmYWxzZTtcbiAgICAgICAgdXNlck9mZkxpbmVJbml0ID0gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlTWVzc2VuZ2VyVGl0bGUoc3RhdHVzKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZU1lc3NlbmdlclRpdGxlIHN0YXR1cyA9Jywgc3RhdHVzKTtcbiAgICBpZiAoc3RhdHVzID09PSAnbG9naW4nKSB7XG4gICAgICAgIHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPSAnb25saW5lJztcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy5zdHlsZS5jb2xvciA9ICcjODdBOTIyJztcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICdvZmZsaW5lJztcbiAgICAgICAgLy8gRG9lc24ndCB3b3JrXG4gICAgICAgIHVzZXJUb0NoYXRTdGF0dXMuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICB9XG59XG5mdW5jdGlvbiBzb3J0VXNlcnModXNlckFycmF5KSB7XG4gICAgY29uc3QgdG1wQXJyID0gW107XG4gICAgLy8gU2VhcmNoIGFuZCBkZWxldGUgQWN0aXZlIFVzZXIgbmFtZVxuICAgIC8vIFNvcnQgYXJyYXlcbiAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlckFycmF5KSB7XG4gICAgICAgIGlmICh1c2VyLmxvZ2luICE9PSBhY3RpdmVVc2VyLm5hbWUpXG4gICAgICAgICAgICB0bXBBcnIucHVzaCh1c2VyKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3NvcnRVc2VycyAnLCAndXNlckFycmF5ID0gJywgdXNlckFycmF5LCAndG1wQXJyID0gJywgdG1wQXJyKTtcbiAgICByZXR1cm4gdG1wQXJyO1xufVxuZnVuY3Rpb24gb3BlbkNoYXRXaW5kb3cobmFtZSwgcGFzcykge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0obmFtZSwgcGFzcyk7XG4gICAgYWN0aXZlVXNlci5uYW1lID0gbmFtZTtcbiAgICBhY3RpdmVVc2VyLnBhc3MgPSBwYXNzO1xuICAgIG93blVzZXJOYW1lLnRleHRDb250ZW50ID0gYWN0aXZlVXNlci5uYW1lO1xuICAgIGxvZ2luV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2hhdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cbmZ1bmN0aW9uIGNsb3NlQ2hhdFdpbmRvdygpIHtcbiAgICBsb2dpbldpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNoYXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5mdW5jdGlvbiByZXF1ZXN0UmVnaXN0ZXJlZFVzZXJJbmZvKHNvY2tldE9iaikge1xuICAgIGNvbnN0IGNoYXRVc2VyT25saW5lRGF0YSA9IHtcbiAgICAgICAgaWQ6IGBsaXN0IG9mIHVzZXJzIG9ubGluZWAsXG4gICAgICAgIHR5cGU6ICdVU0VSX0FDVElWRScsXG4gICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgfTtcbiAgICBzb2NrZXRPYmouc2VuZChKU09OLnN0cmluZ2lmeShjaGF0VXNlck9ubGluZURhdGEpKTtcbiAgICBjb25zdCBjaGF0VXNlck9mZmxpbmVEYXRhID0ge1xuICAgICAgICBpZDogYGxpc3Qgb2YgdXNlcnMgb2ZmbGluZWAsXG4gICAgICAgIHR5cGU6ICdVU0VSX0lOQUNUSVZFJyxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9O1xuICAgIHNvY2tldE9iai5zZW5kKEpTT04uc3RyaW5naWZ5KGNoYXRVc2VyT2ZmbGluZURhdGEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWxsTWVzc2FnZUxpc3QoKSB7XG4gICAgY29uc3QgZmV0Y2hNYWlsUmVxT2JqID0ge1xuICAgICAgICBpZDogJ0ZldGNoIG1haWxpbmcgd2l0aCB1c2VyICcgKyB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgdHlwZTogJ01TR19GUk9NX1VTRVInLFxuICAgICAgICBwYXlsb2FkOiB7IHVzZXI6IHsgbG9naW46IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50IH0gfSxcbiAgICB9O1xuICAgIHdTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShmZXRjaE1haWxSZXFPYmopKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZU9iaiA9IHtcbiAgICAgICAgaWQ6ICduZXcgbWVzc2FnZSBmcm9tICcgKyBhY3RpdmVVc2VyLm5hbWUgKyAnIHRvICcgKyB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgdHlwZTogJ01TR19TRU5EJyxcbiAgICAgICAgcGF5bG9hZDogeyBtZXNzYWdlOiB7IHRvOiB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCwgdGV4dDogbWVzc2FnZSB9IH0sXG4gICAgfTtcbiAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iaikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dEN1cnJlbnRVc2VyKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICAgIGlkOiAnbG9nIG91dCB1c2VyICcgKyBhY3RpdmVVc2VyLm5hbWUsXG4gICAgICAgIHR5cGU6ICdVU0VSX0xPR09VVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBsb2dpbjogYWN0aXZlVXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhY3RpdmVVc2VyLnBhc3MsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG4gICAgd1NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VPYmopKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93Rm9vdGVyKHBhcmVudCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoYXQtZm9vdGVyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKGZvb3Rlcik7XG4gICAgY29uc3Qgc2Nob29sTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzY2hvb2xMb2dvLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2FwcC5ycy5zY2hvb2wvJyk7XG4gICAgc2Nob29sTG9nby5jbGFzc0xpc3QuYWRkKCdmb290ZXItbGluaycpO1xuICAgIHNjaG9vbExvZ28uaW5uZXJIVE1MID0gYDxzdmcgaWQ9XCJMYXllcl8xXCIgY2xhc3M9XCJyc3Mtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNTUyLjggMjA1LjNcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9LnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyl9LnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyl9LnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyl9LnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0NXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0Niwuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q4LC5zdDl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKX0uc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjx0aXRsZT5yc19zY2hvb2xfanM8L3RpdGxlPjxwYXRoIGQ9XCJNMjg1LjQgNjhsMjYuMy0xLjdjLjYgNC4zIDEuNyA3LjUgMy41IDkuOCAyLjkgMy42IDYuOSA1LjQgMTIuMiA1LjQgMy45IDAgNy0uOSA5LjEtMi44IDItMS41IDMuMi0zLjkgMy4yLTYuNCAwLTIuNC0xLjEtNC43LTMtNi4yLTItMS44LTYuNy0zLjYtMTQuMS01LjItMTIuMS0yLjctMjAuOC02LjMtMjUuOS0xMC45LTUuMS00LjMtOC0xMC42LTcuOC0xNy4zIDAtNC42IDEuNC05LjIgNC0xMyAzLTQuMyA3LjEtNy43IDEyLTkuNiA1LjMtMi4zIDEyLjctMy41IDIyLTMuNSAxMS40IDAgMjAuMSAyLjEgMjYuMSA2LjQgNiA0LjIgOS42IDExIDEwLjcgMjAuM2wtMjYgMS41Yy0uNy00LTIuMS02LjktNC40LTguOHMtNS4zLTIuOC05LjItMi44Yy0zLjIgMC01LjYuNy03LjIgMi0xLjUgMS4yLTIuNSAzLTIuNCA1IDAgMS41LjggMi45IDIgMy44IDEuMyAxLjIgNC40IDIuMyA5LjMgMy4zIDEyLjEgMi42IDIwLjcgNS4yIDI2IDcuOSA1LjMgMi43IDkuMSA2IDExLjQgOS45IDIuNCA0IDMuNiA4LjYgMy41IDEzLjMgMCA1LjYtMS42IDExLjItNC44IDE1LjktMy4zIDQuOS03LjkgOC43LTEzLjMgMTEtNS43IDIuNS0xMi45IDMuOC0yMS41IDMuOC0xNS4yIDAtMjUuNy0yLjktMzEuNi04LjhTMjg2LjEgNzcgMjg1LjQgNjh6TTYuMyA5Ny42VjguMmg0Ni4xYzguNSAwIDE1LjEuNyAxOS42IDIuMiA0LjQgMS40IDguMyA0LjMgMTAuOSA4LjIgMi45IDQuMyA0LjMgOS4zIDQuMiAxNC41LjMgOC44LTQuMiAxNy4yLTExLjkgMjEuNi0zIDEuNy02LjMgMi45LTkuNyAzLjUgMi41LjcgNSAxLjkgNy4yIDMuMyAxLjcgMS40IDMuMSAzIDQuNCA0LjcgMS41IDEuNyAyLjggMy42IDMuOSA1LjZsMTMuNCAyNS45SDYzTDQ4LjIgNzAuMmMtMS45LTMuNS0zLjUtNS44LTUtNi45LTItMS40LTQuNC0yLjEtNi44LTIuMUgzNHYzNi4zSDYuM3pNMzQgNDQuNGgxMS43YzIuNS0uMiA0LjktLjYgNy4zLTEuMiAxLjgtLjMgMy40LTEuMyA0LjUtMi44IDIuNy0zLjYgMi4zLTguNy0xLTExLjgtMS44LTEuNS01LjMtMi4zLTEwLjMtMi4zSDM0djE4LjF6TTAgMTc0LjJsMjYuMy0xLjdjLjYgNC4zIDEuNyA3LjUgMy41IDkuOCAyLjggMy42IDYuOSA1LjUgMTIuMiA1LjUgMy45IDAgNy0uOSA5LjEtMi44IDItMS42IDMuMi0zLjkgMy4yLTYuNCAwLTIuNC0xLjEtNC43LTMtNi4yLTItMS44LTYuNy0zLjYtMTQuMi01LjItMTIuMS0yLjctMjAuOC02LjMtMjUuOS0xMC45LTUuMS00LjMtOC0xMC42LTcuOC0xNy4zIDAtNC42IDEuNC05LjIgNC0xMyAzLTQuMyA3LjEtNy43IDEyLTkuNiA1LjMtMi4zIDEyLjctMy41IDIyLTMuNSAxMS40IDAgMjAuMSAyLjEgMjYuMSA2LjRzOS41IDExIDEwLjYgMjAuM2wtMjYgMS41Yy0uNy00LTIuMS02LjktNC40LTguOC0yLjItMS45LTUuMy0yLjgtOS4yLTIuNy0zLjIgMC01LjYuNy03LjIgMi4xLTEuNiAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjYgMTMuMiAwIDUuNi0xLjcgMTEuMS00LjggMTUuOC0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOC01LjktNi05LjItMTMuNC0xMC0yMi40elwiLz48cGF0aCBkPVwiTTEzMyAxNjcuMmwyNC4yIDcuM2MtMS4zIDYuMS00IDExLjktNy43IDE3LTMuNCA0LjUtNy45IDgtMTMgMTAuMy01LjIgMi4zLTExLjggMy41LTE5LjggMy41LTkuNyAwLTE3LjctMS40LTIzLjgtNC4yLTYuMi0yLjgtMTEuNS03LjgtMTYtMTQuOS00LjUtNy4xLTYuNy0xNi4yLTYuNy0yNy4zIDAtMTQuOCAzLjktMjYuMiAxMS44LTM0LjFzMTktMTEuOSAzMy40LTExLjljMTEuMyAwIDIwLjEgMi4zIDI2LjYgNi44IDYuNCA0LjYgMTEuMiAxMS42IDE0LjQgMjFsLTI0LjQgNS40Yy0uNi0yLjEtMS41LTQuMi0yLjctNi0xLjUtMi4xLTMuNC0zLjctNS43LTQuOS0yLjMtMS4yLTQuOS0xLjctNy41LTEuNy02LjMgMC0xMS4xIDIuNS0xNC40IDcuNi0yLjUgMy43LTMuOCA5LjYtMy44IDE3LjYgMCA5LjkgMS41IDE2LjcgNC41IDIwLjQgMyAzLjcgNy4yIDUuNSAxMi43IDUuNSA1LjMgMCA5LjMtMS41IDEyLTQuNCAyLjctMy4xIDQuNy03LjQgNS45LTEzem01Ni41LTUyLjhoMjcuNnYzMS4zaDMwLjJ2LTMxLjNoMjcuOHY4OS40aC0yNy44di0zNi4yaC0zMC4ydjM2LjJoLTI3LjZ2LTg5LjR6XCIvPjxwYXRoIGQ9XCJNMjcxLjMgMTU5LjFjMC0xNC42IDQuMS0yNiAxMi4yLTM0LjEgOC4xLTguMSAxOS41LTEyLjIgMzQtMTIuMiAxNC45IDAgMjYuMyA0IDM0LjQgMTJTMzY0IDE0NCAzNjQgMTU4LjRjMCAxMC41LTEuOCAxOS01LjMgMjUuNy0zLjQgNi42LTguNyAxMi0xNS4yIDE1LjYtNi43IDMuNy0xNSA1LjYtMjQuOSA1LjYtMTAuMSAwLTE4LjQtMS42LTI1LTQuOC02LjgtMy40LTEyLjQtOC43LTE2LjEtMTUuMi00LjEtNy02LjItMTUuNy02LjItMjYuMnptMjcuNi4xYzAgOSAxLjcgMTUuNSA1IDE5LjUgMy4zIDMuOSA3LjkgNS45IDEzLjcgNS45IDUuOSAwIDEwLjUtMS45IDEzLjgtNS44czQuOS0xMC44IDQuOS0yMC44YzAtOC40LTEuNy0xNC42LTUuMS0xOC40LTMuNC0zLjktOC01LjgtMTMuOC01LjgtNS4xLS4yLTEwIDItMTMuNCA1LjktMy40IDMuOS01LjEgMTAuNC01LjEgMTkuNXptOTMuNC0uMWMwLTE0LjYgNC4xLTI2IDEyLjItMzQuMSA4LjEtOC4xIDE5LjUtMTIuMiAzNC0xMi4yIDE0LjkgMCAyNi40IDQgMzQuNCAxMlM0ODUgMTQ0IDQ4NSAxNTguNGMwIDEwLjUtMS44IDE5LTUuMyAyNS43LTMuNCA2LjYtOC43IDEyLTE1LjIgMTUuNi02LjcgMy43LTE1IDUuNi0yNC45IDUuNi0xMC4xIDAtMTguNC0xLjYtMjUtNC44LTYuOC0zLjQtMTIuNC04LjctMTYuMS0xNS4yLTQuMS03LTYuMi0xNS43LTYuMi0yNi4yem0yNy42LjFjMCA5IDEuNyAxNS41IDUgMTkuNSAzLjMgMy45IDcuOSA1LjkgMTMuNyA1LjkgNS45IDAgMTAuNS0xLjkgMTMuOC01LjggMy4zLTMuOSA0LjktMTAuOCA0LjktMjAuOCAwLTguNC0xLjctMTQuNi01LjEtMTguNC0zLjQtMy45LTgtNS44LTEzLjgtNS44LTUuMS0uMi0xMC4xIDItMTMuNCA1LjktMy40IDMuOS01LjEgMTAuNC01LjEgMTkuNXpcIi8+PHBhdGggZD1cIk00ODIuMSAxMTQuNGgyNy42djY3LjRoNDMuMXYyMkg0ODJ2LTg5LjR6XCIvPjxlbGxpcHNlIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjbGFzcz1cInN0MFwiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjxkZWZzPjxlbGxpcHNlIGlkPVwiU1ZHSURfMV9cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzJfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzFfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDFcIj48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuODIgNjguMzUzKVwiIGNsYXNzPVwic3QwXCIgZD1cIk0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45elwiLz48ZyBpZD1cIkxheWVyXzJfMV9cIj48ZGVmcz48cGF0aCBpZD1cIlNWR0lEXzNfXCIgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MylcIiBkPVwiTTMzMC45LTE0LjJoMTc5Ljh2MTY1LjFIMzMwLjl6XCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9XCJTVkdJRF80X1wiPjx1c2UgeGxpbms6aHJlZj1cIiNTVkdJRF8zX1wiIG92ZXJmbG93PVwidmlzaWJsZVwiLz48L2NsaXBQYXRoPjxnIGlkPVwiTGF5ZXJfMS0yXCIgY2xhc3M9XCJzdDJcIj48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDBcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48ZGVmcz48ZWxsaXBzZSBpZD1cIlNWR0lEXzVfXCIgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9XCJTVkdJRF82X1wiPjx1c2UgeGxpbms6aHJlZj1cIiNTVkdJRF81X1wiIG92ZXJmbG93PVwidmlzaWJsZVwiLz48L2NsaXBQYXRoPjxnIGNsYXNzPVwic3QzXCI+PHBhdGggdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBjbGFzcz1cInN0MFwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjxkZWZzPjxwYXRoIGlkPVwiU1ZHSURfN19cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKVwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9XCJTVkdJRF84X1wiPjx1c2UgeGxpbms6aHJlZj1cIiNTVkdJRF83X1wiIG92ZXJmbG93PVwidmlzaWJsZVwiLz48L2NsaXBQYXRoPjxnIGNsYXNzPVwic3Q0XCI+PGVsbGlwc2UgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGNsYXNzPVwic3Q1XCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PC9nPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgY2xhc3M9XCJzdDZcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDdcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKVwiIGNsYXNzPVwic3QwXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PGRlZnM+PHBhdGggaWQ9XCJTVkdJRF85X1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzEwX1wiPjx1c2UgeGxpbms6aHJlZj1cIiNTVkdJRF85X1wiIG92ZXJmbG93PVwidmlzaWJsZVwiLz48L2NsaXBQYXRoPjxnIGNsYXNzPVwic3Q4XCI+PGVsbGlwc2UgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGNsYXNzPVwic3Q1XCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PC9nPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgY2xhc3M9XCJzdDlcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuODIgNjguMzUzKVwiIGNsYXNzPVwic3Q3XCIgZD1cIk0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45elwiLz48L2c+PGVsbGlwc2UgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGNsYXNzPVwic3Q3XCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PHBhdGggZD1cIk0zOTIuNCA2MS4zbDEwLTcgMTIuMyAxNy41YzIuMSAyLjggMy43IDUuOCA0LjkgOS4xLjcgMi41LjUgNS4yLS41IDcuNi0xLjMgMy0zLjQgNS41LTYuMiA3LjMtMy4zIDIuMy02LjEgMy42LTguNSA0LTIuMy40LTQuNyAwLTYuOS0xLTIuNC0xLjItNC41LTIuOS02LjEtNS4xbDguNi04Yy43IDEuMSAxLjYgMi4xIDIuNiAyLjkuNy41IDEuNS44IDIuNC44LjcgMCAxLjQtLjMgMS45LS43IDEtLjYgMS43LTEuOCAxLjYtMy0uMy0xLjctMS0zLjQtMi4xLTQuN2wtMTQtMTkuN3ptMzAgMTEuMWw5LjEtNy4yYzEgMS4yIDIuMyAyLjEgMy43IDIuNiAyIC42IDQuMS4yIDUuOC0xLjEgMS4yLS44IDIuMi0xLjkgMi42LTMuMy42LTEuOC0uNC0zLjgtMi4yLTQuNC0uMy0uMS0uNi0uMi0uOS0uMi0xLjItLjEtMy4zLjQtNi40IDEuNy01LjEgMi4xLTkuMSAyLjktMTIuMSAyLjYtMi45LS4zLTUuNi0xLjgtNy4yLTQuMy0xLjItMS43LTEuOC0zLjctMS45LTUuNyAwLTIuMy42LTQuNiAxLjktNi41IDEuOS0yLjcgNC4yLTUgNy02LjggNC4yLTIuOSA3LjktNC4zIDExLjEtNC4zIDMuMiAwIDYuMiAxLjUgOSA0LjZsLTkgNy4xYy0xLjgtMi4zLTUuMi0yLjgtNy41LTFsLS4zLjNjLTEgLjYtMS43IDEuNS0yLjEgMi42LS4zLjgtLjEgMS43LjQgMi40LjQuNSAxIC45IDEuNy45LjguMSAyLjItLjMgNC4yLTEuMiA1LTIuMSA4LjgtMy4zIDExLjQtMy43IDIuMi0uNCA0LjUtLjIgNi42LjcgMS45LjggMy41IDIuMiA0LjYgMy45IDEuNCAyIDIuMiA0LjQgMi4zIDYuOS4xIDIuNi0uNiA1LjEtMiA3LjMtMS44IDIuNy00LjEgNS02LjggNi44LTUuNSAzLjgtMTAgNS40LTEzLjYgNC44LTMuOS0uNi03LjEtMi42LTkuNC01LjV6XCIvPjwvZz48L2c+PC9nPjwvc3ZnPmA7XG4gICAgZm9vdGVyLmFwcGVuZChzY2hvb2xMb2dvKTtcbiAgICBjb25zdCBhdXRob3JHSHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGF1dGhvckdIdWIuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVpZHJ1Jyk7XG4gICAgYXV0aG9yR0h1Yi5jbGFzc0xpc3QuYWRkKCdmb290ZXItbGluaycpO1xuICAgIGF1dGhvckdIdWIudGV4dENvbnRlbnQgPSAnSWdvciBDaGVjaGV1cm92JztcbiAgICBmb290ZXIuYXBwZW5kKGF1dGhvckdIdWIpO1xuICAgIGNvbnN0IGFwcFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXBwWWVhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FwcC15ZWFyJyk7XG4gICAgYXBwWWVhci50ZXh0Q29udGVudCA9ICcyMDI0JztcbiAgICBmb290ZXIuYXBwZW5kKGFwcFllYXIpO1xufVxuIiwiaW1wb3J0IHsgYWN0aXZlVXNlciB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IGxvZ291dEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5leHBvcnQgY29uc3Qgb3duVXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93SGVhZGVyKHBhcmVudCkge1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1oZWFkZXItd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoaGVhZGVyV3JhcHBlcik7XG4gICAgb3duVXNlck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdvd24tdXNlci1uYW1lJyk7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZVVzZXIubmFtZSA9ICcsIGFjdGl2ZVVzZXIpO1xuICAgIG93blVzZXJOYW1lLnRleHRDb250ZW50ID0gYWN0aXZlVXNlci5uYW1lO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKG93blVzZXJOYW1lKTtcbiAgICBjb25zdCBhcHBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FwcC1uYW1lJyk7XG4gICAgYXBwTmFtZS50ZXh0Q29udGVudCA9ICdGdW4gQ2hhdCc7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQoYXBwTmFtZSk7XG4gICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItYnRuLXdyYXBwZXInKTtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZChidG5XcmFwcGVyKTtcbiAgICBjb25zdCBsb2dPdXRCVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2dPdXRCVE4uc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItbG9nb3V0LWJ0bicpO1xuICAgIGxvZ091dEJUTi5pbm5lclRleHQgPSAnTG9nIG91dCc7XG4gICAgYnRuV3JhcHBlci5hcHBlbmQobG9nT3V0QlROKTtcbiAgICBsb2dPdXRCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvZ291dEN1cnJlbnRVc2VyKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBzaG93SGVhZGVyIH0gZnJvbSAnLi9jaGF0LWhlYWRlcic7XG5pbXBvcnQgeyBzaG93Rm9vdGVyIH0gZnJvbSAnLi9jaGF0LWZvb3Rlcic7XG5pbXBvcnQgeyBzaG93VXNlclBhbmVsIH0gZnJvbSAnLi9jaGF0LXVzZXJzJztcbmltcG9ydCB7IHNob3dNZXNzYWdlUGFuZWwgfSBmcm9tICcuL2NoYXQtbWVzc2FnZXMnO1xuLy8gaW1wb3J0IHsgdXNlcnNPbkxpbmUsIHVzZXJzT2ZmTGluZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmV4cG9ydCBjb25zdCBjaGF0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXRXaW5kb3coKSB7XG4gICAgY2hhdFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjaGF0LXdyYXBwZXInKTtcbiAgICBjaGF0V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNoYXRXcmFwcGVyKTtcbiAgICBzaG93SGVhZGVyKGNoYXRXcmFwcGVyKTtcbiAgICBzaG93TWFpbldpbmRvdyhjaGF0V3JhcHBlcik7XG4gICAgc2hvd0Zvb3RlcihjaGF0V3JhcHBlcik7XG59XG5mdW5jdGlvbiBzaG93TWFpbldpbmRvdyhwYXJlbnQpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1jaGF0LXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1haW5XcmFwcGVyKTtcbiAgICBzaG93VXNlclBhbmVsKG1haW5XcmFwcGVyKTtcbiAgICBzaG93TWVzc2FnZVBhbmVsKG1haW5XcmFwcGVyKTtcbn1cbiIsImltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyBhY3RpdmVVc2VyIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuZXhwb3J0IGNvbnN0IHVzZXJUb0NoYXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgdXNlclRvQ2hhdFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW52aXRlTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3Qgc2VuZEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IG5ld01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUludml0ZU1TRyhtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZUludml0ZU1TRyB0byAnLCBtZXNzYWdlKTtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZVBhbmVsKHBhcmVudCkge1xuICAgIGNvbnN0IG1lc3NlbmdlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzZW5nZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2VuZ2VyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1lc3NlbmdlcldyYXBwZXIpO1xuICAgIHNob3dNZXNzYWdlUGFuZWxIZWFkZXIobWVzc2VuZ2VyV3JhcHBlcik7XG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlcycpO1xuICAgIG1lc3NlbmdlcldyYXBwZXIuYXBwZW5kKG1lc3NhZ2VzKTtcbiAgICBpbnZpdGVNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1pbnZpdGUtbW9kYWwnKTtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHVzZXIgdG8gc3RhcnQgbWVzc2FnaW5nJztcbiAgICBtZXNzZW5nZXJXcmFwcGVyLmFwcGVuZChpbnZpdGVNZXNzYWdlKTtcbiAgICBzZW5kTmV3TWVzc2FnZVBhbmVsKG1lc3NlbmdlcldyYXBwZXIpO1xufVxuZnVuY3Rpb24gc2hvd01lc3NhZ2VQYW5lbEhlYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UtaGVhZGVyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKGhlYWRlcldyYXBwZXIpO1xuICAgIHVzZXJUb0NoYXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1uYW1lJyk7XG4gICAgdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh1c2VyVG9DaGF0TmFtZSk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItc3RhdHVzJyk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHVzZXJUb0NoYXRTdGF0dXMpO1xufVxuZnVuY3Rpb24gc2VuZE5ld01lc3NhZ2VQYW5lbChwYXJlbnQpIHtcbiAgICBjb25zdCBuZXdNZXNzYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LW1lc3NhZ2Utd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobmV3TWVzc2FnZVdyYXBwZXIpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICduZXctbWVzc2FnZS1pbnB1dCcpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXcml0ZSBuZXcgbWVzc2FnZSAuLi4nKTtcbiAgICBuZXdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLmFwcGVuZChuZXdNZXNzYWdlKTtcbiAgICBuZXdNZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBpZiAobmV3TWVzc2FnZS52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgc2VuZEJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmIChuZXdNZXNzYWdlLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHNlbmRCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB9KTtcbiAgICBzZW5kQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VuZC1tZXNzYWdlLWJ0bicpO1xuICAgIHNlbmRCVE4udGV4dENvbnRlbnQgPSAnU2VuZCc7XG4gICAgbmV3TWVzc2FnZVdyYXBwZXIuYXBwZW5kKHNlbmRCVE4pO1xuICAgIHNlbmRCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGludml0ZU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc2VuZE1lc3NhZ2UobmV3TWVzc2FnZS52YWx1ZSk7XG4gICAgICAgIG5ld01lc3NhZ2UudmFsdWUgPSAnJztcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZXMobWVzc2FnZUFycmF5KSB7XG4gICAgY29uc3QgbWVzc2FnZU51bSA9IG1lc3NhZ2VBcnJheS5sZW5ndGg7XG4gICAgaWYgKG1lc3NhZ2VBcnJheS5sZW5ndGggPiAwKVxuICAgICAgICBjaGFuZ2VJbnZpdGVNU0coJycpO1xuICAgIGNvbnNvbGUubG9nKCdzaG93TWVzc2FnZXMgbWVzc2FnZUFycmF5ID0gJywgbWVzc2FnZUFycmF5LCAnbWVzc2FnZU51bSA9ICcsIG1lc3NhZ2VOdW0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZU51bTsgaSsrKSB7XG4gICAgICAgIC8vIE1lc3NhZ2UgZnJvbSB0aGUgdXNlciBJJ20gY2hhdHRpbmcgbm93XG4gICAgICAgIGlmIChtZXNzYWdlQXJyYXlbaV0uZnJvbSA9PT0gdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgfHwgbWVzc2FnZUFycmF5W2ldLmZyb20gPT09IGFjdGl2ZVVzZXIubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2Utd3JhcHBlcicpO1xuICAgICAgICAgICAgbWVzc2FnZXMuYXBwZW5kKG1lc3NhZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1oZWFkZXInKTtcbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZChtZXNzYWdlSGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VTZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGZybyA9IG1lc3NhZ2VBcnJheVtpXS5mcm9tID09PSB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCA/IG1lc3NhZ2VBcnJheVtpXS5mcm9tIDogJ1lvdSc7XG4gICAgICAgICAgICBtZXNzYWdlU2VuZGVyLnRleHRDb250ZW50ID0gZnJvO1xuICAgICAgICAgICAgaWYgKGZybyA9PT0gJ1lvdScpXG4gICAgICAgICAgICAgICAgbWVzc2FnZVdyYXBwZXIuc3R5bGUuYWxpZ25TZWxmID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgbWVzc2FnZUhlYWRlci5hcHBlbmQobWVzc2FnZVNlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbXNnRGF0ZSA9IG5ldyBEYXRlKG1lc3NhZ2VBcnJheVtpXS5kYXRldGltZSk7XG4gICAgICAgICAgICBtZXNzYWdlRGF0ZS50ZXh0Q29udGVudCA9IGAke25vcm0obXNnRGF0ZS5nZXREYXRlKCkpfS0ke25vcm0obXNnRGF0ZS5nZXRNb250aCgpKX0tJHttc2dEYXRlLmdldEZ1bGxZZWFyKCl9ICR7bm9ybShtc2dEYXRlLmdldEhvdXJzKCkpfToke25vcm0obXNnRGF0ZS5nZXRNaW51dGVzKCkpfToke25vcm0obXNnRGF0ZS5nZXRTZWNvbmRzKCkpfWA7XG4gICAgICAgICAgICBtZXNzYWdlSGVhZGVyLmFwcGVuZChtZXNzYWdlRGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlVHh0LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtdHh0Jyk7XG4gICAgICAgICAgICBtZXNzYWdlVHh0LnRleHRDb250ZW50ID0gbWVzc2FnZUFycmF5W2ldLnRleHQ7XG4gICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5hcHBlbmQobWVzc2FnZVR4dCk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZm9vdGVyJyk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZUFycmF5W2ldLnN0YXR1cy5pc0VkaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VGb290ZXIudGV4dENvbnRlbnQgPSAnRWRpdGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VBcnJheVtpXS5zdGF0dXMuaXNSZWFkZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRm9vdGVyLnRleHRDb250ZW50ID0gJ09wZW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlQXJyYXlbaV0uc3RhdHVzLmlzRGVsaXZlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci50ZXh0Q29udGVudCA9ICdEZWxpdmVyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci50ZXh0Q29udGVudCA9ICdOb3QgZGVsaXZlcmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZChtZXNzYWdlRm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJXcmFwcGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c2VyLWlkJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcldyYXBwZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIudGV4dENvbnRlbnQgPT09IG1lc3NhZ2VBcnJheVtpXS5mcm9tICYmIG1lc3NhZ2VBcnJheVtpXS5zdGF0dXMuaXNSZWFkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haWxOdW0gPSB1c2VyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPT09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIodXNlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50KSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBtYWlsTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtKGRheU1pbikge1xuICAgIHJldHVybiBkYXlNaW4gPCAxMCA/ICcwJyArIGRheU1pbiA6IGRheU1pbi50b1N0cmluZygpO1xufVxuIiwiaW1wb3J0IHsgZmlsbE1lc3NhZ2VMaXN0IH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyB1c2VyVG9DaGF0TmFtZSwgdXNlclRvQ2hhdFN0YXR1cywgY2hhbmdlSW52aXRlTVNHLCBzZW5kQlROLCBuZXdNZXNzYWdlLCBtZXNzYWdlcyB9IGZyb20gJy4vY2hhdC1tZXNzYWdlcyc7XG5leHBvcnQgY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuZXhwb3J0IGxldCBzZWxlY3RlZENvbnRhY3QgPSAnJztcbmxldCBzZWxlY3RlZFVzZXJFbGVtZW50O1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dVc2VyUGFuZWwocGFyZW50KSB7XG4gICAgY29uc3QgdXNlclBhbmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJQYW5lbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLXBhbmVsLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKHVzZXJQYW5lbFdyYXBwZXIpO1xuICAgIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLXNlYXJjaCcpO1xuICAgIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggLi4uJyk7XG4gICAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICB1c2VyUGFuZWxXcmFwcGVyLmFwcGVuZCh1c2VyU2VhcmNoKTtcbiAgICB1c2VyTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItbGlzdCcpO1xuICAgIHVzZXJQYW5lbFdyYXBwZXIuYXBwZW5kKHVzZXJMaXN0KTtcbiAgICB1c2VyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyV3JhcHBlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlci13cmFwcGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBzZWFyY2hpbmcgJywgdXNlcldyYXBwZXJMaXN0KTtcbiAgICAgICAgLy8gU2VhcmNoIHBhdHRlcm4gc3RhcnRzIHdpdGggaW5wdXQgbG93ZXJjYXNlIHZhbHVlXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYF4ke3VzZXJTZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyV3JhcHBlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IHVzZXJXcmFwcGVyTGlzdFtpXS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJXcmFwcGVyID0gdXNlcldyYXBwZXJMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIHVzZXJOYW1lID0gdXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAvLyBIaWRlIHVzZXIgaWYgaXQgZG9lc24ndCBtYXRjaCBwYXR0ZXJuXG4gICAgICAgICAgICBpZiAocmVnZXhwICYmICFyZWdleHAudGVzdCh1c2VyTmFtZSkpXG4gICAgICAgICAgICAgICAgdXNlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vIFNob3cgYWxsIHVzZXJzIGlmIHBhdHRlcm4gKGlucHV0IHZhbHVlKSBpcyBlbXB0eSBvciBzaG93IGhpZGRlbiB1c2VyIHdoZW4gcGF0dGVybiBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAoIXJlZ2V4cCB8fCAocmVnZXhwICYmIHJlZ2V4cC50ZXN0KHVzZXJOYW1lKSkpXG4gICAgICAgICAgICAgICAgdXNlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHVzZXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIElmIGFueSB1c2VyIHdhcyBzZWxlY3RlZCBiZWZvcmUsIHJlbW92ZSB0aGlzIHNlbGVjdGlvblxuICAgICAgICBpZiAoc2VsZWN0ZWRVc2VyRWxlbWVudClcbiAgICAgICAgICAgIHNlbGVjdGVkVXNlckVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICAgICAgY2F0Y2hVc2VyTGlzdEVsZW1lbnRDbGlja2VkKGV2ZW50KTtcbiAgICAgICAgdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFVzZXJFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB1c2VyVG9DaGF0U3RhdHVzLnRleHRDb250ZW50ID0gc2VsZWN0ZWRVc2VyRWxlbWVudC5kYXRhc2V0LnN0YXR1cztcbiAgICAgICAgaWYgKHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPT09ICdvbmxpbmUnKVxuICAgICAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy5zdHlsZS5jb2xvciA9ICcjODdBOTIyJztcbiAgICAgICAgaWYgKHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPT09ICdvZmZsaW5lJylcbiAgICAgICAgICAgIHVzZXJUb0NoYXRTdGF0dXMuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICAgICAgZmlsbE1lc3NhZ2VMaXN0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjYXRjaFVzZXJMaXN0RWxlbWVudENsaWNrZWQoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIC8vIFVzZXIgd3JhcHBlciBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZXItd3JhcHBlcicpKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdCA9IHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlc0FjY1RvTmV3Q29udGFjdCh1c2VyTmFtZUVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBVc2VyIGljb24gaXMgY2xpY2tlZFxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndXNlci1zdGF0dXMtaWNvbicpKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgc2VsZWN0ZWRDb250YWN0ID0gdXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzQWNjVG9OZXdDb250YWN0KHVzZXJOYW1lRWxlbWVudCk7XG4gICAgfVxuICAgIC8vIFVzZXIgbmFtZSBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VyLWlkJykpIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWVFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWxlY3RlZENvbnRhY3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QodXNlck5hbWVFbGVtZW50KTtcbiAgICB9XG4gICAgLy8gVXNlciBtZXNzYWdlIG51bWJlciBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VyLW1zZy1udW1iZXInKSkge1xuICAgICAgICBjb25zdCB1c2VyTmFtZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlc0FjY1RvTmV3Q29udGFjdCh1c2VyTmFtZUVsZW1lbnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QobmV3Q29udGFjdCkge1xuICAgIGlmIChzZWxlY3RlZFVzZXJFbGVtZW50ID09PSBuZXdDb250YWN0KVxuICAgICAgICByZXR1cm47XG4gICAgc2VsZWN0ZWRVc2VyRWxlbWVudCA9IG5ld0NvbnRhY3Q7XG4gICAgbmV3Q29udGFjdC5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICBjaGFuZ2VJbnZpdGVNU0coJ1N0YXJ0IG1lc3NhZ2luZycpO1xuICAgIHNlbmRCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIG5ld01lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGlmIChuZXdDb250YWN0LnBhcmVudEVsZW1lbnQgIT09IG51bGwpXG4gICAgICAgIG5ld0NvbnRhY3QucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1lc3NhZ2VzLmlubmVySFRNTCA9ICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVXNlckxpc3QocGFyZW50LCB1c2VyT25MaW5lTGlzdCwgdXNlck9mZkxpbmVMaXN0KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGlmICh1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgY2hhbmdlSW52aXRlTVNHKCcnKTtcbiAgICAgICAgc2VuZEJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICBuZXdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgfVxuICAgIGlmICh1c2VyT25MaW5lTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlck9uTGluZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJMaXN0RWxlbWVudChwYXJlbnQsIHVzZXJPbkxpbmVMaXN0LCBpLCAnIzg3QTkyMicsICdvbmxpbmUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlck9mZkxpbmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyT2ZmTGluZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJMaXN0RWxlbWVudChwYXJlbnQsIHVzZXJPZmZMaW5lTGlzdCwgaSwgJyNCM0M4Q0YnLCAnb2ZmbGluZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlVXNlckxpc3RFbGVtZW50KHBhcmVudCwgdXNlckFycmF5LCBpbmRleCwgaWNvbkNvbG9yLCBzdGF0dXMpIHtcbiAgICBjb25zdCB1c2VyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3VzZXItd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQodXNlcldyYXBwZXIpO1xuICAgIGNvbnN0IHN0YXR1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXNJY29uLmNsYXNzTGlzdC5hZGQoJ3VzZXItc3RhdHVzLWljb24nKTtcbiAgICBzdGF0dXNJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGljb25Db2xvcjtcbiAgICB1c2VyV3JhcHBlci5hcHBlbmQoc3RhdHVzSWNvbik7XG4gICAgY29uc3QgdXNlcklEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlcklELmNsYXNzTGlzdC5hZGQoJ3VzZXItaWQnKTtcbiAgICB1c2VySUQudGV4dENvbnRlbnQgPSB1c2VyQXJyYXlbaW5kZXhdLmxvZ2luO1xuICAgIHVzZXJJRC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgc3RhdHVzKTtcbiAgICB1c2VyV3JhcHBlci5hcHBlbmQodXNlcklEKTtcbiAgICBjb25zdCBtc2dOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtc2dOdW0uY2xhc3NMaXN0LmFkZCgndXNlci1tc2ctbnVtYmVyJyk7XG4gICAgdXNlcldyYXBwZXIuYXBwZW5kKG1zZ051bSk7XG59XG4iLCJleHBvcnQgY29uc3QgYXBwSW5mbyA9IGBXaGF0IGNvdWxkIGJlIGJldHRlciB0aGFuIGNoYXR0aW5nIHdpdGggeW91ciBmcmllbmRzIHVzaW5nIGEgY2hhdCBhcHA/XG4gIEJ1dCB3aGF0IGlmIHRoZSBzZXJ2aWNlIG93bmVyIGRlbGV0ZXMgeW91ciBtZXNzYWdlcz8gT3IsIG9uIHRoZSBjb250cmFyeSwgXG4gIHRoZXkgY2FuIHN0b3JlIHlvdXIgY2hhdCBoaXN0b3J5IHdpdGhvdXQgeW91ciBjb25zZW50ISBZb3Uga25vdyBob3cgdG8gY3JlYXRlIFxuICBhbiBvdXRzdGFuZGluZyBkZXNpZ24gYW5kIGZ1bmN0aW9uYWxpdHksIHJpZ2h0PyBMZXQncyBub3QgZGVsYXkgYW5kIGdldCBkb3duIHRvIHdvcmshIFxuICBMZXQncyBjcmVhdGUgb3VyIG93biBjaGF0LmA7XG5jb25zdCBwb3dlckxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgcG93ZXJMYXllci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bvd2VyLWxheWVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG93ZXJMYXllcik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbCk7XG4gICAgbW9kYWxDbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWNsb3NlJyk7XG4gICAgbW9kYWxDbG9zZS5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJtb2RhbC1jbG9zZS1zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJDNi40NywyIDIsNi40NyAyLDEyQzIsMTcuNTMgNi40NywyMiAxMiwyMkMxNy41MywyMiAyMiwxNy41MyAyMiwxMkMyMiw2LjQ3IDE3LjUzLDIgMTIsMk0xNC41OSw4TDEyLDEwLjU5TDkuNDEsOEw4LDkuNDFMMTAuNTksMTJMOCwxNC41OUw5LjQxLDE2TDEyLDEzLjQxTDE0LjU5LDE2TDE2LDE0LjU5TDEzLjQxLDEyTDE2LDkuNDFMMTQuNTksOFpcIiAvPjwvc3ZnPic7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ2xvc2UpO1xuICAgIG1vZGFsVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLXRleHQnKTtcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSAnJztcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxUZXh0KTtcbiAgICBwb3dlckxheWVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwoY29udGVudCwgcGFyZW50KSB7XG4gICAgcG93ZXJMYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG93ZXJMYXllci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9LCB0cnVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKHBhcmVudCkge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZChsb2FkZXIpO1xufVxuIiwiaW1wb3J0IHsgc2hvd01vZGFsLCBhcHBJbmZvIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbic7XG5leHBvcnQgY29uc3QgbG9naW5CVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93QnV0dG9ucyhwYXJlbnQpIHtcbiAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2luLWJ0bi13cmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZChidG5XcmFwcGVyKTtcbiAgICBsb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIGxvZ2luQlROLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLXdpbmRvdy1idG4nKTtcbiAgICBsb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2luLWJ0bicpO1xuICAgIGxvZ2luQlROLmlubmVyVGV4dCA9ICdMb2dpbic7XG4gICAgYnRuV3JhcHBlci5hcHBlbmQobG9naW5CVE4pO1xuICAgIGNvbnN0IGluZm9CVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmZvQlROLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLXdpbmRvdy1idG4nKTtcbiAgICBpbmZvQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mby1idG4nKTtcbiAgICBpbmZvQlROLmlubmVyVGV4dCA9ICdJbmZvJztcbiAgICBidG5XcmFwcGVyLmFwcGVuZChpbmZvQlROKTtcbiAgICBpbmZvQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93TW9kYWwoYXBwSW5mbywgcGFyZW50KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHVzZXJEYXRhVmFsaWQsIGFjdGl2ZVVzZXIgfSBmcm9tICcuL2xvZ2luJztcbmltcG9ydCB7IGxvZ2luQlROIH0gZnJvbSAnLi9sb2dpbi1idXR0b25zJztcbmNvbnN0IHdhcm5pbmdNZXNzYWdlID0gW1xuICAgICdNaW5pbXVtIG5hbWUgbGVuZ3RoIGlzIDMgbGF0aW4gbGV0dGVycy4gT25seSBmaXJzdCBsZXR0ZXIgbXVzdCBiZSBpbiB1cHBlciBjYXNlJyxcbiAgICAnTWluaW11bSBwYXNzd29yZCBsZW5ndGggaXMgNSBjaGFyYWN0ZXJzLiBJdCBtdXN0IGNvbnRhaW4gbGV0dGVycyBhbmQgbnVtYmVycycsXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2dpbklucHV0KHBhcmVudCkge1xuICAgIGNvbnN0IGlucHV0V3JhcHBlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dFdyYXBwZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcbiAgICBwYXJlbnQuYXBwZW5kKGlucHV0V3JhcHBlck5hbWUpO1xuICAgIHNob3dJbnB1dEZpZWxkKGlucHV0V3JhcHBlck5hbWUsICd1c2VyLW5hbWUnLCAnVXNlciBOYW1lJywgJ1tBLVpdW2EtelxcXFwtXXsyLH0nKTtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXJQYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRXcmFwcGVyUGFzcy5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwJyk7XG4gICAgcGFyZW50LmFwcGVuZChpbnB1dFdyYXBwZXJQYXNzKTtcbiAgICBzaG93SW5wdXRGaWVsZChpbnB1dFdyYXBwZXJQYXNzLCAndXNlci1wYXNzJywgJ1Bhc3N3b3JkJywgJ14oPz0uKj9bYS16XSkoPz0uKj9bMC05XSkuezUsfSQnKTtcbn1cbmZ1bmN0aW9uIHNob3dJbnB1dEZpZWxkKHBhcmVudCwgYXR0cklELCBsYmxUZXh0LCBwYXR0ZXJuKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7YXR0cklEfS1sYWJlbGApO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xvZ2luLWxhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYmxUZXh0O1xuICAgIHBhcmVudC5hcHBlbmQobGFiZWwpO1xuICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsb2dpbi1pbnB1dC13cmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZChpbnB1dFdyYXBwZXIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthdHRySUR9YCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgYCR7cGF0dGVybn1gKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd1c2VyLWlucHV0Jyk7XG4gICAgaW5wdXRXcmFwcGVyLmFwcGVuZChpbnB1dCk7XG4gICAgY29uc3Qgd2FybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdhcm4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2F0dHJJRH0td2FybmluZ2ApO1xuICAgIHdhcm4uY2xhc3NMaXN0LmFkZCgnaW5wdXQtd2FybmluZycpO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmQod2Fybik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tJbnB1dChlLCBpbnB1dCkpIHtcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YVZhbGlkLm5hbWUgPT09IHRydWUgJiYgdXNlckRhdGFWYWxpZC5wYXNzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIGxvZ2luQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvZ2luQlROLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoZWNrSW5wdXQoZXZlbnQsIGlucHV0T2JqKSB7XG4gICAgbGV0IHdhcm5GaWVsZDtcbiAgICBpZiAoaW5wdXRPYmogJiYgaW5wdXRPYmoucGFyZW50RWxlbWVudCAmJiBpbnB1dE9iai5wYXJlbnRFbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICB3YXJuRmllbGQgPSBpbnB1dE9iai5wYXJlbnRFbGVtZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgaWYgKGlucHV0T2JqLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB3YXJuRmllbGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXRPYmoudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGlucHV0T2JqLmlkID09ICd1c2VyLW5hbWUnKSB7XG4gICAgICAgICAgICAgICAgd2FybkZpZWxkLnRleHRDb250ZW50ID0gd2FybmluZ01lc3NhZ2VbMF07XG4gICAgICAgICAgICAgICAgdXNlckRhdGFWYWxpZC5uYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5uYW1lID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXRPYmouaWQgPT0gJ3VzZXItcGFzcycpIHtcbiAgICAgICAgICAgICAgICB3YXJuRmllbGQudGV4dENvbnRlbnQgPSB3YXJuaW5nTWVzc2FnZVsxXTtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVZhbGlkLnBhc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyLnBhc3MgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdhcm5GaWVsZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgaWYgKGlucHV0T2JqLmlkID09ICd1c2VyLW5hbWUnKSB7XG4gICAgICAgICAgICAgICAgdXNlckRhdGFWYWxpZC5uYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhY3RpdmVVc2VyLm5hbWUgPSBpbnB1dE9iai52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnB1dE9iai5pZCA9PSAndXNlci1wYXNzJykge1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhVmFsaWQucGFzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5wYXNzID0gaW5wdXRPYmoudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHNob3dMb2dpbklucHV0IH0gZnJvbSAnLi9sb2dpbi1pbnB1dCc7XG5pbXBvcnQgeyBzaG93QnV0dG9ucywgbG9naW5CVE4gfSBmcm9tICcuL2xvZ2luLWJ1dHRvbnMnO1xuaW1wb3J0IHsgY2hlY2tTZXJ2ZXJBdXRoIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5leHBvcnQgY29uc3QgdXNlckRhdGFWYWxpZCA9IHtcbiAgICBuYW1lOiBmYWxzZSxcbiAgICBwYXNzOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgYWN0aXZlVXNlciA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBwYXNzOiAnJyxcbn07XG5leHBvcnQgY29uc3QgbG9naW5XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9naW5XaW5kb3coKSB7XG4gICAgbG9naW5XaW5kb3cuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi13cmFwcGVyJyk7XG4gICAgbG9naW5XaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsb2dpbldpbmRvdyk7XG4gICAgY29uc3QgcGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXBhc3MnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbmFtZScpO1xuICAgIHNob3dUaXRsZShsb2dpbldpbmRvdyk7XG4gICAgc2hvd0xvZ2luSW5wdXQobG9naW5XaW5kb3cpO1xuICAgIHNob3dCdXR0b25zKGxvZ2luV2luZG93KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInICYmIHVzZXJEYXRhVmFsaWQubmFtZSA9PT0gdHJ1ZSAmJiB1c2VyRGF0YVZhbGlkLnBhc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICBpZiAoYWN0aXZlVXNlci5uYW1lICE9PSBudWxsICYmIGFjdGl2ZVVzZXIucGFzcyAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBjaGVja1NlcnZlckF1dGgoYWN0aXZlVXNlci5uYW1lLCBhY3RpdmVVc2VyLnBhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVVzZXIubmFtZSAhPT0gbnVsbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3MgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHBhc3MuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBuYW1lLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9naW5CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduYW1lID0gJywgYWN0aXZlVXNlci5uYW1lLCAncGFzcyA9ICcsIGFjdGl2ZVVzZXIucGFzcyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgICAgIGlmIChhY3RpdmVVc2VyLm5hbWUgIT09IG51bGwgJiYgYWN0aXZlVXNlci5wYXNzICE9PSBudWxsKVxuICAgICAgICAgICAgY2hlY2tTZXJ2ZXJBdXRoKGFjdGl2ZVVzZXIubmFtZSwgYWN0aXZlVXNlci5wYXNzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNob3dUaXRsZShwYXJlbnQpIHtcbiAgICBjb25zdCBsb2dpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ2luSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9naW4taGVhZGVyJyk7XG4gICAgbG9naW5IZWFkZXIudGV4dENvbnRlbnQgPSAnTG9nIGluJztcbiAgICBwYXJlbnQuYXBwZW5kKGxvZ2luSGVhZGVyKTtcbn1cbi8vIGZ1bmN0aW9uIGNoZWNrU2VydmVyQXV0aChuYW1lOiBzdHJpbmcsIHBhc3M6IHN0cmluZykge1xuLy8gICBjb25zb2xlLmxvZygnY2hlY2tTZXJ2ZXJBdXRoIHN0YXJ0ZWQnKTtcbi8vICAgLy8gVG9EbyBFcnJvciBoYW5kbGluZ1xuLy8gICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViU29ja2V0c19BUEkvV3JpdGluZ19XZWJTb2NrZXRfY2xpZW50X2FwcGxpY2F0aW9ucyNjb25uZWN0aW9uX2Vycm9yc1xuLy8gICBjb25zdCB3U29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6NDAwMCcpO1xuLy8gICB3U29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBjb25zb2xlLmxvZygnd1NvY2tldCBvcGVuZWQnKTtcbi8vICAgICBjb25zdCB1c2VyQXV0aERhdGEgPSB7XG4vLyAgICAgICBpZDogYHVzZXIgJHtuYW1lfSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0YCxcbi8vICAgICAgIHR5cGU6ICdVU0VSX0xPR0lOJyxcbi8vICAgICAgIHBheWxvYWQ6IHsgdXNlcjogeyBsb2dpbjogYCR7bmFtZX1gLCBwYXNzd29yZDogYCR7cGFzc31gIH0gfSxcbi8vICAgICB9O1xuLy8gICAgIHdTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh1c2VyQXV0aERhdGEpKTtcbi8vICAgfTtcbi8vICAgd1NvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICBjb25zdCBzZXJ2ZXJBdXRoUmVzcCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4vLyAgICAgY29uc29sZS5sb2coJ1NlcnZlciByZXNwb25zZSByZWNlaXZlZDogJywgc2VydmVyQXV0aFJlc3AsICdyZXNwb25zZSBpZCA9ICcsIHNlcnZlckF1dGhSZXNwLmlkKTtcbi8vICAgICBpZiAoc2VydmVyQXV0aFJlc3AudHlwZSA9PT0gJ1VTRVJfTE9HSU4nKSB7XG4vLyAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKG5hbWUsIHBhc3MpO1xuLy8gICAgICAgYWN0aXZlVXNlci5uYW1lID0gbmFtZTtcbi8vICAgICAgIGFjdGl2ZVVzZXIucGFzcyA9IHBhc3M7XG4vLyAgICAgICBsb2dpbldpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgICAgY2hhdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbi8vICAgICAgIGNvbnNvbGUubG9nKCdDaGF0IGlzIG9wZW5lZCcpO1xuLy8gICAgICAgY29uc3QgY2hhdFVzZXJPbmxpbmVEYXRhID0ge1xuLy8gICAgICAgICBpZDogYGxpc3Qgb2YgdXNlcnMgb25saW5lYCxcbi8vICAgICAgICAgdHlwZTogJ1VTRVJfQUNUSVZFJyxcbi8vICAgICAgICAgcGF5bG9hZDogbnVsbCxcbi8vICAgICAgIH07XG4vLyAgICAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY2hhdFVzZXJPbmxpbmVEYXRhKSk7XG4vLyAgICAgICBjb25zdCBjaGF0VXNlck9mZmxpbmVEYXRhID0ge1xuLy8gICAgICAgICBpZDogYGxpc3Qgb2YgdXNlcnMgb2ZmbGluZWAsXG4vLyAgICAgICAgIHR5cGU6ICdVU0VSX0lOQUNUSVZFJyxcbi8vICAgICAgICAgcGF5bG9hZDogbnVsbCxcbi8vICAgICAgIH07XG4vLyAgICAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY2hhdFVzZXJPZmZsaW5lRGF0YSkpO1xuLy8gICAgIH1cbi8vICAgICBpZiAoc2VydmVyQXV0aFJlc3AudHlwZSA9PT0gJ1VTRVJfQUNUSVZFJykge1xuLy8gICAgICAgY29uc29sZS5sb2coJ0FjdGl2ZSB1c2VycyByZWNlaXZlZCcpO1xuLy8gICAgICAgdXNlcnNPbkxpbmUgPSBzZXJ2ZXJBdXRoUmVzcC5wYXlsb2FkO1xuLy8gICAgIH1cbi8vICAgICBpZiAoc2VydmVyQXV0aFJlc3AudHlwZSA9PT0gJ1VTRVJfSU5BQ1RJVkUnKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnSW5hY3RpdmUgdXNlcnMgcmVjZWl2ZWQnKTtcbi8vICAgICAgIHVzZXJzT2ZmTGluZSA9IHNlcnZlckF1dGhSZXNwLnBheWxvYWQ7XG4vLyAgICAgfVxuLy8gICAgIGlmIChzZXJ2ZXJBdXRoUmVzcC50eXBlID09PSAnRVJST1InKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVjZWl2ZWQnKTtcbi8vICAgICAgIGNvbnN0IGxvZ2luRXJyb3JNU0cgPSBgVXNlciAke25hbWV9IGlzIGFscmVhZHkgbG9nZ2VkIGluYDtcbi8vICAgICAgIHNob3dNb2RhbChsb2dpbkVycm9yTVNHLCBsb2dpbldpbmRvdyk7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaG93TG9naW5XaW5kb3cgfSBmcm9tICcuL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSAnLi9jb21tb24vY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUNoYXRXaW5kb3cgfSBmcm9tICcuL2NoYXQvY2hhdC1tYWluJztcbmNyZWF0ZU1vZGFsKCk7XG5zaG93TG9naW5XaW5kb3coKTtcbmNyZWF0ZUNoYXRXaW5kb3coKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==