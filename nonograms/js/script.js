const field = document.getElementById('play-ground-wrapper');
const templScript = document.getElementById('templates');
const startGameSound = document.getElementById('new-attampt-sound');
const checkSound = document.getElementById('check-sound');
const uncheckSound = document.getElementById('uncheck-sound');
const nonoField = document.getElementById('play-ground-wrapper');

const restartBTN = document.getElementById('restart');
const randomBTN = document.getElementById('random');
const saveBTN = document.getElementById('save');
const solutionBTN = document.getElementById('solution');
const lastGameBTN = document.getElementById('last-game');
const timerDisplay = document.getElementById('timer');


const NEW_GAME = false;
user = {};
user.lastGame = {};
user.lastGame.level = 0;
user.lastGame.number = 0;
user.lastGame.result = [];
user.default = {};
user.default.level = 0;
user.default.theme = 'light-theme';
user.bestResults = {};

const game = {}
game.difficulty = 0;
game.number = 0;
game.level = 0;
game.name = '';
game.template = [];
game.clueTop = [];
game.clueLeft = [];
game.guesses = [];
game.timerON = false;
game.timer = {};

function startGame() {
  selectRandomGame(NEW_GAME);
  loadTemplate();
  drawNonogram();

  console.log('start game ', game.guesses, game.template);

  field.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('cell')) {
      e.target.classList.remove('guess-item');
      e.target.classList.toggle('cross-item');
    }
  });

  field.addEventListener('click', (e) => {
    if(e.target.classList.contains('cell')) {
      if (!game.timerON) {
        game.timerON = true;
        startGameTimer();        
      }
      e.target.classList.remove('cross-item');
      e.target.classList.toggle('guess-item');

      let cellNo = Number(e.target.id) -1;
      let x = Math.floor(cellNo / ((game.level + 1) * 5));
      let y = cellNo - (x * ((game.level + 1) * 5));
      game.guesses[x][y] = e.target.classList.contains('guess-item') ? 1 : 0;
      game.guesses[x][y] === 1 ? checkSound.play() : uncheckSound.play();    
      const checkResult = checkUserGuess();
    }
  })
}

restartBTN.addEventListener('click', () => {
  restartGame();
})

function restartGame() {
  game.timerON = false;
  timerDisplay.textContent = '00:00';
  clearInterval(game.timer.id);
  game.timerON = false;
  nonoField.innerHTML = '';
  drawNonogram();
}

solutionBTN.addEventListener('click', () => {
  restartGame();
  showSolution();
})

function showSolution() {
  for (let i = 0; i < game.template.length; i++) {
    for (let j = 0; j < game.template.length; j++) {
      if(game.template[i][j] === 1) {
        const filledCell = document.getElementById(`${(i * (game.level + 1) * 5) + j + 1}`);
        filledCell.classList.add('guess-item');
      }
    }
  }  
}

function drawNonogram() {
  let nonoItemID = 1;
  game.guesses.length = 0;
  for (let i = 0; i < game.template.length + 1; i++) {
      if (i > 0) game.guesses.push(new Array(game.template.length).fill(0)); // generate empty user gueses array, skip first clue row
    for (let j = 0; j < game.template.length + 1; j++) {   
      const nonoItem = document.createElement('div');
      if (i === 0) {
        if (j === 0) {
          nonoItem.classList.add('empty');
        } else {
          nonoItem.classList.add('clue-top');
        }
      } else {
        if (j === 0) {
          nonoItem.classList.add('clue-left');
        } else {
          nonoItem.classList.add('cell');
          nonoItem.setAttribute('id',`${nonoItemID}`);
          nonoItemID++;
        }
      }
      nonoItem.classList.add('item');
      nonoField.append(nonoItem);
    }
  }
  const topClues = document.querySelectorAll('.clue-top');
  const leftClues = document.querySelectorAll('.clue-left');

  for (let i = 0; i < topClues.length; i++) {
    topClues[i].textContent = game.clueTop[i].join(' ');
    leftClues[i].textContent = game.clueLeft[i].join(' ');
  }
  
  // startGameSound.onload = () => {startGameSound.play();}

}

function loadTemplate() {
  switch(game.level) {
    case 0:
      game.template = [...easyTemplate[game.number].picture];
      game.clueTop = [...easyTemplate[game.number].clueTop];
      game.clueLeft = [...easyTemplate[game.number].clueLeft];
      game.name = easyTemplate[game.number].name;
      break;
    case 1:
      game.template = [...mediumTemplate[game.number].picture];
      game.clueTop = [...mediumTemplate[game.number].clueTop];
      game.clueLeft = [...mediumTemplate[game.number].clueLeft];
      game.name = mediumTemplate[game.number].name;
      break;
    case 2:
      game.template = [...hardTemplate[game.number].picture];
      game.clueTop = [...hardTemplate[game.number].clueTop];
      game.clueLeft = [...hardTemplate[game.number].clueLeft];
      game.name = hardTemplate[game.number].name;
      break;
  }
  return true;
}

function selectRandomGame(randomButtonPressed) {
  if(randomButtonPressed) game.level = randomChoice(3);
  game.number = randomChoice(5);

  function randomChoice(range) {
    return Math.round(Math.random() * range);
  }
}

function checkUserGuess() {
  const fieldSize = (game.level + 1) * 5;
  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < fieldSize; j++) {
      if (game.guesses[i][j] !== game.template[i][j]) return false;
    }
  }
  endGame();
  return true;
}

function startGameTimer() {
  let gameRunSec = 0;
  game.timer.id = setInterval(() => {
    const runMinutes = Math.floor(gameRunSec / 60);
    const runSeconds = gameRunSec % 60;
    let minStr = runMinutes.toString();
    let secStr = runSeconds.toString();
    minStr = minStr.length == 1 ? '0' + runMinutes : runMinutes;
    secStr = secStr.length == 1 ? '0' + runSeconds : runSeconds;
    timerDisplay.textContent = minStr + ':' + secStr;
    gameRunSec++;
  }, 1000)
}

function endGame() {
  showWinModal();
  saveResult();
  resetGame();
};

startGame();
