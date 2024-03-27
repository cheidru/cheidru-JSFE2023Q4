import "../common";
import { createGarageUI } from "./garage-ui"
import { addCarBTN, updateCarBTN, raceBTN, resetBTN, generateCarsBTN } from "./garage-ui"

export function createGarage() {
    createGarageUI();
    addCarBTN.addEventListener('click', () => {});
    updateCarBTN.addEventListener('click', () => {});
    raceBTN.addEventListener('click', () => {});
    resetBTN.addEventListener('click', () => {});
    generateCarsBTN.addEventListener('click', () => {});
}

