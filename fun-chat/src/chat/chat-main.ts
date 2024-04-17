import { showHeader } from './chat-header';
import { showFooter } from './chat-footer';
import { showUserPanel } from './chat-users';
import { showMessagePanel } from './chat-messages';

export const chatWrapper = document.createElement('div');

export function createChatWindow() {
  chatWrapper.setAttribute('id', 'chat-wrapper');
  chatWrapper.classList.add('hidden-modal');
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










