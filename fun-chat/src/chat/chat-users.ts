import { UserInfo, fillMessageList } from '../api/api';
import { userToChatName, userToChatStatus } from './chat-messages';

export const userList = document.createElement('ul');
export let selectedContact = '';
let selectedUserElement: HTMLElement;

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

  userList.addEventListener('click', (event) => {
    console.log('selectedElement = ', selectedUserElement);
    if (selectedUserElement) selectedUserElement.style.color = 'rgb(57, 57, 57)';
    const element = event.target as HTMLElement;
    if (element !== null && element.classList.contains('user-wrapper')) {
      const userNameElement = element.children[1] as HTMLElement;
      selectedContact = userNameElement.textContent as string;
      selectedUserElement = userNameElement;
      userNameElement.style.color = 'blue';
    }
    if (element !== null && element.parentElement !== null && element.classList.contains('user-status-icon')) {
      const userNameElement = element.parentElement.children[1] as HTMLElement;
      selectedContact = userNameElement.textContent as string;
      userNameElement.style.color = 'blue';
      selectedUserElement = userNameElement;
    }

    if (element !== null && element.parentElement !== null && element.classList.contains('user-id')) {
      const userNameElement = element.parentElement.children[1] as HTMLElement;
      selectedContact = element.parentElement.children[1].textContent as string;
      userNameElement.style.color = 'blue';
      selectedUserElement = userNameElement;
    }
    userToChatName.textContent = selectedUserElement.textContent;
    userToChatStatus.textContent = selectedUserElement.dataset.status as string;
    if (userToChatStatus.textContent === 'online') userToChatStatus.style.color = '#87A922';
    fillMessageList();
  });
}

export function populateUserList(parent: HTMLElement, userOnLine: UserInfo[], userOffLine: UserInfo[]) {
  console.log('Making User List', parent, userOnLine, userOffLine);
  parent.innerHTML = '';
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
      userID.setAttribute('data-status', 'online');
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
      userID.setAttribute('data-status', 'offline');
      userWrapper.append(userID);
      console.log(userWrapper);
    }
  }
}
