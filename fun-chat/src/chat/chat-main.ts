import { showHeader } from './chat-header';
import { showFooter } from './chat-footer';
import { showUserPanel } from './chat-users';
import { showMessagePanel } from './chat-messages';
// import { usersOnLine, usersOffLine } from '../login/login';

export const chatWrapper = document.createElement('div');

export function createChatWindow() {
  chatWrapper.setAttribute('id', 'chat-wrapper');
  chatWrapper.style.display = 'none';
  document.body.append(chatWrapper);

  showHeader(chatWrapper);
  showMainWindow(chatWrapper);
  showFooter(chatWrapper);
}

function showMainWindow(parent: HTMLElement) {
  const mainWrapper = document.createElement('div');
  mainWrapper.setAttribute('id', 'main-chat-wrapper');
  parent.append(mainWrapper);

  showUserPanel(mainWrapper);
  showMessagePanel(mainWrapper);
}
