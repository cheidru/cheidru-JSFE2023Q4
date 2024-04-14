import { showModal, appInfo } from '../common/common';
const warningMessage = [
  'Minimum name length is 3 latin letters. First letter must be in upper case',
  'Minimum password length is 5 characters. It must contain letters and numbers',
];

const userDataValid = {
  name: false,
  pass: false,
};

// const userData = {
//   name: '',
//   pass: '',
// };

const loginBTN: HTMLElement = document.createElement('button');

export function showLoginWindow() {
  // if (powerLayer !== null) powerLayer.style.display = 'block';
  const loginWindow = document.createElement('div');
  loginWindow.setAttribute('id', 'login-wrapper');
  loginWindow.classList.add('modal');
  document.body.append(loginWindow);

  const pass = document.getElementById('user-pass');
  const name = document.getElementById('user-name');

  showTitle(loginWindow);

  showLoginInput(loginWindow);

  showButtons(loginWindow);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && userDataValid.name === true && userDataValid.pass === true) {
      if (name !== null && pass !== null) checkServerAuth(name.textContent as string, pass.textContent as string);
    } else {
      if (name !== null && document.activeElement === name) {
        if (pass !== null) pass.focus();
      } else {
        if (name !== null) name.focus();
      }
    }
  });

  loginBTN.addEventListener('click', () => {
    if (name !== null && pass !== null) checkServerAuth(name.textContent as string, pass.textContent as string);
  });
}

function showTitle(parent: HTMLElement) {
  const loginHeader = document.createElement('div');
  loginHeader.setAttribute('id', 'login-header');
  loginHeader.textContent = 'Log in';
  parent.append(loginHeader);
}

function showButtons(parent: HTMLElement) {
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
    parent.style.display = 'none';
    showModal(appInfo, parent);
  });
}

function checkServerAuth(name: string, pass: string) {
  localStorage.setItem(name, pass);
}

function showLoginInput(parent: HTMLElement) {
  const inputWrapperName = document.createElement('div');
  inputWrapperName.classList.add('input-wrap');
  parent.append(inputWrapperName);
  showInputField(inputWrapperName, 'user-name', 'User Name', '[A-Z][a-z\\-]{2,}');

  const inputWrapperPass = document.createElement('div');
  inputWrapperPass.classList.add('input-wrap');
  parent.append(inputWrapperPass);
  showInputField(inputWrapperPass, 'user-pass', 'Password', '^(?=.*?[a-z])(?=.*?[0-9]).{5,}$');
}

function showInputField(parent: HTMLElement, attrID: string, lblText: string, pattern: string) {
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
      if (userDataValid.name === true && userDataValid.pass === true) loginBTN.removeAttribute('disabled');
    } else {
      loginBTN.setAttribute('disabled', '');
    }
  });
}

function checkInput(event: Event | FocusEvent, inputObj: HTMLInputElement) {
  let warnField: ChildNode;
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
        userDataValid.name = false;
      }
      if (inputObj.id == 'user-pass') {
        warnField.textContent = warningMessage[1];
        userDataValid.pass = false;
      }
      return false;
    } else {
      warnField.textContent = '';
      if (inputObj.id == 'user-name') userDataValid.name = true;
      if (inputObj.id == 'user-pass') userDataValid.pass = true;
      return true;
    }
  }
}

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
