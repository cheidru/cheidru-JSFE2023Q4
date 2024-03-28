import "./style.css";
import { createGarage } from "./components/garage/garage";
import { createWinners } from "./components/winners/winners";
import { garageBTN, winnersBTN } from "./components/common";


garageBTN.setAttribute('disabled','');
createGarage();

winnersBTN.addEventListener('click', () => {
    garageBTN.removeAttribute('disabled');
    winnersBTN.setAttribute('disabled','');
    createWinners();
})

garageBTN.addEventListener('click', () => {
    winnersBTN.removeAttribute('disabled');
    garageBTN.setAttribute('disabled','');
    createGarage();
})