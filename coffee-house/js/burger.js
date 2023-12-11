const burgerHomeBTN = document.getElementById('header-menu');
const burgerHomeMenu = document.getElementById('burger-mnu');
const burgerMenuBTN = document.getElementById('header-menu-menu');
const burgerBTNbarOne = document.getElementById('burger-btn-bar-one');
const burgerBTNbarTwo = document.getElementById('burger-btn-bar-two');
const page = document.querySelector('body');


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

if(burgerMenuBTN) {
    burgerMenuBTN.addEventListener('click', () => {
        let burgerMNUStyle = getComputedStyle(burgerHomeMenu);
        if(burgerMNUStyle.display == 'flex') {
            burgerMenuON == false ? showBurgerMenuMenu() : hideBurgerMenuMenu();
        }
    })
}


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
    let pageStyle = getComputedStyle(page);
    if (burgerMNUStyle.display == 'none' && burgerMenuON == true) hideBurgerMenu();
    if (parseInt(pageStyle.width) > 768) hideBurgerMenu();
})