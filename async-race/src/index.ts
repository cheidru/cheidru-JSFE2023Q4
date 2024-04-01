import './style.css';
import { createGarage, populateCarList } from './components/garage/garage';
import { carsInGarage, carListWrapper, updateGarageTitle } from './components/garage/garage-ui';

// import { createWinners } from './components/winners/winners';
import { garageBTN, winnersBTN, createCommonUI, prevPageBTN, nextPageBTN } from './components/common';

export let activeGaragePage = 1;
export let activeWinnersPage = 1;

console.log('app started');

createCommonUI();

garageBTN.setAttribute('disabled', '');
prevPageBTN.setAttribute('disabled', '');

createGarage();

winnersBTN.addEventListener('click', () => {
  garageBTN.removeAttribute('disabled');
  winnersBTN.setAttribute('disabled', '');
});

garageBTN.addEventListener('click', () => {
  winnersBTN.removeAttribute('disabled');
  garageBTN.setAttribute('disabled', '');
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
