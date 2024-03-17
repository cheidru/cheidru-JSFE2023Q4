import { startLogin } from './login';

// Create header with logout button
const header = document.createElement('header');
const logoutBTN = document.createElement('button');
logoutBTN.textContent = 'Log Out';

const logOutWindow = document.createElement('div');
logOutWindow.setAttribute('id', 'logout-wrapper');
logOutWindow.classList.add('modal');
logOutWindow.classList.add('hidden-modal');
document.body.append(logOutWindow);

const logOutText = document.createElement('p');
logOutText.setAttribute('id', 'logout-txt');
logOutText.classList.add('info-txt');
logOutText.textContent =
    'Are You sure You want to log out? Your account will be removed and You will need to log in again.';
logOutWindow.append(logOutText);

const logOutBTNWrapper = document.createElement('div');
logOutBTNWrapper.setAttribute('id', 'logout-btn-wrap');
logOutWindow.append(logOutBTNWrapper);

const logOutCancelBTN = document.createElement('button');
logOutCancelBTN.innerText = 'Cancel';
logOutBTNWrapper.append(logOutCancelBTN);

const logOutConfirmBTN = document.createElement('button');
logOutConfirmBTN.innerText = 'Log Out';
logOutBTNWrapper.append(logOutConfirmBTN);

// let userData = {
//     firstName: '',
//     lastName: '',
// };

prepareUser();

function prepareUser() {
    new Promise<void>((res) => {
        if (checkLocalStorage() === false) {
            startLogin().then(() => res());
        } else {
            res();
        }
    }).then(() => {
        document.body.append(header);
        header.append(logoutBTN);
        logoutBTN.addEventListener('click', () => {
            console.log('Erase user');
            logOutWindow.classList.remove('hidden-modal');

            logOutCancelBTN.addEventListener(
                'click',
                () => {
                    console.log('cancel clicked');
                    logOutWindow.classList.add('hidden-modal');
                },
                { once: true }
            );

            logOutConfirmBTN.addEventListener(
                'click',
                () => {
                    header.style.display = 'none';
                    logOutWindow.classList.add('hidden-modal');
                    localStorage.removeItem('rss-puzzle-user');
                    prepareUser();
                },
                { once: true }
            );
        });
        showStartScreen();
    });
}

function checkLocalStorage() {
    const storageData = localStorage.getItem('rss-puzzle-user');
    if (storageData === null) return false;
    // userData = { ...JSON.parse(storageData) };
    return true;
}

function showStartScreen() {
    header.style.display = 'flex';
    

    // const header = document.createElement('header');
    // document.body.append(header);
    // header.append(logoutBTN);
}
