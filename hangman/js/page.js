document.body.innerHTML = `
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
            <div id="b">B</div>
            <div id="c">C</div>
            <div id="d">D</div>
            <div id="e">E</div>
            <div id="f">F</div>
            <div id="g">G</div>
            <div id="h">H</div>
            <div id="i">I</div>
            <div id="j">J</div>
            <div id="k">K</div>
            <div id="l">L</div>
            <div id="m">M</div>
            <div id="n">N</div>
            <div id="o">O</div>
            <div id="p">P</div>
            <div id="q">Q</div>
            <div id="r">R</div>
            <div id="s">S</div>
            <div id="t">T</div>
            <div id="u">U</div>
            <div id="v">V</div>
            <div id="w">W</div>
            <div id="x">X</div>
            <div id="y">Y</div>
            <div id="z">Z</div>
            </div>
        </div>
    </div>
</main>`;