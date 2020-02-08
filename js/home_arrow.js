const arrow = document.querySelector("footer .arrow-up");
let active = false;

function showArrow() {
    if (window.scrollY > 500 && !active) {
        active = !active;
        arrow.classList.add('active')
    } else if (window.scrollY == 0 && active) {
        active = !active;
        arrow.classList.remove('active');
    }
}

function returnHome() {
    document.documentElement.scrollTop -= 20;
    if (document.documentElement.scrollTop > 0) {
        setTimeout(returnHome, 5);
    } else document.documentElement.scrollTop = 0;
}

arrow.addEventListener('click', returnHome);
window.addEventListener('scroll', showArrow);