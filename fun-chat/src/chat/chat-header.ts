import { activeUser } from "../login/login";

export function showHeader(parent: HTMLElement) {
  const headerWrapper = document.createElement('div');
  headerWrapper.setAttribute('id', 'header-wrapper');
  parent.append(headerWrapper);

  const ownUserName = document.createElement('div');
  ownUserName.setAttribute('id', 'own-user-name');
  ownUserName.textContent = activeUser.name;
  headerWrapper.append(ownUserName);

  const appName = document.createElement('div');
  appName.setAttribute('id', 'app-name');
  appName.textContent = 'Fun Chat';
  headerWrapper.append(appName);

  const btnWrapper = document.createElement('div');
  btnWrapper.setAttribute('id', 'header-btn-wrapper');
  headerWrapper.append(btnWrapper);

  const infoBTN = document.createElement('button');
  infoBTN.setAttribute('id', 'header-info-btn');
  infoBTN.textContent = 'Info';
  btnWrapper.append(infoBTN);

  const logOutBTN = document.createElement('button');
  logOutBTN.setAttribute('id', 'header-logout-btn');
  logOutBTN.innerText = 'Log out';
  btnWrapper.append(logOutBTN);
}
