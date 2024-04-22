import { activeUser } from '../login/login';
import { logoutCurrentUser } from '../api/api';

export const ownUserName = document.createElement('div');

export function showHeader(parent: HTMLElement) {
  const headerWrapper = document.createElement('div');
  headerWrapper.setAttribute('id', 'chat-header-wrapper');
  parent.append(headerWrapper);

  ownUserName.setAttribute('id', 'own-user-name');
  console.log('activeUser.name = ', activeUser);
  ownUserName.textContent = activeUser.name;
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
    logoutCurrentUser();
  });
}
