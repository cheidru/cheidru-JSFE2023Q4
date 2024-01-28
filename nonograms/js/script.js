const field = document.getElementById('play-ground-wrapper');

const game = {}
game.difficulty = 0;
game.template = {};

function gameStart() {
  readTemplate();

  field.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('cell')) {
      console.log('right-click');
      e.target.classList.remove('guess-item');
      e.target.classList.toggle('cross-item');
      console.log('right-click', e.target.classList);
    }
  });

  field.addEventListener('click', (e) => {
    if(e.target.classList.contains('cell')) {
      e.target.classList.remove('cross-item');
      e.target.classList.toggle('guess-item');
      console.log('left-click', e.target.classList);
    }

  })
}

function readTemplate() {
  if (game.difficulty === 0) game.template = easyTemplate[0];
  const topClues = document.querySelectorAll('.clue-top');
  const leftClues = document.querySelectorAll('.clue-left');

  for (let i = 0; i < game.template.clueTop.length; i++) {
    topClues[i + 1].textContent = game.template.clueTop[i].join(' ');
    leftClues[i].textContent = game.template.clueLeft[i].join(' ');
  }
}

gameStart();
