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

const startScreen = document.createElement('div');
startScreen.setAttribute('id', 'start-screen-wrapper');
startScreen.classList.add('modal');
// startScreen.classList.add('hidden-modal');
document.body.append(startScreen);

const startScreenHeader = document.createElement('h1');
startScreenHeader.setAttribute('id', 'start-screen-header');
startScreenHeader.setAttribute('id', 'header');
startScreenHeader.textContent = 'RSS PUZZLE GAME';
startScreen.append(startScreenHeader);

const startScreenMain = document.createElement('div');
startScreenMain.setAttribute('id', 'start-screen-main-wrapper');
startScreen.append(startScreenMain);

const startScreenIMG1 = document.createElement('img');
startScreenIMG1.setAttribute('id', 'start-screen-img1');
startScreenIMG1.setAttribute('src', '../src/assets/img/candy_girl.png');
startScreenIMG1.setAttribute('alt', 'funny-girl-image');
startScreenIMG1.classList.add('start-img');
startScreenMain.append(startScreenIMG1);

const startScreenTxt = document.createElement('p');
startScreenTxt.setAttribute('id', 'start-screen-txt');
startScreenTxt.textContent = `RSS Puzzle is an interactive 
mini-game aimed at enhancing English language skills. Players assemble 
sentences from jumbled words, inspired by Lingualeo's Phrase Constructor 
training. The game integrates various levels of difficulty, hint options, 
and a unique puzzle-like experience with artwork.`;
startScreenMain.append(startScreenTxt);

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
