const warningMessage = [
  'Minimum name length is 3 latin letters. First letter must be in upper case',
  'Minimum password length is 5 characters. It must contain letters and numbers',
];

const userDataValid = {
    name: false,
    pass: false,
};

const userData = {
  name: '',
  pass: '',
};

function ckeckIfUserRegistered(userData) {

}

export function loginWindow() {
  if (!ckeckIfUserRegistered) showLoginWindow();
}

function showPowerLayer() {}

function showLoginWindow() {
  showPowerLayer();
  const loginWindow = document.createElement('div');
  loginWindow.setAttribute('id', 'login-wrapper');
  loginWindow.classList.add('modal');
  document.body.append(loginWindow);

  const loginHeader = document.createElement('div');
  loginHeader.setAttribute('id', 'header');
  loginHeader.textContent = 'Log in';
  loginWindow.append(loginHeader);

  const loginBTN: HTMLElement = document.createElement('button');
  loginBTN.setAttribute('disabled', '');
  loginBTN.innerText = 'Login';
  loginWindow.append(loginBTN);

  showLoginInput(loginWindow, loginBTN);
    
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && userDataValid.name === true && userDataValid.pass === true) {
      // Save user
    }
  })

  loginBTN.addEventListener('click', () => {
    // Save user
  })
}

function showLoginInput(parent: HTMLElement, loginButton: HTMLElement) {
    
  const inputWrapperName = document.createElement('div');
  inputWrapperName.classList.add('input-wrap');
  parent.append(inputWrapperName);
  showInputField(inputWrapperName, 'user-name', 'User Name', '[A-Z][a-z\\-]{2,}', loginButton);

  const inputWrapperPass = document.createElement('div');
  inputWrapperPass.classList.add('input-wrap');
  parent.append(inputWrapperPass);
  showInputField(inputWrapperPass, 'user-pass', 'Password', '[A-Za-z]+[0-9]+{5,}', loginButton);
}

function showInputField(parent: HTMLElement, attrID: string, lblText: string, pattern: string, loginButton: HTMLElement) {
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

  const warn = document.createElement('div');
  warn.setAttribute('id', `${attrID}-warning`);
  warn.classList.add('input-warning');
  parent.append(warn);

  input.addEventListener('input', (e) => {
    if (checkInput(e, input)) {
      if (userDataValid.name === true && userDataValid.pass === true) loginButton.removeAttribute('disabled');
    } else {
      loginButton.setAttribute('disabled', '');
    };
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
      };
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
