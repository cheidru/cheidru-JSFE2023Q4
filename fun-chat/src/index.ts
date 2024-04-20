import './style.css';
import { showLoginWindow } from './login/login';
import { createModal } from './common/common';
import { createChatWindow } from './chat/chat-main';

createModal();
showLoginWindow();
createChatWindow();
