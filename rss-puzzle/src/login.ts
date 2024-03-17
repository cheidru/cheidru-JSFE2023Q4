const inputWindow = document.createElement('div');
inputWindow.setAttribute('id', 'login-wrapper');
inputWindow.classList.add('modal');
// document.body.append(inputWindow);

const loginHeader = document.createElement('div');
loginHeader.setAttribute('id', 'header');
loginHeader.textContent = 'RSS Puzzle Login';
// inputWindow.append(loginHeader);

const inputWrapperFirst = document.createElement('div');
inputWrapperFirst.classList.add('input-wrap');
// inputWindow.append(inputWrapperFirst);

const firstNameLBL = document.createElement('label');
firstNameLBL.setAttribute('for', 'first-name');
firstNameLBL.textContent = 'First Name (min 3 characters)';
// inputWrapperFirst.append(firstNameLBL);

const firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('id', 'first-name');
firstNameInput.setAttribute('autocomplete', 'off');
// prettier-ignore
firstNameInput.setAttribute('pattern', '[A-Z][a-z\\-]{2,}'); // eslint-disable-line no-useless-escape
firstNameInput.classList.add('user-input');
// inputWrapperFirst.append(firstNameInput);

const inputWrapperLast = document.createElement('div');
inputWrapperLast.classList.add('input-wrap');
// inputWindow.append(inputWrapperLast);

const lastNameLBL = document.createElement('label');
lastNameLBL.setAttribute('for', 'first-name');
lastNameLBL.textContent = 'Surname (min 4 characters)';
// inputWrapperLast.append(lastNameLBL);

const lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('id', 'last-name');
lastNameInput.setAttribute('autocomplete', 'off');
// prettier-ignore
lastNameInput.setAttribute('pattern', '[A-Z][a-z\\-]{3,}'); // eslint-disable-line no-useless-escape
lastNameInput.classList.add('user-input');
// inputWrapperLast.append(lastNameInput);

const warningTip = document.createElement('div');
warningTip.classList.add('tooltip');
warningTip.innerText = 'Test';

const loginBTN = document.createElement('button');
loginBTN.setAttribute('disabled', '');
loginBTN.innerText = 'Login';
// inputWindow.append(loginBTN);

const userDataValid = {
    firstName: false,
    lastName: false,
};

// const userData = {
//     firstName: '',
//     lastName: '',
// };

const warningMessage = [
    'Minimum name length is ',
    'Enter your name in latin caracters',
    'First letter must be in upper case',
];

function checkInput(event: Event | FocusEvent, inputObj: HTMLInputElement) {
    if (inputObj.value.length == 0) return;
    // if(event.target.value.length == 0) return;
    if (inputObj.validity.patternMismatch) {
        event.preventDefault();
        if (issueWarning(event, inputObj)) {
            inputObj.focus();
            closeWarnForCorrection(inputObj);
        } else {
            checkDataIsComplete(inputObj);
        }
    } else {
        checkDataIsComplete(inputObj);
    }
}

function checkDataIsComplete(inputObj: HTMLInputElement) {
    if (inputObj === lastNameInput) {
        // userData.lastName = inputObj.value;
        userDataValid.lastName = true;
        if (userDataValid.firstName === true) loginBTN.removeAttribute('disabled');
    } else {
        // userData.firstName = inputObj.value;
        userDataValid.firstName = true;
        if (userDataValid.lastName === true) loginBTN.removeAttribute('disabled');
    }
}

function closeWarnForCorrection(inputField: HTMLInputElement) {
    inputField.addEventListener(
        'input',
        () => {
            warningTip.remove();
            inputField.style.backgroundColor = 'var(--input-background-color)';
        },
        { once: true }
    );
}

function issueWarning(event: Event, inputObj: HTMLInputElement) {
    const string = inputObj.value;
    // let string = event.target.value;
    const inputLenLimit = inputObj === lastNameInput ? 4 : 3;
    const regxLatin = /[^a-z\-]/; // eslint-disable-line no-useless-escape
    const regxUpper = /^[A-Z]/;
    let warning = '';
    loginBTN.setAttribute('disabled', '');
    if (string.length < inputLenLimit) warning = warningMessage[0] + inputLenLimit + ' caracters. ';
    if (regxLatin.test(string)) {
        warning += warningMessage[1] + '. ';
    }
    if (!regxUpper.test(string)) {
        warning += warningMessage[2] + '. ';
    }
    if (warning.length === 0) return false;
    showCollout(warning, inputObj);
    return true;
}

function showCollout(message: string, targetObj: HTMLInputElement) {
    targetObj.style.backgroundColor = 'var(--warning-color)';
    warningTip.textContent = message;
    // compensate surname input bottom padding
    if (targetObj.parentElement === inputWrapperLast) warningTip.style.bottom = '2rem';
    if (targetObj.parentElement !== null) targetObj.parentElement.append(warningTip);
}

function makeLoginWindow() {
    document.body.append(inputWindow);
    inputWindow.append(loginHeader);
    inputWindow.append(inputWrapperFirst);
    inputWrapperFirst.append(firstNameLBL);
    firstNameInput.value = '';
    inputWrapperFirst.append(firstNameInput);
    inputWindow.append(inputWrapperLast);
    inputWrapperLast.append(lastNameLBL);
    lastNameInput.value = '';
    inputWrapperLast.append(lastNameInput);
    inputWindow.append(loginBTN);
}

function saveInLocalStorage() {
    return new Promise((res) => {
        const inputData = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
        };
        localStorage.setItem('rss-puzzle-user', JSON.stringify(inputData));
        res(true);
    });
}

export function startLogin() {
    return new Promise<void>((res) => {
        makeLoginWindow();

        firstNameInput.addEventListener('blur', (e) => {
            checkInput(e, firstNameInput);
        });
        firstNameInput.addEventListener('change', (e) => {
            checkInput(e, firstNameInput);
        });

        lastNameInput.addEventListener('blur', (e) => {
            checkInput(e, lastNameInput);
        });
        lastNameInput.addEventListener('change', (e) => {
            checkInput(e, lastNameInput);
        });

        loginBTN.addEventListener('click', () => {
            // Close input window
            inputWindow.remove();
            saveInLocalStorage().then(() => res());
        });
    });
}
