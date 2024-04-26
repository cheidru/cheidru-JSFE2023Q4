import { sendMessage } from '../api/api-req';
import { activeUser } from '../login/login';

export const userToChatName = document.createElement('div');
export const userToChatStatus = document.createElement('div');
const inviteMessage = document.createElement('div');
export const messages = document.createElement('div');
export const sendBTN = document.createElement('button');
export const newMessage = document.createElement('input');

export function changeInviteMSG(message: string) {
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

  sendBTN.setAttribute('id', 'send-message-btn');
  sendBTN.textContent = 'Send';
  newMessageWrapper.append(sendBTN);

  newMessage.addEventListener('input', () => {
    if (newMessage.value.length > 0) sendBTN.removeAttribute('disabled');
    if (newMessage.value.length === 0) sendBTN.setAttribute('disabled', '');
  });

  document.addEventListener('keydown', keyDownHandler);

  sendBTN.addEventListener('click', () => {
    if (newMessage.value === '') return;
    inviteMessage.style.display = 'none';
    sendMessage(newMessage.value);
    newMessage.value = '';
  });
}

export function keyDownHandler(event: KeyboardEvent) {
  if (newMessage.value === '') return;
  if (event.code === 'Enter' && document.activeElement === newMessage) {
    inviteMessage.style.display = 'none';
    sendMessage(newMessage.value);
    newMessage.value = '';
  }
}

export function showMessages(messageArray: Message[], sender: string) {
  const messageNum = messageArray.length;

  if (sender.length > 0 && sender !== activeUser.name) {
    console.log('sender =', sender, 'activeUser.name =', activeUser.name, messageArray.length);
    const userWrapperList = document.querySelectorAll('.user-wrapper');
    for (let i = 0; i < userWrapperList.length; i++) {
      const userNameElement = userWrapperList[i].children[1] as HTMLElement;
      if (userNameElement.textContent === sender) {
        const userMSGNum = userWrapperList[i].children[2] as HTMLElement;
        userMSGNum.textContent = messageArray.length > 0 ? messageArray.length.toString() : '';
        return;
      }
    }
  }
  if (messageArray.length > 0) changeInviteMSG('');

  console.log('showMessages messageArray = ', messageArray, 'messageNum = ', messageNum);

  for (let i = 0; i < messageNum; i++) {
    // Message from the user I'm chatting now
    if (messageArray[i].from === userToChatName.textContent || messageArray[i].from === activeUser.name) {
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
    } else {
      const userWrapperList = document.querySelectorAll('.user-id');
      for (const user of userWrapperList) {
        if (user.textContent === messageArray[i].from && messageArray[i].status.isReaded === false) {
          if (user.parentElement !== null) {
            const mailNum =
              user.parentElement.children[2].textContent === ''
                ? 1
                : Number(user.parentElement.children[2].textContent) + 1;
            user.parentElement.children[2].textContent = mailNum.toString();
          }
        }
      }
    }
  }
}

function norm(dayMin: number) {
  return dayMin < 10 ? '0' + dayMin : dayMin.toString();
}
