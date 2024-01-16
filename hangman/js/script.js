const word = [
  {codeword: 'tube', descr: 'Toothpaste container'},
  {codeword: 'seesaw', descr: 'Up-and-down playground ride'},
  {codeword: 'nightlight', descr: 'Small lamp in the bedroom'},
  {codeword: 'green', descr: 'Colour of broccoli'},
  {codeword: 'hinge', descr: 'Joint on which a door turns'},
  {codeword: 'toad', descr: 'Frog-like amphibian'},
  {codeword: 'trolley', descr: 'Shop’s wire basket on wheels'},
  {codeword: 'punnet', descr: 'Tub for strawberries'},
  {codeword: 'dome', descr: 'Curved roof'},
  {codeword: 'needle', descr: 'Sewing tool'},
  {codeword: 'eggcup', descr: 'Small holder for a breakfast item'},
  {codeword: 'apron', descr: 'Cook’s clothes protector'},
  {codeword: 'igloo', descr: 'Snow house'},
  {codeword: 'wick', descr: 'Candle part that’s lit'},
  {codeword: 'bizarre', descr: 'Strange'},
  {codeword: 'cuff', descr: 'Shirt’s wristband'},
  {codeword: 'antler', descr: 'Horn of a deer'},
  {codeword: 'penguin', descr: 'Black and white Antarctic bird'},
  {codeword: 'rattle', descr: 'Baby’s noisy toy'},
  {codeword: 'stairs', descr: 'Set of steps'},
  {codeword: 'easel', descr: 'Artist’s three-legged stand'},
  {codeword: 'slug', descr: 'Slimy garden creature'}
]

hangmanIMG = [
  "./assets/pic/gallows.svg",
  "./assets/pic/head.svg",
  "./assets/pic/body.svg",
  "./assets/pic/hand-one.svg",
  "./assets/pic/hand-two.svg",
  "./assets/pic/leg-one.svg",
  "./assets/pic/leg-two.svg",
]

const quizQuestion = document.getElementById('quiz-question');
const quizWord = document.getElementById('quiz-word');
const attemptNo = document.getElementById('quiz-counter');
const keyBTN = document.getElementById('keyboard');
const gallowsIMG = document.getElementById('gallows-img');
const powerLayer = document.getElementById('power-layer');
const modal = document.getElementById('modal');
const modalHead = document.getElementById('modal-title');
const modalText = document.getElementById('modal-word');
const btn = document.querySelector('button');

attemptNo.textContent = "0 / 6";

// случайный выбор слова
let actWordIndex = 0;
let newWordIndex = 0;
let attempt = 0;
const ATTEMPT_LIMIT = 6;
const keyDisabled = [];
let wordObj = {};
let secretWord = '';
let secretWordArr = []; 
let guess = '';
const VIRTUAL_KBD = 1;
const PHYSICAL_KBD = 0;

selectNewWord();

console.log('secret word is "', secretWord, '"');

// PC keyboard press
document.addEventListener('keypress', (event) => {
  const letter = event.code[3].toLowerCase();
  checkGuess(letter, PHYSICAL_KBD);
})

// Virtual keyboard press
keyBTN.addEventListener('click', (event) => {
  const letter = event.target.id;
  if (letter === 'keyboard') return;
  checkGuess(letter, VIRTUAL_KBD);
})

function checkGuess(letter, kbd) {
  if (keyDisabled.includes(letter)) {
    if (kbd === PHYSICAL_KBD) seeModal('wrong button', letter);
    return;
  }
  const keyhandle = document.getElementById(`${letter}`);
  keyhandle.classList.add('key-disabled');
  keyDisabled.push(letter);

  // updateVirtualKBD(letter);


  // Check if the letter presented in the word
  let indices = [];
  secretWordArr.map((item, index) => {
    if(item === letter) indices.push(index);
  })

  if (indices.length > 0) { // The word includes the letter
    const guessArr = guess.split('');
    for (let i = 0; i < indices.length; i++) {
      guessArr[indices[i]] = letter;
    }
    guess = guessArr.join('');
    quizWord.textContent = guess;
    if(!guessArr.includes('_')) seeModal('win');

  } else { // No such letter in the word
    attempt++;
    attemptNo.textContent = `${attempt} / 6`;
    gallowsIMG.src = hangmanIMG[attempt];
    if(attempt === ATTEMPT_LIMIT) seeModal('loose');
  }
}

// Показать модальное окно
function seeModal(status, letter) {
  let showPlayAgain = true;
  let mTitle = '';
  let mTxt = '';

  switch (status) {
    case 'win':
      mTitle = 'Congrats! You win!';
      mTxt = `Your incorrect guesses ${attempt} / 6` + "<br>" + `Secret word "${secretWord.toUpperCase()}"`;
      break;
    case 'loose':
      mTitle = 'You lose!'
      mTxt = `Your incorrect guesses ${attempt} / 6` + "<br>" + `Secret word "${secretWord.toUpperCase()}"`;
      break;
    case 'wrong button':
      mTxt = `You already pressed` + "<br>" + `the button '${letter.toUpperCase()}' before`;
      showPlayAgain = false;
      modalHead.classList.add('hidden-modal');
      break;
    default:
      break;
  }

  modalHead.textContent = mTitle;
  modalText.innerHTML = mTxt;
  modal.classList.remove('hidden-modal');
  modal.classList.add('modal');
  powerLayer.classList.remove('hidden-modal');


  if (showPlayAgain) {
    btn.addEventListener('click', () => {
      selectNewWord();
      attemptNo.textContent = "0 / 6";
      modal.classList.add('hidden-modal');
      modal.classList.remove('modal');
      powerLayer.classList.add('hidden-modal');
      for(let i = 0; i < keyDisabled.length; i++) {
        const keyhandle = document.getElementById(`${keyDisabled[i]}`);
        keyhandle.classList.remove('key-disabled');
      }
      keyDisabled.length = 0;
    }, true);
  } else {
    btn.classList.add('hidden-modal')
    powerLayer.addEventListener('click', () => {
      modal.classList.add('hidden-modal');
      modal.classList.remove('modal');
      powerLayer.classList.add('hidden-modal');
      btn.classList.remove('hidden-modal');
      modalHead.classList.remove('hidden-modal');
    }, true);
  }
}




function selectNewWord() {
  while(actWordIndex === newWordIndex) {
    newWordIndex = Math.floor(Math.random() * word.length);
  }
  actWordIndex = newWordIndex;  
  wordObj = word[actWordIndex];
  secretWord = wordObj.codeword;
  guess = '_'.repeat(secretWord.length);
  quizWord.textContent = guess;
  quizQuestion.textContent = "Hint: " + wordObj.descr;
  secretWordArr = secretWord.split('');
  attempt = 0;
  gallowsIMG.src = hangmanIMG[attempt];
}