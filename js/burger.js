const burger = document.querySelector('header .burger');
const nav = document.querySelector('header nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    this.classList.toggle('active');
})