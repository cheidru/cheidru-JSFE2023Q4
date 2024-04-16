import { showLoginInput } from 'login-input';
import { showButtons, loginBTN } from 'login-buttons';

export const userDataValid = {
  name: false,
  pass: false,
};

const activeUser = {
  name: '',
  pass: '',
};

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

function checkServerAuth(name: string, pass: string) {
  activeUser.name = name;
  activeUser.pass = pass;
  sessionStorage.setItem(name, pass);
}
