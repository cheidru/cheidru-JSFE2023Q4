import { showModal } from '../common/common';
import { chatWrapper } from '../chat/chat-main';
import { populateUserList } from '../chat/chat-users';
import { activeUser, loginWindow } from '../login/login';

export let userOnLine: UserInfo[] = [];
export let userOffLine: UserInfo[] = [];

export type UserInfo = {
  login: string;
  loggedIn: boolean;
};

export function checkServerAuth(name: string, pass: string) {
  // ToDo Error handling
  // https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#connection_errors
  const wSocket: WebSocket = new WebSocket('ws://localhost:4000');
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
};

function onMessageAction(event: MessageEvent, socketObj: WebSocket, name: string, pass: string) {
  const serverResp = JSON.parse(event.data);
  console.log('Server response received: ', serverResp, 'response id = ', serverResp.id);

  switch(serverResp.type) {
    case 'USER_LOGIN':
      requestRegisteredUserInfo(socketObj);
      openChatWindow(name, pass);
      break;
    case 'USER_ACTIVE':
      console.log('Active users received');
      userOnLine = serverResp.payload;
      break;
    case 'USER_INACTIVE':
      console.log('Inactive users received');
      userOffLine = serverResp.payload;
      break;
    case 'ERROR':
      console.log('Error received');
      const loginErrorMSG = `User ${name} is already logged in`;
      showModal(loginErrorMSG, loginWindow);
      break;
  }
}

function openChatWindow(name: string, pass: string) {
  sessionStorage.setItem(name, pass);
  activeUser.name = name;
  activeUser.pass = pass;
  loginWindow.style.display = 'none';
  chatWrapper.style.display = 'flex';
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
