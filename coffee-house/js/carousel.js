const sliderItem = document.querySelectorAll('.slider-item');
const leftBTN_FAV = document.getElementById('favourite-btn-left');
const rightBTN_FAV = document.getElementById('favourite-btn-right');
const bullet_FAV = document.querySelectorAll('.favourite-pagination-bullet');
const sliderItemWrapper = document.getElementById('slider-item-wrapper');


let scrollInterval = 3; // time in seconds
let bulUpdateInterval = 0.03;

let currentItem_FAV = {};
currentItem_FAV.number = 0;
currentItem_FAV.showtime = 0; // time in seconds
currentItem_FAV.clearIntervalID = 0;
currentItem_FAV.pointerX = 0; // starting point to see dragging direction

scroller();

function scroller() {
        // bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
        currentItem_FAV.clearIntervalID = setInterval(updateBulletState, bulUpdateInterval * 1000);

}

function updateBulletState() {
    currentItem_FAV.showtime += bulUpdateInterval;
    let bgrPos = ( currentItem_FAV.showtime / scrollInterval ) * 100; // background size of pagination bar in percent

    if (bgrPos >= 100) {
        bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
        currentItem_FAV.number = currentItem_FAV.number == 2 ? 0 : currentItem_FAV.number + 1;
        currentItem_FAV.showtime = 0;
        sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
        return;
    }
    bullet_FAV[currentItem_FAV.number].style.background = `linear-gradient(to right, var(--border-dark) 0%, var(--border-dark) ${bgrPos}%, var(--border-light) ${bgrPos}%, var(--border-light) 100%)`;
}

function scrollSlider() {
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
    clearInterval(currentItem_FAV.clearIntervalID);
    currentItem_FAV.showtime = 0;
    currentItem_FAV.number = currentItem_FAV.number === 2 ? 0 : currentItem_FAV.number + 1;
    sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
    scroller();
}

function scrollSliderBack() {
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
    clearInterval(currentItem_FAV.clearIntervalID);
    currentItem_FAV.showtime = 0;
    currentItem_FAV.number = currentItem_FAV.number === 0 ? 2 : currentItem_FAV.number - 1;
    sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
    scroller();
}

function holdScrolling() {
    clearInterval(currentItem_FAV.clearIntervalID);
}

function resumeScrolling() {
    scroller();
}


sliderItem[0].addEventListener('pointerdown', (event) => {
    event.preventDefault();
    currentItem_FAV.pointerX = event.clientX;
    sliderItem[0].setPointerCapture(event.pointerId);
    sliderItem[0].onpointermove = function(event) {
        if (currentItem_FAV.pointerX < event.clientX) scrollSlider();
        if (currentItem_FAV.pointerX > event.clientX) scrollSliderBack();   
  };
    sliderItem[0].onpointerup = function(event) {
        sliderItem[0].onpointermove = null;
        sliderItem[0].onpointerup = null;
  };
});


sliderItem[0].addEventListener('mouseover', holdScrolling);
sliderItem[0].addEventListener('mouseleave', resumeScrolling);

sliderItem[1].addEventListener('mouseover', holdScrolling);
sliderItem[1].addEventListener('mouseleave', resumeScrolling);

sliderItem[2].addEventListener('mouseover', holdScrolling);
sliderItem[2].addEventListener('mouseleave', resumeScrolling);

leftBTN_FAV.addEventListener('click', scrollSliderBack, false);
rightBTN_FAV.addEventListener('click', scrollSlider, false);

// Swipe section

let x1 = 0;
let x2 = 0;

sliderItemWrapper.addEventListener('touchstart', (event) => {
    event.preventDefault();
    x1 = event.touches[0].clientX;
}, false);

sliderItemWrapper.addEventListener('touchmove', (event) => {
    event.preventDefault();
    x2 = event.touches[0].clientX;
}, false);

sliderItemWrapper.addEventListener('touchend', (event) => {
    event.preventDefault();

    if (x2 - x1 > 30) {
        scrollSliderBack();
    }

    if (x2 - x1 < 30) {
        console.log('scroll left');
        scrollSlider();
    }

    x1 = 0;
    x2 = 0;
}, false);
