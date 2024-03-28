import "../style.css";

export const carsInGarage = [];
export const winnerList = [];

export const contentWrapper = document.createElement("div");

export const garageBTN = document.createElement("button");
export const winnersBTN = document.createElement("button");
export const prevPageBTN = document.createElement("button");
export const nextPageBTN = document.createElement("button");

export function createCommonUI() {
    const body = document.createElement("body");
    const mainWrapper = document.createElement("div");
    body.append(mainWrapper);
    
    const stageWrapper = document.createElement("div");
    stageWrapper.setAttribute("id", "stage-wrapper");
    mainWrapper.append(stageWrapper);
    
    garageBTN.setAttribute("id", "garage-btn");
    garageBTN.classList.add('common-btn');
    stageWrapper.append(garageBTN);
   
    winnersBTN.setAttribute("id", "winners-btn");
    winnersBTN.classList.add('common-btn');
    stageWrapper.append(winnersBTN);
    
    contentWrapper.setAttribute("id", "stage-switch-wrapper");
    mainWrapper.append(contentWrapper);
    
    const pageWrapper = document.createElement("div");
    pageWrapper.setAttribute("id", "page-wrapper");
    mainWrapper.append(pageWrapper);
    
    prevPageBTN.setAttribute("id", "prev-pg-btn");
    prevPageBTN.classList.add('common-btn');
    pageWrapper.append(prevPageBTN);
  
    nextPageBTN.setAttribute("id", "next-pg-btn");
    nextPageBTN.classList.add('common-btn');
    pageWrapper.append(nextPageBTN);
}


