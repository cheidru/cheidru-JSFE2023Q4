import { createCommonUI, winnersContentWrapper } from '../common';
import { getWinners, getWinnersNumber } from '../../api/api';
import { activeWinnersPage } from '../../index';

export const winnersListWrapper = document.createElement('div');
export let winnersListed: number;
const winnersTitle = document.createElement('div');
const winnersPageNum = document.createElement('div');
const winnerListWrapper = document.createElement('div');

export function createWinners() {
  createCommonUI();
  createWinnersUI();
}

function createWinnersUI() {
  createWinnersTitle();
  createWinnersList();
}

function createWinnersTitle() {
  const winnerTitleWrapper = document.createElement('div');
  winnerTitleWrapper.classList.add('title-wrapper');
  winnersContentWrapper.append(winnerTitleWrapper);

  winnersTitle.setAttribute('id', 'winners-title');
  winnersTitle.classList.add('stage-title');

  winnerTitleWrapper.append(winnersTitle);

  winnersPageNum.setAttribute('id', 'winners-page');
  winnersPageNum.classList.add('page-num-title');
  winnersPageNum.textContent = 'Page #1';
  winnerTitleWrapper.append(winnersPageNum);

  updateWinnersTitle();

  winnersListWrapper.setAttribute('id', 'winners-list');
  winnersContentWrapper.append(winnersListWrapper);

}

export function updateWinnersTitle() {
  getWinnersNumber()
    .then((data) => data.headers.get('x-total-count'))
    .then((data) => {
      winnersListed = Number(data);
      console.log('winnersListed = ', winnersListed);
      winnersTitle.textContent = `Winners (${winnersListed})`;
    });
  winnersPageNum.textContent = `Page ${activeWinnersPage}`;
}

function createWinnersList() {

}

export function populateWinnersList() {
  getWinners()
    .then((data) => data.json())
    .then((data) => {
      console.log('populateWinnersList data = ', data);
      // createCars(data);
    });
}