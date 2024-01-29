const field = document.getElementById('play-ground-wrapper');

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
game.name = '';
game.template = [];
game.guesses = [];

function startGame() {
  selectRandomGame(NEW_GAME);
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
    }

  })
}

function drawNonogram() {
  switch(game.level) {
    case 0:
      game.template = easyTemplate[game.number].pictire;
      game.name = easyTemplate[game.number].name;
      break;
    case 1:
      game.template = mediumTemplate[game.number].pictire;
      game.name = easyTemplate[game.number].name;
      break;
    case 2:
      game.template = hardTemplate[game.number].pictire;
      game.name = easyTemplate[game.number].name;
      break;
  }

  const nonoField = document.getElementById('play-ground-wrapper');
  console.log('start drawing');
  let nonoItemID = 1;
  for (let i = 0; i < game.template.pictire.length + 1; i++) {
    for (let j = 0; j < game.template.pictire.length + 1; j++) {   
      const nonoItem = document.createElement('div');
      nonoItem.classList.add('item');
      if (i === 0) {
        if (j === 0) nonoItem.classList.add('empty');
        nonoItem.classList.add('clue-top');
      } else {
        if (j === 0) {
          nonoItem.classList.add('clue-left');
        } else {
          nonoItem.classList.add('cell');
          nonoItem.setAttribute('id',`${nonoItemID}`);
          nonoItemID++;
        }
      }
      nonoField.append(nonoItem);
    }
  }

  const topClues = document.querySelectorAll('.clue-top');
  const leftClues = document.querySelectorAll('.clue-left');

  for (let i = 0; i < game.template.clueTop.length; i++) {
    topClues[i + 1].textContent = game.template.clueTop[i].join(' ');
    leftClues[i].textContent = game.template.clueLeft[i].join(' ');
  }
}

function selectRandomGame(randomButtonPressed) {
  if(randomButtonPressed) game.level = randomChoice(3);
  game.number = randomChoice(5);

  function randomChoice(range) {
    return Math.round(Math.random() * range);
  }
}

startGame();
