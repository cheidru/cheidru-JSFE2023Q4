import '../common';
import { createGarageUI } from './garage-ui';
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN } from './garage-ui';
// import { createCars } from '../cars/cars';
import { getCars } from '../../api/api';

export function createGarage() {
  createGarageUI();
  const carList = getCars(1);
  console.log('garage started ', carList);
  // createCars(carList);
  addCarBTN.addEventListener('click', () => {
    console.log('Car added');
  });
  updateCarBTN.addEventListener('click', () => {
    console.log('Car updated');
  });
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
