import './style.css';
import { createGarage, populateCarList } from './components/garage/garage';
import { carsInGarage, carListWrapper } from './components/garage/garage-ui';

// import { createWinners } from './components/winners/winners';
import { garageBTN, winnersBTN, createCommonUI, prevPageBTN, nextPageBTN } from './components/common';

export let activeGaragePage = 1;
// export let activeWinnersPage = 1;

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
  nextPageBTN.removeAttribute('disabled');
  prevPageBTN.setAttribute('disabled', '');
});

nextPageBTN.addEventListener('click', () => {
  activeGaragePage++;
  console.log('activeGaragePage = ', activeGaragePage);
  if (activeGaragePage === 2) prevPageBTN.removeAttribute('disabled');
  if (activeGaragePage == Math.ceil(carsInGarage / 7)) nextPageBTN.setAttribute('disabled', '');
  carListWrapper.innerHTML = '';
  populateCarList();
});
