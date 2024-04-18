import { showModal } from '../common/common';
import { chatWrapper } from '../chat/chat-main';
import { activeUser, loginWindow } from '../login/login';

export let userOnLine = [];
export let userOffLine = [];

export function checkServerAuth(name: string, pass: string) {
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
      const serverAuthResp = JSON.parse(event.data);
      console.log('Server response received: ', serverAuthResp, 'response id = ', serverAuthResp.id);
      if (serverAuthResp.type === 'USER_LOGIN') {
        sessionStorage.setItem(name, pass);
        activeUser.name = name;
        activeUser.pass = pass;
        loginWindow.style.display = 'none';
        chatWrapper.style.display = 'flex';
        console.log('Chat is opened');
  
        const chatUserOnlineData = {
          id: `list of users online`,
          type: 'USER_ACTIVE',
          payload: null,
        };
  
        wSocket.send(JSON.stringify(chatUserOnlineData));
  
        const chatUserOfflineData = {
          id: `list of users offline`,
          type: 'USER_INACTIVE',
          payload: null,
        };
  
        wSocket.send(JSON.stringify(chatUserOfflineData));
      }
  
      if (serverAuthResp.type === 'USER_ACTIVE') {
        console.log('Active users received');
        userOnLine = serverAuthResp.payload;
      }
  
      if (serverAuthResp.type === 'USER_INACTIVE') {
        console.log('Inactive users received');
        userOffLine = serverAuthResp.payload;
      }
  
      if (serverAuthResp.type === 'ERROR') {
        console.log('Error received');
        const loginErrorMSG = `User ${name} is already logged in`;
        showModal(loginErrorMSG, loginWindow);
      }
    };
  }