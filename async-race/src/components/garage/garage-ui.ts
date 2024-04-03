import '../../style.css';
import { getCarsNumber } from '../../api/api';
import { garageContentWrapper } from '../common';
import { activeGaragePage, unlockgarageNextPage } from '../../index';

export let carsInGarage: number;
export const addCarBTN = document.createElement('button');
export const updateCarBTN = document.createElement('button');
export const raceBTN = document.createElement('button');
export const resetBTN = document.createElement('button');
export const generateCarsBTN = document.createElement('button');
export const carListWrapper = document.createElement('div');
export const addCarName = document.createElement('input');
export const addCarColor = document.createElement('input');
export const updateCarName = document.createElement('input');
export const updateCarColor = document.createElement('input');

const garageTitle = document.createElement('div');
const garagePageNum = document.createElement('div');

export function createGarageUI() {
  createGarageTitle();
  createAddCarMenu();
  createUpdateCarMenu();
  createRaceResetGenerateMenu();
  createCarList();
}

function createAddCarMenu() {
  const addCarWrapper = document.createElement('div');
  addCarWrapper.setAttribute('id', 'add-car-wrapper');
  addCarWrapper.classList.add('car-list-controls');
  garageContentWrapper.append(addCarWrapper);

  addCarName.setAttribute('id', 'add-car-name');
  addCarName.setAttribute('type', 'text');
  addCarName.setAttribute('placeholder', 'car name');
  addCarName.classList.add('car-list-txt');
  addCarWrapper.append(addCarName);

  addCarColor.setAttribute('id', 'add-car-color');
  addCarColor.setAttribute('type', 'color');
  addCarColor.setAttribute('value', '#9ae5be');
  addCarColor.classList.add('car-list-palette');
  addCarWrapper.append(addCarColor);

  addCarBTN.setAttribute('id', 'add-car-btn');
  addCarBTN.textContent = 'Create';
  addCarBTN.classList.add('car-list-btn');
  addCarWrapper.append(addCarBTN);
}

function createUpdateCarMenu() {
  const updateCarWrapper = document.createElement('div');
  updateCarWrapper.setAttribute('id', 'update-car-wrapper');
  updateCarWrapper.classList.add('car-list-controls');
  garageContentWrapper.append(updateCarWrapper);

  updateCarName.setAttribute('id', 'update-car-name');
  updateCarName.setAttribute('type', 'text');
  updateCarName.setAttribute('placeholder', 'car name');
  updateCarName.classList.add('car-list-txt');
  updateCarWrapper.append(updateCarName);

  updateCarColor.setAttribute('id', 'update-car-color');
  updateCarColor.setAttribute('type', 'color');
  updateCarColor.setAttribute('value', '#9ae5be');
  updateCarColor.classList.add('car-list-palette');
  updateCarWrapper.append(updateCarColor);

  updateCarBTN.setAttribute('id', 'update-car-btn');
  updateCarBTN.textContent = 'Update';
  updateCarBTN.classList.add('car-list-btn');
  updateCarWrapper.append(updateCarBTN);
}

function createRaceResetGenerateMenu() {
  const raceWrapper = document.createElement('div');
  raceWrapper.setAttribute('id', 'race-wrapper');
  raceWrapper.classList.add('car-list-controls');
  garageContentWrapper.append(raceWrapper);

  raceBTN.setAttribute('id', 'race-btn');
  raceBTN.textContent = 'Race';
  raceWrapper.append(raceBTN);

  resetBTN.setAttribute('id', 'reset-btn');
  resetBTN.textContent = 'Reset';
  raceWrapper.append(resetBTN);

  generateCarsBTN.setAttribute('id', 'generate-cars-btn');
  generateCarsBTN.textContent = 'Generate';
  raceWrapper.append(generateCarsBTN);
}

function createGarageTitle() {
  const garageTitleWrapper = document.createElement('div');
  garageTitleWrapper.classList.add('title-wrapper');
  garageContentWrapper.append(garageTitleWrapper);

  garageTitle.setAttribute('id', 'garage-title');
  garageTitle.classList.add('stage-title');

  garageTitleWrapper.append(garageTitle);

  garagePageNum.setAttribute('id', 'garage-page');
  garagePageNum.classList.add('page-num-title');
  garagePageNum.textContent = 'Page #1';
  garageTitleWrapper.append(garagePageNum);

  updateGarageTitle();
  carListWrapper.setAttribute('id', 'car-list');
  garageContentWrapper.append(carListWrapper);
}

function createCarList() {
  carListWrapper.setAttribute('id', 'car-list');
  garageContentWrapper.append(carListWrapper);
}

export function updateGarageTitle() {
  getCarsNumber()
    .then((data) => data.headers.get('x-total-count'))
    .then((data) => {
      carsInGarage = Number(data);
      if (carsInGarage > 6) unlockgarageNextPage();
      garageTitle.textContent = `Garage (${carsInGarage})`;
    });
  garagePageNum.textContent = `Page ${activeGaragePage}`;
}
