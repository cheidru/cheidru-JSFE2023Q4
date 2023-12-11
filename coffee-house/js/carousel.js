// Carousel elements are automatically scroll to the left with 
// a specified time interval by default. The time interval duration 
// is at the student's choose, but the recommended value is 5-7 seconds

// The current state until the next automatic switch is shown in 
// the progress bar of the corresponding slide by filling it with color
// When hovering the mouse or touch-and-hold on the displayed carousel element, 
// the time to the element switch is paused. When the mouse cursor moves out, 
// or the hold ends, the time continues from where it stopped

// The switch slides is accompanied by like the carousel animation 
// (the method of animation execution is not verified) ???

// Manual switching in the corresponding direction is implemented by 
// pressing left arrow button or right arrow button
// For mobile devices, manual switching in the corresponding direction 
// is additionally implemented by swiping left or right
// When manually switching, the progress bar state of the switched slide resets, 
// and the progress bar of the displayed slide starts to fill

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
    console.log('scroller started', 'currentItem_FAV.number =', currentItem_FAV.number);
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
    console.log('scrollSlider', 'currentItem_FAV.number =', currentItem_FAV.number);
}

function scrollSliderBack() {
    currentItem_FAV.showtime = 0;
    bullet_FAV[currentItem_FAV.number].style.background = 'var(--border-light)';
    currentItem_FAV.number = currentItem_FAV.number === 0 ? 2 : currentItem_FAV.number - 1;
    sliderItemWrapper.style.transform = `translateX(${currentItem_FAV.number * -33.3}%)`;
    console.log('scrollSliderBack', 'currentItem_FAV.number =', currentItem_FAV.number);
}

function holdScrolling() {
    clearInterval(currentItem_FAV.bulletTimerID);
    clearInterval(currentItem_FAV.itemTimerID);
    scrollOnHold = true;
    console.log('sholdScrollin', 'currentItem_FAV.number =', currentItem_FAV.number);
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

leftBTN_FAV.addEventListener('click', () =>{scrollSliderBack();});
rightBTN_FAV.addEventListener('click', () => {scrollSlider();});

