/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/login.ts");

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
    '<svg xmlns="http://www.w3.org/2000/svg" class="greeting-close-svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELEdBQUcsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEdBQUcsSUFBSTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSSxZQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7OztVQzFLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0IsRUFBRSxtQkFBbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvbG9naW4udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXRXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmlucHV0V2luZG93LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9naW4td3JhcHBlcicpO1xuaW5wdXRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kKGlucHV0V2luZG93KTtcbmNvbnN0IGxvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dpbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xubG9naW5IZWFkZXIudGV4dENvbnRlbnQgPSAnUlNTIFB1enpsZSBMb2dpbic7XG4vLyBpbnB1dFdpbmRvdy5hcHBlbmQobG9naW5IZWFkZXIpO1xuY29uc3QgaW5wdXRXcmFwcGVyRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmlucHV0V3JhcHBlckZpcnN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXAnKTtcbi8vIGlucHV0V2luZG93LmFwcGVuZChpbnB1dFdyYXBwZXJGaXJzdCk7XG5jb25zdCBmaXJzdE5hbWVMQkwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuZmlyc3ROYW1lTEJMLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0LW5hbWUnKTtcbmZpcnN0TmFtZUxCTC50ZXh0Q29udGVudCA9ICdGaXJzdCBOYW1lIChtaW4gMyBjaGFyYWN0ZXJzKSc7XG4vLyBpbnB1dFdyYXBwZXJGaXJzdC5hcHBlbmQoZmlyc3ROYW1lTEJMKTtcbmNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5maXJzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpcnN0LW5hbWUnKTtcbmZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuLy8gcHJldHRpZXItaWdub3JlXG5maXJzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnW0EtWl1bYS16XFxcXC1dezIsfScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5maXJzdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd1c2VyLWlucHV0Jyk7XG4vLyBpbnB1dFdyYXBwZXJGaXJzdC5hcHBlbmQoZmlyc3ROYW1lSW5wdXQpO1xuY29uc3QgaW5wdXRXcmFwcGVyTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5wdXRXcmFwcGVyTGFzdC5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwJyk7XG4vLyBpbnB1dFdpbmRvdy5hcHBlbmQoaW5wdXRXcmFwcGVyTGFzdCk7XG5jb25zdCBsYXN0TmFtZUxCTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYXN0TmFtZUxCTC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaXJzdC1uYW1lJyk7XG5sYXN0TmFtZUxCTC50ZXh0Q29udGVudCA9ICdTdXJuYW1lIChtaW4gNCBjaGFyYWN0ZXJzKSc7XG4vLyBpbnB1dFdyYXBwZXJMYXN0LmFwcGVuZChsYXN0TmFtZUxCTCk7XG5jb25zdCBsYXN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmxhc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmxhc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXN0LW5hbWUnKTtcbmxhc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4vLyBwcmV0dGllci1pZ25vcmVcbmxhc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ1tBLVpdW2EtelxcXFwtXXszLH0nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxubGFzdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd1c2VyLWlucHV0Jyk7XG4vLyBpbnB1dFdyYXBwZXJMYXN0LmFwcGVuZChsYXN0TmFtZUlucHV0KTtcbmNvbnN0IHdhcm5pbmdUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndhcm5pbmdUaXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xud2FybmluZ1RpcC5pbm5lclRleHQgPSAnVGVzdCc7XG5jb25zdCBsb2dpbkJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubG9naW5CVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbmxvZ2luQlROLmlubmVyVGV4dCA9ICdMb2dpbic7XG4vLyBpbnB1dFdpbmRvdy5hcHBlbmQobG9naW5CVE4pO1xuY29uc3QgdXNlckRhdGFWYWxpZCA9IHtcbiAgICBmaXJzdE5hbWU6IGZhbHNlLFxuICAgIGxhc3ROYW1lOiBmYWxzZSxcbn07XG4vLyBjb25zdCB1c2VyRGF0YSA9IHtcbi8vICAgICBmaXJzdE5hbWU6ICcnLFxuLy8gICAgIGxhc3ROYW1lOiAnJyxcbi8vIH07XG5jb25zdCB3YXJuaW5nTWVzc2FnZSA9IFtcbiAgICAnTWluaW11bSBuYW1lIGxlbmd0aCBpcyAnLFxuICAgICdFbnRlciB5b3VyIG5hbWUgaW4gbGF0aW4gY2FyYWN0ZXJzJyxcbiAgICAnRmlyc3QgbGV0dGVyIG11c3QgYmUgaW4gdXBwZXIgY2FzZScsXG5dO1xuZnVuY3Rpb24gY2hlY2tJbnB1dChldmVudCwgaW5wdXRPYmopIHtcbiAgICBpZiAoaW5wdXRPYmoudmFsdWUubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBpZihldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09IDApIHJldHVybjtcbiAgICBpZiAoaW5wdXRPYmoudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpc3N1ZVdhcm5pbmcoZXZlbnQsIGlucHV0T2JqKSkge1xuICAgICAgICAgICAgaW5wdXRPYmouZm9jdXMoKTtcbiAgICAgICAgICAgIGNsb3NlV2FybkZvckNvcnJlY3Rpb24oaW5wdXRPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tEYXRhSXNDb21wbGV0ZShpbnB1dE9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNoZWNrRGF0YUlzQ29tcGxldGUoaW5wdXRPYmopO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNoZWNrRGF0YUlzQ29tcGxldGUoaW5wdXRPYmopIHtcbiAgICBpZiAoaW5wdXRPYmogPT09IGxhc3ROYW1lSW5wdXQpIHtcbiAgICAgICAgLy8gdXNlckRhdGEubGFzdE5hbWUgPSBpbnB1dE9iai52YWx1ZTtcbiAgICAgICAgdXNlckRhdGFWYWxpZC5sYXN0TmFtZSA9IHRydWU7XG4gICAgICAgIGlmICh1c2VyRGF0YVZhbGlkLmZpcnN0TmFtZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIGxvZ2luQlROLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHVzZXJEYXRhLmZpcnN0TmFtZSA9IGlucHV0T2JqLnZhbHVlO1xuICAgICAgICB1c2VyRGF0YVZhbGlkLmZpcnN0TmFtZSA9IHRydWU7XG4gICAgICAgIGlmICh1c2VyRGF0YVZhbGlkLmxhc3ROYW1lID09PSB0cnVlKVxuICAgICAgICAgICAgbG9naW5CVE4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb3NlV2FybkZvckNvcnJlY3Rpb24oaW5wdXRGaWVsZCkge1xuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHdhcm5pbmdUaXAucmVtb3ZlKCk7XG4gICAgICAgIGlucHV0RmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWlucHV0LWJhY2tncm91bmQtY29sb3IpJztcbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5mdW5jdGlvbiBpc3N1ZVdhcm5pbmcoZXZlbnQsIGlucHV0T2JqKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gaW5wdXRPYmoudmFsdWU7XG4gICAgLy8gbGV0IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBpbnB1dExlbkxpbWl0ID0gaW5wdXRPYmogPT09IGxhc3ROYW1lSW5wdXQgPyA0IDogMztcbiAgICBjb25zdCByZWd4TGF0aW4gPSAvW15hLXpcXC1dLzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgIGNvbnN0IHJlZ3hVcHBlciA9IC9eW0EtWl0vO1xuICAgIGxldCB3YXJuaW5nID0gJyc7XG4gICAgbG9naW5CVE4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGlucHV0TGVuTGltaXQpXG4gICAgICAgIHdhcm5pbmcgPSB3YXJuaW5nTWVzc2FnZVswXSArIGlucHV0TGVuTGltaXQgKyAnIGNhcmFjdGVycy4gJztcbiAgICBpZiAocmVneExhdGluLnRlc3Qoc3RyaW5nKSkge1xuICAgICAgICB3YXJuaW5nICs9IHdhcm5pbmdNZXNzYWdlWzFdICsgJy4gJztcbiAgICB9XG4gICAgaWYgKCFyZWd4VXBwZXIudGVzdChzdHJpbmcpKSB7XG4gICAgICAgIHdhcm5pbmcgKz0gd2FybmluZ01lc3NhZ2VbMl0gKyAnLiAnO1xuICAgIH1cbiAgICBpZiAod2FybmluZy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBzaG93Q29sbG91dCh3YXJuaW5nLCBpbnB1dE9iaik7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBzaG93Q29sbG91dChtZXNzYWdlLCB0YXJnZXRPYmopIHtcbiAgICB0YXJnZXRPYmouc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXdhcm5pbmctY29sb3IpJztcbiAgICB3YXJuaW5nVGlwLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAvLyBjb21wZW5zYXRlIHN1cm5hbWUgaW5wdXQgYm90dG9tIHBhZGRpbmdcbiAgICBpZiAodGFyZ2V0T2JqLnBhcmVudEVsZW1lbnQgPT09IGlucHV0V3JhcHBlckxhc3QpXG4gICAgICAgIHdhcm5pbmdUaXAuc3R5bGUuYm90dG9tID0gJzJyZW0nO1xuICAgIGlmICh0YXJnZXRPYmoucGFyZW50RWxlbWVudCAhPT0gbnVsbClcbiAgICAgICAgdGFyZ2V0T2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kKHdhcm5pbmdUaXApO1xufVxuZnVuY3Rpb24gbWFrZUxvZ2luV2luZG93KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGlucHV0V2luZG93KTtcbiAgICBpbnB1dFdpbmRvdy5hcHBlbmQobG9naW5IZWFkZXIpO1xuICAgIGlucHV0V2luZG93LmFwcGVuZChpbnB1dFdyYXBwZXJGaXJzdCk7XG4gICAgaW5wdXRXcmFwcGVyRmlyc3QuYXBwZW5kKGZpcnN0TmFtZUxCTCk7XG4gICAgZmlyc3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dFdyYXBwZXJGaXJzdC5hcHBlbmQoZmlyc3ROYW1lSW5wdXQpO1xuICAgIGlucHV0V2luZG93LmFwcGVuZChpbnB1dFdyYXBwZXJMYXN0KTtcbiAgICBpbnB1dFdyYXBwZXJMYXN0LmFwcGVuZChsYXN0TmFtZUxCTCk7XG4gICAgbGFzdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0V3JhcHBlckxhc3QuYXBwZW5kKGxhc3ROYW1lSW5wdXQpO1xuICAgIGlucHV0V2luZG93LmFwcGVuZChsb2dpbkJUTik7XG59XG5mdW5jdGlvbiBzYXZlSW5Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXREYXRhID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZUlucHV0LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncnNzLXB1enpsZS11c2VyJywgSlNPTi5zdHJpbmdpZnkoaW5wdXREYXRhKSk7XG4gICAgICAgIHJlcyh0cnVlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdGFydExvZ2luKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgIG1ha2VMb2dpbldpbmRvdygpO1xuICAgICAgICBmaXJzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoZSwgZmlyc3ROYW1lSW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlyc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoZSwgZmlyc3ROYW1lSW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoZSwgbGFzdE5hbWVJbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBjaGVja0lucHV0KGUsIGxhc3ROYW1lSW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9naW5CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBDbG9zZSBpbnB1dCB3aW5kb3dcbiAgICAgICAgICAgIGlucHV0V2luZG93LnJlbW92ZSgpO1xuICAgICAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKCkudGhlbigoKSA9PiByZXMoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzdGFydExvZ2luIH0gZnJvbSAnLi9sb2dpbic7XG5jb25zdCB1c2VyRGF0YSA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbn07XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmNvbnN0IGxvZ291dEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubG9nb3V0QlROLnRleHRDb250ZW50ID0gJ0xvZyBPdXQnO1xuY29uc3QgbG9nT3V0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dPdXRXaW5kb3cuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvdXQtd3JhcHBlcicpO1xubG9nT3V0V2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5sb2dPdXRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLW1vZGFsJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChsb2dPdXRXaW5kb3cpO1xuY29uc3QgbG9nT3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmxvZ091dFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvdXQtdHh0Jyk7XG5sb2dPdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2luZm8tdHh0Jyk7XG5sb2dPdXRUZXh0LnRleHRDb250ZW50ID1cbiAgICAnQXJlIFlvdSBzdXJlIFlvdSB3YW50IHRvIGxvZyBvdXQ/IFlvdXIgYWNjb3VudCB3aWxsIGJlIHJlbW92ZWQgYW5kIFlvdSB3aWxsIG5lZWQgdG8gbG9nIGluIGFnYWluLic7XG5sb2dPdXRXaW5kb3cuYXBwZW5kKGxvZ091dFRleHQpO1xuY29uc3QgbG9nT3V0QlROV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nT3V0QlROV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ291dC1idG4td3JhcCcpO1xubG9nT3V0V2luZG93LmFwcGVuZChsb2dPdXRCVE5XcmFwcGVyKTtcbmNvbnN0IGxvZ091dENhbmNlbEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubG9nT3V0Q2FuY2VsQlROLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xubG9nT3V0QlROV3JhcHBlci5hcHBlbmQobG9nT3V0Q2FuY2VsQlROKTtcbmNvbnN0IGxvZ091dENvbmZpcm1CVE4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmxvZ091dENvbmZpcm1CVE4uaW5uZXJUZXh0ID0gJ0xvZyBPdXQnO1xubG9nT3V0QlROV3JhcHBlci5hcHBlbmQobG9nT3V0Q29uZmlybUJUTik7XG5jb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3RhcnRTY3JlZW4uc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydC1zY3JlZW4td3JhcHBlcicpO1xuc3RhcnRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbnN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhcnRTY3JlZW4pO1xuY29uc3Qgc3RhcnRTY3JlZW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuc3RhcnRTY3JlZW5IZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydC1zY3JlZW4taGVhZGVyJyk7XG5zdGFydFNjcmVlbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuc3RhcnRTY3JlZW5IZWFkZXIudGV4dENvbnRlbnQgPSAnUlNTIFBVWlpMRSc7XG5zdGFydFNjcmVlbi5hcHBlbmQoc3RhcnRTY3JlZW5IZWFkZXIpO1xuY29uc3Qgc3RhcnRTY3JlZW5NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdGFydFNjcmVlbk1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydC1zY3JlZW4tbWFpbi13cmFwcGVyJyk7XG5zdGFydFNjcmVlbi5hcHBlbmQoc3RhcnRTY3JlZW5NYWluKTtcbmNvbnN0IHN0YXJ0U2NyZWVuSU1HMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuc3RhcnRTY3JlZW5JTUcxLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnQtc2NyZWVuLWltZzEnKTtcbnN0YXJ0U2NyZWVuSU1HMS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvYXNzZXRzL2ltZy9jYW5keV9naXJsLnBuZycpO1xuc3RhcnRTY3JlZW5JTUcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Z1bm55LWdpcmwtaW1hZ2UnKTtcbnN0YXJ0U2NyZWVuSU1HMS5jbGFzc0xpc3QuYWRkKCdzdGFydC1pbWcnKTtcbnN0YXJ0U2NyZWVuTWFpbi5hcHBlbmQoc3RhcnRTY3JlZW5JTUcxKTtcbmNvbnN0IHN0YXJ0U2NyZWVuVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc3RhcnRTY3JlZW5UeHQuc2V0QXR0cmlidXRlKCdpZCcsICdzdGFydC1zY3JlZW4tdHh0Jyk7XG5zdGFydFNjcmVlblR4dC50ZXh0Q29udGVudCA9IGBSU1MgUHV6emxlIGlzIGFuIGludGVyYWN0aXZlIFxubWluaS1nYW1lIGFpbWVkIGF0IGVuaGFuY2luZyBFbmdsaXNoIGxhbmd1YWdlIHNraWxscy4gUGxheWVycyBhc3NlbWJsZSBcbnNlbnRlbmNlcyBmcm9tIGp1bWJsZWQgd29yZHMsIGluc3BpcmVkIGJ5IExpbmd1YWxlbydzIFBocmFzZSBDb25zdHJ1Y3RvciBcbnRyYWluaW5nLiBUaGUgZ2FtZSBpbnRlZ3JhdGVzIHZhcmlvdXMgbGV2ZWxzIG9mIGRpZmZpY3VsdHksIGhpbnQgb3B0aW9ucywgXG5hbmQgYSB1bmlxdWUgcHV6emxlLWxpa2UgZXhwZXJpZW5jZSB3aXRoIGFydHdvcmsuYDtcbnN0YXJ0U2NyZWVuTWFpbi5hcHBlbmQoc3RhcnRTY3JlZW5UeHQpO1xuY29uc3Qgc3RhcnRHYW1lQlROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zdGFydEdhbWVCVE4uaW5uZXJUZXh0ID0gJ1N0YXJ0IFBseWluZyc7XG5zdGFydFNjcmVlbi5hcHBlbmQoc3RhcnRHYW1lQlROKTtcbmNvbnN0IGdyZWV0aW5nV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ncmVldGluZ1dpbmRvdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyZWV0aW5nLXdyYXBwZXInKTtcbmdyZWV0aW5nV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5ncmVldGluZ1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGdyZWV0aW5nV2luZG93KTtcbmNvbnN0IGdyZWV0aW5nVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZ3JlZXRpbmdUeHQuc2V0QXR0cmlidXRlKCdpZCcsICdncmVldGluZy10eHQnKTtcbmdyZWV0aW5nV2luZG93LmFwcGVuZChncmVldGluZ1R4dCk7XG5jb25zdCBncmVldGluZ0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ncmVldGluZ0Nsb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JlZXRpbmctY2xvc2UnKTtcbmdyZWV0aW5nQ2xvc2UuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJncmVldGluZy1jbG9zZS1zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJDNi40NywyIDIsNi40NyAyLDEyQzIsMTcuNTMgNi40NywyMiAxMiwyMkMxNy41MywyMiAyMiwxNy41MyAyMiwxMkMyMiw2LjQ3IDE3LjUzLDIgMTIsMk0xNC41OSw4TDEyLDEwLjU5TDkuNDEsOEw4LDkuNDFMMTAuNTksMTJMOCwxNC41OUw5LjQxLDE2TDEyLDEzLjQxTDE0LjU5LDE2TDE2LDE0LjU5TDEzLjQxLDEyTDE2LDkuNDFMMTQuNTksOFpcIiAvPjwvc3ZnPic7XG5ncmVldGluZ1dpbmRvdy5hcHBlbmQoZ3JlZXRpbmdDbG9zZSk7XG5wcmVwYXJlVXNlcigpO1xuZnVuY3Rpb24gcHJlcGFyZVVzZXIoKSB7XG4gICAgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICBpZiAoY2hlY2tMb2NhbFN0b3JhZ2UoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0YXJ0TG9naW4oKS50aGVuKCgpID0+IHJlcygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcygpO1xuICAgICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmQobG9nb3V0QlROKTtcbiAgICAgICAgbG9nb3V0QlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9nVXNlck91dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hvd1N0YXJ0U2NyZWVuKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2dVc2VyT3V0KCkge1xuICAgIGxvZ091dFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKTtcbiAgICBsb2dPdXRDYW5jZWxCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvZ091dFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKTtcbiAgICB9LCB0cnVlKTtcbiAgICBsb2dPdXRDb25maXJtQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbG9nT3V0V2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncnNzLXB1enpsZS11c2VyJyk7XG4gICAgICAgIHByZXBhcmVVc2VyKCk7XG4gICAgfSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzdG9yYWdlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyc3MtcHV6emxlLXVzZXInKTtcbiAgICBpZiAoc3RvcmFnZURhdGEgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBsb2NhbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBKU09OLnBhcnNlKHN0b3JhZ2VEYXRhKSk7XG4gICAgdXNlckRhdGEuZmlyc3ROYW1lID0gbG9jYWxEYXRhLmZpcnN0TmFtZTtcbiAgICB1c2VyRGF0YS5sYXN0TmFtZSA9IGxvY2FsRGF0YS5sYXN0TmFtZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNob3dTdGFydFNjcmVlbigpIHtcbiAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzdGFydFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKTtcbiAgICBjb25zb2xlLmxvZygnZmlyc3ROYW1lICYgbGFzdE5hbWUgPSAnLCB1c2VyRGF0YS5maXJzdE5hbWUsIHVzZXJEYXRhLmxhc3ROYW1lKTtcbiAgICBzdGFydEdhbWVCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9LCB0cnVlKTtcbn1cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBncmVldGluZ1R4dC50ZXh0Q29udGVudCA9IGBEZWFyICR7dXNlckRhdGEuZmlyc3ROYW1lfSAke3VzZXJEYXRhLmxhc3ROYW1lfSAhIFxuICAgIFdlIGFwcHJlY2lhdGUgWW91ciBpbnRlcmVzdCBpbiBSU1MgUHV6emxlIGdhbWUuIFxuICAgIEhvcGUgWW91IGVuam95IHBsYXlpbmcgYW5kIGxlYXJuIGEgbG90IG9mIEVuZ2xpc2ggdm9jYWJ1bGFyeS5gO1xuICAgIGdyZWV0aW5nV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpO1xuICAgIGdyZWV0aW5nQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdyZWV0aW5nV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpO1xuICAgIH0sIHRydWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9