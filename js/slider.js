const buttons = document.querySelectorAll('.banner button');
const slider = document.querySelector('.banner .slider-wrap');
let animationComplete = true;

function slideRight() {
    if (slider.classList.contains('left')) {
        slider.classList.remove('left');
        slider.classList.add('middle')
    } else if (slider.classList.contains('middle')) {
        slider.classList.remove('middle');
        slider.classList.add('right')
    } else {
        slider.classList.remove('right');
        slider.classList.add('left')
    }
}

function SlideLeft() {
    if (slider.classList.contains('left')) {
        slider.classList.remove('left');
        slider.classList.add('right')
    } else if (slider.classList.contains('middle')) {
        slider.classList.remove('middle');
        slider.classList.add('left')
    } else {
        slider.classList.remove('right');
        slider.classList.add('middle')
    }
}

function animationCounter() {
    animationComplete = true;
}
let slideTimer = setInterval(slideRight, 5000);

buttons.forEach(button => button.addEventListener('click', function () {
    if (animationComplete) {
        animationComplete = false;
        setTimeout(animationCounter, 700);
        if (this.classList.contains('arrow-right')) {
            slideRight();
            clearInterval(slideTimer);
            slideTimer = setInterval(slideRight, 5000);
        } else {
            SlideLeft();
            clearInterval(slideTimer);
            slideTimer = setInterval(slideRight, 5000);
        }
    }
}))