import { createGarageUI } from './garage-ui';
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN, updateGarageTitle } from './garage-ui';
import { addCarName, addCarColor, updateCarName, updateCarColor, carListWrapper } from './garage-ui';
import { createCars, CarObjMembers, selectedCarID } from '../cars/cars';
import { getCars, addNewCar, updateCar, removeCar } from '../../api/api';

export function createGarage() {
  createGarageUI();
  populateCarList();

  addCarBTN.addEventListener('click', addOneCar);

  updateCarBTN.addEventListener('click', updateOneCar);

  raceBTN.addEventListener('click', () => {
    console.log('Race started');
  });
  resetBTN.addEventListener('click', () => {
    console.log('Race reset');
  });
  generateCarsBTN.addEventListener('click', () => {
    console.log('Cars generated');
  });
}

export function populateCarList() {
  getCars()
    .then((data) => data.json())
    .then((data) => {
      console.log('populateCarList data = ', data);
      createCars(data);
    });
}

function addOneCar() {
  if (addCarName.value === '') return;
  const newCar: CarObjMembers = {
    name: addCarName.value,
    color: addCarColor.value,
  };
  addNewCar(newCar);
  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
}

function updateOneCar() {
  if (selectedCarID === 0) return;
  const updatedCar: CarObjMembers = {
    name: updateCarName.value,
    color: updateCarColor.value,
  };
  updateCar(updatedCar, selectedCarID).then(() => {
    updateGarageTitle();
    carListWrapper.innerHTML = '';
    populateCarList();
  });
}

export function deleteCar() {
  removeCar(selectedCarID);
  updateGarageTitle();
  carListWrapper.innerHTML = '';
  populateCarList();
}

export function setNameAndColor(name: string, color: string) {
  updateCarName.value = name;
  updateCarColor.value = color;
}
