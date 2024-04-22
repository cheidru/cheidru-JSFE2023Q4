import { sendMessage } from '../api/api';

export const userToChatName = document.createElement('div');
export const userToChatStatus = document.createElement('div');
const messages = document.createElement('div');

export type Message = {
  id: number;
  from: string;
  to: string;
  text: string;
  datetime: Date;
  isDelivered: boolean;
  isReaded: boolean;
  isEdited: boolean;
};

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

export function showMessages(messageArray: Message[]) {
  const messageNum = messageArray.length;
  console.log('showMessages messageArray = ', messageArray, 'messageNum = ', messageNum);

  for (let i = 0; i < messageNum; i++) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');
    messages.append(messageWrapper);

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-header');
    messageWrapper.append(messageHeader);

    const messageSender = document.createElement('div');
    const fro = messageArray[i].from === userToChatName.textContent ? messageArray[i].from : 'You';
    messageSender.textContent = fro;
    if (fro === 'You') messageWrapper.style.alignSelf = 'flex-start';
    messageHeader.append(messageSender);

    const messageDate = document.createElement('div');
    const msgDate = new Date(messageArray[i].datetime);
    messageDate.textContent = `${msgDate.getDate()}-${msgDate.getMonth()}-${msgDate.getFullYear()} ${msgDate.getHours()}:${msgDate.getMinutes()}:${msgDate.getSeconds()}`;
    messageHeader.append(messageDate);

    const messageTxt = document.createElement('div');
    messageTxt.classList.add('message-txt');
    messageTxt.textContent = messageArray[i].text;
    messageWrapper.append(messageTxt);

    const messageFooter = document.createElement('div');
    messageFooter.classList.add('message-footer');
    if (messageArray[i].isEdited === true) {
      messageFooter.textContent = 'Edited';
    } else if (messageArray[i].isReaded === true) {
      messageFooter.textContent = 'Opened';
    } else if (messageArray[i].isDelivered === true) {
      messageFooter.textContent = 'Delivered';
    }
    messageWrapper.append(messageFooter);
  }
}
