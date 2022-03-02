const btnFilter = document.querySelector(".filter__input");
const filter = document.querySelector(".filter");

btnFilter.addEventListener('click', () => {
        filter.classList.toggle("-open");
        document.body.classList.toggle("no-scroll");
});



function filterProduct(value) {
    const elements = document.querySelectorAll('.list-artwork__item');
    elements.forEach(element => {
        if(element.classList.contains(value)){
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    })
}

