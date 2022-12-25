const sliderLine = document.querySelector('.slider-line');

const SLIDE_WIDTH = 256;
const SLIDER_LENGTH = sliderLine.children.length;
const MOVE_SIZE = 30;
let currentSlideItem = 0;

// let defaultInterval = slideWithInterval();

function move(x) {
    sliderLine.style.left = `${x}px`;
}

function moveToIndex(slideIndex) {
    // clearInterval(defaultInterval);

    if (slideIndex < 0) {
        return;
    }

    if (slideIndex + 1 > SLIDER_LENGTH) {
        slideIndex = 0;
    }

    sliderLine.style.transition = 'all ease-in .3s';
    move(-(SLIDE_WIDTH * slideIndex));
    currentSlideItem = slideIndex;

    // defaultInterval = slideWithInterval();
}

function slideWithInterval() {
    return setInterval(() => {
        moveToIndex(++currentSlideItem);
    }, 3000);
};

document.querySelector('.slider-next').addEventListener('click', function(){
    moveToIndex(++currentSlideItem);
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    moveToIndex(--currentSlideItem);
});

sliderLine.addEventListener('mouseover', () => {
    // clearInterval(defaultInterval);
});

sliderLine.addEventListener('mouseleave', () => {
    // defaultInterval = slideWithInterval();
});

let isMouseDown = false,
    initialPointer = 0,
    difference = 0;

document.addEventListener('mousedown', function(e) {
    isMouseDown = true;

    initialPointer = e.clientX;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;

    if (difference < 0 && Math.abs(difference) > MOVE_SIZE) {
        moveToIndex(++currentSlideItem);
        return;
    } else if (difference > 0 && difference > MOVE_SIZE && currentSlideItem > 0) {
        moveToIndex(--currentSlideItem);
        return;
    }

    move(-(SLIDE_WIDTH * currentSlideItem));
});

sliderLine.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        sliderLine.style.transition = 'none';

        const currentPosition = -(SLIDE_WIDTH * currentSlideItem);
        
        difference = e.clientX - initialPointer;
        
        move(currentPosition + difference);
    }
});



document.createElement('span', {
    class: 'fdsfsd',
})

document.create

document.querySelector('.container').innerHTML = '<span class="fdsfsd">fsdfsd</span>';

