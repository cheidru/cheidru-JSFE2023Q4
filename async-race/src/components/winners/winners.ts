import { createCommonUI, winnersContentWrapper } from '../common';
import { getWinners, getWinnersNumber } from '../../api/api';
import { activeWinnersPage } from '../../index';

export const winnersListWrapper = document.createElement('div');
export let winnersListed: number;
const winnersTitle = document.createElement('div');
const winnersPageNum = document.createElement('div');
const winnerList = document.createElement('table');

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
  createWinnersTable();
  populateWinnersList();
}

function createWinnersTable() {
  winnerList.setAttribute('id', 'winners-list');
  winnersContentWrapper.append(winnerList);

  const listFirstRow = document.createElement('tr');
  listFirstRow.setAttribute('id', 'winners-list-first-row');
  winnerList.append(listFirstRow);

  const listNum = document.createElement('th');
  listNum.classList.add('winners-header');
  listNum.textContent = 'Number';
  listFirstRow.append(listNum);

  const listCar = document.createElement('th');
  listCar.classList.add('winners-header');
  listCar.textContent = 'Car';
  listFirstRow.append(listCar);

  const carName = document.createElement('th');
  carName.classList.add('winners-header');
  carName.textContent = 'Name';
  listFirstRow.append(carName);

  const carWins = document.createElement('th');
  carWins.classList.add('winners-header');
  carWins.textContent = 'Wins';
  listFirstRow.append(carWins);

  const carTime = document.createElement('th');
  carTime.classList.add('winners-header');
  carTime.textContent = 'Best time (seconds)';
  listFirstRow.append(carTime);
}

export function populateWinnersList() {
  getWinners()
    .then((data) => data.json())
    .then((data) => {
      console.log('populateWinnersList data = ', data);
      fillWinners(data);
    });
}

function fillWinners(winnersArr: []) {
  const listLen = winnersArr.length;
  for (let i = 0; i < listLen; i++) {
    const listRow = document.createElement('tr');
    winnerList.append(listRow);

    const listNum = document.createElement('td');
    listNum.textContent = '' + i + 1;
    listRow.append(listNum);

    const listCar = document.createElement('td');
    listCar.textContent = 'Car';
    listRow.append(listCar);

    const carName = document.createElement('td');
    carName.textContent = 'Name';
    listRow.append(carName);

    const carWins = document.createElement('td');
    carWins.textContent = 'Wins';
    listRow.append(carWins);

    const carTime = document.createElement('td');
    carTime.textContent = 'Time';
    listRow.append(carTime);
  }
}
