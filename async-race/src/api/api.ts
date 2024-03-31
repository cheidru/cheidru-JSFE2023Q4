import { CarObjMembers } from '../components/cars/cars';

const serverURL = 'http://127.0.0.1:3000';

export async function getCars() {
  const answer = await fetch(serverURL + '/garage');
  // const carInfo = await answer.json();
  // console.log(Array.isArray(carInfo), carInfo[0]);
  return answer;
}

export async function getCarsNumber() {
  const answer = await fetch(serverURL + '/garage' + '?_limit=1');
  return answer;
}

export async function addNewCar(carObj: CarObjMembers) {
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

export const winnerList = [];
