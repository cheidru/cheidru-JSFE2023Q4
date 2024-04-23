import { sendMessage } from '../api/api';

export const userToChatName = document.createElement('div');
export const userToChatStatus = document.createElement('div');
const inviteMessage = document.createElement('div');
const messages = document.createElement('div');
export const sendBTN = document.createElement('button');
export const newMessage = document.createElement('input');

export function changeInviteMSG(message: string) {
  console.log('changeInviteMSG to ', message);
  inviteMessage.textContent = message;
}

export type Message = {
  id: number;
  from: string;
  to: string;
  text: string;
  datetime: Date;
  status: {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
  };
};

export function showMessagePanel(parent: HTMLElement) {
  const messengerWrapper = document.createElement('div');
  messengerWrapper.setAttribute('id', 'messenger-wrapper');
  parent.append(messengerWrapper);

  showMessagePanelHeader(messengerWrapper);

  messages.setAttribute('id', 'messages');
  messengerWrapper.append(messages);

  inviteMessage.setAttribute('id', 'chat-invite-modal');
  inviteMessage.textContent = 'Select a user to start messaging';
  messengerWrapper.append(inviteMessage);

  sendNewMessagePanel(messengerWrapper);
}

function showMessagePanelHeader(parent: HTMLElement) {
  const headerWrapper = document.createElement('div');
  headerWrapper.setAttribute('id', 'message-header-wrapper');
  parent.append(headerWrapper);

  userToChatName.setAttribute('id', 'user-name');
  userToChatName.textContent = '';
  headerWrapper.append(userToChatName);

  userToChatStatus.setAttribute('id', 'user-status');
  userToChatStatus.textContent = '';
  headerWrapper.append(userToChatStatus);
}

function sendNewMessagePanel(parent: HTMLElement) {
  const newMessageWrapper = document.createElement('div');
  newMessageWrapper.setAttribute('id', 'new-message-wrapper');
  parent.append(newMessageWrapper);

  newMessage.setAttribute('id', 'new-message-input');
  newMessage.setAttribute('placeholder', 'Write new message ...');
  newMessage.setAttribute('autocomplete', 'off');
  newMessageWrapper.append(newMessage);

  newMessage.addEventListener('input', () => {
    if (newMessage.value.length > 0) sendBTN.removeAttribute('disabled');
    if (newMessage.value.length === 0) sendBTN.setAttribute('disabled', '');
  });

  sendBTN.setAttribute('id', 'send-message-btn');
  sendBTN.textContent = 'Send';
  newMessageWrapper.append(sendBTN);

  sendBTN.addEventListener('click', () => {
    inviteMessage.style.display = 'none';
    sendMessage(newMessage.value);
    newMessage.value = '';
  });
}

export function showMessages(messageArray: Message[]) {
  const messageNum = messageArray.length;
  if (messageArray.length > 0) changeInviteMSG('');

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
    messageDate.textContent = `${norm(msgDate.getDate())}-${norm(msgDate.getMonth())}-${msgDate.getFullYear()} ${norm(msgDate.getHours())}:${norm(msgDate.getMinutes())}:${norm(msgDate.getSeconds())}`;
    messageHeader.append(messageDate);

    const messageTxt = document.createElement('div');
    messageTxt.classList.add('message-txt');
    messageTxt.textContent = messageArray[i].text;
    messageWrapper.append(messageTxt);

    const messageFooter = document.createElement('div');
    messageFooter.classList.add('message-footer');
    if (messageArray[i].status.isEdited === true) {
      messageFooter.textContent = 'Edited';
    } else if (messageArray[i].status.isReaded === true) {
      messageFooter.textContent = 'Opened';
    } else if (messageArray[i].status.isDelivered === true) {
      messageFooter.textContent = 'Delivered';
    } else {
      messageFooter.textContent = 'Not delivered';
    }
    messageWrapper.append(messageFooter);
  }
}

function norm(dayMin: number) {
  return dayMin < 10 ? '0' + dayMin : dayMin.toString();
}
