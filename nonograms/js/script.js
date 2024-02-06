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

const body = document.querySelector('body');

const powerLayer = document.getElementById('power-layer');
const winModal = document.getElementById('win-window');
const winModalClose = document.getElementById('win-times');
const selectGameModal = document.getElementById('select-game');
const selectGameModalClose = document.getElementById('select-game-times');

const settingsBTN = document.getElementById('settings');
const settingMNU = document.getElementById('setting-menu');
const showSelectGameBTN = document.getElementById('select-mnu-game');
const showSelectThemeBTN = document.getElementById('select-mnu-theme');
const showResultsBTN = document.getElementById('show-mnu-results');
const closeSettingMnuBTN = document.getElementById('setting-menu-times');
const selectThemeModal = document.getElementById('select-theme');

const NEW_GAME = false;
const RANDOM_GAME = true;
let user = {};

const game = {}
game.number = 0;
game.level = 0;
game.name = '';
game.template = [];
game.clueTop = [];
game.clueLeft = [];
game.guesses = [];
game.timerON = false;
game.theme = 'light-theme';
game.timer = 0;
game.timer.id = '';

let timerID = '';

function startGame(newOrRandom) {
  user = (loadUserData() || user);
  selectRandomGame(newOrRandom);
  loadTemplate();
  drawNonogram();

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

settingsBTN.addEventListener('click', () => {  
  powerLayer.style.display = 'block';
  settingMNU.style.display = 'flex';

  showSelectGameBTN.addEventListener('click', () => {
    showSelectGameModal();
  }, true)

  selectGameModalClose.addEventListener('click', () => {
    powerLayer.style.display = 'none';
    selectGameModal.style.display = 'none';
  }, true)

  showSelectThemeBTN.addEventListener('click', () => {
    showSelectThemeModal();
  }, true)

  closeSettingMnuBTN.addEventListener('click', () => {
    powerLayer.style.display = 'none';
    closeSettingMNU()
  }, true)
})

function closeSettingMNU() {
  settingMNU.style.display = 'none';
}




function showSelectGameModal() {
  closeSettingMNU();
  selectGameModal.style.display = 'flex';

  const levelBTN = document.getElementById('game-lvl-wrapper');

  levelBTN.addEventListener('click', loadTemplateChoice(e),true)

  const templates = selectGameModal.getElementById('nono-wrapper');
  templates.addEventListener('click', updateGame(e), true)
}

function loadTemplateChoice(e) {  
  const easyLVL = document.getElementById('easy');
  const mediumLVL = document.getElementById('medium');
  const hardLVL = document.getElementById('hard');

  easyLVL.classList.remove('active');
  mediumLVL.classList.remove('active');
  hardLVL.classList.remove('active');

  switch(e.target.id) {
    case 'easy':
      easyLVL.classList.add('active');
      loadTemplPics(easyTemplate);
      break;
    case 'medium':
      mediumLVL.classList.add('active');
      loadTemplPics(mediumTemplate);
      break;
    case 'hard':
      hardLVL.classList.add('active');
      loadTemplPics(hardTemplate);
      break;
  }

  function loadTemplPics(templArr) {
    const teplateSet = document.querySelectorAll('.templ-wrapper');
    for(let i = 0; i < 5; i++) {
      const templText = teplateSet[i].querySelector('.templ-head');
      templText.textContent = templArr[i].name;
      const templIMG = teplateSet[i].querySelector('.templ-pic');
      templIMG.src = templArr[i].src;
    }
  }
}

function showSelectThemeModal() {
  closeSettingMNU();
  selectThemeModal.style.display = 'flex';
}

solutionBTN.addEventListener('mousedown', () => {
  // restartGame();
  clearInterval(timerID);
  showSolution();
})

solutionBTN.addEventListener('mouseup', () => {
  showSolution('guesses');
  if (game.timer > 0) startGameTimer(game.timer);
})

randomBTN.addEventListener('click', () => {
  // clearGameSession();
  // startGame(RANDOM_GAME);
  resetGame();
})

saveBTN.addEventListener('click', () => {
  updateLocalStorageData();
})

function restartGame() {
  clearGameSession();
  drawNonogram();
}

function clearGameSession() {
  game.timerON = false;
  timerDisplay.textContent = '00:00';
  clearInterval(game.timer.id);
  game.timerON = false;
  nonoField.innerHTML = '';
}

function showSolution(showWhat) {
  let showWhatArr = [];
  if (!showWhat) {
    nonoField.innerHTML = '';
    drawNonogram('keepGuesses')
    showWhatArr = [...game.template];
  } else {
    showWhatArr = [...game.guesses];
    nonoField.innerHTML = '';
    drawNonogram('keepGuesses');
  }
  for (let i = 0; i < showWhatArr.length; i++) {
    for (let j = 0; j < showWhatArr.length; j++) {
      if(showWhatArr[i][j] === 1) {
        const filledCell = document.getElementById(`${(i * (game.level + 1) * 5) + j + 1}`);
        filledCell.classList.add('guess-item');
      }
    }
  }  
}

function drawNonogram(keepGuesses) {
  let nonoItemID = 1;
  if(!keepGuesses) game.guesses.length = 0;
  for (let i = 0; i < game.template.length + 1; i++) {
      if (i > 0 && !keepGuesses) game.guesses.push(new Array(game.template.length).fill(0)); // generate empty user gueses array, skip first clue row
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

function selectRandomGame(randomGame) {
  const oldGameNumber = game.number;
  const oldGameLavel = game.level;
  while (game.number === oldGameNumber && game.level === oldGameLavel) {
    if(randomGame) {
      game.level = randomChoice(2);
      body.style.setProperty("--templ-col-num", `${(game.level +1) * 5}`); 
    }
    game.number = randomChoice(4);
  }

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

function startGameTimer(time) {  
  let gameRunSec = 1;
  if(time) gameRunSec = time;
  timerID = setInterval(() => {
    const runMinutes = Math.floor(gameRunSec / 60);
    const runSeconds = gameRunSec % 60;
    let minStr = runMinutes.toString();
    let secStr = runSeconds.toString();
    minStr = minStr.length == 1 ? '0' + runMinutes : runMinutes;
    secStr = secStr.length == 1 ? '0' + runSeconds : runSeconds;
    timerDisplay.textContent = minStr + ':' + secStr;
    gameRunSec++;
    game.timer = gameRunSec;
  }, 1000)
}

function endGame() {
  clearInterval(game.timer.id);
  showWinModal();
  saveResult();
  resetGame();
};

function showWinModal() {
  powerLayer.style.display = 'block';
  winModal.style.display = 'flex';
}

winModalClose.addEventListener('click', () => {
  powerLayer.style.display = 'none';
  winModal.style.display = 'none';
})

function resetGame() {
  clearGameSession();
  startGame(RANDOM_GAME);
}

function saveResult() {
  // ToDo user.bestResults
  updateLocalStorageData();
}

function loadUserData() {
  // There's no 'nonograms' key in localStorage
  if (localStorage.getItem('nonograms') === null) {
    // Assign and save default user data
    user.lastGame = {};
    user.default = {};
    user.default.level = 0;
    user.default.theme = 'light-theme';
    user.bestResults = [];
  } else {
    user = JSON.parse(localStorage.getItem('nonograms'));
    game.level = user.default.level;
    game.theme = user.default.theme;
    console.log(user);
  }
}

function updateLocalStorageData() {
  user.lastGame.level = game.level;
  user.lastGame.number = game.number;
  user.lastGame.name = game.name;
  user.lastGame.guesses = [...game.guesses];
  user.lastGame.time = game.timer;
 
  let updatedRecord = JSON.stringify(user)   
  localStorage.setItem('nonograms', updatedRecord);
}

startGame(NEW_GAME);
