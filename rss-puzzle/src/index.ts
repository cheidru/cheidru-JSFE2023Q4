import { startLogin } from './login';

const userData = {
    firstName: '',
    lastName: '',
};

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
startScreen.classList.add('hidden-modal');
document.body.append(startScreen);

const startScreenHeader = document.createElement('h1');
startScreenHeader.setAttribute('id', 'start-screen-header');
startScreenHeader.setAttribute('id', 'header');
startScreenHeader.textContent = 'RSS PUZZLE';
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

const startGameBTN = document.createElement('button');
startGameBTN.innerText = 'Start Plying';
startScreen.append(startGameBTN);

const greetingWindow = document.createElement('div');
greetingWindow.setAttribute('id', 'greeting-wrapper');
greetingWindow.classList.add('modal');
greetingWindow.classList.add('hidden-modal');
document.body.append(greetingWindow);

const greetingTxt = document.createElement('p');
greetingTxt.setAttribute('id', 'greeting-txt');
greetingWindow.append(greetingTxt);

const greetingClose = document.createElement('div');
greetingClose.setAttribute('id', 'greeting-close');
greetingClose.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="greetng-close-svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>';
greetingWindow.append(greetingClose);

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
            logUserOut();
        });
        showStartScreen();
    });
}

function logUserOut() {
    logOutWindow.classList.remove('hidden-modal');

    logOutCancelBTN.addEventListener(
        'click',
        () => {
            logOutWindow.classList.add('hidden-modal');
        },
        true
    );

    logOutConfirmBTN.addEventListener(
        'click',
        () => {
            header.style.display = 'none';
            logOutWindow.classList.add('hidden-modal');
            localStorage.removeItem('rss-puzzle-user');
            prepareUser();
        },
        true
    );
}

function checkLocalStorage() {
    const storageData = localStorage.getItem('rss-puzzle-user');
    if (storageData === null) return false;
    const localData = { ...JSON.parse(storageData) };
    userData.firstName = localData.firstName;
    userData.lastName = localData.lastName;
    return true;
}

function showStartScreen() {
    header.style.display = 'none';
    startScreen.classList.remove('hidden-modal');
    console.log('firstName & lastName = ', userData.firstName, userData.lastName);
    startGameBTN.addEventListener(
        'click',
        () => {
            startScreen.classList.add('hidden-modal');
            startGame();
        },
        true
    );
}

function startGame() {
    greetingTxt.textContent = `Dear ${userData.firstName} ${userData.lastName} ! 
    We appreciate Your interest in RSS Puzzle game. 
    Hope You enjoy playing and learn a lot of English vocabulary.`;
    greetingWindow.classList.remove('hidden-modal');
    greetingClose.addEventListener(
        'click',
        () => {
            greetingWindow.classList.add('hidden-modal');
        },
        true
    );
}
