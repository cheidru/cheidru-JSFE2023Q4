const powerLayer = document.createElement('div');
const modal = document.createElement('div');
const modalCongrat = document.createElement('p');
const modalWord = document.createElement('p');
const modalButton = document.createElement('button');
const main = document.createElement('main');
const gameTitle = document.createElement('h1');
const puzzleWrapper = document.createElement('div');
const gallowsWrapper = document.createElement('div');
const img = document.createElement('img');
const quizWrapper = document.createElement('div');
const quizWord = document.createElement('div');
const quizQuestion = document.createElement('div');
const quizCounterWrapper = document.createElement('div');
const quizCounterText = document.createElement('div');
const quizCounter = document.createElement('div');
const keyboard = document.createElement('div');
const button = document.createElement('div');

powerLayer.className = "hidden-modal";
powerLayer.setAttribute("id", "power-layer")
modal.className = "hidden-modal";





/* 
<div id="power-layer" class="hidden-modal"></div>
<div id="modal" class="hidden-modal">
    <p id="modal-congrat"></p>
    <p id="modal-word"></p>
    <button>Try again?</button>
</div>

<main>
    <h1>Hangman Game</h1>
    <div id="puzzle-wrapper">
        <div id="gallows-wrapper">
            <img src="./assets/pic/gallows.svg" id="gallows-img" alt="gallows picture">
        </div>

        <div id="quiz-wrapper">
            <div id="quiz-word">_ _ _ _ _ _</div>
            <div id="quiz-question">Test your guessing skill</div>
            <div id="quiz-counter-wrapper">
                <div id="quiz-counter-text">Your attempts :</div>
                <div id="quiz-counter">0 / 6</div>
            </div>
            <div id="keyboard">
                <div id="a">A</div>
            </div>
        </div>
    </div>

</main> */