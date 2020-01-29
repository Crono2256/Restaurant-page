const btnMenu = document.querySelector('.menu-main button');
const btnArrow = document.querySelector('.menu-main button i');
const menuOptions = document.querySelector('.menu-options');
const optionsList = document.querySelectorAll('.menu-options li');
const menuMeals = document.querySelectorAll('.menu-main .meals ul');

function showOptions() {
    menuOptions.classList.toggle('active');
    btnArrow.classList.toggle('fa-chevron-down');
    btnArrow.classList.toggle('fa-chevron-up');
}

function changeOption() {
    btnMenu.querySelector('span').textContent = this.textContent;
    menuMeals.forEach(list => {
        if (list.classList.contains('active')) {
            list.classList.remove('active')
        }
        if (list.classList.contains(this.textContent.toLowerCase())) {
            list.classList.add('active');
        }
    })
    showOptions();
    // console.log(this);
}

btnMenu.addEventListener('click', showOptions);
optionsList.forEach(option => option.addEventListener('click', changeOption));