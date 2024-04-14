export function showChatWindow() {
  const chatWrapper = document.createElement('div');
  chatWrapper.setAttribute('id', 'chat-wrapper');
  // chatWrapper.classList.add('hidden-modal');
  document.body.append(chatWrapper);

  showHeader(chatWrapper);
  showMainWindow(chatWrapper);
  showFooter(chatWrapper);
}

function showHeader(parent: HTMLElement) {
  const headerWrapper = document.createElement('div');
  headerWrapper.setAttribute('id', 'header-wrapper');
  parent.append(headerWrapper);

  const ownUserName = document.createElement('div');
  ownUserName.setAttribute('id', 'own-user-name');
  headerWrapper.append(ownUserName);

  const appName = document.createElement('div');
  appName.setAttribute('id', 'app-name');
  headerWrapper.append(appName);

  const btnWrapper = document.createElement('div');
  btnWrapper.setAttribute('id', 'header-btn-wrapper');
  headerWrapper.append(btnWrapper);

  const infoBTN = document.createElement('button');
  infoBTN.setAttribute('id', 'header-info-btn');
  btnWrapper.append(infoBTN);

  const logOutBTN = document.createElement('button');
  logOutBTN.setAttribute('id', 'header-logout-btn');
  btnWrapper.append(logOutBTN);
}

function showMainWindow(parent: HTMLElement) {
  const mainWrapper = document.createElement('div');
  mainWrapper.setAttribute('id', 'main-chat-wrapper');
  parent.append(mainWrapper);

  showUserPanel(mainWrapper);
  showMessagePanel(mainWrapper);
}

function showUserPanel(parent: HTMLElement) {
  const userPanelWrapper = document.createElement('div');
  userPanelWrapper.setAttribute('id', 'user-panel-wrapper');
  parent.append(userPanelWrapper);

  const userSearch = document.createElement('input');
  userSearch.setAttribute('id', 'user-search');
  userPanelWrapper.append(userSearch);

  const userList = document.createElement('div');
  userList.setAttribute('id', 'user-list');
  userPanelWrapper.append(userList);
}

function showMessagePanel(parent: HTMLElement) {
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

function showFooter(parent: HTMLElement) {
  // Footer includes the school's logo and name,
  // the author's name, a link to the author's GitHub,
  // and the year of the app creation
  const footer = document.createElement('div');
  footer.setAttribute('id', 'chat-footer');
  parent.append(footer);

  const schoolLogo = document.createElement('a');
  schoolLogo.setAttribute('href', 'https://app.rs.school/');
  // ToDo attach logo SVG
  footer.append(schoolLogo);

  const authorGHub = document.createElement('a');
  authorGHub.setAttribute('href', 'https://github.com/cheidru');
  authorGHub.textContent = 'Igor Checheurov';
  footer.append(authorGHub);

  const appYear = document.createElement('p');
  appYear.setAttribute('id', 'app-year');
  appYear.textContent = '2024';
  footer.append(appYear);
}
