import './style.css';
import { showLoginWindow } from './login/login';
import { createModal } from './common/common';
import { createChatWindow } from './chat/chat-main';
// import { chatWrapper } from './chat/chat-main';

createModal();
createChatWindow();
showLoginWindow();
// chatWrapper.style.display = 'flex';
