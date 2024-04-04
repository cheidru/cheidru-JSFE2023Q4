import { createGarageUI } from './garage-ui';
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN, updateGarageTitle } from './garage-ui';
import { addCarName, addCarColor, updateCarName, updateCarColor, carListWrapper } from './garage-ui';
import { createCars, selectedCarID } from '../cars/cars';
import { getCars, addNewCar, updateCar, removeCar, getWinners } from '../../api/api';
import { CarObjMembers } from '../common';
import { startRace } from '../cars/race';
import { fillWinners } from '../winners/winners';

export function createGarage() {
  createGarageUI();
  populateCarList();

  addCarBTN.addEventListener('click', addOneCar);

  updateCarBTN.addEventListener('click', updateOneCar);

  raceBTN.addEventListener('click', startRace);

  resetBTN.addEventListener('click', () => {});

  generateCarsBTN.addEventListener('click', addCarLot);
}

export function populateCarList() {
  getCars()
    .then((data) => data.json())
    .then((data) => {
      createCars(data);
    });
}

function addOneCar() {
  if (addCarName.value === '') return;
  const newCar: CarObjMembers = {
    name: addCarName.value,
    color: addCarColor.value,
  };
  addNewCar(newCar).then(() => {
    updateGarageTitle();
    carListWrapper.innerHTML = '';
    populateCarList();
  });
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
  checkWinners(selectedCarID);
}

//
//
//
//
function checkWinners(selectedCarID: number) {
  getWinners()
    .then((data) => data.json())
    .then((data) => {
      if (Oblect.values(data) === selectedCarID)
      fillWinners(data);
    });
}

//
//
//

export function setNameAndColor(name: string, color: string) {
  updateCarName.value = name;
  updateCarColor.value = color;
}

function addCarLot() {
  generateCarLot().then(() => {
    updateGarageTitle();
    carListWrapper.innerHTML = '';
    populateCarList();
  });
}

async function generateCarLot() {
  for (let i = 0; i < 100; i++) {
    const brandNo = randomNum(10);
    const modelNo = randomNum(carModel[brandNo].model.length);
    const newCar: CarObjMembers = {
      name: carModel[brandNo].brand + ' ' + carModel[brandNo].model[modelNo],
      color: randomRGBColor(),
    };
    await addNewCar(newCar);
  }
  return true;
}

function randomNum(max: number) {
  return Math.floor(Math.random() * max);
}

function randomRGBColor() {
  const hexArr = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexArr[randomNum(16)].toString();
  }
  return color;
}

const carModel = [
  {
    brand: 'Tesla',
    model: ['Roadster', 'Model S', 'Model X', 'Model 3', 'Model Y'],
  },
  {
    brand: 'Ford',
    model: [
      'Focus',
      'Mondeo',
      'Taurus',
      'Mustang',
      'Bronco',
      'Edge',
      'Escape',
      'Kuga',
      'Explorer',
      'Puma',
      'Maverick',
      'F-150',
    ],
  },
  {
    brand: 'Mercedes',
    model: [
      'A-Class',
      'C-Class',
      'CLA',
      'E-Class',
      'S-Class',
      'C-Class',
      'EQA',
      'EQC',
      'EQE SUV',
      'G-Class',
      'AMG One',
      'CLE',
    ],
  },
  {
    brand: 'Volkswagen',
    model: ['Golf', 'Polo', 'Arteon', 'Bora', 'Jetta', 'Lavida', 'Passat', 'Atlas', 'Tayron', 'Tiguan', 'Touareg'],
  },
  {
    brand: 'Toyota',
    model: [
      'Avalon',
      'Camry',
      'Century',
      'Corolla',
      'Crown',
      'Mirai',
      'Prius',
      'Yaris',
      'Aqua',
      'Vitz',
      'Frontlander',
      'Harrier',
      'RAV4',
      'Land Cruiser',
    ],
  },
  {
    brand: 'BMW',
    model: ['Gran Coupe', 'X1', 'X2', 'X3', 'X6', 'X7', 'i3', 'i4', 'iX2', 'iX3', 'Z4'],
  },
  {
    brand: 'Lada',
    model: [
      'Vesta',
      'Largus',
      'Granta',
      'Niva Travel',
      '2105',
      '2107',
      'Samara',
      'Kalina',
      'Priora',
      'X-Ray',
      'X-Cross 5',
      '2103',
      '2101',
    ],
  },
  {
    brand: 'Hyundai',
    model: ['Aura', 'Elantra', 'Sonata', 'Creta', 'Santa Fe', 'Tucson', 'Palisade'],
  },
  {
    brand: 'Opel',
    model: ['Astra', 'Corsa', 'Mokka', 'Zafira', 'Combo', 'Manta GSe'],
  },
  {
    brand: 'Volvo',
    model: ['V40', 'S70', 'C70', 'S80', 'XC90', 'XC60', '780', 'EX30', 'EM90'],
  },
];
