const contactBtns = document.querySelectorAll('.contactBtn');

function scrollToBottom() {
    const pageHeight = document.documentElement.offsetHeight;
    console.log('funkcja wykonuje się')

    document.documentElement.scrollTop += 20;
    if (document.documentElement.scrollTop < pageHeight - window.innerHeight) {
        setTimeout(scrollToBottom, 5);
    } else document.documentElement.scrollTop = pageHeight - window.innerHeight;
}

contactBtns.forEach(contactBtn => contactBtn.addEventListener('click', scrollToBottom))