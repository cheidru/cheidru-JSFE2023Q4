const serverURL = 'http://127.0.0.1:3000';

export async function getCars(page: number) {
  const answer = await fetch(serverURL + '/garage' + '?_page=' + page);
  // const carInfo = await answer.json();
  // console.log(Array.isArray(carInfo), carInfo[0]);
  return answer;
}

export async function getCarsNumber() {
  const answer = await fetch(serverURL + '/garage' + '?_limit=1');
  return answer;
}

export const winnerList = [];
