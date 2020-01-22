const btnMenu = document.querySelector('.menu-main button');
const menuOptions = document.querySelector('.menu-options');
const optionsList = document.querySelectorAll('.menu-options li');

function showOptions() {
    menuOptions.classList.toggle('active');
}

function changeOption() {
    btnMenu.querySelector('span').textContent = this.textContent;
    // console.log(this);
}

btnMenu.addEventListener('click', showOptions);
optionsList.forEach(option => option.addEventListener('click', changeOption));