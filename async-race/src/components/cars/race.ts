import { startEngine, driveCar, stopEngine } from '../../api/api';
import { CarRaceMembers, AnimationData } from '../common';
import { raceMemberIDs } from './cars';

export const carRace: CarRaceMembers = {
  distance: 0,
  velocity: 0,
};

let stopCarRunning = false;

export async function stopCar(carID: number, thisCarIMG: HTMLElement) {
  console.log('Stop Car');
  stopCarRunning = true;
  stopEngine(carID).then(() => {
    thisCarIMG.style.transform = `translateX(0)`;
  });
}

export function runCar(carID: number, animationData: AnimationData, carRace: CarRaceMembers) {
  startEngine(carID)
    .then((data) => data.json())
    .then((data) => {
      carRace = data;
      driveCar(carID);
    })
    .then(() => animatedRace(animationData, carRace));
}

function animatedRace(animationData: AnimationData, carRace: CarRaceMembers) {
  console.log('start animation');
  requestAnimationFrame(carRunning);
  let done = false;
  let elapsedDistance = 0;
  function carRunning() {
    // let start = undefined;
    // let  previousTimeStamp;
    // Average speed 100 and movement rate 300 px/sec with 60 render/sec gives 5px per tic
    const speedRatio = carRace.velocity / 100;
    const carShiftPixPerTic: number = speedRatio * 5;
    elapsedDistance += carShiftPixPerTic;
    console.log('carShiftPixPerTic = ', carShiftPixPerTic, 'elapsedDistance = ', elapsedDistance);
    if (elapsedDistance >= 1270) done = true;
    animationData.carObject.style.transform = `translateX(${elapsedDistance}px)`;

    if (!done && stopCarRunning === false) {
      requestAnimationFrame(carRunning);
    }
  }
  stopCarRunning = false;
}

export function startRace() {
  startRaceCarsEngines();
  driveRaceCars();
}

function startRaceCarsEngines() {
  const raceURLs = [];
  for (let i = 0; i < raceMemberIDs.length; i++) {
    raceURLs.push('http://127.0.0.1:3000/engine/?id=' + raceMemberIDs[i] + '&status=started');
  }
  const requests = raceURLs.map((url) => fetch(url, { method: 'PATCH' }));
  Promise.all(requests).then((responses) =>
    responses.forEach((response) => console.log(`${response.url}: ${response.status}`))
  );
}

function driveRaceCars() {
  const raceURLs = [];
  for (let i = 0; i < raceMemberIDs.length; i++) {
    raceURLs.push('http://127.0.0.1:3000/engine/?id=' + raceMemberIDs[i] + '&status=drive');
  }
  const requests = raceURLs.map((url) => fetch(url, { method: 'PATCH' }));
  Promise.all(requests).then((responses) =>
    responses.forEach((response) => console.log(`${response.url}: ${response.status}`))
  );
}

// function animateRace() {}
