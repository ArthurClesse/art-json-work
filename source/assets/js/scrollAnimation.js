window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {

    let elements = document.querySelectorAll('.list-artwork__item');

    elements.forEach(element => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const boxTop = element.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            element.classList.add('scrolled');
        }
    })
}

setTimeout(checkBoxes, 100);