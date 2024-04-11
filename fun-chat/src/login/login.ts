<<<<<<< HEAD
const warningMessage = [
  'Minimum name length is ',
  'Enter your name in latin caracters',
  'First letter must be in upper case',
];

const userDataValid = {
    name: false,
    pass: false,
};

export function loginWindow() {
  showPowerLayer();
  showLoginWindow();
}

function showPowerLayer() {}

function showLoginWindow() {
  const loginWindow = document.createElement('div');
  loginWindow.setAttribute('id', 'login-wrapper');
  loginWindow.classList.add('modal');
  document.body.append(loginWindow);

  const loginHeader = document.createElement('div');
  loginHeader.setAttribute('id', 'header');
  loginHeader.textContent = 'RSS Puzzle Login';
  loginWindow.append(loginHeader);

  showLoginInput(loginWindow);

  const loginBTN = document.createElement('button');
  loginBTN.setAttribute('disabled', '');
  loginBTN.innerText = 'Login';
  loginWindow.append(loginBTN);
}

function showLoginInput(parent: HTMLElement) {
    
  const inputWrapperName = document.createElement('div');
  inputWrapperName.classList.add('input-wrap');
  parent.append(inputWrapperName);

  const nameInput = showInputField(inputWrapperName, 'user-name', 'User Name (min 3 characters)', '[A-Z][a-z\\-]{2,}');
  nameInput.addEventListener('input', () => {checkInput('name')});

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {

    }
  })

  const inputWrapperPass = document.createElement('div');
  inputWrapperPass.classList.add('input-wrap');
  parent.append(inputWrapperPass);


  const passInput = showInputField(inputWrapperPass, 'user-pass', 'Password (min 4 characters)', '[A-Z][a-z\\-]{3,}');

  const warningTip = document.createElement('div');
  warningTip.classList.add('tooltip');
  warningTip.innerText = 'Test';
}

function showInputField(parent: HTMLElement, attrID: string, lblText: string, pattern: string) {
  const label = document.createElement('label');
  label.setAttribute('for', `${attrID}`);
  label.textContent = lblText;
  parent.append(label);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', `${attrID}`);
  input.setAttribute('autocomplete', 'off');
  // prettier-ignore
  input.setAttribute('pattern', `${pattern}`); // eslint-disable-line no-useless-escape
  input.classList.add('user-input');
  parent.append(input);

  return input;
}
=======
export function loginWindow() {}
>>>>>>> a36500e57cb3b0df0c51140c61edd2b66b06b7fe

function checkInput(inputNmame: string) {

}

// function checkInput(event: Event | FocusEvent, inputObj: HTMLInputElement) {
//     if (inputObj.value.length == 0) return;
//     // if(event.target.value.length == 0) return;
//     if (inputObj.validity.patternMismatch) {
//         event.preventDefault();
//         if (issueWarning(event, inputObj)) {
//             inputObj.focus();
//             closeWarnForCorrection(inputObj);
//         } else {
//             checkDataIsComplete(inputObj);
//         }
//     } else {
//         checkDataIsComplete(inputObj);
//     }
// }

// function checkDataIsComplete(inputObj: HTMLInputElement) {
//     if (inputObj === lastNameInput) {
//         // userData.lastName = inputObj.value;
//         userDataValid.lastName = true;
//         if (userDataValid.firstName === true) loginBTN.removeAttribute('disabled');
//     } else {
//         // userData.firstName = inputObj.value;
//         userDataValid.firstName = true;
//         if (userDataValid.lastName === true) loginBTN.removeAttribute('disabled');
//     }
// }

// function closeWarnForCorrection(inputField: HTMLInputElement) {
//     inputField.addEventListener(
//         'input',
//         () => {
//             warningTip.remove();
//             inputField.style.backgroundColor = 'var(--input-background-color)';
//         },
//         { once: true }
//     );
// }

// function issueWarning(event: Event, inputObj: HTMLInputElement) {
//     const string = inputObj.value;
//     // let string = event.target.value;
//     const inputLenLimit = inputObj === lastNameInput ? 4 : 3;
//     const regxLatin = /[^a-z\-]/; // eslint-disable-line no-useless-escape
//     const regxUpper = /^[A-Z]/;
//     let warning = '';
//     loginBTN.setAttribute('disabled', '');
//     if (string.length < inputLenLimit) warning = warningMessage[0] + inputLenLimit + ' caracters. ';
//     if (regxLatin.test(string)) {
//         warning += warningMessage[1] + '. ';
//     }
//     if (!regxUpper.test(string)) {
//         warning += warningMessage[2] + '. ';
//     }
//     if (warning.length === 0) return false;
//     showCollout(warning, inputObj);
//     return true;
// }

// function showCollout(message: string, targetObj: HTMLInputElement) {
//     targetObj.style.backgroundColor = 'var(--warning-color)';
//     warningTip.textContent = message;
//     // compensate surname input bottom padding
//     if (targetObj.parentElement === inputWrapperLast) warningTip.style.bottom = '2rem';
//     if (targetObj.parentElement !== null) targetObj.parentElement.append(warningTip);
// }

// function makeLoginWindow() {
//     document.body.append(inputWindow);
//     inputWindow.append(loginHeader);
//     inputWindow.append(inputWrapperFirst);
//     inputWrapperFirst.append(firstNameLBL);
//     firstNameInput.value = '';
//     inputWrapperFirst.append(firstNameInput);
//     inputWindow.append(inputWrapperLast);
//     inputWrapperLast.append(lastNameLBL);
//     lastNameInput.value = '';
//     inputWrapperLast.append(lastNameInput);
//     inputWindow.append(loginBTN);
// }

// function saveInLocalStorage() {
//     return new Promise((res) => {
//         const inputData = {
//             firstName: firstNameInput.value,
//             lastName: lastNameInput.value,
//         };
//         localStorage.setItem('rss-puzzle-user', JSON.stringify(inputData));
//         res(true);
//     });
// }

// export function startLogin() {
//     return new Promise<void>((res) => {
//         makeLoginWindow();

//         firstNameInput.addEventListener('blur', (e) => {
//             checkInput(e, firstNameInput);
//         });
//         firstNameInput.addEventListener('change', (e) => {
//             checkInput(e, firstNameInput);
//         });

//         lastNameInput.addEventListener('blur', (e) => {
//             checkInput(e, lastNameInput);
//         });
//         lastNameInput.addEventListener('change', (e) => {
//             checkInput(e, lastNameInput);
//         });

//         loginBTN.addEventListener('click', () => {
//             // Close input window
//             inputWindow.remove();
//             saveInLocalStorage().then(() => res());
//         });
//     });
// }
