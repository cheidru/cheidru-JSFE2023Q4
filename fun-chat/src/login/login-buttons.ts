import { showModal, appInfo } from '../common/common';

export const loginBTN: HTMLElement = document.createElement('button');

export function showButtons(parent: HTMLElement) {
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