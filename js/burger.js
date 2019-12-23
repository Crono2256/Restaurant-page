const burger = document.querySelector('header .burger');

burger.addEventListener('click', function () {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
    this.classList.toggle('active');
})