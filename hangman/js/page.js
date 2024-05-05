
const alphabet = [  
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

const powerLay = document.createElement('div');
powerLay.setAttribute('id', 'power-layer');
powerLay.classList.add('hidden-modal');

const mod = document.createElement('div');
mod.setAttribute('id', 'modal');
mod.classList.add('hidden-modal');

const modalTitle = document.createElement('p');
modalTitle.setAttribute('id', 'modal-title');

const modalWord = document.createElement('p');
modalWord.setAttribute('id', 'modal-word');

const button = document.createElement('button');
button.textContent = "Play again";

const main = document.createElement('main');

const title = document.createElement('h1');
title.textContent = 'Hangman Game';

const puzzleWrapper = document.createElement('div');
puzzleWrapper.setAttribute('id', 'puzzle-wrapper');

const gallowsWrapper = document.createElement('div');
gallowsWrapper.setAttribute('id', 'gallows-wrapper');

const imag = document.createElement('img');
imag.setAttribute('id', 'gallows-img');
imag.src = './assets/pic/gallows.svg';

const quizWrapper = document.createElement('div');
quizWrapper.setAttribute('id', 'quiz-wrapper');

const quizWrd = document.createElement('div');
quizWrd.setAttribute('id', 'quiz-word');
quizWrd.textContent = '_ _ _ _ _ _';

const quizQuest = document.createElement('div');
quizQuest.setAttribute('id', 'quiz-question');

const quizCounterWrapper = document.createElement('div');
quizCounterWrapper.setAttribute('id', 'quiz-counter-wrapper');

const quizCounterText = document.createElement('div');
quizCounterText.setAttribute('id', 'quiz-counter-text');
quizCounterText.textContent = 'Incorrect guesses :';

const quizCounter = document.createElement('div');
quizCounter.setAttribute('id', 'quiz-counter');
quizCounter.textContent = '0 / 6';

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');

document.body.append(powerLay);
document.body.append(mod);
document.body.append(main);

mod.append(modalTitle);
mod.append(modalWord);
mod.append(button);

main.append(title);
main.append(puzzleWrapper);
puzzleWrapper.append(gallowsWrapper);
gallowsWrapper.append(imag);

puzzleWrapper.append(quizWrapper);
quizWrapper.append(quizWrd);
quizWrapper.append(quizQuest);
quizWrapper.append(quizCounterWrapper);
quizWrapper.append(keyboard);

quizCounterWrapper.append(quizCounterText);
quizCounterWrapper.append(quizCounter);

for (let i = 0; i < alphabet.length; i++) {
    const key = document.createElement('div');
    key.setAttribute('id', `${alphabet[i]}`);
    key.textContent = `${alphabet[i]}`.toUpperCase();
    keyboard.append(key);
}


// document.body.innerHTML = `
// <div id="power-layer" class="hidden-modal"></div>
// <div id="modal" class="hidden-modal">
//     <p id="modal-title"></p>
//     <p id="modal-word"></p>
//     <button>Play again</button>
// </div>

// <main>
//     <h1>Hangman Game</h1>
//     <div id="puzzle-wrapper">
//         <div id="gallows-wrapper">
//             <img src="./assets/pic/gallows.svg" id="gallows-img" alt="gallows picture">
//         </div>

//         <div id="quiz-wrapper">
//             <div id="quiz-word">_ _ _ _ _ _</div>
//             <div id="quiz-question">Test your guessing skill</div>
//             <div id="quiz-counter-wrapper">
//                 <div id="quiz-counter-text">Your attempts :</div>
//                 <div id="quiz-counter">0 / 6</div>
//             </div>
//             <div id="keyboard">
//             <div id="a">A</div>
//             <div id="b">B</div>
//             <div id="c">C</div>
//             <div id="d">D</div>
//             <div id="e">E</div>
//             <div id="f">F</div>
//             <div id="g">G</div>
//             <div id="h">H</div>
//             <div id="i">I</div>
//             <div id="j">J</div>
//             <div id="k">K</div>
//             <div id="l">L</div>
//             <div id="m">M</div>
//             <div id="n">N</div>
//             <div id="o">O</div>
//             <div id="p">P</div>
//             <div id="q">Q</div>
//             <div id="r">R</div>
//             <div id="s">S</div>
//             <div id="t">T</div>
//             <div id="u">U</div>
//             <div id="v">V</div>
//             <div id="w">W</div>
//             <div id="x">X</div>
//             <div id="y">Y</div>
//             <div id="z">Z</div>
//             </div>
//         </div>
//     </div>
// </main>`;