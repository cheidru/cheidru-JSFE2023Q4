const field = document.getElementById('play-ground-wrapper');
const startGameSound = document.getElementById('new-attampt-sound');
const checkSound = document.getElementById('check-sound');
const uncheckSound = document.getElementById('uncheck-sound');
const crossSound = document.getElementById('cross-out');
const winSound = document.getElementById('win-sound');
const divineSound = document.getElementById('win-sound-divine');
let nonoField = document.getElementById('play-ground-wrapper');

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
const gameTimeInd = document.getElementById('game-time');
const solutionOpenMessage = document.getElementById('solution-open');
const showResultsModal = document.getElementById('show-results');
const closeResultsModal = document.getElementById('result-times');
const noResultsToShow = document.getElementById('no-results');
const resultHeader = document.getElementById('result-header');

const settingsBTN = document.querySelector('.svg-setting-icon');
const settingMNU = document.getElementById('setting-menu');
const soundON = document.querySelector('.svg-volume-icon');
const soundOFF = document.querySelector('.svg-volume-off-icon');
const showSelectGameBTN = document.getElementById('select-mnu-game');
const showSelectThemeBTN = document.getElementById('select-mnu-theme');
const showResultsBTN = document.getElementById('show-mnu-results');
const closeSettingMnuBTN = document.getElementById('setting-menu-times');
const selectThemeModal = document.getElementById('select-theme');

const gameLevelDisplay = document.getElementById('stats-level');
const gameNameDisplay = document.getElementById('stats-name');

const lightColorTheme = document.getElementById('light-theme');
const darkColorTheme = document.getElementById('dark-theme');
const themeLink = document.getElementById('theme-css');
const closeThemeModal = document.getElementById('theme-times');

const NEW_GAME = false;
const RANDOM_GAME = true;
let user = {};

const game = {}
game.number = 0;
game.level = 0;
game.name = 'dog';
game.template = [];
game.clueTop = [];
game.clueLeft = [];
game.guesses = [];
game.timerON = false;
game.theme = 'light-theme';
game.timer = 0;

let timerID = '';
let timerTime = 0;
let choiceLVL = 0;
let solutionOpen = false;
let soundSwitchedOn = true;

function startGame(newOrRandom) {
  user = (loadUserData() || user);
  selectRandomGame(newOrRandom);
  loadTemplate();
  drawNonogram();
}

field.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('cell')) {
    e.target.classList.remove('guess-item');
    e.target.classList.toggle('cross-item');
    if (soundSwitchedOn) crossSound.play();
  }
})

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
    if (soundSwitchedOn) game.guesses[x][y] === 1 ? checkSound.play() : uncheckSound.play();
    checkUserGuess();
  }
})

soundON.addEventListener('click', () => {
  soundON.style.display = 'none';
  soundOFF.style.display = 'block';
  soundSwitchedOn = false;
})

soundOFF.addEventListener('click', () => {
  soundON.style.display = 'block';
  soundOFF.style.display = 'none';
  soundSwitchedOn = true;
})

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
    body.style.overflowY = 'visible';
  }, true)

  showSelectThemeBTN.addEventListener('click', () => {
    showSelectThemeModal();
  }, true)
  
  showResultsBTN.addEventListener('click', () => {
      settingMNU.style.display = 'none';
      showResultsModal.style.display = 'flex';
      if(user.lastResults.length > 0) {
        noResultsToShow.style.display = 'none';
        let headTabRow = document.createElement('tr');
        headTabRow.innerHTML = `<tr id="result-header" class='result-row'><th>#</th><th>Game title</th><th>Game Level</th><th>Time</th></tr>`
        showResultsTbody.append(headTabRow);
        
        for(let i = 0; i < user.lastResults.length; i++) {
          let tbRow = document.createElement('tr');
          tbRow.classList.add('result-row');
          tbRow.innerHTML = `<td>${(i + 1)}</td><td>${user.lastResults[i].name}</td><td>${user.lastResults[i].level + 1}</td>
          <td>${user.lastResults[i].time} sec</td>`;
          showResultsTbody.append(tbRow);
        }
      }
  })

  closeSettingMnuBTN.addEventListener('click', () => {
    powerLayer.style.display = 'none';
    settingMNU.style.display = 'none';
  }, true)
})

function showSelectGameModal() {
  settingMNU.style.display = 'none';
  selectGameModal.style.display = 'flex';
  body.style.overflowY = 'hidden';

  const levelBTN = document.getElementById('game-lvl-wrapper');

  levelBTN.addEventListener('click', loadTemplateChoice, true)

  const templates = document.getElementById('nono-wrapper');
  templates.addEventListener('click', updateGame, true)
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
      choiceLVL = 0;
      break;
    case 'medium':
      mediumLVL.classList.add('active');
      loadTemplPics(mediumTemplate);
      choiceLVL = 1;
      break;
    case 'hard':
      hardLVL.classList.add('active');
      loadTemplPics(hardTemplate);
      choiceLVL = 2;
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

function updateGame(e) {
  let parent = e.target.parentElement;
  if(parent.tagName === 'DIV' && parent.classList.contains('templ-wrapper')) {
    game.level = choiceLVL;
    game.number = parent.id[parent.id.length - 1] - 1;
    selectGameModal.style.display = 'none';
    body.style.overflowY = 'visible';
    powerLayer.style.display = 'none';
    body.style.setProperty("--templ-col-num", `${(game.level + 1) * 5}`); 
    restartGame();
  }

  if(e.target.classList.contains('templ-wrapper')) {
    game.level = choiceLVL;
    game.number = e.target.id[e.target.id.length - 1] - 1;
    selectGameModal.style.display = 'none';
    body.style.overflowY = 'visible';
    powerLayer.style.display = 'none';
    body.style.setProperty("--templ-col-num", `${(game.level + 1) * 5}`); 
    restartGame();
  }
}

function showSelectThemeModal() {
  settingMNU.style.display = 'none';
  selectThemeModal.style.display = 'flex';
}

lightColorTheme.addEventListener('click', () => {
  selectThemeModal.style.display = 'none';
  powerLayer.style.display = 'none';
  themeLink.setAttribute('href', './css/light-theme.css')
});

darkColorTheme.addEventListener('click', () => {
  selectThemeModal.style.display = 'none';
  powerLayer.style.display = 'none';
  themeLink.setAttribute('href', './css/dark-theme.css') 
});

closeThemeModal.addEventListener('click', () => {
  selectThemeModal.style.display = 'none';
  powerLayer.style.display = 'none';
  selectThemeModal.style.display = 'none';
})

closeResultsModal.addEventListener('click', () => {
  showResultsModal.style.display = 'none';
  powerLayer.style.display = 'none';
  noResultsToShow.style.display = 'block';
  showResultsTbody.innerHTML = '';
})

solutionBTN.addEventListener('mousedown', () => {
  clearInterval(timerID);
  showSolution();
})

solutionBTN.addEventListener('mouseup', () => {
  showSolution('guesses');
  if (game.timer > 0) startGameTimer(game.timer);
})

randomBTN.addEventListener('click', () => {
  resetGame();
})

saveBTN.addEventListener('click', () => {
  user.lastGame.number = game.number;
  user.lastGame.level = game.level;
  user.lastGame.guesses = game.guesses;
  user.lastGame.timer = timerTime;
  updateLocalStorageData();
})

lastGameBTN.addEventListener('click', () => {
  if (localStorage.getItem('nonograms') !== null) {
    user = JSON.parse(localStorage.getItem('nonograms'));
    game.level = user.lastGame.level;
    game.number = user.lastGame.number;
    game.guesses = user.lastGame.guesses;
    game.timer = user.lastGame.timer;

    clearGameSession();
    body.style.setProperty("--templ-col-num", `${(game.level + 1) * 5}`);
    loadTemplate();
    // drawNonogram();
    showSolution('guesses');
    startGameTimer(game.timer);
  }
})

function restartGame() {
  clearGameSession();
  loadTemplate();
  drawNonogram();
}

function clearGameSession() {
  game.timerON = false;
  timerDisplay.textContent = '00:00';
  clearInterval(timerID);
  let nonoField = document.getElementById('play-ground-wrapper');
  nonoField.innerHTML = '';
}

function showSolution(showWhat) {
  solutionOpen = true;
  let nonoField = document.getElementById('play-ground-wrapper');
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
      if(j === 6 || j === 11) nonoItem.classList.add('border-left');
      if(i === 6 || i === 11) nonoItem.classList.add('border-top');
      nonoField.append(nonoItem);
    }
  }
  const topClues = document.querySelectorAll('.clue-top');
  const leftClues = document.querySelectorAll('.clue-left');

  for (let i = 0; i < topClues.length; i++) {
    topClues[i].textContent = game.clueTop[i].join(' ');
    leftClues[i].textContent = game.clueLeft[i].join(' ');
  }

  gameLevelDisplay.textContent = (game.level + 1) + '';
  gameNameDisplay.textContent = game.name;
}

function loadTemplate() {
      game.template.length = 0;
      game.clueTop.length = 0;
      game.clueLeft.length = 0;
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
      body.style.setProperty("--templ-col-num", `${(game.level + 1) * 5}`); 
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
    game.timer = gameRunSec - 1;
    timerTime = gameRunSec - 1;
  }, 1000)
}

function endGame() {
  game.timerON = false;
  timerDisplay.textContent = '00:00';
  clearInterval(timerID);
  showWinModal();
  if(solutionOpen === false) {
    let newResult = {
      level: game.level,
      time: game.timer,
      name: game.name
    }
    user.lastResults.push(newResult);
    let reaultArr = [];
    user.lastResults.sort((x , y) => {
      if((y.level - x.level) < 0) return -1;
      if((y.level - x.level) > 0) return 1;
      return x.timer - y.timer;    
    });

    if (user.lastResults.length > 5) user.lastResults.splice(-1, 1); // Remove last result after sorting
  }

  updateLocalStorageData();
};

function showWinModal() {
  if(soundSwitchedOn) winSound.play();
  powerLayer.style.display = 'block';
  winModal.style.display = 'flex';
  gameTimeInd.textContent = timerTime + ' sec';
  if (solutionOpen === true) {
    solutionOpenMessage.style.display = 'block';
  } else {
    if(soundSwitchedOn) setTimeout(() => divineSound.play(), 1700);
  }
}

winModalClose.addEventListener('click', () => {
  powerLayer.style.display = 'none';
  winModal.style.display = 'none';
  solutionOpen = false;
  solutionOpenMessage.style.display = 'none';
  resetGame();
})

function resetGame() {
  clearGameSession();
  startGame(RANDOM_GAME);
}

function loadUserData() {
  // There's no 'nonograms' key in localStorage
  if (localStorage.getItem('nonograms') === null) {
    // Assign and save default user data
    user.lastGame = {};
    user.default = {};
    user.default.level = 0;
    user.default.name = 'dog';
    user.default.theme = 'light-theme';
    user.lastResults = [];
  } else {
    user = JSON.parse(localStorage.getItem('nonograms'));
    game.level = user.default.level;
    game.name = user.default.name;
    game.theme = user.default.theme;
    console.log('load user', user);
  }
}

function updateLocalStorageData() {
  // user.lastGame.level = game.level;
  // user.lastGame.number = game.number;
  // user.lastGame.name = game.name;
  // user.lastGame.guesses = [...game.guesses];
  // user.lastGame.time = game.timer;
 console.log('before saving', user);
  let updatedRecord = JSON.stringify(user)   
  localStorage.setItem('nonograms', updatedRecord);
}

startGame(NEW_GAME);
