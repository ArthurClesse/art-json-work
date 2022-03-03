const btnFilter = document.querySelector(".filter__input");
const filter = document.querySelector(".filter");
const buttons = document.querySelectorAll('.button-category');
const categoryButtons = document.querySelectorAll(".filter__el");

btnFilter.addEventListener('click', () => {
        filter.classList.toggle("-open");
        document.body.classList.toggle("no-scroll");
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        filter.classList.remove("-open");
        document.body.classList.remove("no-scroll");
        if (button.getAttribute('data-category') === 'All') {
            filterProduct("All");
        }
        else if (button.getAttribute('data-category') === 'Portrait'){
            filterProduct("Portrait");
        }
        else if (button.getAttribute('data-category') === 'Architecture'){
            filterProduct("Architecture");
        }
        else if (button.getAttribute('data-category') === 'Abstract') {
            filterProduct("Abstract");
        }
    })
})


function filterProduct(value) {
    const elements = document.querySelectorAll('.list-artwork__item');
    elements.forEach(element => {
        if (value == "All") {
            element.classList.add("show");
        } else {
            if(!element.classList.contains(value)){
                element.classList.remove("show");
            } else {
                element.classList.add("show");
            }
        }
    })
}
categoryButtons.forEach( categoryButton => {
    categoryButton.addEventListener('click', () => {
        categoryButton.classList.toggle("-open");
    })
})

