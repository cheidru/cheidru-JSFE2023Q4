import './style.css';
import { createGarage } from './components/garage/garage';
import { createWinners } from './components/winners/winners';
import { garageBTN, winnersBTN, createCommonUI, prevPageBTN, nextPageBTN } from './components/common';

console.log('app started');

createCommonUI();

garageBTN.setAttribute('disabled', '');
prevPageBTN.setAttribute('disabled', '');

createGarage();

winnersBTN.addEventListener('click', () => {
  garageBTN.removeAttribute('disabled');
  winnersBTN.setAttribute('disabled', '');
  createWinners();
});

garageBTN.addEventListener('click', () => {
  winnersBTN.removeAttribute('disabled');
  garageBTN.setAttribute('disabled', '');
  createGarage();
});

prevPageBTN.addEventListener('click', () => {
  nextPageBTN.removeAttribute('disabled');
  prevPageBTN.setAttribute('disabled', '');
  createGarage();
});

nextPageBTN.addEventListener('click', () => {
  prevPageBTN.removeAttribute('disabled');
  nextPageBTN.setAttribute('disabled', '');
  createGarage();
});
