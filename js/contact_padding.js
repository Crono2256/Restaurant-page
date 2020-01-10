const headWidth = document.querySelector('.contact h2 span').offsetWidth;
const infos = document.querySelector('.contact .info');

function addPadding() {
    const paddingLeft = (window.innerWidth - headWidth) / 2;
    infos.style.paddingLeft = paddingLeft + 'px';
}

addPadding();

window.addEventListener('resize', addPadding);