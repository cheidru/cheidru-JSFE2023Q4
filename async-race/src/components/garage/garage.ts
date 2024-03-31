import { createGarageUI } from './garage-ui';
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN } from './garage-ui';
// import { addCarName, addCarColor, updateCarName, updateCarColor } from './garage-ui';
import { addCarName, addCarColor } from './garage-ui';
import { createCars, CarObjMembers } from '../cars/cars';
import { getCars, addNewCar } from '../../api/api';

export function createGarage() {
  createGarageUI();
  getCars(1)
    .then((data) => data.json())
    .then((data) => {
      createCars(data);
      console.log('garage started with ', data);
    });

  addCarBTN.addEventListener('click', () => {
    if (addCarName.value === '') return;
    const newCar: CarObjMembers = {
      name: addCarName.value,
      color: addCarColor.value,
    };
    addNewCar(newCar);
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
