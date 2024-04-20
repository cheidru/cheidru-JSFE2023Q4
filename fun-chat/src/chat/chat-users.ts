import { UserInfo } from '../api/api';

export const userList = document.createElement('ul');

export function showUserPanel(parent: HTMLElement) {
  const userPanelWrapper = document.createElement('div');
  userPanelWrapper.setAttribute('id', 'user-panel-wrapper');
  parent.append(userPanelWrapper);

  const userSearch = document.createElement('input');
  userSearch.setAttribute('id', 'user-search');
  userSearch.setAttribute('placeholder', 'Search ...');
  userPanelWrapper.append(userSearch);

  userList.setAttribute('id', 'user-list');
  userPanelWrapper.append(userList);
}

export function populateUserList(parent: HTMLElement, userOnLine: UserInfo[], userOffLine: UserInfo[]) {
  console.log('Making User List', parent, userOnLine, userOffLine);
  if (userOnLine.length > 0) {
    for (let i = 0; i < userOnLine.length; i++) {
      const userWrapper = document.createElement('div');
      userWrapper.classList.add('user-wrapper');
      parent.append(userWrapper);

      const statusIcon = document.createElement('div');
      statusIcon.classList.add('user-status-icon');
      statusIcon.style.backgroundColor = '#87A922';
      userWrapper.append(statusIcon);

      const userID = document.createElement('div');
      userID.classList.add('user-id');
      userID.textContent = userOnLine[i].login;
      userWrapper.append(userID);
      console.log(userWrapper);
    }
  }

  if (userOffLine.length > 0) {
    for (let i = 0; i < userOffLine.length; i++) {
      const userWrapper = document.createElement('div');
      userWrapper.classList.add('user-wrapper');
      parent.append(userWrapper);

      const statusIcon = document.createElement('div');
      statusIcon.classList.add('user-status-icon');
      statusIcon.style.backgroundColor = '#B3C8CF';
      userWrapper.append(statusIcon);

      const userID = document.createElement('div');
      userID.classList.add('user-id');
      userID.textContent = userOffLine[i].login;
      userWrapper.append(userID);
      console.log(userWrapper);
    }
  }
}
