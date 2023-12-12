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
currentItem_FAV.pointerX = 0; // starting point to see dragging direction
let scrollOnHold = false;
scroller();

function scroller() {
    // console.log('scroller started', 'currentItem_FAV.number =', currentItem_FAV.number);
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
        currentItem_FAV.bulletTimerID = setInterval(updateBulletState, bulUpdateInterval * 1000);
        currentItem_FAV.itemTimerID = setInterval(scrollSlider, scrollInterval * 1000);
}

function updateBulletState() {
    currentItem_FAV.showtime += bulUpdateInterval;
    let bgrPos = ( currentItem_FAV.showtime / scrollInterval ) * 100; // background size of pagination bar in percent
    bullet_FAV[currentItem_FAV.number].style.background = `linear-gradient(to right, var(--border-dark) 0%, var(--border-dark) ${bgrPos}%, var(--border-light) ${bgrPos}%, var(--border-light) 100%)`;
}

function scrollSlider() {
    currentItem_FAV.showtime = 0;
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
    currentItem_FAV.number = currentItem_FAV.number === 2 ? 0 : currentItem_FAV.number + 1;
    sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
    // console.log('scrollSlider', 'currentItem_FAV.number =', currentItem_FAV.number);
}

function scrollSliderBack() {
    currentItem_FAV.showtime = 0;
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
    currentItem_FAV.number = currentItem_FAV.number === 0 ? 2 : currentItem_FAV.number - 1;
    sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
    // console.log('scrollSliderBack', 'currentItem_FAV.number =', currentItem_FAV.number);
}

function holdScrolling() {
    clearInterval(currentItem_FAV.bulletTimerID);
    clearInterval(currentItem_FAV.itemTimerID);
    scrollOnHold = true;
    // console.log('sholdScrollin', 'currentItem_FAV.number =', currentItem_FAV.number);
}

function resumeScrolling(scrollToNext, scroller) {
    currentItem_FAV.bulletTimerID = setInterval(() => {
        updateBulletState();
    }, bulUpdateInterval * 1000);

    setTimeout(()=>{
        clearInterval(currentItem_FAV.bulletTimerID);
        scrollToNext();
        scroller();
    }, (scrollInterval - currentItem_FAV.showtime) * 1000);
}

sliderItem[0].addEventListener('mouseover', () => {holdScrolling()});
sliderItem[0].addEventListener('mouseleave', () => {resumeScrolling(scrollSlider, scroller);});

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

sliderItem[1].addEventListener('mouseover', () => {holdScrolling()});
sliderItem[1].addEventListener('mouseleave', () => {resumeScrolling(scrollSlider, scroller);});

sliderItem[2].addEventListener('mouseover', () => {holdScrolling()});
sliderItem[2].addEventListener('mouseleave', () => {resumeScrolling(scrollSlider, scroller);});

leftBTN_FAV.addEventListener('click', scrollSliderBack, false);
rightBTN_FAV.addEventListener('click', scrollSlider, false);

// Swipe section

let x1 = 0;
let x2 = 0;

sliderItemWrapper.addEventListener('touchstart', (event) => {
    x1 = event.touches[0].clientX;
    console.log('touch at x1 ', x1);
    sliderItemWrapper.addEventListener('touchmove', (event) => {
        event.preventDefault();
        x2 = event.touches[0].clientX;
    }, false);

    sliderItemWrapper.addEventListener('touchend', (event) => {

        if (x2 - x1 > 20) {
            console.log('scroll right');
            scrollSlider();

        }
        if (x2 - x1 < 20) {
            console.log('scroll left');
            scrollSliderBack();

        }
        console.log('move to x2 ', x2);
    }, false);
    
}, false);
