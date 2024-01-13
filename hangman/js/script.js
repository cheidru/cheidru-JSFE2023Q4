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

const quizQuestion = document.getElementById('quiz-question');
const quizWord = document.getElementById('quiz-word');
const attemptNo = document.getElementById('quiz-counter');
const keyBTN = document.getElementById('keyboard');

attemptNo.textContent = "0 / 6";

// случайный выбор слова
let actWordIndex = 0;
let newWordIndex = 0;
let attempt = 0;
const ATTEMPT_LIMIT = 6;
const keyDisabled = [];
let wordObj = {};
let secretWord = '';
let guess = '';

selectNewWord();

console.log(secretWord);



while (attempt <= ATTEMPT_LIMIT && guess === secretWord) {

  document.addEventListener('keypress', (event) => {
    console.log('keypress event', event);
    checkGuess();
  })

  keyBTN.addEventListener('click', (event) => {
    checkGuess();
  })

}

selectNewWord();

function checkGuess() {
    // Находим все индексы вхождения буквы в слово
    // Если индекс -1 обновляем keyDisabled и количество некорректных попыток, обновляем картинку
    // Если индекс больше 0 - обновляем keyDisabled и guess
        // TODO throw massage if disabled key pressed
        if (keyDisabled.includes(event.key)) return;
}

// Обновить значения guess, 
// Показать модальное окно

function selectNewWord() {  
  while(actWordIndex === newWordIndex) {
    newWordIndex = Math.floor(Math.random() * word.length);
  }
  actWordIndex = newWordIndex;  
  wordObj = word[actWordIndex];
  secretWord = wordObj.codeword;
  guess = '_'.repeat(secretWord.length);
  quizWord.textContent = guess;
  quizQuestion.textContent = wordObj.descr;
}