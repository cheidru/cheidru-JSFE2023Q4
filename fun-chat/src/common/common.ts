// import '../style.css';

export const appInfo = `What could be better than chatting with your friends using a chat app?
  But what if the service owner deletes your messages? Or, on the contrary, 
  they can store your chat history without your consent! You know how to create 
  an outstanding design and functionality, right? Let's not delay and get down to work! 
  Let's create our own chat.`;

export const powerLayer = document.createElement('div');
powerLayer.setAttribute('id', 'power-layer');
document.body.append(powerLayer);

export function showModal(content: string, parent: HTMLElement) {
  powerLayer.style.display = 'block';
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.append(modal);

  const modalClose = document.createElement('div');
  modalClose.setAttribute('id', 'modal-close');
  modalClose.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="modal-close-svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
  modal.append(modalClose);

  const modalText = document.createElement('div');
  modalText.setAttribute('id', 'modal-text');
  modalText.textContent = content;
  modal.append(modalText);

  modalClose.addEventListener(
    'click',
    () => {
      powerLayer.style.display = 'none';
      modal.style.display = 'none';
      parent.style.display = 'flex';
    },
    true
  );
}
