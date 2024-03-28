import { createCommonUI, carsInGarage, contentWrapper } from "../common";

export const addCarBTN = document.createElement('button');
export const updateCarBTN = document.createElement('button');
export const raceBTN = document.createElement('button');
export const resetBTN = document.createElement('button');
export const generateCarsBTN = document.createElement('button');
export const carListWrapper = document.createElement('div');

export function createGarageUI() {
    createCommonUI();
    createAddCarMenu();
    createUpdateCarMenu();
    createRaceResetGenerateMenu();
    createInfoAndCarList();
}

function createAddCarMenu() {    
    const addCarWrapper = document.createElement('div');
    addCarWrapper.setAttribute("id", "add-car-wrapper");
    contentWrapper.append(addCarWrapper);
    
    const addCarName = document.createElement('div');
    addCarName.setAttribute("id", "add-car-name");
    addCarWrapper.append(addCarName);
    
    const addCarColor = document.createElement('div');
    addCarColor.setAttribute("id", "add-car-color");
    addCarWrapper.append(addCarColor);
    
    addCarBTN.setAttribute("id", "add-car-btn");
    addCarWrapper.append(addCarBTN);
}

function createUpdateCarMenu() {    
    const updateCarWrapper = document.createElement('div');
    updateCarWrapper.setAttribute("id", "update-car-wrapper");
    contentWrapper.append(updateCarWrapper);
    
    const updateCarName = document.createElement('div');
    updateCarName.setAttribute("id", "update-car-name");
    updateCarWrapper.append(updateCarName);
    
    const updateCarColor = document.createElement('div');
    updateCarColor.setAttribute("id", "update-car-color");
    updateCarWrapper.append(updateCarColor);
    
    updateCarBTN.setAttribute("id", "update-car-btn");
    updateCarWrapper.append(updateCarBTN);
}

function createRaceResetGenerateMenu() {    
    const raceWrapper = document.createElement('div');
    raceWrapper.setAttribute("id", "race-wrapper");
    contentWrapper.append(raceWrapper);
    
    raceBTN.setAttribute("id", "race-btn");
    raceWrapper.append(raceBTN);
    
    resetBTN.setAttribute("id", "reset-btn");
    raceWrapper.append(resetBTN);

    generateCarsBTN.setAttribute("id", "generate-cars-btn");
    raceWrapper.append(generateCarsBTN);
}

function createInfoAndCarList() {
    const garageTitle = document.createElement('div');
    garageTitle.setAttribute("id", "garage-title");
    garageTitle.textContent = `Garage (${carsInGarage.length})`;
    contentWrapper.append(garageTitle);
    
    const garagePageNum = document.createElement('div');
    garagePageNum.setAttribute("id", "garage-page");
    garagePageNum.textContent = '1';
    contentWrapper.append(garagePageNum);
    
    carListWrapper.setAttribute("id", "car-list");
    contentWrapper.append(carListWrapper);
}