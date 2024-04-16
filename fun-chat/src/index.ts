import './style.css';
import { showLoginWindow } from './login/login';
import { createModal } from './common/common';
import { showChatWindow } from './chat/chat-main';

createModal();
showLoginWindow();
showChatWindow();
