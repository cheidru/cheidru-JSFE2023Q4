import { startEngine, driveCar, stopEngine } from '../../api/api';
import { CarRaceMembers, AnimationData } from '../common';

export const carRace: CarRaceMembers = {
  distance: 0,
  velocity: 0,
};

let stopCarRunning = false;

export async function stopCar(carID: number, thisCarIMG: HTMLElement) {
  stopCarRunning = true;
  await stopEngine(carID).then(() => {
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
    if (elapsedDistance >= 1270) done = true;
    animationData.carObject.style.transform = `translateX(${elapsedDistance}px)`;

    if (!done && stopCarRunning === false) {
      requestAnimationFrame(carRunning);
    }
  }
  stopCarRunning = false;
}
