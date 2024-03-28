import { carListWrapper } from "../garage/garage-ui";

export function createCars(carsArray: Array<Object>) {
    const carsQTY = carsArray.length;
    for(let i = 0; i < carsQTY; i ++) {
        const carWrapper = document.createElement('div');
        carWrapper.setAttribute('id', `car-no-${i}`);
        const carObj = carsArray[i];
        carListWrapper.append(carWrapper);

        addButtonsAndTrack(carWrapper, carObj);

    }
}

function addButtonsAndTrack(parentElement: HTMLElement, carObj: Object) {
    
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
    carName.textContent = carObj.name;
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
    carIMG.innerHTML = `version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    fill="white"
    viewBox="0 0 98.796374 38.292306"
    xml:space="preserve"
    width="98.796371"
    height="38.292305"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"><defs
      id="defs15" /><g
      id="g10"
      transform="matrix(-1,0,0,1,98.797374,-30.251694)"><g
        id="g8"><path
          d="m 15.796,52.934 c -4.31,0 -7.805,3.492 -7.805,7.804 0,0.334 0.027,0.66 0.069,0.982 0.483,3.847 3.759,6.824 7.736,6.824 4.087,0 7.434,-3.142 7.773,-7.141 0.018,-0.221 0.034,-0.44 0.034,-0.667 10e-4,-4.309 -3.494,-7.802 -7.807,-7.802 z m -3.909,4.863 1.593,1.593 c -0.124,0.213 -0.221,0.441 -0.283,0.687 h -2.245 c 0.117,-0.852 0.444,-1.627 0.935,-2.28 z m -0.942,3.63 h 2.26 c 0.064,0.239 0.158,0.469 0.282,0.677 l -1.596,1.595 C 11.399,63.05 11.064,62.273 10.945,61.427 Z m 4.177,4.161 C 14.277,65.471 13.508,65.14 12.858,64.649 l 1.587,-1.587 c 0.208,0.122 0.438,0.211 0.677,0.273 z m 0,-7.446 c -0.246,0.062 -0.476,0.161 -0.69,0.288 l -1.59,-1.591 c 0.653,-0.496 1.429,-0.825 2.28,-0.943 z m 1.352,-2.246 c 0.852,0.118 1.627,0.447 2.28,0.944 l -1.59,1.59 C 16.95,58.303 16.72,58.204 16.474,58.142 Z m 0,9.691 v -2.252 c 0.24,-0.063 0.468,-0.152 0.677,-0.275 l 1.588,1.589 c -0.651,0.488 -1.421,0.82 -2.265,0.938 z m 3.234,-1.882 -1.601,-1.603 c 0.124,-0.209 0.227,-0.434 0.291,-0.676 h 2.243 c -0.12,0.847 -0.441,1.629 -0.933,2.279 z m -1.31,-3.63 c -0.063,-0.244 -0.159,-0.474 -0.283,-0.687 l 1.593,-1.593 c 0.493,0.653 0.818,1.429 0.935,2.278 z"
          id="path2" /><path
          d="m 81.505,52.934 c -4.31,0 -7.805,3.492 -7.805,7.804 0,0.334 0.027,0.66 0.069,0.982 0.482,3.847 3.759,6.824 7.735,6.824 4.087,0 7.435,-3.142 7.773,-7.141 0.018,-0.221 0.034,-0.44 0.034,-0.667 0.002,-4.309 -3.493,-7.802 -7.806,-7.802 z m -3.91,4.863 1.594,1.593 c -0.124,0.213 -0.222,0.441 -0.283,0.687 h -2.245 c 0.117,-0.852 0.443,-1.627 0.934,-2.28 z m -0.941,3.63 h 2.26 c 0.064,0.239 0.158,0.469 0.282,0.677 L 77.6,63.698 C 77.109,63.05 76.773,62.273 76.654,61.427 Z m 4.177,4.161 C 79.986,65.471 79.217,65.14 78.567,64.649 l 1.587,-1.587 c 0.208,0.122 0.438,0.211 0.677,0.273 z m 0,-7.446 c -0.246,0.062 -0.476,0.161 -0.689,0.288 l -1.591,-1.591 c 0.653,-0.496 1.43,-0.825 2.28,-0.943 z m 1.351,-2.246 c 0.852,0.118 1.627,0.447 2.279,0.944 l -1.59,1.59 c -0.214,-0.127 -0.444,-0.226 -0.689,-0.288 z m 0,9.691 v -2.252 c 0.239,-0.063 0.468,-0.152 0.677,-0.275 l 1.588,1.589 c -0.651,0.488 -1.419,0.82 -2.265,0.938 z m 3.234,-1.882 -1.601,-1.603 c 0.124,-0.209 0.227,-0.434 0.291,-0.676 h 2.243 c -0.12,0.847 -0.439,1.629 -0.933,2.279 z m -1.308,-3.63 c -0.063,-0.244 -0.159,-0.474 -0.283,-0.687 l 1.593,-1.593 c 0.493,0.653 0.818,1.429 0.936,2.278 z"
          id="path4" /><path
          d="m 98.125,50.451 -1.5,-1.433 0.003,-4.521 C 96.629,43.31 96.19,42.166 95.395,41.286 L 89.85,35.145 V 35.142 C 89.823,33.866 88.907,32.788 87.653,32.553 81.06,31.314 60.604,28.111 44.413,32.461 34.41,35.148 24.24,40.557 24.24,40.557 c 0,0 -17.66,2.25 -21.892,7.766 -1.474,1.92 -2.092,4.442 -2.316,6.714 -0.313,3.175 1.775,6.074 4.886,6.775 L 6.551,62.18 C 6.537,62.091 6.516,62.004 6.505,61.912 6.451,61.496 6.424,61.108 6.424,60.735 c 0,-5.169 4.206,-9.374 9.375,-9.374 5.17,0 9.376,4.205 9.376,9.374 0,0.271 -0.018,0.533 -0.04,0.798 -0.027,0.319 -0.072,0.633 -0.131,0.941 l 47.323,0.096 c -0.043,-0.218 -0.086,-0.435 -0.114,-0.658 -0.054,-0.416 -0.081,-0.804 -0.081,-1.177 0,-5.169 4.206,-9.374 9.375,-9.374 5.17,0 9.376,4.205 9.376,9.374 0,0.271 -0.018,0.533 -0.04,0.798 -0.03,0.365 -0.09,0.723 -0.162,1.074 l 0.646,10e-4 2.692,-1.475 c 2.808,-1.537 4.602,-4.438 4.723,-7.636 l 0.054,-1.399 C 98.818,51.48 98.575,50.882 98.125,50.451 Z M 33.543,41.193 34.267,38.3 c 0,0 10.961,-5.734 29.306,-5.11 v 8.549 l -29.381,2.318 c 0,0 0.158,-1.834 -0.649,-2.864 z m 47.078,-0.798 -13.815,1.09 V 33.37 c 4.543,0.33 9.48,1.047 14.779,2.327 0.536,0.129 0.966,0.527 1.137,1.051 0.172,0.524 0.06,1.1 -0.297,1.52 z"
          id="path6" /></g></g>`;
    carIMG.setAttribute('fill', 'green');
    trackWrapper.append(carIMG);

    const flagIMG = document.createElement('div');
    flagIMG.innerHTML = '';
    flagIMG.setAttribute('fill', '');
    trackWrapper.append(flagIMG);
}
