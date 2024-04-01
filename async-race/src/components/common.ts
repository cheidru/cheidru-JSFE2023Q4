import '../style.css';

export const garageContentWrapper = document.createElement('div');
export const winnersContentWrapper = document.createElement('div');
export const garageBTN = document.createElement('button');
export const winnersBTN = document.createElement('button');
export const prevPageBTN = document.createElement('button');
export const nextPageBTN = document.createElement('button');

export function createCommonUI() {
  console.log('createCommonUI enabled ');

  const mainWrapper = document.createElement('div');
  mainWrapper.setAttribute('id', 'main-wrapper');
  document.body.append(mainWrapper);

  // Wrapper for Garage and Winners buttons as well as stage title and page number
  const stageWrapper = document.createElement('div');
  stageWrapper.setAttribute('id', 'stage-wrapper');
  mainWrapper.append(stageWrapper);

  // Wrapper for Garage and Winners buttons alone
  const stageBTNWrapper = document.createElement('div');
  stageBTNWrapper.setAttribute('id', 'stage-btn-wrapper');
  stageWrapper.append(stageBTNWrapper);

  garageBTN.setAttribute('id', 'garage-btn');
  garageBTN.classList.add('common-btn');
  garageBTN.textContent = 'Garage';
  stageBTNWrapper.append(garageBTN);

  winnersBTN.setAttribute('id', 'winners-btn');
  winnersBTN.classList.add('common-btn');
  winnersBTN.textContent = 'Winners';
  stageBTNWrapper.append(winnersBTN);

  // Wrapper for lists of cars and winner with their interface
  // populated with the content in garage-ui.ts and winners.tsd
  // respectively
  garageContentWrapper.setAttribute('id', 'garage-wrapper');
  garageContentWrapper.classList.add('content-wrapper');
  mainWrapper.append(garageContentWrapper);

  winnersContentWrapper.setAttribute('id', 'winners-wrapper');
  winnersContentWrapper.classList.add('content-wrapper');
  winnersContentWrapper.style.display = 'none';
  mainWrapper.append(winnersContentWrapper);

  // Wrapper for pagination buttons down the main wrapper
  const pageBTNWrapper = document.createElement('div');
  pageBTNWrapper.setAttribute('id', 'page-btn-wrapper');
  mainWrapper.append(pageBTNWrapper);

  prevPageBTN.setAttribute('id', 'prev-pg-btn');
  prevPageBTN.classList.add('common-btn');
  prevPageBTN.textContent = 'Prev';
  pageBTNWrapper.append(prevPageBTN);

  nextPageBTN.setAttribute('id', 'next-pg-btn');
  nextPageBTN.classList.add('common-btn');
  nextPageBTN.textContent = 'Next';
  pageBTNWrapper.append(nextPageBTN);
}
