import { showModal } from '../common/common';
import { chatWrapper } from '../chat/chat-main';
import { ownUserName } from '../chat/chat-header';
import { populateUserList, userList } from '../chat/chat-users';
import { activeUser, loginWindow } from '../login/login';
import { userToChatName, userToChatStatus, showMessages } from '../chat/chat-messages';

export let userOnLine: UserInfo[] = [];
export let userOffLine: UserInfo[] = [];
let userOnLineInit = false;
let userOffLineInit = false;

export type UserInfo = {
  login: string;
  loggedIn: boolean;
};

let wSocket: WebSocket;

export function checkServerAuth(name: string, pass: string) {
  // ToDo Error handling
  // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#connection_errors
  wSocket = new WebSocket('ws://localhost:4000');
  wSocket.onopen = () => authorizeUser(wSocket, name, pass);
  wSocket.onmessage = (event) => onMessageAction(event, wSocket, name, pass);
}

function authorizeUser(socketObj: WebSocket, name: string, pass: string) {
  console.log('wSocket opened');
  const userAuthData = {
    id: `user ${name} authentication request`,
    type: 'USER_LOGIN',
    payload: { user: { login: `${name}`, password: `${pass}` } },
  };
  socketObj.send(JSON.stringify(userAuthData));
}

function onMessageAction(event: MessageEvent, socketObj: WebSocket, name: string, pass: string) {
  const serverResp = JSON.parse(event.data);
  const messageArray = [];
  console.log('Server response received: ', serverResp, 'response id = ', serverResp.id);

  switch (serverResp.type) {
    case 'USER_LOGIN':
      console.log('USER_LOGIN');
      requestRegisteredUserInfo(socketObj);
      openChatWindow(name, pass);
      break;
    case 'USER_ACTIVE':
      console.log('Active users received');
      userOnLine = serverResp.payload.users;
      userOnLine = sortUsers(userOnLine);
      userOnLineInit = true;
      break;
    case 'USER_INACTIVE':
      console.log('Inactive users received');
      userOffLine = serverResp.payload.users;
      // sortUsers(userOffLine);
      userOffLineInit = true;
      break;
    case 'USER_EXTERNAL_LOGIN':
      console.log('Third-party User received');
      if (serverResp.payload.user.login === userToChatName.textContent) updateMessengerTitle('login');
      requestRegisteredUserInfo(socketObj);
      break;
    case 'USER_EXTERNAL_LOGOUT':
      console.log('Third-party User Logged out');
      if (serverResp.payload.user.login === userToChatName.textContent) updateMessengerTitle('logout');
      requestRegisteredUserInfo(socketObj);
      break;
    case 'MSG_FROM_USER':
      console.log('User Mailing history fetched');
      console.log(serverResp.payload.messages);
      showMessages(serverResp.payload.messages);
      break;
    case 'MSG_SEND':
      console.log('User sent mail or received mail');
      console.log(serverResp.payload.message);
      messageArray.push(serverResp.payload.message);
      showMessages(messageArray as []);
      break;
    case 'USER_LOGOUT':
      console.log('A user logged out');
      closeChatWindow();
      break;
    case 'USER_EXTERNAL_LOGOUT':
      console.log('A user logged out');
      if (serverResp.payload.user.login === userToChatName.textContent) updateMessengerTitle('logout');
      requestRegisteredUserInfo(socketObj);
      break;
    case 'ERROR':
      console.log('Error received');
      showModal('User ' + name + ' is already logged in', loginWindow);
      break;
  }

  if (userOnLineInit === true && userOffLineInit === true) {
    console.log('User List Populated', userList, userOnLine, userOffLine);
    populateUserList(userList, userOnLine, userOffLine);
    userOnLineInit = false;
    userOffLineInit = false;
  }
}

function updateMessengerTitle(status: string) {
  console.log('updateMessengerTitle status =', status);
  if (status === 'login') {
    userToChatStatus.textContent = 'online';
    userToChatStatus.style.color = '#87A922';
  }
  if (status === 'logout') {
    userToChatStatus.textContent = 'offline';
    // Doesn't work
    userToChatStatus.style.color = 'rgb(57, 57, 57)';
  }
}

function sortUsers(userArray: UserInfo[]) {
  const tmpArr = [];
  // Search and delete Active User name
  // Sort array
  for (const user of userArray) {
    if (user.login !== activeUser.name) tmpArr.push(user);
  }
  console.log('sortUsers ', 'userArray = ', userArray, 'tmpArr = ', tmpArr);
  return tmpArr;
}

function openChatWindow(name: string, pass: string) {
  sessionStorage.setItem(name, pass);
  activeUser.name = name;
  activeUser.pass = pass;
  ownUserName.textContent = activeUser.name;
  loginWindow.style.display = 'none';
  chatWrapper.style.display = 'flex';
}

function closeChatWindow() {
  loginWindow.style.display = 'flex';
  chatWrapper.style.display = 'none';
}

function requestRegisteredUserInfo(socketObj: WebSocket) {
  const chatUserOnlineData = {
    id: `list of users online`,
    type: 'USER_ACTIVE',
    payload: null,
  };
  socketObj.send(JSON.stringify(chatUserOnlineData));

  const chatUserOfflineData = {
    id: `list of users offline`,
    type: 'USER_INACTIVE',
    payload: null,
  };
  socketObj.send(JSON.stringify(chatUserOfflineData));
}

export function fillMessageList() {
  const fetchMailReqObj = {
    id: 'Fetch mailing with user ' + userToChatName.textContent,
    type: 'MSG_FROM_USER',
    payload: { user: { login: userToChatName.textContent } },
  };
  wSocket.send(JSON.stringify(fetchMailReqObj));
}

export function sendMessage(message: string) {
  const messageObj = {
    id: 'new message from ' + activeUser.name + ' to ' + userToChatName.textContent,
    type: 'MSG_SEND',
    payload: { message: { to: userToChatName.textContent, text: message } },
  };
  wSocket.send(JSON.stringify(messageObj));
}

export function logoutCurrentUser() {
  const messageObj = {
    id: 'log out user ' + activeUser.name,
    type: "USER_LOGOUT",
    payload: {
      user: {
        login: activeUser.name,
        password: activeUser.pass,
      }
    }
  };
  wSocket.send(JSON.stringify(messageObj));
}

