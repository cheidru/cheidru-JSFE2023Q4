import { carListWrapper } from '../garage/garage-ui';
import { activeGaragePage } from '../../index';
import { setNameAndColor, deleteCar } from '../garage/garage';
import { createCarImage } from '../common';

export interface CarObjMembers {
  name: string;
  color: string;
  id?: number;
}

export let selectedCarID: number = 0;
let selectedCarName: string = '';
let selectedCarColor: string = '';

export function createCars(carsArray: []) {
  const startIndex = (activeGaragePage - 1) * 7;
  const stopIndex = startIndex + 7 > carsArray.length ? carsArray.length : startIndex + 7;
  for (let i = startIndex; i < stopIndex; i++) {
    const carWrapper = document.createElement('div');
    carWrapper.setAttribute('id', `car-no-${i + 1}`);
    const carObj = carsArray[i];
    carListWrapper.append(carWrapper);
    addButtonsAndTrack(carWrapper, carObj);
  }
}

function addButtonsAndTrack(parentElement: HTMLElement, carObj: CarObjMembers) {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  parentElement.append(buttonWrapper);

  const selectCarBTN = document.createElement('button');
  selectCarBTN.classList.add('select-btn');
  selectCarBTN.textContent = 'Select';
  selectCarBTN.addEventListener('click', () => {
    if (selectedCarID > 0) {
      const elem = document.getElementById(`car-no-${selectedCarID}`);
      if (elem !== null) elem.style.backgroundColor = 'rgb(57, 57, 57)';
    }
    selectedCarID = Number(carObj.id);
    selectedCarName = carObj.name;
    selectedCarColor = carObj.color;
    setNameAndColor(selectedCarName, selectedCarColor);
    parentElement.style.backgroundColor = 'rgb(84, 83, 83)';
  });
  buttonWrapper.append(selectCarBTN);

  const removeCarBTN = document.createElement('button');
  removeCarBTN.classList.add('remove-btn');
  removeCarBTN.textContent = 'Remove';
  removeCarBTN.addEventListener('click', () => {
    selectedCarID = Number(carObj.id);
    deleteCar();
  });
  buttonWrapper.append(removeCarBTN);

  const carName = document.createElement('div');
  carName.classList.add('car-name');
  carName.textContent = carObj.name;
  buttonWrapper.append(carName);
  addTrack(parentElement, carObj);
}

function addTrack(parentElement: HTMLElement, carObj: CarObjMembers) {
  const trackWrapper = document.createElement('div');
  trackWrapper.classList.add('track-wrapper');
  parentElement.append(trackWrapper);

  const startCarBTN = document.createElement('div');
  startCarBTN.classList.add('car-btn');
  startCarBTN.classList.add('start-btn');
  startCarBTN.textContent = 'A';
  trackWrapper.append(startCarBTN);

  const stopCarBTN = document.createElement('div');
  stopCarBTN.classList.add('car-btn');
  stopCarBTN.classList.add('stop-btn');
  stopCarBTN.classList.add('disabled-btn');
  stopCarBTN.textContent = 'B';
  trackWrapper.append(stopCarBTN);

  trackWrapper.append(createCarImage(carObj));

  const flagIMG = document.createElement('div');
  flagIMG.innerHTML = `<svg viewBox="0 -2 366.03679 366" xmlns="http://www.w3.org/2000/svg" class="flag-img">
  <path d="m364.699219 177.824219-70.300781-146.023438c-3.121094-6.503906-10.75-9.472656-17.507813-6.914062-9.882813 3.535156-18.074219 5.683593-25.855469 6.757812-22.070312 3.023438-45.621094-1.636719-66.304687-13.105469-25.90625-14.898437-55.296875-20.992187-85.042969-17.613281-25.910156 2.917969-49.972656 12.800781-70.195312 28.722657l-3.6875-7.679688c-.203126-.460938-.460938-.871094-.769532-1.226562.566406-1.433594.871094-3.023438.871094-4.710938 0-7.117188-5.785156-12.953125-12.953125-12.953125-7.117187 0-12.953125 5.785156-12.953125 12.953125 0 5.988281 4.097656 11.058594 9.625 12.492188.101562.308593.257812.664062.410156.972656l157.183594 326.808594c1.484375 3.125 4.609375 4.917968 7.835938 4.917968 1.277343 0 2.558593-.257812 3.785156-.871094 4.355468-2.101562 6.144531-7.273437 4.097656-11.625l-71.066406-147.609374c39.066406-32.460938 93.902344-37.324219 138.394531-11.671876 16.027344 9.164063 34.253906 14.695313 52.683594 15.972657 2.765625.207031 5.480469.257812 8.246093.257812 15.714844 0 31.539063-3.019531 46.078126-8.910156 3.585937-1.433594 6.398437-4.351563 7.78125-7.882813 1.433593-3.636718 1.28125-7.679687-.355469-11.058593zm-55.503907 10.496093-22.371093-47.003906c1.226562.050782 2.457031.050782 3.683593.050782 11.777344 0 23.554688-1.84375 34.765626-5.375l22.117187 45.925781c-12.441406 4.507812-25.34375 6.65625-38.195313 6.402343zm-107.058593-32-22.375-46.953124c18.484375 1.589843 36.8125 7.117187 53.660156 16.792968.355469.207032.664063.359375 1.023437.566406l22.066407 46.230469c-17-9.316406-35.429688-14.949219-54.375-16.636719zm-100.863281-91.242187c16.949218-5.9375 35.019531-8.292969 52.890624-6.910156l23.859376 50.023437c-17.921876-1.28125-35.890626 1.125-52.839844 7.066406zm74.855468-31.382813s.050782 0 .050782.050782c0 0 .050781.050781.050781.050781 5.734375 3.175781 11.671875 5.886719 17.714843 8.140625l15.308594 32.152344c-17.101562-9.828125-35.6875-15.359375-54.425781-16.894532l-18.074219-37.9375c13.570313 2.457032 26.882813 7.269532 39.375 14.4375zm35.480469 42.800782c14.285156 7.679687 30.3125 12.339844 46.542969 13.414062 1.023437.054688 2.097656.105469 3.121094.15625l23.910156 50.175782c-17.253906-.820313-34.355469-5.632813-49.972656-14.335938zm41.726563-27.59375c8.296874-1.128906 16.847656-3.277344 26.777343-6.707032l20.074219 41.726563c-12.496094 3.992187-25.398438 5.734375-38.195312 5.273437l-18.792969-39.371093c3.429687-.15625 6.808593-.460938 10.136719-.921875zm-173.464844-26.371094 20.019531 41.933594c-15.101563 5.429687-29.335937 13.671875-41.882813 24.628906l-20.835937-43.367188c12.800781-10.699218 27.339844-18.484374 42.699219-23.195312zm3.125 118.582031c12.441406-10.957031 26.625-19.148437 41.675781-24.578125l21.914063 45.925782c-15.359376 4.917968-29.695313 12.546874-42.496094 22.53125zm0 0" fill="#000000" style="fill: rgb(237, 12, 12);"></path></svg>`;
  flagIMG.setAttribute('fill', '');
  trackWrapper.append(flagIMG);
}
