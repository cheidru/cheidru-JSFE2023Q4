import { carListWrapper } from "../garage/garage-ui";

export function createCars(carsArray: Array<Object>) {
    const carsQTY = carsArray.length;
    for(let i = 0; i < carsQTY; i ++) {
        const carWrapper = document.createElement('div');
        carWrapper.setAttribute('id', `car-no-${i}`);
        carListWrapper.append(carWrapper);

        addButtonsAndTrack(carWrapper);
    }
}

function addButtonsAndTrack(parentElement: HTMLElement) {
    
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');
    parentElement.append(buttonWrapper);

    const selectCarBTN = document.createElement('button');
    selectCarBTN.classList.add('car-btn');
    selectCarBTN.classList.add('select-btn');
    buttonWrapper.append(selectCarBTN);
    
    const removeCarBTN = document.createElement('button');
    removeCarBTN.classList.add('car-btn');
    removeCarBTN.classList.add('remove-btn');
    buttonWrapper.append(removeCarBTN);
    
    const carName = document.createElement('div');
    carName.classList.add('car-btn');
    carName.classList.add('remove-btn');
    buttonWrapper.append(carName);

    addTrack(parentElement);
}

function addTrack(parentElement: HTMLElement) {
    const trackWrapper = document.createElement('div');
    trackWrapper.classList.add("track-wrapper");
    parentElement.append(trackWrapper);

    const startCarBTN = document.createElement('div');
    startCarBTN.classList.add('car-btn');
    startCarBTN.classList.add('start-btn');
    trackWrapper.append(startCarBTN);
    
    const stopCarBTN = document.createElement('div');
    stopCarBTN.classList.add('car-btn');
    stopCarBTN.classList.add('stop-btn');
    trackWrapper.append(startCarBTN);
    
    const carIMG = document.createElement('svg');
    carIMG.innerHTML = '';
    carIMG.setAttribute('fill', '');
    trackWrapper.append(carIMG);

    const flagIMG = document.createElement('div');
    flagIMG.innerHTML = '';
    flagIMG.setAttribute('fill', '');
    trackWrapper.append(flagIMG);
}
