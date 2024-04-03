import { CarObjMembers } from '../components/common';

const serverURL = 'http://127.0.0.1:3000';

export async function getCars() {
  const answer = await fetch(serverURL + '/garage');
  return answer;
}

export async function getOneCar(carID: number) {
  const answer = await fetch(serverURL + '/garage/' + carID);
  return answer;
}

export async function getCarsNumber() {
  const answer = await fetch(serverURL + '/garage' + '?_limit=1');
  return answer;
}

export async function addNewCar(carObj: CarObjMembers) {
  console.log('Car ', carObj, ' added');
  await fetch(serverURL + '/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carObj),
  });
}

export async function updateCar(carObj: CarObjMembers, carID: number) {
  await fetch(serverURL + '/garage/' + carID, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carObj),
  });
}

export async function removeCar(carID: number) {
  await fetch(serverURL + '/garage/' + carID, { method: 'DELETE' });
}

export async function getWinners() {
  const answer = await fetch(serverURL + '/winners');
  return answer;
}

export async function getWinnersNumber() {
  const answer = await fetch(serverURL + '/winners' + '?_limit=1');
  return answer;
}

export async function startEngine(carID: number) {
  const answer = await fetch(serverURL + '/engine/?id=' + carID + '&status=started', {
    method: 'PATCH',
  });
  console.log('startEngine res = ', answer);
  return answer;
}

export async function stopEngine(carID: number) {
  const answer = await fetch(serverURL + '/engine/?id=' + carID + '&status=stopped', {
    method: 'PATCH',
  });
  console.log('stopEngine res = ', answer);
  return answer;
}

export async function driveCar(carID: number) {
  const answer = await fetch(serverURL + '/engine/?id=' + carID + '&status=drive', {
    method: 'PATCH',
  });
  if (!answer.ok) {
    console.log('driveCar res error = ', answer);
  } else {
    console.log('driveCar res ok = ', answer);
  }
  return answer;
}

export const winnerList = [];
