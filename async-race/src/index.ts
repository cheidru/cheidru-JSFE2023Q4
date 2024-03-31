import './style.css';
import { createGarage } from './components/garage/garage';
// import { createWinners } from './components/winners/winners';
import { garageBTN, winnersBTN, createCommonUI, prevPageBTN, nextPageBTN } from './components/common';

export const activeGaragePage = 1;
// export let activeWinnersPage = 1;

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
  prevPageBTN.removeAttribute('disabled');
  nextPageBTN.setAttribute('disabled', '');
});
