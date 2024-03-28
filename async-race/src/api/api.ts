const serverURL = 'http://127.0.0.1:3000';

export async function getCars(page: number) {
    let answer = await fetch(serverURL + '/garage' + '?_page=' + page);
    let carInfo = await answer.json();
    console.log(carInfo);
    return carInfo;
}