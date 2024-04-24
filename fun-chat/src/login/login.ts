import { showLoginInput } from './login-input';
import { showButtons, loginBTN } from './login-buttons';
import { checkServerAuth } from '../api/api';

export const userDataValid = {
  name: false,
  pass: false,
};

export const activeUser = {
  name: '',
  pass: '',
};

export const loginWindow = document.createElement('div');

export function showLoginWindow() {
  loginWindow.setAttribute('id', 'login-wrapper');
  loginWindow.classList.add('modal');
  document.body.append(loginWindow);

  const pass = document.getElementById('user-pass');
  const name = document.getElementById('user-name');

  showTitle(loginWindow);
  showLoginInput(loginWindow);
  showButtons(loginWindow);

  document.addEventListener('keydown', keyDownHandler);

  function keyDownHandler(event: KeyboardEvent) {
    if (event.code === 'Enter' && userDataValid.name === true && userDataValid.pass === true) {
      document.removeEventListener('keydown', keyDownHandler);
      if (activeUser.name !== null && activeUser.pass !== null) checkServerAuth(activeUser.name, activeUser.pass);
    } else {
      if (activeUser.name !== null && document.activeElement === name) {
        if (pass !== null) pass.focus();
      } else {
        if (name !== null) name.focus();
      }
    }
  }

  loginBTN.addEventListener('click', () => {
    console.log('name = ', activeUser.name, 'pass = ', activeUser.pass);
    document.removeEventListener('keydown', keyDownHandler);

    if (activeUser.name !== null && activeUser.pass !== null) checkServerAuth(activeUser.name, activeUser.pass);
  });
}

function showTitle(parent: HTMLElement) {
  const loginHeader = document.createElement('div');
  loginHeader.setAttribute('id', 'login-header');
  loginHeader.textContent = 'Log in';
  parent.append(loginHeader);
}
