import './style.css';
import { createGarage, populateCarList } from './components/garage/garage';
import { carsInGarage, carListWrapper, updateGarageTitle } from './components/garage/garage-ui';

import { createWinners } from './components/winners/winners';
import { garageBTN, winnersBTN, createCommonUI, prevPageBTN, nextPageBTN } from './components/common';
import { winnersContentWrapper, garageContentWrapper } from './components/common';

export let activeGaragePage = 1;
export const activeWinnersPage = 1;
const GARAGE = 0;
const WINNERS = 1;
export let activeView = GARAGE;

createCommonUI();

garageBTN.setAttribute('disabled', '');
prevPageBTN.setAttribute('disabled', '');
nextPageBTN.setAttribute('disabled', '');

createGarage();
createWinners();

let garageNextPageState = 'disabled';
let garagePrevPageState = 'disabled';
const winnersNextPageState = 'disabled';
const winnersFirstPageState = 'disabled';

export function unlockgarageNextPage() {
  garageNextPageState = 'enabled';
  nextPageBTN.removeAttribute('disabled');
}

winnersBTN.addEventListener('click', () => {
  activeView = WINNERS;
  garageBTN.removeAttribute('disabled');
  winnersBTN.setAttribute('disabled', '');
  updateWinnerViewPageButtons('move in');
  winnersContentWrapper.style.display = 'flex';
  garageContentWrapper.style.display = 'none';
});

function updateWinnerViewPageButtons(action: string) {
  if (action === 'move in') {
    if (winnersNextPageState == 'disabled') nextPageBTN.setAttribute('disabled', '');
    // if (winnersNextPageState == 'enabled') nextPageBTN.removeAttribute('disabled');
    if (winnersFirstPageState == 'disabled') prevPageBTN.setAttribute('disabled', '');
    // if (winnersFirstPageState == 'enabled') prevPageBTN.removeAttribute('disabled');
  }
  if (action === 'move out') {
    if (garageNextPageState == 'disabled') nextPageBTN.setAttribute('disabled', '');
    if (garageNextPageState == 'enabled') nextPageBTN.removeAttribute('disabled');
    if (garagePrevPageState == 'disabled') prevPageBTN.setAttribute('disabled', '');
    if (garagePrevPageState == 'enabled') prevPageBTN.removeAttribute('disabled');
  }
}

garageBTN.addEventListener('click', () => {
  activeView = GARAGE;
  garageBTN.setAttribute('disabled', '');
  winnersBTN.removeAttribute('disabled');
  updateWinnerViewPageButtons('move out');
  winnersContentWrapper.style.display = 'none';
  garageContentWrapper.style.display = 'flex';
});

prevPageBTN.addEventListener('click', () => {
  activeGaragePage--;
  if (activeGaragePage === 1) {
    prevPageBTN.setAttribute('disabled', '');
    garagePrevPageState = 'disabled';
  }

  if (activeGaragePage === Math.ceil(carsInGarage / 7) - 1) {
    nextPageBTN.removeAttribute('disabled');
    garageNextPageState = 'enabled';
  }
  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
});

nextPageBTN.addEventListener('click', () => {
  activeGaragePage++;
  if (activeGaragePage === 2) {
    prevPageBTN.removeAttribute('disabled');
    garagePrevPageState = 'enabled';
  }

  if (activeGaragePage === Math.ceil(carsInGarage / 7)) {
    nextPageBTN.setAttribute('disabled', '');
    garageNextPageState = 'disabled';
  }

  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
});
