const checkAudio = document.createElement('audio');
checkAudio.setAttribute('src', './assets/audio/check.mp3');
checkAudio.setAttribute('id', 'check-sound');

const uncheckAudio = document.createElement('audio');
uncheckAudio.setAttribute('src', './assets/audio/uncheck.ogg');
uncheckAudio.setAttribute('id', 'uncheck-sound');

const crossOutAudio = document.createElement('audio');
crossOutAudio.setAttribute('src', './assets/audio/cross.mp3');
crossOutAudio.setAttribute('id', 'cross-out');

const winAudio = document.createElement('audio');
winAudio.setAttribute('src', './assets/audio/celebration.ogg');
winAudio.setAttribute('id', 'win-sound');

const winAudioDivine = document.createElement('audio');
winAudioDivine.setAttribute('src', './assets/audio/divine.ogg');
winAudioDivine.setAttribute('id', 'win-sound-divine');

const pwrLayer = document.createElement('div');
pwrLayer.setAttribute('id', 'power-layer');


const winWindow = document.createElement('div');
winWindow.setAttribute('id', 'win-window');
winWindow.classList.add('modal');

    const winWindowHeadingWrapper = document.createElement('div');
    winWindowHeadingWrapper.classList.add('heading-wrapper');

        const winTimes = document.createElement('div');
        winTimes.setAttribute('id', 'win-times');
        winTimes.classList.add('times');

    const congrats = document.createElement('p');
    congrats.textContent = 'Great! You have solved the nonogram! Your time is ';

        const gameTime = document.createElement('span');
        gameTime.setAttribute('id', 'game-time');

    const noRecordMSG = document.createElement('p');
    noRecordMSG.setAttribute('id', 'solution-open');
    noRecordMSG.textContent = "You opened solution while playing. Your result will not be recorder."

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
        easyGameLevel.classList.add('lvl-btn');
        easyGameLevel.classList.add('active');
        easyGameLevel.textContent = 'Easy';
        
        const mediumGameLevel = document.createElement('div');
        mediumGameLevel.setAttribute('id', 'medium');
        mediumGameLevel.classList.add('lvl-btn');
        mediumGameLevel.textContent = 'Medium';
        
        const hardGameLevel = document.createElement('div');
        hardGameLevel.setAttribute('id', 'hard');
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

            const templ3Name = document.createElement('p');
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

            
        const templ5 = document.createElement('div');
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
selectTheme.classList.add('modal');

    const selectThemeHeadingWrapper = document.createElement('div');
    selectThemeHeadingWrapper.classList.add('heading-wrapper');

        const selectThemeHeadingThemeTitle = document.createElement('div');
        selectThemeHeadingThemeTitle.setAttribute('id', 'theme-title');
        selectThemeHeadingThemeTitle.textContent = 'Click on the preferable theme';

        const selectThemeHeadingThemeTimes = document.createElement('div');
        selectThemeHeadingThemeTimes.setAttribute('id', 'theme-times');
        selectThemeHeadingThemeTimes.classList.add('times');

    const themesWrapper = document.createElement('div');
    themesWrapper.setAttribute('id', 'themes-wrapper');
        
        const lightTheme = document.createElement('div');
        lightTheme.setAttribute('id', 'light-theme');
        lightTheme.classList.add('theme-wrapper');

            const light = document.createElement('p');
            light.textContent = 'Light';

            const lightColorMixes = document.createElement('div');
            lightColorMixes.classList.add('color-mixes');

                const lightColorOne = document.createElement('div');
                lightColorOne.classList.add('color');
                lightColorOne.style.backgroundColor = 'rgb(116, 114, 100)';

                const lightColorTwo = document.createElement('div');
                lightColorTwo.classList.add('color');
                lightColorTwo.style.backgroundColor = 'rgb(221, 216, 176)';
                
                const lightColorThree = document.createElement('div');
                lightColorThree.classList.add('color');
                lightColorThree.style.backgroundColor = 'rgb(224, 204, 190)';
                
                const lightColorFour = document.createElement('div');
                lightColorFour.classList.add('color');
                lightColorFour.style.backgroundColor = 'rgb(210, 105, 30)';

        const darkTheme = document.createElement('div');
        darkTheme.setAttribute('id', 'dark-theme');
        darkTheme.classList.add('theme-wrapper');

            const dark = document.createElement('p');
            dark.textContent = 'Dark';

            const darkColorMixes = document.createElement('div');
            darkColorMixes.classList.add('color-mixes');

                const darkColorOne = document.createElement('div');
                darkColorOne.classList.add('color');
                darkColorOne.style.backgroundColor = 'rgb(128, 128, 128)';

                const darkColorTwo = document.createElement('div');
                darkColorTwo.classList.add('color');
                darkColorTwo.style.backgroundColor = 'rgb(48, 87, 104)';
                
                const darkColorThree = document.createElement('div');
                darkColorThree.classList.add('color');
                darkColorThree.style.backgroundColor = 'rgba(52, 67, 39, 0.7)';
                
                const darkColorFour = document.createElement('div');
                darkColorFour.classList.add('color');
                darkColorFour.style.backgroundColor = 'rgb(94, 48, 25)';

const showResults = document.createElement('div');
showResults.setAttribute('id', 'show-results'); 
showResults.classList.add('modal');

    const showResultsHeadingWrapper = document.createElement('div');
    showResultsHeadingWrapper.classList.add('heading-wrapper');

        const showResultsResultTitle = document.createElement('div');
        showResultsResultTitle.setAttribute('id', 'result-title');
        showResultsResultTitle.innerHTML = 'See five last results <br><span>sorted by level & time</span>';

        const showResultsTimes = document.createElement('div');
        showResultsTimes.setAttribute('id', 'theme-times');
        showResultsTimes.classList.add('times');

    const showResultsNoResults = document.createElement('p');
    showResultsNoResults.setAttribute('id', 'no-results');
    showResultsNoResults.textContent = 'No results saved';

    const showResultsTable = document.createElement('table');
    showResultsTable.innerHTML = `
                <tr id="result-teader">
                    <th>#</th><th>Game title</th><th>Gale Level</th><th>Time</th>
                </tr>
                <tr id="place-1">
                    <td>1</td><td>ambulance</td><td>3</td><td>02:35</td>
                </tr>`;

const showWarning = document.createElement('div');
showWarning.setAttribute('id', 'warning'); 
showWarning.classList.add('modal');

    const showWarningHeadingWrapper = document.createElement('div');
    showWarningHeadingWrapper.classList.add('heading-wrapper');

        const showWarningHeadingTimes = document.createElement('div');
        showWarningHeadingTimes.setAttribute('id', 'warning-times'); 
        showWarningHeadingTimes.classList.add('times');

    const showWarningHeadingText = document.createElement('p');
    showWarningHeadingText.textContent = 'If you click Solution button to show the puzzle, your result will not be saved';

const header = document.createElement('header');

    const headerTitle = document.createElement('div');
    headerTitle.setAttribute('id', 'title');
    headerTitle.textContent = 'Nonograms Game';

    const headerGameStats = document.createElement('div');
    headerGameStats.setAttribute('id', 'game-stats');
    
        const headerGameLevel = document.createElement('div');
        headerGameLevel.setAttribute('id', 'game-level');
        headerGameLevel.classList.add('stats');

            const headerGameLevelText = document.createElement('p');
            headerGameLevelText.textContent = 'Level';

            const headerGameLevelValue = document.createElement('div');
            headerGameLevelValue.setAttribute('id', 'stats-level');
            headerGameLevelValue.classList.add('stat-value');
            headerGameLevelValue.textContent = '1';

                
        const headerGameName = document.createElement('div');
        headerGameName.setAttribute('id', 'game-name');
        headerGameName.classList.add('stats');

            const headerGameNameText = document.createElement('p');
            headerGameNameText.textContent = 'Name';

            const headerGameNameValue = document.createElement('div');
            headerGameNameValue.setAttribute('id', 'stats-name');
            headerGameNameValue.classList.add('stat-value');
            headerGameNameValue.textContent = 'dog';

        const settingsWrapper = document.createElement('div');
        settingsWrapper.setAttribute('id', 'settings-wrapper');

            const settings = document.createElement('div');
            settings.setAttribute('id', 'settings');
            settings.innerHTML = `
                <p>Settings</p>
                <svg width="800px" class="svg-setting-icon" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"/>
                </svg>

                <svg width="800px" class="svg-volume-icon" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.00009C18.6277 9.83575 18.9996 10.8745 18.9996 12.0001C18.9996 13.1257 18.6277 14.1644 18 15.0001M6.6 9.00009H7.5012C8.05213 9.00009 8.32759 9.00009 8.58285 8.93141C8.80903 8.87056 9.02275 8.77046 9.21429 8.63566C9.43047 8.48353 9.60681 8.27191 9.95951 7.84868L12.5854 4.69758C13.0211 4.17476 13.2389 3.91335 13.4292 3.88614C13.594 3.86258 13.7597 3.92258 13.8712 4.04617C14 4.18889 14 4.52917 14 5.20973V18.7904C14 19.471 14 19.8113 13.8712 19.954C13.7597 20.0776 13.594 20.1376 13.4292 20.114C13.239 20.0868 13.0211 19.8254 12.5854 19.3026L9.95951 16.1515C9.60681 15.7283 9.43047 15.5166 9.21429 15.3645C9.02275 15.2297 8.80903 15.1296 8.58285 15.0688C8.32759 15.0001 8.05213 15.0001 7.5012 15.0001H6.6C6.03995 15.0001 5.75992 15.0001 5.54601 14.8911C5.35785 14.7952 5.20487 14.6422 5.10899 14.4541C5 14.2402 5 13.9601 5 13.4001V10.6001C5 10.04 5 9.76001 5.10899 9.54609C5.20487 9.35793 5.35785 9.20495 5.54601 9.10908C5.75992 9.00009 6.03995 9.00009 6.6 9.00009Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg width="800px" class="svg-volume-off-icon" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`

        const settingsMenu = document.createElement('div');
        settingsMenu.setAttribute('id', 'setting-menu');

            const settingsMenuTimes = document.createElement('div');
            settingsMenuTimes.setAttribute('id', 'setting-menu-times');

            const settingsMenuUL = document.createElement('ul');

                const settingsMenuLiOne = document.createElement('li');
                settingsMenuLiOne.setAttribute('id', 'select-mnu-game');
                settingsMenuLiOne.innerHTML = `Game<br>Selection`;
                
                const settingsMenuLiTwo = document.createElement('li');
                settingsMenuLiTwo.setAttribute('id', 'select-mnu-theme');
                settingsMenuLiTwo.textContent = 'Theme';
                
                const settingsMenuLiThree = document.createElement('li');
                settingsMenuLiThree.setAttribute('id', 'select-mnu-game');
                settingsMenuLiThree.textContent = 'Results';

const main = document.createElement('main');

    const topControlsWrapper = document.createElement('div');
    topControlsWrapper.setAttribute('id', 'top-controls-wrapper');

        const topControlsWrapperRandomBTN = document.createElement('button');
        topControlsWrapperRandomBTN.setAttribute('id', 'random');
        topControlsWrapperRandomBTN.textContent = 'Random game';
        
        const topControlsWrapperRestarBTN = document.createElement('button');
        topControlsWrapperRestarBTN.setAttribute('id', 'restart');
        topControlsWrapperRestarBTN.textContent = 'Restart';
        
        const topControlsWrapperSaveBTN = document.createElement('button');
        topControlsWrapperSaveBTN.setAttribute('id', 'save');
        topControlsWrapperSaveBTN.textContent = 'Save';

    const playGroundWrapper = document.createElement('div');
    playGroundWrapper.setAttribute('id', 'play-ground-wrapper');

    const bottomControlsWrapper = document.createElement('div');
    bottomControlsWrapper.setAttribute('id', 'bottom-controls-wrapper');
            
        const bottomControlsTimer = document.createElement('button');
        bottomControlsTimer.setAttribute('id', 'timer');
        bottomControlsTimer.textContent = '00:00';
                    
        const bottomControlsSolution = document.createElement('button');
        bottomControlsSolution.setAttribute('id', 'solution');
        bottomControlsSolution.textContent = 'Solution';
                    
        const bottomControlsLastGame = document.createElement('button');
        bottomControlsLastGame.setAttribute('id', 'last-game');
        bottomControlsLastGame.textContent = 'Continue last game';

document.body.append(checkAudio);
document.body.append(uncheckAudio);
document.body.append(crossOutAudio);
document.body.append(winAudio);
document.body.append(winAudioDivine);

document.body.append(pwrLayer);

document.body.append(winWindow);
    winWindow.append(winWindowHeadingWrapper);
        winWindowHeadingWrapper.append(winTimes);
    winWindow.append(congrats);
    congrats.append(gameTime);
    winWindow.append(noRecordMSG);

document.body.append(selectGame);
    selectGame.append(selectGameHeadingWrapper);
        selectGameHeadingWrapper.append(selectGameHeading);
        selectGameHeadingWrapper.append(selectGameTimes);

    selectGame.append(gameLevelWrapper);
        gameLevelWrapper.append(easyGameLevel);
        gameLevelWrapper.append(mediumGameLevel);
        gameLevelWrapper.append(hardGameLevel);

    selectGame.append(nonoWrapper);
        nonoWrapper.append(templ1);
            templ1.append(templ1Name);
            templ1.append(templ1Pic);

        nonoWrapper.append(templ2);
            templ2.append(templ2Name);
            templ2.append(templ2Pic);
            
        nonoWrapper.append(templ3);
            templ3.append(templ3Name);
            templ3.append(templ3Pic);
        
        nonoWrapper.append(templ4);
            templ4.append(templ4Name);
            templ4.append(templ4Pic);
            
        nonoWrapper.append(templ5);
            templ5.append(templ5Name);
            templ5.append(templ5Pic);
            
document.body.append(selectTheme);
    selectTheme.append(selectThemeHeadingWrapper);
        selectThemeHeadingWrapper.append(selectThemeHeadingThemeTitle);
        selectThemeHeadingWrapper.append(selectThemeHeadingThemeTimes);

    selectTheme.append(themesWrapper);
        themesWrapper.append(lightTheme);
            lightTheme.append(light);
            lightTheme.append(lightColorMixes);
                lightColorMixes.append(lightColorOne);
                lightColorMixes.append(lightColorTwo);
                lightColorMixes.append(lightColorThree);
                lightColorMixes.append(lightColorFour);

        themesWrapper.append(darkTheme);
            darkTheme.append(dark);
            darkTheme.append(darkColorMixes);
                darkColorMixes.append(darkColorOne);
                darkColorMixes.append(darkColorTwo);
                darkColorMixes.append(darkColorThree);
                darkColorMixes.append(darkColorFour);

document.body.append(showResults);
    showResults.append(showResultsHeadingWrapper);
        showResultsHeadingWrapper.append(showResultsResultTitle);
    showResults.append(showResultsNoResults);
    showResults.append(showResultsTable);

document.body.append(showWarning);
    showWarning.append(showWarningHeadingWrapper);
        showWarningHeadingWrapper.append(showWarningHeadingTimes);
    showWarning.append(showWarningHeadingText);

document.body.append(header);
    header.append(headerTitle);
    header.append(headerGameStats);
        headerGameStats.append(headerGameLevel);
            headerGameLevel.append(headerGameLevelText);
            headerGameLevel.append(headerGameLevelValue);

        headerGameStats.append(headerGameName);
            headerGameName.append(headerGameNameText);
            headerGameName.append(headerGameNameValue);

    header.append(settingsWrapper);
        settingsWrapper.append(settings);
        settingsWrapper.append(settingsMenu);
            settingsMenu.append(settingsMenuTimes);
            settingsMenu.append(settingsMenuUL);
                settingsMenuUL.append(settingsMenuLiOne);
                settingsMenuUL.append(settingsMenuLiTwo);
                settingsMenuUL.append(settingsMenuLiThree);

document.body.append(main);
    main.append(topControlsWrapper);
        topControlsWrapper.append(topControlsWrapperRandomBTN);
        topControlsWrapper.append(topControlsWrapperRestarBTN);
        topControlsWrapper.append(topControlsWrapperSaveBTN);

    main.append(playGroundWrapper);

    main.append(bottomControlsWrapper);
        bottomControlsWrapper.append(bottomControlsTimer);
        bottomControlsWrapper.append(bottomControlsSolution);
        bottomControlsWrapper.append(bottomControlsLastGame);

