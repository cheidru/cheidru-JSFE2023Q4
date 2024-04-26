import { activeUser } from '../login/login';
import { userToChatName } from '../chat/chat-messages';
import { UserInfo, wSocket } from './api-common';

export function sortUsers(userArray: UserInfo[]) {
  const tmpArr = [];
  for (const user of userArray) {
    if (user.login !== activeUser.name) tmpArr.push(user);
  }
  return tmpArr;
}

export function requestRegisteredUserInfo(socketObj: WebSocket) {
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
    type: 'USER_LOGOUT',
    payload: {
      user: {
        login: activeUser.name,
        password: activeUser.pass,
      },
    },
  };
  wSocket.send(JSON.stringify(messageObj));
}

export function getMailFromThirdPartyUser(userName: string) {
  const messageObj = {
    id: 'third-party-user ' + userName,
    type: 'MSG_FROM_USER',
    payload: { user: { login: userName } },
  };
  wSocket.send(JSON.stringify(messageObj));
}
