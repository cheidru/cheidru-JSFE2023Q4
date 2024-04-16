export function showMessagePanel(parent: HTMLElement) {
    const messengerWrapper = document.createElement('div');
    messengerWrapper.setAttribute('id', 'messenger-wrapper');
    parent.append(messengerWrapper);
  
    showMessagePanelHeader(messengerWrapper);
  
    const messages = document.createElement('div');
    messages.setAttribute('id', 'messages');
    messengerWrapper.append(messages);
  
    showNewMessagePanel(messengerWrapper);
  }
  
  function showMessagePanelHeader(parent: HTMLElement) {
    const headerWrapper = document.createElement('div');
    headerWrapper.setAttribute('id', 'header-wrapper');
    parent.append(headerWrapper);
  
    const userName = document.createElement('div');
    userName.setAttribute('id', 'user-name');
    headerWrapper.append(userName);
  
    const userStatus = document.createElement('div');
    userStatus.setAttribute('id', 'user-status');
    headerWrapper.append(userStatus);
  }
  
  function showNewMessagePanel(parent: HTMLElement) {
    const newMessageWrapper = document.createElement('div');
    newMessageWrapper.setAttribute('id', 'new-message-wrapper');
    parent.append(newMessageWrapper);
  
    const newMessage = document.createElement('input');
    newMessage.setAttribute('id', 'user-list');
    newMessageWrapper.append(newMessage);
  
    const sendBTN = document.createElement('button');
    sendBTN.setAttribute('id', 'user-list');
    newMessageWrapper.append(sendBTN);
  }