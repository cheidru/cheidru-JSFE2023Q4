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
/* harmony export */   getMailFromThirdPartyUser: () => (/* binding */ getMailFromThirdPartyUser),
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
            if (serverResp.id.includes('third-party-user')) {
                const idTXT = serverResp.id;
                const user = idTXT.slice(17);
                (0,_chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.showMessages)(serverResp.payload.messages, user);
            }
            else {
                (0,_chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.showMessages)(serverResp.payload.messages, '');
            }
            break;
        case 'MSG_SEND':
            console.log('User sent mail or received mail');
            console.log(serverResp.payload.message);
            messageArray.push(serverResp.payload.message);
            (0,_chat_chat_messages__WEBPACK_IMPORTED_MODULE_5__.showMessages)(messageArray, '');
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
function getMailFromThirdPartyUser(userName) {
    console.log('MSG_FROM_USER ', userName);
    const messageObj = {
        id: 'third-party-user ' + userName,
        type: 'MSG_FROM_USER',
        payload: {
            user: {
                login: userName,
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
/* harmony import */ var _chat_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-messages */ "./src/chat/chat-messages.ts");



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
        document.removeEventListener('keydown', _chat_messages__WEBPACK_IMPORTED_MODULE_2__.keyDownHandler);
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
/* harmony export */   keyDownHandler: () => (/* binding */ keyDownHandler),
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
    sendBTN.setAttribute('id', 'send-message-btn');
    sendBTN.textContent = 'Send';
    newMessageWrapper.append(sendBTN);
    newMessage.addEventListener('input', () => {
        if (newMessage.value.length > 0)
            sendBTN.removeAttribute('disabled');
        if (newMessage.value.length === 0)
            sendBTN.setAttribute('disabled', '');
    });
    document.addEventListener('keydown', keyDownHandler);
    sendBTN.addEventListener('click', () => {
        if (newMessage.value === '')
            return;
        inviteMessage.style.display = 'none';
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(newMessage.value);
        newMessage.value = '';
    });
}
function keyDownHandler(event) {
    if (newMessage.value === '')
        return;
    if (event.code === 'Enter' && document.activeElement === newMessage) {
        inviteMessage.style.display = 'none';
        (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(newMessage.value);
        newMessage.value = '';
    }
}
function showMessages(messageArray, sender) {
    const messageNum = messageArray.length;
    if (sender.length > 0 && sender !== _login_login__WEBPACK_IMPORTED_MODULE_1__.activeUser.name) {
        console.log('sender =', sender, 'activeUser.name =', _login_login__WEBPACK_IMPORTED_MODULE_1__.activeUser.name, messageArray.length);
        const userWrapperList = document.querySelectorAll('.user-wrapper');
        for (let i = 0; i < userWrapperList.length; i++) {
            const userNameElement = userWrapperList[i].children[1];
            if (userNameElement.textContent === sender) {
                const userMSGNum = userWrapperList[i].children[2];
                userMSGNum.textContent = messageArray.length > 0 ? messageArray.length.toString() : '';
                return;
            }
        }
    }
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
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.getMailFromThirdPartyUser)(userID.textContent);
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
  Let's create our own chat. Author: Igor Checheurov`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0saUJBQWlCLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDQTtBQUNBLFlBQVkseURBQWU7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7QUFDRjtBQUNNO0FBQ3BELDJEQUFXO0FBQ1gsNkRBQWU7QUFDZixpRUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9hcGkvYXBpLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NoYXQvY2hhdC1mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY2hhdC9jaGF0LWhlYWRlci50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jaGF0L2NoYXQtbWFpbi50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jaGF0L2NoYXQtbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY2hhdC9jaGF0LXVzZXJzLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvbG9naW4vbG9naW4tYnV0dG9ucy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9sb2dpbi9sb2dpbi1pbnB1dC50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9sb2dpbi9sb2dpbi50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1ib2R5LWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XHJcbiAgICAtLWJvZHktYmctY29sb3I6IGJpc3F1ZTtcclxuICAgIC0tYnV0dG9uLWJnLWNvbG9yOiByZ2IoNCwgNDgsIDk1KTtcclxuICAgIC0tdHJhbnNpdGlvbi10aW1lOiAwLjhzO1xyXG4gICAgLS1jYXItYnRuLWJnLWNvbG9yOiByZ2IoMTQwLCAyMTYsIDE4OSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIC0tY29tbW9uLXRpdGxlLWNvbG9yOiByZ2IoMTkwLCAyMTQsIDIzMCk7XHJcbiAgICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiByZ2IoMjExLCAyMDksIDIwOSk7XHJcbiAgICAtLWlucHV0LWZvY3VzLWNvbG9yOiBibGFjaztcclxuICAgIC0tcmFjZS1idG4tYmctY29sb3I6ICNlMmY5YjY7XHJcbiAgICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcclxuICAgIC0tbW9kYWwtYmctY29sb3I6IHJnYigxNzksIDIzMCwgMTg3KTtcclxuICAgIC0tbW9kYWwtYnV0dG9uLWNvbG9yOiByZ2IoMjUzLCAxNjQsIDMpO1xyXG4gICAgLS1tb2RhbC1idXR0b24tY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjUzLCAxNjQsIDMsIDAuNik7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuI21haW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiNsb2dpbi13cmFwcGVyIHtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNsb2dpbi1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogOHJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmxvZ2luLWxhYmVsIHtcclxuICB3aWR0aDogNnJlbTtcclxuICBmbGV4LXNocmluazogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ubG9naW4taW5wdXQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnVzZXItaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtd2FybmluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHJnYigyMDUsIDQ1LCAxNyk7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuI2xvZ2luLWJ0bi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKiAubG9naW4td2luZG93LWJ0biB7XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi13aW5kb3ctYnRuOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IHVuc2V0O1xyXG59XHJcblxyXG4ubG9naW4td2luZG93LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0gKi9cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogdW5zZXQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNjaGF0LXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NoYXQtaGVhZGVyLXdyYXBwZXIsXHJcbiNjaGF0LWZvb3Rlci13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAycmVtIDVyZW07XHJcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuI2NoYXQtaGVhZGVyLXdyYXBwZXIge1xyXG4gIG9yZGVyOiAxO1xyXG59XHJcblxyXG4jaGVhZGVyLWJ0bi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNtYWluLWNoYXQtd3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBvcmRlcjogMjtcclxufVxyXG5cclxuI3VzZXItcGFuZWwtd3JhcHBlcixcclxuI21lc3Nlbmdlci13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiN1c2VyLXBhbmVsLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMtYmctY29sb3IpO1xyXG59XHJcblxyXG4jdXNlci1zZWFyY2gsXHJcbiNuZXctbWVzc2FnZS1pbnB1dCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbiN1c2VyLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnVzZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci13cmFwcGVyOmhvdmVyOm5vdCgudXNlci1tc2ctbnVtYmVyKSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51c2VyLXN0YXR1cy1pY29uIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUsIDEwNiwgMjAzKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi51c2VyLW1zZy1udW1iZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi51c2VyLW1zZy1udW1iZXI6ZW1wdHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNtZXNzZW5nZXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuI21lc3NhZ2UtaGVhZGVyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbiNtZXNzYWdlcyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTsgIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNjaGF0LWludml0ZS1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZXNzYWdlLWhlYWRlcixcclxuLm1lc3NhZ2UtZm9vdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjUsIDIyNSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXR4dCB7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiNuZXctbWVzc2FnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gIGdhcDogMXJlbTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbiNjaGF0LWZvb3Rlci13cmFwcGVyIHsgIFxyXG4gIG9yZGVyOiAzO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucnNzLXN2ZyB7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4jcG93ZXItbGF5ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjQsIDYzLCA2MSwgMC44MCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jbW9kYWwtY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xyXG59XHJcblxyXG4ubW9kYWwtY2xvc2Utc3ZnIHtcclxuICBmaWxsOiBibGFjaztcclxufVxyXG5cclxuI21vZGFsLWNsb3NlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDExNSUpO1xyXG59XHJcblxyXG4uaGlkZGVuLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuI21vZGFsLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgXHJcbiAgI2xvZ2luLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG4gICAgXHJcbiAgI21haW4tY2hhdC13cmFwcGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAjdXNlci1saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudXNlci13cmFwcGVyIHtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgI21lc3Nlbmdlci13cmFwcGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMjtcclxuICB9XHJcblxyXG4gICN1c2VyLXBhbmVsLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiAgXHJcbiAgI2NoYXQtaGVhZGVyLXdyYXBwZXIsXHJcbiAgI2NoYXQtZm9vdGVyLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUMxQywwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLHFEQUFxRDtFQUN2RDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFRjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZDQUE2QztBQUMvQzs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQywyQ0FBMkM7RUFDM0MsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0FBQ2hCOztFQUVFOztJQUVFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ib2R5LWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XFxyXFxuICAgIC0tYm9keS1iZy1jb2xvcjogYmlzcXVlO1xcclxcbiAgICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDQsIDQ4LCA5NSk7XFxyXFxuICAgIC0tdHJhbnNpdGlvbi10aW1lOiAwLjhzO1xcclxcbiAgICAtLWNhci1idG4tYmctY29sb3I6IHJnYigxNDAsIDIxNiwgMTg5KTtcXHJcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIC0tY29tbW9uLXRpdGxlLWNvbG9yOiByZ2IoMTkwLCAyMTQsIDIzMCk7XFxyXFxuICAgIC0taW5wdXQtZm9jdXMtYmctY29sb3I6IHJnYigyMTEsIDIwOSwgMjA5KTtcXHJcXG4gICAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XFxyXFxuICAgIC0tcmFjZS1idG4tYmctY29sb3I6ICNlMmY5YjY7XFxyXFxuICAgIC0td2lubmVycy1oZWFkZXItYmctY29sb3I6IHJnYigxNSwgMTA2LCAyMDMpO1xcclxcbiAgICAtLW1vZGFsLWJnLWNvbG9yOiByZ2IoMTc5LCAyMzAsIDE4Nyk7XFxyXFxuICAgIC0tbW9kYWwtYnV0dG9uLWNvbG9yOiByZ2IoMjUzLCAxNjQsIDMpO1xcclxcbiAgICAtLW1vZGFsLWJ1dHRvbi1jb2xvci1kaXNhYmxlZDogcmdiYSgyNTMsIDE2NCwgMywgMC42KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaHRtbCwgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuI21haW4td3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuI2xvZ2luLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ2luLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXAge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIHdpZHRoOiA4cmVtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tbGFiZWwge1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWlucHV0LXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdhcm5pbmcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogcmdiKDIwNSwgNDUsIDE3KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbiNsb2dpbi1idG4td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogLmxvZ2luLXdpbmRvdy1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi13aW5kb3ctYnRuOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi13aW5kb3ctYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQtd3JhcHBlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQtaGVhZGVyLXdyYXBwZXIsXFxyXFxuI2NoYXQtZm9vdGVyLXdyYXBwZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdC1oZWFkZXItd3JhcHBlciB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1idG4td3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY2hhdC13cmFwcGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLXBhbmVsLXdyYXBwZXIsXFxyXFxuI21lc3Nlbmdlci13cmFwcGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN1c2VyLXBhbmVsLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWZvY3VzLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItc2VhcmNoLFxcclxcbiNuZXctbWVzc2FnZS1pbnB1dCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItd3JhcHBlcjpob3Zlcjpub3QoLnVzZXItbXNnLW51bWJlcikge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyLXN0YXR1cy1pY29uIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUsIDEwNiwgMjAzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1tc2ctbnVtYmVyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1tc2ctbnVtYmVyOmVtcHR5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNtZXNzZW5nZXItd3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlLWhlYWRlci13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9keS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlcyB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pOyAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQtaW52aXRlLW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Utd3JhcHBlciB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLWhlYWRlcixcXHJcXG4ubWVzc2FnZS1mb290ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjUsIDIyNSk7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLXR4dCB7XFxyXFxuICB3aWR0aDogMTAwJTsgIFxcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LW1lc3NhZ2Utd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvZHktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdC1mb290ZXItd3JhcHBlciB7ICBcXHJcXG4gIG9yZGVyOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJzcy1zdmcge1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Bvd2VyLWxheWVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjQsIDYzLCA2MSwgMC44MCk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21tb24tdGl0bGUtY29sb3IpO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZS1zdmcge1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1jbG9zZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDExNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLW1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4jbW9kYWwtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICBcXHJcXG4gICNsb2dpbi13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICB9XFxyXFxuICAgIFxcclxcbiAgI21haW4tY2hhdC13cmFwcGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1c2VyLWxpc3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItd3JhcHBlciB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21lc3Nlbmdlci13cmFwcGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3VzZXItcGFuZWwtd3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuICBcXHJcXG4gICNjaGF0LWhlYWRlci13cmFwcGVyLFxcclxcbiAgI2NoYXQtZm9vdGVyLXdyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbic7XG5pbXBvcnQgeyBjaGF0V3JhcHBlciB9IGZyb20gJy4uL2NoYXQvY2hhdC1tYWluJztcbmltcG9ydCB7IG93blVzZXJOYW1lIH0gZnJvbSAnLi4vY2hhdC9jaGF0LWhlYWRlcic7XG5pbXBvcnQgeyBwb3B1bGF0ZVVzZXJMaXN0LCB1c2VyTGlzdCB9IGZyb20gJy4uL2NoYXQvY2hhdC11c2Vycyc7XG5pbXBvcnQgeyBhY3RpdmVVc2VyLCBsb2dpbldpbmRvdyB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IHVzZXJUb0NoYXROYW1lLCB1c2VyVG9DaGF0U3RhdHVzLCBzaG93TWVzc2FnZXMgfSBmcm9tICcuLi9jaGF0L2NoYXQtbWVzc2FnZXMnO1xuZXhwb3J0IGxldCB1c2VyT25MaW5lID0gW107XG5leHBvcnQgbGV0IHVzZXJPZmZMaW5lID0gW107XG5sZXQgdXNlck9uTGluZUluaXQgPSBmYWxzZTtcbmxldCB1c2VyT2ZmTGluZUluaXQgPSBmYWxzZTtcbmxldCB3U29ja2V0O1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2VydmVyQXV0aChuYW1lLCBwYXNzKSB7XG4gICAgLy8gVG9EbyBFcnJvciBoYW5kbGluZ1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJTb2NrZXRzX0FQSS9Xcml0aW5nX1dlYlNvY2tldF9jbGllbnRfYXBwbGljYXRpb25zI2Nvbm5lY3Rpb25fZXJyb3JzXG4gICAgd1NvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjQwMDAnKTtcbiAgICB3U29ja2V0Lm9ub3BlbiA9ICgpID0+IGF1dGhvcml6ZVVzZXIod1NvY2tldCwgbmFtZSwgcGFzcyk7XG4gICAgd1NvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IG9uTWVzc2FnZUFjdGlvbihldmVudCwgd1NvY2tldCwgbmFtZSwgcGFzcyk7XG59XG5mdW5jdGlvbiBhdXRob3JpemVVc2VyKHNvY2tldE9iaiwgbmFtZSwgcGFzcykge1xuICAgIGNvbnNvbGUubG9nKCd3U29ja2V0IG9wZW5lZCcpO1xuICAgIGNvbnN0IHVzZXJBdXRoRGF0YSA9IHtcbiAgICAgICAgaWQ6IGB1c2VyICR7bmFtZX0gYXV0aGVudGljYXRpb24gcmVxdWVzdGAsXG4gICAgICAgIHR5cGU6ICdVU0VSX0xPR0lOJyxcbiAgICAgICAgcGF5bG9hZDogeyB1c2VyOiB7IGxvZ2luOiBgJHtuYW1lfWAsIHBhc3N3b3JkOiBgJHtwYXNzfWAgfSB9LFxuICAgIH07XG4gICAgc29ja2V0T2JqLnNlbmQoSlNPTi5zdHJpbmdpZnkodXNlckF1dGhEYXRhKSk7XG59XG5mdW5jdGlvbiBvbk1lc3NhZ2VBY3Rpb24oZXZlbnQsIHNvY2tldE9iaiwgbmFtZSwgcGFzcykge1xuICAgIGNvbnN0IHNlcnZlclJlc3AgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGNvbnN0IG1lc3NhZ2VBcnJheSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgcmVzcG9uc2UgcmVjZWl2ZWQ6ICcsIHNlcnZlclJlc3AsICdyZXNwb25zZSBpZCA9ICcsIHNlcnZlclJlc3AuaWQpO1xuICAgIHN3aXRjaCAoc2VydmVyUmVzcC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1VTRVJfTE9HSU4nOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVJfTE9HSU4nKTtcbiAgICAgICAgICAgIHJlcXVlc3RSZWdpc3RlcmVkVXNlckluZm8oc29ja2V0T2JqKTtcbiAgICAgICAgICAgIG9wZW5DaGF0V2luZG93KG5hbWUsIHBhc3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VTRVJfQUNUSVZFJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3RpdmUgdXNlcnMgcmVjZWl2ZWQnKTtcbiAgICAgICAgICAgIHVzZXJPbkxpbmUgPSBzZXJ2ZXJSZXNwLnBheWxvYWQudXNlcnM7XG4gICAgICAgICAgICB1c2VyT25MaW5lID0gc29ydFVzZXJzKHVzZXJPbkxpbmUpO1xuICAgICAgICAgICAgdXNlck9uTGluZUluaXQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VTRVJfSU5BQ1RJVkUnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luYWN0aXZlIHVzZXJzIHJlY2VpdmVkJyk7XG4gICAgICAgICAgICB1c2VyT2ZmTGluZSA9IHNlcnZlclJlc3AucGF5bG9hZC51c2VycztcbiAgICAgICAgICAgIC8vIHNvcnRVc2Vycyh1c2VyT2ZmTGluZSk7XG4gICAgICAgICAgICB1c2VyT2ZmTGluZUluaXQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VTRVJfRVhURVJOQUxfTE9HSU4nOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXJkLXBhcnR5IFVzZXIgcmVjZWl2ZWQnKTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJSZXNwLnBheWxvYWQudXNlci5sb2dpbiA9PT0gdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2VuZ2VyVGl0bGUoJ2xvZ2luJyk7XG4gICAgICAgICAgICByZXF1ZXN0UmVnaXN0ZXJlZFVzZXJJbmZvKHNvY2tldE9iaik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTVNHX0ZST01fVVNFUic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBNYWlsaW5nIGhpc3RvcnkgZmV0Y2hlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2VzKTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJSZXNwLmlkLmluY2x1ZGVzKCd0aGlyZC1wYXJ0eS11c2VyJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFRYVCA9IHNlcnZlclJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGlkVFhULnNsaWNlKDE3KTtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZXMoc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2VzLCB1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlcyhzZXJ2ZXJSZXNwLnBheWxvYWQubWVzc2FnZXMsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNU0dfU0VORCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBzZW50IG1haWwgb3IgcmVjZWl2ZWQgbWFpbCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2UpO1xuICAgICAgICAgICAgbWVzc2FnZUFycmF5LnB1c2goc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2UpO1xuICAgICAgICAgICAgc2hvd01lc3NhZ2VzKG1lc3NhZ2VBcnJheSwgJycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VTRVJfTE9HT1VUJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBIHVzZXIgbG9nZ2VkIG91dCcpO1xuICAgICAgICAgICAgY2xvc2VDaGF0V2luZG93KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9FWFRFUk5BTF9MT0dPVVQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0EgdXNlciBsb2dnZWQgb3V0Jyk7XG4gICAgICAgICAgICBpZiAoc2VydmVyUmVzcC5wYXlsb2FkLnVzZXIubG9naW4gPT09IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NlbmdlclRpdGxlKCdsb2dvdXQnKTtcbiAgICAgICAgICAgIHJlcXVlc3RSZWdpc3RlcmVkVXNlckluZm8oc29ja2V0T2JqKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVjZWl2ZWQnKTtcbiAgICAgICAgICAgIHNob3dNb2RhbCgnVXNlciAnICsgbmFtZSArICcgaXMgYWxyZWFkeSBsb2dnZWQgaW4nLCBsb2dpbldpbmRvdyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHVzZXJPbkxpbmVJbml0ID09PSB0cnVlICYmIHVzZXJPZmZMaW5lSW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBMaXN0IFBvcHVsYXRlZCcsIHVzZXJMaXN0LCB1c2VyT25MaW5lLCB1c2VyT2ZmTGluZSk7XG4gICAgICAgIHBvcHVsYXRlVXNlckxpc3QodXNlckxpc3QsIHVzZXJPbkxpbmUsIHVzZXJPZmZMaW5lKTtcbiAgICAgICAgdXNlck9uTGluZUluaXQgPSBmYWxzZTtcbiAgICAgICAgdXNlck9mZkxpbmVJbml0ID0gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlTWVzc2VuZ2VyVGl0bGUoc3RhdHVzKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZU1lc3NlbmdlclRpdGxlIHN0YXR1cyA9Jywgc3RhdHVzKTtcbiAgICBpZiAoc3RhdHVzID09PSAnbG9naW4nKSB7XG4gICAgICAgIHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPSAnb25saW5lJztcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy5zdHlsZS5jb2xvciA9ICcjODdBOTIyJztcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICdvZmZsaW5lJztcbiAgICAgICAgLy8gRG9lc24ndCB3b3JrXG4gICAgICAgIHVzZXJUb0NoYXRTdGF0dXMuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICB9XG59XG5mdW5jdGlvbiBzb3J0VXNlcnModXNlckFycmF5KSB7XG4gICAgY29uc3QgdG1wQXJyID0gW107XG4gICAgLy8gU2VhcmNoIGFuZCBkZWxldGUgQWN0aXZlIFVzZXIgbmFtZVxuICAgIC8vIFNvcnQgYXJyYXlcbiAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlckFycmF5KSB7XG4gICAgICAgIGlmICh1c2VyLmxvZ2luICE9PSBhY3RpdmVVc2VyLm5hbWUpXG4gICAgICAgICAgICB0bXBBcnIucHVzaCh1c2VyKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3NvcnRVc2VycyAnLCAndXNlckFycmF5ID0gJywgdXNlckFycmF5LCAndG1wQXJyID0gJywgdG1wQXJyKTtcbiAgICByZXR1cm4gdG1wQXJyO1xufVxuZnVuY3Rpb24gb3BlbkNoYXRXaW5kb3cobmFtZSwgcGFzcykge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0obmFtZSwgcGFzcyk7XG4gICAgYWN0aXZlVXNlci5uYW1lID0gbmFtZTtcbiAgICBhY3RpdmVVc2VyLnBhc3MgPSBwYXNzO1xuICAgIG93blVzZXJOYW1lLnRleHRDb250ZW50ID0gYWN0aXZlVXNlci5uYW1lO1xuICAgIGxvZ2luV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2hhdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cbmZ1bmN0aW9uIGNsb3NlQ2hhdFdpbmRvdygpIHtcbiAgICBsb2dpbldpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNoYXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5mdW5jdGlvbiByZXF1ZXN0UmVnaXN0ZXJlZFVzZXJJbmZvKHNvY2tldE9iaikge1xuICAgIGNvbnN0IGNoYXRVc2VyT25saW5lRGF0YSA9IHtcbiAgICAgICAgaWQ6IGBsaXN0IG9mIHVzZXJzIG9ubGluZWAsXG4gICAgICAgIHR5cGU6ICdVU0VSX0FDVElWRScsXG4gICAgICAgIHBheWxvYWQ6IG51bGwsXG4gICAgfTtcbiAgICBzb2NrZXRPYmouc2VuZChKU09OLnN0cmluZ2lmeShjaGF0VXNlck9ubGluZURhdGEpKTtcbiAgICBjb25zdCBjaGF0VXNlck9mZmxpbmVEYXRhID0ge1xuICAgICAgICBpZDogYGxpc3Qgb2YgdXNlcnMgb2ZmbGluZWAsXG4gICAgICAgIHR5cGU6ICdVU0VSX0lOQUNUSVZFJyxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9O1xuICAgIHNvY2tldE9iai5zZW5kKEpTT04uc3RyaW5naWZ5KGNoYXRVc2VyT2ZmbGluZURhdGEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWxsTWVzc2FnZUxpc3QoKSB7XG4gICAgY29uc3QgZmV0Y2hNYWlsUmVxT2JqID0ge1xuICAgICAgICBpZDogJ0ZldGNoIG1haWxpbmcgd2l0aCB1c2VyICcgKyB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgdHlwZTogJ01TR19GUk9NX1VTRVInLFxuICAgICAgICBwYXlsb2FkOiB7IHVzZXI6IHsgbG9naW46IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50IH0gfSxcbiAgICB9O1xuICAgIHdTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShmZXRjaE1haWxSZXFPYmopKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZU9iaiA9IHtcbiAgICAgICAgaWQ6ICduZXcgbWVzc2FnZSBmcm9tICcgKyBhY3RpdmVVc2VyLm5hbWUgKyAnIHRvICcgKyB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgdHlwZTogJ01TR19TRU5EJyxcbiAgICAgICAgcGF5bG9hZDogeyBtZXNzYWdlOiB7IHRvOiB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCwgdGV4dDogbWVzc2FnZSB9IH0sXG4gICAgfTtcbiAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iaikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dEN1cnJlbnRVc2VyKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICAgIGlkOiAnbG9nIG91dCB1c2VyICcgKyBhY3RpdmVVc2VyLm5hbWUsXG4gICAgICAgIHR5cGU6ICdVU0VSX0xPR09VVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBsb2dpbjogYWN0aXZlVXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhY3RpdmVVc2VyLnBhc3MsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG4gICAgd1NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VPYmopKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWlsRnJvbVRoaXJkUGFydHlVc2VyKHVzZXJOYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ01TR19GUk9NX1VTRVIgJywgdXNlck5hbWUpO1xuICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICAgIGlkOiAndGhpcmQtcGFydHktdXNlciAnICsgdXNlck5hbWUsXG4gICAgICAgIHR5cGU6ICdNU0dfRlJPTV9VU0VSJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIGxvZ2luOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iaikpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dGb290ZXIocGFyZW50KSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1mb290ZXItd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoZm9vdGVyKTtcbiAgICBjb25zdCBzY2hvb2xMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNjaG9vbExvZ28uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vYXBwLnJzLnNjaG9vbC8nKTtcbiAgICBzY2hvb2xMb2dvLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1saW5rJyk7XG4gICAgc2Nob29sTG9nby5pbm5lckhUTUwgPSBgPHN2ZyBpZD1cIkxheWVyXzFcIiBjbGFzcz1cInJzcy1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1NTIuOCAyMDUuM1wiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn0uc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKX0uc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKX0uc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKX0uc3Q0e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKX0uc3Q1e2ZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q2e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKX0uc3Q2LC5zdDd7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDgsLnN0OXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8xMF8pfS5zdDl7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwfTwvc3R5bGU+PHRpdGxlPnJzX3NjaG9vbF9qczwvdGl0bGU+PHBhdGggZD1cIk0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6XCIvPjxwYXRoIGQ9XCJNMTMzIDE2Ny4ybDI0LjIgNy4zYy0xLjMgNi4xLTQgMTEuOS03LjcgMTctMy40IDQuNS03LjkgOC0xMyAxMC4zLTUuMiAyLjMtMTEuOCAzLjUtMTkuOCAzLjUtOS43IDAtMTcuNy0xLjQtMjMuOC00LjItNi4yLTIuOC0xMS41LTcuOC0xNi0xNC45LTQuNS03LjEtNi43LTE2LjItNi43LTI3LjMgMC0xNC44IDMuOS0yNi4yIDExLjgtMzQuMXMxOS0xMS45IDMzLjQtMTEuOWMxMS4zIDAgMjAuMSAyLjMgMjYuNiA2LjggNi40IDQuNiAxMS4yIDExLjYgMTQuNCAyMWwtMjQuNCA1LjRjLS42LTIuMS0xLjUtNC4yLTIuNy02LTEuNS0yLjEtMy40LTMuNy01LjctNC45LTIuMy0xLjItNC45LTEuNy03LjUtMS43LTYuMyAwLTExLjEgMi41LTE0LjQgNy42LTIuNSAzLjctMy44IDkuNi0zLjggMTcuNiAwIDkuOSAxLjUgMTYuNyA0LjUgMjAuNCAzIDMuNyA3LjIgNS41IDEyLjcgNS41IDUuMyAwIDkuMy0xLjUgMTItNC40IDIuNy0zLjEgNC43LTcuNCA1LjktMTN6bTU2LjUtNTIuOGgyNy42djMxLjNoMzAuMnYtMzEuM2gyNy44djg5LjRoLTI3Ljh2LTM2LjJoLTMwLjJ2MzYuMmgtMjcuNnYtODkuNHpcIi8+PHBhdGggZD1cIk0yNzEuMyAxNTkuMWMwLTE0LjYgNC4xLTI2IDEyLjItMzQuMSA4LjEtOC4xIDE5LjUtMTIuMiAzNC0xMi4yIDE0LjkgMCAyNi4zIDQgMzQuNCAxMlMzNjQgMTQ0IDM2NCAxNTguNGMwIDEwLjUtMS44IDE5LTUuMyAyNS43LTMuNCA2LjYtOC43IDEyLTE1LjIgMTUuNi02LjcgMy43LTE1IDUuNi0yNC45IDUuNi0xMC4xIDAtMTguNC0xLjYtMjUtNC44LTYuOC0zLjQtMTIuNC04LjctMTYuMS0xNS4yLTQuMS03LTYuMi0xNS43LTYuMi0yNi4yem0yNy42LjFjMCA5IDEuNyAxNS41IDUgMTkuNSAzLjMgMy45IDcuOSA1LjkgMTMuNyA1LjkgNS45IDAgMTAuNS0xLjkgMTMuOC01LjhzNC45LTEwLjggNC45LTIwLjhjMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAgMi0xMy40IDUuOS0zLjQgMy45LTUuMSAxMC40LTUuMSAxOS41em05My40LS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjQgNCAzNC40IDEyUzQ4NSAxNDQgNDg1IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOCAzLjMtMy45IDQuOS0xMC44IDQuOS0yMC44IDAtOC40LTEuNy0xNC42LTUuMS0xOC40LTMuNC0zLjktOC01LjgtMTMuOC01LjgtNS4xLS4yLTEwLjEgMi0xMy40IDUuOS0zLjQgMy45LTUuMSAxMC40LTUuMSAxOS41elwiLz48cGF0aCBkPVwiTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHpcIi8+PGVsbGlwc2UgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGNsYXNzPVwic3QwXCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PGRlZnM+PGVsbGlwc2UgaWQ9XCJTVkdJRF8xX1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiU1ZHSURfMl9cIj48dXNlIHhsaW5rOmhyZWY9XCIjU1ZHSURfMV9cIiBvdmVyZmxvdz1cInZpc2libGVcIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz1cInN0MVwiPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC44MiA2OC4zNTMpXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTMzMC45LTE0LjJoMTc5Ljh2MTY1LjFIMzMwLjl6XCIvPjxnIGlkPVwiTGF5ZXJfMl8xX1wiPjxkZWZzPjxwYXRoIGlkPVwiU1ZHSURfM19cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuODIgNjguMzUzKVwiIGQ9XCJNMzMwLjktMTQuMmgxNzkuOHYxNjUuMUgzMzAuOXpcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzRfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzNfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgaWQ9XCJMYXllcl8xLTJcIiBjbGFzcz1cInN0MlwiPjxlbGxpcHNlIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjbGFzcz1cInN0MFwiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjxkZWZzPjxlbGxpcHNlIGlkPVwiU1ZHSURfNV9cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzZfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzVfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDNcIj48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKVwiIGNsYXNzPVwic3QwXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PGRlZnM+PHBhdGggaWQ9XCJTVkdJRF83X1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzhfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzdfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDRcIj48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDVcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2c+PHBhdGggdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBjbGFzcz1cInN0NlwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjxlbGxpcHNlIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjbGFzcz1cInN0N1wiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48ZGVmcz48cGF0aCBpZD1cIlNWR0lEXzlfXCIgdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiU1ZHSURfMTBfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzlfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDhcIj48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDVcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2c+PHBhdGggdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBjbGFzcz1cInN0OVwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC44MiA2OC4zNTMpXCIgY2xhc3M9XCJzdDdcIiBkPVwiTTMzMC45LTE0LjJoMTc5Ljh2MTY1LjFIMzMwLjl6XCIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDdcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48cGF0aCBkPVwiTTM5Mi40IDYxLjNsMTAtNyAxMi4zIDE3LjVjMi4xIDIuOCAzLjcgNS44IDQuOSA5LjEuNyAyLjUuNSA1LjItLjUgNy42LTEuMyAzLTMuNCA1LjUtNi4yIDcuMy0zLjMgMi4zLTYuMSAzLjYtOC41IDQtMi4zLjQtNC43IDAtNi45LTEtMi40LTEuMi00LjUtMi45LTYuMS01LjFsOC42LThjLjcgMS4xIDEuNiAyLjEgMi42IDIuOS43LjUgMS41LjggMi40LjguNyAwIDEuNC0uMyAxLjktLjcgMS0uNiAxLjctMS44IDEuNi0zLS4zLTEuNy0xLTMuNC0yLjEtNC43bC0xNC0xOS43em0zMCAxMS4xbDkuMS03LjJjMSAxLjIgMi4zIDIuMSAzLjcgMi42IDIgLjYgNC4xLjIgNS44LTEuMSAxLjItLjggMi4yLTEuOSAyLjYtMy4zLjYtMS44LS40LTMuOC0yLjItNC40LS4zLS4xLS42LS4yLS45LS4yLTEuMi0uMS0zLjMuNC02LjQgMS43LTUuMSAyLjEtOS4xIDIuOS0xMi4xIDIuNi0yLjktLjMtNS42LTEuOC03LjItNC4zLTEuMi0xLjctMS44LTMuNy0xLjktNS43IDAtMi4zLjYtNC42IDEuOS02LjUgMS45LTIuNyA0LjItNSA3LTYuOCA0LjItMi45IDcuOS00LjMgMTEuMS00LjMgMy4yIDAgNi4yIDEuNSA5IDQuNmwtOSA3LjFjLTEuOC0yLjMtNS4yLTIuOC03LjUtMWwtLjMuM2MtMSAuNi0xLjcgMS41LTIuMSAyLjYtLjMuOC0uMSAxLjcuNCAyLjQuNC41IDEgLjkgMS43LjkuOC4xIDIuMi0uMyA0LjItMS4yIDUtMi4xIDguOC0zLjMgMTEuNC0zLjcgMi4yLS40IDQuNS0uMiA2LjYuNyAxLjkuOCAzLjUgMi4yIDQuNiAzLjkgMS40IDIgMi4yIDQuNCAyLjMgNi45LjEgMi42LS42IDUuMS0yIDcuMy0xLjggMi43LTQuMSA1LTYuOCA2LjgtNS41IDMuOC0xMCA1LjQtMTMuNiA0LjgtMy45LS42LTcuMS0yLjYtOS40LTUuNXpcIi8+PC9nPjwvZz48L2c+PC9zdmc+YDtcbiAgICBmb290ZXIuYXBwZW5kKHNjaG9vbExvZ28pO1xuICAgIGNvbnN0IGF1dGhvckdIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYXV0aG9yR0h1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWlkcnUnKTtcbiAgICBhdXRob3JHSHViLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1saW5rJyk7XG4gICAgYXV0aG9yR0h1Yi50ZXh0Q29udGVudCA9ICdJZ29yIENoZWNoZXVyb3YnO1xuICAgIGZvb3Rlci5hcHBlbmQoYXV0aG9yR0h1Yik7XG4gICAgY29uc3QgYXBwWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhcHBZZWFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwLXllYXInKTtcbiAgICBhcHBZZWFyLnRleHRDb250ZW50ID0gJzIwMjQnO1xuICAgIGZvb3Rlci5hcHBlbmQoYXBwWWVhcik7XG59XG4iLCJpbXBvcnQgeyBhY3RpdmVVc2VyIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgbG9nb3V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGtleURvd25IYW5kbGVyIH0gZnJvbSAnLi9jaGF0LW1lc3NhZ2VzJztcbmV4cG9ydCBjb25zdCBvd25Vc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dIZWFkZXIocGFyZW50KSB7XG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlcldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjaGF0LWhlYWRlci13cmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICBvd25Vc2VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ293bi11c2VyLW5hbWUnKTtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlVXNlci5uYW1lID0gJywgYWN0aXZlVXNlcik7XG4gICAgb3duVXNlck5hbWUudGV4dENvbnRlbnQgPSBhY3RpdmVVc2VyLm5hbWU7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQob3duVXNlck5hbWUpO1xuICAgIGNvbnN0IGFwcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwLW5hbWUnKTtcbiAgICBhcHBOYW1lLnRleHRDb250ZW50ID0gJ0Z1biBDaGF0JztcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZChhcHBOYW1lKTtcbiAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1idG4td3JhcHBlcicpO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKGJ0bldyYXBwZXIpO1xuICAgIGNvbnN0IGxvZ091dEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvZ091dEJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvdXQtYnRuJyk7XG4gICAgbG9nT3V0QlROLmlubmVyVGV4dCA9ICdMb2cgb3V0JztcbiAgICBidG5XcmFwcGVyLmFwcGVuZChsb2dPdXRCVE4pO1xuICAgIGxvZ091dEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgbG9nb3V0Q3VycmVudFVzZXIoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHNob3dIZWFkZXIgfSBmcm9tICcuL2NoYXQtaGVhZGVyJztcbmltcG9ydCB7IHNob3dGb290ZXIgfSBmcm9tICcuL2NoYXQtZm9vdGVyJztcbmltcG9ydCB7IHNob3dVc2VyUGFuZWwgfSBmcm9tICcuL2NoYXQtdXNlcnMnO1xuaW1wb3J0IHsgc2hvd01lc3NhZ2VQYW5lbCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlcyc7XG4vLyBpbXBvcnQgeyB1c2Vyc09uTGluZSwgdXNlcnNPZmZMaW5lIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuZXhwb3J0IGNvbnN0IGNoYXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhdFdpbmRvdygpIHtcbiAgICBjaGF0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoYXQtd3JhcHBlcicpO1xuICAgIGNoYXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2hhdFdyYXBwZXIpO1xuICAgIHNob3dIZWFkZXIoY2hhdFdyYXBwZXIpO1xuICAgIHNob3dNYWluV2luZG93KGNoYXRXcmFwcGVyKTtcbiAgICBzaG93Rm9vdGVyKGNoYXRXcmFwcGVyKTtcbn1cbmZ1bmN0aW9uIHNob3dNYWluV2luZG93KHBhcmVudCkge1xuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWNoYXQtd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobWFpbldyYXBwZXIpO1xuICAgIHNob3dVc2VyUGFuZWwobWFpbldyYXBwZXIpO1xuICAgIHNob3dNZXNzYWdlUGFuZWwobWFpbldyYXBwZXIpO1xufVxuIiwiaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFjdGl2ZVVzZXIgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5leHBvcnQgY29uc3QgdXNlclRvQ2hhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBjb25zdCB1c2VyVG9DaGF0U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbnZpdGVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBjb25zdCBzZW5kQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbmV3TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSW52aXRlTVNHKG1lc3NhZ2UpIHtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZVBhbmVsKHBhcmVudCkge1xuICAgIGNvbnN0IG1lc3NlbmdlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzZW5nZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2VuZ2VyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1lc3NlbmdlcldyYXBwZXIpO1xuICAgIHNob3dNZXNzYWdlUGFuZWxIZWFkZXIobWVzc2VuZ2VyV3JhcHBlcik7XG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlcycpO1xuICAgIG1lc3NlbmdlcldyYXBwZXIuYXBwZW5kKG1lc3NhZ2VzKTtcbiAgICBpbnZpdGVNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1pbnZpdGUtbW9kYWwnKTtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHVzZXIgdG8gc3RhcnQgbWVzc2FnaW5nJztcbiAgICBtZXNzZW5nZXJXcmFwcGVyLmFwcGVuZChpbnZpdGVNZXNzYWdlKTtcbiAgICBzZW5kTmV3TWVzc2FnZVBhbmVsKG1lc3NlbmdlcldyYXBwZXIpO1xufVxuZnVuY3Rpb24gc2hvd01lc3NhZ2VQYW5lbEhlYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UtaGVhZGVyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKGhlYWRlcldyYXBwZXIpO1xuICAgIHVzZXJUb0NoYXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1uYW1lJyk7XG4gICAgdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh1c2VyVG9DaGF0TmFtZSk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItc3RhdHVzJyk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHVzZXJUb0NoYXRTdGF0dXMpO1xufVxuZnVuY3Rpb24gc2VuZE5ld01lc3NhZ2VQYW5lbChwYXJlbnQpIHtcbiAgICBjb25zdCBuZXdNZXNzYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LW1lc3NhZ2Utd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobmV3TWVzc2FnZVdyYXBwZXIpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICduZXctbWVzc2FnZS1pbnB1dCcpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXcml0ZSBuZXcgbWVzc2FnZSAuLi4nKTtcbiAgICBuZXdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLmFwcGVuZChuZXdNZXNzYWdlKTtcbiAgICBzZW5kQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VuZC1tZXNzYWdlLWJ0bicpO1xuICAgIHNlbmRCVE4udGV4dENvbnRlbnQgPSAnU2VuZCc7XG4gICAgbmV3TWVzc2FnZVdyYXBwZXIuYXBwZW5kKHNlbmRCVE4pO1xuICAgIG5ld01lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChuZXdNZXNzYWdlLnZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBzZW5kQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaWYgKG5ld01lc3NhZ2UudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgc2VuZEJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgc2VuZEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld01lc3NhZ2UudmFsdWUgPT09ICcnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbnZpdGVNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UudmFsdWUpO1xuICAgICAgICBuZXdNZXNzYWdlLnZhbHVlID0gJyc7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAobmV3TWVzc2FnZS52YWx1ZSA9PT0gJycpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBuZXdNZXNzYWdlKSB7XG4gICAgICAgIGludml0ZU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc2VuZE1lc3NhZ2UobmV3TWVzc2FnZS52YWx1ZSk7XG4gICAgICAgIG5ld01lc3NhZ2UudmFsdWUgPSAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd01lc3NhZ2VzKG1lc3NhZ2VBcnJheSwgc2VuZGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZU51bSA9IG1lc3NhZ2VBcnJheS5sZW5ndGg7XG4gICAgaWYgKHNlbmRlci5sZW5ndGggPiAwICYmIHNlbmRlciAhPT0gYWN0aXZlVXNlci5uYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kZXIgPScsIHNlbmRlciwgJ2FjdGl2ZVVzZXIubmFtZSA9JywgYWN0aXZlVXNlci5uYW1lLCBtZXNzYWdlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdXNlcldyYXBwZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXItd3JhcHBlcicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJXcmFwcGVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWVFbGVtZW50ID0gdXNlcldyYXBwZXJMaXN0W2ldLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgaWYgKHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9PT0gc2VuZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlck1TR051bSA9IHVzZXJXcmFwcGVyTGlzdFtpXS5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgICAgICB1c2VyTVNHTnVtLnRleHRDb250ZW50ID0gbWVzc2FnZUFycmF5Lmxlbmd0aCA+IDAgPyBtZXNzYWdlQXJyYXkubGVuZ3RoLnRvU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1lc3NhZ2VBcnJheS5sZW5ndGggPiAwKVxuICAgICAgICBjaGFuZ2VJbnZpdGVNU0coJycpO1xuICAgIGNvbnNvbGUubG9nKCdzaG93TWVzc2FnZXMgbWVzc2FnZUFycmF5ID0gJywgbWVzc2FnZUFycmF5LCAnbWVzc2FnZU51bSA9ICcsIG1lc3NhZ2VOdW0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZU51bTsgaSsrKSB7XG4gICAgICAgIC8vIE1lc3NhZ2UgZnJvbSB0aGUgdXNlciBJJ20gY2hhdHRpbmcgbm93XG4gICAgICAgIGlmIChtZXNzYWdlQXJyYXlbaV0uZnJvbSA9PT0gdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgfHwgbWVzc2FnZUFycmF5W2ldLmZyb20gPT09IGFjdGl2ZVVzZXIubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2Utd3JhcHBlcicpO1xuICAgICAgICAgICAgbWVzc2FnZXMuYXBwZW5kKG1lc3NhZ2VXcmFwcGVyKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lc3NhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1oZWFkZXInKTtcbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZChtZXNzYWdlSGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VTZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGZybyA9IG1lc3NhZ2VBcnJheVtpXS5mcm9tID09PSB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCA/IG1lc3NhZ2VBcnJheVtpXS5mcm9tIDogJ1lvdSc7XG4gICAgICAgICAgICBtZXNzYWdlU2VuZGVyLnRleHRDb250ZW50ID0gZnJvO1xuICAgICAgICAgICAgaWYgKGZybyA9PT0gJ1lvdScpXG4gICAgICAgICAgICAgICAgbWVzc2FnZVdyYXBwZXIuc3R5bGUuYWxpZ25TZWxmID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgbWVzc2FnZUhlYWRlci5hcHBlbmQobWVzc2FnZVNlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbXNnRGF0ZSA9IG5ldyBEYXRlKG1lc3NhZ2VBcnJheVtpXS5kYXRldGltZSk7XG4gICAgICAgICAgICBtZXNzYWdlRGF0ZS50ZXh0Q29udGVudCA9IGAke25vcm0obXNnRGF0ZS5nZXREYXRlKCkpfS0ke25vcm0obXNnRGF0ZS5nZXRNb250aCgpKX0tJHttc2dEYXRlLmdldEZ1bGxZZWFyKCl9ICR7bm9ybShtc2dEYXRlLmdldEhvdXJzKCkpfToke25vcm0obXNnRGF0ZS5nZXRNaW51dGVzKCkpfToke25vcm0obXNnRGF0ZS5nZXRTZWNvbmRzKCkpfWA7XG4gICAgICAgICAgICBtZXNzYWdlSGVhZGVyLmFwcGVuZChtZXNzYWdlRGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlVHh0LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtdHh0Jyk7XG4gICAgICAgICAgICBtZXNzYWdlVHh0LnRleHRDb250ZW50ID0gbWVzc2FnZUFycmF5W2ldLnRleHQ7XG4gICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5hcHBlbmQobWVzc2FnZVR4dCk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZm9vdGVyJyk7XG4gICAgICAgICAgICBpZiAobWVzc2FnZUFycmF5W2ldLnN0YXR1cy5pc0VkaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VGb290ZXIudGV4dENvbnRlbnQgPSAnRWRpdGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VBcnJheVtpXS5zdGF0dXMuaXNSZWFkZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRm9vdGVyLnRleHRDb250ZW50ID0gJ09wZW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlQXJyYXlbaV0uc3RhdHVzLmlzRGVsaXZlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci50ZXh0Q29udGVudCA9ICdEZWxpdmVyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci50ZXh0Q29udGVudCA9ICdOb3QgZGVsaXZlcmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZChtZXNzYWdlRm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJXcmFwcGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c2VyLWlkJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcldyYXBwZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIudGV4dENvbnRlbnQgPT09IG1lc3NhZ2VBcnJheVtpXS5mcm9tICYmIG1lc3NhZ2VBcnJheVtpXS5zdGF0dXMuaXNSZWFkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haWxOdW0gPSB1c2VyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPT09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIodXNlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50KSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBtYWlsTnVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtKGRheU1pbikge1xuICAgIHJldHVybiBkYXlNaW4gPCAxMCA/ICcwJyArIGRheU1pbiA6IGRheU1pbi50b1N0cmluZygpO1xufVxuIiwiaW1wb3J0IHsgZmlsbE1lc3NhZ2VMaXN0LCBnZXRNYWlsRnJvbVRoaXJkUGFydHlVc2VyIH0gZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgeyB1c2VyVG9DaGF0TmFtZSwgdXNlclRvQ2hhdFN0YXR1cywgY2hhbmdlSW52aXRlTVNHLCBzZW5kQlROLCBuZXdNZXNzYWdlLCBtZXNzYWdlcyB9IGZyb20gJy4vY2hhdC1tZXNzYWdlcyc7XG5leHBvcnQgY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuZXhwb3J0IGxldCBzZWxlY3RlZENvbnRhY3QgPSAnJztcbmxldCBzZWxlY3RlZFVzZXJFbGVtZW50O1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dVc2VyUGFuZWwocGFyZW50KSB7XG4gICAgY29uc3QgdXNlclBhbmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJQYW5lbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLXBhbmVsLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKHVzZXJQYW5lbFdyYXBwZXIpO1xuICAgIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLXNlYXJjaCcpO1xuICAgIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2ggLi4uJyk7XG4gICAgdXNlclNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICB1c2VyUGFuZWxXcmFwcGVyLmFwcGVuZCh1c2VyU2VhcmNoKTtcbiAgICB1c2VyTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItbGlzdCcpO1xuICAgIHVzZXJQYW5lbFdyYXBwZXIuYXBwZW5kKHVzZXJMaXN0KTtcbiAgICB1c2VyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyV3JhcHBlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlci13cmFwcGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBzZWFyY2hpbmcgJywgdXNlcldyYXBwZXJMaXN0KTtcbiAgICAgICAgLy8gU2VhcmNoIHBhdHRlcm4gc3RhcnRzIHdpdGggaW5wdXQgbG93ZXJjYXNlIHZhbHVlXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYF4ke3VzZXJTZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyV3JhcHBlckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IHVzZXJXcmFwcGVyTGlzdFtpXS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJXcmFwcGVyID0gdXNlcldyYXBwZXJMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAodXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIHVzZXJOYW1lID0gdXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAvLyBIaWRlIHVzZXIgaWYgaXQgZG9lc24ndCBtYXRjaCBwYXR0ZXJuXG4gICAgICAgICAgICBpZiAocmVnZXhwICYmICFyZWdleHAudGVzdCh1c2VyTmFtZSkpXG4gICAgICAgICAgICAgICAgdXNlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vIFNob3cgYWxsIHVzZXJzIGlmIHBhdHRlcm4gKGlucHV0IHZhbHVlKSBpcyBlbXB0eSBvciBzaG93IGhpZGRlbiB1c2VyIHdoZW4gcGF0dGVybiBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAoIXJlZ2V4cCB8fCAocmVnZXhwICYmIHJlZ2V4cC50ZXN0KHVzZXJOYW1lKSkpXG4gICAgICAgICAgICAgICAgdXNlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHVzZXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIElmIGFueSB1c2VyIHdhcyBzZWxlY3RlZCBiZWZvcmUsIHJlbW92ZSB0aGlzIHNlbGVjdGlvblxuICAgICAgICBpZiAoc2VsZWN0ZWRVc2VyRWxlbWVudClcbiAgICAgICAgICAgIHNlbGVjdGVkVXNlckVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICAgICAgY2F0Y2hVc2VyTGlzdEVsZW1lbnRDbGlja2VkKGV2ZW50KTtcbiAgICAgICAgdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFVzZXJFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB1c2VyVG9DaGF0U3RhdHVzLnRleHRDb250ZW50ID0gc2VsZWN0ZWRVc2VyRWxlbWVudC5kYXRhc2V0LnN0YXR1cztcbiAgICAgICAgaWYgKHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPT09ICdvbmxpbmUnKVxuICAgICAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy5zdHlsZS5jb2xvciA9ICcjODdBOTIyJztcbiAgICAgICAgaWYgKHVzZXJUb0NoYXRTdGF0dXMudGV4dENvbnRlbnQgPT09ICdvZmZsaW5lJylcbiAgICAgICAgICAgIHVzZXJUb0NoYXRTdGF0dXMuc3R5bGUuY29sb3IgPSAncmdiKDU3LCA1NywgNTcpJztcbiAgICAgICAgZmlsbE1lc3NhZ2VMaXN0KCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjYXRjaFVzZXJMaXN0RWxlbWVudENsaWNrZWQoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIC8vIFVzZXIgd3JhcHBlciBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZXItd3JhcHBlcicpKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdCA9IHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlc0FjY1RvTmV3Q29udGFjdCh1c2VyTmFtZUVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBVc2VyIGljb24gaXMgY2xpY2tlZFxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndXNlci1zdGF0dXMtaWNvbicpKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgc2VsZWN0ZWRDb250YWN0ID0gdXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzQWNjVG9OZXdDb250YWN0KHVzZXJOYW1lRWxlbWVudCk7XG4gICAgfVxuICAgIC8vIFVzZXIgbmFtZSBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VyLWlkJykpIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWVFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWxlY3RlZENvbnRhY3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QodXNlck5hbWVFbGVtZW50KTtcbiAgICB9XG4gICAgLy8gVXNlciBtZXNzYWdlIG51bWJlciBpcyBjbGlja2VkXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VyLW1zZy1udW1iZXInKSkge1xuICAgICAgICBjb25zdCB1c2VyTmFtZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlc0FjY1RvTmV3Q29udGFjdCh1c2VyTmFtZUVsZW1lbnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QobmV3Q29udGFjdCkge1xuICAgIGlmIChzZWxlY3RlZFVzZXJFbGVtZW50ID09PSBuZXdDb250YWN0KVxuICAgICAgICByZXR1cm47XG4gICAgc2VsZWN0ZWRVc2VyRWxlbWVudCA9IG5ld0NvbnRhY3Q7XG4gICAgbmV3Q29udGFjdC5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICBjaGFuZ2VJbnZpdGVNU0coJ1N0YXJ0IG1lc3NhZ2luZycpO1xuICAgIHNlbmRCVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIG5ld01lc3NhZ2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGlmIChuZXdDb250YWN0LnBhcmVudEVsZW1lbnQgIT09IG51bGwpXG4gICAgICAgIG5ld0NvbnRhY3QucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1lc3NhZ2VzLmlubmVySFRNTCA9ICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVXNlckxpc3QocGFyZW50LCB1c2VyT25MaW5lTGlzdCwgdXNlck9mZkxpbmVMaXN0KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGlmICh1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgc2VuZEJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICBuZXdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgfVxuICAgIGlmICh1c2VyT25MaW5lTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlck9uTGluZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJMaXN0RWxlbWVudChwYXJlbnQsIHVzZXJPbkxpbmVMaXN0LCBpLCAnIzg3QTkyMicsICdvbmxpbmUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlck9mZkxpbmVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyT2ZmTGluZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNyZWF0ZVVzZXJMaXN0RWxlbWVudChwYXJlbnQsIHVzZXJPZmZMaW5lTGlzdCwgaSwgJyNCM0M4Q0YnLCAnb2ZmbGluZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlVXNlckxpc3RFbGVtZW50KHBhcmVudCwgdXNlckFycmF5LCBpbmRleCwgaWNvbkNvbG9yLCBzdGF0dXMpIHtcbiAgICBjb25zdCB1c2VyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3VzZXItd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQodXNlcldyYXBwZXIpO1xuICAgIGNvbnN0IHN0YXR1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXNJY29uLmNsYXNzTGlzdC5hZGQoJ3VzZXItc3RhdHVzLWljb24nKTtcbiAgICBzdGF0dXNJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGljb25Db2xvcjtcbiAgICB1c2VyV3JhcHBlci5hcHBlbmQoc3RhdHVzSWNvbik7XG4gICAgY29uc3QgdXNlcklEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlcklELmNsYXNzTGlzdC5hZGQoJ3VzZXItaWQnKTtcbiAgICB1c2VySUQudGV4dENvbnRlbnQgPSB1c2VyQXJyYXlbaW5kZXhdLmxvZ2luO1xuICAgIHVzZXJJRC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJywgc3RhdHVzKTtcbiAgICB1c2VyV3JhcHBlci5hcHBlbmQodXNlcklEKTtcbiAgICBjb25zdCBtc2dOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtc2dOdW0uY2xhc3NMaXN0LmFkZCgndXNlci1tc2ctbnVtYmVyJyk7XG4gICAgdXNlcldyYXBwZXIuYXBwZW5kKG1zZ051bSk7XG4gICAgZ2V0TWFpbEZyb21UaGlyZFBhcnR5VXNlcih1c2VySUQudGV4dENvbnRlbnQpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSBgV2hhdCBjb3VsZCBiZSBiZXR0ZXIgdGhhbiBjaGF0dGluZyB3aXRoIHlvdXIgZnJpZW5kcyB1c2luZyBhIGNoYXQgYXBwP1xuICBCdXQgd2hhdCBpZiB0aGUgc2VydmljZSBvd25lciBkZWxldGVzIHlvdXIgbWVzc2FnZXM/IE9yLCBvbiB0aGUgY29udHJhcnksIFxuICB0aGV5IGNhbiBzdG9yZSB5b3VyIGNoYXQgaGlzdG9yeSB3aXRob3V0IHlvdXIgY29uc2VudCEgWW91IGtub3cgaG93IHRvIGNyZWF0ZSBcbiAgYW4gb3V0c3RhbmRpbmcgZGVzaWduIGFuZCBmdW5jdGlvbmFsaXR5LCByaWdodD8gTGV0J3Mgbm90IGRlbGF5IGFuZCBnZXQgZG93biB0byB3b3JrISBcbiAgTGV0J3MgY3JlYXRlIG91ciBvd24gY2hhdC4gQXV0aG9yOiBJZ29yIENoZWNoZXVyb3ZgO1xuY29uc3QgcG93ZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIHBvd2VyTGF5ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3dlci1sYXllcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvd2VyTGF5ZXIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xuICAgIG1vZGFsQ2xvc2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1jbG9zZScpO1xuICAgIG1vZGFsQ2xvc2UuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwibW9kYWwtY2xvc2Utc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz48L3N2Zz4nO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKTtcbiAgICBtb2RhbFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC10ZXh0Jyk7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gJyc7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsVGV4dCk7XG4gICAgcG93ZXJMYXllci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKGNvbnRlbnQsIHBhcmVudCkge1xuICAgIHBvd2VyTGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvd2VyTGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSwgdHJ1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobG9hZGVyKTtcbn1cbiIsImltcG9ydCB7IHNob3dNb2RhbCwgYXBwSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xuZXhwb3J0IGNvbnN0IGxvZ2luQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0J1dHRvbnMocGFyZW50KSB7XG4gICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idG4td3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoYnRuV3JhcHBlcik7XG4gICAgbG9naW5CVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICBsb2dpbkJUTi5jbGFzc0xpc3QuYWRkKCdsb2dpbi13aW5kb3ctYnRuJyk7XG4gICAgbG9naW5CVE4uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idG4nKTtcbiAgICBsb2dpbkJUTi5pbm5lclRleHQgPSAnTG9naW4nO1xuICAgIGJ0bldyYXBwZXIuYXBwZW5kKGxvZ2luQlROKTtcbiAgICBjb25zdCBpbmZvQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5mb0JUTi5jbGFzc0xpc3QuYWRkKCdsb2dpbi13aW5kb3ctYnRuJyk7XG4gICAgaW5mb0JUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8tYnRuJyk7XG4gICAgaW5mb0JUTi5pbm5lclRleHQgPSAnSW5mbyc7XG4gICAgYnRuV3JhcHBlci5hcHBlbmQoaW5mb0JUTik7XG4gICAgaW5mb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd01vZGFsKGFwcEluZm8sIHBhcmVudCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyB1c2VyRGF0YVZhbGlkLCBhY3RpdmVVc2VyIH0gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgeyBsb2dpbkJUTiB9IGZyb20gJy4vbG9naW4tYnV0dG9ucyc7XG5jb25zdCB3YXJuaW5nTWVzc2FnZSA9IFtcbiAgICAnTWluaW11bSBuYW1lIGxlbmd0aCBpcyAzIGxhdGluIGxldHRlcnMuIE9ubHkgZmlyc3QgbGV0dGVyIG11c3QgYmUgaW4gdXBwZXIgY2FzZScsXG4gICAgJ01pbmltdW0gcGFzc3dvcmQgbGVuZ3RoIGlzIDUgY2hhcmFjdGVycy4gSXQgbXVzdCBjb250YWluIGxldHRlcnMgYW5kIG51bWJlcnMnLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9naW5JbnB1dChwYXJlbnQpIHtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRXcmFwcGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwJyk7XG4gICAgcGFyZW50LmFwcGVuZChpbnB1dFdyYXBwZXJOYW1lKTtcbiAgICBzaG93SW5wdXRGaWVsZChpbnB1dFdyYXBwZXJOYW1lLCAndXNlci1uYW1lJywgJ1VzZXIgTmFtZScsICdbQS1aXVthLXpcXFxcLV17Mix9Jyk7XG4gICAgY29uc3QgaW5wdXRXcmFwcGVyUGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0V3JhcHBlclBhc3MuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcCcpO1xuICAgIHBhcmVudC5hcHBlbmQoaW5wdXRXcmFwcGVyUGFzcyk7XG4gICAgc2hvd0lucHV0RmllbGQoaW5wdXRXcmFwcGVyUGFzcywgJ3VzZXItcGFzcycsICdQYXNzd29yZCcsICdeKD89Lio/W2Etel0pKD89Lio/WzAtOV0pLns1LH0kJyk7XG59XG5mdW5jdGlvbiBzaG93SW5wdXRGaWVsZChwYXJlbnQsIGF0dHJJRCwgbGJsVGV4dCwgcGF0dGVybikge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2F0dHJJRH0tbGFiZWxgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1sYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGJsVGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kKGxhYmVsKTtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbG9naW4taW5wdXQtd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoaW5wdXRXcmFwcGVyKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7YXR0cklEfWApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsIGAke3BhdHRlcm59YCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndXNlci1pbnB1dCcpO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmQoaW5wdXQpO1xuICAgIGNvbnN0IHdhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YXJuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthdHRySUR9LXdhcm5pbmdgKTtcbiAgICB3YXJuLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdhcm5pbmcnKTtcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kKHdhcm4pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQoZSwgaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAodXNlckRhdGFWYWxpZC5uYW1lID09PSB0cnVlICYmIHVzZXJEYXRhVmFsaWQucGFzcyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBsb2dpbkJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGVja0lucHV0KGV2ZW50LCBpbnB1dE9iaikge1xuICAgIGxldCB3YXJuRmllbGQ7XG4gICAgaWYgKGlucHV0T2JqICYmIGlucHV0T2JqLnBhcmVudEVsZW1lbnQgJiYgaW5wdXRPYmoucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgd2FybkZpZWxkID0gaW5wdXRPYmoucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICAgIGlmIChpbnB1dE9iai52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgd2FybkZpZWxkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0T2JqLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dE9iai5pZCA9PSAndXNlci1uYW1lJykge1xuICAgICAgICAgICAgICAgIHdhcm5GaWVsZC50ZXh0Q29udGVudCA9IHdhcm5pbmdNZXNzYWdlWzBdO1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhVmFsaWQubmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXIubmFtZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0T2JqLmlkID09ICd1c2VyLXBhc3MnKSB7XG4gICAgICAgICAgICAgICAgd2FybkZpZWxkLnRleHRDb250ZW50ID0gd2FybmluZ01lc3NhZ2VbMV07XG4gICAgICAgICAgICAgICAgdXNlckRhdGFWYWxpZC5wYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5wYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3YXJuRmllbGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGlmIChpbnB1dE9iai5pZCA9PSAndXNlci1uYW1lJykge1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhVmFsaWQubmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5uYW1lID0gaW5wdXRPYmoudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXRPYmouaWQgPT0gJ3VzZXItcGFzcycpIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVZhbGlkLnBhc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXIucGFzcyA9IGlucHV0T2JqLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93TG9naW5JbnB1dCB9IGZyb20gJy4vbG9naW4taW5wdXQnO1xuaW1wb3J0IHsgc2hvd0J1dHRvbnMsIGxvZ2luQlROIH0gZnJvbSAnLi9sb2dpbi1idXR0b25zJztcbmltcG9ydCB7IGNoZWNrU2VydmVyQXV0aCB9IGZyb20gJy4uL2FwaS9hcGknO1xuZXhwb3J0IGNvbnN0IHVzZXJEYXRhVmFsaWQgPSB7XG4gICAgbmFtZTogZmFsc2UsXG4gICAgcGFzczogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGFjdGl2ZVVzZXIgPSB7XG4gICAgbmFtZTogJycsXG4gICAgcGFzczogJycsXG59O1xuZXhwb3J0IGNvbnN0IGxvZ2luV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvZ2luV2luZG93KCkge1xuICAgIGxvZ2luV2luZG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9naW4td3JhcHBlcicpO1xuICAgIGxvZ2luV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobG9naW5XaW5kb3cpO1xuICAgIGNvbnN0IHBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKTtcbiAgICBzaG93VGl0bGUobG9naW5XaW5kb3cpO1xuICAgIHNob3dMb2dpbklucHV0KGxvZ2luV2luZG93KTtcbiAgICBzaG93QnV0dG9ucyhsb2dpbldpbmRvdyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyAmJiB1c2VyRGF0YVZhbGlkLm5hbWUgPT09IHRydWUgJiYgdXNlckRhdGFWYWxpZC5wYXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVVzZXIubmFtZSAhPT0gbnVsbCAmJiBhY3RpdmVVc2VyLnBhc3MgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgY2hlY2tTZXJ2ZXJBdXRoKGFjdGl2ZVVzZXIubmFtZSwgYWN0aXZlVXNlci5wYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVVc2VyLm5hbWUgIT09IG51bGwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBwYXNzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvZ2luQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbmFtZSA9ICcsIGFjdGl2ZVVzZXIubmFtZSwgJ3Bhc3MgPSAnLCBhY3RpdmVVc2VyLnBhc3MpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBpZiAoYWN0aXZlVXNlci5uYW1lICE9PSBudWxsICYmIGFjdGl2ZVVzZXIucGFzcyAhPT0gbnVsbClcbiAgICAgICAgICAgIGNoZWNrU2VydmVyQXV0aChhY3RpdmVVc2VyLm5hbWUsIGFjdGl2ZVVzZXIucGFzcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzaG93VGl0bGUocGFyZW50KSB7XG4gICAgY29uc3QgbG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2luLWhlYWRlcicpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvZyBpbic7XG4gICAgcGFyZW50LmFwcGVuZChsb2dpbkhlYWRlcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dMb2dpbldpbmRvdyB9IGZyb20gJy4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tICcuL2NvbW1vbi9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ2hhdFdpbmRvdyB9IGZyb20gJy4vY2hhdC9jaGF0LW1haW4nO1xuY3JlYXRlTW9kYWwoKTtcbnNob3dMb2dpbldpbmRvdygpO1xuY3JlYXRlQ2hhdFdpbmRvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9