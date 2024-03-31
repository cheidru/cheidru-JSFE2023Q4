import { createGarageUI } from './garage-ui';
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN, updateGarageTitle } from './garage-ui';
// import { addCarName, addCarColor, updateCarName, updateCarColor } from './garage-ui';
import { addCarName, addCarColor, carListWrapper } from './garage-ui';
import { createCars, CarObjMembers } from '../cars/cars';
import { getCars, addNewCar } from '../../api/api';

export function createGarage() {
  createGarageUI();
  populateCarList();

  addCarBTN.addEventListener('click', () => {
    if (addCarName.value === '') return;
    const newCar: CarObjMembers = {
      name: addCarName.value,
      color: addCarColor.value,
    };
    addNewCar(newCar);
    console.log('Car added');
    updateGarageTitle();
    carListWrapper.innerHTML = '';
    populateCarList();
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

function populateCarList() {
  getCars()
    .then((data) => data.json())
    .then((data) => {
      createCars(data);
    });
}
