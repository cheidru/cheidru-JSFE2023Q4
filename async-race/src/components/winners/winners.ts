import { createCommonUI, winnersContentWrapper, createCarImage } from '../common';
import { getWinners, getWinnersNumber, getOneCar } from '../../api/api';
import { activeWinnersPage } from '../../index';
import { CarObjMembers } from '../cars/cars';

export const winnersListWrapper = document.createElement('div');
export let winnersListed: number;
const winnersTitle = document.createElement('div');
const winnersPageNum = document.createElement('div');
const winnerList = document.createElement('table');

interface winnerObject {
  id: number;
  wins: number;
  time: number;
}

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
      console.log('Winner list = ', data);
      fillWinners(data);
    });
}

function fillWinners(winnersArr: []) {
  const listLen = winnersArr.length;
  for (let i = 0; i < listLen; i++) {
    const winnerObj: winnerObject = winnersArr[i];
    const listRow = document.createElement('tr');
    winnerList.append(listRow);

    const listNum = document.createElement('td');
    listNum.textContent = (i + 1).toString();
    listRow.append(listNum);

    getCarInfo(winnerObj, listRow);
  }
}

function getCarInfo(car: winnerObject, row: HTMLElement) {
  getOneCar(car.id)
    .then((data) => data.json())
    .then((data) => {
      populateWinnerData(data, car, row);
    });
}

function populateWinnerData(carInfo: CarObjMembers, winnerObj: winnerObject, listRow: HTMLElement) {
  const winnerCarIMG = createCarImage(carInfo);
  winnerCarIMG.style.fill = carInfo.color;
  const listCar = document.createElement('td');
  listRow.append(listCar);
  listCar.append(winnerCarIMG);

  const carName = document.createElement('td');
  carName.textContent = carInfo.name;
  listRow.append(carName);

  const carWins = document.createElement('td');
  carWins.textContent = winnerObj.wins.toString();
  listRow.append(carWins);

  const carTime = document.createElement('td');
  carTime.textContent = winnerObj.time.toString();
  listRow.append(carTime);
}
