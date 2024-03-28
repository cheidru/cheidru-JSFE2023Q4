const serverURL = 'http://127.0.0.1:3000';

export async function getCars(page: number) {
  const answer = await fetch(serverURL + '/garage' + '?_page=' + page);
  const carInfo = await answer.json();
  console.log(Array.isArray(carInfo), carInfo);
  // console.log('answer = ', answer);
  return carInfo;
}
