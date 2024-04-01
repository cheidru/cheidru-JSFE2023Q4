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

console.log('app started');

createCommonUI();

garageBTN.setAttribute('disabled', '');
prevPageBTN.setAttribute('disabled', '');

createGarage();

winnersBTN.addEventListener('click', () => {
  console.log('winnersBTN pressed');
  activeView = WINNERS;
  garageBTN.removeAttribute('disabled');
  winnersBTN.setAttribute('disabled', '');
  createWinners();
  winnersContentWrapper.style.display = 'flex';
  garageContentWrapper.style.display = 'none';
});

garageBTN.addEventListener('click', () => {
  console.log('garageBTN pressed');
  activeView = GARAGE;
  garageBTN.setAttribute('disabled', '');
  winnersBTN.removeAttribute('disabled');
  winnersContentWrapper.style.display = 'none';
  garageContentWrapper.style.display = 'flex';
});

prevPageBTN.addEventListener('click', () => {
  activeGaragePage--;
  if (activeGaragePage === 1) prevPageBTN.setAttribute('disabled', '');
  if (activeGaragePage === Math.ceil(carsInGarage / 7) - 1) nextPageBTN.removeAttribute('disabled');
  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
});

nextPageBTN.addEventListener('click', () => {
  activeGaragePage++;
  console.log('activeGaragePage = ', activeGaragePage);
  if (activeGaragePage === 2) prevPageBTN.removeAttribute('disabled');
  if (activeGaragePage === Math.ceil(carsInGarage / 7)) nextPageBTN.setAttribute('disabled', '');
  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
});
