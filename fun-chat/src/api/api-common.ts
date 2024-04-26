import { onMessageAction } from './api-resp';
import { chatWrapper } from '../chat/chat-main';
import { ownUserName } from '../chat/chat-header';
import { userToChatStatus } from '../chat/chat-messages';
import { activeUser, loginWindow } from '../login/login';

export type UserInfo = {
  login: string;
  loggedIn: boolean;
};

export let wSocket: WebSocket;

export function checkServerAuth(name: string, pass: string) {
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

export function openChatWindow(name: string, pass: string) {
  sessionStorage.setItem(name, pass);
  activeUser.name = name;
  activeUser.pass = pass;
  ownUserName.textContent = activeUser.name;
  loginWindow.style.display = 'none';
  chatWrapper.style.display = 'flex';
}

export function closeChatWindow() {
  loginWindow.style.display = 'flex';
  chatWrapper.style.display = 'none';
}

export function updateMessengerTitle(status: string) {
  if (status === 'login') {
    userToChatStatus.textContent = 'online';
    userToChatStatus.style.color = '#87A922';
  }
  if (status === 'logout') {
    userToChatStatus.textContent = 'offline';
    userToChatStatus.style.color = 'rgb(57, 57, 57)';
  }
}
