const bannBtm = document.querySelector('.banner-bottom');
let offsetPercentage = 0;

// bannBtm.offsetTop = 2010
window.addEventListener('scroll', () => {
    if ((window.scrollY >= bannBtm.offsetTop - window.innerHeight) && (window.scrollY <= bannBtm.offsetTop + bannBtm.offsetHeight)) {
        const changePerPixel = 100 / (window.innerHeight + bannBtm.offsetHeight);
        let posDifference = scrollY - (bannBtm.offsetTop - window.innerHeight);

        offsetPercentage = posDifference * changePerPixel;
        console.log(offsetPercentage);
        bannBtm.style.backgroundPosition = `50% ${offsetPercentage}%`;
    };
})