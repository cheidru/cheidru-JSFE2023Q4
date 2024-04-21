import { sendMessage } from '../api/api';

export const userToChatName = document.createElement('div');
export const userToChatStatus = document.createElement('div');
const messages = document.createElement('div');

export function showMessagePanel(parent: HTMLElement) {
  const messengerWrapper = document.createElement('div');
  messengerWrapper.setAttribute('id', 'messenger-wrapper');
  parent.append(messengerWrapper);

  showMessagePanelHeader(messengerWrapper);

  messages.setAttribute('id', 'messages');
  messengerWrapper.append(messages);

  sendNewMessagePanel(messengerWrapper);
}

function showMessagePanelHeader(parent: HTMLElement) {
  const headerWrapper = document.createElement('div');
  headerWrapper.setAttribute('id', 'message-header-wrapper');
  parent.append(headerWrapper);

  userToChatName.setAttribute('id', 'user-name');
  userToChatName.textContent = 'Select contact from user list';
  headerWrapper.append(userToChatName);

  userToChatStatus.setAttribute('id', 'user-status');
  userToChatStatus.textContent = '';
  headerWrapper.append(userToChatStatus);
}

function sendNewMessagePanel(parent: HTMLElement) {
  const newMessageWrapper = document.createElement('div');
  newMessageWrapper.setAttribute('id', 'new-message-wrapper');
  parent.append(newMessageWrapper);

  const newMessage = document.createElement('input');
  newMessage.setAttribute('id', 'new-message-input');
  newMessage.setAttribute('placeholder', 'Write new message ...');
  newMessageWrapper.append(newMessage);

  const sendBTN = document.createElement('button');
  sendBTN.setAttribute('id', 'send-message-btn');
  sendBTN.textContent = 'Send';
  newMessageWrapper.append(sendBTN);

  sendBTN.addEventListener('click', () => {
    sendMessage(newMessage.value);
  });
}

export function showMessages(messageArray: []) {
  const messageNum = messageArray.length;
  console.log(messageArray);

  for (let i = 0; i < messageNum; i++) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');
    messages.append(messageWrapper);

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-header');
    messageWrapper.append(messageHeader);

    const messageTxt = document.createElement('div');
    messageTxt.classList.add('message-txt');
    messageWrapper.append(messageTxt);

    const messageFooter = document.createElement('div');
    messageFooter.classList.add('message-txt');
    messageWrapper.append(messageFooter);
  }
}
