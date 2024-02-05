const checkAudio = document.createElement('audio');
checkAudio.setAttribute('src', './assets/audio/check.mp3');
checkAudio.setAttribute('id', 'check-sound');

const uncheckAudio = document.createElement('audio');
uncheckAudio.setAttribute('src', './assets/audio/uncheck.ogg');
uncheckAudio.setAttribute('id', 'uncheck-sound');

const powerLayer = document.createElement('div');
powerLayer.setAttribute('id', 'power-layer');


const winWindow = document.createElement('div');
winWindow.setAttribute('id', 'win-window');
winWindow.classList.add('modal');

    const winWindowHeadingWrapper = document.createElement('div');
    winWindowHeadingWrapper.classList.add('heading-wrapper');

        const winTimes = document.createElement('div');
        winTimes.setAttribute('id', 'win-times');
        winWindow.classList.add('times');

    const congrats = document.createElement('p');
    congrats.textContent = 'Congratulations! You win! Your time is ';

        const gameTime = document.createElement('span');

const selectGame = document.createElement('div');
selectGame.setAttribute('id', 'select-game');
selectGame.classList.add('modal');

    const selectGameHeadingWrapper = document.createElement('div');
    selectGameHeadingWrapper.classList.add('heading-wrapper');

        const selectGameHeading = document.createElement('p');
        selectGameHeading.setAttribute('id', 'heading');
        selectGameHeading.textContent = 'Click picture to select the game';

        const selectGameTimes = document.createElement('div');
        selectGameTimes.setAttribute('id', 'select-game-times');
        selectGameTimes.classList.add('times');

    const gameLevelWrapper = document.createElement('div');
    gameLevelWrapper.setAttribute('id', 'game-lvl-wrapper');

        const easyGameLevel = document.createElement('div');
        easyGameLevel.setAttribute('id', 'easy');
        easyGameLevel.classList.add('lvl-btn active');
        easyGameLevel.textContent = 'Easy';
        
        const mediumGameLevel = document.createElement('div');
        mediumGameLevel.setAttribute('id', 'medium');
        mediumGameLevel.classList.add('lvl-btn');
        mediumGameLevel.textContent = 'Medium';
        
        const hardGameLevel = document.createElement('div');
        hardGameLevel.setAttribute('id', 'easy');
        hardGameLevel.classList.add('lvl-btn');
        hardGameLevel.textContent = 'Hard';

    const nonoWrapper = document.createElement('div');
    nonoWrapper.setAttribute('id', 'nono-wrapper');

        const templ1 = document.createElement('div');
        templ1.setAttribute('id', 'templ-1');
        templ1.classList.add('templ-wrapper');

            const templ1Name = document.createElement('p');
            templ1Name.classList.add('templ-head');
            templ1Name.textContent = 'dog';

            const templ1Pic = document.createElement('img');
            templ1Pic.classList.add('templ-pic');
            templ1Pic.setAttribute('src', './assets/img/easy-dog.png');
            templ1Pic.setAttribute('alt', 'dog-template');

            
        const templ2 = document.createElement('div');
        templ2.setAttribute('id', 'templ-2');
        templ2.classList.add('templ-wrapper');

            const templ2Name = document.createElement('p');
            templ2Name.classList.add('templ-head');
            templ2Name.textContent = 'flag';

            const templ2Pic = document.createElement('img');
            templ2Pic.classList.add('templ-pic');
            templ2Pic.setAttribute('src', './assets/img/easy-flag.png');
            templ2Pic.setAttribute('alt', 'flag-template');

            
        const templ3 = document.createElement('div');
        templ3.setAttribute('id', 'templ-3');
        templ3.classList.add('templ-wrapper');

            const temp31Name = document.createElement('p');
            templ3Name.classList.add('templ-head');
            templ3Name.textContent = 'tower';

            const templ3Pic = document.createElement('img');
            templ3Pic.classList.add('templ-pic');
            templ3Pic.setAttribute('src', './assets/img/easy-tower.png');            
            templ3Pic.setAttribute('alt', 'tower-template');
            
        const templ4 = document.createElement('div');
        templ4.setAttribute('id', 'templ-4');
        templ4.classList.add('templ-wrapper');

            const templ4Name = document.createElement('p');
            templ4Name.classList.add('templ-head');
            templ4Name.textContent = 'rune';

            const templ4Pic = document.createElement('img');
            templ4Pic.classList.add('templ-pic');
            templ4Pic.setAttribute('src', './assets/img/easy-rune.png');
            templ4Pic.setAttribute('alt', 'rune-template');

            
        const temp15 = document.createElement('div');
        templ5.setAttribute('id', 'templ-5');
        templ5.classList.add('templ-wrapper');

            const templ5Name = document.createElement('p');
            templ5Name.classList.add('templ-head');
            templ5Name.textContent = 'tree';

            const templ5Pic = document.createElement('img');
            templ5Pic.classList.add('templ-pic');
            templ5Pic.setAttribute('src', './assets/img/easy-tree.png');
            templ5Pic.setAttribute('alt', 'tree-template');

const selectTheme = document.createElement('div');
selectTheme.setAttribute('id', 'select-theme');
templ5Pic.classList.add('modal');

    const selectThemeHeadingWrapper = document.createElement('div');
    selectThemeHeadingWrapper.classList.add('heading-wrapper');

        const selectThemeHeadingThemeTitle = document.createElement('div');
        selectThemeHeadingThemeTitle.setAttribute('id', 'theme-title');
        selectThemeHeadingThemeTitle.textContent = 'Click on the preferable theme';

        const selectThemeHeadingThemeTimes = document.createElement('div');
        selectThemeHeadingThemeTitle.setAttribute('id', 'heme-times');
        selectThemeHeadingThemeTitle.classList.add('times');
            
//     <div id="select-theme" class="modal">
//         <div class="heading-wrapper">
//             <div id="theme-title">Click on the preferable theme</div>
//             <div id="theme-times" class="times"></div>
//         </div>
        
//         <div id="themes-wrapper">
//             <div id="light-theme" class="theme-wrapper">
//                 <p>Ligth</p>
//                 <div class="color-mixes">
//                     <div class="color" style="background-color: rgb(116, 114, 100);"></div>
//                     <div class="color" style="background-color: rgb(221, 216, 176);"></div>
//                     <div class="color" style="background-color: rgb(224, 204, 190);"></div>
//                     <div class="color" style="background-color: rgb(210, 105, 30);"></div>
//                 </div>
//             </div>
//             <div id="dark-theme" class="theme-wrapper">
//                 <p>Dark</p>
//                 <div class="color-mixes">
//                     <div class="color" style="background-color: rgb(128, 128, 128);"></div>
//                     <div class="color" style="background-color: rgb(48, 87, 104);"></div>
//                     <div class="color" style="background-color: rgba(52, 67, 39, 0.7);"></div>
//                     <div class="color" style="background-color: rgb(94, 48, 25);"></div>
//                 </div>
//             </div>
//         </div>
//     </div>


















//     <div id="win-window" class="modal">        
//         <div class="heading-wrapper">
//             <div id="win-times" class="times"></div>
//         </div>
//         <p>Congratulations! You win! Your time is <span id="game-time"></span></p>        
//     </div>
//     <div id="select-game" class="modal">
//         <div class="heading-wrapper">
//             <p id="heading">Click picture to select the game</p>
//             <div id="select-game-times" class="times"></div>
//         </div>
//         <div id="game-lvl-wrapper">
//             <div id="easy" class="lvl-btn active">Easy</div>
//             <div id="medium" class="lvl-btn">Medium</div>
//             <div id="hard" class="lvl-btn">Hard</div>
//         </div>
//         <div id="nono-wrapper">
//             <div id="templ-1" class="templ-wrapper">
//                 <p class="templ-head">dog</p>
//                 <img src="./assets/img/easy-dog.png" class="templ-pic" alt="dog-template"></img>
//             </div>
//             <div id="templ-2" class="templ-wrapper">
//                 <p class="templ-head">flag</p>
//                 <img src="./assets/img/easy-flag.png" class="templ-pic" alt="flag-template"></img>
//             </div>
//             <div id="templ-3" class="templ-wrapper">
//                 <p class="templ-head">tower</p>
//                 <img src="./assets/img/easy-tower.png" class="templ-pic" alt="tower-template"></img>
//             </div>
//             <div id="templ-4" class="templ-wrapper">
//                 <p class="templ-head">rune</p>
//                 <img src="./assets/img/easy-rune.png" class="templ-pic" alt="rune-template"></img>
//             </div>
//             <div id="templ-5" class="templ-wrapper">
//                 <p class="templ-head">tree</p>
//                 <img src="./assets/img/easy-tree.png" class="templ-pic" alt="tree-template"></img>
//             </div>
//         </div>
//     </div>




//     <div id="select-theme" class="modal">
//         <div class="heading-wrapper">
//             <div id="theme-title">Click on the preferable theme</div><div id="theme-times" class="times"></div>
//         </div>
        
//         <div id="themes-wrapper">
//             <div id="light-theme" class="theme-wrapper">
//                 <p>Ligth</p>
//                 <div class="color-mixes">
//                     <div class="color" style="background-color: rgb(116, 114, 100);"></div>
//                     <div class="color" style="background-color: rgb(221, 216, 176);"></div>
//                     <div class="color" style="background-color: rgb(224, 204, 190);"></div>
//                     <div class="color" style="background-color: rgb(210, 105, 30);"></div>
//                 </div>
//             </div>
//             <div id="dark-theme" class="theme-wrapper">
//                 <p>Dark</p>
//                 <div class="color-mixes">
//                     <div class="color" style="background-color: rgb(128, 128, 128);"></div>
//                     <div class="color" style="background-color: rgb(48, 87, 104);"></div>
//                     <div class="color" style="background-color: rgba(52, 67, 39, 0.7);"></div>
//                     <div class="color" style="background-color: rgb(94, 48, 25);"></div>
//                 </div>
//             </div>
//         </div>
//     </div>







//     <div id="show-results" class="modal">
//         <div class="heading-wrapper">
//             <div id="result-title">See five last results <br><span>sorted by level & time</span></div><div id="theme-times" class="times"></div>
//         </div>

//         <p id="no-results">No results saved</p>

//         <table>
//             <tr id="result-teader">
//                 <th>#</th><th>Game title</th><th>Gale Level</th><th>Time</th>
//             </tr>
//             <tr id="place-1">
//                 <td>1</td><td>ambulance</td><td>3</td><td>02:35</td>
//             </tr>
//         </table>
//     </div>

//     <div id="warning" class="modal">
//         <div class="heading-wrapper">
//             <div id="warning-times" class="times"></div>
//         </div>
//         <p>If you click Solution button to show the puzzle, your result will not be saved</p>
//     </div>


//     <header>
//         <div id="title">Nonograms Game</div>

//         <div id="game-stats">
//             <div id="game-level" class="stats">
//                 <p>Game Level</p>
//                 <div id="stats-level" class="stat-value">1</div>
//             </div>
//             <div id="game-name" class="stats">
//                 <p>Name</p>
//                 <div id="stats-name" class="stat-value">dog</div>
//             </div>
//         </div>

//         <div id="settings-wrapper">
//             <div id="settings">
//                 <p>Settings</p>
//                 <svg width="800px" class="svg-setting-icon" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"/>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"/>
//                 </svg>
//             </div>
            
//             <div id="setting-menu">
//                 <div id="setting-menu-times"></div>
//                 <ul>
//                     <li id="select-mnu-game">Game<br>Selection</li>
//                     <li id="select-mnu-theme">Theme</li>
//                     <li is="show-mnu-results">Results</li>
//                 </ul>
//             </div>
//         </div>
//     </header>

//     <main>
//         <div id="top-controls-wrapper">
//             <button id="random">Random game</button>
//             <button id="restart">Restart</button>
//             <button id="save-game">Save</button>
//         </div>
//         <div id="play-ground-wrapper">
//         </div>
//         <div id="bottom-controls-wrapper">
//             <button id="timer">00:00</button>
//             <button id="solution">
//                 <p>Solution</p>
//                 <svg width="800px" height="800px" class="svg-timer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" fill="#080341"/>
//                 </svg>
//             </button>
//             <button id="last-game">Continue last game</button>
//         </div>
//     </main>
//     <footer></footer>