import { showLoginInput } from './login-input';
import { showButtons, loginBTN } from './login-buttons';
import { showModal } from '../common/common';
import { chatWrapper } from '../chat/chat-main';

export const userDataValid = {
  name: false,
  pass: false,
};

export const activeUser = {
  name: '',
  pass: '',
};

const loginWindow = document.createElement('div');

export function showLoginWindow() {
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
      if (activeUser.name !== null && activeUser.pass !== null) checkServerAuth(activeUser.name, activeUser.pass);
    } else {
      if (activeUser.name !== null && document.activeElement === name) {
        if (pass !== null) pass.focus();
      } else {
        if (name !== null) name.focus();
      }
    }
  });

  loginBTN.addEventListener('click', () => {
    console.log('name = ', activeUser.name, 'pass = ', activeUser.pass);
    if (activeUser.name !== null && activeUser.pass !== null) checkServerAuth(activeUser.name, activeUser.pass);
  });
}

function showTitle(parent: HTMLElement) {
  const loginHeader = document.createElement('div');
  loginHeader.setAttribute('id', 'login-header');
  loginHeader.textContent = 'Log in';
  parent.append(loginHeader);
}

function checkServerAuth(name: string, pass: string) {
  console.log('checkServerAuth started');
  // ToDo Error handling
  // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#connection_errors
  const wSocket = new WebSocket('ws://localhost:4000');
  wSocket.onopen = function () {
    console.log('wSocket opened');
    const userAuthData = {
      id: `user ${name} authentication request`,
      type: 'USER_LOGIN',
      payload: { user: { login: `${name}`, password: `${pass}` } },
    };
    wSocket.send(JSON.stringify(userAuthData));
  };

  wSocket.onmessage = function (event) {
    console.log('Server responce received');
    const serverAuthResp = JSON.parse(event.data);
    if (serverAuthResp.type === 'USER_LOGIN') {
      sessionStorage.setItem(name, pass);
      activeUser.name = name;
      activeUser.pass = pass;
      loginWindow.classList.add('hidden-modal');
      chatWrapper.classList.remove('hidden-modal');
    }

    if (serverAuthResp.type === 'ERROR') {
      const loginErrorMSG = `User ${name} is already logged in`;
      showModal(loginErrorMSG, loginWindow);
    }
  };
}
