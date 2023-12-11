const burgerHomeBTN = document.getElementById('header-menu');
const burgerHomeMenu = document.getElementById('burger-mnu');
const burgerMenuBTN = document.getElementById('header-menu-menu');
// const burgerMenuMenuBTN = document.getElementById('burger-mnu-btn');
const burgerBTNbarOne = document.getElementById('burger-btn-bar-one');
const burgerBTNbarTwo = document.getElementById('burger-btn-bar-two');


let burgerMenuON = false;

if(burgerHomeBTN) {
    burgerHomeBTN.addEventListener('click', () => {
        let burgerMNUStyle = getComputedStyle(burgerHomeMenu);
        if(burgerMNUStyle.display == 'flex') {
            burgerMenuON == false ? showBurgerMenu() : hideBurgerMenu();
        }
    })
}

burgerHomeMenu.addEventListener('click', (event) => {
    console.log(event.target.parentNode.tagName);
    if (event.target.parentNode.tagName == 'LI' || event.target.parentNode == burgerMenuMenuBTN) {
        hideBurgerMenu();        
    }
})

burgerMenuBTN.addEventListener('click', () => {
    let burgerMNUStyle = getComputedStyle(burgerHomeMenu);
    if(burgerMNUStyle.display == 'flex') {
        burgerMenuON == false ? showBurgerMenuMenu() : hideBurgerMenuMenu();
    }
})

// burgerMenuMenuBTN.addEventListener('click', (event) => {
//     console.log(event.target.parentNode.tagName);
//     if (event.target.parentNode.tagName == 'LI' || event.target.parentNode == burgerMenuMenuBTN) {
//         hideBurgerMenu();        
//     }
// })

function showBurgerMenu() {
    burgerHomeMenu.classList.add('engaged');
    burgerHomeBTN.classList.add('engaged');
    burgerMenuON = true;
}

function hideBurgerMenu() {
    burgerHomeMenu.classList.remove('engaged');
    burgerHomeBTN.classList.remove('engaged');
    burgerMenuON = false;
}


function showBurgerMenuMenu() {
    burgerHomeMenu.classList.add('engaged');
    burgerMenuBTN.classList.add('engaged');
    burgerMenuON = true;
}

function hideBurgerMenuMenu() {
    burgerHomeMenu.classList.remove('engaged');
    burgerMenuBTN.classList.remove('engaged');
    burgerMenuON = false;
}

window.addEventListener('resize', () => {
    let burgerMNUStyle = getComputedStyle(burgerHomeMenu);
    if (burgerMNUStyle.display == 'none' && burgerMenuON == true) hideBurgerMenu();
})