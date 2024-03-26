import "./common";

const addCarWrapper = document.createElement('div');
addCarWrapper.setAttribute("id", "add-car-wrapper");
contentWrapper.append(addCarWrapper);

const addCarName = document.createElement('div');
addCarNameField.setAttribute("id", "add-car-name");
addCarWrapper.append(addCarName);

const addCarColor = document.createElement('div');
addCarColor.setAttribute("id", "add-car-color");
addCarWrapper.append(addCarColor);

const addCarBTN = document.createElement('div');
addCarBTN.setAttribute("id", "add-car-btn");
addCarWrapper.append(addCarBTN);

const updateCarWrapper = document.createElement('div');
addCarWrapper.setAttribute("id", "update-car-wrapper");
contentWrapper.append(updateCarWrapper);

const updateCarName = document.createElement('div');
updateCarName.setAttribute("id", "update-car-name");
updateCarWrapper.append(updateCarName);

const updateCarColor = document.createElement('div');
updateCarColor.setAttribute("id", "update-car-color");
updateCarWrapper.append(updateCarColor);

const updateCarBTN = document.createElement('div');
updateCarBTN.setAttribute("id", "update-car-btn");
updateCarWrapper.append(updateCarBTN);

const raceWrapper = document.createElement('div');
raceWrapper.setAttribute("id", "race-wrapper");
contentWrapper.append(raceWrapper);

const raceBTN = document.createElement('div');
raceBTN.setAttribute("id", "race-btn");
raceWrapper.append(raceBTN);

const resetBTN = document.createElement('div');
resetBTN.setAttribute("id", "reset-btn");
raceWrapper.append(resetBTN);

const generateCars = document.createElement('div');
generateCars.setAttribute("id", "generate-cars");
raceWrapper.append(generateCars);

const garageTitle = document.createElement('div');
garageTitle.setAttribute("id", "garage-title");
garageTitle.textContent = `Garage (${carsInGarage.length})`;
contentWrapper.append(garageTitle);

const garagePageNum = document.createElement('div');
pageNum.setAttribute("id", "garage-page");
garagePageNum.textContent = 1;
contentWrapper.append(garagePageNum);

const carListWrapper = document.createElement('div');
carListWrapper.setAttribute("id", "car-list");
contentWrapper.append(carListWrapper);