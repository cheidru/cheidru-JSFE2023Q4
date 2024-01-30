const field = document.getElementById('play-ground-wrapper');
const templScript = document.getElementById('templates');

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

function startGame() {
  selectRandomGame(NEW_GAME);
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
      e.target.classList.remove('cross-item');
      e.target.classList.toggle('guess-item');

      // check cell backgound color to change user guesses array
      let cellNo = Number(e.target.id) -1;
      let x = Math.floor(cellNo / ((game.level + 1) * 5));
      let y = cellNo - (x * ((game.level + 1) * 5));
      game.guesses[x][y] = e.target.classList.contains('guess-item') ? 1 : 0;
      console.log(x, y, game.guesses, game.template);
      const checkResult = checkUserGuess();
      console.log(checkResult);
    }
  })
}

function drawNonogram() {
  const nonoField = document.getElementById('play-ground-wrapper');
  let nonoItemID = 1;
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

function endGame() {};

startGame();
