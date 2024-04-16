import { userDataValid, activeUser } from './login';
import { loginBTN } from './login-buttons';

const warningMessage = [
  'Minimum name length is 3 latin letters. First letter must be in upper case',
  'Minimum password length is 5 characters. It must contain letters and numbers',
];

export function showLoginInput(parent: HTMLElement) {
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
        activeUser.name = '';
      }
      if (inputObj.id == 'user-pass') {
        warnField.textContent = warningMessage[1];
        userDataValid.pass = false;
        activeUser.pass = '';
      }
      return false;
    } else {
      warnField.textContent = '';
      if (inputObj.id == 'user-name') {
        userDataValid.name = true;
        activeUser.name = inputObj.value;
      }
      if (inputObj.id == 'user-pass') {
        userDataValid.pass = true;
        activeUser.pass = inputObj.value;
      }
      return true;
    }
  }
}
