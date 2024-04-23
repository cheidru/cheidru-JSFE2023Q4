import { UserInfo, fillMessageList } from '../api/api';
import { userToChatName, userToChatStatus, changeInviteMSG, sendBTN } from './chat-messages';

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

  userSearch.addEventListener('input', () => {
    const userWrapperList = document.querySelectorAll('user-wrapper');
    // Search pattern starts with input lowercase value
    const regexp = new RegExp(`^${userSearch.value.toLowerCase()}`);
    for (let i = 0; i < userWrapperList.length; i++) {
      const userNameElement = userWrapperList[i].children[1] as HTMLElement;
      const userWrapper = userWrapperList[i] as HTMLElement;
      let userName = '';
      if (userNameElement.textContent !== null) userName = userNameElement.textContent.toLowerCase();
      // Hide user if it doesn't match pattern
      if (regexp && !regexp.test(userName)) userWrapper.style.display = 'none';
      // Show all users if pattern (input value) is empty
      if (!regexp) userWrapper.style.display = 'flex';
    }
  })

  userList.addEventListener('click', (event) => {
    // If any user was selected before, remove this selection
    if (selectedUserElement) selectedUserElement.style.color = 'rgb(57, 57, 57)';

    catchUserListElementClicked(event);

    userToChatName.textContent = selectedUserElement.textContent;
    userToChatStatus.textContent = selectedUserElement.dataset.status as string;
    if (userToChatStatus.textContent === 'online') userToChatStatus.style.color = '#87A922';
    if (userToChatStatus.textContent === 'offline') userToChatStatus.style.color = 'rgb(57, 57, 57)';
    fillMessageList();
  });
}

function catchUserListElementClicked(event: Event) {
  const element = event.target as HTMLElement;
  // User wrapper is clicked
  if (element !== null && element.classList.contains('user-wrapper')) {
    const userNameElement = element.children[1] as HTMLElement;
    selectedContact = userNameElement.textContent as string;
    changeAttributesAccToNewContact(userNameElement);
  }
  // User icon is clicked
  if (element !== null && element.parentElement !== null && element.classList.contains('user-status-icon')) {
    const userNameElement = element.parentElement.children[1] as HTMLElement;
    selectedContact = userNameElement.textContent as string;
    changeAttributesAccToNewContact(userNameElement);
  }
  // User name is clicked
  if (element !== null && element.parentElement !== null && element.classList.contains('user-id')) {
    const userNameElement = element.parentElement.children[1] as HTMLElement;
    selectedContact = element.parentElement.children[1].textContent as string;
    changeAttributesAccToNewContact(userNameElement);
  }
  // User message number is clicked
  if (element !== null && element.parentElement !== null && element.classList.contains('user-msg-number')) {
    const userNameElement = element.parentElement.children[1] as HTMLElement;
    selectedContact = element.parentElement.children[1].textContent as string;
    changeAttributesAccToNewContact(userNameElement);
  }
}


function changeAttributesAccToNewContact(newContact: HTMLElement) {
  selectedUserElement = newContact;
  newContact.style.color = 'blue';
  changeInviteMSG('Start messaging');
}

export function populateUserList(parent: HTMLElement, userOnLineList: UserInfo[], userOffLineList: UserInfo[]) {
  parent.innerHTML = '';
  if (userOnLineList.length === 0 && userOffLineList.length === 0) {
    changeInviteMSG('');
    sendBTN.setAttribute('disabled', '');
  }

  if (userOnLineList.length > 0) {
    for (let i = 0; i < userOnLineList.length; i++) {
      createUserListElement(parent, userOnLineList, i, '#87A922', 'online')
    }
  }
  
  if (userOffLineList.length > 0) {
    for (let i = 0; i < userOffLineList.length; i++) {
      createUserListElement(parent, userOffLineList, i, '#B3C8CF', 'offline')
    }
  }
}

function createUserListElement(parent: HTMLElement, userArray: UserInfo[], index: number, iconColor: string, status: string) {
  const userWrapper = document.createElement('div');
  userWrapper.classList.add('user-wrapper');
  parent.append(userWrapper);

  const statusIcon = document.createElement('div');
  statusIcon.classList.add('user-status-icon');
  statusIcon.style.backgroundColor = iconColor;
  userWrapper.append(statusIcon);

  const userID = document.createElement('div');
  userID.classList.add('user-id');
  userID.textContent = userArray[index].login;
  userID.setAttribute('data-status', status);
  userWrapper.append(userID);

  const msgNum = document.createElement('div');
  msgNum.classList.add('user-msg-number');
  userWrapper.append(msgNum);
}
