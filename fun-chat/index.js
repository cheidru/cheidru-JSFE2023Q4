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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0saUJBQWlCLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVks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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ0Y7QUFDTTtBQUNwRCwyREFBVztBQUNYLDZEQUFlO0FBQ2YsaUVBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jaGF0L2NoYXQtZm9vdGVyLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NoYXQvY2hhdC1oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY2hhdC9jaGF0LW1haW4udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvY2hhdC9jaGF0LW1lc3NhZ2VzLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2NoYXQvY2hhdC11c2Vycy50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9jb21tb24vY29tbW9uLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2xvZ2luL2xvZ2luLWJ1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvbG9naW4vbG9naW4taW5wdXQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvbG9naW4vbG9naW4udHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYm9keS1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xyXG4gICAgLS1ib2R5LWJnLWNvbG9yOiBiaXNxdWU7XHJcbiAgICAtLWJ1dHRvbi1iZy1jb2xvcjogcmdiKDQsIDQ4LCA5NSk7XHJcbiAgICAtLXRyYW5zaXRpb24tdGltZTogMC44cztcclxuICAgIC0tY2FyLWJ0bi1iZy1jb2xvcjogcmdiKDE0MCwgMjE2LCAxODkpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAtLWNvbW1vbi10aXRsZS1jb2xvcjogcmdiKDE5MCwgMjE0LCAyMzApO1xyXG4gICAgLS1pbnB1dC1mb2N1cy1iZy1jb2xvcjogcmdiKDIxMSwgMjA5LCAyMDkpO1xyXG4gICAgLS1pbnB1dC1mb2N1cy1jb2xvcjogYmxhY2s7XHJcbiAgICAtLXJhY2UtYnRuLWJnLWNvbG9yOiAjZTJmOWI2O1xyXG4gICAgLS13aW5uZXJzLWhlYWRlci1iZy1jb2xvcjogcmdiKDE1LCAxMDYsIDIwMyk7XHJcbiAgICAtLW1vZGFsLWJnLWNvbG9yOiByZ2IoMTc5LCAyMzAsIDE4Nyk7XHJcbiAgICAtLW1vZGFsLWJ1dHRvbi1jb2xvcjogcmdiKDI1MywgMTY0LCAzKTtcclxuICAgIC0tbW9kYWwtYnV0dG9uLWNvbG9yLWRpc2FibGVkOiByZ2JhKDI1MywgMTY0LCAzLCAwLjYpO1xyXG4gIH1cclxuICBcclxuICBodG1sLCBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiNtYWluLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4jbG9naW4td3JhcHBlciB7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xyXG59XHJcblxyXG4jbG9naW4taGVhZGVyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDhyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgd2lkdGg6IDZyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi51c2VyLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LXdhcm5pbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiByZ2IoMjA1LCA0NSwgMTcpO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbiNsb2dpbi1idG4td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLyogLmxvZ2luLXdpbmRvdy1idG4ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9naW4td2luZG93LWJ0bjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiB1bnNldDtcclxufVxyXG5cclxuLmxvZ2luLXdpbmRvdy1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICovXHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IHVuc2V0O1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jY2hhdC13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNjaGF0LWhlYWRlci13cmFwcGVyLFxyXG4jY2hhdC1mb290ZXItd3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbiNjaGF0LWhlYWRlci13cmFwcGVyIHtcclxuICBvcmRlcjogMTtcclxufVxyXG5cclxuI2hlYWRlci1idG4td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jbWFpbi1jaGF0LXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgb3JkZXI6IDI7XHJcbn1cclxuXHJcbiN1c2VyLXBhbmVsLXdyYXBwZXIsXHJcbiNtZXNzZW5nZXItd3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4jdXNlci1wYW5lbC13cmFwcGVyIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWZvY3VzLWJnLWNvbG9yKTtcclxufVxyXG5cclxuI3VzZXItc2VhcmNoLFxyXG4jbmV3LW1lc3NhZ2UtaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4jdXNlci1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi51c2VyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVzZXItd3JhcHBlcjpob3Zlcjpub3QoLnVzZXItbXNnLW51bWJlcikge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXNlci1zdGF0dXMtaWNvbiB7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE1LCAxMDYsIDIwMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4udXNlci1tc2ctbnVtYmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4udXNlci1tc2ctbnVtYmVyOmVtcHR5IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jbWVzc2VuZ2VyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbiNtZXNzYWdlLWhlYWRlci13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4jbWVzc2FnZXMge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7ICBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4jY2hhdC1pbnZpdGUtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVzc2FnZS1oZWFkZXIsXHJcbi5tZXNzYWdlLWZvb3RlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI1LCAyMjUpO1xyXG59XHJcblxyXG4ubWVzc2FnZS10eHQge1xyXG4gIHdpZHRoOiAxMDAlOyAgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4jbmV3LW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICBnYXA6IDFyZW07XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4jY2hhdC1mb290ZXItd3JhcHBlciB7ICBcclxuICBvcmRlcjogMztcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnJzcy1zdmcge1xyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuI3Bvd2VyLWxheWVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY0LCA2MywgNjEsIDAuODApO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMjByZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbW1vbi10aXRsZS1jb2xvcik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuI21vZGFsLWNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLXN2ZyB7XHJcbiAgZmlsbDogYmxhY2s7XHJcbn1cclxuXHJcbiNtb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMTUlKTtcclxufVxyXG5cclxuLmhpZGRlbi1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiNtb2RhbC10ZXh0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIFxyXG4gICNsb2dpbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gIH1cclxuICAgIFxyXG4gICNtYWluLWNoYXQtd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgI3VzZXItbGlzdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItd3JhcHBlciB7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICNtZXNzZW5nZXItd3JhcHBlciB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgfVxyXG5cclxuICAjdXNlci1wYW5lbC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4gIFxyXG4gICNjaGF0LWhlYWRlci13cmFwcGVyLFxyXG4gICNjaGF0LWZvb3Rlci13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHdDQUF3QztJQUN4QywwQ0FBMEM7SUFDMUMsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7SUFDNUMsb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxxREFBcUQ7RUFDdkQ7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0QyxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUY7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Is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V0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtBQUNoQjs7RUFFRTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYm9keS1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcclxcbiAgICAtLWJvZHktYmctY29sb3I6IGJpc3F1ZTtcXHJcXG4gICAgLS1idXR0b24tYmctY29sb3I6IHJnYig0LCA0OCwgOTUpO1xcclxcbiAgICAtLXRyYW5zaXRpb24tdGltZTogMC44cztcXHJcXG4gICAgLS1jYXItYnRuLWJnLWNvbG9yOiByZ2IoMTQwLCAyMTYsIDE4OSk7XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICAtLWNvbW1vbi10aXRsZS1jb2xvcjogcmdiKDE5MCwgMjE0LCAyMzApO1xcclxcbiAgICAtLWlucHV0LWZvY3VzLWJnLWNvbG9yOiByZ2IoMjExLCAyMDksIDIwOSk7XFxyXFxuICAgIC0taW5wdXQtZm9jdXMtY29sb3I6IGJsYWNrO1xcclxcbiAgICAtLXJhY2UtYnRuLWJnLWNvbG9yOiAjZTJmOWI2O1xcclxcbiAgICAtLXdpbm5lcnMtaGVhZGVyLWJnLWNvbG9yOiByZ2IoMTUsIDEwNiwgMjAzKTtcXHJcXG4gICAgLS1tb2RhbC1iZy1jb2xvcjogcmdiKDE3OSwgMjMwLCAxODcpO1xcclxcbiAgICAtLW1vZGFsLWJ1dHRvbi1jb2xvcjogcmdiKDI1MywgMTY0LCAzKTtcXHJcXG4gICAgLS1tb2RhbC1idXR0b24tY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjUzLCAxNjQsIDMsIDAuNik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiNtYWluLXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiNsb2dpbi13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNsb2dpbi1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICB3aWR0aDogOHJlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWxhYmVsIHtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1pbnB1dC13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13YXJuaW5nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHJnYigyMDUsIDQ1LCAxNyk7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9naW4tYnRuLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIC5sb2dpbi13aW5kb3ctYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4td2luZG93LWJ0bjpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4td2luZG93LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjaGF0LXdyYXBwZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjaGF0LWhlYWRlci13cmFwcGVyLFxcclxcbiNjaGF0LWZvb3Rlci13cmFwcGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtIDVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbW9kYWwtYmctY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQtaGVhZGVyLXdyYXBwZXIge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItYnRuLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNoYXQtd3JhcHBlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1wYW5lbC13cmFwcGVyLFxcclxcbiNtZXNzZW5nZXItd3JhcHBlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1wYW5lbC13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN1c2VyLXNlYXJjaCxcXHJcXG4jbmV3LW1lc3NhZ2UtaW5wdXQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgIFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXItbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLXdyYXBwZXI6aG92ZXI6bm90KC51c2VyLW1zZy1udW1iZXIpIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1zdGF0dXMtaWNvbiB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE1LCAxMDYsIDIwMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbXNnLW51bWJlciB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbXNnLW51bWJlcjplbXB0eSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2VuZ2VyLXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZS1oZWFkZXItd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvZHktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZXMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTsgIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjaGF0LWludml0ZS1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZS1oZWFkZXIsXFxyXFxuLm1lc3NhZ2UtZm9vdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI1LCAyMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZS10eHQge1xcclxcbiAgd2lkdGg6IDEwMCU7ICBcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1tZXNzYWdlLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib2R5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQtZm9vdGVyLXdyYXBwZXIgeyAgXFxyXFxuICBvcmRlcjogMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tb2RhbC1iZy1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yc3Mtc3ZnIHtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNwb3dlci1sYXllciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY0LCA2MywgNjEsIDAuODApO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tbW9uLXRpdGxlLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbC1jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY2xvc2Utc3ZnIHtcXHJcXG4gIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtY2xvc2U6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMTUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbi1tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuI21vZGFsLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgXFxyXFxuICAjbG9naW4td3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgfVxcclxcbiAgICBcXHJcXG4gICNtYWluLWNoYXQtd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdXNlci1saXN0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLXdyYXBwZXIge1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtZXNzZW5nZXItd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN1c2VyLXBhbmVsLXdyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbiAgXFxyXFxuICAjY2hhdC1oZWFkZXItd3JhcHBlcixcXHJcXG4gICNjaGF0LWZvb3Rlci13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xuaW1wb3J0IHsgY2hhdFdyYXBwZXIgfSBmcm9tICcuLi9jaGF0L2NoYXQtbWFpbic7XG5pbXBvcnQgeyBvd25Vc2VyTmFtZSB9IGZyb20gJy4uL2NoYXQvY2hhdC1oZWFkZXInO1xuaW1wb3J0IHsgcG9wdWxhdGVVc2VyTGlzdCwgdXNlckxpc3QgfSBmcm9tICcuLi9jaGF0L2NoYXQtdXNlcnMnO1xuaW1wb3J0IHsgYWN0aXZlVXNlciwgbG9naW5XaW5kb3cgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyB1c2VyVG9DaGF0TmFtZSwgdXNlclRvQ2hhdFN0YXR1cywgc2hvd01lc3NhZ2VzIH0gZnJvbSAnLi4vY2hhdC9jaGF0LW1lc3NhZ2VzJztcbmV4cG9ydCBsZXQgdXNlck9uTGluZSA9IFtdO1xuZXhwb3J0IGxldCB1c2VyT2ZmTGluZSA9IFtdO1xubGV0IHVzZXJPbkxpbmVJbml0ID0gZmFsc2U7XG5sZXQgdXNlck9mZkxpbmVJbml0ID0gZmFsc2U7XG5sZXQgd1NvY2tldDtcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NlcnZlckF1dGgobmFtZSwgcGFzcykge1xuICAgIC8vIFRvRG8gRXJyb3IgaGFuZGxpbmdcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViU29ja2V0c19BUEkvV3JpdGluZ19XZWJTb2NrZXRfY2xpZW50X2FwcGxpY2F0aW9ucyNjb25uZWN0aW9uX2Vycm9yc1xuICAgIHdTb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo0MDAwJyk7XG4gICAgd1NvY2tldC5vbm9wZW4gPSAoKSA9PiBhdXRob3JpemVVc2VyKHdTb2NrZXQsIG5hbWUsIHBhc3MpO1xuICAgIHdTb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiBvbk1lc3NhZ2VBY3Rpb24oZXZlbnQsIHdTb2NrZXQsIG5hbWUsIHBhc3MpO1xufVxuZnVuY3Rpb24gYXV0aG9yaXplVXNlcihzb2NrZXRPYmosIG5hbWUsIHBhc3MpIHtcbiAgICBjb25zb2xlLmxvZygnd1NvY2tldCBvcGVuZWQnKTtcbiAgICBjb25zdCB1c2VyQXV0aERhdGEgPSB7XG4gICAgICAgIGlkOiBgdXNlciAke25hbWV9IGF1dGhlbnRpY2F0aW9uIHJlcXVlc3RgLFxuICAgICAgICB0eXBlOiAnVVNFUl9MT0dJTicsXG4gICAgICAgIHBheWxvYWQ6IHsgdXNlcjogeyBsb2dpbjogYCR7bmFtZX1gLCBwYXNzd29yZDogYCR7cGFzc31gIH0gfSxcbiAgICB9O1xuICAgIHNvY2tldE9iai5zZW5kKEpTT04uc3RyaW5naWZ5KHVzZXJBdXRoRGF0YSkpO1xufVxuZnVuY3Rpb24gb25NZXNzYWdlQWN0aW9uKGV2ZW50LCBzb2NrZXRPYmosIG5hbWUsIHBhc3MpIHtcbiAgICBjb25zdCBzZXJ2ZXJSZXNwID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBjb25zdCBtZXNzYWdlQXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZygnU2VydmVyIHJlc3BvbnNlIHJlY2VpdmVkOiAnLCBzZXJ2ZXJSZXNwLCAncmVzcG9uc2UgaWQgPSAnLCBzZXJ2ZXJSZXNwLmlkKTtcbiAgICBzd2l0Y2ggKHNlcnZlclJlc3AudHlwZSkge1xuICAgICAgICBjYXNlICdVU0VSX0xPR0lOJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSX0xPR0lOJyk7XG4gICAgICAgICAgICByZXF1ZXN0UmVnaXN0ZXJlZFVzZXJJbmZvKHNvY2tldE9iaik7XG4gICAgICAgICAgICBvcGVuQ2hhdFdpbmRvdyhuYW1lLCBwYXNzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVU0VSX0FDVElWRSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0aXZlIHVzZXJzIHJlY2VpdmVkJyk7XG4gICAgICAgICAgICB1c2VyT25MaW5lID0gc2VydmVyUmVzcC5wYXlsb2FkLnVzZXJzO1xuICAgICAgICAgICAgdXNlck9uTGluZSA9IHNvcnRVc2Vycyh1c2VyT25MaW5lKTtcbiAgICAgICAgICAgIHVzZXJPbkxpbmVJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVU0VSX0lOQUNUSVZFJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmFjdGl2ZSB1c2VycyByZWNlaXZlZCcpO1xuICAgICAgICAgICAgdXNlck9mZkxpbmUgPSBzZXJ2ZXJSZXNwLnBheWxvYWQudXNlcnM7XG4gICAgICAgICAgICAvLyBzb3J0VXNlcnModXNlck9mZkxpbmUpO1xuICAgICAgICAgICAgdXNlck9mZkxpbmVJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVU0VSX0VYVEVSTkFMX0xPR0lOJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlyZC1wYXJ0eSBVc2VyIHJlY2VpdmVkJyk7XG4gICAgICAgICAgICBpZiAoc2VydmVyUmVzcC5wYXlsb2FkLnVzZXIubG9naW4gPT09IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NlbmdlclRpdGxlKCdsb2dpbicpO1xuICAgICAgICAgICAgcmVxdWVzdFJlZ2lzdGVyZWRVc2VySW5mbyhzb2NrZXRPYmopO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01TR19GUk9NX1VTRVInOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgTWFpbGluZyBoaXN0b3J5IGZldGNoZWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcnZlclJlc3AucGF5bG9hZC5tZXNzYWdlcyk7XG4gICAgICAgICAgICBzaG93TWVzc2FnZXMoc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2VzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNU0dfU0VORCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBzZW50IG1haWwgb3IgcmVjZWl2ZWQgbWFpbCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2UpO1xuICAgICAgICAgICAgbWVzc2FnZUFycmF5LnB1c2goc2VydmVyUmVzcC5wYXlsb2FkLm1lc3NhZ2UpO1xuICAgICAgICAgICAgc2hvd01lc3NhZ2VzKG1lc3NhZ2VBcnJheSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVNFUl9MT0dPVVQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0EgdXNlciBsb2dnZWQgb3V0Jyk7XG4gICAgICAgICAgICBjbG9zZUNoYXRXaW5kb3coKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdVU0VSX0VYVEVSTkFMX0xPR09VVCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQSB1c2VyIGxvZ2dlZCBvdXQnKTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJSZXNwLnBheWxvYWQudXNlci5sb2dpbiA9PT0gdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2VuZ2VyVGl0bGUoJ2xvZ291dCcpO1xuICAgICAgICAgICAgcmVxdWVzdFJlZ2lzdGVyZWRVc2VySW5mbyhzb2NrZXRPYmopO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWNlaXZlZCcpO1xuICAgICAgICAgICAgc2hvd01vZGFsKCdVc2VyICcgKyBuYW1lICsgJyBpcyBhbHJlYWR5IGxvZ2dlZCBpbicsIGxvZ2luV2luZG93KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAodXNlck9uTGluZUluaXQgPT09IHRydWUgJiYgdXNlck9mZkxpbmVJbml0ID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIExpc3QgUG9wdWxhdGVkJywgdXNlckxpc3QsIHVzZXJPbkxpbmUsIHVzZXJPZmZMaW5lKTtcbiAgICAgICAgcG9wdWxhdGVVc2VyTGlzdCh1c2VyTGlzdCwgdXNlck9uTGluZSwgdXNlck9mZkxpbmUpO1xuICAgICAgICB1c2VyT25MaW5lSW5pdCA9IGZhbHNlO1xuICAgICAgICB1c2VyT2ZmTGluZUluaXQgPSBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVNZXNzZW5nZXJUaXRsZShzdGF0dXMpIHtcbiAgICBjb25zb2xlLmxvZygndXBkYXRlTWVzc2VuZ2VyVGl0bGUgc3RhdHVzID0nLCBzdGF0dXMpO1xuICAgIGlmIChzdGF0dXMgPT09ICdsb2dpbicpIHtcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICdvbmxpbmUnO1xuICAgICAgICB1c2VyVG9DaGF0U3RhdHVzLnN0eWxlLmNvbG9yID0gJyM4N0E5MjInO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSAnbG9nb3V0Jykge1xuICAgICAgICB1c2VyVG9DaGF0U3RhdHVzLnRleHRDb250ZW50ID0gJ29mZmxpbmUnO1xuICAgICAgICAvLyBEb2Vzbid0IHdvcmtcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy5zdHlsZS5jb2xvciA9ICdyZ2IoNTcsIDU3LCA1NyknO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNvcnRVc2Vycyh1c2VyQXJyYXkpIHtcbiAgICBjb25zdCB0bXBBcnIgPSBbXTtcbiAgICAvLyBTZWFyY2ggYW5kIGRlbGV0ZSBBY3RpdmUgVXNlciBuYW1lXG4gICAgLy8gU29ydCBhcnJheVxuICAgIGZvciAoY29uc3QgdXNlciBvZiB1c2VyQXJyYXkpIHtcbiAgICAgICAgaWYgKHVzZXIubG9naW4gIT09IGFjdGl2ZVVzZXIubmFtZSlcbiAgICAgICAgICAgIHRtcEFyci5wdXNoKHVzZXIpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnc29ydFVzZXJzICcsICd1c2VyQXJyYXkgPSAnLCB1c2VyQXJyYXksICd0bXBBcnIgPSAnLCB0bXBBcnIpO1xuICAgIHJldHVybiB0bXBBcnI7XG59XG5mdW5jdGlvbiBvcGVuQ2hhdFdpbmRvdyhuYW1lLCBwYXNzKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBwYXNzKTtcbiAgICBhY3RpdmVVc2VyLm5hbWUgPSBuYW1lO1xuICAgIGFjdGl2ZVVzZXIucGFzcyA9IHBhc3M7XG4gICAgb3duVXNlck5hbWUudGV4dENvbnRlbnQgPSBhY3RpdmVVc2VyLm5hbWU7XG4gICAgbG9naW5XaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjaGF0V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuZnVuY3Rpb24gY2xvc2VDaGF0V2luZG93KCkge1xuICAgIGxvZ2luV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY2hhdFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbmZ1bmN0aW9uIHJlcXVlc3RSZWdpc3RlcmVkVXNlckluZm8oc29ja2V0T2JqKSB7XG4gICAgY29uc3QgY2hhdFVzZXJPbmxpbmVEYXRhID0ge1xuICAgICAgICBpZDogYGxpc3Qgb2YgdXNlcnMgb25saW5lYCxcbiAgICAgICAgdHlwZTogJ1VTRVJfQUNUSVZFJyxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9O1xuICAgIHNvY2tldE9iai5zZW5kKEpTT04uc3RyaW5naWZ5KGNoYXRVc2VyT25saW5lRGF0YSkpO1xuICAgIGNvbnN0IGNoYXRVc2VyT2ZmbGluZURhdGEgPSB7XG4gICAgICAgIGlkOiBgbGlzdCBvZiB1c2VycyBvZmZsaW5lYCxcbiAgICAgICAgdHlwZTogJ1VTRVJfSU5BQ1RJVkUnLFxuICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgIH07XG4gICAgc29ja2V0T2JqLnNlbmQoSlNPTi5zdHJpbmdpZnkoY2hhdFVzZXJPZmZsaW5lRGF0YSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxNZXNzYWdlTGlzdCgpIHtcbiAgICBjb25zdCBmZXRjaE1haWxSZXFPYmogPSB7XG4gICAgICAgIGlkOiAnRmV0Y2ggbWFpbGluZyB3aXRoIHVzZXIgJyArIHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50LFxuICAgICAgICB0eXBlOiAnTVNHX0ZST01fVVNFUicsXG4gICAgICAgIHBheWxvYWQ6IHsgdXNlcjogeyBsb2dpbjogdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgfSB9LFxuICAgIH07XG4gICAgd1NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGZldGNoTWFpbFJlcU9iaikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBtZXNzYWdlT2JqID0ge1xuICAgICAgICBpZDogJ25ldyBtZXNzYWdlIGZyb20gJyArIGFjdGl2ZVVzZXIubmFtZSArICcgdG8gJyArIHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50LFxuICAgICAgICB0eXBlOiAnTVNHX1NFTkQnLFxuICAgICAgICBwYXlsb2FkOiB7IG1lc3NhZ2U6IHsgdG86IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50LCB0ZXh0OiBtZXNzYWdlIH0gfSxcbiAgICB9O1xuICAgIHdTb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlT2JqKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0Q3VycmVudFVzZXIoKSB7XG4gICAgY29uc3QgbWVzc2FnZU9iaiA9IHtcbiAgICAgICAgaWQ6ICdsb2cgb3V0IHVzZXIgJyArIGFjdGl2ZVVzZXIubmFtZSxcbiAgICAgICAgdHlwZTogJ1VTRVJfTE9HT1VUJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBhY3RpdmVVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGFjdGl2ZVVzZXIucGFzcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICB3U29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iaikpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dGb290ZXIocGFyZW50KSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1mb290ZXItd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoZm9vdGVyKTtcbiAgICBjb25zdCBzY2hvb2xMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNjaG9vbExvZ28uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vYXBwLnJzLnNjaG9vbC8nKTtcbiAgICBzY2hvb2xMb2dvLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1saW5rJyk7XG4gICAgc2Nob29sTG9nby5pbm5lckhUTUwgPSBgPHN2ZyBpZD1cIkxheWVyXzFcIiBjbGFzcz1cInJzcy1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCA1NTIuOCAyMDUuM1wiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn0uc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKX0uc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKX0uc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKX0uc3Q0e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKX0uc3Q1e2ZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q2e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKX0uc3Q2LC5zdDd7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDgsLnN0OXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8xMF8pfS5zdDl7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwfTwvc3R5bGU+PHRpdGxlPnJzX3NjaG9vbF9qczwvdGl0bGU+PHBhdGggZD1cIk0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6XCIvPjxwYXRoIGQ9XCJNMTMzIDE2Ny4ybDI0LjIgNy4zYy0xLjMgNi4xLTQgMTEuOS03LjcgMTctMy40IDQuNS03LjkgOC0xMyAxMC4zLTUuMiAyLjMtMTEuOCAzLjUtMTkuOCAzLjUtOS43IDAtMTcuNy0xLjQtMjMuOC00LjItNi4yLTIuOC0xMS41LTcuOC0xNi0xNC45LTQuNS03LjEtNi43LTE2LjItNi43LTI3LjMgMC0xNC44IDMuOS0yNi4yIDExLjgtMzQuMXMxOS0xMS45IDMzLjQtMTEuOWMxMS4zIDAgMjAuMSAyLjMgMjYuNiA2LjggNi40IDQuNiAxMS4yIDExLjYgMTQuNCAyMWwtMjQuNCA1LjRjLS42LTIuMS0xLjUtNC4yLTIuNy02LTEuNS0yLjEtMy40LTMuNy01LjctNC45LTIuMy0xLjItNC45LTEuNy03LjUtMS43LTYuMyAwLTExLjEgMi41LTE0LjQgNy42LTIuNSAzLjctMy44IDkuNi0zLjggMTcuNiAwIDkuOSAxLjUgMTYuNyA0LjUgMjAuNCAzIDMuNyA3LjIgNS41IDEyLjcgNS41IDUuMyAwIDkuMy0xLjUgMTItNC40IDIuNy0zLjEgNC43LTcuNCA1LjktMTN6bTU2LjUtNTIuOGgyNy42djMxLjNoMzAuMnYtMzEuM2gyNy44djg5LjRoLTI3Ljh2LTM2LjJoLTMwLjJ2MzYuMmgtMjcuNnYtODkuNHpcIi8+PHBhdGggZD1cIk0yNzEuMyAxNTkuMWMwLTE0LjYgNC4xLTI2IDEyLjItMzQuMSA4LjEtOC4xIDE5LjUtMTIuMiAzNC0xMi4yIDE0LjkgMCAyNi4zIDQgMzQuNCAxMlMzNjQgMTQ0IDM2NCAxNTguNGMwIDEwLjUtMS44IDE5LTUuMyAyNS43LTMuNCA2LjYtOC43IDEyLTE1LjIgMTUuNi02LjcgMy43LTE1IDUuNi0yNC45IDUuNi0xMC4xIDAtMTguNC0xLjYtMjUtNC44LTYuOC0zLjQtMTIuNC04LjctMTYuMS0xNS4yLTQuMS03LTYuMi0xNS43LTYuMi0yNi4yem0yNy42LjFjMCA5IDEuNyAxNS41IDUgMTkuNSAzLjMgMy45IDcuOSA1LjkgMTMuNyA1LjkgNS45IDAgMTAuNS0xLjkgMTMuOC01LjhzNC45LTEwLjggNC45LTIwLjhjMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAgMi0xMy40IDUuOS0zLjQgMy45LTUuMSAxMC40LTUuMSAxOS41em05My40LS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjQgNCAzNC40IDEyUzQ4NSAxNDQgNDg1IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOCAzLjMtMy45IDQuOS0xMC44IDQuOS0yMC44IDAtOC40LTEuNy0xNC42LTUuMS0xOC40LTMuNC0zLjktOC01LjgtMTMuOC01LjgtNS4xLS4yLTEwLjEgMi0xMy40IDUuOS0zLjQgMy45LTUuMSAxMC40LTUuMSAxOS41elwiLz48cGF0aCBkPVwiTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHpcIi8+PGVsbGlwc2UgdHJhbnNmb3JtPVwicm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KVwiIGNsYXNzPVwic3QwXCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PGRlZnM+PGVsbGlwc2UgaWQ9XCJTVkdJRF8xX1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiU1ZHSURfMl9cIj48dXNlIHhsaW5rOmhyZWY9XCIjU1ZHSURfMV9cIiBvdmVyZmxvdz1cInZpc2libGVcIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz1cInN0MVwiPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC44MiA2OC4zNTMpXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTMzMC45LTE0LjJoMTc5Ljh2MTY1LjFIMzMwLjl6XCIvPjxnIGlkPVwiTGF5ZXJfMl8xX1wiPjxkZWZzPjxwYXRoIGlkPVwiU1ZHSURfM19cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuODIgNjguMzUzKVwiIGQ9XCJNMzMwLjktMTQuMmgxNzkuOHYxNjUuMUgzMzAuOXpcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzRfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzNfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgaWQ9XCJMYXllcl8xLTJcIiBjbGFzcz1cInN0MlwiPjxlbGxpcHNlIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjbGFzcz1cInN0MFwiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjxkZWZzPjxlbGxpcHNlIGlkPVwiU1ZHSURfNV9cIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY3g9XCI0MjAuNVwiIGN5PVwiNjcuOVwiIHJ4PVwiNjNcIiByeT1cIjUxLjhcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzZfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzVfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDNcIj48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKVwiIGNsYXNzPVwic3QwXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PGRlZnM+PHBhdGggaWQ9XCJTVkdJRF83X1wiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgZD1cIk0zNTcuOCAxN2gxMjUuOXYxMDMuN0gzNTcuOHpcIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD1cIlNWR0lEXzhfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzdfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDRcIj48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDVcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2c+PHBhdGggdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBjbGFzcz1cInN0NlwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjxlbGxpcHNlIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OClcIiBjbGFzcz1cInN0N1wiIGN4PVwiNDIwLjVcIiBjeT1cIjY3LjlcIiByeD1cIjYzXCIgcnk9XCI1MS44XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpXCIgY2xhc3M9XCJzdDBcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48ZGVmcz48cGF0aCBpZD1cIlNWR0lEXzlfXCIgdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBkPVwiTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44elwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiU1ZHSURfMTBfXCI+PHVzZSB4bGluazpocmVmPVwiI1NWR0lEXzlfXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9XCJzdDhcIj48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDVcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48L2c+PHBhdGggdHJhbnNmb3JtPVwicm90YXRlKC0zNyA0MjAuNzk5IDY4LjgwMilcIiBjbGFzcz1cInN0OVwiIGQ9XCJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzcuMDAxIDQyMC44MiA2OC4zNTMpXCIgY2xhc3M9XCJzdDdcIiBkPVwiTTMzMC45LTE0LjJoMTc5Ljh2MTY1LjFIMzMwLjl6XCIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09XCJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpXCIgY2xhc3M9XCJzdDdcIiBjeD1cIjQyMC41XCIgY3k9XCI2Ny45XCIgcng9XCI2M1wiIHJ5PVwiNTEuOFwiLz48cGF0aCBkPVwiTTM5Mi40IDYxLjNsMTAtNyAxMi4zIDE3LjVjMi4xIDIuOCAzLjcgNS44IDQuOSA5LjEuNyAyLjUuNSA1LjItLjUgNy42LTEuMyAzLTMuNCA1LjUtNi4yIDcuMy0zLjMgMi4zLTYuMSAzLjYtOC41IDQtMi4zLjQtNC43IDAtNi45LTEtMi40LTEuMi00LjUtMi45LTYuMS01LjFsOC42LThjLjcgMS4xIDEuNiAyLjEgMi42IDIuOS43LjUgMS41LjggMi40LjguNyAwIDEuNC0uMyAxLjktLjcgMS0uNiAxLjctMS44IDEuNi0zLS4zLTEuNy0xLTMuNC0yLjEtNC43bC0xNC0xOS43em0zMCAxMS4xbDkuMS03LjJjMSAxLjIgMi4zIDIuMSAzLjcgMi42IDIgLjYgNC4xLjIgNS44LTEuMSAxLjItLjggMi4yLTEuOSAyLjYtMy4zLjYtMS44LS40LTMuOC0yLjItNC40LS4zLS4xLS42LS4yLS45LS4yLTEuMi0uMS0zLjMuNC02LjQgMS43LTUuMSAyLjEtOS4xIDIuOS0xMi4xIDIuNi0yLjktLjMtNS42LTEuOC03LjItNC4zLTEuMi0xLjctMS44LTMuNy0xLjktNS43IDAtMi4zLjYtNC42IDEuOS02LjUgMS45LTIuNyA0LjItNSA3LTYuOCA0LjItMi45IDcuOS00LjMgMTEuMS00LjMgMy4yIDAgNi4yIDEuNSA5IDQuNmwtOSA3LjFjLTEuOC0yLjMtNS4yLTIuOC03LjUtMWwtLjMuM2MtMSAuNi0xLjcgMS41LTIuMSAyLjYtLjMuOC0uMSAxLjcuNCAyLjQuNC41IDEgLjkgMS43LjkuOC4xIDIuMi0uMyA0LjItMS4yIDUtMi4xIDguOC0zLjMgMTEuNC0zLjcgMi4yLS40IDQuNS0uMiA2LjYuNyAxLjkuOCAzLjUgMi4yIDQuNiAzLjkgMS40IDIgMi4yIDQuNCAyLjMgNi45LjEgMi42LS42IDUuMS0yIDcuMy0xLjggMi43LTQuMSA1LTYuOCA2LjgtNS41IDMuOC0xMCA1LjQtMTMuNiA0LjgtMy45LS42LTcuMS0yLjYtOS40LTUuNXpcIi8+PC9nPjwvZz48L2c+PC9zdmc+YDtcbiAgICBmb290ZXIuYXBwZW5kKHNjaG9vbExvZ28pO1xuICAgIGNvbnN0IGF1dGhvckdIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYXV0aG9yR0h1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWlkcnUnKTtcbiAgICBhdXRob3JHSHViLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1saW5rJyk7XG4gICAgYXV0aG9yR0h1Yi50ZXh0Q29udGVudCA9ICdJZ29yIENoZWNoZXVyb3YnO1xuICAgIGZvb3Rlci5hcHBlbmQoYXV0aG9yR0h1Yik7XG4gICAgY29uc3QgYXBwWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhcHBZZWFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwLXllYXInKTtcbiAgICBhcHBZZWFyLnRleHRDb250ZW50ID0gJzIwMjQnO1xuICAgIGZvb3Rlci5hcHBlbmQoYXBwWWVhcik7XG59XG4iLCJpbXBvcnQgeyBhY3RpdmVVc2VyIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgbG9nb3V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGtleURvd25IYW5kbGVyIH0gZnJvbSAnLi9jaGF0LW1lc3NhZ2VzJztcbmV4cG9ydCBjb25zdCBvd25Vc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dIZWFkZXIocGFyZW50KSB7XG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlcldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjaGF0LWhlYWRlci13cmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICBvd25Vc2VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ293bi11c2VyLW5hbWUnKTtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlVXNlci5uYW1lID0gJywgYWN0aXZlVXNlcik7XG4gICAgb3duVXNlck5hbWUudGV4dENvbnRlbnQgPSBhY3RpdmVVc2VyLm5hbWU7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQob3duVXNlck5hbWUpO1xuICAgIGNvbnN0IGFwcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXBwLW5hbWUnKTtcbiAgICBhcHBOYW1lLnRleHRDb250ZW50ID0gJ0Z1biBDaGF0JztcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZChhcHBOYW1lKTtcbiAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1idG4td3JhcHBlcicpO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKGJ0bldyYXBwZXIpO1xuICAgIGNvbnN0IGxvZ091dEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvZ091dEJUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvdXQtYnRuJyk7XG4gICAgbG9nT3V0QlROLmlubmVyVGV4dCA9ICdMb2cgb3V0JztcbiAgICBidG5XcmFwcGVyLmFwcGVuZChsb2dPdXRCVE4pO1xuICAgIGxvZ091dEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgbG9nb3V0Q3VycmVudFVzZXIoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHNob3dIZWFkZXIgfSBmcm9tICcuL2NoYXQtaGVhZGVyJztcbmltcG9ydCB7IHNob3dGb290ZXIgfSBmcm9tICcuL2NoYXQtZm9vdGVyJztcbmltcG9ydCB7IHNob3dVc2VyUGFuZWwgfSBmcm9tICcuL2NoYXQtdXNlcnMnO1xuaW1wb3J0IHsgc2hvd01lc3NhZ2VQYW5lbCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlcyc7XG4vLyBpbXBvcnQgeyB1c2Vyc09uTGluZSwgdXNlcnNPZmZMaW5lIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuZXhwb3J0IGNvbnN0IGNoYXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhdFdpbmRvdygpIHtcbiAgICBjaGF0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoYXQtd3JhcHBlcicpO1xuICAgIGNoYXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2hhdFdyYXBwZXIpO1xuICAgIHNob3dIZWFkZXIoY2hhdFdyYXBwZXIpO1xuICAgIHNob3dNYWluV2luZG93KGNoYXRXcmFwcGVyKTtcbiAgICBzaG93Rm9vdGVyKGNoYXRXcmFwcGVyKTtcbn1cbmZ1bmN0aW9uIHNob3dNYWluV2luZG93KHBhcmVudCkge1xuICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWNoYXQtd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobWFpbldyYXBwZXIpO1xuICAgIHNob3dVc2VyUGFuZWwobWFpbldyYXBwZXIpO1xuICAgIHNob3dNZXNzYWdlUGFuZWwobWFpbldyYXBwZXIpO1xufVxuIiwiaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IGFjdGl2ZVVzZXIgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5leHBvcnQgY29uc3QgdXNlclRvQ2hhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBjb25zdCB1c2VyVG9DaGF0U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbnZpdGVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBjb25zdCBzZW5kQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbmV3TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSW52aXRlTVNHKG1lc3NhZ2UpIHtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVzc2FnZVBhbmVsKHBhcmVudCkge1xuICAgIGNvbnN0IG1lc3NlbmdlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzZW5nZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2VuZ2VyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1lc3NlbmdlcldyYXBwZXIpO1xuICAgIHNob3dNZXNzYWdlUGFuZWxIZWFkZXIobWVzc2VuZ2VyV3JhcHBlcik7XG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlcycpO1xuICAgIG1lc3NlbmdlcldyYXBwZXIuYXBwZW5kKG1lc3NhZ2VzKTtcbiAgICBpbnZpdGVNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhdC1pbnZpdGUtbW9kYWwnKTtcbiAgICBpbnZpdGVNZXNzYWdlLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHVzZXIgdG8gc3RhcnQgbWVzc2FnaW5nJztcbiAgICBtZXNzZW5nZXJXcmFwcGVyLmFwcGVuZChpbnZpdGVNZXNzYWdlKTtcbiAgICBzZW5kTmV3TWVzc2FnZVBhbmVsKG1lc3NlbmdlcldyYXBwZXIpO1xufVxuZnVuY3Rpb24gc2hvd01lc3NhZ2VQYW5lbEhlYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UtaGVhZGVyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKGhlYWRlcldyYXBwZXIpO1xuICAgIHVzZXJUb0NoYXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1uYW1lJyk7XG4gICAgdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh1c2VyVG9DaGF0TmFtZSk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItc3RhdHVzJyk7XG4gICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHVzZXJUb0NoYXRTdGF0dXMpO1xufVxuZnVuY3Rpb24gc2VuZE5ld01lc3NhZ2VQYW5lbChwYXJlbnQpIHtcbiAgICBjb25zdCBuZXdNZXNzYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LW1lc3NhZ2Utd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobmV3TWVzc2FnZVdyYXBwZXIpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICduZXctbWVzc2FnZS1pbnB1dCcpO1xuICAgIG5ld01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXcml0ZSBuZXcgbWVzc2FnZSAuLi4nKTtcbiAgICBuZXdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIG5ld01lc3NhZ2VXcmFwcGVyLmFwcGVuZChuZXdNZXNzYWdlKTtcbiAgICBzZW5kQlROLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VuZC1tZXNzYWdlLWJ0bicpO1xuICAgIHNlbmRCVE4udGV4dENvbnRlbnQgPSAnU2VuZCc7XG4gICAgbmV3TWVzc2FnZVdyYXBwZXIuYXBwZW5kKHNlbmRCVE4pO1xuICAgIG5ld01lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChuZXdNZXNzYWdlLnZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBzZW5kQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaWYgKG5ld01lc3NhZ2UudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgc2VuZEJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgc2VuZEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld01lc3NhZ2UudmFsdWUgPT09ICcnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbnZpdGVNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNlbmRNZXNzYWdlKG5ld01lc3NhZ2UudmFsdWUpO1xuICAgICAgICBuZXdNZXNzYWdlLnZhbHVlID0gJyc7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAobmV3TWVzc2FnZS52YWx1ZSA9PT0gJycpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBuZXdNZXNzYWdlKSB7XG4gICAgICAgIGludml0ZU1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc2VuZE1lc3NhZ2UobmV3TWVzc2FnZS52YWx1ZSk7XG4gICAgICAgIG5ld01lc3NhZ2UudmFsdWUgPSAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd01lc3NhZ2VzKG1lc3NhZ2VBcnJheSkge1xuICAgIGNvbnN0IG1lc3NhZ2VOdW0gPSBtZXNzYWdlQXJyYXkubGVuZ3RoO1xuICAgIGlmIChtZXNzYWdlQXJyYXkubGVuZ3RoID4gMClcbiAgICAgICAgY2hhbmdlSW52aXRlTVNHKCcnKTtcbiAgICBjb25zb2xlLmxvZygnc2hvd01lc3NhZ2VzIG1lc3NhZ2VBcnJheSA9ICcsIG1lc3NhZ2VBcnJheSwgJ21lc3NhZ2VOdW0gPSAnLCBtZXNzYWdlTnVtKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VOdW07IGkrKykge1xuICAgICAgICAvLyBNZXNzYWdlIGZyb20gdGhlIHVzZXIgSSdtIGNoYXR0aW5nIG5vd1xuICAgICAgICBpZiAobWVzc2FnZUFycmF5W2ldLmZyb20gPT09IHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50IHx8IG1lc3NhZ2VBcnJheVtpXS5mcm9tID09PSBhY3RpdmVVc2VyLm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXdyYXBwZXInKTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmFwcGVuZChtZXNzYWdlV3JhcHBlcik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZXNzYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtaGVhZGVyJyk7XG4gICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5hcHBlbmQobWVzc2FnZUhlYWRlcik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlU2VuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBmcm8gPSBtZXNzYWdlQXJyYXlbaV0uZnJvbSA9PT0gdXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPyBtZXNzYWdlQXJyYXlbaV0uZnJvbSA6ICdZb3UnO1xuICAgICAgICAgICAgbWVzc2FnZVNlbmRlci50ZXh0Q29udGVudCA9IGZybztcbiAgICAgICAgICAgIGlmIChmcm8gPT09ICdZb3UnKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VXcmFwcGVyLnN0eWxlLmFsaWduU2VsZiA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIG1lc3NhZ2VIZWFkZXIuYXBwZW5kKG1lc3NhZ2VTZW5kZXIpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG1zZ0RhdGUgPSBuZXcgRGF0ZShtZXNzYWdlQXJyYXlbaV0uZGF0ZXRpbWUpO1xuICAgICAgICAgICAgbWVzc2FnZURhdGUudGV4dENvbnRlbnQgPSBgJHtub3JtKG1zZ0RhdGUuZ2V0RGF0ZSgpKX0tJHtub3JtKG1zZ0RhdGUuZ2V0TW9udGgoKSl9LSR7bXNnRGF0ZS5nZXRGdWxsWWVhcigpfSAke25vcm0obXNnRGF0ZS5nZXRIb3VycygpKX06JHtub3JtKG1zZ0RhdGUuZ2V0TWludXRlcygpKX06JHtub3JtKG1zZ0RhdGUuZ2V0U2Vjb25kcygpKX1gO1xuICAgICAgICAgICAgbWVzc2FnZUhlYWRlci5hcHBlbmQobWVzc2FnZURhdGUpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVzc2FnZVR4dC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXR4dCcpO1xuICAgICAgICAgICAgbWVzc2FnZVR4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2VBcnJheVtpXS50ZXh0O1xuICAgICAgICAgICAgbWVzc2FnZVdyYXBwZXIuYXBwZW5kKG1lc3NhZ2VUeHQpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWZvb3RlcicpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VBcnJheVtpXS5zdGF0dXMuaXNFZGl0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRm9vdGVyLnRleHRDb250ZW50ID0gJ0VkaXRlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlQXJyYXlbaV0uc3RhdHVzLmlzUmVhZGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZvb3Rlci50ZXh0Q29udGVudCA9ICdPcGVuZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZUFycmF5W2ldLnN0YXR1cy5pc0RlbGl2ZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VGb290ZXIudGV4dENvbnRlbnQgPSAnRGVsaXZlcmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VGb290ZXIudGV4dENvbnRlbnQgPSAnTm90IGRlbGl2ZXJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5hcHBlbmQobWVzc2FnZUZvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyV3JhcHBlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlci1pZCcpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJXcmFwcGVyTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnRleHRDb250ZW50ID09PSBtZXNzYWdlQXJyYXlbaV0uZnJvbSAmJiBtZXNzYWdlQXJyYXlbaV0uc3RhdHVzLmlzUmVhZGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWlsTnVtID0gdXNlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID09PSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKHVzZXIucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gbWFpbE51bS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybShkYXlNaW4pIHtcbiAgICByZXR1cm4gZGF5TWluIDwgMTAgPyAnMCcgKyBkYXlNaW4gOiBkYXlNaW4udG9TdHJpbmcoKTtcbn1cbiIsImltcG9ydCB7IGZpbGxNZXNzYWdlTGlzdCB9IGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IHsgdXNlclRvQ2hhdE5hbWUsIHVzZXJUb0NoYXRTdGF0dXMsIGNoYW5nZUludml0ZU1TRywgc2VuZEJUTiwgbmV3TWVzc2FnZSwgbWVzc2FnZXMgfSBmcm9tICcuL2NoYXQtbWVzc2FnZXMnO1xuZXhwb3J0IGNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmV4cG9ydCBsZXQgc2VsZWN0ZWRDb250YWN0ID0gJyc7XG5sZXQgc2VsZWN0ZWRVc2VyRWxlbWVudDtcbmV4cG9ydCBmdW5jdGlvbiBzaG93VXNlclBhbmVsKHBhcmVudCkge1xuICAgIGNvbnN0IHVzZXJQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VyUGFuZWxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1wYW5lbC13cmFwcGVyJyk7XG4gICAgcGFyZW50LmFwcGVuZCh1c2VyUGFuZWxXcmFwcGVyKTtcbiAgICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1zZWFyY2gnKTtcbiAgICB1c2VyU2VhcmNoLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIC4uLicpO1xuICAgIHVzZXJTZWFyY2guc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgdXNlclBhbmVsV3JhcHBlci5hcHBlbmQodXNlclNlYXJjaCk7XG4gICAgdXNlckxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLWxpc3QnKTtcbiAgICB1c2VyUGFuZWxXcmFwcGVyLmFwcGVuZCh1c2VyTGlzdCk7XG4gICAgdXNlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcldyYXBwZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXItd3JhcHBlcicpO1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnQgc2VhcmNoaW5nICcsIHVzZXJXcmFwcGVyTGlzdCk7XG4gICAgICAgIC8vIFNlYXJjaCBwYXR0ZXJuIHN0YXJ0cyB3aXRoIGlucHV0IGxvd2VyY2FzZSB2YWx1ZVxuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeJHt1c2VyU2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcldyYXBwZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZUVsZW1lbnQgPSB1c2VyV3JhcHBlckxpc3RbaV0uY2hpbGRyZW5bMV07XG4gICAgICAgICAgICBjb25zdCB1c2VyV3JhcHBlciA9IHVzZXJXcmFwcGVyTGlzdFtpXTtcbiAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA9IHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgLy8gSGlkZSB1c2VyIGlmIGl0IGRvZXNuJ3QgbWF0Y2ggcGF0dGVyblxuICAgICAgICAgICAgaWYgKHJlZ2V4cCAmJiAhcmVnZXhwLnRlc3QodXNlck5hbWUpKVxuICAgICAgICAgICAgICAgIHVzZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAvLyBTaG93IGFsbCB1c2VycyBpZiBwYXR0ZXJuIChpbnB1dCB2YWx1ZSkgaXMgZW1wdHkgb3Igc2hvdyBoaWRkZW4gdXNlciB3aGVuIHBhdHRlcm4gY2hhbmdlZFxuICAgICAgICAgICAgaWYgKCFyZWdleHAgfHwgKHJlZ2V4cCAmJiByZWdleHAudGVzdCh1c2VyTmFtZSkpKVxuICAgICAgICAgICAgICAgIHVzZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VyTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBJZiBhbnkgdXNlciB3YXMgc2VsZWN0ZWQgYmVmb3JlLCByZW1vdmUgdGhpcyBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHNlbGVjdGVkVXNlckVsZW1lbnQpXG4gICAgICAgICAgICBzZWxlY3RlZFVzZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3JnYig1NywgNTcsIDU3KSc7XG4gICAgICAgIGNhdGNoVXNlckxpc3RFbGVtZW50Q2xpY2tlZChldmVudCk7XG4gICAgICAgIHVzZXJUb0NoYXROYW1lLnRleHRDb250ZW50ID0gc2VsZWN0ZWRVc2VyRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgdXNlclRvQ2hhdFN0YXR1cy50ZXh0Q29udGVudCA9IHNlbGVjdGVkVXNlckVsZW1lbnQuZGF0YXNldC5zdGF0dXM7XG4gICAgICAgIGlmICh1c2VyVG9DaGF0U3RhdHVzLnRleHRDb250ZW50ID09PSAnb25saW5lJylcbiAgICAgICAgICAgIHVzZXJUb0NoYXRTdGF0dXMuc3R5bGUuY29sb3IgPSAnIzg3QTkyMic7XG4gICAgICAgIGlmICh1c2VyVG9DaGF0U3RhdHVzLnRleHRDb250ZW50ID09PSAnb2ZmbGluZScpXG4gICAgICAgICAgICB1c2VyVG9DaGF0U3RhdHVzLnN0eWxlLmNvbG9yID0gJ3JnYig1NywgNTcsIDU3KSc7XG4gICAgICAgIGZpbGxNZXNzYWdlTGlzdCgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2F0Y2hVc2VyTGlzdEVsZW1lbnRDbGlja2VkKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAvLyBVc2VyIHdyYXBwZXIgaXMgY2xpY2tlZFxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VyLXdyYXBwZXInKSkge1xuICAgICAgICBjb25zdCB1c2VyTmFtZUVsZW1lbnQgPSBlbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWxlY3RlZENvbnRhY3QgPSB1c2VyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QodXNlck5hbWVFbGVtZW50KTtcbiAgICB9XG4gICAgLy8gVXNlciBpY29uIGlzIGNsaWNrZWRcbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3VzZXItc3RhdHVzLWljb24nKSkge1xuICAgICAgICBjb25zdCB1c2VyTmFtZUVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdCA9IHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlc0FjY1RvTmV3Q29udGFjdCh1c2VyTmFtZUVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBVc2VyIG5hbWUgaXMgY2xpY2tlZFxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndXNlci1pZCcpKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgc2VsZWN0ZWRDb250YWN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzQWNjVG9OZXdDb250YWN0KHVzZXJOYW1lRWxlbWVudCk7XG4gICAgfVxuICAgIC8vIFVzZXIgbWVzc2FnZSBudW1iZXIgaXMgY2xpY2tlZFxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndXNlci1tc2ctbnVtYmVyJykpIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWVFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBzZWxlY3RlZENvbnRhY3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNBY2NUb05ld0NvbnRhY3QodXNlck5hbWVFbGVtZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjaGFuZ2VBdHRyaWJ1dGVzQWNjVG9OZXdDb250YWN0KG5ld0NvbnRhY3QpIHtcbiAgICBpZiAoc2VsZWN0ZWRVc2VyRWxlbWVudCA9PT0gbmV3Q29udGFjdClcbiAgICAgICAgcmV0dXJuO1xuICAgIHNlbGVjdGVkVXNlckVsZW1lbnQgPSBuZXdDb250YWN0O1xuICAgIG5ld0NvbnRhY3Quc3R5bGUuY29sb3IgPSAnYmx1ZSc7XG4gICAgY2hhbmdlSW52aXRlTVNHKCdTdGFydCBtZXNzYWdpbmcnKTtcbiAgICBzZW5kQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBuZXdNZXNzYWdlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBpZiAobmV3Q29udGFjdC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKVxuICAgICAgICBuZXdDb250YWN0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSAnJztcbiAgICBtZXNzYWdlcy5pbm5lckhUTUwgPSAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJMaXN0KHBhcmVudCwgdXNlck9uTGluZUxpc3QsIHVzZXJPZmZMaW5lTGlzdCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAodXNlclRvQ2hhdE5hbWUudGV4dENvbnRlbnQgPT09ICcnKSB7XG4gICAgICAgIHNlbmRCVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgbmV3TWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIH1cbiAgICBpZiAodXNlck9uTGluZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJPbkxpbmVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjcmVhdGVVc2VyTGlzdEVsZW1lbnQocGFyZW50LCB1c2VyT25MaW5lTGlzdCwgaSwgJyM4N0E5MjInLCAnb25saW5lJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVzZXJPZmZMaW5lTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlck9mZkxpbmVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjcmVhdGVVc2VyTGlzdEVsZW1lbnQocGFyZW50LCB1c2VyT2ZmTGluZUxpc3QsIGksICcjQjNDOENGJywgJ29mZmxpbmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJMaXN0RWxlbWVudChwYXJlbnQsIHVzZXJBcnJheSwgaW5kZXgsIGljb25Db2xvciwgc3RhdHVzKSB7XG4gICAgY29uc3QgdXNlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd1c2VyLXdyYXBwZXInKTtcbiAgICBwYXJlbnQuYXBwZW5kKHVzZXJXcmFwcGVyKTtcbiAgICBjb25zdCBzdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhdHVzSWNvbi5jbGFzc0xpc3QuYWRkKCd1c2VyLXN0YXR1cy1pY29uJyk7XG4gICAgc3RhdHVzSWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpY29uQ29sb3I7XG4gICAgdXNlcldyYXBwZXIuYXBwZW5kKHN0YXR1c0ljb24pO1xuICAgIGNvbnN0IHVzZXJJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJJRC5jbGFzc0xpc3QuYWRkKCd1c2VyLWlkJyk7XG4gICAgdXNlcklELnRleHRDb250ZW50ID0gdXNlckFycmF5W2luZGV4XS5sb2dpbjtcbiAgICB1c2VySUQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycsIHN0YXR1cyk7XG4gICAgdXNlcldyYXBwZXIuYXBwZW5kKHVzZXJJRCk7XG4gICAgY29uc3QgbXNnTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbXNnTnVtLmNsYXNzTGlzdC5hZGQoJ3VzZXItbXNnLW51bWJlcicpO1xuICAgIHVzZXJXcmFwcGVyLmFwcGVuZChtc2dOdW0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFwcEluZm8gPSBgV2hhdCBjb3VsZCBiZSBiZXR0ZXIgdGhhbiBjaGF0dGluZyB3aXRoIHlvdXIgZnJpZW5kcyB1c2luZyBhIGNoYXQgYXBwP1xuICBCdXQgd2hhdCBpZiB0aGUgc2VydmljZSBvd25lciBkZWxldGVzIHlvdXIgbWVzc2FnZXM/IE9yLCBvbiB0aGUgY29udHJhcnksIFxuICB0aGV5IGNhbiBzdG9yZSB5b3VyIGNoYXQgaGlzdG9yeSB3aXRob3V0IHlvdXIgY29uc2VudCEgWW91IGtub3cgaG93IHRvIGNyZWF0ZSBcbiAgYW4gb3V0c3RhbmRpbmcgZGVzaWduIGFuZCBmdW5jdGlvbmFsaXR5LCByaWdodD8gTGV0J3Mgbm90IGRlbGF5IGFuZCBnZXQgZG93biB0byB3b3JrISBcbiAgTGV0J3MgY3JlYXRlIG91ciBvd24gY2hhdC5gO1xuY29uc3QgcG93ZXJMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIHBvd2VyTGF5ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwb3dlci1sYXllcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvd2VyTGF5ZXIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwpO1xuICAgIG1vZGFsQ2xvc2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1jbG9zZScpO1xuICAgIG1vZGFsQ2xvc2UuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwibW9kYWwtY2xvc2Utc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz48L3N2Zz4nO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKTtcbiAgICBtb2RhbFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC10ZXh0Jyk7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gJyc7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsVGV4dCk7XG4gICAgcG93ZXJMYXllci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKGNvbnRlbnQsIHBhcmVudCkge1xuICAgIHBvd2VyTGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvd2VyTGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSwgdHJ1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICAgIHBhcmVudC5hcHBlbmQobG9hZGVyKTtcbn1cbiIsImltcG9ydCB7IHNob3dNb2RhbCwgYXBwSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xuZXhwb3J0IGNvbnN0IGxvZ2luQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0J1dHRvbnMocGFyZW50KSB7XG4gICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idG4td3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoYnRuV3JhcHBlcik7XG4gICAgbG9naW5CVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICBsb2dpbkJUTi5jbGFzc0xpc3QuYWRkKCdsb2dpbi13aW5kb3ctYnRuJyk7XG4gICAgbG9naW5CVE4uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dpbi1idG4nKTtcbiAgICBsb2dpbkJUTi5pbm5lclRleHQgPSAnTG9naW4nO1xuICAgIGJ0bldyYXBwZXIuYXBwZW5kKGxvZ2luQlROKTtcbiAgICBjb25zdCBpbmZvQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5mb0JUTi5jbGFzc0xpc3QuYWRkKCdsb2dpbi13aW5kb3ctYnRuJyk7XG4gICAgaW5mb0JUTi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8tYnRuJyk7XG4gICAgaW5mb0JUTi5pbm5lclRleHQgPSAnSW5mbyc7XG4gICAgYnRuV3JhcHBlci5hcHBlbmQoaW5mb0JUTik7XG4gICAgaW5mb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd01vZGFsKGFwcEluZm8sIHBhcmVudCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyB1c2VyRGF0YVZhbGlkLCBhY3RpdmVVc2VyIH0gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgeyBsb2dpbkJUTiB9IGZyb20gJy4vbG9naW4tYnV0dG9ucyc7XG5jb25zdCB3YXJuaW5nTWVzc2FnZSA9IFtcbiAgICAnTWluaW11bSBuYW1lIGxlbmd0aCBpcyAzIGxhdGluIGxldHRlcnMuIE9ubHkgZmlyc3QgbGV0dGVyIG11c3QgYmUgaW4gdXBwZXIgY2FzZScsXG4gICAgJ01pbmltdW0gcGFzc3dvcmQgbGVuZ3RoIGlzIDUgY2hhcmFjdGVycy4gSXQgbXVzdCBjb250YWluIGxldHRlcnMgYW5kIG51bWJlcnMnLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9naW5JbnB1dChwYXJlbnQpIHtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRXcmFwcGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwJyk7XG4gICAgcGFyZW50LmFwcGVuZChpbnB1dFdyYXBwZXJOYW1lKTtcbiAgICBzaG93SW5wdXRGaWVsZChpbnB1dFdyYXBwZXJOYW1lLCAndXNlci1uYW1lJywgJ1VzZXIgTmFtZScsICdbQS1aXVthLXpcXFxcLV17Mix9Jyk7XG4gICAgY29uc3QgaW5wdXRXcmFwcGVyUGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0V3JhcHBlclBhc3MuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcCcpO1xuICAgIHBhcmVudC5hcHBlbmQoaW5wdXRXcmFwcGVyUGFzcyk7XG4gICAgc2hvd0lucHV0RmllbGQoaW5wdXRXcmFwcGVyUGFzcywgJ3VzZXItcGFzcycsICdQYXNzd29yZCcsICdeKD89Lio/W2Etel0pKD89Lio/WzAtOV0pLns1LH0kJyk7XG59XG5mdW5jdGlvbiBzaG93SW5wdXRGaWVsZChwYXJlbnQsIGF0dHJJRCwgbGJsVGV4dCwgcGF0dGVybikge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2F0dHJJRH0tbGFiZWxgKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsb2dpbi1sYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGJsVGV4dDtcbiAgICBwYXJlbnQuYXBwZW5kKGxhYmVsKTtcbiAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbG9naW4taW5wdXQtd3JhcHBlcicpO1xuICAgIHBhcmVudC5hcHBlbmQoaW5wdXRXcmFwcGVyKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7YXR0cklEfWApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsIGAke3BhdHRlcm59YCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndXNlci1pbnB1dCcpO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmQoaW5wdXQpO1xuICAgIGNvbnN0IHdhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YXJuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHthdHRySUR9LXdhcm5pbmdgKTtcbiAgICB3YXJuLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdhcm5pbmcnKTtcbiAgICBpbnB1dFdyYXBwZXIuYXBwZW5kKHdhcm4pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQoZSwgaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAodXNlckRhdGFWYWxpZC5uYW1lID09PSB0cnVlICYmIHVzZXJEYXRhVmFsaWQucGFzcyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBsb2dpbkJUTi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dpbkJUTi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGVja0lucHV0KGV2ZW50LCBpbnB1dE9iaikge1xuICAgIGxldCB3YXJuRmllbGQ7XG4gICAgaWYgKGlucHV0T2JqICYmIGlucHV0T2JqLnBhcmVudEVsZW1lbnQgJiYgaW5wdXRPYmoucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgd2FybkZpZWxkID0gaW5wdXRPYmoucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICAgIGlmIChpbnB1dE9iai52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgd2FybkZpZWxkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0T2JqLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dE9iai5pZCA9PSAndXNlci1uYW1lJykge1xuICAgICAgICAgICAgICAgIHdhcm5GaWVsZC50ZXh0Q29udGVudCA9IHdhcm5pbmdNZXNzYWdlWzBdO1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhVmFsaWQubmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXIubmFtZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0T2JqLmlkID09ICd1c2VyLXBhc3MnKSB7XG4gICAgICAgICAgICAgICAgd2FybkZpZWxkLnRleHRDb250ZW50ID0gd2FybmluZ01lc3NhZ2VbMV07XG4gICAgICAgICAgICAgICAgdXNlckRhdGFWYWxpZC5wYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5wYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3YXJuRmllbGQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGlmIChpbnB1dE9iai5pZCA9PSAndXNlci1uYW1lJykge1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhVmFsaWQubmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWN0aXZlVXNlci5uYW1lID0gaW5wdXRPYmoudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXRPYmouaWQgPT0gJ3VzZXItcGFzcycpIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVZhbGlkLnBhc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVVzZXIucGFzcyA9IGlucHV0T2JqLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzaG93TG9naW5JbnB1dCB9IGZyb20gJy4vbG9naW4taW5wdXQnO1xuaW1wb3J0IHsgc2hvd0J1dHRvbnMsIGxvZ2luQlROIH0gZnJvbSAnLi9sb2dpbi1idXR0b25zJztcbmltcG9ydCB7IGNoZWNrU2VydmVyQXV0aCB9IGZyb20gJy4uL2FwaS9hcGknO1xuZXhwb3J0IGNvbnN0IHVzZXJEYXRhVmFsaWQgPSB7XG4gICAgbmFtZTogZmFsc2UsXG4gICAgcGFzczogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IGFjdGl2ZVVzZXIgPSB7XG4gICAgbmFtZTogJycsXG4gICAgcGFzczogJycsXG59O1xuZXhwb3J0IGNvbnN0IGxvZ2luV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvZ2luV2luZG93KCkge1xuICAgIGxvZ2luV2luZG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9naW4td3JhcHBlcicpO1xuICAgIGxvZ2luV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobG9naW5XaW5kb3cpO1xuICAgIGNvbnN0IHBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wYXNzJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLW5hbWUnKTtcbiAgICBzaG93VGl0bGUobG9naW5XaW5kb3cpO1xuICAgIHNob3dMb2dpbklucHV0KGxvZ2luV2luZG93KTtcbiAgICBzaG93QnV0dG9ucyhsb2dpbldpbmRvdyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyAmJiB1c2VyRGF0YVZhbGlkLm5hbWUgPT09IHRydWUgJiYgdXNlckRhdGFWYWxpZC5wYXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVVzZXIubmFtZSAhPT0gbnVsbCAmJiBhY3RpdmVVc2VyLnBhc3MgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgY2hlY2tTZXJ2ZXJBdXRoKGFjdGl2ZVVzZXIubmFtZSwgYWN0aXZlVXNlci5wYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVVc2VyLm5hbWUgIT09IG51bGwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBwYXNzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxvZ2luQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbmFtZSA9ICcsIGFjdGl2ZVVzZXIubmFtZSwgJ3Bhc3MgPSAnLCBhY3RpdmVVc2VyLnBhc3MpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgICAgICBpZiAoYWN0aXZlVXNlci5uYW1lICE9PSBudWxsICYmIGFjdGl2ZVVzZXIucGFzcyAhPT0gbnVsbClcbiAgICAgICAgICAgIGNoZWNrU2VydmVyQXV0aChhY3RpdmVVc2VyLm5hbWUsIGFjdGl2ZVVzZXIucGFzcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzaG93VGl0bGUocGFyZW50KSB7XG4gICAgY29uc3QgbG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2luLWhlYWRlcicpO1xuICAgIGxvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvZyBpbic7XG4gICAgcGFyZW50LmFwcGVuZChsb2dpbkhlYWRlcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dMb2dpbldpbmRvdyB9IGZyb20gJy4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tICcuL2NvbW1vbi9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ2hhdFdpbmRvdyB9IGZyb20gJy4vY2hhdC9jaGF0LW1haW4nO1xuY3JlYXRlTW9kYWwoKTtcbnNob3dMb2dpbldpbmRvdygpO1xuY3JlYXRlQ2hhdFdpbmRvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9