import { showModal } from '../common/common';
import { populateUserList, userList } from '../chat/chat-users';
import { userToChatName, showMessages } from '../chat/chat-messages';
import { UserInfo, openChatWindow, closeChatWindow, updateMessengerTitle } from './api-common';
import { requestRegisteredUserInfo, sortUsers } from './api-req';
import { loginWindow } from '../login/login';

export let userOnLine: UserInfo[] = [];
export let userOffLine: UserInfo[] = [];
let userOnLineInit = false;
let userOffLineInit = false;

export function onMessageAction(event: MessageEvent, socketObj: WebSocket, name: string, pass: string) {
  const serverResp = JSON.parse(event.data);
  const messageArray = [];
  console.log('Server response received: ', serverResp, 'response id = ', serverResp.id);

  switch (serverResp.type) {
    case 'USER_LOGIN':
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
      userOffLineInit = true;
      break;
    case 'USER_EXTERNAL_LOGIN':
      console.log('Third-party User received');
      if (serverResp.payload.user.login === userToChatName.textContent) updateMessengerTitle('login');
      requestRegisteredUserInfo(socketObj);
      break;
    case 'MSG_FROM_USER':
      console.log('User Mailing history fetched');
      console.log(serverResp.payload.messages);
      if (serverResp.id.includes('third-party-user')) {
        const idTXT = serverResp.id;
        const user = idTXT.slice('third-party-user '.length);
        showMessages(serverResp.payload.messages, user);
      } else {
        showMessages(serverResp.payload.messages, '');
      }
      break;
    case 'MSG_SEND':
      console.log('User sent mail or received mail');
      console.log(serverResp.payload.message);
      messageArray.push(serverResp.payload.message);
      showMessages(messageArray as [], '');
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
